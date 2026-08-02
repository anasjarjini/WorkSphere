import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/core/services/image-url.service.ts
var ImageUrlService = class _ImageUrlService {
  backendOrigin;
  constructor() {
    const apiUrl = new URL(environment.apiUrl);
    this.backendOrigin = `${apiUrl.protocol}//${apiUrl.host}`;
  }
  resolve(value) {
    const rawValue = value?.trim();
    if (!rawValue) {
      return null;
    }
    if (/^https?:\/\//i.test(rawValue)) {
      try {
        const parsed = new URL(rawValue);
        return new URL(parsed.pathname, this.backendOrigin).toString();
      } catch {
        return rawValue;
      }
    }
    if (rawValue.startsWith("/")) {
      return new URL(rawValue, this.backendOrigin).toString();
    }
    if (rawValue.startsWith("storage/")) {
      return new URL(`/${rawValue}`, this.backendOrigin).toString();
    }
    if (rawValue.startsWith("avatars/")) {
      return new URL(`/storage/${rawValue}`, this.backendOrigin).toString();
    }
    if (rawValue.startsWith("logos/")) {
      return new URL(`/storage/${rawValue}`, this.backendOrigin).toString();
    }
    return rawValue;
  }
  static \u0275fac = function ImageUrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageUrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImageUrlService, factory: _ImageUrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageUrlService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ImageUrlService
};
//# sourceMappingURL=chunk-44FZWU4S.js.map
