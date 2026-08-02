import {
  AbsenceService
} from "./chunk-6BD4SRHK.js";
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

// src/app/features/leaves/hr-leaves-layout/hr-leaves-layout.component.ts
function HrLeavesLayoutComponent_Conditional_10_Template(rf, ctx) {
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
var HrLeavesLayoutComponent = class _HrLeavesLayoutComponent {
  absenceService = inject(AbsenceService);
  pendingCount = signal(
    0,
    ...ngDevMode ? [{ debugName: "pendingCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.absenceService.getAbsences({ queue: "rh", status: "EN_ATTENTE" }).subscribe({
      next: (absences) => this.pendingCount.set(absences.length)
    });
  }
  static \u0275fac = function HrLeavesLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrLeavesLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrLeavesLayoutComponent, selectors: [["app-hr-leaves-layout"]], decls: 18, vars: 1, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-7xl", "mx-auto"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "border-b", "border-border"], [1, "flex", "gap-8"], ["routerLink", "/admin/hr/leaves/validation", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer", "inline-flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "justify-center", "w-5", "h-5", "text-[11px]", "font-bold", "bg-error", "text-text-inverse", "rounded-full"], ["routerLink", "/admin/hr/leaves/history", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"], ["routerLink", "/admin/hr/leaves/balances", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"], ["routerLink", "/admin/hr/leaves/holidays", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"]], template: function HrLeavesLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Cong\xE9s \u2014 Vue RH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Validez les demandes de cong\xE9, consultez les soldes et g\xE9rez les jours f\xE9ri\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "nav", 4)(8, "a", 5);
      \u0275\u0275text(9, " Validation cong\xE9s ");
      \u0275\u0275conditionalCreate(10, HrLeavesLayoutComponent_Conditional_10_Template, 2, 1, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275text(12, " Historique cong\xE9s ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, " Balances \xE9quipe ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, " Jours f\xE9ri\xE9s ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrLeavesLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-hr-leaves-layout", standalone: true, imports: [RouterModule], template: `<div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">
  <div>
    <h1 class="font-heading text-2xl font-bold text-text-heading">Cong\xE9s \u2014 Vue RH</h1>
    <p class="text-sm text-text-secondary mt-1">Validez les demandes de cong\xE9, consultez les soldes et g\xE9rez les jours f\xE9ri\xE9s</p>
  </div>

  <div class="border-b border-border">
    <nav class="flex gap-8">
      <a routerLink="/admin/hr/leaves/validation" routerLinkActive="text-primary border-b-2 border-primary font-semibold"
        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer inline-flex items-center gap-2">
        Validation cong\xE9s
        @if (pendingCount() > 0) {
          <span class="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold bg-error text-text-inverse rounded-full">{{ pendingCount() > 9 ? '9+' : pendingCount() }}</span>
        }
      </a>
      <a routerLink="/admin/hr/leaves/history" routerLinkActive="text-primary border-b-2 border-primary font-semibold"
        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
        Historique cong\xE9s
      </a>
      <a routerLink="/admin/hr/leaves/balances" routerLinkActive="text-primary border-b-2 border-primary font-semibold"
        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
        Balances \xE9quipe
      </a>
      <a routerLink="/admin/hr/leaves/holidays" routerLinkActive="text-primary border-b-2 border-primary font-semibold"
        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">
        Jours f\xE9ri\xE9s
      </a>
    </nav>
  </div>

  <router-outlet />
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrLeavesLayoutComponent, { className: "HrLeavesLayoutComponent", filePath: "src/app/features/leaves/hr-leaves-layout/hr-leaves-layout.component.ts", lineNumber: 11 });
})();
export {
  HrLeavesLayoutComponent
};
//# sourceMappingURL=chunk-6MIPJKFK.js.map
