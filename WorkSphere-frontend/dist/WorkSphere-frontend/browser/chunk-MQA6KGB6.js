import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-N72M47JO.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/core/services/department.service.ts
var DepartmentService = class _DepartmentService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getDepartments() {
    return this.http.get(`${this.apiUrl}/departments`);
  }
  static \u0275fac = function DepartmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentService, factory: _DepartmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DepartmentService
};
//# sourceMappingURL=chunk-MQA6KGB6.js.map
