import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { clearAuthGuard } from './core/guards/clear-auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [clearAuthGuard],
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'login',
    canActivate: [clearAuthGuard],
    loadComponent: () => import('./features/auth/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'activate',
    canActivate: [clearAuthGuard],
    loadComponent: () => import('./features/auth/activate-account/activate-account.component').then((m) => m.ActivateAccountComponent)
  },
  {
    path: 'register-company',
    canActivate: [clearAuthGuard],
    loadComponent: () => import('./features/auth/register-company/register-company.component').then((m) => m.RegisterCompanyComponent)
  },
  {
    path: 'forgot-password',
    canActivate: [clearAuthGuard],
    loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent)
  },
  {
    path: 'reset-password',
    canActivate: [clearAuthGuard],
    loadComponent: () => import('./features/auth/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent)
  },
  {
    path: 'tasks/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./features/shared/tasks/task-detail/task-detail.component').then((m) => m.TaskDetailComponent),
    data: { breadcrumb: 'Tâche' }
  },
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['HR_ADMIN'] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/dashboard/dashboard.component').then((m) => m.AdminDashboardComponent),
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'employees',
        loadComponent: () => import('./features/admin/employee-list/employee-list.component').then((m) => m.EmployeeListComponent),
        data: { breadcrumb: 'Employés' }
      },
      {
        path: 'employees/import',
        loadComponent: () => import('./features/admin/employee-import/employee-import.component').then((m) => m.EmployeeImportComponent),
        data: { breadcrumb: 'Import employés' }
      },
      {
        path: 'company',
        loadComponent: () => import('./features/admin/company-settings/company-settings.component').then((m) => m.CompanySettingsComponent),
        data: { breadcrumb: 'Entreprise' }
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/admin/settings/settings.component').then((m) => m.AdminSettingsComponent),
        data: { breadcrumb: 'Paramètres' }
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/projects/project-list/project-list.component').then((m) => m.ProjectListComponent),
        data: { breadcrumb: 'Projets' }
      },
      {
        path: 'projects/new',
        loadComponent: () => import('./features/projects/project-form/project-form.component').then((m) => m.ProjectFormComponent),
        data: { breadcrumb: 'Nouveau projet' }
      },
      {
        path: 'projects/:id',
        loadComponent: () => import('./features/projects/project-detail/project-detail.component').then((m) => m.ProjectDetailComponent),
        data: { breadcrumb: 'Projet' }
      },
      {
        path: 'projects/:id/edit',
        loadComponent: () => import('./features/projects/project-form/project-form.component').then((m) => m.ProjectFormComponent),
        data: { breadcrumb: 'Modifier projet' }
      },
      {
        path: 'requests',
        loadComponent: () => import('./features/shared/service-requests/request-list/request-list.component').then((m) => m.RequestListComponent),
        data: { breadcrumb: 'Demandes' }
      },
      {
        path: 'requests/new',
        loadComponent: () => import('./features/shared/service-requests/request-form/request-form.component').then((m) => m.RequestFormComponent),
        data: { breadcrumb: 'Nouvelle demande' }
      },
      {
        path: 'requests/:id',
        loadComponent: () => import('./features/shared/service-requests/request-detail/request-detail.component').then((m) => m.RequestDetailComponent),
        data: { breadcrumb: 'Demande' }
      },
      {
        path: 'announcements',
        loadComponent: () => import('./features/shared/announcements/announcement-feed/announcement-feed.component').then((m) => m.AnnouncementFeedComponent),
        data: { breadcrumb: 'Annonces' }
      },
      {
        path: 'announcements/new',
        loadComponent: () => import('./features/shared/announcements/announcement-form/announcement-form.component').then((m) => m.AnnouncementFormComponent),
        data: { breadcrumb: 'Nouvelle annonce' }
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/shared/profile/profile.component').then((m) => m.ProfileComponent),
        data: { breadcrumb: 'Profil' }
      },
      {
        path: 'attendance',
        loadComponent: () => import('./features/attendance/hr-attendance-layout/hr-attendance-layout.component').then((m) => m.HrAttendanceLayoutComponent),
        data: { breadcrumb: 'Présences' },
        children: [
          { path: 'validation', loadComponent: () => import('./features/attendance/hr-attendance-validation/hr-attendance-validation.component').then((m) => m.HrAttendanceValidationComponent), data: { breadcrumb: 'Validation' } },
          { path: 'today', loadComponent: () => import('./features/attendance/hr-attendance-today/hr-attendance-today.component').then((m) => m.HrAttendanceTodayComponent), data: { breadcrumb: "Aujourd'hui" } },
          { path: 'history', loadComponent: () => import('./features/attendance/hr-attendance-history/hr-attendance-history.component').then((m) => m.HrAttendanceHistoryComponent), data: { breadcrumb: 'Historique' } },
          { path: 'monthly', loadComponent: () => import('./features/attendance/hr-attendance-monthly/hr-attendance-monthly.component').then((m) => m.HrAttendanceMonthlyComponent), data: { breadcrumb: 'Résumé mensuel' } },
          { path: '', redirectTo: 'validation', pathMatch: 'full' },
        ]
      },
      {
        path: 'hr/leaves',
        loadComponent: () => import('./features/leaves/hr-leaves-layout/hr-leaves-layout.component').then((m) => m.HrLeavesLayoutComponent),
        data: { breadcrumb: 'Congés' },
        children: [
          { path: 'validation', loadComponent: () => import('./features/leaves/hr-leave-validation/hr-leave-validation.component').then((m) => m.HrLeaveValidationComponent), data: { breadcrumb: 'Validation congés' } },
          { path: 'history', loadComponent: () => import('./features/leaves/hr-leave-history/hr-leave-history.component').then((m) => m.HrLeaveHistoryComponent), data: { breadcrumb: 'Historique congés' } },
          { path: 'balances', loadComponent: () => import('./features/leaves/hr-leave-balances/hr-leave-balances.component').then((m) => m.HrLeaveBalancesComponent), data: { breadcrumb: 'Balances équipe' } },
          { path: 'holidays', loadComponent: () => import('./features/leaves/public-holidays/public-holidays.component').then((m) => m.PublicHolidaysComponent), data: { breadcrumb: 'Jours fériés' } },
          { path: '', redirectTo: 'validation', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'manager',
    loadComponent: () => import('./layouts/manager-layout/manager-layout.component').then((m) => m.ManagerLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['MANAGER'] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/manager/dashboard/dashboard.component').then((m) => m.ManagerDashboardComponent),
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'team',
        loadComponent: () => import('./features/manager/team/team.component').then((m) => m.ManagerTeamComponent),
        data: { breadcrumb: 'Mon équipe' }
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/projects/project-list/project-list.component').then((m) => m.ProjectListComponent),
        data: { breadcrumb: 'Projets' }
      },
      {
        path: 'projects/new',
        loadComponent: () => import('./features/projects/project-form/project-form.component').then((m) => m.ProjectFormComponent),
        data: { breadcrumb: 'Nouveau projet' }
      },
      {
        path: 'projects/:id',
        loadComponent: () => import('./features/projects/project-detail/project-detail.component').then((m) => m.ProjectDetailComponent),
        data: { breadcrumb: 'Projet' }
      },
      {
        path: 'projects/:id/edit',
        loadComponent: () => import('./features/projects/project-form/project-form.component').then((m) => m.ProjectFormComponent),
        data: { breadcrumb: 'Modifier projet' }
      },
      {
        path: 'projects/:id/board',
        loadComponent: () => import('./features/shared/tasks/task-kanban/task-board.component').then((m) => m.TaskBoardComponent),
        data: { breadcrumb: 'Tableau Kanban' }
      },
      {
        path: 'projects/:projectId/tasks/new',
        loadComponent: () => import('./features/shared/tasks/task-form/task-form.component').then((m) => m.TaskFormComponent),
        data: { breadcrumb: 'Nouvelle tâche' }
      },
      {
        path: 'requests',
        loadComponent: () => import('./features/shared/service-requests/request-list/request-list.component').then((m) => m.RequestListComponent),
        data: { breadcrumb: 'Demandes' }
      },
      {
        path: 'requests/new',
        loadComponent: () => import('./features/shared/service-requests/request-form/request-form.component').then((m) => m.RequestFormComponent),
        data: { breadcrumb: 'Nouvelle demande' }
      },
      {
        path: 'requests/:id',
        loadComponent: () => import('./features/shared/service-requests/request-detail/request-detail.component').then((m) => m.RequestDetailComponent),
        data: { breadcrumb: 'Demande' }
      },
      {
        path: 'announcements',
        loadComponent: () => import('./features/shared/announcements/announcement-feed/announcement-feed.component').then((m) => m.AnnouncementFeedComponent),
        data: { breadcrumb: 'Annonces' }
      },
      {
        path: 'announcements/new',
        loadComponent: () => import('./features/shared/announcements/announcement-form/announcement-form.component').then((m) => m.AnnouncementFormComponent),
        data: { breadcrumb: 'Nouvelle annonce' }
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/shared/profile/profile.component').then((m) => m.ProfileComponent),
        data: { breadcrumb: 'Profil' }
      },
      {
        path: 'attendance',
        loadComponent: () => import('./features/attendance/team-attendance-layout/team-attendance-layout.component').then((m) => m.TeamAttendanceLayoutComponent),
        data: { breadcrumb: 'Présences' },
        children: [
          { path: 'validation', loadComponent: () => import('./features/attendance/team-attendance-validation/team-attendance-validation.component').then((m) => m.TeamAttendanceValidationComponent), data: { breadcrumb: 'Validation' } },
          { path: 'today', loadComponent: () => import('./features/attendance/team-attendance-today/team-attendance-today.component').then((m) => m.TeamAttendanceTodayComponent), data: { breadcrumb: "Aujourd'hui" } },
          { path: 'history', loadComponent: () => import('./features/attendance/team-attendance-history/team-attendance-history.component').then((m) => m.TeamAttendanceHistoryComponent), data: { breadcrumb: 'Historique' } },
          { path: 'monthly', loadComponent: () => import('./features/attendance/team-attendance-monthly/team-attendance-monthly.component').then((m) => m.TeamAttendanceMonthlyComponent), data: { breadcrumb: 'Résumé mensuel' } },
          { path: '', redirectTo: 'validation', pathMatch: 'full' },
        ]
      },
      {
        path: 'team/leaves',
        loadComponent: () => import('./features/leaves/team-leaves-layout/team-leaves-layout.component').then((m) => m.TeamLeavesLayoutComponent),
        data: { breadcrumb: 'Congés' },
        children: [
          { path: 'validation', loadComponent: () => import('./features/leaves/team-leave-validation/team-leave-validation.component').then((m) => m.TeamLeaveValidationComponent), data: { breadcrumb: 'Validation congés' } },
          { path: 'history', loadComponent: () => import('./features/leaves/team-leave-history/team-leave-history.component').then((m) => m.TeamLeaveHistoryComponent), data: { breadcrumb: 'Historique congés' } },
          { path: 'balances', loadComponent: () => import('./features/leaves/team-leave-balances/team-leave-balances.component').then((m) => m.TeamLeaveBalancesComponent), data: { breadcrumb: 'Balances équipe' } },
          { path: '', redirectTo: 'validation', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'employee',
    loadComponent: () => import('./layouts/employee-layout/employee-layout.component').then((m) => m.EmployeeLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['EMPLOYE'] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/employee/dashboard/dashboard.component').then((m) => m.EmployeeDashboardComponent),
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'tasks',
        loadComponent: () => import('./features/employee/my-tasks/my-tasks.component').then((m) => m.MyTasksComponent),
        data: { breadcrumb: 'Mes tâches' }
      },
      {
        path: 'tasks/:id',
        loadComponent: () => import('./features/shared/tasks/task-detail/task-detail.component').then((m) => m.TaskDetailComponent),
        data: { breadcrumb: 'Tâche' }
      },
      {
        path: 'requests',
        loadComponent: () => import('./features/shared/service-requests/request-list/request-list.component').then((m) => m.RequestListComponent),
        data: { breadcrumb: 'Demandes' }
      },
      {
        path: 'requests/new',
        loadComponent: () => import('./features/shared/service-requests/request-form/request-form.component').then((m) => m.RequestFormComponent),
        data: { breadcrumb: 'Nouvelle demande' }
      },
      {
        path: 'requests/:id',
        loadComponent: () => import('./features/shared/service-requests/request-detail/request-detail.component').then((m) => m.RequestDetailComponent),
        data: { breadcrumb: 'Demande' }
      },
      {
        path: 'announcements',
        loadComponent: () => import('./features/shared/announcements/announcement-feed/announcement-feed.component').then((m) => m.AnnouncementFeedComponent),
        data: { breadcrumb: 'Annonces' }
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/shared/profile/profile.component').then((m) => m.ProfileComponent),
        data: { breadcrumb: 'Profil' }
      },
      {
        path: 'attendance',
        loadComponent: () => import('./features/attendance/employee-attendance-layout/employee-attendance-layout.component').then((m) => m.EmployeeAttendanceLayoutComponent),
        data: { breadcrumb: 'Ma présence' },
        children: [
          { path: 'today', loadComponent: () => import('./features/attendance/attendance-today/attendance-today.component').then((m) => m.AttendanceTodayComponent), data: { breadcrumb: "Aujourd'hui" } },
          { path: 'history', loadComponent: () => import('./features/attendance/attendance-history/attendance-history.component').then((m) => m.AttendanceHistoryComponent), data: { breadcrumb: 'Historique' } },
          { path: 'summary', loadComponent: () => import('./features/attendance/attendance-monthly-summary/attendance-monthly-summary.component').then((m) => m.AttendanceMonthlySummaryComponent), data: { breadcrumb: 'Résumé du mois' } },
          { path: '', redirectTo: 'today', pathMatch: 'full' },
        ]
      },
      {
        path: 'leaves',
        loadComponent: () => import('./features/leaves/leaves-layout/leaves-layout.component').then((m) => m.LeavesLayoutComponent),
        data: { breadcrumb: 'Congés' },
        children: [
          { path: 'request', loadComponent: () => import('./features/leaves/leave-request/leave-request.component').then((m) => m.LeaveRequestComponent), data: { breadcrumb: 'Demander un congé' } },
          { path: 'history', loadComponent: () => import('./features/leaves/leave-history/leave-history.component').then((m) => m.LeaveHistoryComponent), data: { breadcrumb: 'Mon historique' } },
          { path: 'balance', loadComponent: () => import('./features/leaves/leave-balance/leave-balance.component').then((m) => m.LeaveBalanceComponent), data: { breadcrumb: 'Mon solde' } },
          { path: '', redirectTo: 'request', pathMatch: 'full' },
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    canActivate: [clearAuthGuard],
    loadComponent: () => import('./shared/components/not-found/not-found.component').then((m) => m.NotFoundComponent)
  }
];
