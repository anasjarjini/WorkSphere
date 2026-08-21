import {
  AbsenceService
} from "./chunk-PXDOOJZG.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/leaves/leave-balance/leave-balance.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeaveBalanceComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LeaveBalanceComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 7);
    \u0275\u0275domElement(2, "circle", 8)(3, "path", 9);
    \u0275\u0275domElementEnd()();
  }
}
function LeaveBalanceComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "span", 10);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Aucun solde n'est encore disponible pour ", ctx_r0.year(), ". Il sera initialis\xE9 par votre \xE9quipe RH. ");
  }
}
function LeaveBalanceComponent_Conditional_4_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span")(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div")(7, "p", 28);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 29);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "p", 30);
    \u0275\u0275text(12);
    \u0275\u0275domElementStart(13, "span", 31);
    \u0275\u0275text(14, "j");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(15, "div", 32);
    \u0275\u0275domElement(16, "div", 33);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div", 34)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const balance_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("w-10 h-10 rounded-full flex items-center justify-center ", ctx_r0.typeColor(balance_r3.type)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.typeIcon(balance_r3.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.typeLabel(balance_r3.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(balance_r3.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(balance_r3.remaining_days);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", balance_r3.allocated_days + balance_r3.carried_over_days > 0 ? ctx_r0.Math.min(100, balance_r3.used_days / (balance_r3.allocated_days + balance_r3.carried_over_days) * 100) : 0, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Allou\xE9 : ", balance_r3.allocated_days, " j");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Report\xE9 : ", balance_r3.carried_over_days, " j");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Utilis\xE9 : ", balance_r3.used_days, " j");
  }
}
function LeaveBalanceComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 4)(1, "div", 12)(2, "h2", 13);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 14);
    \u0275\u0275domListener("click", function LeaveBalanceComponent_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadBalances());
    });
    \u0275\u0275domElementStart(5, "span", 15);
    \u0275\u0275text(6, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(7, " Actualiser ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 16)(9, "div", 17)(10, "p", 18);
    \u0275\u0275text(11, "Restant");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "p", 19);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "p", 20);
    \u0275\u0275text(15, "jour(s) au total");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 17)(17, "p", 18);
    \u0275\u0275text(18, "Consomm\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "p", 21);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "p", 20);
    \u0275\u0275text(22, "jour(s) utilis\xE9s");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "div", 17)(24, "p", 18);
    \u0275\u0275text(25, "Allou\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "p", 22);
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "p", 20);
    \u0275\u0275text(29, "jour(s) (+ report)");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(30, "div", 23);
    \u0275\u0275repeaterCreate(31, LeaveBalanceComponent_Conditional_4_For_32_Template, 24, 12, "div", 24, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Solde annuel ", ctx_r0.year());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.totalRemaining());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.totalUsed());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.totalAllocated());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.balances());
  }
}
var LeaveBalanceComponent = class _LeaveBalanceComponent {
  Math = Math;
  absenceService = inject(AbsenceService);
  balances = signal(
    [],
    ...ngDevMode ? [{ debugName: "balances" }] : (
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
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasCongePaye = computed(
    () => this.balances().some((b) => b.type === "CONGE_PAYE"),
    ...ngDevMode ? [{ debugName: "hasCongePaye" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalRemaining = computed(
    () => this.balances().reduce((sum, b) => sum + (b.remaining_days ?? 0), 0),
    ...ngDevMode ? [{ debugName: "totalRemaining" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalUsed = computed(
    () => this.balances().reduce((sum, b) => sum + (b.used_days ?? 0), 0),
    ...ngDevMode ? [{ debugName: "totalUsed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalAllocated = computed(
    () => this.balances().reduce((sum, b) => sum + (b.allocated_days ?? 0) + (b.carried_over_days ?? 0), 0),
    ...ngDevMode ? [{ debugName: "totalAllocated" }] : (
      /* istanbul ignore next */
      []
    )
  );
  year = computed(
    () => this.balances()[0]?.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    ...ngDevMode ? [{ debugName: "year" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadBalances();
  }
  loadBalances() {
    this.loading.set(true);
    this.error.set(null);
    this.absenceService.getMyBalances().subscribe({
      next: (balances) => {
        this.balances.set(balances);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Erreur lors du chargement du solde.");
      }
    });
  }
  typeLabel(type) {
    switch (type) {
      case "CONGE_PAYE":
        return "Cong\xE9 pay\xE9";
      case "MALADIE":
        return "Maladie";
      case "SANS_SOLDE":
        return "Sans solde";
      case "AUTRE":
        return "Autre";
    }
  }
  typeIcon(type) {
    switch (type) {
      case "CONGE_PAYE":
        return "beach_access";
      case "MALADIE":
        return "medical_services";
      case "SANS_SOLDE":
        return "money_off";
      case "AUTRE":
        return "event_note";
    }
  }
  typeColor(type) {
    switch (type) {
      case "CONGE_PAYE":
        return "bg-primary/10 text-primary";
      case "MALADIE":
        return "bg-info-light text-info";
      case "SANS_SOLDE":
        return "bg-warning-light text-warning-dark";
      case "AUTRE":
        return "bg-background-alt text-text-muted";
    }
  }
  static \u0275fac = function LeaveBalanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveBalanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveBalanceComponent, selectors: [["app-leave-balance"]], decls: 5, vars: 2, consts: [[1, "flex", "flex-col", "gap-4", "w-full"], [1, "bg-error-container", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "flex", "justify-center", "py-16"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "py-16", "flex", "flex-col", "items-center", "gap-3", "custom-shadow"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "p-6", "custom-shadow"], [1, "material-symbols-outlined", "text-error", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-error"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-primary"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "material-symbols-outlined", "text-[40px]", "text-text-muted"], [1, "font-sans", "font-medium", "text-sm", "text-text-secondary"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "font-heading", "font-bold", "text-lg", "text-text-heading"], [1, "text-sm", "text-primary", "hover:text-primary-dark", "flex", "items-center", "gap-1", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-base"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4", "mb-8"], [1, "rounded-xl", "bg-background-alt", "border", "border-outline-variant", "p-5"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-on-surface-variant"], [1, "font-heading", "font-bold", "text-3xl", "text-primary", "mt-1"], [1, "text-xs", "text-on-surface-variant", "mt-1"], [1, "font-heading", "font-bold", "text-3xl", "text-warning-dark", "mt-1"], [1, "font-heading", "font-bold", "text-3xl", "text-text-heading", "mt-1"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "rounded-xl", "border", "border-outline-variant", "p-5"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "material-symbols-outlined"], [1, "font-sans", "font-semibold", "text-sm", "text-text-heading"], [1, "text-xs", "text-on-surface-variant"], [1, "font-heading", "font-bold", "text-2xl", "text-primary"], [1, "text-sm", "font-medium", "text-on-surface-variant", "ml-1"], [1, "mt-4", "h-2", "rounded-full", "bg-background-alt", "overflow-hidden"], [1, "h-full", "rounded-full", "bg-primary", "transition-all"], [1, "mt-2", "flex", "justify-between", "text-xs", "text-on-surface-variant"]], template: function LeaveBalanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, LeaveBalanceComponent_Conditional_1_Template, 5, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, LeaveBalanceComponent_Conditional_2_Template, 4, 0, "div", 2)(3, LeaveBalanceComponent_Conditional_3_Template, 5, 1, "div", 3)(4, LeaveBalanceComponent_Conditional_4_Template, 33, 4, "div", 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 2 : ctx.balances().length === 0 ? 3 : 4);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveBalanceComponent, [{
    type: Component,
    args: [{ selector: "app-leave-balance", standalone: true, imports: [], template: `<div class="flex flex-col gap-4 w-full">
  @if (error()) {
    <div class="bg-error-container border border-error/20 rounded-lg p-4 flex items-start gap-2">
      <span class="material-symbols-outlined text-error shrink-0 mt-0.5">error</span>
      <span class="text-sm font-medium text-error">{{ error() }}</span>
    </div>
  }

  @if (loading()) {
    <div class="flex justify-center py-16">
      <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
    </div>
  } @else if (balances().length === 0) {
    <div class="bg-white border border-outline-variant rounded-xl py-16 flex flex-col items-center gap-3 custom-shadow">
      <span class="material-symbols-outlined text-[40px] text-text-muted">account_balance_wallet</span>
      <p class="font-sans font-medium text-sm text-text-secondary">
        Aucun solde n'est encore disponible pour {{ year() }}. Il sera initialis\xE9 par votre \xE9quipe RH.
      </p>
    </div>
  } @else {
    <div class="bg-white border border-outline-variant rounded-xl p-6 custom-shadow">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-heading font-bold text-lg text-text-heading">Solde annuel {{ year() }}</h2>
        <button (click)="loadBalances()" class="text-sm text-primary hover:text-primary-dark flex items-center gap-1 cursor-pointer">
          <span class="material-symbols-outlined text-base">refresh</span>
          Actualiser
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="rounded-xl bg-background-alt border border-outline-variant p-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Restant</p>
          <p class="font-heading font-bold text-3xl text-primary mt-1">{{ totalRemaining() }}</p>
          <p class="text-xs text-on-surface-variant mt-1">jour(s) au total</p>
        </div>
        <div class="rounded-xl bg-background-alt border border-outline-variant p-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Consomm\xE9</p>
          <p class="font-heading font-bold text-3xl text-warning-dark mt-1">{{ totalUsed() }}</p>
          <p class="text-xs text-on-surface-variant mt-1">jour(s) utilis\xE9s</p>
        </div>
        <div class="rounded-xl bg-background-alt border border-outline-variant p-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Allou\xE9</p>
          <p class="font-heading font-bold text-3xl text-text-heading mt-1">{{ totalAllocated() }}</p>
          <p class="text-xs text-on-surface-variant mt-1">jour(s) (+ report)</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        @for (balance of balances(); track balance.id) {
          <div class="rounded-xl border border-outline-variant p-5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-full flex items-center justify-center {{ typeColor(balance.type) }}">
                  <span class="material-symbols-outlined">{{ typeIcon(balance.type) }}</span>
                </span>
                <div>
                  <p class="font-sans font-semibold text-sm text-text-heading">{{ typeLabel(balance.type) }}</p>
                  <p class="text-xs text-on-surface-variant">{{ balance.year }}</p>
                </div>
              </div>
              <p class="font-heading font-bold text-2xl text-primary">{{ balance.remaining_days }}<span class="text-sm font-medium text-on-surface-variant ml-1">j</span></p>
            </div>
            <div class="mt-4 h-2 rounded-full bg-background-alt overflow-hidden">
              <div class="h-full rounded-full bg-primary transition-all"
                [style.width.%]="balance.allocated_days + balance.carried_over_days > 0
                  ? Math.min(100, (balance.used_days / (balance.allocated_days + balance.carried_over_days)) * 100)
                  : 0"></div>
            </div>
            <div class="mt-2 flex justify-between text-xs text-on-surface-variant">
              <span>Allou\xE9 : {{ balance.allocated_days }} j</span>
              <span>Report\xE9 : {{ balance.carried_over_days }} j</span>
              <span>Utilis\xE9 : {{ balance.used_days }} j</span>
            </div>
          </div>
        }
      </div>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveBalanceComponent, { className: "LeaveBalanceComponent", filePath: "src/app/features/leaves/leave-balance/leave-balance.component.ts", lineNumber: 12 });
})();
export {
  LeaveBalanceComponent
};
//# sourceMappingURL=chunk-SGG5SGXQ.js.map
