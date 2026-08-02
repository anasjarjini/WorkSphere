import { Component } from '@angular/core';
import { LeaveValidationComponent } from '../leave-validation/leave-validation.component';

@Component({
  selector: 'app-team-leave-validation',
  standalone: true,
  imports: [LeaveValidationComponent],
  template: `<app-leave-validation queue="manager" />`,
})
export class TeamLeaveValidationComponent {}
