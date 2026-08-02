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

// src/app/features/leaves/team-leave-validation/team-leave-validation.component.ts
var TeamLeaveValidationComponent = class _TeamLeaveValidationComponent {
  static \u0275fac = function TeamLeaveValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamLeaveValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamLeaveValidationComponent, selectors: [["app-team-leave-validation"]], decls: 1, vars: 0, consts: [["queue", "manager"]], template: function TeamLeaveValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-leave-validation", 0);
    }
  }, dependencies: [LeaveValidationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamLeaveValidationComponent, [{
    type: Component,
    args: [{
      selector: "app-team-leave-validation",
      standalone: true,
      imports: [LeaveValidationComponent],
      template: `<app-leave-validation queue="manager" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamLeaveValidationComponent, { className: "TeamLeaveValidationComponent", filePath: "src/app/features/leaves/team-leave-validation/team-leave-validation.component.ts", lineNumber: 10 });
})();
export {
  TeamLeaveValidationComponent
};
//# sourceMappingURL=chunk-BUWLKHXR.js.map
