import {
  ServiceRequestService
} from "./chunk-ZKL55WQO.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  Router,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZST2RCVM.js";

// src/app/features/shared/service-requests/request-list/request-list.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function RequestListComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 12);
    \u0275\u0275domListener("click", function RequestListComponent_For_14_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedStatus.set(s_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary", ctx_r2.selectedStatus() === s_r2)("text-text-inverse", ctx_r2.selectedStatus() === s_r2)("bg-background-alt", ctx_r2.selectedStatus() !== s_r2)("text-text-secondary", ctx_r2.selectedStatus() !== s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2 === "ALL" ? "Toutes" : ctx_r2.getStatusLabel(s_r2), " ");
  }
}
function RequestListComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 13);
    \u0275\u0275domElement(1, "div", 14)(2, "div", 15)(3, "div", 16);
    \u0275\u0275domElementEnd();
  }
}
function RequestListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, RequestListComponent_Conditional_15_For_2_Template, 4, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function RequestListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 17);
    \u0275\u0275domElement(2, "path", 18);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "p", 19);
    \u0275\u0275text(4, "Aucune demande trouv\xE9e");
    \u0275\u0275domElementEnd()();
  }
}
function RequestListComponent_Conditional_17_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const req_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("De : ", req_r5.from_department.name);
  }
}
function RequestListComponent_Conditional_17_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const req_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xC0 : ", req_r5.to_department.name);
  }
}
function RequestListComponent_Conditional_17_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const req_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Priorit\xE9 : ", req_r5.priority, " ");
  }
}
function RequestListComponent_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 21);
    \u0275\u0275domListener("click", function RequestListComponent_Conditional_17_For_2_Template_div_click_0_listener() {
      const req_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewRequest(req_r5));
    });
    \u0275\u0275domElementStart(1, "div", 22)(2, "div", 23)(3, "h3", 24);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 25);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 27);
    \u0275\u0275conditionalCreate(10, RequestListComponent_Conditional_17_For_2_Conditional_10_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(11, RequestListComponent_Conditional_17_For_2_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(12, RequestListComponent_Conditional_17_For_2_Conditional_12_Template, 2, 1, "div", 28);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const req_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(req_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r5.reference_code);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(req_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(req_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(req_r5.from_department ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(req_r5.to_department ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(req_r5.priority ? 12 : -1);
  }
}
function RequestListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, RequestListComponent_Conditional_17_For_2_Template, 13, 8, "div", 20, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredRequests());
  }
}
var STATUS_LABELS = {
  PENDING: "En attente",
  APPROVED: "Approuv\xE9e",
  IN_DEVELOPMENT: "En d\xE9veloppement",
  TESTING: "En test",
  DEPLOYED: "D\xE9ploy\xE9e",
  REJECTED: "Rejet\xE9e"
};
var STATUS_CLASSES = {
  PENDING: "bg-accent-light text-accent-dark",
  APPROVED: "bg-info-light text-info-dark",
  IN_DEVELOPMENT: "bg-primary-light text-primary-dark",
  TESTING: "bg-warning-light text-warning-dark",
  DEPLOYED: "bg-success-light text-success-dark",
  REJECTED: "bg-error-light text-error-dark"
};
var RequestListComponent = class _RequestListComponent {
  requestService = inject(ServiceRequestService);
  authService = inject(AuthService);
  router = inject(Router);
  user = this.authService.currentUser;
  requests = signal(
    [],
    ...ngDevMode ? [{ debugName: "requests" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedStatus = signal(
    "ALL",
    ...ngDevMode ? [{ debugName: "selectedStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  baseRoute = computed(
    () => {
      const role = this.user()?.role;
      if (role === "HR_ADMIN")
        return "/admin";
      if (role === "MANAGER")
        return "/manager";
      return "/employee";
    },
    ...ngDevMode ? [{ debugName: "baseRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statuses = ["ALL", "PENDING", "APPROVED", "IN_DEVELOPMENT", "TESTING", "DEPLOYED", "REJECTED"];
  filteredRequests = computed(
    () => {
      const list = this.requests();
      const status = this.selectedStatus();
      if (status === "ALL")
        return list;
      return list.filter((r) => r.status === status);
    },
    ...ngDevMode ? [{ debugName: "filteredRequests" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    const role = this.user()?.role;
    const obs$ = role === "MANAGER" ? this.requestService.getDepartmentRequests() : role === "HR_ADMIN" ? this.requestService.getRequests() : this.requestService.getMyRequests();
    obs$.subscribe({
      next: (data) => {
        this.requests.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  getStatusLabel(status) {
    return STATUS_LABELS[status];
  }
  getStatusClass(status) {
    return STATUS_CLASSES[status];
  }
  newRequest() {
    this.router.navigate([`${this.baseRoute()}/requests/new`]);
  }
  viewRequest(request) {
    this.router.navigate([`${this.baseRoute()}/requests/${request.id}`]);
  }
  static \u0275fac = function RequestListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestListComponent, selectors: [["app-request-list"]], decls: 18, vars: 1, consts: [[1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-md", "hover:bg-primary-hover", "transition-colors", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-4", "py-1.5", "rounded-full", "text-sm", "font-medium", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-text-inverse", "bg-background-alt", "text-text-secondary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-12", "text-center"], [1, "px-4", "py-1.5", "rounded-full", "text-sm", "font-medium", "transition-colors", "cursor-pointer", 3, "click"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "animate-pulse"], [1, "h-5", "bg-background-alt", "rounded", "w-3/4", "mb-3"], [1, "h-4", "bg-background-alt", "rounded", "w-1/2", "mb-4"], [1, "h-4", "bg-background-alt", "rounded", "w-1/3"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-12", "h-12", "text-text-muted", "mx-auto", "mb-4"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], [1, "text-text-secondary", "font-medium"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "shadow-sm", "hover:shadow-md", "hover:-translate-y-0.5", "transition-all", "duration-200", "cursor-pointer", "flex", "flex-col", "gap-3"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "shadow-sm", "hover:shadow-md", "hover:-translate-y-0.5", "transition-all", "duration-200", "cursor-pointer", "flex", "flex-col", "gap-3", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0", "flex-1"], [1, "font-heading", "font-semibold", "text-text-heading", "truncate"], [1, "text-xs", "text-text-muted", "font-mono", "mt-0.5"], [1, "shrink-0", "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full"], [1, "flex", "items-center", "gap-4", "text-xs", "text-text-secondary"], [1, "text-xs", "font-semibold", "text-text-secondary", "border-t", "border-border", "pt-2"]], template: function RequestListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Demandes de service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Suivez les demandes inter-d\xE9partements");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "button", 4);
      \u0275\u0275domListener("click", function RequestListComponent_Template_button_click_7_listener() {
        return ctx.newRequest();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(8, "svg", 5);
      \u0275\u0275domElement(9, "line", 6)(10, "line", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(11, " Nouvelle demande ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(12, "div", 8);
      \u0275\u0275repeaterCreate(13, RequestListComponent_For_14_Template, 2, 9, "button", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(15, RequestListComponent_Conditional_15_Template, 3, 1, "div", 10)(16, RequestListComponent_Conditional_16_Template, 5, 0, "div", 11)(17, RequestListComponent_Conditional_17_Template, 3, 0, "div", 10);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 15 : ctx.filteredRequests().length === 0 ? 16 : 17);
    }
  }, dependencies: [RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestListComponent, [{
    type: Component,
    args: [{ selector: "app-request-list", standalone: true, imports: [RouterModule], template: `<div class="max-w-7xl mx-auto flex flex-col gap-6">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <h1 class="font-heading text-2xl font-bold text-text-heading">Demandes de service</h1>
      <p class="text-sm text-text-secondary mt-1">Suivez les demandes inter-d\xE9partements</p>
    </div>
    <button (click)="newRequest()"
      class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-primary-hover transition-colors flex items-center gap-2 cursor-pointer shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      Nouvelle demande
    </button>
  </div>

  <div class="flex flex-wrap gap-2">
    @for (s of statuses; track s) {
      <button (click)="selectedStatus.set(s)"
        class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer"
        [class.bg-primary]="selectedStatus() === s"
        [class.text-text-inverse]="selectedStatus() === s"
        [class.bg-background-alt]="selectedStatus() !== s"
        [class.text-text-secondary]="selectedStatus() !== s">
        {{ s === 'ALL' ? 'Toutes' : getStatusLabel(s) }}
      </button>
    }
  </div>

  @if (loading()) {
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (_ of [1,2,3]; track _) {
        <div class="bg-surface border border-border rounded-xl p-6 animate-pulse">
          <div class="h-5 bg-background-alt rounded w-3/4 mb-3"></div>
          <div class="h-4 bg-background-alt rounded w-1/2 mb-4"></div>
          <div class="h-4 bg-background-alt rounded w-1/3"></div>
        </div>
      }
    </div>
  } @else if (filteredRequests().length === 0) {
    <div class="bg-surface border border-border rounded-xl p-12 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-text-muted mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <p class="text-text-secondary font-medium">Aucune demande trouv\xE9e</p>
    </div>
  } @else {
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (req of filteredRequests(); track req.id) {
        <div (click)="viewRequest(req)"
          class="bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col gap-3">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 flex-1">
              <h3 class="font-heading font-semibold text-text-heading truncate">{{ req.title }}</h3>
              <p class="text-xs text-text-muted font-mono mt-0.5">{{ req.reference_code }}</p>
            </div>
            <span class="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full" [class]="getStatusClass(req.status)">
              {{ getStatusLabel(req.status) }}
            </span>
          </div>
          <div class="flex items-center gap-4 text-xs text-text-secondary">
            @if (req.from_department) {
              <span>De : {{ req.from_department.name }}</span>
            }
            @if (req.to_department) {
              <span>\xC0 : {{ req.to_department.name }}</span>
            }
          </div>
          @if (req.priority) {
            <div class="text-xs font-semibold text-text-secondary border-t border-border pt-2">
              Priorit\xE9 : {{ req.priority }}
            </div>
          }
        </div>
      }
    </div>
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestListComponent, { className: "RequestListComponent", filePath: "src/app/features/shared/service-requests/request-list/request-list.component.ts", lineNumber: 27 });
})();
export {
  RequestListComponent
};
//# sourceMappingURL=chunk-ZECCIG3K.js.map
