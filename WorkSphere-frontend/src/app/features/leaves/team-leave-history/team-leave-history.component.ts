import { Component } from '@angular/core';
import { LeaveHistoryComponent } from '../leave-history/leave-history.component';

@Component({
  selector: 'app-team-leave-history',
  standalone: true,
  imports: [LeaveHistoryComponent],
  template: `<app-leave-history scope="team" />`,
})
export class TeamLeaveHistoryComponent {}
