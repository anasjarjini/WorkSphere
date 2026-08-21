import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-3HN2YFK3.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ADF3COWQ.js";
import {
  __spreadValues
} from "./chunk-FDMHZOCR.js";

// src/app/core/services/service-request.service.ts
var ServiceRequestService = class _ServiceRequestService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getRequests() {
    return this.http.get(`${this.apiUrl}/service-requests`);
  }
  getRequest(id) {
    return this.http.get(`${this.apiUrl}/service-requests/${id}`);
  }
  createRequest(data) {
    return this.http.post(`${this.apiUrl}/service-requests`, data);
  }
  updateRequest(id, data) {
    return this.http.put(`${this.apiUrl}/service-requests/${id}`, data);
  }
  updateStatus(id, status, payload) {
    return this.http.patch(`${this.apiUrl}/service-requests/${id}/status`, __spreadValues({
      status
    }, payload));
  }
  approve(id) {
    return this.http.patch(`${this.apiUrl}/service-requests/${id}/approve`, {});
  }
  reject(id, reason) {
    return this.http.patch(`${this.apiUrl}/service-requests/${id}/reject`, {
      rejection_reason: reason
    });
  }
  assignDeveloper(id, developerId) {
    return this.http.patch(`${this.apiUrl}/service-requests/${id}/assign-developer`, {
      developer_id: developerId
    });
  }
  getMyRequests() {
    return this.http.get(`${this.apiUrl}/my-service-requests`);
  }
  getDepartmentRequests() {
    return this.http.get(`${this.apiUrl}/manager/service-requests`);
  }
  static \u0275fac = function ServiceRequestService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceRequestService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceRequestService, factory: _ServiceRequestService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceRequestService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ServiceRequestService
};
//# sourceMappingURL=chunk-AT65WJ62.js.map
