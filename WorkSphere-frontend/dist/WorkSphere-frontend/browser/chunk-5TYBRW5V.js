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

// src/app/features/leaves/leaves-layout/leaves-layout.component.ts
var LeavesLayoutComponent = class _LeavesLayoutComponent {
  static \u0275fac = function LeavesLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeavesLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeavesLayoutComponent, selectors: [["app-leaves-layout"]], decls: 15, vars: 0, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-7xl", "mx-auto"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "border-b", "border-border"], [1, "flex", "gap-8"], ["routerLink", "/employee/leaves/request", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"], ["routerLink", "/employee/leaves/history", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"], ["routerLink", "/employee/leaves/balance", "routerLinkActive", "text-primary border-b-2 border-primary font-semibold", 1, "pb-3", "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer"]], template: function LeavesLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Cong\xE9s et absences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Demandez un cong\xE9, suivez vos demandes et consultez votre solde annuel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "nav", 4)(8, "a", 5);
      \u0275\u0275text(9, " Demander un cong\xE9 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275text(11, " Mon historique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 7);
      \u0275\u0275text(13, " Mon solde ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(14, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeavesLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-leaves-layout", standalone: true, imports: [RouterModule], template: '<div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">\n  <div>\n    <h1 class="font-heading text-2xl font-bold text-text-heading">Cong\xE9s et absences</h1>\n    <p class="text-sm text-text-secondary mt-1">Demandez un cong\xE9, suivez vos demandes et consultez votre solde annuel</p>\n  </div>\n\n  <div class="border-b border-border">\n    <nav class="flex gap-8">\n      <a routerLink="/employee/leaves/request" routerLinkActive="text-primary border-b-2 border-primary font-semibold"\n        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">\n        Demander un cong\xE9\n      </a>\n      <a routerLink="/employee/leaves/history" routerLinkActive="text-primary border-b-2 border-primary font-semibold"\n        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">\n        Mon historique\n      </a>\n      <a routerLink="/employee/leaves/balance" routerLinkActive="text-primary border-b-2 border-primary font-semibold"\n        class="pb-3 text-sm font-medium text-text-secondary hover:text-text transition-colors cursor-pointer">\n        Mon solde\n      </a>\n    </nav>\n  </div>\n\n  <router-outlet />\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeavesLayoutComponent, { className: "LeavesLayoutComponent", filePath: "src/app/features/leaves/leaves-layout/leaves-layout.component.ts", lineNumber: 10 });
})();
export {
  LeavesLayoutComponent
};
//# sourceMappingURL=chunk-5TYBRW5V.js.map
