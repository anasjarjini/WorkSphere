import { Component } from '@angular/core';
import { LeaveBalancesComponent } from '../leave-balances/leave-balances.component';

@Component({
  selector: 'app-team-leave-balances',
  standalone: true,
  imports: [LeaveBalancesComponent],
  template: `<app-leave-balances />`,
})
export class TeamLeaveBalancesComponent {}
