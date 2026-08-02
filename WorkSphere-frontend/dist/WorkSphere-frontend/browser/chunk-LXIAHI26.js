import {
  AbsenceService
} from "./chunk-6BD4SRHK.js";
import {
  Component,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZST2RCVM.js";

// src/app/features/leaves/leave-balances/leave-balances.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function _forTrack1($index, $item) {
  return this.userKey($item);
}
function LeaveBalancesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "span", 10);
    \u0275\u0275text(2, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LeaveBalancesComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 12);
    \u0275\u0275domListener("click", function LeaveBalancesComponent_For_5_Template_button_click_0_listener() {
      const type_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTypeFilter(type_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary", ctx_r0.typeFilter() === type_r3.value)("text-white", ctx_r0.typeFilter() === type_r3.value)("border-primary", ctx_r0.typeFilter() === type_r3.value)("bg-white", ctx_r0.typeFilter() !== type_r3.value)("text-text-secondary", ctx_r0.typeFilter() !== type_r3.value)("border-outline-variant", ctx_r0.typeFilter() !== type_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r3.label, " ");
  }
}
function LeaveBalancesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 13);
    \u0275\u0275domElement(2, "circle", 14)(3, "path", 15);
    \u0275\u0275domElementEnd()();
  }
}
function LeaveBalancesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span", 16);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Aucun solde disponible pour ", ctx_r0.year());
  }
}
function LeaveBalancesComponent_Conditional_12_For_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const balance_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(balance_r4.user?.email);
  }
}
function LeaveBalancesComponent_Conditional_12_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 22)(1, "td", 23)(2, "div", 24)(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div")(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(8, LeaveBalancesComponent_Conditional_12_For_19_Conditional_8_Template, 2, 1, "p", 27);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(9, "td", 28);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 29);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 29);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 30);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td", 23)(18, "span", 31);
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const balance_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials(balance_r4), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fullName(balance_r4));
    \u0275\u0275advance();
    \u0275\u0275conditional(balance_r4.user?.email ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.typeLabel(balance_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(balance_r4.allocated_days);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(balance_r4.carried_over_days);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(balance_r4.used_days);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-light", balance_r4.remaining_days > 0)("text-success-dark", balance_r4.remaining_days > 0)("bg-error-container", balance_r4.remaining_days === 0)("text-error", balance_r4.remaining_days === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", balance_r4.remaining_days, " j ");
  }
}
function LeaveBalancesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 18)(2, "table", 19)(3, "thead")(4, "tr", 20)(5, "th", 21);
    \u0275\u0275text(6, "Employ\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th", 21);
    \u0275\u0275text(8, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th", 21);
    \u0275\u0275text(10, "Allou\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th", 21);
    \u0275\u0275text(12, "Report\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th", 21);
    \u0275\u0275text(14, "Utilis\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th", 21);
    \u0275\u0275text(16, "Restant");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, LeaveBalancesComponent_Conditional_12_For_19_Template, 20, 16, "tr", 22, _forTrack1, true);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.filteredBalances());
  }
}
var LeaveBalancesComponent = class _LeaveBalancesComponent {
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
  typeFilter = signal(
    "TOUS",
    ...ngDevMode ? [{ debugName: "typeFilter" }] : (
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
  types = [
    { value: "TOUS", label: "Tous les types" },
    { value: "CONGE_PAYE", label: "Cong\xE9 pay\xE9" },
    { value: "MALADIE", label: "Maladie" },
    { value: "SANS_SOLDE", label: "Sans solde" },
    { value: "AUTRE", label: "Autre" }
  ];
  filteredBalances = computed(
    () => {
      const filter = this.typeFilter();
      if (filter === "TOUS")
        return this.balances();
      return this.balances().filter((b) => b.type === filter);
    },
    ...ngDevMode ? [{ debugName: "filteredBalances" }] : (
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
    this.absenceService.getTeamBalances().subscribe({
      next: (balances) => {
        this.balances.set(balances);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Erreur lors du chargement des soldes.");
      }
    });
  }
  setTypeFilter(filter) {
    this.typeFilter.set(filter);
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
  userKey(balance) {
    return `${balance.user_id}-${balance.type}-${balance.year}`;
  }
  fullName(balance) {
    const u = balance.user;
    if (!u)
      return `Utilisateur #${balance.user_id}`;
    return `${u.first_name} ${u.last_name}`;
  }
  initials(balance) {
    const u = balance.user;
    if (!u)
      return "?";
    return `${u.first_name.charAt(0)}${u.last_name.charAt(0)}`.toUpperCase();
  }
  static \u0275fac = function LeaveBalancesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveBalancesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveBalancesComponent, selectors: [["app-leave-balances"]], decls: 13, vars: 2, consts: [[1, "flex", "flex-col", "gap-4", "w-full"], [1, "bg-error-container", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "border", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-white", "border-primary", "bg-white", "text-text-secondary", "border-outline-variant"], [1, "text-sm", "text-primary", "hover:text-primary-dark", "flex", "items-center", "gap-1", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-base"], [1, "flex", "justify-center", "py-16"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "py-16", "flex", "flex-col", "items-center", "gap-3", "custom-shadow"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "overflow-hidden", "custom-shadow"], [1, "material-symbols-outlined", "text-error", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-error"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "border", "transition-colors", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-primary"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "material-symbols-outlined", "text-[40px]", "text-text-muted"], [1, "font-sans", "font-medium", "text-sm", "text-text-secondary"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-outline-variant", "bg-background-alt"], [1, "text-left", "font-semibold", "text-xs", "uppercase", "tracking-wider", "text-on-surface-variant", "px-5", "py-3"], [1, "border-b", "border-outline-variant/60", "last:border-b-0", "hover:bg-background-alt/50", "transition-colors"], [1, "px-5", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-primary/10", "text-primary", "flex", "items-center", "justify-center", "font-heading", "font-bold", "text-xs", "shrink-0"], [1, "font-medium", "text-text-heading"], [1, "text-xs", "text-on-surface-variant"], [1, "px-5", "py-4", "text-text-heading"], [1, "px-5", "py-4", "text-on-surface-variant"], [1, "px-5", "py-4", "text-warning-dark"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-full", "font-semibold", "text-xs"]], template: function LeaveBalancesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, LeaveBalancesComponent_Conditional_1_Template, 5, 1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275repeaterCreate(4, LeaveBalancesComponent_For_5_Template, 2, 13, "button", 4, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "button", 5);
      \u0275\u0275domListener("click", function LeaveBalancesComponent_Template_button_click_6_listener() {
        return ctx.loadBalances();
      });
      \u0275\u0275domElementStart(7, "span", 6);
      \u0275\u0275text(8, "refresh");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(9, " Actualiser ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(10, LeaveBalancesComponent_Conditional_10_Template, 4, 0, "div", 7)(11, LeaveBalancesComponent_Conditional_11_Template, 5, 1, "div", 8)(12, LeaveBalancesComponent_Conditional_12_Template, 20, 0, "div", 9);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.types);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 10 : ctx.filteredBalances().length === 0 ? 11 : 12);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveBalancesComponent, [{
    type: Component,
    args: [{ selector: "app-leave-balances", standalone: true, imports: [], template: '<div class="flex flex-col gap-4 w-full">\n  @if (error()) {\n    <div class="bg-error-container border border-error/20 rounded-lg p-4 flex items-start gap-2">\n      <span class="material-symbols-outlined text-error shrink-0 mt-0.5">error</span>\n      <span class="text-sm font-medium text-error">{{ error() }}</span>\n    </div>\n  }\n\n  <div class="flex flex-wrap items-center justify-between gap-3">\n    <div class="flex flex-wrap items-center gap-2">\n      @for (type of types; track type.value) {\n        <button (click)="setTypeFilter(type.value)"\n          class="px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer"\n          [class.bg-primary]="typeFilter() === type.value"\n          [class.text-white]="typeFilter() === type.value"\n          [class.border-primary]="typeFilter() === type.value"\n          [class.bg-white]="typeFilter() !== type.value"\n          [class.text-text-secondary]="typeFilter() !== type.value"\n          [class.border-outline-variant]="typeFilter() !== type.value">\n          {{ type.label }}\n        </button>\n      }\n    </div>\n    <button (click)="loadBalances()" class="text-sm text-primary hover:text-primary-dark flex items-center gap-1 cursor-pointer">\n      <span class="material-symbols-outlined text-base">refresh</span>\n      Actualiser\n    </button>\n  </div>\n\n  @if (loading()) {\n    <div class="flex justify-center py-16">\n      <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\n        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>\n        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>\n      </svg>\n    </div>\n  } @else if (filteredBalances().length === 0) {\n    <div class="bg-white border border-outline-variant rounded-xl py-16 flex flex-col items-center gap-3 custom-shadow">\n      <span class="material-symbols-outlined text-[40px] text-text-muted">account_balance_wallet</span>\n      <p class="font-sans font-medium text-sm text-text-secondary">Aucun solde disponible pour {{ year() }}</p>\n    </div>\n  } @else {\n    <div class="bg-white border border-outline-variant rounded-xl overflow-hidden custom-shadow">\n      <div class="overflow-x-auto">\n        <table class="w-full text-sm">\n          <thead>\n            <tr class="border-b border-outline-variant bg-background-alt">\n              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Employ\xE9</th>\n              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Type</th>\n              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Allou\xE9</th>\n              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Report\xE9</th>\n              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Utilis\xE9</th>\n              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Restant</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (balance of filteredBalances(); track userKey(balance)) {\n              <tr class="border-b border-outline-variant/60 last:border-b-0 hover:bg-background-alt/50 transition-colors">\n                <td class="px-5 py-4">\n                  <div class="flex items-center gap-3">\n                    <div class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-xs shrink-0">\n                      {{ initials(balance) }}\n                    </div>\n                    <div>\n                      <p class="font-medium text-text-heading">{{ fullName(balance) }}</p>\n                      @if (balance.user?.email) {\n                        <p class="text-xs text-on-surface-variant">{{ balance.user?.email }}</p>\n                      }\n                    </div>\n                  </div>\n                </td>\n                <td class="px-5 py-4 text-text-heading">{{ typeLabel(balance.type) }}</td>\n                <td class="px-5 py-4 text-on-surface-variant">{{ balance.allocated_days }}</td>\n                <td class="px-5 py-4 text-on-surface-variant">{{ balance.carried_over_days }}</td>\n                <td class="px-5 py-4 text-warning-dark">{{ balance.used_days }}</td>\n                <td class="px-5 py-4">\n                  <span class="inline-flex items-center px-2.5 py-1 rounded-full font-semibold text-xs"\n                    [class.bg-success-light]="balance.remaining_days > 0"\n                    [class.text-success-dark]="balance.remaining_days > 0"\n                    [class.bg-error-container]="balance.remaining_days === 0"\n                    [class.text-error]="balance.remaining_days === 0">\n                    {{ balance.remaining_days }} j\n                  </span>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveBalancesComponent, { className: "LeaveBalancesComponent", filePath: "src/app/features/leaves/leave-balances/leave-balances.component.ts", lineNumber: 12 });
})();

export {
  LeaveBalancesComponent
};
//# sourceMappingURL=chunk-LXIAHI26.js.map
