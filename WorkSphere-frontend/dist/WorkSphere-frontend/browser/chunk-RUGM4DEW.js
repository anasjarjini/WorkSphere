import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-N72M47JO.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/core/services/project.service.ts
var ProjectService = class _ProjectService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getProjects() {
    return this.http.get(`${this.apiUrl}/projects`).pipe(map((res) => res.data));
  }
  getProject(id) {
    return this.http.get(`${this.apiUrl}/projects/${id}`).pipe(map((res) => res.project));
  }
  createProject(data) {
    return this.http.post(`${this.apiUrl}/projects`, data).pipe(map((res) => res.project));
  }
  updateProject(id, data) {
    return this.http.put(`${this.apiUrl}/projects/${id}`, data).pipe(map((res) => res.project));
  }
  deleteProject(id) {
    return this.http.delete(`${this.apiUrl}/projects/${id}`);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.apiUrl}/projects/${id}/status`, { status }).pipe(map((res) => res.project));
  }
  uploadCahierCharges(id, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/projects/${id}/cahier-charges`, formData).pipe(map((res) => ({ cahier_charges_url: res.cahier_charges_url })));
  }
  static \u0275fac = function ProjectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ProjectService
};
//# sourceMappingURL=chunk-RUGM4DEW.js.map
