import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import {
  RouterModule
} from "./chunk-DGTBVCJC.js";
import "./chunk-FWX4MYVU.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/employee/dashboard/dashboard.component.ts
var EmployeeDashboardComponent = class _EmployeeDashboardComponent {
  authService = inject(AuthService);
  user = this.authService.currentUser;
  userName = computed(
    () => this.authService.displayName(this.user()),
    ...ngDevMode ? [{ debugName: "userName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Déconnecte l'utilisateur.
   */
  onLogout() {
    this.authService.logout().subscribe();
  }
  static \u0275fac = function EmployeeDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeDashboardComponent, selectors: [["app-employee-dashboard"]], decls: 10, vars: 1, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-7xl", "mx-auto"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "bg-surface", "p-6", "rounded-xl", "border", "border-border", "shadow-sm"], [1, "font-heading", "text-2xl", "font-bold", "text-primary"], [1, "font-sans", "text-[0.9375rem]", "text-text-secondary", "mt-1"], [1, "font-semibold", "text-text"]], template: function EmployeeDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Mon Espace");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Bienvenue, ");
      \u0275\u0275domElementStart(7, "span", 4);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(9, ".");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.userName());
    }
  }, dependencies: [RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-employee-dashboard", standalone: true, imports: [RouterModule], template: '<div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">\n  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface p-6 rounded-xl border border-border shadow-sm">\n    <div>\n      <h1 class="font-heading text-2xl font-bold text-primary">Mon Espace</h1>\n      <p class="font-sans text-[0.9375rem] text-text-secondary mt-1">Bienvenue, <span class="font-semibold text-text">{{ userName() }}</span>.</p>\n    </div>\n  </div>\n\n\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeDashboardComponent, { className: "EmployeeDashboardComponent", filePath: "src/app/features/employee/dashboard/dashboard.component.ts", lineNumber: 16 });
})();
export {
  EmployeeDashboardComponent
};
//# sourceMappingURL=chunk-WJ2YP4QH.js.map
