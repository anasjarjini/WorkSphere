import {
  ToastService
} from "./chunk-4PEYXIMQ.js";
import {
  ThemeService
} from "./chunk-XGPRFJMR.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-ZEAXW3MP.js";
import {
  registerLocaleData
} from "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-N72M47JO.js";
import {
  Component,
  LOCALE_ID,
  catchError,
  inject,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZST2RCVM.js";

// node_modules/@angular/common/locales/fr.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 0 || i === 1)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var fr_default = ["fr", [["AM", "PM"]], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "f\xE9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."], ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant J\xE9sus-Christ", "apr\xE8s J\xE9sus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", u, u], [",", "\u202F", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "ARS": ["$AR", "$"], "AUD": ["$AU", "$"], "BEF": ["FB"], "BMD": ["$BM", "$"], "BND": ["$BN", "$"], "BYN": [u, "\u0440."], "BZD": ["$BZ", "$"], "CAD": ["$CA", "$"], "CLP": ["$CL", "$"], "CNY": [u, "\xA5"], "COP": ["$CO", "$"], "CYP": ["\xA3CY"], "EGP": [u, "\xA3E"], "FJD": ["$FJ", "$"], "FKP": ["\xA3FK", "\xA3"], "FRF": ["F"], "GBP": ["\xA3GB", "\xA3"], "GIP": ["\xA3GI", "\xA3"], "HKD": [u, "$"], "IEP": ["\xA3IE"], "ILP": ["\xA3IL"], "ITL": ["\u20A4IT"], "JPY": [u, "\xA5"], "KMF": [u, "FC"], "LBP": ["\xA3LB", "\xA3L"], "MTP": ["\xA3MT"], "MXN": ["$MX", "$"], "NAD": ["$NA", "$"], "NIO": [u, "$C"], "NZD": ["$NZ", "$"], "PHP": [u, "\u20B1"], "RHD": ["$RH"], "RON": [u, "L"], "RWF": [u, "FR"], "SBD": ["$SB", "$"], "SGD": ["$SG", "$"], "SRD": ["$SR", "$"], "TOP": [u, "$T"], "TTD": ["$TT", "$"], "TWD": [u, "NT$"], "USD": ["$US", "$"], "UYU": ["$UY", "$"], "WST": ["$WS"], "XCD": [u, "$"], "XPF": ["FCFP"], "ZMW": [u, "Kw"] }, "ltr", plural];

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.authReady()) {
    return true;
  }
  if (authService.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/role.guard.ts
var roleGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.authReady()) {
    return true;
  }
  const user = authService.currentUser();
  if (!authService.isAuthenticated() || !user) {
    return router.createUrlTree(["/login"]);
  }
  const expectedRoles = route.data["roles"] || [];
  const userRole = user.role || "";
  if (expectedRoles.includes(userRole)) {
    return true;
  }
  const redirectPath = authService.getRedirectPathForRole(userRole);
  return router.createUrlTree([redirectPath]);
};

