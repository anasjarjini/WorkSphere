import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-N72M47JO.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/core/services/attendance-declaration.service.ts
var AttendanceDeclarationService = class _AttendanceDeclarationService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getDeclarations(params) {
    let httpParams = new HttpParams();
    if (params?.date)
      httpParams = httpParams.set("date", params.date);
    if (params?.date_from)
      httpParams = httpParams.set("date_from", params.date_from);
    if (params?.date_to)
      httpParams = httpParams.set("date_to", params.date_to);
    if (params?.validation_status)
      httpParams = httpParams.set("validation_status", params.validation_status);
    if (params?.user_id)
      httpParams = httpParams.set("user_id", params.user_id);
    if (params?.queue)
      httpParams = httpParams.set("queue", params.queue);
    return this.http.get(`${this.apiUrl}/attendance-declarations`, { params: httpParams });
  }
  declare(data) {
    return this.http.post(`${this.apiUrl}/attendance-declarations`, data);
  }
  approve(id) {
    return this.http.patch(`${this.apiUrl}/attendance-declarations/${id}/approve`, {});
  }
  reject(id, reason) {
    return this.http.patch(`${this.apiUrl}/attendance-declarations/${id}/reject`, { reason });
  }
  bulkApprove(declaration_ids) {
    return this.http.post(`${this.apiUrl}/attendance-declarations/bulk-approve`, { declaration_ids });
  }
  static \u0275fac = function AttendanceDeclarationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceDeclarationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceDeclarationService, factory: _AttendanceDeclarationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceDeclarationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AttendanceDeclarationService
};
//# sourceMappingURL=chunk-2PL4LXLU.js.map
