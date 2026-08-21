import {
  BreadcrumbComponent,
  ChatUnreadBadgeComponent,
  CompanyBrandComponent,
  GlobalSearchComponent,
  NotificationBellComponent,
  ThemeSwitcherComponent
} from "./chunk-7IJ4O2PC.js";
import "./chunk-B5LODSAL.js";
import {
  toSignal
} from "./chunk-I5TXPRRV.js";
import "./chunk-CN3SQTU3.js";
import "./chunk-U7CQY2TY.js";
import "./chunk-BEYW5LAA.js";
import "./chunk-5PPHZW2D.js";
import "./chunk-ZNZLQX3N.js";
import {
  AvatarComponent
} from "./chunk-DHD6LPVU.js";
import {
  ImageUrlService
} from "./chunk-ZTU2DKVI.js";
import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-DGTBVCJC.js";
import "./chunk-FWX4MYVU.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
import {
  Component,
  HostListener,
  computed,
  filter,
  inject,
  map,
  setClassMetadata,
  signal,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/layouts/employee-layout/employee-layout.component.ts
var _c0 = () => ({ exact: true });
function EmployeeLayoutComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function EmployeeLayoutComponent_Conditional_26_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 36)(2, "p", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "button", 39);
    \u0275\u0275listener("click", function EmployeeLayoutComponent_Conditional_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProfile());
    });
    \u0275\u0275elementStart(8, "span", 40);
    \u0275\u0275text(9, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Mon profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 41);
    \u0275\u0275listener("click", function EmployeeLayoutComponent_Conditional_26_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogout());
    });
    \u0275\u0275elementStart(12, "span", 4);
    \u0275\u0275text(13, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " D\xE9connexion ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const displayName_r4 = \u0275\u0275readContextLet(0);
    const role_r5 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(displayName_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r5);
  }
}
function EmployeeLayoutComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function EmployeeLayoutComponent_Conditional_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMobileMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function EmployeeLayoutComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb");
  }
}
var EmployeeLayoutComponent = class _EmployeeLayoutComponent {
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
  isChatRoute = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map((e) => e.urlAfterRedirects.includes("/chat")), startWith(this.router.url.includes("/chat"))), { initialValue: this.router.url.includes("/chat") });
  imageUrlService = inject(ImageUrlService);
  currentAvatarUrl = computed(
    () => this.imageUrlService.resolve(this.user()?.avatar_url),
    ...ngDevMode ? [{ debugName: "currentAvatarUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  roleLabel = computed(
    () => "Employ\xE9",
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
    this.router.navigate(["/employee/profile"]);
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
  static \u0275fac = function EmployeeLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeLayoutComponent, selectors: [["app-employee-layout"]], hostBindings: function EmployeeLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function EmployeeLayoutComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 86, vars: 21, consts: [[1, "fixed", "top-0", "right-0", "w-full", "lg:w-[calc(100%-280px)]", "h-topbar-height", "z-40", "flex", "items-center", "justify-between", "border-b", "border-outline-variant", "bg-surface/80", "px-margin-mobile", "md:px-margin-desktop", "shadow-sm", "backdrop-blur-xl"], [1, "flex", "items-center", "gap-4", "w-full", "justify-between"], [1, "flex", "items-center", "gap-2", "lg:hidden", "min-w-0"], ["aria-label", "Ouvrir le menu", 1, "p-2", "-ml-2", "text-secondary", "hover:bg-surface-container-high", "rounded-full", "transition-colors", "cursor-pointer", "shrink-0", 3, "click"], [1, "material-symbols-outlined"], [1, "min-w-0", "flex-1", 3, "homeRoute", "contextLabel"], [1, "hidden", "md:block", "w-1/3", "min-w-[250px]"], [1, "flex", "items-center", "gap-4"], ["title", "Aide", 1, "hidden", "sm:flex", "p-2", "text-secondary", "hover:bg-surface-container-high", "rounded-full", "transition-all", "items-center", "justify-center"], [1, "h-8", "w-px", "bg-outline-variant", "mx-1", "hidden", "sm:block"], [1, "relative"], [1, "flex", "items-center", "gap-3", "hover:bg-surface-container-high", "p-1", "pr-3", "rounded-full", "transition-all", "cursor-pointer", 3, "click"], ["size", "sm", 3, "imageUrl", "name"], [1, "hidden", "sm:flex", "flex-col", "items-start", "leading-tight"], [1, "font-label-md", "text-label-md", "text-on-surface"], [1, "font-label-sm", "text-label-sm", "text-secondary"], [1, "absolute", "right-0", "mt-2", "w-56", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-xl", "shadow-lg", "z-50", "overflow-hidden"], [1, "fixed", "inset-0", "bg-on-surface/50", "z-40", "lg:hidden"], [1, "fixed", "top-0", "left-0", "h-screen", "z-50", "w-sidebar-width", "bg-surface-container-lowest", "border-r", "border-outline-variant", "flex", "flex-col", "py-6", "transition-transform", "duration-300", "-translate-x-full", "lg:translate-x-0"], [1, "px-6", "pb-6", "border-b", "border-outline-variant", "mb-6", "flex", "items-center", "justify-between", "gap-3"], ["aria-label", "Fermer le menu", 1, "lg:hidden", "p-2", "text-secondary", "hover:bg-surface-container-high", "rounded-full", "transition-colors", "cursor-pointer", "shrink-0", 3, "click"], [1, "flex-1", "flex", "flex-col", "gap-1", "w-full", "overflow-y-auto"], ["routerLink", "/employee/dashboard", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click", "routerLinkActiveOptions"], [1, "font-label-md", "text-label-md"], ["routerLink", "/employee/tasks", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/employee/attendance", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/employee/leaves", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/employee/announcements", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/employee/chat", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "shrink-0"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["routerLink", "/employee/profile", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], [1, "mt-auto", "px-2", "pt-6", "border-t", "border-outline-variant", "flex", "flex-col", "gap-1"], ["title", "Aide", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "rounded-lg", "cursor-pointer"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-error", "hover:bg-error-container/50", "transition-colors", "duration-200", "rounded-lg", "cursor-pointer", 3, "click"], [1, "absolute", "right-0", "mt-2", "w-56", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-xl", "shadow-lg", "z-50", "overflow-hidden", 3, "click"], [1, "px-4", "py-3", "border-b", "border-outline-variant"], [1, "font-label-md", "text-label-md", "font-semibold", "text-on-surface", "truncate"], [1, "py-1"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "text-body-sm", "text-on-surface", "transition-colors", "hover:bg-surface-container", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-secondary"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "text-body-sm", "text-error", "transition-colors", "hover:bg-error-container/50", "cursor-pointer", 3, "click"], [1, "fixed", "inset-0", "bg-on-surface/50", "z-40", "lg:hidden", 3, "click"]], template: function EmployeeLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275declareLet(0)(1);
      \u0275\u0275elementStart(2, "header", 0)(3, "div", 1)(4, "div", 2)(5, "button", 3);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_button_click_5_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "app-company-brand", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275element(10, "app-global-search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275element(12, "app-theme-switcher")(13, "app-notification-bell");
      \u0275\u0275elementStart(14, "button", 8)(15, "span", 4);
      \u0275\u0275text(16, "help");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "div", 9);
      \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_button_click_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.toggleProfileMenu();
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275element(20, "app-avatar", 12);
      \u0275\u0275elementStart(21, "div", 13)(22, "span", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(26, EmployeeLayoutComponent_Conditional_26_Template, 15, 2, "div", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(27, EmployeeLayoutComponent_Conditional_27_Template, 1, 0, "div", 17);
      \u0275\u0275elementStart(28, "nav", 18)(29, "div", 19);
      \u0275\u0275element(30, "app-company-brand", 5);
      \u0275\u0275elementStart(31, "button", 20);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_button_click_31_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275elementStart(32, "span", 4);
      \u0275\u0275text(33, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 21)(35, "a", 22);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_a_click_35_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(36, "span", 4);
      \u0275\u0275text(37, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 23);
      \u0275\u0275text(39, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "a", 24);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_a_click_40_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(41, "span", 4);
      \u0275\u0275text(42, "checklist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 23);
      \u0275\u0275text(44, "Mes t\xE2ches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "a", 25);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_a_click_45_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(46, "span", 4);
      \u0275\u0275text(47, "event_available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 23);
      \u0275\u0275text(49, "Ma pr\xE9sence");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "a", 26);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_a_click_50_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(51, "span", 4);
      \u0275\u0275text(52, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 23);
      \u0275\u0275text(54, "Mes cong\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "a", 27);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_a_click_55_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(56, "span", 4);
      \u0275\u0275text(57, "campaign");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 23);
      \u0275\u0275text(59, "Annonces");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "a", 28);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_a_click_60_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 29);
      \u0275\u0275element(62, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(63, "span", 23);
      \u0275\u0275text(64, "Messagerie");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "app-chat-unread-badge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 31);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_a_click_66_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(67, "span", 4);
      \u0275\u0275text(68, "account_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span", 23);
      \u0275\u0275text(70, "Profil");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 32)(72, "button", 33)(73, "span", 4);
      \u0275\u0275text(74, "help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span", 23);
      \u0275\u0275text(76, "Centre d'aide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "button", 34);
      \u0275\u0275listener("click", function EmployeeLayoutComponent_Template_button_click_77_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275elementStart(78, "span", 4);
      \u0275\u0275text(79, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 23);
      \u0275\u0275text(81, "D\xE9connexion");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(82, "main")(83, "div");
      \u0275\u0275conditionalCreate(84, EmployeeLayoutComponent_Conditional_84_Template, 1, 0, "app-breadcrumb");
      \u0275\u0275element(85, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const mobileMenuOpen_r7 = ctx.isMobileMenuOpen();
      const profileMenuOpen_r8 = ctx.isProfileMenuOpen();
      const displayName_r9 = \u0275\u0275storeLet(ctx.userName());
      const avatarUrl_r10 = ctx.currentAvatarUrl();
      \u0275\u0275advance();
      const role_r11 = \u0275\u0275storeLet(ctx.roleLabel());
      \u0275\u0275advance(7);
      \u0275\u0275property("homeRoute", "/employee")("contextLabel", "Espace Employ\xE9");
      \u0275\u0275advance(12);
      \u0275\u0275property("imageUrl", avatarUrl_r10)("name", displayName_r9);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(displayName_r9);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(role_r11);
      \u0275\u0275advance();
      \u0275\u0275conditional(profileMenuOpen_r8 ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(mobileMenuOpen_r7 ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-0", mobileMenuOpen_r7);
      \u0275\u0275advance(2);
      \u0275\u0275property("homeRoute", "/employee")("contextLabel", "Espace Employ\xE9");
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(20, _c0));
      \u0275\u0275advance(47);
      \u0275\u0275classMap(ctx.isChatRoute() ? "lg:ml-[280px] pt-topbar-height h-screen overflow-hidden bg-surface relative" : "lg:ml-[280px] pt-topbar-height h-screen overflow-y-auto bg-surface relative");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isChatRoute() ? "flex flex-col h-full min-h-0 relative z-10" : "px-margin-mobile md:px-margin-desktop py-8 max-w-7xl mx-auto flex flex-col gap-6 relative z-10");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isChatRoute() ? 84 : -1);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, BreadcrumbComponent, AvatarComponent, CompanyBrandComponent, ThemeSwitcherComponent, NotificationBellComponent, GlobalSearchComponent, ChatUnreadBadgeComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-employee-layout", standalone: true, imports: [RouterModule, BreadcrumbComponent, AvatarComponent, CompanyBrandComponent, ThemeSwitcherComponent, NotificationBellComponent, GlobalSearchComponent, ChatUnreadBadgeComponent], template: `@let mobileMenuOpen = isMobileMenuOpen();
@let profileMenuOpen = isProfileMenuOpen();
@let displayName = userName();
@let avatarUrl = currentAvatarUrl();
@let role = roleLabel();

<!-- TopNavBar -->
<header class="fixed top-0 right-0 w-full lg:w-[calc(100%-280px)] h-topbar-height z-40 flex items-center justify-between border-b border-outline-variant bg-surface/80 px-margin-mobile md:px-margin-desktop shadow-sm backdrop-blur-xl">
  <div class="flex items-center gap-4 w-full justify-between">
    <div class="flex items-center gap-2 lg:hidden min-w-0">
      <button (click)="toggleMobileMenu()" aria-label="Ouvrir le menu" class="p-2 -ml-2 text-secondary hover:bg-surface-container-high rounded-full transition-colors cursor-pointer shrink-0">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <app-company-brand [homeRoute]="'/employee'" [contextLabel]="'Espace Employ\xE9'" class="min-w-0 flex-1"></app-company-brand>
    </div>
    <div class="hidden md:block w-1/3 min-w-[250px]">
      <app-global-search />
    </div>
    <div class="flex items-center gap-4">
      <app-theme-switcher />
      <app-notification-bell />
      <button class="hidden sm:flex p-2 text-secondary hover:bg-surface-container-high rounded-full transition-all items-center justify-center" title="Aide">
        <span class="material-symbols-outlined">help</span>
      </button>
      <div class="h-8 w-px bg-outline-variant mx-1 hidden sm:block"></div>
      <div class="relative">
        <button (click)="toggleProfileMenu(); $event.stopPropagation()"
                class="flex items-center gap-3 hover:bg-surface-container-high p-1 pr-3 rounded-full transition-all cursor-pointer">
          <app-avatar [imageUrl]="avatarUrl" [name]="displayName" size="sm" />
          <div class="hidden sm:flex flex-col items-start leading-tight">
            <span class="font-label-md text-label-md text-on-surface">{{ displayName }}</span>
            <span class="font-label-sm text-label-sm text-secondary">{{ role }}</span>
          </div>
        </button>
        @if (profileMenuOpen) {
          <div class="absolute right-0 mt-2 w-56 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg z-50 overflow-hidden"
               (click)="$event.stopPropagation()">
            <div class="px-4 py-3 border-b border-outline-variant">
              <p class="font-label-md text-label-md font-semibold text-on-surface truncate">{{ displayName }}</p>
              <p class="font-label-sm text-label-sm text-secondary">{{ role }}</p>
            </div>
            <div class="py-1">
              <button (click)="navigateToProfile()"
                      class="w-full flex items-center gap-3 px-4 py-2.5 text-body-sm text-on-surface transition-colors hover:bg-surface-container cursor-pointer">
                <span class="material-symbols-outlined text-secondary">account_circle</span>
                Mon profil
              </button>
              <button (click)="onLogout()"
                      class="w-full flex items-center gap-3 px-4 py-2.5 text-body-sm text-error transition-colors hover:bg-error-container/50 cursor-pointer">
                <span class="material-symbols-outlined">logout</span>
                D\xE9connexion
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  </div>
</header>

<!-- Overlay mobile -->
@if (mobileMenuOpen) {
  <div class="fixed inset-0 bg-on-surface/50 z-40 lg:hidden" (click)="toggleMobileMenu()"></div>
}

<!-- SideNavBar -->
<nav class="fixed top-0 left-0 h-screen z-50 w-sidebar-width bg-surface-container-lowest border-r border-outline-variant flex flex-col py-6 transition-transform duration-300 -translate-x-full lg:translate-x-0"
     [class.translate-x-0]="mobileMenuOpen">
  <div class="px-6 pb-6 border-b border-outline-variant mb-6 flex items-center justify-between gap-3">
    <app-company-brand [homeRoute]="'/employee'" [contextLabel]="'Espace Employ\xE9'" class="min-w-0 flex-1"></app-company-brand>
    <button (click)="toggleMobileMenu()" aria-label="Fermer le menu" class="lg:hidden p-2 text-secondary hover:bg-surface-container-high rounded-full transition-colors cursor-pointer shrink-0">
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>

  <div class="flex-1 flex flex-col gap-1 w-full overflow-y-auto">
    <a routerLink="/employee/dashboard" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2" [routerLinkActiveOptions]="{exact: true}"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">dashboard</span>
      <span class="font-label-md text-label-md">Tableau de bord</span>
    </a>
    <a routerLink="/employee/tasks" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">checklist</span>
      <span class="font-label-md text-label-md">Mes t\xE2ches</span>
    </a>
    <a routerLink="/employee/attendance" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">event_available</span>
      <span class="font-label-md text-label-md">Ma pr\xE9sence</span>
    </a>
    <a routerLink="/employee/leaves" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">calendar_today</span>
      <span class="font-label-md text-label-md">Mes cong\xE9s</span>
    </a>
    <a routerLink="/employee/announcements" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">campaign</span>
      <span class="font-label-md text-label-md">Annonces</span>
    </a>
    <a routerLink="/employee/chat" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 shrink-0"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span class="font-label-md text-label-md">Messagerie</span>
      <app-chat-unread-badge />
    </a>
    <a routerLink="/employee/profile" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">account_circle</span>
      <span class="font-label-md text-label-md">Profil</span>
    </a>
  </div>

  <div class="mt-auto px-2 pt-6 border-t border-outline-variant flex flex-col gap-1">
    <button class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 rounded-lg cursor-pointer" title="Aide">
      <span class="material-symbols-outlined">help</span>
      <span class="font-label-md text-label-md">Centre d'aide</span>
    </button>
    <button (click)="onLogout()"
            class="flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/50 transition-colors duration-200 rounded-lg cursor-pointer">
      <span class="material-symbols-outlined">logout</span>
      <span class="font-label-md text-label-md">D\xE9connexion</span>
    </button>
  </div>
</nav>

<!-- Main Content -->
<main [class]="isChatRoute()
  ? 'lg:ml-[280px] pt-topbar-height h-screen overflow-hidden bg-surface relative'
  : 'lg:ml-[280px] pt-topbar-height h-screen overflow-y-auto bg-surface relative'">
  <div [class]="isChatRoute()
    ? 'flex flex-col h-full min-h-0 relative z-10'
    : 'px-margin-mobile md:px-margin-desktop py-8 max-w-7xl mx-auto flex flex-col gap-6 relative z-10'">
    @if (!isChatRoute()) {
      <app-breadcrumb />
    }
    <router-outlet />
  </div>
</main>
` }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeLayoutComponent, { className: "EmployeeLayoutComponent", filePath: "src/app/layouts/employee-layout/employee-layout.component.ts", lineNumber: 27 });
})();
export {
  EmployeeLayoutComponent
};
//# sourceMappingURL=chunk-6UV4Z6QQ.js.map
