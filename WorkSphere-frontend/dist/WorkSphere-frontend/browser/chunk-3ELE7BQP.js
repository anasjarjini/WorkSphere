import {
  BreadcrumbComponent,
  CompanyBrandComponent,
  NotificationBellComponent,
  ThemeSwitcherComponent
} from "./chunk-DEIIVMAE.js";
import "./chunk-5T2LCEU4.js";
import "./chunk-XGPRFJMR.js";
import {
  AvatarComponent
} from "./chunk-LREV36OT.js";
import {
  ImageUrlService
} from "./chunk-44FZWU4S.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  HostListener,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZST2RCVM.js";

// src/app/layouts/manager-layout/manager-layout.component.ts
var _c0 = () => ({ exact: true });
function ManagerLayoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function ManagerLayoutComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMobileMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function ManagerLayoutComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function ManagerLayoutComponent_Conditional_67_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 46)(2, "p", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 49)(7, "button", 50);
    \u0275\u0275listener("click", function ManagerLayoutComponent_Conditional_67_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProfile());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 51);
    \u0275\u0275element(9, "path", 31)(10, "circle", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Mon profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 52);
    \u0275\u0275listener("click", function ManagerLayoutComponent_Conditional_67_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 51);
    \u0275\u0275element(14, "path", 53)(15, "polyline", 54)(16, "line", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " D\xE9connexion ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const displayName_r5 = \u0275\u0275readContextLet(0);
    const role_r6 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(displayName_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r6);
  }
}
var ManagerLayoutComponent = class _ManagerLayoutComponent {
  authService = inject(AuthService);
  router = inject(Router);
  user = this.authService.currentUser;
  userName = computed(
    () => this.authService.displayName(this.user()),
    ...ngDevMode ? [{ debugName: "userName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isMobileMenuOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "isMobileMenuOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isNotificationOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "isNotificationOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isProfileMenuOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "isProfileMenuOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showNotificationBadge = signal(
    false,
    ...ngDevMode ? [{ debugName: "showNotificationBadge" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imageUrlService = inject(ImageUrlService);
  currentAvatarUrl = computed(
    () => this.imageUrlService.resolve(this.user()?.avatar_url),
    ...ngDevMode ? [{ debugName: "currentAvatarUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  roleLabel = computed(
    () => "Manager",
    ...ngDevMode ? [{ debugName: "roleLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }
  /**
   * Bascule le menu notifications et ferme le menu profil.
   */
  toggleNotifications() {
    this.isNotificationOpen.update((v) => !v);
    this.isProfileMenuOpen.set(false);
  }
  /**
   * Bascule le menu profil et ferme le menu notifications.
   */
  toggleProfileMenu() {
    this.isProfileMenuOpen.update((v) => !v);
    this.isNotificationOpen.set(false);
  }
  /**
   * Navigue vers la page de profil.
   */
  navigateToProfile() {
    this.isProfileMenuOpen.set(false);
    this.router.navigate(["/manager/profile"]);
  }
  /**
   * Déconnecte l'utilisateur.
   */
  onLogout() {
    this.authService.logout().subscribe();
  }
  /**
   * Ferme les menus ouverts au clic en dehors.
   */
  onDocumentClick() {
    this.isNotificationOpen.set(false);
    this.isProfileMenuOpen.set(false);
  }
  static \u0275fac = function ManagerLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerLayoutComponent, selectors: [["app-manager-layout"]], hostBindings: function ManagerLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ManagerLayoutComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 70, vars: 16, consts: [[1, "flex", "min-h-screen", "bg-background", "w-full"], [1, "md:hidden", "bg-surface", "border-b", "border-border", "px-4", "flex", "justify-between", "items-center", "fixed", "top-0", "left-0", "right-0", "z-30", 2, "height", "56px"], [1, "flex-1", "min-w-0", 3, "homeRoute", "contextLabel"], ["aria-label", "Ouvrir le menu", 1, "text-text", "p-1", "cursor-pointer", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "fixed", "inset-0", "bg-text/50", "z-40", "md:hidden"], [1, "fixed", "md:sticky", "top-0", "h-screen", "z-50", "w-64", "bg-surface", "border-r", "border-border", "flex", "flex-col", "py-6", "px-4", "shrink-0", "transition-transform", "duration-300", "md:translate-x-0"], [1, "px-3", "mb-8", "flex", "justify-between", "items-center", "gap-2"], ["aria-label", "Fermer le menu", 1, "md:hidden", "text-text-secondary", "hover:text-text", "p-1", "cursor-pointer", "shrink-0", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "flex", "flex-col", "gap-1", "flex-1"], ["routerLink", "/manager/dashboard", "routerLinkActive", "bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-md", "text-text-secondary", "font-medium", "transition-colors", "duration-150", "ease-out", "hover:bg-background-alt", "hover:text-text", "cursor-pointer", 3, "click", "routerLinkActiveOptions"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "shrink-0"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["routerLink", "/manager/team", "routerLinkActive", "bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-md", "text-text-secondary", "font-medium", "transition-colors", "duration-150", "ease-out", "hover:bg-background-alt", "hover:text-text", "cursor-pointer", 3, "click"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/manager/attendance", "routerLinkActive", "bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-md", "text-text-secondary", "font-medium", "transition-colors", "duration-150", "ease-out", "hover:bg-background-alt", "hover:text-text", "cursor-pointer", 3, "click"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["routerLink", "/manager/team/leaves", "routerLinkActive", "bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-md", "text-text-secondary", "font-medium", "transition-colors", "duration-150", "ease-out", "hover:bg-background-alt", "hover:text-text", "cursor-pointer", 3, "click"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["routerLink", "/manager/projects", "routerLinkActive", "bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-md", "text-text-secondary", "font-medium", "transition-colors", "duration-150", "ease-out", "hover:bg-background-alt", "hover:text-text", "cursor-pointer", 3, "click"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], ["routerLink", "/manager/profile", "routerLinkActive", "bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-md", "text-text-secondary", "font-medium", "transition-colors", "duration-150", "ease-out", "hover:bg-background-alt", "hover:text-text", "cursor-pointer", 3, "click"], [1, "flex-1", "flex", "flex-col", "w-full", "min-w-0", "pt-16", "md:pt-0"], [1, "hidden", "md:flex", "items-center", "justify-between", "h-16", "px-8", "bg-surface", "border-b", "border-border", "shrink-0"], [1, "flex", "items-center", "gap-4"], [1, "relative"], ["title", "Profil", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "transition-colors", "hover:bg-background-alt", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "cursor-pointer", 3, "click"], ["size", "sm", 3, "imageUrl", "name"], [1, "absolute", "right-0", "mt-2", "w-56", "bg-surface", "border", "border-border", "rounded-md", "shadow-md", "z-50"], [1, "flex-1", "p-6", "sm:p-8"], [1, "fixed", "inset-0", "bg-text/50", "z-40", "md:hidden", 3, "click"], [1, "absolute", "right-0", "mt-2", "w-56", "bg-surface", "border", "border-border", "rounded-md", "shadow-md", "z-50", 3, "click"], [1, "px-4", "py-3", "border-b", "border-border"], [1, "font-sans", "text-[14px]", "font-semibold", "text-text", "truncate"], [1, "font-sans", "text-[12px]", "text-text-secondary"], [1, "py-1"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "font-sans", "text-[14px]", "text-text", "transition-colors", "hover:bg-background-alt", "cursor-pointer", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "font-sans", "text-[14px]", "text-error", "transition-colors", "hover:bg-error-light", "cursor-pointer", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", 3, "click"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"]], template: function ManagerLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275declareLet(0)(1);
      \u0275\u0275elementStart(2, "div", 0)(3, "div", 1);
      \u0275\u0275element(4, "app-company-brand", 2);
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_button_click_5_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 4);
      \u0275\u0275element(7, "line", 5)(8, "line", 6)(9, "line", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, ManagerLayoutComponent_Conditional_10_Template, 1, 0, "div", 8);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "nav", 9)(12, "div", 10);
      \u0275\u0275element(13, "app-company-brand", 2);
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_button_click_14_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 12);
      \u0275\u0275element(16, "line", 13)(17, "line", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "ul", 15)(19, "li")(20, "a", 16);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_a_click_20_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 17);
      \u0275\u0275element(22, "rect", 18)(23, "rect", 19)(24, "rect", 20)(25, "rect", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Dashboard ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "li")(28, "a", 22);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_a_click_28_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 17);
      \u0275\u0275element(30, "path", 23)(31, "circle", 24)(32, "path", 25)(33, "path", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " Mon \xE9quipe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "li")(36, "a", 27);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_a_click_36_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 17);
      \u0275\u0275element(38, "circle", 28)(39, "polyline", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " Pr\xE9sences ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "li")(42, "a", 30);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_a_click_42_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 17);
      \u0275\u0275element(44, "path", 31)(45, "circle", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Cong\xE9s \xE9quipe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "li")(48, "a", 33);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_a_click_48_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 17);
      \u0275\u0275element(50, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " Projets ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "li")(53, "a", 35);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_a_click_53_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 17);
      \u0275\u0275element(55, "path", 31)(56, "circle", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, " Profil ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "main", 36)(59, "div", 37);
      \u0275\u0275element(60, "app-breadcrumb");
      \u0275\u0275elementStart(61, "div", 38);
      \u0275\u0275element(62, "app-theme-switcher")(63, "app-notification-bell");
      \u0275\u0275elementStart(64, "div", 39)(65, "button", 40);
      \u0275\u0275listener("click", function ManagerLayoutComponent_Template_button_click_65_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.toggleProfileMenu();
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275element(66, "app-avatar", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(67, ManagerLayoutComponent_Conditional_67_Template, 18, 2, "div", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 43);
      \u0275\u0275element(69, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const mobileMenuOpen_r7 = ctx.isMobileMenuOpen();
      const profileMenuOpen_r8 = ctx.isProfileMenuOpen();
      const displayName_r9 = \u0275\u0275storeLet(ctx.userName());
      const avatarUrl_r10 = ctx.currentAvatarUrl();
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.roleLabel());
      \u0275\u0275advance(3);
      \u0275\u0275property("homeRoute", "/manager")("contextLabel", "Espace Manager");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(mobileMenuOpen_r7 ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("-translate-x-full", !mobileMenuOpen_r7)("translate-x-0", mobileMenuOpen_r7);
      \u0275\u0275advance(2);
      \u0275\u0275property("homeRoute", "/manager")("contextLabel", "Espace Manager");
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance(46);
      \u0275\u0275property("imageUrl", avatarUrl_r10)("name", displayName_r9);
      \u0275\u0275advance();
      \u0275\u0275conditional(profileMenuOpen_r8 ? 67 : -1);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, BreadcrumbComponent, AvatarComponent, CompanyBrandComponent, ThemeSwitcherComponent, NotificationBellComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-manager-layout", standalone: true, imports: [RouterModule, BreadcrumbComponent, AvatarComponent, CompanyBrandComponent, ThemeSwitcherComponent, NotificationBellComponent], template: `@let mobileMenuOpen = isMobileMenuOpen();
@let profileMenuOpen = isProfileMenuOpen();
@let displayName = userName();
@let avatarUrl = currentAvatarUrl();
@let role = roleLabel();

<div class="flex min-h-screen bg-background w-full">
  <div class="md:hidden bg-surface border-b border-border px-4 flex justify-between items-center fixed top-0 left-0 right-0 z-30" style="height: 56px;">
    <app-company-brand [homeRoute]="'/manager'" [contextLabel]="'Espace Manager'" class="flex-1 min-w-0"></app-company-brand>
    <button (click)="toggleMobileMenu()" aria-label="Ouvrir le menu" class="text-text p-1 cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  </div>

  @if (mobileMenuOpen) {
    <div class="fixed inset-0 bg-text/50 z-40 md:hidden" (click)="toggleMobileMenu()"></div>
  }

  <nav class="fixed md:sticky top-0 h-screen z-50 w-64 bg-surface border-r border-border flex flex-col py-6 px-4 shrink-0 transition-transform duration-300 md:translate-x-0"
       [class.-translate-x-full]="!mobileMenuOpen"
       [class.translate-x-0]="mobileMenuOpen">
    <div class="px-3 mb-8 flex justify-between items-center gap-2">
      <app-company-brand [homeRoute]="'/manager'" [contextLabel]="'Espace Manager'" class="flex-1 min-w-0"></app-company-brand>
      <button (click)="toggleMobileMenu()" aria-label="Fermer le menu" class="md:hidden text-text-secondary hover:text-text p-1 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <ul class="flex flex-col gap-1 flex-1">
      <li>
        <a routerLink="/manager/dashboard" routerLinkActive="bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary" [routerLinkActiveOptions]="{exact: true}" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors duration-150 ease-out hover:bg-background-alt hover:text-text cursor-pointer" (click)="isMobileMenuOpen.set(false)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a routerLink="/manager/team" routerLinkActive="bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors duration-150 ease-out hover:bg-background-alt hover:text-text cursor-pointer" (click)="isMobileMenuOpen.set(false)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Mon \xE9quipe
        </a>
      </li>
      <li>
        <a routerLink="/manager/attendance" routerLinkActive="bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors duration-150 ease-out hover:bg-background-alt hover:text-text cursor-pointer" (click)="isMobileMenuOpen.set(false)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Pr\xE9sences
        </a>
      </li>
      <li>
        <a routerLink="/manager/team/leaves" routerLinkActive="bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors duration-150 ease-out hover:bg-background-alt hover:text-text cursor-pointer" (click)="isMobileMenuOpen.set(false)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Cong\xE9s \xE9quipe
        </a>
      </li>
      <li>
        <a routerLink="/manager/projects" routerLinkActive="bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors duration-150 ease-out hover:bg-background-alt hover:text-text cursor-pointer" (click)="isMobileMenuOpen.set(false)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          Projets
        </a>
      </li>
      <li>
        <a routerLink="/manager/profile" routerLinkActive="bg-primary-50 text-primary font-semibold border-l-[3px] border-l-primary" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-text-secondary font-medium transition-colors duration-150 ease-out hover:bg-background-alt hover:text-text cursor-pointer" (click)="isMobileMenuOpen.set(false)">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Profil
        </a>
      </li>
    </ul>
  </nav>

  <main class="flex-1 flex flex-col w-full min-w-0 pt-16 md:pt-0">
    <div class="hidden md:flex items-center justify-between h-16 px-8 bg-surface border-b border-border shrink-0">
      <app-breadcrumb />
      <div class="flex items-center gap-4">
        <!-- S\xE9lecteur de th\xE8me -->
        <app-theme-switcher />
        <app-notification-bell />
        <div class="relative">
          <button class="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-background-alt focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25 cursor-pointer"
                  title="Profil"
                  (click)="toggleProfileMenu(); $event.stopPropagation()">
            <app-avatar [imageUrl]="avatarUrl" [name]="displayName" size="sm" />
          </button>
          @if (profileMenuOpen) {
            <div class="absolute right-0 mt-2 w-56 bg-surface border border-border rounded-md shadow-md z-50"
                 (click)="$event.stopPropagation()">
              <div class="px-4 py-3 border-b border-border">
                <p class="font-sans text-[14px] font-semibold text-text truncate">{{ displayName }}</p>
                <p class="font-sans text-[12px] text-text-secondary">{{ role }}</p>
              </div>
              <div class="py-1">
                <button (click)="navigateToProfile()"
                        class="w-full flex items-center gap-3 px-4 py-2.5 font-sans text-[14px] text-text transition-colors hover:bg-background-alt cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  Mon profil
                </button>
                <button (click)="onLogout()"
                        class="w-full flex items-center gap-3 px-4 py-2.5 font-sans text-[14px] text-error transition-colors hover:bg-error-light cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  D\xE9connexion
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
    <div class="flex-1 p-6 sm:p-8">
      <router-outlet />
    </div>
  </main>
</div>
` }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerLayoutComponent, { className: "ManagerLayoutComponent", filePath: "src/app/layouts/manager-layout/manager-layout.component.ts", lineNumber: 23 });
})();
export {
  ManagerLayoutComponent
};
//# sourceMappingURL=chunk-3ELE7BQP.js.map
