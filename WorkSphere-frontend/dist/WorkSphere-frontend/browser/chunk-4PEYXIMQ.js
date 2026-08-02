import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/shared/services/toast.service.ts
var nextId = 0;
var ToastService = class _ToastService {
  toasts = signal(
    [],
    ...ngDevMode ? [{ debugName: "toasts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  show(type, message, duration = 4e3) {
    const id = ++nextId;
    this.toasts.update((t) => [...t, { id, type, message }]);
    setTimeout(() => this.dismiss(id), duration);
  }
  success(message) {
    this.show("success", message);
  }
  error(message) {
    this.show("error", message);
  }
  warning(message) {
    this.show("warning", message);
  }
  info(message) {
    this.show("info", message);
  }
  dismiss(id) {
    this.toasts.update((t) => t.filter((toast) => toast.id !== id));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-4PEYXIMQ.js.map
