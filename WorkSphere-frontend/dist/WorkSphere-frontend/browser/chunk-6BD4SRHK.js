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
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/core/services/absence.service.ts
var AbsenceService = class _AbsenceService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getAbsences(params) {
    let httpParams = new HttpParams();
    if (params?.status)
      httpParams = httpParams.set("status", params.status);
    if (params?.type)
      httpParams = httpParams.set("type", params.type);
    if (params?.date_from)
      httpParams = httpParams.set("date_from", params.date_from);
    if (params?.date_to)
      httpParams = httpParams.set("date_to", params.date_to);
    if (params?.user_id)
      httpParams = httpParams.set("user_id", params.user_id);
    if (params?.queue)
      httpParams = httpParams.set("queue", params.queue);
    return this.http.get(`${this.apiUrl}/absences`, { params: httpParams });
  }
  createAbsence(data) {
    return this.http.post(`${this.apiUrl}/absences`, data);
  }
  approve(id) {
    return this.http.patch(`${this.apiUrl}/absences/${id}/approve`, {});
  }
  reject(id, reason) {
    return this.http.patch(`${this.apiUrl}/absences/${id}/reject`, { reason });
  }
  cancel(id) {
    return this.http.patch(`${this.apiUrl}/absences/${id}/cancel`, {});
  }
  isOnLeave(date) {
    return this.http.get(`${this.apiUrl}/absences/is-on-leave`, {
      params: new HttpParams().set("date", date)
    });
  }
  getOnLeaveToday(date) {
    return this.http.get(`${this.apiUrl}/absences`, {
      params: new HttpParams().set("status", "APPROUVEE").set("date_from", date).set("date_to", date)
    }).pipe(map((absences) => absences.map((a) => a.user_id)));
  }
  getWorkingDays(start_date, end_date) {
    return this.http.get(`${this.apiUrl}/absences/working-days`, {
      params: new HttpParams().set("start_date", start_date).set("end_date", end_date)
    });
  }
  getMyBalances() {
    return this.http.get(`${this.apiUrl}/leave-balances/me`);
  }
  getTeamBalances() {
    return this.http.get(`${this.apiUrl}/leave-balances/team`);
  }
  getHolidays() {
    return this.http.get(`${this.apiUrl}/public-holidays`);
  }
  createHoliday(data) {
    return this.http.post(`${this.apiUrl}/public-holidays`, data);
  }
  deleteHoliday(id) {
    return this.http.delete(`${this.apiUrl}/public-holidays/${id}`);
  }
  static \u0275fac = function AbsenceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbsenceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AbsenceService, factory: _AbsenceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbsenceService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AbsenceService
};
//# sourceMappingURL=chunk-6BD4SRHK.js.map
