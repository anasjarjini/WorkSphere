import {
  AbsenceService
} from "./chunk-PXDOOJZG.js";
import {
  AttendanceDeclarationService
} from "./chunk-I3RMVRUE.js";
import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import "./chunk-DGTBVCJC.js";
import {
  DatePipe
} from "./chunk-FWX4MYVU.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/attendance/daily-declaration/daily-declaration.component.ts
function DailyDeclarationComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-white/20", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.badgeLabel(), " ");
  }
}
function DailyDeclarationComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function DailyDeclarationComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 14);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function DailyDeclarationComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DailyDeclarationComponent_Conditional_9_Conditional_0_Template, 5, 1, "div", 10);
    \u0275\u0275conditionalCreate(1, DailyDeclarationComponent_Conditional_9_Conditional_1_Template, 5, 1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.error() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.success() ? 1 : -1);
  }
}
function DailyDeclarationComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "beach_access");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 18);
    \u0275\u0275text(5, "Vous \xEAtes en cong\xE9 aujourd'hui");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 19);
    \u0275\u0275text(7, " Une demande de cong\xE9 approuv\xE9e couvre cette journ\xE9e : aucune d\xE9claration de pr\xE9sence n'est n\xE9cessaire. ");
    \u0275\u0275domElementEnd()()();
  }
}
function DailyDeclarationComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "p", 20);
    \u0275\u0275text(2, "Motif du rejet");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.declaration()?.rejection_reason);
  }
}
function DailyDeclarationComponent_Conditional_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 31);
    \u0275\u0275domElement(1, "circle", 32)(2, "path", 33);
    \u0275\u0275domElementEnd();
  }
}
function DailyDeclarationComponent_Conditional_12_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 34);
    \u0275\u0275text(1, "save");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(2, " Enregistrer la d\xE9claration ");
  }
}
function DailyDeclarationComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 8)(1, "div", 22)(2, "button", 23);
    \u0275\u0275domListener("click", function DailyDeclarationComponent_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isPresent.set(true));
    });
    \u0275\u0275domElementStart(3, "span", 24);
    \u0275\u0275text(4, "how_to_reg");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 25);
    \u0275\u0275text(6, "Pr\xE9sent");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "button", 23);
    \u0275\u0275domListener("click", function DailyDeclarationComponent_Conditional_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isPresent.set(false));
    });
    \u0275\u0275domElementStart(8, "span", 24);
    \u0275\u0275text(9, "block");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 25);
    \u0275\u0275text(11, "Absent");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "div", 26)(13, "div", 27)(14, "label", 28);
    \u0275\u0275text(15, "Note ou motif (Optionnel)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(16, "input", 29);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "button", 30);
    \u0275\u0275domListener("click", function DailyDeclarationComponent_Conditional_12_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275conditionalCreate(18, DailyDeclarationComponent_Conditional_12_Conditional_18_Template, 3, 0, ":svg:svg", 31)(19, DailyDeclarationComponent_Conditional_12_Conditional_19_Template, 3, 0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-secondary", ctx_r0.isPresent())("bg-secondary-container/30", ctx_r0.isPresent())("border-outline-variant", !ctx_r0.isPresent())("hover:bg-surface-container", !ctx_r0.isPresent());
    \u0275\u0275domProperty("disabled", ctx_r0.isLocked());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-secondary", ctx_r0.isPresent())("text-on-surface-variant", !ctx_r0.isPresent())("fill", ctx_r0.isPresent());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-secondary", ctx_r0.isPresent())("text-on-surface-variant", !ctx_r0.isPresent());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-warning", !ctx_r0.isPresent())("bg-warning/5", !ctx_r0.isPresent())("border-outline-variant", ctx_r0.isPresent())("hover:bg-surface-container", ctx_r0.isPresent());
    \u0275\u0275domProperty("disabled", ctx_r0.isLocked());
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", !ctx_r0.isPresent())("text-on-surface-variant", ctx_r0.isPresent());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-warning-dark", !ctx_r0.isPresent())("text-on-surface-variant", ctx_r0.isPresent());
    \u0275\u0275advance(7);
    \u0275\u0275domProperty("disabled", ctx_r0.isLocked() || ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving() ? 18 : 19);
  }
}
var DailyDeclarationComponent = class _DailyDeclarationComponent {
  authService = inject(AuthService);
  attendanceService = inject(AttendanceDeclarationService);
  absenceService = inject(AbsenceService);
  today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  isPresent = signal(
    true,
    ...ngDevMode ? [{ debugName: "isPresent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
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
  onApprovedLeave = signal(
    false,
    ...ngDevMode ? [{ debugName: "onApprovedLeave" }] : (
      /* istanbul ignore next */
      []
    )
  );
  leaveLoading = signal(
    true,
    ...ngDevMode ? [{ debugName: "leaveLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  declaration = signal(
    null,
    ...ngDevMode ? [{ debugName: "declaration" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isLocked = computed(
    () => this.declaration()?.validation_status === "VALIDEE",
    ...ngDevMode ? [{ debugName: "isLocked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  badgeClass = computed(
    () => {
      const status = this.declaration()?.validation_status;
      if (status === "VALIDEE")
        return "badge-validated";
      if (status === "REJETEE")
        return "badge-rejected";
      if (status === "EN_ATTENTE")
        return "badge-pending";
      return "";
    },
    ...ngDevMode ? [{ debugName: "badgeClass" }] : (
      /* istanbul ignore next */
      []
    )
  );
  badgeLabel = computed(
    () => {
      const status = this.declaration()?.validation_status;
      if (status === "VALIDEE")
        return "Valid\xE9e";
      if (status === "REJETEE")
        return "Rejet\xE9e";
      if (status === "EN_ATTENTE")
        return "En attente";
      return "";
    },
    ...ngDevMode ? [{ debugName: "badgeLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.checkApprovedLeave();
    this.loadTodayDeclaration();
  }
  checkApprovedLeave() {
    this.absenceService.isOnLeave(this.today).subscribe({
      next: (res) => {
        this.onApprovedLeave.set(res.is_on_leave);
        this.leaveLoading.set(false);
      },
      error: () => this.leaveLoading.set(false)
    });
  }
  loadTodayDeclaration() {
    this.attendanceService.getDeclarations({ date: this.today }).subscribe({
      next: (declarations) => {
        if (declarations.length > 0) {
          const decl = declarations[0];
          this.declaration.set(decl);
          this.isPresent.set(decl.status === "PRESENT");
        }
      }
    });
  }
  onSubmit() {
    if (this.isLocked())
      return;
    this.error.set(null);
    this.success.set(null);
    this.saving.set(true);
    this.attendanceService.declare({
      date: this.today,
      status: this.isPresent() ? "PRESENT" : "ABSENT"
    }).subscribe({
      next: (decl) => {
        this.declaration.set(decl);
        this.success.set("D\xE9claration enregistr\xE9e.");
        this.saving.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || "Erreur lors de l'enregistrement.");
        this.saving.set(false);
      }
    });
  }
  static \u0275fac = function DailyDeclarationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyDeclarationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DailyDeclarationComponent, selectors: [["app-daily-declaration"]], decls: 13, vars: 10, consts: [[1, "bg-white", "border", "border-outline-variant", "rounded-xl", "overflow-hidden", "custom-shadow"], [1, "bg-[#7C3AED]", "px-6", "py-4", "flex", "justify-between", "items-center"], [1, "flex", "items-center", "gap-4"], [1, "material-symbols-outlined", "text-white"], [1, "font-heading", "font-bold", "text-white", "text-sm"], [1, "bg-white/20", "text-white", "font-sans", "font-medium", "text-xs", "px-4", "py-2", "rounded-full", "backdrop-blur-sm", 3, "bg-white/20"], [1, "p-6"], [1, "bg-error-container/30", "border", "border-error/20", "rounded-lg", "p-4", "m-6"], [1, "p-6", "flex", "flex-col", "md:flex-row", "gap-8", "items-center"], [1, "bg-white/20", "text-white", "font-sans", "font-medium", "text-xs", "px-4", "py-2", "rounded-full", "backdrop-blur-sm"], [1, "bg-error-container", "border", "border-error/20", "rounded-lg", "p-4", "m-6", "flex", "items-start", "gap-2"], [1, "bg-secondary-container/30", "border", "border-secondary/20", "rounded-lg", "p-4", "m-6", "flex", "items-start", "gap-2"], [1, "material-symbols-outlined", "text-error", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-error"], [1, "material-symbols-outlined", "text-secondary", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-secondary"], [1, "bg-info-light", "border", "border-info/20", "rounded-lg", "p-6", "flex", "flex-col", "items-center", "gap-3", "text-center"], [1, "material-symbols-outlined", "text-[40px]", "text-info"], [1, "font-heading", "font-bold", "text-lg", "text-text-heading"], [1, "text-sm", "text-on-surface-variant", "max-w-md"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-error", "mb-1"], [1, "text-sm", "text-error"], [1, "flex", "gap-4"], [1, "flex", "flex-col", "items-center", "gap-2", "px-8", "py-4", "rounded-xl", "border-2", "transition-all", "cursor-pointer", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-[32px]"], [1, "font-sans", "font-medium", "text-xs"], [1, "flex-grow", "flex", "flex-col", "md:flex-row", "gap-6", "w-full"], [1, "flex-1"], [1, "font-sans", "font-medium", "text-xs", "text-on-surface-variant", "mb-2", "block"], ["type", "text", "placeholder", "Commentaires sur la journ\xE9e...", 1, "w-full", "h-12", "rounded-lg", "border-outline-variant", "focus:ring-2", "focus:ring-primary/50", "text-sm", "px-4", "border", "outline-none", "transition-all"], [1, "bg-[#7C3AED]", "text-white", "font-sans", "font-medium", "text-sm", "px-8", "py-4", "h-12", "rounded-lg", "flex", "items-center", "gap-4", "hover:opacity-90", "transition-opacity", "whitespace-nowrap", "disabled:opacity-50", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "material-symbols-outlined"]], template: function DailyDeclarationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "today");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h3", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "date");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(8, DailyDeclarationComponent_Conditional_8_Template, 2, 3, "span", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(9, DailyDeclarationComponent_Conditional_9_Template, 2, 2);
      \u0275\u0275conditionalCreate(10, DailyDeclarationComponent_Conditional_10_Template, 8, 0, "div", 6)(11, DailyDeclarationComponent_Conditional_11_Template, 5, 1, "div", 7);
      \u0275\u0275conditionalCreate(12, DailyDeclarationComponent_Conditional_12_Template, 20, 38, "div", 8);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("D\xE9claration du jour : ", \u0275\u0275pipeBind4(7, 5, ctx.today, "fullDate", "", "fr"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.declaration() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.onApprovedLeave() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.onApprovedLeave() ? 10 : ctx.declaration()?.rejection_reason ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.onApprovedLeave() ? 12 : -1);
    }
  }, dependencies: [DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DailyDeclarationComponent, [{
    type: Component,
    args: [{ selector: "app-daily-declaration", standalone: true, imports: [DatePipe], template: `<div class="bg-white border border-outline-variant rounded-xl overflow-hidden custom-shadow">
  <div class="bg-[#7C3AED] px-6 py-4 flex justify-between items-center">
    <div class="flex items-center gap-4">
      <span class="material-symbols-outlined text-white">today</span>
      <h3 class="font-heading font-bold text-white text-sm">D\xE9claration du jour : {{ today | date:'fullDate':'':'fr' }}</h3>
    </div>
    @if (declaration()) {
      <span class="bg-white/20 text-white font-sans font-medium text-xs px-4 py-2 rounded-full backdrop-blur-sm"
        [class.bg-white/20]="true">
        {{ badgeLabel() }}
      </span>
    }
  </div>

  @if (!onApprovedLeave()) {
    @if (error()) {
      <div class="bg-error-container border border-error/20 rounded-lg p-4 m-6 flex items-start gap-2">
        <span class="material-symbols-outlined text-error shrink-0 mt-0.5">error</span>
        <span class="text-sm font-medium text-error">{{ error() }}</span>
      </div>
    }

    @if (success()) {
      <div class="bg-secondary-container/30 border border-secondary/20 rounded-lg p-4 m-6 flex items-start gap-2">
        <span class="material-symbols-outlined text-secondary shrink-0 mt-0.5">check_circle</span>
        <span class="text-sm font-medium text-secondary">{{ success() }}</span>
      </div>
    }
  }

  @if (onApprovedLeave()) {
    <div class="p-6">
      <div class="bg-info-light border border-info/20 rounded-lg p-6 flex flex-col items-center gap-3 text-center">
        <span class="material-symbols-outlined text-[40px] text-info">beach_access</span>
        <p class="font-heading font-bold text-lg text-text-heading">Vous \xEAtes en cong\xE9 aujourd'hui</p>
        <p class="text-sm text-on-surface-variant max-w-md">
          Une demande de cong\xE9 approuv\xE9e couvre cette journ\xE9e : aucune d\xE9claration de pr\xE9sence n'est n\xE9cessaire.
        </p>
      </div>
    </div>
  } @else if (declaration()?.rejection_reason) {
    <div class="bg-error-container/30 border border-error/20 rounded-lg p-4 m-6">
      <p class="text-xs font-bold uppercase tracking-wider text-error mb-1">Motif du rejet</p>
      <p class="text-sm text-error">{{ declaration()?.rejection_reason }}</p>
    </div>
  }

  @if (!onApprovedLeave()) {
    <div class="p-6 flex flex-col md:flex-row gap-8 items-center">
    <div class="flex gap-4">
      <button (click)="isPresent.set(true)" [disabled]="isLocked()"
        class="flex flex-col items-center gap-2 px-8 py-4 rounded-xl border-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        [class.border-secondary]="isPresent()"
        [class.bg-secondary-container/30]="isPresent()"
        [class.border-outline-variant]="!isPresent()"
        [class.hover:bg-surface-container]="!isPresent()">
        <span class="material-symbols-outlined text-[32px]"
          [class.text-secondary]="isPresent()"
          [class.text-on-surface-variant]="!isPresent()"
          [class.fill]="isPresent()">how_to_reg</span>
        <span class="font-sans font-medium text-xs"
          [class.text-secondary]="isPresent()"
          [class.text-on-surface-variant]="!isPresent()">Pr\xE9sent</span>
      </button>
      <button (click)="isPresent.set(false)" [disabled]="isLocked()"
        class="flex flex-col items-center gap-2 px-8 py-4 rounded-xl border-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        [class.border-warning]="!isPresent()"
        [class.bg-warning/5]="!isPresent()"
        [class.border-outline-variant]="isPresent()"
        [class.hover:bg-surface-container]="isPresent()">
        <span class="material-symbols-outlined text-[32px]"
          [class.text-warning]="!isPresent()"
          [class.text-on-surface-variant]="isPresent()">block</span>
        <span class="font-sans font-medium text-xs"
          [class.text-warning-dark]="!isPresent()"
          [class.text-on-surface-variant]="isPresent()">Absent</span>
      </button>
    </div>

    <div class="flex-grow flex flex-col md:flex-row gap-6 w-full">
      <div class="flex-1">
        <label class="font-sans font-medium text-xs text-on-surface-variant mb-2 block">Note ou motif (Optionnel)</label>
        <input type="text" placeholder="Commentaires sur la journ\xE9e..."
          class="w-full h-12 rounded-lg border-outline-variant focus:ring-2 focus:ring-primary/50 text-sm px-4 border outline-none transition-all" />
      </div>
    </div>

    <button (click)="onSubmit()" [disabled]="isLocked() || saving()"
      class="bg-[#7C3AED] text-white font-sans font-medium text-sm px-8 py-4 h-12 rounded-lg flex items-center gap-4 hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
      @if (saving()) {
        <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
      } @else {
        <span class="material-symbols-outlined">save</span>
        Enregistrer la d\xE9claration
      }
    </button>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DailyDeclarationComponent, { className: "DailyDeclarationComponent", filePath: "src/app/features/attendance/daily-declaration/daily-declaration.component.ts", lineNumber: 14 });
})();

// src/app/features/attendance/attendance-today/attendance-today.component.ts
function AttendanceTodayComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.summary().unjustified, " non justifi\xE9");
  }
}
function AttendanceTodayComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Derni\xE8re aujourd'hui");
    \u0275\u0275elementEnd();
  }
}
var AttendanceTodayComponent = class _AttendanceTodayComponent {
  attendanceService = inject(AttendanceDeclarationService);
  declarations = signal(
    [],
    ...ngDevMode ? [{ debugName: "declarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentMonth = signal(
    (/* @__PURE__ */ new Date()).toISOString().slice(0, 7),
    ...ngDevMode ? [{ debugName: "currentMonth" }] : (
      /* istanbul ignore next */
      []
    )
  );
  summary = computed(
    () => {
      const [year, month] = this.currentMonth().split("-").map(Number);
      const monthDecls = this.declarations().filter((d) => {
        const dDate = new Date(d.date);
        return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
      });
      const present = monthDecls.filter((d) => d.status === "PRESENT");
      return {
        daysPresent: present.length,
        daysAbsent: monthDecls.filter((d) => d.status === "ABSENT").length,
        pendingCount: monthDecls.filter((d) => d.validation_status === "EN_ATTENTE").length,
        unjustified: monthDecls.filter((d) => d.status === "ABSENT" && d.validation_status !== "VALIDEE").length
      };
    },
    ...ngDevMode ? [{ debugName: "summary" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadMonth();
  }
  loadMonth() {
    const [year, month] = this.currentMonth().split("-").map(Number);
    const dateFrom = `${year}-${String(month).padStart(2, "0")}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const dateTo = `${year}-${String(month).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (decls) => this.declarations.set(decls)
    });
  }
  static \u0275fac = function AttendanceTodayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceTodayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceTodayComponent, selectors: [["app-attendance-today"]], decls: 48, vars: 7, consts: [[1, "space-y-8"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "bg-surface", "border", "border-outline-variant", "p-4", "rounded-xl", "custom-shadow"], [1, "flex", "justify-between", "items-start", "mb-2"], [1, "font-sans", "font-medium", "text-xs", "text-on-surface-variant"], [1, "p-2", "bg-secondary-container", "rounded-lg"], [1, "material-symbols-outlined", "text-secondary"], [1, "font-heading", "font-bold", "text-headline-md", "text-on-surface"], [1, "text-sm", "font-normal", "text-on-surface-variant"], [1, "mt-2", "h-1", "w-full", "bg-surface-container", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-secondary", "transition-all", "duration-1000", "ease-in-out"], [1, "p-2", "bg-error-container", "rounded-lg"], [1, "material-symbols-outlined", "text-error"], [1, "text-xs", "text-on-surface-variant", "mt-2"], [1, "p-2", "bg-tertiary-fixed", "rounded-lg"], [1, "material-symbols-outlined", "text-tertiary"], [1, "bg-surface-container-high", "p-6", "rounded-xl", "flex", "gap-4", "items-start", "border", "border-outline-variant/30"], [1, "material-symbols-outlined", "text-primary"], [1, "space-y-2"], [1, "font-sans", "font-bold", "text-sm", "text-on-surface"], [1, "text-xs", "text-on-surface-variant"]], template: function AttendanceTodayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "Jours pr\xE9sents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
      \u0275\u0275text(8, "check_circle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "/ 22");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275element(14, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 2)(16, "div", 3)(17, "span", 4);
      \u0275\u0275text(18, "Absences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 11)(20, "span", 12);
      \u0275\u0275text(21, "event_busy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "p", 7);
      \u0275\u0275text(23);
      \u0275\u0275elementStart(24, "span", 8);
      \u0275\u0275text(25, "jours");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(26, AttendanceTodayComponent_Conditional_26_Template, 2, 1, "p", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 2)(28, "div", 3)(29, "span", 4);
      \u0275\u0275text(30, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14)(32, "span", 15);
      \u0275\u0275text(33, "pending_actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "p", 7);
      \u0275\u0275text(35);
      \u0275\u0275elementStart(36, "span", 8);
      \u0275\u0275text(37, "d\xE9clarations");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(38, AttendanceTodayComponent_Conditional_38_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(39, "app-daily-declaration");
      \u0275\u0275elementStart(40, "div", 16)(41, "span", 17);
      \u0275\u0275text(42, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 18)(44, "h4", 19);
      \u0275\u0275text(45, "Rappel des politiques");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 20);
      \u0275\u0275text(47, "Les d\xE9clarations journali\xE8res doivent \xEAtre soumises avant 19h00. Toute absence prolong\xE9e n\xE9cessite un justificatif m\xE9dical t\xE9l\xE9chargeable dans l'onglet historique.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.summary().daysPresent, " ");
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("width", ctx.summary().daysPresent / 22 * 100 + "%");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.summary().daysAbsent, " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.summary().unjustified > 0 ? 26 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.summary().pendingCount, " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.summary().pendingCount > 0 ? 38 : -1);
    }
  }, dependencies: [DailyDeclarationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceTodayComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-today", standalone: true, imports: [DailyDeclarationComponent], template: `<div class="space-y-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-surface border border-outline-variant p-4 rounded-xl custom-shadow">
      <div class="flex justify-between items-start mb-2">
        <span class="font-sans font-medium text-xs text-on-surface-variant">Jours pr\xE9sents</span>
        <div class="p-2 bg-secondary-container rounded-lg">
          <span class="material-symbols-outlined text-secondary">check_circle</span>
        </div>
      </div>
      <p class="font-heading font-bold text-headline-md text-on-surface">
        {{ summary().daysPresent }}
        <span class="text-sm font-normal text-on-surface-variant">/ 22</span>
      </p>
      <div class="mt-2 h-1 w-full bg-surface-container rounded-full overflow-hidden">
        <div class="h-full bg-secondary transition-all duration-1000 ease-in-out"
          [style.width]="(summary().daysPresent / 22 * 100) + '%'"></div>
      </div>
    </div>
    <div class="bg-surface border border-outline-variant p-4 rounded-xl custom-shadow">
      <div class="flex justify-between items-start mb-2">
        <span class="font-sans font-medium text-xs text-on-surface-variant">Absences</span>
        <div class="p-2 bg-error-container rounded-lg">
          <span class="material-symbols-outlined text-error">event_busy</span>
        </div>
      </div>
      <p class="font-heading font-bold text-headline-md text-on-surface">
        {{ summary().daysAbsent }}
        <span class="text-sm font-normal text-on-surface-variant">jours</span>
      </p>
      @if (summary().unjustified > 0) {
        <p class="text-xs text-on-surface-variant mt-2">{{ summary().unjustified }} non justifi\xE9</p>
      }
    </div>
    <div class="bg-surface border border-outline-variant p-4 rounded-xl custom-shadow">
      <div class="flex justify-between items-start mb-2">
        <span class="font-sans font-medium text-xs text-on-surface-variant">En attente</span>
        <div class="p-2 bg-tertiary-fixed rounded-lg">
          <span class="material-symbols-outlined text-tertiary">pending_actions</span>
        </div>
      </div>
      <p class="font-heading font-bold text-headline-md text-on-surface">
        {{ summary().pendingCount }}
        <span class="text-sm font-normal text-on-surface-variant">d\xE9clarations</span>
      </p>
      @if (summary().pendingCount > 0) {
        <p class="text-xs text-on-surface-variant mt-2">Derni\xE8re aujourd'hui</p>
      }
    </div>
  </div>

  <app-daily-declaration />

  <div class="bg-surface-container-high p-6 rounded-xl flex gap-4 items-start border border-outline-variant/30">
    <span class="material-symbols-outlined text-primary">info</span>
    <div class="space-y-2">
      <h4 class="font-sans font-bold text-sm text-on-surface">Rappel des politiques</h4>
      <p class="text-xs text-on-surface-variant">Les d\xE9clarations journali\xE8res doivent \xEAtre soumises avant 19h00. Toute absence prolong\xE9e n\xE9cessite un justificatif m\xE9dical t\xE9l\xE9chargeable dans l'onglet historique.</p>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceTodayComponent, { className: "AttendanceTodayComponent", filePath: "src/app/features/attendance/attendance-today/attendance-today.component.ts", lineNumber: 12 });
})();
export {
  AttendanceTodayComponent
};
//# sourceMappingURL=chunk-HI4VY5Z2.js.map
