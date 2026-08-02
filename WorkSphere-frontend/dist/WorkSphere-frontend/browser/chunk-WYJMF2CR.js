import {
  AbsenceService
} from "./chunk-6BD4SRHK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7RQSPZX3.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZST2RCVM.js";

// src/app/features/leaves/leave-request/leave-request.component.ts
function LeaveRequestComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 22);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LeaveRequestComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 24);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function LeaveRequestComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.balanceRemaining());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("jour(s) restant(s) pour ", ctx_r0.typeLabel());
  }
}
function LeaveRequestComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Aucun solde renseign\xE9 pour ce type");
    \u0275\u0275elementEnd();
  }
}
function LeaveRequestComponent_Conditional_40_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 27);
    \u0275\u0275element(1, "circle", 28)(2, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function LeaveRequestComponent_Conditional_40_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.workingDays(), " ");
  }
}
function LeaveRequestComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 12);
    \u0275\u0275text(2, "Jours ouvr\xE9s demand\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275conditionalCreate(4, LeaveRequestComponent_Conditional_40_Conditional_4_Template, 3, 0, ":svg:svg", 27)(5, LeaveRequestComponent_Conditional_40_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.calculating() ? 4 : 5);
  }
}
function LeaveRequestComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 22);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "p", 31);
    \u0275\u0275text(5, "Solde insuffisant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("Cette demande n\xE9cessite ", ctx_r0.workingDays(), " jour(s) alors que votre solde est de ", ctx_r0.balanceRemaining(), " jour(s).");
  }
}
function LeaveRequestComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "circle", 28)(2, "path", 29);
    \u0275\u0275elementEnd();
  }
}
function LeaveRequestComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
var LeaveRequestComponent = class _LeaveRequestComponent {
  absenceService = inject(AbsenceService);
  today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  type = signal(
    "CONGE_PAYE",
    ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    )
  );
  startDate = signal(
    "",
    ...ngDevMode ? [{ debugName: "startDate" }] : (
      /* istanbul ignore next */
      []
    )
  );
  endDate = signal(
    "",
    ...ngDevMode ? [{ debugName: "endDate" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reason = signal(
    "",
    ...ngDevMode ? [{ debugName: "reason" }] : (
      /* istanbul ignore next */
      []
    )
  );
  balances = signal(
    [],
    ...ngDevMode ? [{ debugName: "balances" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workingDays = signal(
    null,
    ...ngDevMode ? [{ debugName: "workingDays" }] : (
      /* istanbul ignore next */
      []
    )
  );
  calculating = signal(
    false,
    ...ngDevMode ? [{ debugName: "calculating" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
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
  selectedBalance = computed(
    () => {
      const type = this.type();
      return this.balances().find((b) => b.type === type);
    },
    ...ngDevMode ? [{ debugName: "selectedBalance" }] : (
      /* istanbul ignore next */
      []
    )
  );
  balanceRemaining = computed(
    () => this.selectedBalance()?.remaining_days ?? null,
    ...ngDevMode ? [{ debugName: "balanceRemaining" }] : (
      /* istanbul ignore next */
      []
    )
  );
  insufficient = computed(
    () => {
      const remaining = this.balanceRemaining();
      const needed = this.workingDays();
      if (remaining === null || needed === null || needed === 0)
        return false;
      return this.type() === "CONGE_PAYE" && needed > remaining;
    },
    ...ngDevMode ? [{ debugName: "insufficient" }] : (
      /* istanbul ignore next */
      []
    )
  );
  typeLabel = computed(
    () => this.typeLabelFor(this.type()),
    ...ngDevMode ? [{ debugName: "typeLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadBalances();
    this.recalculateDays();
  }
  loadBalances() {
    this.absenceService.getMyBalances().subscribe({
      next: (balances) => this.balances.set(balances)
    });
  }
  recalculateDays() {
    if (!this.startDate() || !this.endDate()) {
      this.workingDays.set(null);
      return;
    }
    this.calculating.set(true);
    this.absenceService.getWorkingDays(this.startDate(), this.endDate()).subscribe({
      next: (res) => {
        this.workingDays.set(res.working_days);
        this.calculating.set(false);
      },
      error: () => {
        this.workingDays.set(null);
        this.calculating.set(false);
      }
    });
  }
  typeLabelFor(type) {
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
  onSubmit() {
    this.error.set(null);
    this.success.set(null);
    if (!this.startDate() || !this.endDate()) {
      this.error.set("Veuillez renseigner les dates de d\xE9but et de fin.");
      return;
    }
    if (this.endDate() < this.startDate()) {
      this.error.set("La date de fin doit \xEAtre post\xE9rieure ou \xE9gale \xE0 la date de d\xE9but.");
      return;
    }
    if (this.insufficient()) {
      this.error.set("Solde de cong\xE9s insuffisant pour cette demande.");
      return;
    }
    this.submitting.set(true);
    this.absenceService.createAbsence({
      type: this.type(),
      start_date: this.startDate(),
      end_date: this.endDate(),
      reason: this.reason() || null
    }).subscribe({
      next: () => {
        this.success.set("Demande de cong\xE9 envoy\xE9e. Elle sera trait\xE9e par votre manager.");
        this.startDate.set("");
        this.endDate.set("");
        this.reason.set("");
        this.workingDays.set(null);
        this.loadBalances();
        this.submitting.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || "Erreur lors de l'envoi de la demande.");
        this.submitting.set(false);
      }
    });
  }
  static \u0275fac = function LeaveRequestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveRequestComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveRequestComponent, selectors: [["app-leave-request"]], decls: 47, vars: 17, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-4xl"], [1, "bg-error-container", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "bg-secondary-container/30", "border", "border-secondary/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "p-6", "custom-shadow"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-primary"], [1, "font-heading", "font-bold", "text-lg", "text-text-heading"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "font-sans", "font-medium", "text-xs", "text-on-surface-variant", "mb-2", "block"], [1, "w-full", "h-12", "rounded-lg", "border-outline-variant", "focus:ring-2", "focus:ring-primary/50", "text-sm", "px-4", "border", "outline-none", "transition-all", "bg-white", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "h-12", "rounded-lg", "bg-background-alt", "border", "border-outline-variant", "px-4", "flex", "items-center", "gap-2"], [1, "text-sm", "text-on-surface-variant"], ["type", "date", 1, "w-full", "h-12", "rounded-lg", "border-outline-variant", "focus:ring-2", "focus:ring-primary/50", "text-sm", "px-4", "border", "outline-none", "transition-all", 3, "ngModelChange", "min", "ngModel"], [1, "md:col-span-2"], ["rows", "3", "maxlength", "1000", "placeholder", "Pr\xE9cisez le motif de votre demande...", 1, "w-full", "rounded-lg", "border-outline-variant", "focus:ring-2", "focus:ring-primary/50", "text-sm", "px-4", "py-3", "border", "outline-none", "transition-all", "resize-none", 3, "ngModelChange", "ngModel"], [1, "mt-6", "flex", "items-center", "justify-between", "rounded-lg", "border", "border-outline-variant", "bg-background-alt", "px-4", "py-3"], [1, "mt-4", "bg-error-container/30", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "mt-8", "flex", "justify-end"], [1, "bg-[#7C3AED]", "text-white", "font-sans", "font-medium", "text-sm", "px-8", "py-3", "h-12", "rounded-lg", "flex", "items-center", "gap-3", "hover:opacity-90", "transition-opacity", "whitespace-nowrap", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], [1, "material-symbols-outlined"], [1, "material-symbols-outlined", "text-error", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-error"], [1, "material-symbols-outlined", "text-secondary", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-secondary"], [1, "text-xs", "text-on-surface-variant"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "inline"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "text-sm", "text-error"], [1, "font-semibold"], [1, "mt-0.5"]], template: function LeaveRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, LeaveRequestComponent_Conditional_1_Template, 5, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, LeaveRequestComponent_Conditional_2_Template, 5, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
      \u0275\u0275text(6, "beach_access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 6);
      \u0275\u0275text(8, "Nouvelle demande de cong\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div")(11, "label", 8);
      \u0275\u0275text(12, "Type de cong\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 9);
      \u0275\u0275listener("ngModelChange", function LeaveRequestComponent_Template_select_ngModelChange_13_listener($event) {
        ctx.type.set($event);
        return ctx.recalculateDays();
      });
      \u0275\u0275elementStart(14, "option", 10);
      \u0275\u0275text(15, "Cong\xE9 pay\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Maladie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Sans solde");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 10);
      \u0275\u0275text(21, "Autre");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div")(23, "label", 8);
      \u0275\u0275text(24, "Solde disponible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 11);
      \u0275\u0275conditionalCreate(26, LeaveRequestComponent_Conditional_26_Template, 4, 2)(27, LeaveRequestComponent_Conditional_27_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div")(29, "label", 8);
      \u0275\u0275text(30, "Date de d\xE9but");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 13);
      \u0275\u0275listener("ngModelChange", function LeaveRequestComponent_Template_input_ngModelChange_31_listener($event) {
        ctx.startDate.set($event);
        return ctx.recalculateDays();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "label", 8);
      \u0275\u0275text(34, "Date de fin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 13);
      \u0275\u0275listener("ngModelChange", function LeaveRequestComponent_Template_input_ngModelChange_35_listener($event) {
        ctx.endDate.set($event);
        return ctx.recalculateDays();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 14)(37, "label", 8);
      \u0275\u0275text(38, "Motif (optionnel)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "textarea", 15);
      \u0275\u0275listener("ngModelChange", function LeaveRequestComponent_Template_textarea_ngModelChange_39_listener($event) {
        return ctx.reason.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(40, LeaveRequestComponent_Conditional_40_Template, 6, 1, "div", 16);
      \u0275\u0275conditionalCreate(41, LeaveRequestComponent_Conditional_41_Template, 8, 2, "div", 17);
      \u0275\u0275elementStart(42, "div", 18)(43, "button", 19);
      \u0275\u0275listener("click", function LeaveRequestComponent_Template_button_click_43_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275conditionalCreate(44, LeaveRequestComponent_Conditional_44_Template, 3, 0, ":svg:svg", 20)(45, LeaveRequestComponent_Conditional_45_Template, 2, 0, "span", 21);
      \u0275\u0275text(46, " Envoyer la demande ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 2 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngModel", ctx.type());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", "CONGE_PAYE");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", "MALADIE");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", "SANS_SOLDE");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", "AUTRE");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.balanceRemaining() !== null ? 26 : 27);
      \u0275\u0275advance(5);
      \u0275\u0275property("min", ctx.today)("ngModel", ctx.startDate());
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("min", ctx.startDate() || ctx.today)("ngModel", ctx.endDate());
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.reason());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.workingDays() !== null ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.insufficient() ? 41 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitting() ? 44 : 45);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveRequestComponent, [{
    type: Component,
    args: [{ selector: "app-leave-request", standalone: true, imports: [FormsModule], template: `<div class="flex flex-col gap-6 w-full max-w-4xl">
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

  <div class="bg-white border border-outline-variant rounded-xl p-6 custom-shadow">
    <div class="flex items-center gap-3 mb-6">
      <span class="material-symbols-outlined text-primary">beach_access</span>
      <h2 class="font-heading font-bold text-lg text-text-heading">Nouvelle demande de cong\xE9</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="font-sans font-medium text-xs text-on-surface-variant mb-2 block">Type de cong\xE9</label>
        <select [ngModel]="type()" (ngModelChange)="type.set($event); recalculateDays()"
          class="w-full h-12 rounded-lg border-outline-variant focus:ring-2 focus:ring-primary/50 text-sm px-4 border outline-none transition-all bg-white">
          <option [ngValue]="'CONGE_PAYE'">Cong\xE9 pay\xE9</option>
          <option [ngValue]="'MALADIE'">Maladie</option>
          <option [ngValue]="'SANS_SOLDE'">Sans solde</option>
          <option [ngValue]="'AUTRE'">Autre</option>
        </select>
      </div>
      <div>
        <label class="font-sans font-medium text-xs text-on-surface-variant mb-2 block">Solde disponible</label>
        <div class="h-12 rounded-lg bg-background-alt border border-outline-variant px-4 flex items-center gap-2">
          @if (balanceRemaining() !== null) {
            <span class="font-heading font-bold text-lg text-text-heading">{{ balanceRemaining() }}</span>
            <span class="text-xs text-on-surface-variant">jour(s) restant(s) pour {{ typeLabel() }}</span>
          } @else {
            <span class="text-sm text-on-surface-variant">Aucun solde renseign\xE9 pour ce type</span>
          }
        </div>
      </div>
      <div>
        <label class="font-sans font-medium text-xs text-on-surface-variant mb-2 block">Date de d\xE9but</label>
        <input type="date" [min]="today" [ngModel]="startDate()" (ngModelChange)="startDate.set($event); recalculateDays()"
          class="w-full h-12 rounded-lg border-outline-variant focus:ring-2 focus:ring-primary/50 text-sm px-4 border outline-none transition-all" />
      </div>
      <div>
        <label class="font-sans font-medium text-xs text-on-surface-variant mb-2 block">Date de fin</label>
        <input type="date" [min]="startDate() || today" [ngModel]="endDate()" (ngModelChange)="endDate.set($event); recalculateDays()"
          class="w-full h-12 rounded-lg border-outline-variant focus:ring-2 focus:ring-primary/50 text-sm px-4 border outline-none transition-all" />
      </div>
      <div class="md:col-span-2">
        <label class="font-sans font-medium text-xs text-on-surface-variant mb-2 block">Motif (optionnel)</label>
        <textarea [ngModel]="reason()" (ngModelChange)="reason.set($event)" rows="3" maxlength="1000" placeholder="Pr\xE9cisez le motif de votre demande..."
          class="w-full rounded-lg border-outline-variant focus:ring-2 focus:ring-primary/50 text-sm px-4 py-3 border outline-none transition-all resize-none"></textarea>
      </div>
    </div>

    @if (workingDays() !== null) {
      <div class="mt-6 flex items-center justify-between rounded-lg border border-outline-variant bg-background-alt px-4 py-3">
        <span class="text-sm text-on-surface-variant">Jours ouvr\xE9s demand\xE9s</span>
        <span class="font-heading font-bold text-lg text-text-heading">
          @if (calculating()) {
            <svg class="animate-spin h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          } @else {
            {{ workingDays() }}
          }
        </span>
      </div>
    }

    @if (insufficient()) {
      <div class="mt-4 bg-error-container/30 border border-error/20 rounded-lg p-4 flex items-start gap-2">
        <span class="material-symbols-outlined text-error shrink-0 mt-0.5">warning</span>
        <div class="text-sm text-error">
          <p class="font-semibold">Solde insuffisant</p>
          <p class="mt-0.5">Cette demande n\xE9cessite {{ workingDays() }} jour(s) alors que votre solde est de {{ balanceRemaining() }} jour(s).</p>
        </div>
      </div>
    }

    <div class="mt-8 flex justify-end">
      <button (click)="onSubmit()" [disabled]="submitting()"
        class="bg-[#7C3AED] text-white font-sans font-medium text-sm px-8 py-3 h-12 rounded-lg flex items-center gap-3 hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
        @if (submitting()) {
          <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        } @else {
          <span class="material-symbols-outlined">send</span>
        }
        Envoyer la demande
      </button>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveRequestComponent, { className: "LeaveRequestComponent", filePath: "src/app/features/leaves/leave-request/leave-request.component.ts", lineNumber: 13 });
})();
export {
  LeaveRequestComponent
};
//# sourceMappingURL=chunk-WYJMF2CR.js.map
