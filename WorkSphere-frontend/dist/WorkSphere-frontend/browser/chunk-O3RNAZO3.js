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

// src/app/features/leaves/hr-leave-balances/hr-leave-balances.component.ts
var HrLeaveBalancesComponent = class _HrLeaveBalancesComponent {
  static \u0275fac = function HrLeaveBalancesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrLeaveBalancesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrLeaveBalancesComponent, selectors: [["app-hr-leave-balances"]], decls: 1, vars: 0, template: function HrLeaveBalancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-leave-balances");
    }
  }, dependencies: [LeaveBalancesComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrLeaveBalancesComponent, [{
    type: Component,
    args: [{
      selector: "app-hr-leave-balances",
      standalone: true,
      imports: [LeaveBalancesComponent],
      template: `<app-leave-balances />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrLeaveBalancesComponent, { className: "HrLeaveBalancesComponent", filePath: "src/app/features/leaves/hr-leave-balances/hr-leave-balances.component.ts", lineNumber: 10 });
})();
export {
  HrLeaveBalancesComponent
};
//# sourceMappingURL=chunk-O3RNAZO3.js.map
