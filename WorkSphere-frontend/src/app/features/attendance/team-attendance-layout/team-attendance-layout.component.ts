import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AttendanceDeclarationService } from '../../../core/services/attendance-declaration.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-team-attendance-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './team-attendance-layout.component.html',
})
export class TeamAttendanceLayoutComponent implements OnInit {
  private readonly attendanceService = inject(AttendanceDeclarationService);
  private readonly authService = inject(AuthService);

  readonly pendingCount = signal(0);

  ngOnInit(): void {
    this.loadPendingCount();
  }

  private loadPendingCount(): void {
    const role = this.authService.currentUser()?.role;
    const queue = role === 'MANAGER' ? 'manager' : 'rh';
    this.attendanceService.getDeclarations({ queue, validation_status: 'EN_ATTENTE' }).subscribe({
      next: (decls) => this.pendingCount.set(decls.length),
    });
  }
}
