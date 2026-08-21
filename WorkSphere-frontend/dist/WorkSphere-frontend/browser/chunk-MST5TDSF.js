import {
  AttendanceDeclarationService
} from "./chunk-I3RMVRUE.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-DGTBVCJC.js";
import "./chunk-FWX4MYVU.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
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
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/attendance/hr-attendance-layout/hr-attendance-layout.component.ts
function HrAttendanceLayoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingCount() > 9 ? "9+" : ctx_r0.pendingCount());
  }
}
var HrAttendanceLayoutComponent = class _HrAttendanceLayoutComponent {
  attendanceService = inject(AttendanceDeclarationService);
  pendingCount = signal(
    0,
    ...ngDevMode ? [{ debugName: "pendingCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.attendanceService.getDeclarations({ queue: "rh", validation_status: "EN_ATTENTE" }).subscribe({
      next: (decls) => this.pendingCount.set(decls.length)
    });
  }
  static \u0275fac = function HrAttendanceLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrAttendanceLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrAttendanceLayoutComponent, selectors: [["app-hr-attendance-layout"]], decls: 18, vars: 1, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-7xl", "mx-auto"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "border-b", "border-border"], [1, "flex", "gap-8"], ["routerLink", "/admin/attendance/validation", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer", "inline-flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "justify-center", "w-5", "h-5", "text-[11px]", "font-bold", "bg-error", "text-text-inverse", "rounded-full"], ["routerLink", "/admin/attendance/today", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"], ["routerLink", "/admin/attendance/history", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"], ["routerLink", "/admin/attendance/monthly", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"]], template: function HrAttendanceLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Pr\xE9sences \u2014 Vue RH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Validez les d\xE9clarations des managers et consultez les pr\xE9sences de l'entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "nav", 4)(8, "a", 5);
      \u0275\u0275text(9, " \xC0 valider ");
      \u0275\u0275conditionalCreate(10, HrAttendanceLayoutComponent_Conditional_10_Template, 2, 1, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275text(12, " Aujourd'hui ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, " Historique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, " R\xE9sum\xE9 mensuel ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(17, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.pendingCount() > 0 ? 10 : -1);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrAttendanceLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-hr-attendance-layout", standalone: true, imports: [RouterModule], template: `<div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">
  <div>
    <h1 class="font-heading text-2xl font-bold text-text-heading">Pr\xE9sences \u2014 Vue RH</h1>
    <p class="text-sm text-text-secondary mt-1">Validez les d\xE9clarations des managers et consultez les pr\xE9sences de l'entreprise</p>
  </div>

  <div class="border-b border-border">
    <nav class="flex gap-8">
      <a routerLink="/admin/attendance/validation" routerLinkActive="text-primary border-b-2 border-primary font-semibold"
        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer inline-flex items-center gap-2">
        \xC0 valider
        @if (pendingCount() > 0) {
          <span class="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold bg-error text-text-inverse rounded-full">{{ pendingCount() > 9 ? '9+' : pendingCount() }}</span>
        }
      </a>
      <a routerLink="/admin/attendance/today" routerLinkActive="text-primary border-b-2 border-primary font-semibold"
        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
        Aujourd'hui
      </a>
      <a routerLink="/admin/attendance/history" routerLinkActive="text-primary border-b-2 border-primary font-semibold"
        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
        Historique
      </a>
      <a routerLink="/admin/attendance/monthly" routerLinkActive="text-primary border-b-2 border-primary font-semibold"
        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
        R\xE9sum\xE9 mensuel
      </a>
    </nav>
  </div>

  <router-outlet />
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrAttendanceLayoutComponent, { className: "HrAttendanceLayoutComponent", filePath: "src/app/features/attendance/hr-attendance-layout/hr-attendance-layout.component.ts", lineNumber: 11 });
})();
export {
  HrAttendanceLayoutComponent
};
//# sourceMappingURL=chunk-MST5TDSF.js.map
