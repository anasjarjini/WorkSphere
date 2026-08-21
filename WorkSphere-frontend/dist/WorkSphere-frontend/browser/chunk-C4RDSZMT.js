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

// src/app/layouts/admin-layout/admin-layout.component.ts
var _c0 = () => ({ exact: true });
function AdminLayoutComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_26_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "p", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 41)(7, "button", 42);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProfile());
    });
    \u0275\u0275elementStart(8, "span", 43);
    \u0275\u0275text(9, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Mon profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 44);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_26_Template_button_click_11_listener() {
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
function AdminLayoutComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function AdminLayoutComponent_Conditional_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMobileMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminLayoutComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-breadcrumb");
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
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
  imageUrlService = inject(ImageUrlService);
  currentAvatarUrl = computed(
    () => this.imageUrlService.resolve(this.user()?.avatar_url),
    ...ngDevMode ? [{ debugName: "currentAvatarUrl" }] : (
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
  roleLabel = computed(
    () => {
      const role = this.user()?.role;
      switch (role) {
        case "HR_ADMIN":
          return "Administrateur RH";
        case "MANAGER":
          return "Manager";
        case "EMPLOYE":
          return "Employ\xE9";
        default:
          return "Utilisateur";
      }
    },
    ...ngDevMode ? [{ debugName: "roleLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }
  /**
   * Bascule le menu des notifications et ferme le menu profil.
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
   * Navigue vers la page de profil puis ferme le menu.
   */
  navigateToProfile() {
    this.isProfileMenuOpen.set(false);
    this.router.navigate(["/admin/profile"]);
  }
  /**
   * Déconnecte l'utilisateur via AuthService.
   */
  onLogout() {
    this.authService.logout().subscribe();
  }
  /**
   * Ferme les menus ouverts lors d'un clic en dehors.
   */
  onDocumentClick() {
    this.isNotificationOpen.set(false);
    this.isProfileMenuOpen.set(false);
  }
  static \u0275fac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AdminLayoutComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 101, vars: 23, consts: [[1, "fixed", "top-0", "right-0", "w-full", "lg:w-[calc(100%-280px)]", "h-topbar-height", "z-40", "flex", "items-center", "justify-between", "border-b", "border-outline-variant", "bg-surface/80", "px-margin-mobile", "md:px-margin-desktop", "shadow-sm", "backdrop-blur-xl"], [1, "flex", "items-center", "gap-4", "w-full", "justify-between"], [1, "flex", "items-center", "gap-2", "lg:hidden", "min-w-0"], ["aria-label", "Ouvrir le menu", 1, "p-2", "-ml-2", "text-secondary", "hover:bg-surface-container-high", "rounded-full", "transition-colors", "cursor-pointer", "shrink-0", 3, "click"], [1, "material-symbols-outlined"], [1, "min-w-0", "flex-1", 3, "homeRoute", "contextLabel"], [1, "hidden", "md:block", "w-1/3", "min-w-[250px]"], [1, "flex", "items-center", "gap-4"], ["title", "Aide", 1, "hidden", "sm:flex", "p-2", "text-secondary", "hover:bg-surface-container-high", "rounded-full", "transition-all", "items-center", "justify-center"], [1, "h-8", "w-px", "bg-outline-variant", "mx-1", "hidden", "sm:block"], [1, "relative"], [1, "flex", "items-center", "gap-3", "hover:bg-surface-container-high", "p-1", "pr-3", "rounded-full", "transition-all", "cursor-pointer", 3, "click"], ["size", "sm", 3, "imageUrl", "name"], [1, "hidden", "sm:flex", "flex-col", "items-start", "leading-tight"], [1, "font-label-md", "text-label-md", "text-on-surface"], [1, "font-label-sm", "text-label-sm", "text-secondary"], [1, "absolute", "right-0", "mt-2", "w-56", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-xl", "shadow-lg", "z-50", "overflow-hidden"], [1, "fixed", "inset-0", "bg-on-surface/50", "z-40", "lg:hidden"], [1, "fixed", "top-0", "left-0", "h-screen", "z-50", "w-sidebar-width", "bg-surface-container-lowest", "border-r", "border-outline-variant", "flex", "flex-col", "py-6", "transition-transform", "duration-300", "-translate-x-full", "lg:translate-x-0"], [1, "px-6", "pb-6", "border-b", "border-outline-variant", "mb-6", "flex", "items-center", "justify-between", "gap-3"], ["aria-label", "Fermer le menu", 1, "lg:hidden", "p-2", "text-secondary", "hover:bg-surface-container-high", "rounded-full", "transition-colors", "cursor-pointer", "shrink-0", 3, "click"], [1, "flex-1", "flex", "flex-col", "gap-1", "w-full", "overflow-y-auto"], ["routerLink", "/admin/dashboard", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click", "routerLinkActiveOptions"], [1, "font-label-md", "text-label-md"], ["routerLink", "/admin/employees", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/admin/employees/import", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/admin/projects", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/admin/attendance", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/admin/hr/leaves", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/admin/announcements", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/admin/chat", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "shrink-0"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["routerLink", "/admin/company", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], ["routerLink", "/admin/profile", "routerLinkActive", "bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], [1, "mt-auto", "px-2", "pt-6", "border-t", "border-outline-variant", "flex", "flex-col", "gap-1"], ["title", "Aide", 1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-secondary", "hover:text-primary", "hover:bg-secondary-container", "transition-colors", "duration-200", "rounded-lg", "cursor-pointer"], [1, "flex", "items-center", "gap-3", "px-4", "py-3", "text-error", "hover:bg-error-container/50", "transition-colors", "duration-200", "rounded-lg", "cursor-pointer", 3, "click"], [1, "absolute", "right-0", "mt-2", "w-56", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-xl", "shadow-lg", "z-50", "overflow-hidden", 3, "click"], [1, "px-4", "py-3", "border-b", "border-outline-variant"], [1, "font-label-md", "text-label-md", "font-semibold", "text-on-surface", "truncate"], [1, "py-1"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "text-body-sm", "text-on-surface", "transition-colors", "hover:bg-surface-container", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-secondary"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "text-body-sm", "text-error", "transition-colors", "hover:bg-error-container/50", "cursor-pointer", 3, "click"], [1, "fixed", "inset-0", "bg-on-surface/50", "z-40", "lg:hidden", 3, "click"]], template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275declareLet(0)(1);
      \u0275\u0275elementStart(2, "header", 0)(3, "div", 1)(4, "div", 2)(5, "button", 3);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_5_listener() {
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
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_19_listener($event) {
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
      \u0275\u0275conditionalCreate(26, AdminLayoutComponent_Conditional_26_Template, 15, 2, "div", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(27, AdminLayoutComponent_Conditional_27_Template, 1, 0, "div", 17);
      \u0275\u0275elementStart(28, "nav", 18)(29, "div", 19);
      \u0275\u0275element(30, "app-company-brand", 5);
      \u0275\u0275elementStart(31, "button", 20);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_31_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275elementStart(32, "span", 4);
      \u0275\u0275text(33, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 21)(35, "a", 22);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_35_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(36, "span", 4);
      \u0275\u0275text(37, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 23);
      \u0275\u0275text(39, "Tableau de bord");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "a", 24);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_40_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(41, "span", 4);
      \u0275\u0275text(42, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 23);
      \u0275\u0275text(44, "Employ\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "a", 25);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_45_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(46, "span", 4);
      \u0275\u0275text(47, "upload_file");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 23);
      \u0275\u0275text(49, "Import CSV");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "a", 26);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_50_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(51, "span", 4);
      \u0275\u0275text(52, "folder_shared");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 23);
      \u0275\u0275text(54, "Projets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "a", 27);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_55_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(56, "span", 4);
      \u0275\u0275text(57, "event_available");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 23);
      \u0275\u0275text(59, "Pr\xE9sences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "a", 28);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_60_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(61, "span", 4);
      \u0275\u0275text(62, "calendar_today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 23);
      \u0275\u0275text(64, "Cong\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "a", 29);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_65_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(66, "span", 4);
      \u0275\u0275text(67, "campaign");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 23);
      \u0275\u0275text(69, "Annonces");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "a", 30);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_70_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(71, "svg", 31);
      \u0275\u0275element(72, "path", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(73, "span", 23);
      \u0275\u0275text(74, "Messagerie");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "app-chat-unread-badge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "a", 33);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_76_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(77, "span", 4);
      \u0275\u0275text(78, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span", 23);
      \u0275\u0275text(80, "Param\xE8tres entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "a", 34);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_a_click_81_listener() {
        return ctx.isMobileMenuOpen.set(false);
      });
      \u0275\u0275elementStart(82, "span", 4);
      \u0275\u0275text(83, "account_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 23);
      \u0275\u0275text(85, "Profil");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 35)(87, "button", 36)(88, "span", 4);
      \u0275\u0275text(89, "help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span", 23);
      \u0275\u0275text(91, "Centre d'aide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "button", 37);
      \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_92_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275elementStart(93, "span", 4);
      \u0275\u0275text(94, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span", 23);
      \u0275\u0275text(96, "D\xE9connexion");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "main")(98, "div");
      \u0275\u0275conditionalCreate(99, AdminLayoutComponent_Conditional_99_Template, 1, 0, "app-breadcrumb");
      \u0275\u0275element(100, "router-outlet");
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
      \u0275\u0275property("homeRoute", "/admin")("contextLabel", "Espace RH");
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
      \u0275\u0275property("homeRoute", "/admin")("contextLabel", "Espace RH");
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(21, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(22, _c0));
      \u0275\u0275advance(57);
      \u0275\u0275classMap(ctx.isChatRoute() ? "lg:ml-[280px] pt-topbar-height h-screen overflow-hidden bg-surface relative" : "lg:ml-[280px] pt-topbar-height h-screen overflow-y-auto bg-surface relative");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isChatRoute() ? "flex flex-col h-full min-h-0 relative z-10" : "px-margin-mobile md:px-margin-desktop py-8 max-w-7xl mx-auto flex flex-col gap-6 relative z-10");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isChatRoute() ? 99 : -1);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, BreadcrumbComponent, AvatarComponent, CompanyBrandComponent, ThemeSwitcherComponent, NotificationBellComponent, GlobalSearchComponent, ChatUnreadBadgeComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-admin-layout", standalone: true, imports: [RouterModule, BreadcrumbComponent, AvatarComponent, CompanyBrandComponent, ThemeSwitcherComponent, NotificationBellComponent, GlobalSearchComponent, ChatUnreadBadgeComponent], template: `@let mobileMenuOpen = isMobileMenuOpen();
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
      <app-company-brand [homeRoute]="'/admin'" [contextLabel]="'Espace RH'" class="min-w-0 flex-1"></app-company-brand>
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
    <app-company-brand [homeRoute]="'/admin'" [contextLabel]="'Espace RH'" class="min-w-0 flex-1"></app-company-brand>
    <button (click)="toggleMobileMenu()" aria-label="Fermer le menu" class="lg:hidden p-2 text-secondary hover:bg-surface-container-high rounded-full transition-colors cursor-pointer shrink-0">
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>

  <div class="flex-1 flex flex-col gap-1 w-full overflow-y-auto">
    <a routerLink="/admin/dashboard" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2" [routerLinkActiveOptions]="{exact: true}"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">dashboard</span>
      <span class="font-label-md text-label-md">Tableau de bord</span>
    </a>
    <a routerLink="/admin/employees" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2" [routerLinkActiveOptions]="{exact: true}"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">group</span>
      <span class="font-label-md text-label-md">Employ\xE9s</span>
    </a>
    <a routerLink="/admin/employees/import" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">upload_file</span>
      <span class="font-label-md text-label-md">Import CSV</span>
    </a>
    <a routerLink="/admin/projects" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">folder_shared</span>
      <span class="font-label-md text-label-md">Projets</span>
    </a>
    <a routerLink="/admin/attendance" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">event_available</span>
      <span class="font-label-md text-label-md">Pr\xE9sences</span>
    </a>
    <a routerLink="/admin/hr/leaves" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">calendar_today</span>
      <span class="font-label-md text-label-md">Cong\xE9s</span>
    </a>
    <a routerLink="/admin/announcements" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">campaign</span>
      <span class="font-label-md text-label-md">Annonces</span>
    </a>
    <a routerLink="/admin/chat" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 shrink-0"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span class="font-label-md text-label-md">Messagerie</span>
      <app-chat-unread-badge />
    </a>
    <a routerLink="/admin/company" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
       class="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-secondary-container transition-colors duration-200 cursor-pointer"
       (click)="isMobileMenuOpen.set(false)">
      <span class="material-symbols-outlined">settings</span>
      <span class="font-label-md text-label-md">Param\xE8tres entreprise</span>
    </a>
    <a routerLink="/admin/profile" routerLinkActive="bg-primary-container/10 text-primary font-bold border-r-4 border-primary opacity-90 ml-2"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/layouts/admin-layout/admin-layout.component.ts", lineNumber: 27 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-C4RDSZMT.js.map
