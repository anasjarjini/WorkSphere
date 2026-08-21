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

// src/app/core/services/employee.service.ts
var EmployeeService = class _EmployeeService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  /**
   * Récupère la liste paginée des employés de l'entreprise avec filtres.
   * Construit dynamiquement les query params en ignorant les valeurs vides.
   * @param params - Filtres optionnels (search, role, department, is_active, page, per_page)
   * @returns Observable contenant les employés paginés
   */
  getEmployees(params) {
    let httpParams = new HttpParams();
    if (params) {
      const entries = Object.entries(params).filter(([_, v]) => v !== void 0 && v !== "" && v !== null);
      for (const [key, value] of entries) {
        httpParams = httpParams.set(key, String(value));
      }
    }
    return this.http.get(`${this.apiUrl}/employees`, {
      params: httpParams
    });
  }
  /**
   * Récupère la liste de l'équipe visible par le manager connecté.
   * Les administrateurs RH sont exclus du résultat côté frontend.
   * @param params - Filtres optionnels
   * @returns Observable avec les membres de l'équipe paginés
   */
  getManagerTeam(params) {
    let httpParams = new HttpParams();
    if (params) {
      const entries = Object.entries(params).filter(([_, v]) => v !== void 0 && v !== "" && v !== null);
      for (const [key, value] of entries) {
        httpParams = httpParams.set(key, String(value));
      }
    }
    return this.http.get(`${this.apiUrl}/manager/team`, {
      params: httpParams
    });
  }
  /**
   * Bascule le statut actif/inactif d'un employé (via le nouveau champ status).
   * @param id - ID de l'employé
   * @returns Observable avec le message et l'employé mis à jour
   */
  toggleStatus(id) {
    return this.http.patch(`${this.apiUrl}/employees/${id}/toggle-status`, {});
  }
  /**
   * Supprime logiquement (soft delete) un employé.
   * @param id - ID de l'employé
   * @returns Observable avec le message de confirmation
   */
  deleteEmployee(id) {
    return this.http.delete(`${this.apiUrl}/employees/${id}`);
  }
  /**
   * Suppression par lot (bulk delete) d'employés.
   * @param ids - Liste des IDs des employés à supprimer
   * @returns Observable avec le message de confirmation
   */
  bulkDeleteEmployees(ids) {
    return this.http.delete(`${this.apiUrl}/employees/bulk`, { body: { ids } });
  }
  /**
   * Importe des employés depuis un fichier CSV.
   * Envoie le fichier en FormData pour une gestion multipart.
   * @param file - Fichier CSV à importer
   * @returns Observable avec le résultat (imported, failed, errors[])
   */
  importEmployees(file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/employees/import`, formData);
  }
  static \u0275fac = function EmployeeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeeService, factory: _EmployeeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  EmployeeService
};
//# sourceMappingURL=chunk-CN3SQTU3.js.map
