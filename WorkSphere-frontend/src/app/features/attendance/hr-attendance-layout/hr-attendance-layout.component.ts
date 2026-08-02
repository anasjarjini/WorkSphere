import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';

@Component({
  selector: 'app-hr-attendance-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hr-attendance-layout.component.html',
})
export class HrAttendanceLayoutComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);

  readonly pendingCount = signal(0);

  ngOnInit(): void {
    this.attendanceService.getDeclarations({ queue: 'rh', validation_status: 'EN_ATTENTE' }).subscribe({
      next: (decls) => this.pendingCount.set(decls.length),
    });
  }
}
