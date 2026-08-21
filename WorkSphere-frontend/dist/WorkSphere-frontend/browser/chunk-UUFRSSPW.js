import {
  LeaveStatusBadgeComponent
} from "./chunk-M3GML5OZ.js";
import {
  AbsenceService
} from "./chunk-PXDOOJZG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-75TSC3TY.js";
import {
  DatePipe
} from "./chunk-FWX4MYVU.js";
import {
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ADF3COWQ.js";

// src/app/features/leaves/leave-validation/leave-validation.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeaveValidationComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 11);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LeaveValidationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 13);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function LeaveValidationComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "circle", 16)(3, "path", 17);
    \u0275\u0275elementEnd()();
  }
}
function LeaveValidationComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 18);
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4, "Aucune demande de cong\xE9 en attente");
    \u0275\u0275elementEnd()();
  }
}
function LeaveValidationComponent_Conditional_12_For_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36)(1, "span", 37);
    \u0275\u0275text(2, "Motif : ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const absence_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", absence_r3.reason, " ");
  }
}
function LeaveValidationComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "p", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 27)(11, "span", 28);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 29);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 30)(16, "span", 6);
    \u0275\u0275text(17, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 27)(22, "span", 31);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "app-leave-status-badge", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 33)(26, "button", 34);
    \u0275\u0275listener("click", function LeaveValidationComponent_Conditional_12_For_2_Template_button_click_26_listener() {
      const absence_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onApprove(absence_r3));
    });
    \u0275\u0275elementStart(27, "span", 6);
    \u0275\u0275text(28, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Approuver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 35);
    \u0275\u0275listener("click", function LeaveValidationComponent_Conditional_12_For_2_Template_button_click_30_listener() {
      const absence_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openReject(absence_r3));
    });
    \u0275\u0275elementStart(31, "span", 6);
    \u0275\u0275text(32, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Rejeter ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, LeaveValidationComponent_Conditional_12_For_2_Conditional_34_Template, 4, 1, "p", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const absence_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials(absence_r3.user?.first_name ?? "", absence_r3.user?.last_name ?? ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", absence_r3.user?.first_name, " ", absence_r3.user?.last_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(absence_r3.reference_code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.typeIcon(absence_r3.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.typeLabel(absence_r3.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(19, 13, absence_r3.start_date, "dd/MM/yyyy"), " \u2192 ", \u0275\u0275pipeBind2(20, 16, absence_r3.end_date, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", absence_r3.duration_days, " jour(s) ouvr\xE9(s) ");
    \u0275\u0275advance();
    \u0275\u0275property("status", absence_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(absence_r3.reason ? 34 : -1);
  }
}
function LeaveValidationComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, LeaveValidationComponent_Conditional_12_For_2_Template, 35, 19, "div", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pendingAbsences());
  }
}
function LeaveValidationComponent_Conditional_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 46);
    \u0275\u0275element(1, "circle", 16)(2, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function LeaveValidationComponent_Conditional_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Rejeter la demande ");
  }
}
function LeaveValidationComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function LeaveValidationComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeReject());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function LeaveValidationComponent_Conditional_13_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "h3", 40);
    \u0275\u0275text(3, "Rejeter la demande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 41);
    \u0275\u0275text(5, "Le motif sera visible par l'employ\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 42);
    \u0275\u0275listener("ngModelChange", function LeaveValidationComponent_Conditional_13_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rejectReason.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "div", 43)(8, "button", 44);
    \u0275\u0275listener("click", function LeaveValidationComponent_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeReject());
    });
    \u0275\u0275text(9, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 45);
    \u0275\u0275listener("click", function LeaveValidationComponent_Conditional_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onReject());
    });
    \u0275\u0275conditionalCreate(11, LeaveValidationComponent_Conditional_13_Conditional_11_Template, 3, 0, ":svg:svg", 46)(12, LeaveValidationComponent_Conditional_13_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.rejectReason());
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.rejecting() || !ctx_r0.rejectReason().trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.rejecting() ? 11 : 12);
  }
}
var LeaveValidationComponent = class _LeaveValidationComponent {
  queue = input(
    "manager",
    ...ngDevMode ? [{ debugName: "queue" }] : (
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
  rejectAbsenceId = signal(
    null,
    ...ngDevMode ? [{ debugName: "rejectAbsenceId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rejectReason = signal(
    "",
    ...ngDevMode ? [{ debugName: "rejectReason" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rejecting = signal(
    false,
    ...ngDevMode ? [{ debugName: "rejecting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pendingAbsences = computed(
    () => this.absences().filter((a) => a.status === "EN_ATTENTE"),
    ...ngDevMode ? [{ debugName: "pendingAbsences" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pendingCount = computed(
    () => this.pendingAbsences().length,
    ...ngDevMode ? [{ debugName: "pendingCount" }] : (
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
    this.absenceService.getAbsences({ status: "EN_ATTENTE", queue: this.queue() }).subscribe({
      next: (absences) => {
        this.absences.set(absences);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Erreur lors du chargement des demandes de cong\xE9.");
      }
    });
  }
  initials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
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
  onApprove(absence) {
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    this.absenceService.approve(absence.id).subscribe({
      next: () => {
        this.absences.update((list) => list.filter((a) => a.id !== absence.id));
        this.loading.set(false);
        this.success.set(`Demande ${absence.reference_code} approuv\xE9e.`);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Erreur lors de l'approbation.");
      }
    });
  }
  openReject(absence) {
    this.rejectAbsenceId.set(absence.id);
    this.rejectReason.set("");
  }
  closeReject() {
    this.rejectAbsenceId.set(null);
    this.rejectReason.set("");
  }
  onReject() {
    const id = this.rejectAbsenceId();
    if (id === null || !this.rejectReason().trim())
      return;
    this.rejecting.set(true);
    this.error.set(null);
    this.success.set(null);
    this.absenceService.reject(id, this.rejectReason()).subscribe({
      next: () => {
        this.absences.update((list) => list.filter((a) => a.id !== id));
        this.closeReject();
        this.rejecting.set(false);
        this.success.set("Demande rejet\xE9e.");
      },
      error: (err) => {
        this.rejecting.set(false);
        this.error.set(err.error?.message || "Erreur lors du rejet.");
      }
    });
  }
  static \u0275fac = function LeaveValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveValidationComponent, selectors: [["app-leave-validation"]], inputs: { queue: [1, "queue"] }, decls: 14, vars: 5, consts: [[1, "flex", "flex-col", "gap-4", "w-full"], [1, "bg-error-container", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "bg-secondary-container/30", "border", "border-secondary/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "text-text-secondary"], [1, "text-sm", "text-primary", "hover:text-primary-dark", "flex", "items-center", "gap-1", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-base"], [1, "flex", "justify-center", "py-16"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "py-16", "flex", "flex-col", "items-center", "gap-3", "custom-shadow"], [1, "flex", "flex-col", "gap-4"], [1, "fixed", "inset-0", "z-50", "bg-black/40", "flex", "items-center", "justify-center", "p-4"], [1, "material-symbols-outlined", "text-error", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-error"], [1, "material-symbols-outlined", "text-secondary", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-secondary"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-primary"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "material-symbols-outlined", "text-[40px]", "text-text-muted"], [1, "font-sans", "font-medium", "text-sm", "text-text-secondary"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "p-5", "custom-shadow"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "gap-4"], [1, "flex", "items-center", "gap-4", "min-w-0"], [1, "w-11", "h-11", "rounded-full", "bg-primary/10", "text-primary", "flex", "items-center", "justify-center", "font-heading", "font-bold", "text-sm", "shrink-0"], [1, "min-w-0"], [1, "font-sans", "font-semibold", "text-sm", "text-text-heading", "truncate"], [1, "text-xs", "text-on-surface-variant", "font-mono", "mt-0.5"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-base", "text-primary"], [1, "text-sm", "font-medium", "text-text-heading"], [1, "text-sm", "text-on-surface-variant", "flex", "items-center", "gap-1"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-full", "bg-background-alt", "text-xs", "font-medium", "text-text-heading"], [3, "status"], [1, "lg:ml-auto", "flex", "items-center", "gap-2", "shrink-0"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "bg-success", "text-white", "text-xs", "font-semibold", "hover:opacity-90", "transition-opacity", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "rounded-lg", "border", "border-error/30", "text-error", "text-xs", "font-semibold", "hover:bg-error-container/40", "transition-colors", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], [1, "mt-3", "text-sm", "text-on-surface-variant", "bg-background-alt", "border", "border-outline-variant", "rounded-lg", "px-4", "py-3"], [1, "font-semibold", "text-text-heading"], [1, "fixed", "inset-0", "z-50", "bg-black/40", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-white", "rounded-xl", "p-6", "w-full", "max-w-md", "custom-shadow", 3, "click"], [1, "font-heading", "font-bold", "text-lg", "text-text-heading", "mb-1"], [1, "text-sm", "text-on-surface-variant", "mb-4"], ["rows", "3", "placeholder", "Motif du rejet (obligatoire)...", 1, "w-full", "rounded-lg", "border-outline-variant", "focus:ring-2", "focus:ring-primary/50", "text-sm", "px-4", "py-3", "border", "outline-none", "transition-all", "resize-none", 3, "ngModelChange", "ngModel"], [1, "mt-4", "flex", "justify-end", "gap-3"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-on-surface-variant", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-5", "py-2", "rounded-lg", "bg-error", "text-white", "text-sm", "font-semibold", "hover:opacity-90", "transition-opacity", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"]], template: function LeaveValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, LeaveValidationComponent_Conditional_1_Template, 5, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, LeaveValidationComponent_Conditional_2_Template, 5, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function LeaveValidationComponent_Template_button_click_6_listener() {
        return ctx.loadAbsences();
      });
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Actualiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, LeaveValidationComponent_Conditional_10_Template, 4, 0, "div", 7)(11, LeaveValidationComponent_Conditional_11_Template, 5, 0, "div", 8)(12, LeaveValidationComponent_Conditional_12_Template, 3, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, LeaveValidationComponent_Conditional_13_Template, 13, 3, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 2 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.pendingCount(), " demande(s) en attente de validation ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 10 : ctx.pendingAbsences().length === 0 ? 11 : 12);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.rejectAbsenceId() !== null ? 13 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LeaveStatusBadgeComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveValidationComponent, [{
    type: Component,
    args: [{ selector: "app-leave-validation", standalone: true, imports: [DatePipe, FormsModule, LeaveStatusBadgeComponent], template: `<div class="flex flex-col gap-4 w-full">
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

  <div class="flex items-center justify-between">
    <p class="text-sm text-text-secondary">
      {{ pendingCount() }} demande(s) en attente de validation
    </p>
    <button (click)="loadAbsences()" class="text-sm text-primary hover:text-primary-dark flex items-center gap-1 cursor-pointer">
      <span class="material-symbols-outlined text-base">refresh</span>
      Actualiser
    </button>
  </div>

  @if (loading()) {
    <div class="flex justify-center py-16">
      <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
    </div>
  } @else if (pendingAbsences().length === 0) {
    <div class="bg-white border border-outline-variant rounded-xl py-16 flex flex-col items-center gap-3 custom-shadow">
      <span class="material-symbols-outlined text-[40px] text-text-muted">task_alt</span>
      <p class="font-sans font-medium text-sm text-text-secondary">Aucune demande de cong\xE9 en attente</p>
    </div>
  } @else {
    <div class="flex flex-col gap-4">
      @for (absence of pendingAbsences(); track absence.id) {
        <div class="bg-white border border-outline-variant rounded-xl p-5 custom-shadow">
          <div class="flex flex-col lg:flex-row lg:items-center gap-4">
            <div class="flex items-center gap-4 min-w-0">
              <div class="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm shrink-0">
                {{ initials(absence.user?.first_name ?? '', absence.user?.last_name ?? '') }}
              </div>
              <div class="min-w-0">
                <p class="font-sans font-semibold text-sm text-text-heading truncate">
                  {{ absence.user?.first_name }} {{ absence.user?.last_name }}
                </p>
                <p class="text-xs text-on-surface-variant font-mono mt-0.5">{{ absence.reference_code }}</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-base text-primary">{{ typeIcon(absence.type) }}</span>
              <span class="text-sm font-medium text-text-heading">{{ typeLabel(absence.type) }}</span>
            </div>

            <div class="text-sm text-on-surface-variant flex items-center gap-1">
              <span class="material-symbols-outlined text-base">calendar_month</span>
              {{ absence.start_date | date:'dd/MM/yyyy' }} \u2192 {{ absence.end_date | date:'dd/MM/yyyy' }}
            </div>

            <div class="flex items-center gap-2">
              <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-background-alt text-xs font-medium text-text-heading">
                {{ absence.duration_days }} jour(s) ouvr\xE9(s)
              </span>
              <app-leave-status-badge [status]="absence.status" />
            </div>

            <div class="lg:ml-auto flex items-center gap-2 shrink-0">
              <button (click)="onApprove(absence)" [disabled]="loading()"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-success text-white text-xs font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer">
                <span class="material-symbols-outlined text-base">check</span>
                Approuver
              </button>
              <button (click)="openReject(absence)" [disabled]="loading()"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-error/30 text-error text-xs font-semibold hover:bg-error-container/40 transition-colors disabled:opacity-50 cursor-pointer">
                <span class="material-symbols-outlined text-base">close</span>
                Rejeter
              </button>
            </div>
          </div>

          @if (absence.reason) {
            <p class="mt-3 text-sm text-on-surface-variant bg-background-alt border border-outline-variant rounded-lg px-4 py-3">
              <span class="font-semibold text-text-heading">Motif : </span>{{ absence.reason }}
            </p>
          }
        </div>
      }
    </div>
  }
</div>

@if (rejectAbsenceId() !== null) {
  <div class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" (click)="closeReject()">
    <div class="bg-white rounded-xl p-6 w-full max-w-md custom-shadow" (click)="$event.stopPropagation()">
      <h3 class="font-heading font-bold text-lg text-text-heading mb-1">Rejeter la demande</h3>
      <p class="text-sm text-on-surface-variant mb-4">Le motif sera visible par l'employ\xE9.</p>
      <textarea [ngModel]="rejectReason()" (ngModelChange)="rejectReason.set($event)" rows="3" placeholder="Motif du rejet (obligatoire)..."
        class="w-full rounded-lg border-outline-variant focus:ring-2 focus:ring-primary/50 text-sm px-4 py-3 border outline-none transition-all resize-none"></textarea>
      <div class="mt-4 flex justify-end gap-3">
        <button (click)="closeReject()"
          class="px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-background-alt transition-colors cursor-pointer">
          Annuler
        </button>
        <button (click)="onReject()" [disabled]="rejecting() || !rejectReason().trim()"
          class="px-5 py-2 rounded-lg bg-error text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer">
          @if (rejecting()) {
            <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          } @else {
            Rejeter la demande
          }
        </button>
      </div>
    </div>
  </div>
}
` }]
  }], null, { queue: [{ type: Input, args: [{ isSignal: true, alias: "queue", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveValidationComponent, { className: "LeaveValidationComponent", filePath: "src/app/features/leaves/leave-validation/leave-validation.component.ts", lineNumber: 14 });
})();

export {
  LeaveValidationComponent
};
//# sourceMappingURL=chunk-UUFRSSPW.js.map
