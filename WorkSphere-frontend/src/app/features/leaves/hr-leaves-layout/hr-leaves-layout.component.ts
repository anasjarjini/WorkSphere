import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbsenceService } from '../../../core/services/absence.service';

@Component({
  selector: 'app-hr-leaves-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hr-leaves-layout.component.html',
})
export class HrLeavesLayoutComponent implements OnInit {
  private readonly absenceService = inject(AbsenceService);

  readonly pendingCount = signal(0);

  ngOnInit(): void {
    this.absenceService.getAbsences({ queue: 'rh', status: 'EN_ATTENTE' }).subscribe({
      next: (absences) => this.pendingCount.set(absences.length),
    });
  }
}
