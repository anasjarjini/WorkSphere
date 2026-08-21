import {
  isPlatformBrowser
} from "./chunk-FWX4MYVU.js";
import {
  Injectable,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ADF3COWQ.js";

// src/app/core/services/theme.service.ts
var STORAGE_KEY = "theme-preference";
var ThemeService = class _ThemeService {
  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  /** Préférence choisie par l'utilisateur */
  theme = signal(
    this.readStoredTheme(),
    ...ngDevMode ? [{ debugName: "theme" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Thème réellement appliqué (résout 'system' en 'light' ou 'dark') */
  resolvedTheme = computed(
    () => {
      const t = this.theme();
      if (t !== "system")
        return t;
      if (this.isBrowser) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return "light";
    },
    ...ngDevMode ? [{ debugName: "resolvedTheme" }] : (
      /* istanbul ignore next */
      []
    )
  );
  systemMediaQuery = null;
  systemChangeHandler = () => {
    if (this.theme() === "system") {
      this.applyTheme();
    }
  };
  constructor() {
    if (!this.isBrowser)
      return;
    this.applyTheme();
    this.systemMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.systemMediaQuery.addEventListener("change", this.systemChangeHandler);
    effect(() => {
      this.theme();
      this.applyTheme();
    });
  }
  /**
   * Définit le thème, persiste dans localStorage et applique immédiatement.
   */
  setTheme(theme) {
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    this.theme.set(theme);
  }
  /**
   * Lit la préférence sauvegardée depuis localStorage.
   */
  readStoredTheme() {
    if (!this.isBrowser)
      return "system";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system")
      return stored;
    return "system";
  }
  /**
   * Applique ou retire la classe 'dark' sur <html>.
   */
  applyTheme() {
    if (!this.isBrowser)
      return;
    const isDark = this.resolvedTheme() === "dark";
    document.documentElement.classList.toggle("dark", isDark);
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-5PPHZW2D.js.map
