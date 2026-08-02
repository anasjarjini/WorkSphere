import {
  AttendanceDeclarationService
} from "./chunk-2PL4LXLU.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZST2RCVM.js";

// src/app/features/attendance/team-attendance-layout/team-attendance-layout.component.ts
function TeamAttendanceLayoutComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingCount() > 9 ? "9+" : ctx_r0.pendingCount());
  }
}
var TeamAttendanceLayoutComponent = class _TeamAttendanceLayoutComponent {
  attendanceService = inject(AttendanceDeclarationService);
  authService = inject(AuthService);
  pendingCount = signal(
    0,
    ...ngDevMode ? [{ debugName: "pendingCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadPendingCount();
  }
  loadPendingCount() {
    const role = this.authService.currentUser()?.role;
    const queue = role === "MANAGER" ? "manager" : "rh";
    this.attendanceService.getDeclarations({ queue, validation_status: "EN_ATTENTE" }).subscribe({
      next: (decls) => this.pendingCount.set(decls.length)
    });
  }
  static \u0275fac = function TeamAttendanceLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamAttendanceLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamAttendanceLayoutComponent, selectors: [["app-team-attendance-layout"]], decls: 25, vars: 1, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-7xl", "mx-auto"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-4"], [1, "flex", "items-center", "gap-2", "text-on-surface-variant", "mb-1"], [1, "font-label-md", "text-label-md"], [1, "material-symbols-outlined", "text-[16px]"], [1, "font-heading", "text-headline-lg", "text-on-surface"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant", "mt-0.5"], [1, "flex", "border-b", "border-outline-variant"], ["routerLink", "/manager/attendance/validation", "routerLinkActive", "text-primary border-b-2 border-primary font-bold", 1, "px-8", "py-4", "font-label-md", "text-label-md", "text-on-surface-variant", "hover:text-primary", "transition-colors", "cursor-pointer", "inline-flex", "items-center"], [1, "inline-flex", "items-center", "justify-center", "w-5", "h-5", "ml-2", "bg-error-container", "text-on-error-container", "text-[10px]", "font-bold", "rounded-full"], ["routerLink", "/manager/attendance/today", "routerLinkActive", "text-primary border-b-2 border-primary font-bold", 1, "px-8", "py-4", "font-label-md", "text-label-md", "text-on-surface-variant", "hover:text-primary", "transition-colors", "cursor-pointer"], ["routerLink", "/manager/attendance/history", "routerLinkActive", "text-primary border-b-2 border-primary font-bold", 1, "px-8", "py-4", "font-label-md", "text-label-md", "text-on-surface-variant", "hover:text-primary", "transition-colors", "cursor-pointer"], ["routerLink", "/manager/attendance/monthly", "routerLinkActive", "text-primary border-b-2 border-primary font-bold", 1, "px-8", "py-4", "font-label-md", "text-label-md", "text-on-surface-variant", "hover:text-primary", "transition-colors", "cursor-pointer"]], template: function TeamAttendanceLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "nav", 2)(4, "span", 3);
      \u0275\u0275text(5, "\xC9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "chevron_right");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 3);
      \u0275\u0275text(9, "Pr\xE9sences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "h1", 5);
      \u0275\u0275text(11, "Gestion des Pr\xE9sences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 6);
      \u0275\u0275text(13, "Validez les d\xE9clarations et suivez les pr\xE9sences de votre \xE9quipe.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 7)(15, "a", 8);
      \u0275\u0275text(16, " \xC0 valider ");
      \u0275\u0275conditionalCreate(17, TeamAttendanceLayoutComponent_Conditional_17_Template, 2, 1, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 10);
      \u0275\u0275text(19, " Aujourd'hui ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 11);
      \u0275\u0275text(21, " Historique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 12);
      \u0275\u0275text(23, " R\xE9sum\xE9 mensuel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.pendingCount() > 0 ? 17 : -1);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamAttendanceLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-team-attendance-layout", standalone: true, imports: [RouterModule], template: `<div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">
  <!-- Page Header -->
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <nav class="flex items-center gap-2 text-on-surface-variant mb-1">
        <span class="font-label-md text-label-md">\xC9quipe</span>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <span class="font-label-md text-label-md">Pr\xE9sences</span>
      </nav>
      <h1 class="font-heading text-headline-lg text-on-surface">Gestion des Pr\xE9sences</h1>
      <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Validez les d\xE9clarations et suivez les pr\xE9sences de votre \xE9quipe.</p>
    </div>
  </div>

  <!-- Tabs Navigation -->
  <div class="flex border-b border-outline-variant">
    <a routerLink="/manager/attendance/validation" routerLinkActive="text-primary border-b-2 border-primary font-bold"
       class="px-8 py-4 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer inline-flex items-center">
      \xC0 valider
      @if (pendingCount() > 0) {
        <span class="inline-flex items-center justify-center w-5 h-5 ml-2 bg-error-container text-on-error-container text-[10px] font-bold rounded-full">{{ pendingCount() > 9 ? '9+' : pendingCount() }}</span>
      }
    </a>
    <a routerLink="/manager/attendance/today" routerLinkActive="text-primary border-b-2 border-primary font-bold"
       class="px-8 py-4 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
      Aujourd'hui
    </a>
    <a routerLink="/manager/attendance/history" routerLinkActive="text-primary border-b-2 border-primary font-bold"
       class="px-8 py-4 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
      Historique
    </a>
    <a routerLink="/manager/attendance/monthly" routerLinkActive="text-primary border-b-2 border-primary font-bold"
       class="px-8 py-4 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
      R\xE9sum\xE9 mensuel
    </a>
  </div>

  <router-outlet />
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamAttendanceLayoutComponent, { className: "TeamAttendanceLayoutComponent", filePath: "src/app/features/attendance/team-attendance-layout/team-attendance-layout.component.ts", lineNumber: 12 });
})();
export {
  TeamAttendanceLayoutComponent
};
//# sourceMappingURL=chunk-OQVC43Q2.js.map
