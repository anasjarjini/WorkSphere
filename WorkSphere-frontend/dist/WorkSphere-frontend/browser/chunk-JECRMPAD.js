import {
  LeaveValidationComponent
} from "./chunk-5GK4MT6U.js";
import "./chunk-AL2LI453.js";
import "./chunk-6BD4SRHK.js";
import "./chunk-7RQSPZX3.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-ZST2RCVM.js";

// src/app/features/leaves/hr-leave-validation/hr-leave-validation.component.ts
var HrLeaveValidationComponent = class _HrLeaveValidationComponent {
  static \u0275fac = function HrLeaveValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrLeaveValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrLeaveValidationComponent, selectors: [["app-hr-leave-validation"]], decls: 1, vars: 0, consts: [["queue", "rh"]], template: function HrLeaveValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-leave-validation", 0);
    }
  }, dependencies: [LeaveValidationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrLeaveValidationComponent, [{
    type: Component,
    args: [{
      selector: "app-hr-leave-validation",
      standalone: true,
      imports: [LeaveValidationComponent],
      template: `<app-leave-validation queue="rh" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrLeaveValidationComponent, { className: "HrLeaveValidationComponent", filePath: "src/app/features/leaves/hr-leave-validation/hr-leave-validation.component.ts", lineNumber: 10 });
})();
export {
  HrLeaveValidationComponent
};
//# sourceMappingURL=chunk-JECRMPAD.js.map
