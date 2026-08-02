import {
  CompanyService
} from "./chunk-5T2LCEU4.js";
import {
  ThemeService
} from "./chunk-XGPRFJMR.js";
import {
  ImageUrlService
} from "./chunk-44FZWU4S.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import {
  DatePipe
} from "./chunk-2SDYSSIJ.js";
import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-N72M47JO.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  Injectable,
  Input,
  RuntimeError,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  effect,
  filter,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZST2RCVM.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v22.0.4
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// src/app/shared/components/breadcrumb/breadcrumb.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function BreadcrumbComponent_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(crumb_r1.label);
  }
}
function BreadcrumbComponent_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", crumb_r1.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(crumb_r1.label);
  }
}
function BreadcrumbComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, BreadcrumbComponent_For_4_Conditional_2_Template, 2, 1, "span", 3)(3, BreadcrumbComponent_For_4_Conditional_3_Template, 2, 2, "a", 1);
  }
  if (rf & 2) {
    const \u0275$index_6_r2 = ctx.$index;
    const \u0275$count_6_r3 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_6_r2 === \u0275$count_6_r3 - 1 ? 2 : 3);
  }
}
var BreadcrumbComponent = class _BreadcrumbComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  authService = inject(AuthService);
  homeRoute = computed(
    () => {
      const user = this.authService.currentUser();
      switch (user?.role) {
        case "HR_ADMIN":
          return "/admin/dashboard";
        case "MANAGER":
          return "/manager/dashboard";
        case "EMPLOYE":
          return "/employee/dashboard";
        default:
          return "/";
      }
    },
    ...ngDevMode ? [{ debugName: "homeRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Signal contenant la liste des breadcrumbs mise à jour à chaque NavigationEnd.
   */
  breadcrumbs = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this.buildBreadcrumbs(this.activatedRoute.root))), { initialValue: [] });
  /**
   * Parcourt récursivement l'arbre de routes pour construire la liste des breadcrumbs.
   * @param route Route active courante
   * @param path Chemin accumulé depuis la racine
   * @param breadcrumbs Liste des crumbs accumulés
   * @returns Tableau des breadcrumbs triés
   */
  buildBreadcrumbs(route, path = "", breadcrumbs = []) {
    const children = route.children;
    if (children.length === 0)
      return breadcrumbs;
    for (const child of children) {
      const routeURL = child.snapshot.url.map((seg) => seg.path).join("/");
      if (routeURL)
        path += `/${routeURL}`;
      const label = child.snapshot.data["breadcrumb"] ?? routeURL;
      if (routeURL || label) {
        breadcrumbs.push({ label, path });
      }
      return this.buildBreadcrumbs(child, path, breadcrumbs);
    }
    return breadcrumbs;
  }
  static \u0275fac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 5, vars: 1, consts: [["aria-label", "Fil d'Ariane", 1, "flex", "items-center", "gap-2", "text-[0.8125rem]", "py-3", "flex-wrap", "mb-4"], [1, "text-text-muted", "no-underline", "font-medium", "transition-colors", "duration-200", "hover:text-accent", "cursor-pointer", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", 3, "routerLink"], ["aria-hidden", "true", 1, "text-border", "font-light"], [1, "text-text", "font-semibold"]], template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1);
      \u0275\u0275text(2, "Accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(3, BreadcrumbComponent_For_4_Template, 4, 1, null, null, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.homeRoute());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.breadcrumbs());
    }
  }, dependencies: [RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{ selector: "app-breadcrumb", standalone: true, imports: [RouterModule], template: `<nav aria-label="Fil d'Ariane" class="flex items-center gap-2 text-[0.8125rem] py-3 flex-wrap mb-4">
  <a [routerLink]="homeRoute()" class="text-text-muted no-underline font-medium transition-colors duration-200 hover:text-accent cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25">Accueil</a>
  @for (crumb of breadcrumbs(); track crumb.path; let last = $last) {
    <span aria-hidden="true" class="text-border font-light">/</span>
    @if (last) {
      <span class="text-text font-semibold">{{ crumb.label }}</span>
    } @else {
      <a [routerLink]="crumb.path" class="text-text-muted no-underline font-medium transition-colors duration-200 hover:text-accent cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25">{{ crumb.label }}</a>
    }
  }
</nav>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "src/app/shared/components/breadcrumb/breadcrumb.component.ts", lineNumber: 24 });
})();

// src/app/shared/components/company-brand/company-brand.component.ts
function CompanyBrandComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275element(3, "div", 5)(4, "div", 6);
    \u0275\u0275elementEnd()();
  }
}
function CompanyBrandComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 12);
    \u0275\u0275listener("error", function CompanyBrandComponent_Conditional_2_Conditional_1_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imageUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r1.companyName() + " logo");
  }
}
function CompanyBrandComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.companyInitial(), " ");
  }
}
function CompanyBrandComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, CompanyBrandComponent_Conditional_2_Conditional_1_Template, 1, 2, "img", 7)(2, CompanyBrandComponent_Conditional_2_Conditional_2_Template, 2, 1, "div", 8);
    \u0275\u0275elementStart(3, "div", 9)(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.imageUrl() && !ctx_r1.imageError() ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.companyName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.contextLabel);
  }
}
var CompanyBrandComponent = class _CompanyBrandComponent {
  companyService = inject(CompanyService);
  imageUrlService = inject(ImageUrlService);
  isLoading = signal(
    true,
    ...ngDevMode ? [{ debugName: "isLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  imageError = signal(
    false,
    ...ngDevMode ? [{ debugName: "imageError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  homeRoute = "/";
  contextLabel = "Espace de travail";
  company = this.companyService.company;
  imageUrl = computed(
    () => {
      const c = this.company();
      if (!c)
        return null;
      return this.imageUrlService.resolve(c.logo_url || c.logo || null);
    },
    ...ngDevMode ? [{ debugName: "imageUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  companyName = computed(
    () => this.company()?.name?.trim() || "WorkSphere",
    ...ngDevMode ? [{ debugName: "companyName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  companyInitial = computed(
    () => {
      const name = this.companyName();
      if (!name)
        return "W";
      return name[0].toUpperCase();
    },
    ...ngDevMode ? [{ debugName: "companyInitial" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      this.imageUrl();
      this.imageError.set(false);
    });
  }
  ngOnInit() {
    if (this.company()) {
      this.isLoading.set(false);
      return;
    }
    this.companyService.getCompany().subscribe({
      next: () => this.isLoading.set(false),
      error: () => this.isLoading.set(false)
    });
  }
  onImageError() {
    this.imageError.set(true);
  }
  static \u0275fac = function CompanyBrandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyBrandComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyBrandComponent, selectors: [["app-company-brand"]], inputs: { homeRoute: "homeRoute", contextLabel: "contextLabel" }, decls: 3, vars: 2, consts: [[1, "flex", "min-w-0", "flex-1", "items-center", "gap-3", "transition-opacity", "duration-200", "hover:opacity-80", 3, "routerLink"], [1, "flex", "w-full", "items-center", "gap-3"], [1, "flex", "min-w-0", "items-center", "gap-3"], [1, "h-10", "w-10", "shrink-0", "animate-pulse", "rounded-lg", "bg-background-alt"], [1, "flex-1", "min-w-0", "space-y-1"], [1, "h-3", "w-24", "rounded", "bg-background-alt", "animate-pulse"], [1, "h-2.5", "w-28", "rounded", "bg-background-alt", "animate-pulse"], [1, "h-10", "w-auto", "max-w-[9rem]", "shrink-0", "rounded-md", "object-contain", "transition-all", "duration-300", 3, "src", "alt"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-primary/10", "text-primary", "ring-1", "ring-primary/10", "font-heading", "text-sm", "font-semibold"], [1, "flex", "min-w-0", "flex-col"], [1, "truncate", "font-heading", "text-sm", "font-semibold", "text-primary"], [1, "truncate", "text-[11px]", "leading-none", "text-text-secondary"], [1, "h-10", "w-auto", "max-w-[9rem]", "shrink-0", "rounded-md", "object-contain", "transition-all", "duration-300", 3, "error", "src", "alt"]], template: function CompanyBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275conditionalCreate(1, CompanyBrandComponent_Conditional_1_Template, 5, 0, "div", 1)(2, CompanyBrandComponent_Conditional_2_Template, 8, 3, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", ctx.homeRoute);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 1 : 2);
    }
  }, dependencies: [RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyBrandComponent, [{
    type: Component,
    args: [{ selector: "app-company-brand", standalone: true, imports: [RouterModule], template: `<a [routerLink]="homeRoute" class="flex min-w-0 flex-1 items-center gap-3 transition-opacity duration-200 hover:opacity-80">
  @if (isLoading()) {
    <div class="flex w-full items-center gap-3">
      <div class="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-background-alt"></div>
      <div class="flex-1 min-w-0 space-y-1">
        <div class="h-3 w-24 rounded bg-background-alt animate-pulse"></div>
        <div class="h-2.5 w-28 rounded bg-background-alt animate-pulse"></div>
      </div>
    </div>
  } @else {
    <div class="flex min-w-0 items-center gap-3">
      @if (imageUrl() && !imageError()) {
        <img
          [src]="imageUrl()"
          [alt]="companyName() + ' logo'"
          class="h-10 w-auto max-w-[9rem] shrink-0 rounded-md object-contain transition-all duration-300"
          (error)="onImageError()"
        />
      } @else {
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/10 font-heading text-sm font-semibold">
          {{ companyInitial() }}
        </div>
      }
      <div class="flex min-w-0 flex-col">
        <span class="truncate font-heading text-sm font-semibold text-primary">{{ companyName() }}</span>
        <span class="truncate text-[11px] leading-none text-text-secondary">{{ contextLabel }}</span>
      </div>
    </div>
  }
</a>` }]
  }], () => [], { homeRoute: [{
    type: Input
  }], contextLabel: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyBrandComponent, { className: "CompanyBrandComponent", filePath: "src/app/shared/components/company-brand/company-brand.component.ts", lineNumber: 12 });
})();

// src/app/shared/components/theme-switcher/theme-switcher.component.ts
var _forTrack02 = ($index, $item) => $item.value;
function ThemeSwitcherComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2);
    \u0275\u0275domElement(1, "circle", 4)(2, "line", 5)(3, "line", 6)(4, "line", 7)(5, "line", 8)(6, "line", 9)(7, "line", 10)(8, "line", 11)(9, "line", 12);
    \u0275\u0275domElementEnd();
  }
}
function ThemeSwitcherComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2);
    \u0275\u0275domElement(1, "path", 13);
    \u0275\u0275domElementEnd();
  }
}
function ThemeSwitcherComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 2);
    \u0275\u0275domElement(1, "rect", 14)(2, "line", 15)(3, "line", 16);
    \u0275\u0275domElementEnd();
  }
}
function ThemeSwitcherComponent_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 20);
    \u0275\u0275domElement(1, "circle", 4)(2, "line", 5)(3, "line", 6)(4, "line", 7)(5, "line", 8)(6, "line", 9)(7, "line", 10)(8, "line", 11)(9, "line", 12);
    \u0275\u0275domElementEnd();
  }
}
function ThemeSwitcherComponent_Conditional_5_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 20);
    \u0275\u0275domElement(1, "path", 13);
    \u0275\u0275domElementEnd();
  }
}
function ThemeSwitcherComponent_Conditional_5_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 20);
    \u0275\u0275domElement(1, "rect", 14)(2, "line", 15)(3, "line", 16);
    \u0275\u0275domElementEnd();
  }
}
function ThemeSwitcherComponent_Conditional_5_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 22);
    \u0275\u0275domElement(1, "polyline", 23);
    \u0275\u0275domElementEnd();
  }
}
function ThemeSwitcherComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 18);
    \u0275\u0275domListener("click", function ThemeSwitcherComponent_Conditional_5_For_2_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectTheme(option_r2.value));
    });
    \u0275\u0275domElementStart(1, "span", 19);
    \u0275\u0275conditionalCreate(2, ThemeSwitcherComponent_Conditional_5_For_2_Conditional_2_Template, 10, 0, ":svg:svg", 20)(3, ThemeSwitcherComponent_Conditional_5_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 20)(4, ThemeSwitcherComponent_Conditional_5_For_2_Conditional_4_Template, 4, 0, ":svg:svg", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, ThemeSwitcherComponent_Conditional_5_For_2_Conditional_7_Template, 2, 0, ":svg:svg", 22);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary-50", ctx_r2.themeService.theme() === option_r2.value)("text-primary", ctx_r2.themeService.theme() === option_r2.value)("font-semibold", ctx_r2.themeService.theme() === option_r2.value)("text-text-secondary", ctx_r2.themeService.theme() !== option_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(option_r2.value === "light" ? 2 : option_r2.value === "dark" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.themeService.theme() === option_r2.value ? 7 : -1);
  }
}
function ThemeSwitcherComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, ThemeSwitcherComponent_Conditional_5_For_2_Template, 8, 11, "button", 17, _forTrack02);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.options);
  }
}
var ThemeSwitcherComponent = class _ThemeSwitcherComponent {
  themeService = inject(ThemeService);
  isOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "isOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  options = [
    { value: "light", label: "Clair" },
    { value: "dark", label: "Sombre" },
    { value: "system", label: "Syst\xE8me" }
  ];
  currentLabel() {
    const t = this.themeService.theme();
    return t === "light" ? "Th\xE8me clair" : t === "dark" ? "Th\xE8me sombre" : "Th\xE8me syst\xE8me";
  }
  toggleDropdown() {
    this.isOpen.update((v) => !v);
  }
  selectTheme(theme) {
    this.themeService.setTheme(theme);
    this.isOpen.set(false);
  }
  onDocumentClick() {
    this.isOpen.set(false);
  }
  static \u0275fac = function ThemeSwitcherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeSwitcherComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeSwitcherComponent, selectors: [["app-theme-switcher"]], hostBindings: function ThemeSwitcherComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ThemeSwitcherComponent_click_HostBindingHandler() {
        return ctx.onDocumentClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 6, vars: 3, consts: [[1, "relative", 3, "click"], ["aria-label", "Changer le th\xE8me", 1, "relative", "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "text-text-secondary", "transition-colors", "duration-200", "hover:bg-background-alt", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "cursor-pointer", 3, "click", "title"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["role", "menu", "aria-label", "S\xE9lection du th\xE8me", 1, "absolute", "right-0", "mt-2", "w-44", "bg-surface", "border", "border-border", "rounded-xl", "shadow-lg", "z-50", "overflow-hidden", "py-1"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["x1", "8", "y1", "21", "x2", "16", "y2", "21"], ["x1", "12", "y1", "17", "x2", "12", "y2", "21"], ["role", "menuitem", 1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "font-sans", "text-sm", "transition-colors", "duration-150", "cursor-pointer", "text-left", 3, "bg-primary-50", "text-primary", "font-semibold", "text-text-secondary"], ["role", "menuitem", 1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "font-sans", "text-sm", "transition-colors", "duration-150", "cursor-pointer", "text-left", 3, "click"], [1, "w-4", "h-4", "shrink-0", "flex", "items-center", "justify-center"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], [1, "flex-1"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5", "text-primary", "shrink-0"], ["points", "20 6 9 17 4 12"]], template: function ThemeSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domListener("click", function ThemeSwitcherComponent_Template_div_click_0_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275domElementStart(1, "button", 1);
      \u0275\u0275domListener("click", function ThemeSwitcherComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275conditionalCreate(2, ThemeSwitcherComponent_Conditional_2_Template, 10, 0, ":svg:svg", 2)(3, ThemeSwitcherComponent_Conditional_3_Template, 2, 0, ":svg:svg", 2)(4, ThemeSwitcherComponent_Conditional_4_Template, 4, 0, ":svg:svg", 2);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(5, ThemeSwitcherComponent_Conditional_5_Template, 3, 0, "div", 3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275domProperty("title", ctx.currentLabel());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.themeService.theme() === "light" ? 2 : ctx.themeService.theme() === "dark" ? 3 : 4);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isOpen() ? 5 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeSwitcherComponent, [{
    type: Component,
    args: [{
      selector: "app-theme-switcher",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="relative" (click)="$event.stopPropagation()">
      <!-- Bouton d\xE9clencheur : ic\xF4ne selon le th\xE8me choisi -->
      <button
        (click)="toggleDropdown()"
        class="relative flex items-center justify-center w-10 h-10 rounded-full
               text-text-secondary transition-colors duration-200
               hover:bg-background-alt focus-visible:outline-none
               focus-visible:ring-[3px] focus-visible:ring-primary/25 cursor-pointer"
        [title]="currentLabel()"
        aria-label="Changer le th\xE8me"
      >
        @if (themeService.theme() === 'light') {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        } @else if (themeService.theme() === 'dark') {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        } @else {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        }
      </button>

      <!-- Dropdown -->
      @if (isOpen()) {
        <div
          class="absolute right-0 mt-2 w-44 bg-surface border border-border
                 rounded-xl shadow-lg z-50 overflow-hidden py-1"
          role="menu"
          aria-label="S\xE9lection du th\xE8me"
        >
          @for (option of options; track option.value) {
            <button
              (click)="selectTheme(option.value)"
              class="w-full flex items-center gap-3 px-4 py-2.5
                     font-sans text-sm transition-colors duration-150
                     cursor-pointer text-left"
              [class.bg-primary-50]="themeService.theme() === option.value"
              [class.text-primary]="themeService.theme() === option.value"
              [class.font-semibold]="themeService.theme() === option.value"
              [class.text-text-secondary]="themeService.theme() !== option.value"
              role="menuitem"
            >
              <span class="w-4 h-4 shrink-0 flex items-center justify-center">
                @if (option.value === 'light') {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                } @else if (option.value === 'dark') {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                } @else {
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                }
              </span>

              <span class="flex-1">{{ option.label }}</span>

              @if (themeService.theme() === option.value) {
                <svg class="w-3.5 h-3.5 text-primary shrink-0"
                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              }
            </button>
          }
        </div>
      }
    </div>
  `
    }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeSwitcherComponent, { className: "ThemeSwitcherComponent", filePath: "src/app/shared/components/theme-switcher/theme-switcher.component.ts", lineNumber: 119 });
})();

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  unreadCount = signal(
    0,
    ...ngDevMode ? [{ debugName: "unreadCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  notifications = signal(
    [],
    ...ngDevMode ? [{ debugName: "notifications" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fetchUnreadCount() {
    this.http.get(`${this.apiUrl}/notifications/unread-count`).subscribe({
      next: (res) => this.unreadCount.set(res.unread_count)
    });
  }
  fetchNotifications() {
    this.loading.set(true);
    this.http.get(`${this.apiUrl}/notifications`).subscribe({
      next: (res) => {
        this.notifications.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  markAsRead(id) {
    this.http.patch(`${this.apiUrl}/notifications/${id}/read`, {}).subscribe({
      next: () => {
        this.notifications.update((list) => list.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read_at: (/* @__PURE__ */ new Date()).toISOString() }) : n));
        this.unreadCount.update((c) => Math.max(0, c - 1));
      }
    });
  }
  markAllAsRead() {
    this.http.patch(`${this.apiUrl}/notifications/read-all`, {}).subscribe({
      next: () => {
        this.notifications.update((list) => list.map((n) => n.read_at ? n : __spreadProps(__spreadValues({}, n), { read_at: (/* @__PURE__ */ new Date()).toISOString() })));
        this.unreadCount.set(0);
      }
    });
  }
  pollTimer = null;
  startPolling(intervalMs = 3e4) {
    this.stopPolling();
    this.fetchUnreadCount();
    this.pollTimer = setInterval(() => {
      this.fetchUnreadCount();
      this.fetchNotifications();
    }, intervalMs);
  }
  stopPolling() {
    if (this.pollTimer !== null) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  incrementUnreadCount() {
    this.unreadCount.update((c) => c + 1);
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/notification-bell/notification-bell.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function NotificationBellComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount() > 9 ? "9+" : ctx_r0.unreadCount(), " ");
  }
}
function NotificationBellComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function NotificationBellComponent_Conditional_6_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllAsRead());
    });
    \u0275\u0275text(1, "Tout marquer comme lu");
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 3)(3, "path", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5, "Aucune notification");
    \u0275\u0275elementEnd()();
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "circle", 24)(2, "polyline", 25);
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "rect", 26)(2, "line", 27)(3, "line", 28)(4, "line", 29);
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "polyline", 30);
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "line", 31)(2, "line", 32);
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 34)(2, "polyline", 35)(3, "line", 36)(4, "line", 37);
    \u0275\u0275elementEnd();
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275listener("click", function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.closeDropdown());
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "div");
    \u0275\u0275conditionalCreate(3, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_3_Template, 3, 0, ":svg:svg", 20)(4, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_4_Template, 5, 0, ":svg:svg", 20)(5, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_5_Template, 2, 0, ":svg:svg", 20)(6, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_6_Template, 3, 0, ":svg:svg", 20)(7, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_7_Template, 2, 0, ":svg:svg", 20)(8, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Case_8_Template, 5, 0, ":svg:svg", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21)(10, "p", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 23);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const notif_r4 = \u0275\u0275nextContext().$implicit;
    const meta_r6 = \u0275\u0275readContextLet(0);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", ctx_r0.getRoute(notif_r4));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("w-8 h-8 rounded-full flex items-center justify-center shrink-0 ", meta_r6.colorClass));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = meta_r6.icon) === "clock" ? 3 : tmp_16_0 === "calendar" ? 4 : tmp_16_0 === "check" ? 5 : tmp_16_0 === "x" ? 6 : tmp_16_0 === "message" ? 7 : 8);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("font-semibold", !notif_r4.read_at);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getMessage(notif_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 9, notif_r4.created_at, "short", "", "fr"));
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 21)(2, "p", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notif_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("font-semibold", !notif_r4.read_at);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getMessage(notif_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 4, notif_r4.created_at, "short", "", "fr"));
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275listener("click", function NotificationBellComponent_Conditional_6_Conditional_7_For_1_Template_div_click_1_listener() {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markAsRead(notif_r4));
    });
    \u0275\u0275conditionalCreate(2, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_2_Template, 15, 14, "a", 17)(3, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Conditional_3_Template, 7, 9, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275storeLet(ctx_r0.getMeta(notif_r4));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary/5", !notif_r4.read_at);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getRoute(notif_r4) ? 2 : 3);
  }
}
function NotificationBellComponent_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NotificationBellComponent_Conditional_6_Conditional_7_For_1_Template, 4, 4, "div", 15, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.notifications());
  }
}
function NotificationBellComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NotificationBellComponent_Conditional_6_Conditional_4_Template, 2, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275conditionalCreate(6, NotificationBellComponent_Conditional_6_Conditional_6_Template, 6, 0, "div", 11)(7, NotificationBellComponent_Conditional_6_Conditional_7_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.unreadCount() > 0 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.notifications().length === 0 ? 6 : 7);
  }
}
var NotificationBellComponent = class _NotificationBellComponent {
  notificationService = inject(NotificationService);
  unreadCount = this.notificationService.unreadCount;
  notifications = this.notificationService.notifications;
  isOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "isOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static TYPE_META = {
    leave_request_created: { label: "Demande de cong\xE9", icon: "calendar", colorClass: "bg-primary/10 text-primary", route: "/manager/team/leaves/validation", defaultMessage: "Nouvelle demande de cong\xE9 \xE0 valider" },
    leave_request_approved: { label: "Cong\xE9 approuv\xE9", icon: "check", colorClass: "bg-success/10 text-success", route: "/employee/leaves/history", defaultMessage: "Votre demande de cong\xE9 a \xE9t\xE9 approuv\xE9e" },
    leave_request_rejected: { label: "Cong\xE9 refus\xE9", icon: "x", colorClass: "bg-error/10 text-error", route: "/employee/leaves/history", defaultMessage: "Votre demande de cong\xE9 a \xE9t\xE9 refus\xE9e" },
    attendance_pending: { label: "D\xE9claration en attente", icon: "clipboard", colorClass: "bg-primary/10 text-primary", route: "/manager/attendance/validation", defaultMessage: "Nouvelle d\xE9claration de pr\xE9sence \xE0 valider" },
    attendance_validated: { label: "D\xE9claration valid\xE9e", icon: "check", colorClass: "bg-success/10 text-success", route: "/employee/attendance/history", defaultMessage: "Votre d\xE9claration de pr\xE9sence a \xE9t\xE9 valid\xE9e" },
    attendance_rejected: { label: "D\xE9claration refus\xE9e", icon: "x", colorClass: "bg-error/10 text-error", route: "/employee/attendance/history", defaultMessage: "Votre d\xE9claration de pr\xE9sence a \xE9t\xE9 refus\xE9e" },
    clock_in_reminder: { label: "Rappel de pr\xE9sence", icon: "clock", colorClass: "bg-primary/10 text-primary", route: "/employee/attendance", defaultMessage: "Rappel de pr\xE9sence" },
    clock_out_reminder: { label: "Rappel de pointage", icon: "clock", colorClass: "bg-warning/10 text-warning", route: "/employee/attendance", defaultMessage: "Rappel heures travaill\xE9es" },
    pending_approvals: { label: "D\xE9clarations en attente", icon: "clipboard", colorClass: "bg-primary/10 text-primary", route: "/manager/attendance", defaultMessage: "D\xE9clarations en attente" },
    task_assigned: { label: "T\xE2che assign\xE9e", icon: "calendar", colorClass: "bg-primary/10 text-primary", route: "", defaultMessage: "Une t\xE2che vous a \xE9t\xE9 assign\xE9e" },
    task_status_changed: { label: "Statut de t\xE2che", icon: "check", colorClass: "bg-primary/10 text-primary", route: "", defaultMessage: "Le statut d'une t\xE2che a chang\xE9" },
    task_comment: { label: "Commentaire", icon: "message", colorClass: "bg-primary/10 text-primary", route: "", defaultMessage: "Nouveau commentaire sur une t\xE2che" },
    task_deadline_reminder: { label: "\xC9ch\xE9ance de t\xE2che", icon: "clock", colorClass: "bg-warning/10 text-warning", route: "", defaultMessage: "Une t\xE2che arrive \xE0 \xE9ch\xE9ance" }
  };
  ngOnInit() {
    this.notificationService.startPolling(3e4);
  }
  ngOnDestroy() {
    this.notificationService.stopPolling();
  }
  toggleDropdown() {
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      this.notificationService.fetchNotifications();
    }
  }
  closeDropdown() {
    this.isOpen.set(false);
  }
  markAsRead(notification) {
    this.notificationService.markAsRead(notification.id);
  }
  markAllAsRead() {
    this.notificationService.markAllAsRead();
  }
  getType(notification) {
    return notification.data?.["type"] ?? notification.type.split("\\").pop()?.replace(/Notification$/, "") ?? "";
  }
  getMeta(notification) {
    return _NotificationBellComponent.TYPE_META[this.getType(notification)] ?? { label: "Notification", icon: "clipboard", colorClass: "bg-background-alt text-text-secondary", route: "", defaultMessage: notification.data?.["message"] ?? "" };
  }
  getRoute(notification) {
    return notification.data?.["route"] || this.getMeta(notification).route;
  }
  getMessage(notification) {
    return notification.data?.["message"] || this.getMeta(notification).defaultMessage;
  }
  static \u0275fac = function NotificationBellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationBellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationBellComponent, selectors: [["app-notification-bell"]], decls: 7, vars: 2, consts: [[1, "relative"], [1, "relative", "p-2", "rounded-lg", "text-text-secondary", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["d", "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"], ["d", "M10.3 21a1.94 1.94 0 0 0 3.4 0"], [1, "absolute", "-top-0.5", "-right-0.5", "w-4.5", "h-4.5", "bg-error", "text-text-inverse", "text-[10px]", "font-bold", "rounded-full", "flex", "items-center", "justify-center"], [1, "absolute", "right-0", "mt-2", "w-80", "bg-surface", "border", "border-border", "rounded-xl", "shadow-xl", "z-50", "overflow-hidden"], [1, "px-4", "py-3", "border-b", "border-border", "flex", "items-center", "justify-between"], [1, "text-sm", "font-bold", "text-text-heading"], [1, "text-xs", "font-semibold", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer"], [1, "max-h-80", "overflow-y-auto"], [1, "p-6", "text-center"], [1, "text-xs", "font-semibold", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-8", "h-8", "text-text-muted", "mx-auto", "mb-2"], [1, "text-sm", "text-text-muted"], [1, "px-4", "py-3", "border-b", "border-border", "last:border-b-0", "hover:bg-background-alt", "transition-colors", 3, "bg-primary/5"], [1, "px-4", "py-3", "border-b", "border-border", "last:border-b-0", "hover:bg-background-alt", "transition-colors", 3, "click"], [1, "block", 3, "routerLink"], [1, "flex", "items-start", "gap-3"], [1, "block", 3, "click", "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], [1, "flex-1", "min-w-0"], [1, "text-sm", "text-text"], [1, "text-xs", "text-text-muted", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["points", "20 6 9 17 4 12"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"]], template: function NotificationBellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationBellComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, NotificationBellComponent_Conditional_5_Template, 2, 1, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, NotificationBellComponent_Conditional_6_Template, 8, 2, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.unreadCount() > 0 ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isOpen() ? 6 : -1);
    }
  }, dependencies: [RouterModule, RouterLink, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationBellComponent, [{
    type: Component,
    args: [{ selector: "app-notification-bell", standalone: true, imports: [RouterModule, DatePipe], template: `<div class="relative">
  <button (click)="toggleDropdown()" class="relative p-2 rounded-lg text-text-secondary hover:bg-background-alt transition-colors cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
    </svg>
    @if (unreadCount() > 0) {
      <span class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-error text-text-inverse text-[10px] font-bold rounded-full flex items-center justify-center">
        {{ unreadCount() > 9 ? '9+' : unreadCount() }}
      </span>
    }
  </button>

  @if (isOpen()) {
    <div class="absolute right-0 mt-2 w-80 bg-surface border border-border rounded-xl shadow-xl z-50 overflow-hidden">
      <div class="px-4 py-3 border-b border-border flex items-center justify-between">
        <span class="text-sm font-bold text-text-heading">Notifications</span>
        @if (unreadCount() > 0) {
          <button (click)="markAllAsRead()" class="text-xs font-semibold text-primary hover:text-primary-hover transition-colors cursor-pointer">Tout marquer comme lu</button>
        }
      </div>

      <div class="max-h-80 overflow-y-auto">
        @if (notifications().length === 0) {
          <div class="p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-text-muted mx-auto mb-2">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
            <p class="text-sm text-text-muted">Aucune notification</p>
          </div>
        } @else {
          @for (notif of notifications(); track notif.id) {
            @let meta = getMeta(notif);
            <div class="px-4 py-3 border-b border-border last:border-b-0 hover:bg-background-alt transition-colors"
              [class.bg-primary/5]="!notif.read_at"
              (click)="markAsRead(notif)">
              @if (getRoute(notif)) {
                <a [routerLink]="getRoute(notif)" (click)="closeDropdown()" class="block">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 {{ meta.colorClass }}">
                      @switch (meta.icon) {
                        @case ('clock') {
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        }
                        @case ('calendar') {
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        }
                        @case ('check') {
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>
                        }
                        @case ('x') {
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        }
                        @case ('message') {
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        }
                        @default {
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                        }
                      }
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm text-text" [class.font-semibold]="!notif.read_at">{{ getMessage(notif) }}</p>
                      <p class="text-xs text-text-muted mt-0.5">{{ notif.created_at | date:'short':'':'fr' }}</p>
                    </div>
                  </div>
                </a>
              } @else {
                <div class="flex items-start gap-3">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm text-text" [class.font-semibold]="!notif.read_at">{{ getMessage(notif) }}</p>
                    <p class="text-xs text-text-muted mt-0.5">{{ notif.created_at | date:'short':'':'fr' }}</p>
                  </div>
                </div>
              }
            </div>
          }
        }
      </div>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationBellComponent, { className: "NotificationBellComponent", filePath: "src/app/shared/components/notification-bell/notification-bell.component.ts", lineNumber: 20 });
})();

export {
  BreadcrumbComponent,
  CompanyBrandComponent,
  ThemeSwitcherComponent,
  NotificationBellComponent
};
//# sourceMappingURL=chunk-DEIIVMAE.js.map
