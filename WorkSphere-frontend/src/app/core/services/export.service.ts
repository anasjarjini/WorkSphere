import { Injectable, inject } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import JSZip from 'jszip';
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
      const blob = await fetch(`${environment.apiUrl}/company/logo-file`, { credentials: 'include' }).then((r) => {
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
  async xlsx(opts: ExportTableOptions & { filename: string; sheetName?: string }): Promise<void> {
    const rows: string[][] = [
      [this.companyName()],
      [opts.title + (opts.period ? ` — ${opts.period}` : '')],
      [],
      opts.columns,
      ...opts.rows.map((r) => [...r]),
    ];
    const widths = opts.columns.map((col, i) => {
      let max = col.length;
      for (const row of opts.rows) {
        const cell = row[i];
        if (cell) max = Math.max(max, cell.length);
      }
      return Math.min(Math.max(max + 2, 10), 50);
    });
    const columnCount = Math.max(opts.columns.length, 1);
    const sheetName = (opts.sheetName ?? 'Export').replace(/[\\/*?:[\]]/g, ' ').slice(0, 31) || 'Export';
    const zip = new JSZip();

    zip.file('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>`);
    zip.folder('_rels')?.file('.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`);
    zip.folder('xl')?.file('workbook.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="${this.escapeXml(sheetName)}" sheetId="1" r:id="rId1"/></sheets>
</workbook>`);
    zip.folder('xl')?.folder('_rels')?.file('workbook.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`);
    zip.folder('xl')?.file('styles.xml', this.xlsxStyles());

    const columnsXml = widths.map((width, index) =>
      `<col min="${index + 1}" max="${index + 1}" width="${width}" customWidth="1"/>`
    ).join('');
    const rowsXml = rows.map((row, rowIndex) => {
      const cells = row.map((value, columnIndex) => {
        const style = rowIndex === 0 ? 1 : rowIndex === 1 ? 2 : rowIndex === 3 ? 3 : 0;
        const reference = `${this.xlsxColumn(columnIndex)}${rowIndex + 1}`;
        return `<c r="${reference}" t="inlineStr" s="${style}"><is><t xml:space="preserve">${this.escapeXml(value ?? '')}</t></is></c>`;
      }).join('');
      return `<row r="${rowIndex + 1}">${cells}</row>`;
    }).join('');
    const lastColumn = this.xlsxColumn(columnCount - 1);
    zip.folder('xl')?.folder('worksheets')?.file('sheet1.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <cols>${columnsXml}</cols>
  <sheetData>${rowsXml}</sheetData>
  <mergeCells count="2"><mergeCell ref="A1:${lastColumn}1"/><mergeCell ref="A2:${lastColumn}2"/></mergeCells>
</worksheet>`);

    const blob = await zip.generateAsync({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    this.download(blob, opts.filename);
  }

  private xlsxColumn(index: number): string {
    let result = '';
    for (let value = index + 1; value > 0; value = Math.floor((value - 1) / 26)) {
      result = String.fromCharCode(65 + ((value - 1) % 26)) + result;
    }
    return result;
  }

  private escapeXml(value: string): string {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  private xlsxStyles(): string {
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="3">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><b/><sz val="16"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
  </fonts>
  <fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF1E40AF"/><bgColor indexed="64"/></patternFill></fill></fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="4">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"><alignment vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;
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
