import {
  LeaveBalancesComponent
} from "./chunk-NMYFWJWE.js";
import "./chunk-PXDOOJZG.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/leaves/team-leave-balances/team-leave-balances.component.ts
var TeamLeaveBalancesComponent = class _TeamLeaveBalancesComponent {
  static \u0275fac = function TeamLeaveBalancesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamLeaveBalancesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamLeaveBalancesComponent, selectors: [["app-team-leave-balances"]], decls: 1, vars: 0, template: function TeamLeaveBalancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-leave-balances");
    }
  }, dependencies: [LeaveBalancesComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamLeaveBalancesComponent, [{
    type: Component,
    args: [{
      selector: "app-team-leave-balances",
      standalone: true,
      imports: [LeaveBalancesComponent],
      template: `<app-leave-balances />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamLeaveBalancesComponent, { className: "TeamLeaveBalancesComponent", filePath: "src/app/features/leaves/team-leave-balances/team-leave-balances.component.ts", lineNumber: 10 });
})();
export {
  TeamLeaveBalancesComponent
};
//# sourceMappingURL=chunk-XGYHM7YN.js.map
