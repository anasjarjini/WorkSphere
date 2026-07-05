import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'activate',
    loadComponent: () => import('./features/auth/activate-account/activate-account.component').then((m) => m.ActivateAccountComponent)
  },
  {
    path: 'register-company',
    loadComponent: () => import('./features/auth/register-company/register-company.component').then((m) => m.RegisterCompanyComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./features/auth/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['administrateur_rh'] },
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
        path: 'settings',
        loadComponent: () => import('./features/admin/settings/settings.component').then((m) => m.AdminSettingsComponent),
        data: { breadcrumb: 'Paramètres' }
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/shared/profile/profile.component').then((m) => m.ProfileComponent),
        data: { breadcrumb: 'Profil' }
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'manager',
    loadComponent: () => import('./layouts/manager-layout/manager-layout.component').then((m) => m.ManagerLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['manager'] },
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
        path: 'profile',
        loadComponent: () => import('./features/shared/profile/profile.component').then((m) => m.ProfileComponent),
        data: { breadcrumb: 'Profil' }
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'employee',
    loadComponent: () => import('./layouts/employee-layout/employee-layout.component').then((m) => m.EmployeeLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ['employe'] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/employee/dashboard/dashboard.component').then((m) => m.EmployeeDashboardComponent),
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/shared/profile/profile.component').then((m) => m.ProfileComponent),
        data: { breadcrumb: 'Profil' }
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found.component').then((m) => m.NotFoundComponent)
  }
];
