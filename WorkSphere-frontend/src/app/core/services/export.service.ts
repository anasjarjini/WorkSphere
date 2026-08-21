import { Injectable, inject } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CompanyService } from './company.service';

export interface ExportTableOptions {
  title: string;
  period?: string;
  columns: string[];
  rows: string[][];
}

const PRIMARY_COLOR: [number, number, number] = [30, 64, 175];

/**
 * Service d'export générique : CSV, Excel (.xlsx) et PDF.
 * Les exports sont marqués au nom et au logo de l'entreprise (ex. "new dev maroc").
 */
@Injectable({ providedIn: 'root' })
export class ExportService {
  private readonly companyService = inject(CompanyService);

  private async ensureCompany(): Promise<void> {
    if (!this.companyService.company()) {
      try {
        await lastValueFrom(this.companyService.getCompany());
      } catch {
        // silencieux : fallback sur le nom générique
      }
    }
  }

  private companyName(): string {
    return this.companyService.company()?.name?.trim() || 'WorkSphere';
  }

  /**
   * Récupère le logo de l'entreprise via l'API (endpoint auth + CORS)
   * et le convertit en dataURL pour l'embarquer dans le PDF.
   */
  private async logoDataUrl(): Promise<string | null> {
    try {
      await this.ensureCompany();
      if (!this.companyService.company()?.logo) return null;
      const token = sessionStorage.getItem('auth_token');
      const headers: Record<string, string> = {};
      if (token) headers['Authorization'] = `Bearer ${token}`;
      const blob = await fetch(`${environment.apiUrl}/company/logo-file`, { headers }).then((r) => {
        if (!r.ok) throw new Error('Logo introuvable');
        return r.blob();
      });
      return await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
    } catch {
      return null;
    }
  }

  private escapeCsv(value: string): string {
    const v = String(value ?? '');
    return /[",\n;]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
  }

  /**
   * Export CSV (UTF-8 avec BOM pour un affichage correct dans Excel).
   */
  csv(filename: string, columns: string[], rows: string[][], meta?: { title?: string; period?: string }): void {
    const lines: string[] = [this.escapeCsv(this.companyName())];
    const subtitle = [meta?.title, meta?.period].filter(Boolean).join(' — ');
    if (subtitle) lines.push(this.escapeCsv(subtitle));
    lines.push('');
    lines.push(columns.map((c) => this.escapeCsv(c)).join(','));
    for (const row of rows) {
      lines.push(row.map((cell) => this.escapeCsv(cell)).join(','));
    }
    const blob = new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
    this.download(blob, filename);
  }

  /**
   * Export PDF : en-tête avec logo de l'entreprise, tableau et pied de page.
   */
  async pdf(opts: ExportTableOptions & { filename: string; subtitle?: string }): Promise<void> {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 14;

    const logo = await this.logoDataUrl();
    const brand = this.companyName();

    let headerX = margin;
    if (logo) {
      const format = logo.startsWith('data:image/png') ? 'PNG' : logo.startsWith('data:image/jpeg') || logo.startsWith('data:image/jpg') ? 'JPEG' : 'PNG';
      try {
        doc.addImage(logo, format, margin, 12, 14, 14);
        headerX = margin + 18;
      } catch {
        // logo illisible : on garde uniquement le nom de l'entreprise
      }
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...PRIMARY_COLOR);
    doc.text(brand, headerX, 18);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(30, 41, 59);
    doc.text(opts.title, margin, 27);

    const metaLine = [opts.subtitle, opts.period].filter(Boolean).join(' — ');
    if (metaLine) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(100, 116, 139);
      doc.text(metaLine, margin, 32);
    }
    doc.setDrawColor(...PRIMARY_COLOR);
    doc.setLineWidth(0.8);
    doc.line(margin, 35.5, pageWidth - margin, 35.5);

    autoTable(doc, {
      head: [opts.columns],
      body: opts.rows.map((r) => r.map((c) => c ?? '')),
      startY: 40,
      margin: { left: margin, right: margin },
      styles: { font: 'helvetica', fontSize: 8.5, cellPadding: 2.2, textColor: [51, 65, 85] },
      headStyles: { fillColor: PRIMARY_COLOR as unknown as string, textColor: 255, fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [239, 246, 255] },
      columnStyles: {},
    });

    const pageCount = doc.getNumberOfPages();
    const footerDate = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(`Généré le ${footerDate} — ${brand} — WorkSphere`, margin, 287);
      doc.text(`Page ${i} / ${pageCount}`, pageWidth - margin, 287, { align: 'right' });
    }

    doc.save(opts.filename);
  }

  /**
   * Export Excel (.xlsx) : bloc en-tête société + titre + tableau.
   */
  xlsx(opts: ExportTableOptions & { filename: string; sheetName?: string }): void {
    const headerRow = [opts.title + (opts.period ? ` — ${opts.period}` : '')];
    const aoa: (string | number)[][] = [
      [this.companyName()],
      headerRow,
      [],
      opts.columns,
      ...opts.rows.map((r) => [...r]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(aoa);
    const widths = opts.columns.map((col, i) => {
      let max = col.length;
      for (const row of opts.rows) {
        const cell = row[i];
        if (cell) max = Math.max(max, cell.length);
      }
      return { wch: Math.min(Math.max(max + 2, 10), 50) };
    });
    ws['!cols'] = widths;
    ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: opts.columns.length - 1 } }];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, opts.sheetName ?? 'Export');
    XLSX.writeFile(wb, opts.filename);
  }

  private download(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
