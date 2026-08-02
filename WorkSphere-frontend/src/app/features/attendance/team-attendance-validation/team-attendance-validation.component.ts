import { Component } from '@angular/core';
import { TeamAttendanceApprovalComponent } from '../team-approval/team-approval.component';

@Component({
  selector: 'app-team-attendance-validation',
  standalone: true,
  imports: [TeamAttendanceApprovalComponent],
  templateUrl: './team-attendance-validation.component.html',
})
export class TeamAttendanceValidationComponent {}
