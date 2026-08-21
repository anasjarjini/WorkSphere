import {
  ImageUrlService
} from "./chunk-ZTU2DKVI.js";
import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import "./chunk-DGTBVCJC.js";
import "./chunk-FWX4MYVU.js";
import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-3HN2YFK3.js";
import {
  Component,
  Injectable,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ADF3COWQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-FDMHZOCR.js";

// src/app/core/services/profile.service.ts
var ProfileService = class _ProfileService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  /**
   * Récupère le profil de l'utilisateur connecté avec ses relations.
   * @returns Observable contenant les données complètes du profil utilisateur
   */
  getProfile() {
    return this.http.get(`${this.apiUrl}/profile`);
  }
  /**
   * Upload un avatar pour l'utilisateur connecté (multipart).
   * @param file Fichier image à utiliser comme avatar
   * @returns Observable contenant le message et l'URL du nouvel avatar
   */
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append("avatar", file);
    return this.http.post(`${this.apiUrl}/profile/avatar`, formData);
  }
  /**
   * Supprime l'avatar de l'utilisateur connecté.
   * @returns Observable contenant un message de confirmation
   */
  deleteAvatar() {
    return this.http.delete(`${this.apiUrl}/profile/avatar`);
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/shared/profile/profile.component.ts
var _c0 = ["avatarInput"];
function ProfileComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r0.currentAvatarUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 38);
    \u0275\u0275domElement(2, "path", 28)(3, "circle", 29);
    \u0275\u0275domElementEnd()();
  }
}
function ProfileComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275domElement(1, "span", 39);
    \u0275\u0275domElementEnd();
  }
}
function ProfileComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx.name);
  }
}
function ProfileComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275domElement(1, "span", 40);
    \u0275\u0275text(2, " Upload en cours... ");
    \u0275\u0275domElementEnd();
  }
}
function ProfileComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 41);
    \u0275\u0275domElement(2, "polyline", 42);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.avatarSuccessMessage());
  }
}
function ProfileComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 44);
    \u0275\u0275domElement(2, "circle", 45)(3, "line", 46)(4, "line", 47);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.avatarErrorMessage());
  }
}
function ProfileComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 27);
    \u0275\u0275domElement(3, "path", 49)(4, "path", 50)(5, "path", 51);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(6, "div", 30)(7, "p", 31);
    \u0275\u0275text(8, "D\xE9partement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 32);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.user()?.department?.name || "\u2014");
  }
}
function ProfileComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 27);
    \u0275\u0275domElement(3, "rect", 52)(4, "line", 53)(5, "line", 54)(6, "line", 55);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(7, "div", 30)(8, "p", 31);
    \u0275\u0275text(9, "Date d'embauche");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p", 56);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.user()?.hire_date);
  }
}
function ProfileComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 27);
    \u0275\u0275domElement(3, "path", 49)(4, "path", 57)(5, "path", 58);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(6, "div", 30)(7, "p", 31);
    \u0275\u0275text(8, "Entreprise");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 32);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.name);
  }
}
var ROLE_LABELS = {
  HR_ADMIN: "Admin RH",
  MANAGER: "Manager",
  EMPLOYEE: "Employ\xE9"
};
var DEFAULT_ROLE_LABEL = "Utilisateur";
var ProfileComponent = class _ProfileComponent {
  authService = inject(AuthService);
  profileService = inject(ProfileService);
  imageUrlService = inject(ImageUrlService);
  avatarInput;
  user = this.authService.currentUser;
  isAvatarUploading = signal(
    false,
    ...ngDevMode ? [{ debugName: "isAvatarUploading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  avatarSuccessMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "avatarSuccessMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  avatarErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "avatarErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentAvatarUrl = computed(
    () => this.imageUrlService.resolve(this.user()?.avatar_url),
    ...ngDevMode ? [{ debugName: "currentAvatarUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  roleName = computed(
    () => {
      const role = this.user()?.role;
      if (!role)
        return DEFAULT_ROLE_LABEL;
      return ROLE_LABELS[role] ?? role;
    },
    ...ngDevMode ? [{ debugName: "roleName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (response) => this.authService.currentUser.set(response.user),
      error: () => {
        this.avatarErrorMessage.set("Impossible de charger le profil.");
      }
    });
  }
  triggerAvatarUpload() {
    this.avatarInput?.nativeElement.click();
  }
  onAvatarFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (file) {
      this.uploadAvatar(file);
    }
    input.value = "";
  }
  uploadAvatar(file) {
    this.isAvatarUploading.set(true);
    this.avatarSuccessMessage.set(null);
    this.avatarErrorMessage.set(null);
    this.profileService.uploadAvatar(file).subscribe({
      next: (response) => {
        this.isAvatarUploading.set(false);
        this.avatarSuccessMessage.set("Avatar mis \xE0 jour avec succ\xE8s.");
        const current = this.authService.currentUser();
        if (current) {
          this.authService.currentUser.set(__spreadProps(__spreadValues({}, current), { avatar_url: response.avatar_url }));
        }
      },
      error: (err) => {
        this.isAvatarUploading.set(false);
        this.avatarErrorMessage.set(this.resolveUploadErrorMessage(err));
      }
    });
  }
  resolveUploadErrorMessage(err) {
    if (err.status === 422 && err.error?.errors?.avatar?.[0]) {
      return err.error.errors.avatar[0];
    }
    return "Une erreur est survenue lors de l'upload de l'avatar.";
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.avatarInput = _t.first);
    }
  }, decls: 70, vars: 30, consts: [["avatarInput", ""], [1, "max-w-4xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "relative"], [1, "h-36", "sm:h-52", "rounded-t-xl", "bg-gradient-to-br", "from-white/50", "via-white", "to-primary-50", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "opacity-[0.15]", 2, "background-image", "radial-gradient(circle at 15% 25%, #fff 0, transparent 40%), radial-gradient(circle at 85% 70%, #fff 0, transparent 35%)"], [1, "bg-surface", "border", "border-t-0", "border-border", "rounded-b-xl", "shadow-sm", "px-5", "sm:px-8", "pb-5"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-end", "gap-4", "-mt-12", "sm:-mt-16"], [1, "relative", "shrink-0", "w-24", "h-24", "sm:w-32", "sm:h-32"], [1, "w-full", "h-full", "rounded-full", "ring-4", "ring-surface", "overflow-hidden", "bg-background-alt", "shadow-md", "cursor-pointer", 3, "click"], ["alt", "Avatar", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "w-full", "h-full", "bg-gradient-to-br", "from-primary/20", "to-primary/10", "flex", "items-center", "justify-center"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "absolute", "inset-0", "rounded-full", "bg-black/45", "flex", "items-center", "justify-center"], [1, "flex-1", "min-w-0", "pt-1", "sm:pb-2"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "font-heading", "text-xl", "sm:text-2xl", "font-bold", "text-text-heading", "truncate"], [1, "inline-flex", "items-center", "gap-1.5", "px-2", "py-0.5", "rounded-full", "text-[0.6875rem]", "font-semibold", "shrink-0"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "font-sans", "text-sm", "text-text-secondary", "mt-0.5", "truncate"], [1, "text-text-muted"], [1, "flex", "items-center", "gap-2", "text-sm", "text-text-muted", "mt-4"], [1, "bg-success-light", "border", "border-success/20", "rounded-md", "px-4", "py-2.5", "flex", "items-start", "gap-2", "mt-4"], [1, "bg-error-light", "border", "border-error/20", "rounded-md", "px-4", "py-2.5", "flex", "items-start", "gap-2", "mt-4"], [1, "bg-surface", "border", "border-border", "rounded-xl", "shadow-sm", "p-6", "sm:p-8", "transition-shadow", "duration-200", "hover:shadow-md"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-x-8", "gap-y-4"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-background-alt", "flex", "items-center", "justify-center", "shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-text-muted"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "min-w-0"], [1, "text-[0.6875rem]", "uppercase", "tracking-wider", "text-text-muted", "font-semibold"], [1, "text-[0.9375rem]", "text-text", "font-medium", "truncate"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "M22 6l-10 7L2 6"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], ["d", "M12 2l3 6.5 7 1-5 5 1.5 7-6.5-3.5L5 21.5 6.5 14.5l-5-5 7-1z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-12", "h-12", "text-text-muted/30"], [1, "w-6", "h-6", "border-2", "border-white/40", "border-t-white", "rounded-full", "animate-spin", "inline-block"], [1, "w-4", "h-4", "border-2", "border-primary/30", "border-t-primary", "rounded-full", "animate-spin", "inline-block"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-success", "shrink-0", "mt-0.5"], ["points", "20 6 9 17 4 12"], [1, "text-xs", "font-medium", "text-success-dark"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-xs", "font-medium", "text-error-dark"], ["d", "M3 21h18"], ["d", "M5 21V7l8-4v18"], ["d", "M19 21V11l-6-4"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "text-[0.9375rem]", "text-text", "font-medium", "tabular-nums", "truncate"], ["d", "M6 21V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"], ["d", "M9 21v-6h6v6"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275domElement(3, "div", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8);
      \u0275\u0275domListener("click", function ProfileComponent_Template_div_click_7_listener() {
        return ctx.triggerAvatarUpload();
      });
      \u0275\u0275conditionalCreate(8, ProfileComponent_Conditional_8_Template, 1, 1, "img", 9)(9, ProfileComponent_Conditional_9_Template, 4, 0, "div", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "input", 11, 0);
      \u0275\u0275domListener("change", function ProfileComponent_Template_input_change_10_listener($event) {
        return ctx.onAvatarFileSelected($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(12, ProfileComponent_Conditional_12_Template, 2, 0, "div", 12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "div", 13)(14, "div", 14)(15, "h1", 15);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "span", 16);
      \u0275\u0275domElement(18, "span", 17);
      \u0275\u0275text(19);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "p", 18);
      \u0275\u0275text(21);
      \u0275\u0275conditionalCreate(22, ProfileComponent_Conditional_22_Template, 2, 1, "span", 19);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(23, ProfileComponent_Conditional_23_Template, 3, 0, "div", 20);
      \u0275\u0275conditionalCreate(24, ProfileComponent_Conditional_24_Template, 5, 1, "div", 21);
      \u0275\u0275conditionalCreate(25, ProfileComponent_Conditional_25_Template, 7, 1, "div", 22);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 23)(27, "div", 24)(28, "div", 25)(29, "span", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(30, "svg", 27);
      \u0275\u0275domElement(31, "path", 28)(32, "circle", 29);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(33, "div", 30)(34, "p", 31);
      \u0275\u0275text(35, "Pr\xE9nom / Nom");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "p", 32);
      \u0275\u0275text(37);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(38, "div", 25)(39, "span", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(40, "svg", 27);
      \u0275\u0275domElement(41, "rect", 33)(42, "path", 34);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(43, "div", 30)(44, "p", 31);
      \u0275\u0275text(45, "Email");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "p", 32);
      \u0275\u0275text(47);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(48, "div", 25)(49, "span", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(50, "svg", 27);
      \u0275\u0275domElement(51, "rect", 35)(52, "path", 36);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(53, "div", 30)(54, "p", 31);
      \u0275\u0275text(55, "Poste");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "p", 32);
      \u0275\u0275text(57);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(58, "div", 25)(59, "span", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(60, "svg", 27);
      \u0275\u0275domElement(61, "path", 37);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(62, "div", 30)(63, "p", 31);
      \u0275\u0275text(64, "R\xF4le");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "p", 32);
      \u0275\u0275text(66);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(67, ProfileComponent_Conditional_67_Template, 11, 1, "div", 25);
      \u0275\u0275conditionalCreate(68, ProfileComponent_Conditional_68_Template, 12, 1, "div", 25);
      \u0275\u0275conditionalCreate(69, ProfileComponent_Conditional_69_Template, 11, 1, "div", 25);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      let tmp_12_0;
      let tmp_22_0;
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.currentAvatarUrl() ? 8 : 9);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isAvatarUploading() ? 12 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" ", ctx.user()?.first_name || "\u2014", " ", ctx.user()?.last_name || "", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-success-light", ctx.user()?.status === "ACTIVE")("text-success-dark", ctx.user()?.status === "ACTIVE")("bg-background-alt", ctx.user()?.status !== "ACTIVE")("text-text-muted", ctx.user()?.status !== "ACTIVE");
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-success", ctx.user()?.status === "ACTIVE")("bg-text-muted", ctx.user()?.status !== "ACTIVE");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.user()?.status === "ACTIVE" ? "Actif" : "Inactif", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.user()?.job_title || ctx.roleName(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_12_0 = ctx.user()?.company) ? 22 : -1, tmp_12_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAvatarUploading() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.avatarSuccessMessage() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.avatarErrorMessage() ? 25 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate2("", ctx.user()?.first_name || "\u2014", " ", ctx.user()?.last_name || "");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.user()?.email || "\u2014");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.user()?.job_title || "\u2014");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.roleName());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.user()?.department ? 67 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.user()?.hire_date ? 68 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_22_0 = ctx.user()?.company) ? 69 : -1, tmp_22_0);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, template: `<div class="max-w-4xl mx-auto flex flex-col gap-6">

  <!-- En-t\xEAte / banni\xE8re + avatar -->
  <div class="relative">
    <div class="h-36 sm:h-52 rounded-t-xl bg-gradient-to-br from-white/50 via-white to-primary-50 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.15]"
           style="background-image: radial-gradient(circle at 15% 25%, #fff 0, transparent 40%), radial-gradient(circle at 85% 70%, #fff 0, transparent 35%);"></div>
    </div>

    <div class="bg-surface border border-t-0 border-border rounded-b-xl shadow-sm px-5 sm:px-8 pb-5">
      <div class="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 sm:-mt-16">

        <div class="relative shrink-0 w-24 h-24 sm:w-32 sm:h-32">
          <div class="w-full h-full rounded-full ring-4 ring-surface overflow-hidden bg-background-alt shadow-md cursor-pointer"
               (click)="triggerAvatarUpload()">
            @if (currentAvatarUrl()) {
              <img [src]="currentAvatarUrl()" alt="Avatar" class="w-full h-full object-cover" />
            } @else {
              <div class="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-text-muted/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            }
          </div>
          <input #avatarInput type="file" accept="image/*" class="hidden" (change)="onAvatarFileSelected($event)" />
          @if (isAvatarUploading()) {
            <div class="absolute inset-0 rounded-full bg-black/45 flex items-center justify-center">
              <span class="w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin inline-block"></span>
            </div>
          }
        </div>

        <div class="flex-1 min-w-0 pt-1 sm:pb-2">
          <div class="flex flex-wrap items-center gap-2">
            <h1 class="font-heading text-xl sm:text-2xl font-bold text-text-heading truncate">
              {{ user()?.first_name || '\u2014' }} {{ user()?.last_name || '' }}
            </h1>
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[0.6875rem] font-semibold shrink-0"
                  [class.bg-success-light]="user()?.status === 'ACTIVE'"
                  [class.text-success-dark]="user()?.status === 'ACTIVE'"
                  [class.bg-background-alt]="user()?.status !== 'ACTIVE'"
                  [class.text-text-muted]="user()?.status !== 'ACTIVE'">
              <span class="w-1.5 h-1.5 rounded-full"
                    [class.bg-success]="user()?.status === 'ACTIVE'"
                    [class.bg-text-muted]="user()?.status !== 'ACTIVE'"></span>
              {{ user()?.status === 'ACTIVE' ? 'Actif' : 'Inactif' }}
            </span>
          </div>
          <p class="font-sans text-sm text-text-secondary mt-0.5 truncate">
            {{ user()?.job_title || roleName() }}
            @if (user()?.company; as company) {
              <span class="text-text-muted"> \xB7 {{ company.name }}</span>
            }
          </p>
        </div>
      </div>

      @if (isAvatarUploading()) {
        <div class="flex items-center gap-2 text-sm text-text-muted mt-4">
          <span class="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin inline-block"></span>
          Upload en cours...
        </div>
      }
      @if (avatarSuccessMessage()) {
        <div class="bg-success-light border border-success/20 rounded-md px-4 py-2.5 flex items-start gap-2 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-success shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span class="text-xs font-medium text-success-dark">{{ avatarSuccessMessage() }}</span>
        </div>
      }
      @if (avatarErrorMessage()) {
        <div class="bg-error-light border border-error/20 rounded-md px-4 py-2.5 flex items-start gap-2 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-error shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span class="text-xs font-medium text-error-dark">{{ avatarErrorMessage() }}</span>
        </div>
      }

    </div>
  </div>

  <!-- Informations du profil -->
  <div class="bg-surface border border-border rounded-xl shadow-sm p-6 sm:p-8 transition-shadow duration-200 hover:shadow-md">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">

      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-full bg-background-alt flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </span>
        <div class="min-w-0">
          <p class="text-[0.6875rem] uppercase tracking-wider text-text-muted font-semibold">Pr\xE9nom / Nom</p>
          <p class="text-[0.9375rem] text-text font-medium truncate">{{ user()?.first_name || '\u2014' }} {{ user()?.last_name || '' }}</p>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-full bg-background-alt flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="M22 6l-10 7L2 6"></path>
          </svg>
        </span>
        <div class="min-w-0">
          <p class="text-[0.6875rem] uppercase tracking-wider text-text-muted font-semibold">Email</p>
          <p class="text-[0.9375rem] text-text font-medium truncate">{{ user()?.email || '\u2014' }}</p>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-full bg-background-alt flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </span>
        <div class="min-w-0">
          <p class="text-[0.6875rem] uppercase tracking-wider text-text-muted font-semibold">Poste</p>
          <p class="text-[0.9375rem] text-text font-medium truncate">{{ user()?.job_title || '\u2014' }}</p>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <span class="w-8 h-8 rounded-full bg-background-alt flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2l3 6.5 7 1-5 5 1.5 7-6.5-3.5L5 21.5 6.5 14.5l-5-5 7-1z"></path>
          </svg>
        </span>
        <div class="min-w-0">
          <p class="text-[0.6875rem] uppercase tracking-wider text-text-muted font-semibold">R\xF4le</p>
          <p class="text-[0.9375rem] text-text font-medium truncate">{{ roleName() }}</p>
        </div>
      </div>

      @if (user()?.department) {
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-full bg-background-alt flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21h18"></path>
              <path d="M5 21V7l8-4v18"></path>
              <path d="M19 21V11l-6-4"></path>
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-[0.6875rem] uppercase tracking-wider text-text-muted font-semibold">D\xE9partement</p>
            <p class="text-[0.9375rem] text-text font-medium truncate">{{ user()?.department?.name || '\u2014' }}</p>
          </div>
        </div>
      }

      @if (user()?.hire_date) {
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-full bg-background-alt flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-[0.6875rem] uppercase tracking-wider text-text-muted font-semibold">Date d'embauche</p>
            <p class="text-[0.9375rem] text-text font-medium tabular-nums truncate">{{ user()?.hire_date }}</p>
          </div>
        </div>
      }

      @if (user()?.company; as company) {
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-full bg-background-alt flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21h18"></path>
              <path d="M6 21V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12"></path>
              <path d="M9 21v-6h6v6"></path>
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-[0.6875rem] uppercase tracking-wider text-text-muted font-semibold">Entreprise</p>
            <p class="text-[0.9375rem] text-text font-medium truncate">{{ company.name }}</p>
          </div>
        </div>
      }
    </div>
  </div>
</div>` }]
  }], null, { avatarInput: [{
    type: ViewChild,
    args: ["avatarInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/shared/profile/profile.component.ts", lineNumber: 21 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-NI5AKXOU.js.map
