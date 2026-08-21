import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ADF3COWQ.js";

// src/app/features/leaves/leave-status-badge/leave-status-badge.component.ts
var LeaveStatusBadgeComponent = class _LeaveStatusBadgeComponent {
  status = input(
    null,
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  type = input(
    null,
    ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    )
  );
  size = input(
    "sm",
    ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    )
  );
  label = computed(
    () => {
      switch (this.status()) {
        case "EN_ATTENTE":
          return "En attente";
        case "APPROUVEE":
          return "Approuv\xE9e";
        case "REJETEE":
          return "Rejet\xE9e";
        case "ANNULEE":
          return "Annul\xE9e";
        default:
          return "";
      }
    },
    ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    )
  );
  badgeClass = computed(
    () => {
      const base = "inline-flex items-center text-xs font-medium rounded-full";
      const sizeClass = this.size() === "sm" ? "px-2.5 py-1" : "px-3 py-1.5";
      switch (this.status()) {
        case "EN_ATTENTE":
          return `${base} ${sizeClass} bg-warning-light text-warning-dark`;
        case "APPROUVEE":
          return `${base} ${sizeClass} bg-success-light text-success-dark`;
        case "REJETEE":
          return `${base} ${sizeClass} bg-error-container text-error`;
        case "ANNULEE":
          return `${base} ${sizeClass} bg-background-alt text-text-muted`;
        default:
          return `${base} ${sizeClass} bg-background-alt text-text-muted`;
      }
    },
    ...ngDevMode ? [{ debugName: "badgeClass" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function LeaveStatusBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveStatusBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveStatusBadgeComponent, selectors: [["app-leave-status-badge"]], inputs: { status: [1, "status"], type: [1, "type"], size: [1, "size"] }, decls: 2, vars: 3, template: function LeaveStatusBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span");
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.badgeClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.label());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveStatusBadgeComponent, [{
    type: Component,
    args: [{
      selector: "app-leave-status-badge",
      standalone: true,
      template: `
    <span [class]="badgeClass()">{{ label() }}</span>
  `
    }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveStatusBadgeComponent, { className: "LeaveStatusBadgeComponent", filePath: "src/app/features/leaves/leave-status-badge/leave-status-badge.component.ts", lineNumber: 11 });
})();

export {
  LeaveStatusBadgeComponent
};
//# sourceMappingURL=chunk-M3GML5OZ.js.map
