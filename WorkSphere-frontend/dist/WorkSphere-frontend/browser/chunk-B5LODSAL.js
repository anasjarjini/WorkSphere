import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-3HN2YFK3.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ADF3COWQ.js";

// src/app/core/services/announcement.service.ts
var AnnouncementService = class _AnnouncementService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getAnnouncements(status = "published") {
    const params = new HttpParams().set("status", status);
    return this.http.get(`${this.apiUrl}/announcements`, { params });
  }
  getAnnouncement(id) {
    return this.http.get(`${this.apiUrl}/announcements/${id}`);
  }
  getManagers() {
    return this.http.get(`${this.apiUrl}/managers`);
  }
  createAnnouncement(data) {
    return this.http.post(`${this.apiUrl}/announcements`, data);
  }
  updateAnnouncement(id, data) {
    return this.http.put(`${this.apiUrl}/announcements/${id}`, data);
  }
  deleteAnnouncement(id) {
    return this.http.delete(`${this.apiUrl}/announcements/${id}`);
  }
  forceDeleteAnnouncement(id) {
    return this.http.delete(`${this.apiUrl}/announcements/${id}/force`);
  }
  static \u0275fac = function AnnouncementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnouncementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnnouncementService, factory: _AnnouncementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AnnouncementService
};
//# sourceMappingURL=chunk-B5LODSAL.js.map