// src/app/core/guards/clear-auth.guard.ts
var clearAuthGuard = () => {
  const authService = inject(AuthService);
  if (authService.hasToken()) {
    authService.clearSession();
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    canActivate: [clearAuthGuard],
    loadComponent: () => import("./chunk-23WYUPMB.js").then((m) => m.HomeComponent)
  },
  {
    path: "login",
    canActivate: [clearAuthGuard],
    loadComponent: () => import("./chunk-L5H5KAKN.js").then((m) => m.LoginComponent)
  },
  {
    path: "activate",
    canActivate: [clearAuthGuard],
    loadComponent: () => import("./chunk-JLA2HWJY.js").then((m) => m.ActivateAccountComponent)
  },
  {
    path: "register-company",
    canActivate: [clearAuthGuard],
    loadComponent: () => import("./chunk-WE5RQNSD.js").then((m) => m.RegisterCompanyComponent)
  },
  {
    path: "forgot-password",
    canActivate: [clearAuthGuard],
    loadComponent: () => import("./chunk-X5LGRZV3.js").then((m) => m.ForgotPasswordComponent)
  },
  {
    path: "reset-password",
    canActivate: [clearAuthGuard],
    loadComponent: () => import("./chunk-XIWJJKXA.js").then((m) => m.ResetPasswordComponent)
  },
  {
    path: "tasks/:id",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-47O5JOCU.js").then((m) => m.TaskDetailComponent),
    data: { breadcrumb: "T\xE2che" }
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-NLGPYVPA.js").then((m) => m.AdminLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["HR_ADMIN"] },
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-BKNP7G7Q.js").then((m) => m.AdminDashboardComponent),
        data: { breadcrumb: "Dashboard" }
      },
      {
        path: "employees",
        loadComponent: () => import("./chunk-XWOOHKID.js").then((m) => m.EmployeeListComponent),
        data: { breadcrumb: "Employ\xE9s" }
      },
      {
        path: "employees/import",
        loadComponent: () => import("./chunk-JX2TSURM.js").then((m) => m.EmployeeImportComponent),
        data: { breadcrumb: "Import employ\xE9s" }
      },
      {
        path: "company",
        loadComponent: () => import("./chunk-IRBDLWXY.js").then((m) => m.CompanySettingsComponent),
        data: { breadcrumb: "Entreprise" }
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-35WKJGA4.js").then((m) => m.AdminSettingsComponent),
        data: { breadcrumb: "Param\xE8tres" }
      },
      {
        path: "projects",
        loadComponent: () => import("./chunk-DCC2BLT4.js").then((m) => m.ProjectListComponent),
        data: { breadcrumb: "Projets" }
      },
      {
        path: "projects/new",
        loadComponent: () => import("./chunk-HUPBL5CI.js").then((m) => m.ProjectFormComponent),
        data: { breadcrumb: "Nouveau projet" }
      },
      {
        path: "projects/:id",
        loadComponent: () => import("./chunk-KLVHEYFH.js").then((m) => m.ProjectDetailComponent),
        data: { breadcrumb: "Projet" }
      },
      {
        path: "projects/:id/edit",
        loadComponent: () => import("./chunk-HUPBL5CI.js").then((m) => m.ProjectFormComponent),
        data: { breadcrumb: "Modifier projet" }
      },
      {
        path: "requests",
        loadComponent: () => import("./chunk-ZECCIG3K.js").then((m) => m.RequestListComponent),
        data: { breadcrumb: "Demandes" }
      },
      {
        path: "requests/new",
        loadComponent: () => import("./chunk-ZLOQ7DM5.js").then((m) => m.RequestFormComponent),
        data: { breadcrumb: "Nouvelle demande" }
      },
      {
        path: "requests/:id",
        loadComponent: () => import("./chunk-C5H2ULE6.js").then((m) => m.RequestDetailComponent),
        data: { breadcrumb: "Demande" }
      },
      {
        path: "announcements",
        loadComponent: () => import("./chunk-KY2CJ64W.js").then((m) => m.AnnouncementFeedComponent),
        data: { breadcrumb: "Annonces" }
      },
      {
        path: "announcements/new",
        loadComponent: () => import("./chunk-NOXYNFZX.js").then((m) => m.AnnouncementFormComponent),
        data: { breadcrumb: "Nouvelle annonce" }
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-R233SEQC.js").then((m) => m.ProfileComponent),
        data: { breadcrumb: "Profil" }
      },
      {
        path: "attendance",
        loadComponent: () => import("./chunk-YHM3GUPI.js").then((m) => m.HrAttendanceLayoutComponent),
        data: { breadcrumb: "Pr\xE9sences" },
        children: [
          { path: "validation", loadComponent: () => import("./chunk-RTC4UMMN.js").then((m) => m.HrAttendanceValidationComponent), data: { breadcrumb: "Validation" } },
          { path: "today", loadComponent: () => import("./chunk-KOG7PWAK.js").then((m) => m.HrAttendanceTodayComponent), data: { breadcrumb: "Aujourd'hui" } },
          { path: "history", loadComponent: () => import("./chunk-AWHC5IMF.js").then((m) => m.HrAttendanceHistoryComponent), data: { breadcrumb: "Historique" } },
          { path: "monthly", loadComponent: () => import("./chunk-VRPJPZYD.js").then((m) => m.HrAttendanceMonthlyComponent), data: { breadcrumb: "R\xE9sum\xE9 mensuel" } },
          { path: "", redirectTo: "validation", pathMatch: "full" }
        ]
      },
      {
        path: "hr/leaves",
        loadComponent: () => import("./chunk-6MIPJKFK.js").then((m) => m.HrLeavesLayoutComponent),
        data: { breadcrumb: "Cong\xE9s" },
        children: [
          { path: "validation", loadComponent: () => import("./chunk-JECRMPAD.js").then((m) => m.HrLeaveValidationComponent), data: { breadcrumb: "Validation cong\xE9s" } },
          { path: "history", loadComponent: () => import("./chunk-ZZYPJ7XE.js").then((m) => m.HrLeaveHistoryComponent), data: { breadcrumb: "Historique cong\xE9s" } },
          { path: "balances", loadComponent: () => import("./chunk-5OA3AU7W.js").then((m) => m.HrLeaveBalancesComponent), data: { breadcrumb: "Balances \xE9quipe" } },
          { path: "holidays", loadComponent: () => import("./chunk-BWZOBY75.js").then((m) => m.PublicHolidaysComponent), data: { breadcrumb: "Jours f\xE9ri\xE9s" } },
          { path: "", redirectTo: "validation", pathMatch: "full" }
        ]
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  {
    path: "manager",
    loadComponent: () => import("./chunk-3ELE7BQP.js").then((m) => m.ManagerLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["MANAGER"] },
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-47UMVN4Y.js").then((m) => m.ManagerDashboardComponent),
        data: { breadcrumb: "Dashboard" }
      },
      {
        path: "team",
        loadComponent: () => import("./chunk-L5GV5ACC.js").then((m) => m.ManagerTeamComponent),
        data: { breadcrumb: "Mon \xE9quipe" }
      },
      {
        path: "projects",
        loadComponent: () => import("./chunk-DCC2BLT4.js").then((m) => m.ProjectListComponent),
        data: { breadcrumb: "Projets" }
      },
      {
        path: "projects/new",
        loadComponent: () => import("./chunk-HUPBL5CI.js").then((m) => m.ProjectFormComponent),
        data: { breadcrumb: "Nouveau projet" }
      },
      {
        path: "projects/:id",
        loadComponent: () => import("./chunk-KLVHEYFH.js").then((m) => m.ProjectDetailComponent),
        data: { breadcrumb: "Projet" }
      },
      {
        path: "projects/:id/edit",
        loadComponent: () => import("./chunk-HUPBL5CI.js").then((m) => m.ProjectFormComponent),
        data: { breadcrumb: "Modifier projet" }
      },
      {
        path: "projects/:id/board",
        loadComponent: () => import("./chunk-PXRY3JB2.js").then((m) => m.TaskBoardComponent),
        data: { breadcrumb: "Tableau Kanban" }
      },
      {
        path: "projects/:projectId/tasks/new",
        loadComponent: () => import("./chunk-2T36U255.js").then((m) => m.TaskFormComponent),
        data: { breadcrumb: "Nouvelle t\xE2che" }
      },
      {
        path: "requests",
        loadComponent: () => import("./chunk-ZECCIG3K.js").then((m) => m.RequestListComponent),
        data: { breadcrumb: "Demandes" }
      },
      {
        path: "requests/new",
        loadComponent: () => import("./chunk-ZLOQ7DM5.js").then((m) => m.RequestFormComponent),
        data: { breadcrumb: "Nouvelle demande" }
      },
      {
        path: "requests/:id",
        loadComponent: () => import("./chunk-C5H2ULE6.js").then((m) => m.RequestDetailComponent),
        data: { breadcrumb: "Demande" }
      },
      {
        path: "announcements",
        loadComponent: () => import("./chunk-KY2CJ64W.js").then((m) => m.AnnouncementFeedComponent),
        data: { breadcrumb: "Annonces" }
      },
      {
        path: "announcements/new",
        loadComponent: () => import("./chunk-NOXYNFZX.js").then((m) => m.AnnouncementFormComponent),
        data: { breadcrumb: "Nouvelle annonce" }
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-R233SEQC.js").then((m) => m.ProfileComponent),
        data: { breadcrumb: "Profil" }
      },
      {
        path: "attendance",
        loadComponent: () => import("./chunk-OQVC43Q2.js").then((m) => m.TeamAttendanceLayoutComponent),
        data: { breadcrumb: "Pr\xE9sences" },
        children: [
          { path: "validation", loadComponent: () => import("./chunk-BCR7EVGV.js").then((m) => m.TeamAttendanceValidationComponent), data: { breadcrumb: "Validation" } },
          { path: "today", loadComponent: () => import("./chunk-G7NXZTZT.js").then((m) => m.TeamAttendanceTodayComponent), data: { breadcrumb: "Aujourd'hui" } },
          { path: "history", loadComponent: () => import("./chunk-GAD47BXA.js").then((m) => m.TeamAttendanceHistoryComponent), data: { breadcrumb: "Historique" } },
          { path: "monthly", loadComponent: () => import("./chunk-3QMR73IR.js").then((m) => m.TeamAttendanceMonthlyComponent), data: { breadcrumb: "R\xE9sum\xE9 mensuel" } },
          { path: "", redirectTo: "validation", pathMatch: "full" }
        ]
      },
      {
        path: "team/leaves",
        loadComponent: () => import("./chunk-5FAVW57U.js").then((m) => m.TeamLeavesLayoutComponent),
        data: { breadcrumb: "Cong\xE9s" },
        children: [
          { path: "validation", loadComponent: () => import("./chunk-BUWLKHXR.js").then((m) => m.TeamLeaveValidationComponent), data: { breadcrumb: "Validation cong\xE9s" } },
          { path: "history", loadComponent: () => import("./chunk-O6YB3RIR.js").then((m) => m.TeamLeaveHistoryComponent), data: { breadcrumb: "Historique cong\xE9s" } },
          { path: "balances", loadComponent: () => import("./chunk-SH7XNA76.js").then((m) => m.TeamLeaveBalancesComponent), data: { breadcrumb: "Balances \xE9quipe" } },
          { path: "", redirectTo: "validation", pathMatch: "full" }
        ]
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  {
    path: "employee",
    loadComponent: () => import("./chunk-YOKF5VYV.js").then((m) => m.EmployeeLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: ["EMPLOYE"] },
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-VEE3JJIQ.js").then((m) => m.EmployeeDashboardComponent),
        data: { breadcrumb: "Dashboard" }
      },
      {
        path: "tasks",
        loadComponent: () => import("./chunk-DJSZQ2ZU.js").then((m) => m.MyTasksComponent),
        data: { breadcrumb: "Mes t\xE2ches" }
      },
      {
        path: "tasks/:id",
        loadComponent: () => import("./chunk-47O5JOCU.js").then((m) => m.TaskDetailComponent),
        data: { breadcrumb: "T\xE2che" }
      },
      {
        path: "requests",
        loadComponent: () => import("./chunk-ZECCIG3K.js").then((m) => m.RequestListComponent),
        data: { breadcrumb: "Demandes" }
      },
      {
        path: "requests/new",
        loadComponent: () => import("./chunk-ZLOQ7DM5.js").then((m) => m.RequestFormComponent),
        data: { breadcrumb: "Nouvelle demande" }
      },
      {
        path: "requests/:id",
        loadComponent: () => import("./chunk-C5H2ULE6.js").then((m) => m.RequestDetailComponent),
        data: { breadcrumb: "Demande" }
      },
      {
        path: "announcements",
        loadComponent: () => import("./chunk-KY2CJ64W.js").then((m) => m.AnnouncementFeedComponent),
        data: { breadcrumb: "Annonces" }
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-R233SEQC.js").then((m) => m.ProfileComponent),
        data: { breadcrumb: "Profil" }
      },
      {
        path: "attendance",
        loadComponent: () => import("./chunk-TJVRXKXM.js").then((m) => m.EmployeeAttendanceLayoutComponent),
        data: { breadcrumb: "Ma pr\xE9sence" },
        children: [
          { path: "today", loadComponent: () => import("./chunk-RBLHK7SW.js").then((m) => m.AttendanceTodayComponent), data: { breadcrumb: "Aujourd'hui" } },
          { path: "history", loadComponent: () => import("./chunk-SXC2KIQR.js").then((m) => m.AttendanceHistoryComponent), data: { breadcrumb: "Historique" } },
          { path: "summary", loadComponent: () => import("./chunk-UIRY5USV.js").then((m) => m.AttendanceMonthlySummaryComponent), data: { breadcrumb: "R\xE9sum\xE9 du mois" } },
          { path: "", redirectTo: "today", pathMatch: "full" }
        ]
      },
      {
        path: "leaves",
        loadComponent: () => import("./chunk-GWCCCY2D.js").then((m) => m.LeavesLayoutComponent),
        data: { breadcrumb: "Cong\xE9s" },
        children: [
          { path: "request", loadComponent: () => import("./chunk-WYJMF2CR.js").then((m) => m.LeaveRequestComponent), data: { breadcrumb: "Demander un cong\xE9" } },
          { path: "history", loadComponent: () => import("./chunk-DTOBSHC7.js").then((m) => m.LeaveHistoryComponent), data: { breadcrumb: "Mon historique" } },
          { path: "balance", loadComponent: () => import("./chunk-TTBSBCZY.js").then((m) => m.LeaveBalanceComponent), data: { breadcrumb: "Mon solde" } },
          { path: "", redirectTo: "request", pathMatch: "full" }
        ]
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  {
    path: "**",
    canActivate: [clearAuthGuard],
    loadComponent: () => import("./chunk-JOJBWRV5.js").then((m) => m.NotFoundComponent)
  }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = sessionStorage.getItem("auth_token");
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }
  return next(req);
};

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      sessionStorage.removeItem("auth_token");
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    { provide: LOCALE_ID, useValue: "fr" }
  ]
};

