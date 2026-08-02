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
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/core/services/company.service.ts
var CompanyService = class _CompanyService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  /** Signal partagé de l'entreprise courante (mis à jour par tous les composants) */
  company = signal(
    null,
    ...ngDevMode ? [{ debugName: "company" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Récupère les informations de l'entreprise de l'utilisateur connecté
   * et met à jour le signal partagé.
   * @returns Observable contenant les données de l'entreprise
   */
  getCompany() {
    return this.http.get(`${this.apiUrl}/company`).pipe(tap((response) => this.company.set(response.company)));
  }
  /**
   * Met à jour le signal partagé avec les données d'entreprise fournies.
   * @param company Les données d'entreprise à diffuser
   */
  setCompany(company) {
    this.company.set(company);
  }
  /**
   * Met à jour les informations texte de l'entreprise.
   * @param payload Objet contenant les champs à modifier (name, email, phone, address)
   * @returns Observable contenant la réponse avec l'entreprise mise à jour
   */
  updateCompany(payload) {
    return this.http.put(`${this.apiUrl}/company`, payload).pipe(tap((response) => this.company.set(response.company)));
  }
  /**
   * Upload un nouveau logo pour l'entreprise (multipart).
   * @param file Fichier image à uploader comme logo
   * @returns Observable contenant le message de confirmation et l'URL du nouveau logo
   */
  uploadLogo(file) {
    const formData = new FormData();
    formData.append("logo", file);
    return this.http.post(`${this.apiUrl}/company/logo`, formData);
  }
  static \u0275fac = function CompanyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CompanyService
};
//# sourceMappingURL=chunk-5T2LCEU4.js.map
