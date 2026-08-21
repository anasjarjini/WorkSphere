import {
  LeaveHistoryComponent
} from "./chunk-RONTRE2F.js";
import "./chunk-M3GML5OZ.js";
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

// src/app/features/leaves/team-leave-history/team-leave-history.component.ts
var TeamLeaveHistoryComponent = class _TeamLeaveHistoryComponent {
  static \u0275fac = function TeamLeaveHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamLeaveHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamLeaveHistoryComponent, selectors: [["app-team-leave-history"]], decls: 1, vars: 0, consts: [["scope", "team"]], template: function TeamLeaveHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-leave-history", 0);
    }
  }, dependencies: [LeaveHistoryComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamLeaveHistoryComponent, [{
    type: Component,
    args: [{
      selector: "app-team-leave-history",
      standalone: true,
      imports: [LeaveHistoryComponent],
      template: `<app-leave-history scope="team" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamLeaveHistoryComponent, { className: "TeamLeaveHistoryComponent", filePath: "src/app/features/leaves/team-leave-history/team-leave-history.component.ts", lineNumber: 10 });
})();
export {
  TeamLeaveHistoryComponent
};
//# sourceMappingURL=chunk-SPTETL4Y.js.map