// src/app/shared/components/loading/loading.component.ts
var LoadingComponent = class _LoadingComponent {
  static \u0275fac = function LoadingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingComponent, selectors: [["app-loading"]], decls: 25, vars: 0, consts: [["role", "status", "aria-live", "polite", 1, "min-h-screen", "bg-background", "p-8"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6", "animate-pulse"], [1, "h-8", "bg-background-alt", "rounded-md", "w-1/4", "mb-2"], [1, "h-4", "bg-background-alt", "rounded-md", "w-1/3", "mb-8"], [1, "bg-surface", "border", "border-border", "rounded-lg", "p-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-6"], [1, "h-10", "bg-background-alt", "rounded-md"], [1, "space-y-3"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "bg-background-alt", "rounded-full"], [1, "h-4", "bg-background-alt", "rounded-md", "w-1/4"], [1, "h-4", "bg-background-alt", "rounded-md", "w-1/6", "ml-auto"], [1, "h-4", "bg-background-alt", "rounded-md", "w-1/3"], [1, "h-4", "bg-background-alt", "rounded-md", "w-1/5"], [1, "sr-only"]], template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "div", 2)(3, "div", 3);
      \u0275\u0275domElementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275domElement(6, "div", 6)(7, "div", 6)(8, "div", 6)(9, "div", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 7)(11, "div", 8);
      \u0275\u0275domElement(12, "div", 9)(13, "div", 10)(14, "div", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "div", 8);
      \u0275\u0275domElement(16, "div", 9)(17, "div", 12)(18, "div", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "div", 8);
      \u0275\u0275domElement(20, "div", 9)(21, "div", 13)(22, "div", 11);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(23, "span", 14);
      \u0275\u0275text(24, "Chargement en cours");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingComponent, [{
    type: Component,
    args: [{ selector: "app-loading", standalone: true, template: '<div role="status" aria-live="polite" class="min-h-screen bg-background p-8">\n  <div class="max-w-7xl mx-auto flex flex-col gap-6 animate-pulse">\n    <div class="h-8 bg-background-alt rounded-md w-1/4 mb-2"></div>\n    <div class="h-4 bg-background-alt rounded-md w-1/3 mb-8"></div>\n    <div class="bg-surface border border-border rounded-lg p-6">\n      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">\n        <div class="h-10 bg-background-alt rounded-md"></div>\n        <div class="h-10 bg-background-alt rounded-md"></div>\n        <div class="h-10 bg-background-alt rounded-md"></div>\n        <div class="h-10 bg-background-alt rounded-md"></div>\n      </div>\n      <div class="space-y-3">\n        <div class="flex items-center gap-4">\n          <div class="w-10 h-10 bg-background-alt rounded-full"></div>\n          <div class="h-4 bg-background-alt rounded-md w-1/4"></div>\n          <div class="h-4 bg-background-alt rounded-md w-1/6 ml-auto"></div>\n        </div>\n        <div class="flex items-center gap-4">\n          <div class="w-10 h-10 bg-background-alt rounded-full"></div>\n          <div class="h-4 bg-background-alt rounded-md w-1/3"></div>\n          <div class="h-4 bg-background-alt rounded-md w-1/6 ml-auto"></div>\n        </div>\n        <div class="flex items-center gap-4">\n          <div class="w-10 h-10 bg-background-alt rounded-full"></div>\n          <div class="h-4 bg-background-alt rounded-md w-1/5"></div>\n          <div class="h-4 bg-background-alt rounded-md w-1/6 ml-auto"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <span class="sr-only">Chargement en cours</span>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingComponent, { className: "LoadingComponent", filePath: "src/app/shared/components/loading/loading.component.ts", lineNumber: 8 });
})();

// src/app/shared/components/toast/toast.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastContainerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275domElement(1, "span", 3);
    \u0275\u0275domElementStart(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 5);
    \u0275\u0275domListener("click", function ToastContainerComponent_For_2_Template_button_click_4_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.dismiss(toast_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(5, "svg", 6);
    \u0275\u0275domElement(6, "line", 7)(7, "line", 8);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.BG_CLASSES[toast_r2.type]);
    \u0275\u0275advance();
    \u0275\u0275domProperty("innerHTML", ctx_r2.ICONS[toast_r2.type], \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ICONS = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
};
var BG_CLASSES = {
  success: "bg-success-light border-success/30 text-success-dark",
  error: "bg-error-light border-error/30 text-error-dark",
  warning: "bg-warning-light border-warning/30 text-warning-dark",
  info: "bg-info-light border-info/30 text-info-dark"
};
var ToastContainerComponent = class _ToastContainerComponent {
  toastService = inject(ToastService);
  ICONS = ICONS;
  BG_CLASSES = BG_CLASSES;
  static \u0275fac = function ToastContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], decls: 3, vars: 0, consts: [["role", "alert", "aria-live", "polite", 1, "fixed", "bottom-4", "right-4", "z-50", "flex", "flex-col", "gap-2", "max-w-sm"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-lg", "border", "shadow-lg", "animate-slide-up", "text-sm", "font-medium", 3, "class"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "rounded-lg", "border", "shadow-lg", "animate-slide-up", "text-sm", "font-medium"], [3, "innerHTML"], [1, "flex-1"], ["aria-label", "Fermer", 1, "shrink-0", "opacity-60", "hover:opacity-100", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"]], template: function ToastContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastContainerComponent_For_2_Template, 8, 4, "div", 1, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toastService.toasts());
    }
  }, styles: ["\n@keyframes _ngcontent-%COMP%_slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(1rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slide-up 0.2s ease-out;\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastContainerComponent, [{
    type: Component,
    args: [{ selector: "app-toast-container", standalone: true, template: `
    <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm" role="alert" aria-live="polite">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg animate-slide-up text-sm font-medium"
          [class]="BG_CLASSES[toast.type]">
          <span [innerHTML]="ICONS[toast.type]"></span>
          <span class="flex-1">{{ toast.message }}</span>
          <button (click)="toastService.dismiss(toast.id)" class="shrink-0 opacity-60 hover:opacity-100 cursor-pointer" aria-label="Fermer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;ea39bff78894790bf852684f5b4cdb268db40ff038edd242bc1107ea53418be6;/home/anasjarjini/Music/Project stage/WorkSphere/WorkSphere-frontend/src/app/shared/components/toast/toast.component.ts */\n@keyframes slide-up {\n  from {\n    opacity: 0;\n    transform: translateY(1rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-slide-up {\n  animation: slide-up 0.2s ease-out;\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src/app/shared/components/toast/toast.component.ts", lineNumber: 45 });
})();

// src/app/app.ts
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading");
  }
}
var App = class _App {
  authService = inject(AuthService);
  // ThemeService est injecté ici pour garantir son initialisation
  // (constructeur → applyTheme) avant tout rendu de layout.
  themeService = inject(ThemeService);
  isAuthReady = this.authService.authReady;
  ngOnInit() {
    this.authService.checkAuth().subscribe();
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 1, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 1, 0, "router-outlet")(1, App_Conditional_1_Template, 1, 0, "app-loading");
      \u0275\u0275element(2, "app-toast-container");
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isAuthReady() ? 0 : 1);
    }
  }, dependencies: [RouterOutlet, LoadingComponent, ToastContainerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, LoadingComponent, ToastContainerComponent], template: "@if (isAuthReady()) {\n  <router-outlet />\n} @else {\n  <app-loading />\n}\n<app-toast-container />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 20 });
})();

// src/main.ts
registerLocaleData(fr_default);
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
