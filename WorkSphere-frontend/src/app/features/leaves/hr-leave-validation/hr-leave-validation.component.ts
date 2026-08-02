import { Component } from '@angular/core';
import { LeaveValidationComponent } from '../leave-validation/leave-validation.component';

@Component({
  selector: 'app-hr-leave-validation',
  standalone: true,
  imports: [LeaveValidationComponent],
  template: `<app-leave-validation queue="rh" />`,
})
export class HrLeaveValidationComponent {}
