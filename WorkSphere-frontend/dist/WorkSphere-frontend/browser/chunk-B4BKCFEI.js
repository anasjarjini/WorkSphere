import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-DGTBVCJC.js";
import "./chunk-FWX4MYVU.js";
import "./chunk-3HN2YFK3.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/attendance/employee-attendance-layout/employee-attendance-layout.component.ts
var EmployeeAttendanceLayoutComponent = class _EmployeeAttendanceLayoutComponent {
  static \u0275fac = function EmployeeAttendanceLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeAttendanceLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeAttendanceLayoutComponent, selectors: [["app-employee-attendance-layout"]], decls: 14, vars: 0, consts: [[1, "max-w-container-max", "mx-auto"], [1, "mb-6"], [1, "font-heading", "text-headline-md", "font-bold", "text-on-surface", "mb-2"], [1, "text-on-surface-variant", "font-sans", "text-body-md"], [1, "flex", "border-b", "border-outline-variant", "mb-8"], ["routerLink", "/employee/attendance/today", "routerLinkActive", "text-[#7C3AED] border-b-2 border-[#7C3AED] -mb-[2px]", 1, "px-8", "py-4", "font-sans", "font-medium", "text-sm", "text-on-surface-variant", "hover:text-primary", "transition-all", "cursor-pointer"], ["routerLink", "/employee/attendance/history", "routerLinkActive", "text-[#7C3AED] border-b-2 border-[#7C3AED] -mb-[2px]", 1, "px-8", "py-4", "font-sans", "font-medium", "text-sm", "text-on-surface-variant", "hover:text-primary", "transition-all", "cursor-pointer"], ["routerLink", "/employee/attendance/summary", "routerLinkActive", "text-[#7C3AED] border-b-2 border-[#7C3AED] -mb-[2px]", 1, "px-8", "py-4", "font-sans", "font-medium", "text-sm", "text-on-surface-variant", "hover:text-primary", "transition-all", "cursor-pointer"]], template: function EmployeeAttendanceLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Gestion des pr\xE9sences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Suivez et d\xE9clarez votre temps de travail quotidien.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "a", 5);
      \u0275\u0275text(8, " Aujourd'hui ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, " Historique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275text(12, " R\xE9sum\xE9 du mois ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeAttendanceLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-employee-attendance-layout", standalone: true, imports: [RouterModule], template: `<div class="max-w-container-max mx-auto">
  <header class="mb-6">
    <h1 class="font-heading text-headline-md font-bold text-on-surface mb-2">Gestion des pr\xE9sences</h1>
    <p class="text-on-surface-variant font-sans text-body-md">Suivez et d\xE9clarez votre temps de travail quotidien.</p>
  </header>

  <div class="flex border-b border-outline-variant mb-8">
    <a routerLink="/employee/attendance/today" routerLinkActive="text-[#7C3AED] border-b-2 border-[#7C3AED] -mb-[2px]"
      class="px-8 py-4 font-sans font-medium text-sm text-on-surface-variant hover:text-primary transition-all cursor-pointer">
      Aujourd'hui
    </a>
    <a routerLink="/employee/attendance/history" routerLinkActive="text-[#7C3AED] border-b-2 border-[#7C3AED] -mb-[2px]"
      class="px-8 py-4 font-sans font-medium text-sm text-on-surface-variant hover:text-primary transition-all cursor-pointer">
      Historique
    </a>
    <a routerLink="/employee/attendance/summary" routerLinkActive="text-[#7C3AED] border-b-2 border-[#7C3AED] -mb-[2px]"
      class="px-8 py-4 font-sans font-medium text-sm text-on-surface-variant hover:text-primary transition-all cursor-pointer">
      R\xE9sum\xE9 du mois
    </a>
  </div>

  <router-outlet />
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeAttendanceLayoutComponent, { className: "EmployeeAttendanceLayoutComponent", filePath: "src/app/features/attendance/employee-attendance-layout/employee-attendance-layout.component.ts", lineNumber: 10 });
})();
export {
  EmployeeAttendanceLayoutComponent
};
//# sourceMappingURL=chunk-B4BKCFEI.js.map
