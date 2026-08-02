import {
  LeaveStatusBadgeComponent
} from "./chunk-AL2LI453.js";
import {
  AbsenceService
} from "./chunk-6BD4SRHK.js";
import {
  Component,
  Input,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZST2RCVM.js";

// src/app/features/leaves/leave-history/leave-history.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function LeaveHistoryComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 8);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LeaveHistoryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 10);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function LeaveHistoryComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function LeaveHistoryComponent_For_5_Template_button_click_0_listener() {
      const filter_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFilter(filter_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filter_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary", ctx_r0.statusFilter() === filter_r3.value)("text-white", ctx_r0.statusFilter() === filter_r3.value)("border-primary", ctx_r0.statusFilter() === filter_r3.value)("bg-white", ctx_r0.statusFilter() !== filter_r3.value)("text-text-secondary", ctx_r0.statusFilter() !== filter_r3.value)("border-outline-variant", ctx_r0.statusFilter() !== filter_r3.value)("hover:border-primary", ctx_r0.statusFilter() !== filter_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", filter_r3.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.countByStatus()[filter_r3.value] ?? 0);
  }
}
function LeaveHistoryComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "circle", 15)(3, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
function LeaveHistoryComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 17);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4, "Aucune demande de cong\xE9");
    \u0275\u0275elementEnd()();
  }
}
function LeaveHistoryComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Employ\xE9");
    \u0275\u0275elementEnd();
  }
}
function LeaveHistoryComponent_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function LeaveHistoryComponent_Conditional_8_For_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 26)(1, "div", 33)(2, "div", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const absence_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (absence_r4.user?.first_name ?? "").charAt(0), "", (absence_r4.user?.last_name ?? "").charAt(0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", absence_r4.user?.first_name, " ", absence_r4.user?.last_name);
  }
}
function LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38);
    \u0275\u0275element(1, "circle", 15)(2, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const absence_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCancel(absence_r4));
    });
    \u0275\u0275conditionalCreate(1, LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Conditional_1_Conditional_1_Template, 3, 0, ":svg:svg", 38)(2, LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Conditional_1_Conditional_2_Template, 2, 0, "span", 39);
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const absence_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.cancellingId() === absence_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.cancellingId() === absence_r4.id ? 1 : 2);
  }
}
function LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275conditionalCreate(1, LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Conditional_1_Template, 4, 2, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const absence_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canCancel(absence_r4) ? 1 : -1);
  }
}
function LeaveHistoryComponent_Conditional_8_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LeaveHistoryComponent_Conditional_8_For_19_Conditional_3_Template, 6, 4, "td", 26);
    \u0275\u0275elementStart(4, "td", 26)(5, "span", 27)(6, "span", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 26)(12, "span", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 26);
    \u0275\u0275element(15, "app-leave-status-badge", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, LeaveHistoryComponent_Conditional_8_For_19_Conditional_16_Template, 2, 1, "td", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const absence_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(absence_r4.reference_code);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.scope() !== "mine" ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.typeIcon(absence_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeLabel(absence_r4.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatPeriod(absence_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", absence_r4.duration_days, " j ");
    \u0275\u0275advance(2);
    \u0275\u0275property("status", absence_r4.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.scope() === "mine" ? 16 : -1);
  }
}
function LeaveHistoryComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 19)(2, "table", 20)(3, "thead")(4, "tr", 21)(5, "th", 22);
    \u0275\u0275text(6, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, LeaveHistoryComponent_Conditional_8_Conditional_7_Template, 2, 0, "th", 22);
    \u0275\u0275elementStart(8, "th", 22);
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 22);
    \u0275\u0275text(11, "P\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 22);
    \u0275\u0275text(13, "Jours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 22);
    \u0275\u0275text(15, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, LeaveHistoryComponent_Conditional_8_Conditional_16_Template, 2, 0, "th", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, LeaveHistoryComponent_Conditional_8_For_19_Template, 17, 8, "tr", 24, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.scope() !== "mine" ? 7 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.scope() === "mine" ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filteredAbsences());
  }
}
var LeaveHistoryComponent = class _LeaveHistoryComponent {
  scope = input(
    "mine",
    ...ngDevMode ? [{ debugName: "scope" }] : (
      /* istanbul ignore next */
      []
    )
  );
  absenceService = inject(AbsenceService);
  absences = signal(
    [],
    ...ngDevMode ? [{ debugName: "absences" }] : (
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
  success = signal(
    null,
    ...ngDevMode ? [{ debugName: "success" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statusFilter = signal(
    "TOUS",
    ...ngDevMode ? [{ debugName: "statusFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cancellingId = signal(
    null,
    ...ngDevMode ? [{ debugName: "cancellingId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filters = [
    { value: "TOUS", label: "Toutes" },
    { value: "EN_ATTENTE", label: "En attente" },
    { value: "APPROUVEE", label: "Approuv\xE9es" },
    { value: "REJETEE", label: "Rejet\xE9es" },
    { value: "ANNULEE", label: "Annul\xE9es" }
  ];
  filteredAbsences = computed(
    () => {
      const filter = this.statusFilter();
      if (filter === "TOUS")
        return this.absences();
      return this.absences().filter((a) => a.status === filter);
    },
    ...ngDevMode ? [{ debugName: "filteredAbsences" }] : (
      /* istanbul ignore next */
      []
    )
  );
  countByStatus = computed(
    () => {
      const counts = { TOUS: this.absences().length };
      for (const a of this.absences()) {
        counts[a.status] = (counts[a.status] ?? 0) + 1;
      }
      return counts;
    },
    ...ngDevMode ? [{ debugName: "countByStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadAbsences();
  }
  loadAbsences() {
    this.loading.set(true);
    this.error.set(null);
    this.absenceService.getAbsences().subscribe({
      next: (absences) => {
        this.absences.set(absences);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Erreur lors du chargement de l'historique.");
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
      default:
        return type;
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
      default:
        return "event_note";
    }
  }
  setFilter(filter) {
    this.statusFilter.set(filter);
  }
  canCancel(absence) {
    return this.scope() === "mine" && absence.status === "EN_ATTENTE";
  }
  onCancel(absence) {
    this.cancellingId.set(absence.id);
    this.error.set(null);
    this.success.set(null);
    this.absenceService.cancel(absence.id).subscribe({
      next: () => {
        this.absences.update((list) => list.map((a) => a.id === absence.id ? __spreadProps(__spreadValues({}, a), { status: "ANNULEE" }) : a));
        this.cancellingId.set(null);
        this.success.set(`Demande ${absence.reference_code} annul\xE9e.`);
      },
      error: (err) => {
        this.cancellingId.set(null);
        this.error.set(err.error?.message || "Erreur lors de l'annulation.");
      }
    });
  }
  formatPeriod(absence) {
    const start = new Date(absence.start_date);
    const end = new Date(absence.end_date);
    const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
    const fmt = (d) => `${d.getDate()} ${d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "")} ${d.getFullYear()}`;
    if (start.getTime() === end.getTime())
      return fmt(start);
    if (sameMonth)
      return `${start.getDate()} - ${fmt(end)}`;
    return `${fmt(start)} \u2192 ${fmt(end)}`;
  }
  static \u0275fac = function LeaveHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveHistoryComponent, selectors: [["app-leave-history"]], inputs: { scope: [1, "scope"] }, decls: 9, vars: 3, consts: [[1, "flex", "flex-col", "gap-4", "w-full"], [1, "bg-error-container", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "bg-secondary-container/30", "border", "border-secondary/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "border", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-white", "border-primary", "bg-white", "text-text-secondary", "border-outline-variant", "hover:border-primary"], [1, "flex", "justify-center", "py-16"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "py-16", "flex", "flex-col", "items-center", "gap-3", "custom-shadow"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "overflow-hidden", "custom-shadow"], [1, "material-symbols-outlined", "text-error", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-error"], [1, "material-symbols-outlined", "text-secondary", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-secondary"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "border", "transition-colors", "cursor-pointer", 3, "click"], [1, "ml-1", "text-xs", "opacity-70"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-primary"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "material-symbols-outlined", "text-[40px]", "text-text-muted"], [1, "font-sans", "font-medium", "text-sm", "text-text-secondary"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-outline-variant", "bg-background-alt"], [1, "text-left", "font-semibold", "text-xs", "uppercase", "tracking-wider", "text-on-surface-variant", "px-5", "py-3"], [1, "text-right", "font-semibold", "text-xs", "uppercase", "tracking-wider", "text-on-surface-variant", "px-5", "py-3"], [1, "border-b", "border-outline-variant/60", "last:border-b-0", "hover:bg-background-alt/50", "transition-colors"], [1, "px-5", "py-4", "font-mono", "text-xs", "text-on-surface-variant"], [1, "px-5", "py-4"], [1, "inline-flex", "items-center", "gap-1.5", "text-text-heading"], [1, "material-symbols-outlined", "text-base", "text-primary"], [1, "px-5", "py-4", "text-on-surface-variant"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-full", "bg-background-alt", "text-xs", "font-medium", "text-text-heading"], [3, "status"], [1, "px-5", "py-4", "text-right"], [1, "flex", "items-center", "gap-2"], [1, "w-7", "h-7", "rounded-full", "bg-primary/10", "text-primary", "flex", "items-center", "justify-center", "font-heading", "font-bold", "text-[11px]", "shrink-0"], [1, "font-medium", "text-text-heading"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1.5", "rounded-lg", "border", "border-outline-variant", "text-xs", "font-medium", "text-on-surface-variant", "hover:bg-background-alt", "hover:text-error", "transition-colors", "disabled:opacity-50", "cursor-pointer", 3, "disabled"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1.5", "rounded-lg", "border", "border-outline-variant", "text-xs", "font-medium", "text-on-surface-variant", "hover:bg-background-alt", "hover:text-error", "transition-colors", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-3.5", "w-3.5"], [1, "material-symbols-outlined", "text-sm"]], template: function LeaveHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, LeaveHistoryComponent_Conditional_1_Template, 5, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, LeaveHistoryComponent_Conditional_2_Template, 5, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275repeaterCreate(4, LeaveHistoryComponent_For_5_Template, 4, 16, "button", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, LeaveHistoryComponent_Conditional_6_Template, 4, 0, "div", 5)(7, LeaveHistoryComponent_Conditional_7_Template, 5, 0, "div", 6)(8, LeaveHistoryComponent_Conditional_8_Template, 20, 2, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filters);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 6 : ctx.filteredAbsences().length === 0 ? 7 : 8);
    }
  }, dependencies: [LeaveStatusBadgeComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-leave-history", standalone: true, imports: [LeaveStatusBadgeComponent], template: `<div class="flex flex-col gap-4 w-full">
  @if (error()) {
    <div class="bg-error-container border border-error/20 rounded-lg p-4 flex items-start gap-2">
      <span class="material-symbols-outlined text-error shrink-0 mt-0.5">error</span>
      <span class="text-sm font-medium text-error">{{ error() }}</span>
    </div>
  }

  @if (success()) {
    <div class="bg-secondary-container/30 border border-secondary/20 rounded-lg p-4 flex items-start gap-2">
      <span class="material-symbols-outlined text-secondary shrink-0 mt-0.5">check_circle</span>
      <span class="text-sm font-medium text-secondary">{{ success() }}</span>
    </div>
  }

  <div class="flex flex-wrap items-center gap-2">
    @for (filter of filters; track filter.value) {
      <button (click)="setFilter(filter.value)"
        class="px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer"
        [class.bg-primary]="statusFilter() === filter.value"
        [class.text-white]="statusFilter() === filter.value"
        [class.border-primary]="statusFilter() === filter.value"
        [class.bg-white]="statusFilter() !== filter.value"
        [class.text-text-secondary]="statusFilter() !== filter.value"
        [class.border-outline-variant]="statusFilter() !== filter.value"
        [class.hover:border-primary]="statusFilter() !== filter.value">
        {{ filter.label }}
        <span class="ml-1 text-xs opacity-70">{{ countByStatus()[filter.value] ?? 0 }}</span>
      </button>
    }
  </div>

  @if (loading()) {
    <div class="flex justify-center py-16">
      <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
    </div>
  } @else if (filteredAbsences().length === 0) {
    <div class="bg-white border border-outline-variant rounded-xl py-16 flex flex-col items-center gap-3 custom-shadow">
      <span class="material-symbols-outlined text-[40px] text-text-muted">event_busy</span>
      <p class="font-sans font-medium text-sm text-text-secondary">Aucune demande de cong\xE9</p>
    </div>
  } @else {
    <div class="bg-white border border-outline-variant rounded-xl overflow-hidden custom-shadow">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-outline-variant bg-background-alt">
              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">R\xE9f\xE9rence</th>
              @if (scope() !== 'mine') {
                <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Employ\xE9</th>
              }
              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Type</th>
              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">P\xE9riode</th>
              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Jours</th>
              <th class="text-left font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Statut</th>
              @if (scope() === 'mine') {
                <th class="text-right font-semibold text-xs uppercase tracking-wider text-on-surface-variant px-5 py-3">Action</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (absence of filteredAbsences(); track absence.id) {
              <tr class="border-b border-outline-variant/60 last:border-b-0 hover:bg-background-alt/50 transition-colors">
                <td class="px-5 py-4 font-mono text-xs text-on-surface-variant">{{ absence.reference_code }}</td>
                @if (scope() !== 'mine') {
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-[11px] shrink-0">
                        {{ (absence.user?.first_name ?? '').charAt(0) }}{{ (absence.user?.last_name ?? '').charAt(0) }}
                      </div>
                      <span class="font-medium text-text-heading">{{ absence.user?.first_name }} {{ absence.user?.last_name }}</span>
                    </div>
                  </td>
                }
                <td class="px-5 py-4">
                  <span class="inline-flex items-center gap-1.5 text-text-heading">
                    <span class="material-symbols-outlined text-base text-primary">{{ typeIcon(absence.type) }}</span>
                    {{ typeLabel(absence.type) }}
                  </span>
                </td>
                <td class="px-5 py-4 text-on-surface-variant">{{ formatPeriod(absence) }}</td>
                <td class="px-5 py-4">
                  <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-background-alt text-xs font-medium text-text-heading">
                    {{ absence.duration_days }} j
                  </span>
                </td>
                <td class="px-5 py-4"><app-leave-status-badge [status]="absence.status" /></td>
                @if (scope() === 'mine') {
                  <td class="px-5 py-4 text-right">
                    @if (canCancel(absence)) {
                      <button (click)="onCancel(absence)" [disabled]="cancellingId() === absence.id"
                        class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-outline-variant text-xs font-medium text-on-surface-variant hover:bg-background-alt hover:text-error transition-colors disabled:opacity-50 cursor-pointer">
                        @if (cancellingId() === absence.id) {
                          <svg class="animate-spin h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                        } @else {
                          <span class="material-symbols-outlined text-sm">cancel</span>
                        }
                        Annuler
                      </button>
                    }
                  </td>
                }
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  }
</div>
` }]
  }], null, { scope: [{ type: Input, args: [{ isSignal: true, alias: "scope", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveHistoryComponent, { className: "LeaveHistoryComponent", filePath: "src/app/features/leaves/leave-history/leave-history.component.ts", lineNumber: 14 });
})();

export {
  LeaveHistoryComponent
};
//# sourceMappingURL=chunk-YFF3T7AZ.js.map
