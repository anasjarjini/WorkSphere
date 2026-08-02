import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbsenceService } from '../../../core/services/absence.service';
import { PublicHoliday } from '../../../core/models/public-holiday.model';

@Component({
  selector: 'app-public-holidays',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './public-holidays.component.html',
})
export class PublicHolidaysComponent implements OnInit {
  private readonly absenceService = inject(AbsenceService);

  readonly holidays = signal<PublicHoliday[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly success = signal<string | null>(null);
  readonly adding = signal(false);
  readonly deletingId = signal<number | null>(null);

  readonly name = signal('');
  readonly date = signal('');

  ngOnInit(): void {
    this.loadHolidays();
  }

  private loadHolidays(): void {
    this.loading.set(true);
    this.error.set(null);
    this.absenceService.getHolidays().subscribe({
      next: (holidays) => {
        this.holidays.set(holidays);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Erreur lors du chargement des jours fériés.');
      },
    });
  }

  isCompanyHoliday(holiday: PublicHoliday): boolean {
    return holiday.company_id !== null;
  }

  monthLabel(holiday: PublicHoliday): string {
    return new Date(holiday.date).toLocaleDateString('fr-FR', { month: 'long' });
  }

  monthDay(holiday: PublicHoliday): string {
    return String(new Date(holiday.date).getDate()).padStart(2, '0');
  }

  onSubmit(): void {
    this.error.set(null);
    this.success.set(null);

    if (!this.name().trim() || !this.date()) {
      this.error.set('Veuillez renseigner le nom et la date du jour férié.');
      return;
    }

    this.adding.set(true);
    this.absenceService.createHoliday({ name: this.name().trim(), date: this.date() }).subscribe({
      next: (holiday) => {
        this.holidays.update((list) => [...list, holiday].sort((a, b) => a.date.localeCompare(b.date)));
        this.name.set('');
        this.date.set('');
        this.adding.set(false);
        this.success.set('Jour férié ajouté.');
      },
      error: (err) => {
        this.adding.set(false);
        this.error.set(err.error?.message || 'Erreur lors de l\'ajout du jour férié.');
      },
    });
  }

  onDelete(holiday: PublicHoliday): void {
    if (!this.isCompanyHoliday(holiday)) return;
    this.deletingId.set(holiday.id);
    this.error.set(null);
    this.success.set(null);

    this.absenceService.deleteHoliday(holiday.id).subscribe({
      next: () => {
        this.holidays.update((list) => list.filter((h) => h.id !== holiday.id));
        this.deletingId.set(null);
        this.success.set('Jour férié supprimé.');
      },
      error: (err) => {
        this.deletingId.set(null);
        this.error.set(err.error?.message || 'Erreur lors de la suppression.');
      },
    });
  }
}
