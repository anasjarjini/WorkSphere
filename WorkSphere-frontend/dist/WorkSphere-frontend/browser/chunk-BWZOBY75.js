import {
  AbsenceService
} from "./chunk-6BD4SRHK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7RQSPZX3.js";
import {
  DatePipe
} from "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
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
  ɵɵtextInterpolate
} from "./chunk-ZST2RCVM.js";

// src/app/features/leaves/public-holidays/public-holidays.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PublicHolidaysComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 17);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function PublicHolidaysComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 19);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.success());
  }
}
function PublicHolidaysComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 21)(2, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function PublicHolidaysComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "add");
    \u0275\u0275elementEnd();
  }
}
function PublicHolidaysComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 21)(3, "path", 22);
    \u0275\u0275elementEnd()();
  }
}
function PublicHolidaysComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 24);
    \u0275\u0275text(2, "celebration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 25);
    \u0275\u0275text(4, "Aucun jour f\xE9ri\xE9 enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function PublicHolidaysComponent_Conditional_22_For_2_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 21)(2, "path", 22);
    \u0275\u0275elementEnd();
  }
}
function PublicHolidaysComponent_Conditional_22_For_2_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "delete");
    \u0275\u0275elementEnd();
  }
}
function PublicHolidaysComponent_Conditional_22_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function PublicHolidaysComponent_Conditional_22_For_2_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const holiday_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDelete(holiday_r3));
    });
    \u0275\u0275conditionalCreate(1, PublicHolidaysComponent_Conditional_22_For_2_Conditional_12_Conditional_1_Template, 3, 0, ":svg:svg", 11)(2, PublicHolidaysComponent_Conditional_22_For_2_Conditional_12_Conditional_2_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const holiday_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.deletingId() === holiday_r3.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.deletingId() === holiday_r3.id ? 1 : 2);
  }
}
function PublicHolidaysComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "p", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, PublicHolidaysComponent_Conditional_22_For_2_Conditional_12_Template, 3, 2, "button", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const holiday_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.monthDay(holiday_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.monthLabel(holiday_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(holiday_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 5, holiday_r3.date, "yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isCompanyHoliday(holiday_r3) ? 12 : -1);
  }
}
function PublicHolidaysComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, PublicHolidaysComponent_Conditional_22_For_2_Template, 13, 8, "div", 26, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.holidays());
  }
}
var PublicHolidaysComponent = class _PublicHolidaysComponent {
  absenceService = inject(AbsenceService);
  holidays = signal(
    [],
    ...ngDevMode ? [{ debugName: "holidays" }] : (
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
  adding = signal(
    false,
    ...ngDevMode ? [{ debugName: "adding" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deletingId = signal(
    null,
    ...ngDevMode ? [{ debugName: "deletingId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  name = signal(
    "",
    ...ngDevMode ? [{ debugName: "name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  date = signal(
    "",
    ...ngDevMode ? [{ debugName: "date" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadHolidays();
  }
  loadHolidays() {
    this.loading.set(true);
    this.error.set(null);
    this.absenceService.getHolidays().subscribe({
      next: (holidays) => {
        this.holidays.set(holidays);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Erreur lors du chargement des jours f\xE9ri\xE9s.");
      }
    });
  }
  isCompanyHoliday(holiday) {
    return holiday.company_id !== null;
  }
  monthLabel(holiday) {
    return new Date(holiday.date).toLocaleDateString("fr-FR", { month: "long" });
  }
  monthDay(holiday) {
    return String(new Date(holiday.date).getDate()).padStart(2, "0");
  }
  onSubmit() {
    this.error.set(null);
    this.success.set(null);
    if (!this.name().trim() || !this.date()) {
      this.error.set("Veuillez renseigner le nom et la date du jour f\xE9ri\xE9.");
      return;
    }
    this.adding.set(true);
    this.absenceService.createHoliday({ name: this.name().trim(), date: this.date() }).subscribe({
      next: (holiday) => {
        this.holidays.update((list) => [...list, holiday].sort((a, b) => a.date.localeCompare(b.date)));
        this.name.set("");
        this.date.set("");
        this.adding.set(false);
        this.success.set("Jour f\xE9ri\xE9 ajout\xE9.");
      },
      error: (err) => {
        this.adding.set(false);
        this.error.set(err.error?.message || "Erreur lors de l'ajout du jour f\xE9ri\xE9.");
      }
    });
  }
  onDelete(holiday) {
    if (!this.isCompanyHoliday(holiday))
      return;
    this.deletingId.set(holiday.id);
    this.error.set(null);
    this.success.set(null);
    this.absenceService.deleteHoliday(holiday.id).subscribe({
      next: () => {
        this.holidays.update((list) => list.filter((h) => h.id !== holiday.id));
        this.deletingId.set(null);
        this.success.set("Jour f\xE9ri\xE9 supprim\xE9.");
      },
      error: (err) => {
        this.deletingId.set(null);
        this.error.set(err.error?.message || "Erreur lors de la suppression.");
      }
    });
  }
  static \u0275fac = function PublicHolidaysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicHolidaysComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicHolidaysComponent, selectors: [["app-public-holidays"]], decls: 23, vars: 7, consts: [[1, "flex", "flex-col", "gap-4", "w-full"], [1, "bg-error-container", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "bg-secondary-container/30", "border", "border-secondary/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "p-6", "custom-shadow", "lg:col-span-1"], [1, "font-heading", "font-bold", "text-lg", "text-text-heading", "mb-1"], [1, "text-sm", "text-on-surface-variant", "mb-5"], [1, "font-sans", "font-medium", "text-xs", "text-on-surface-variant", "mb-2", "block"], ["type", "text", "placeholder", "Ex: F\xEAte du travail", 1, "w-full", "h-12", "rounded-lg", "border-outline-variant", "focus:ring-2", "focus:ring-primary/50", "text-sm", "px-4", "border", "outline-none", "transition-all", "mb-4", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "w-full", "h-12", "rounded-lg", "border-outline-variant", "focus:ring-2", "focus:ring-primary/50", "text-sm", "px-4", "border", "outline-none", "transition-all", "mb-6", 3, "ngModelChange", "ngModel"], [1, "w-full", "bg-[#7C3AED]", "text-white", "font-sans", "font-medium", "text-sm", "px-6", "py-3", "h-12", "rounded-lg", "flex", "items-center", "justify-center", "gap-3", "hover:opacity-90", "transition-opacity", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], [1, "material-symbols-outlined"], [1, "lg:col-span-2"], [1, "flex", "justify-center", "py-16"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "py-16", "flex", "flex-col", "items-center", "gap-3", "custom-shadow"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "gap-4"], [1, "material-symbols-outlined", "text-error", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-error"], [1, "material-symbols-outlined", "text-secondary", "shrink-0", "mt-0.5"], [1, "text-sm", "font-medium", "text-secondary"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-primary"], [1, "material-symbols-outlined", "text-[40px]", "text-text-muted"], [1, "font-sans", "font-medium", "text-sm", "text-text-secondary"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "p-4", "flex", "items-center", "gap-3", "custom-shadow"], [1, "w-12", "h-12", "rounded-xl", "bg-primary/10", "text-primary", "flex", "flex-col", "items-center", "justify-center", "shrink-0"], [1, "font-heading", "font-bold", "text-sm", "leading-none"], [1, "text-[10px]", "capitalize"], [1, "min-w-0", "flex-1"], [1, "font-sans", "font-semibold", "text-sm", "text-text-heading", "truncate"], [1, "text-xs", "text-on-surface-variant"], ["title", "Supprimer", 1, "text-text-muted", "hover:text-error", "transition-colors", "cursor-pointer", "disabled:opacity-50", "p-1", 3, "disabled"], ["title", "Supprimer", 1, "text-text-muted", "hover:text-error", "transition-colors", "cursor-pointer", "disabled:opacity-50", "p-1", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-base"]], template: function PublicHolidaysComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PublicHolidaysComponent_Conditional_1_Template, 5, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, PublicHolidaysComponent_Conditional_2_Template, 5, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Ajouter un jour f\xE9ri\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Les jours f\xE9ri\xE9s sont exclus du calcul des jours ouvr\xE9s de cong\xE9.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 7);
      \u0275\u0275text(10, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275listener("ngModelChange", function PublicHolidaysComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.name.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(12, "label", 7);
      \u0275\u0275text(13, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275listener("ngModelChange", function PublicHolidaysComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.date.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275listener("click", function PublicHolidaysComponent_Template_button_click_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275conditionalCreate(16, PublicHolidaysComponent_Conditional_16_Template, 3, 0, ":svg:svg", 11)(17, PublicHolidaysComponent_Conditional_17_Template, 2, 0, "span", 12);
      \u0275\u0275text(18, " Ajouter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 13);
      \u0275\u0275conditionalCreate(20, PublicHolidaysComponent_Conditional_20_Template, 4, 0, "div", 14)(21, PublicHolidaysComponent_Conditional_21_Template, 5, 0, "div", 15)(22, PublicHolidaysComponent_Conditional_22_Template, 3, 0, "div", 16);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 2 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngModel", ctx.name());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.date());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.adding());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.adding() ? 16 : 17);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 20 : ctx.holidays().length === 0 ? 21 : 22);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicHolidaysComponent, [{
    type: Component,
    args: [{ selector: "app-public-holidays", standalone: true, imports: [DatePipe, FormsModule], template: `<div class="flex flex-col gap-4 w-full">
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

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="bg-white border border-outline-variant rounded-xl p-6 custom-shadow lg:col-span-1">
      <h2 class="font-heading font-bold text-lg text-text-heading mb-1">Ajouter un jour f\xE9ri\xE9</h2>
      <p class="text-sm text-on-surface-variant mb-5">Les jours f\xE9ri\xE9s sont exclus du calcul des jours ouvr\xE9s de cong\xE9.</p>

      <label class="font-sans font-medium text-xs text-on-surface-variant mb-2 block">Nom</label>
      <input type="text" [ngModel]="name()" (ngModelChange)="name.set($event)" placeholder="Ex: F\xEAte du travail"
        class="w-full h-12 rounded-lg border-outline-variant focus:ring-2 focus:ring-primary/50 text-sm px-4 border outline-none transition-all mb-4" />

      <label class="font-sans font-medium text-xs text-on-surface-variant mb-2 block">Date</label>
      <input type="date" [ngModel]="date()" (ngModelChange)="date.set($event)"
        class="w-full h-12 rounded-lg border-outline-variant focus:ring-2 focus:ring-primary/50 text-sm px-4 border outline-none transition-all mb-6" />

      <button (click)="onSubmit()" [disabled]="adding()"
        class="w-full bg-[#7C3AED] text-white font-sans font-medium text-sm px-6 py-3 h-12 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer">
        @if (adding()) {
          <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        } @else {
          <span class="material-symbols-outlined">add</span>
        }
        Ajouter
      </button>
    </div>

    <div class="lg:col-span-2">
      @if (loading()) {
        <div class="flex justify-center py-16">
          <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        </div>
      } @else if (holidays().length === 0) {
        <div class="bg-white border border-outline-variant rounded-xl py-16 flex flex-col items-center gap-3 custom-shadow">
          <span class="material-symbols-outlined text-[40px] text-text-muted">celebration</span>
          <p class="font-sans font-medium text-sm text-text-secondary">Aucun jour f\xE9ri\xE9 enregistr\xE9</p>
        </div>
      } @else {
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          @for (holiday of holidays(); track holiday.id) {
            <div class="bg-white border border-outline-variant rounded-xl p-4 flex items-center gap-3 custom-shadow">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex flex-col items-center justify-center shrink-0">
                <span class="font-heading font-bold text-sm leading-none">{{ monthDay(holiday) }}</span>
                <span class="text-[10px] capitalize">{{ monthLabel(holiday) }}</span>
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-sans font-semibold text-sm text-text-heading truncate">{{ holiday.name }}</p>
                <p class="text-xs text-on-surface-variant">{{ holiday.date | date:'yyyy' }}</p>
              </div>
              @if (isCompanyHoliday(holiday)) {
                <button (click)="onDelete(holiday)" [disabled]="deletingId() === holiday.id"
                  class="text-text-muted hover:text-error transition-colors cursor-pointer disabled:opacity-50 p-1" title="Supprimer">
                  @if (deletingId() === holiday.id) {
                    <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                  } @else {
                    <span class="material-symbols-outlined text-base">delete</span>
                  }
                </button>
              }
            </div>
          }
        </div>
      }
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicHolidaysComponent, { className: "PublicHolidaysComponent", filePath: "src/app/features/leaves/public-holidays/public-holidays.component.ts", lineNumber: 13 });
})();
export {
  PublicHolidaysComponent
};
//# sourceMappingURL=chunk-BWZOBY75.js.map
