import {
  AttendanceDeclarationService
} from "./chunk-2PL4LXLU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7RQSPZX3.js";
import {
  DatePipe
} from "./chunk-2SDYSSIJ.js";
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
  ɵɵclassProp,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZST2RCVM.js";

// src/app/features/attendance/attendance-history/attendance-history.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function AttendanceHistoryComponent_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
}
function AttendanceHistoryComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, AttendanceHistoryComponent_Conditional_32_For_2_Template, 1, 0, "div", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AttendanceHistoryComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 31);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadMonth());
    });
    \u0275\u0275text(6, "R\xE9essayer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function AttendanceHistoryComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 34);
    \u0275\u0275text(2, "calendar_month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 35);
    \u0275\u0275text(4, "Aucune d\xE9claration ce mois-ci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 36);
    \u0275\u0275text(6, `Utilisez l'onglet "Aujourd'hui" pour d\xE9clarer votre pr\xE9sence.`);
    \u0275\u0275elementEnd()();
  }
}
function AttendanceHistoryComponent_Conditional_35_For_18_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53)(1, "span", 60);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Valid\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceHistoryComponent_Conditional_35_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54)(1, "span", 60);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Rejet\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceHistoryComponent_Conditional_35_For_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55)(1, "span", 60);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " En attente ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceHistoryComponent_Conditional_35_For_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_35_For_18_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const decl_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCorrection(decl_r5));
    });
    \u0275\u0275text(1, " Corriger ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceHistoryComponent_Conditional_35_For_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 58)(1, "span", 14);
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
  }
}
function AttendanceHistoryComponent_Conditional_35_For_18_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 59)(1, "td", 62)(2, "div", 63)(3, "span", 64);
    \u0275\u0275text(4, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const decl_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(decl_r5.rejection_reason);
  }
}
function AttendanceHistoryComponent_Conditional_35_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 48)(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 50);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 51)(8, "span", 52);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 51);
    \u0275\u0275conditionalCreate(13, AttendanceHistoryComponent_Conditional_35_For_18_Conditional_13_Template, 4, 0, "span", 53)(14, AttendanceHistoryComponent_Conditional_35_For_18_Conditional_14_Template, 4, 0, "span", 54)(15, AttendanceHistoryComponent_Conditional_35_For_18_Conditional_15_Template, 4, 0, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 56);
    \u0275\u0275conditionalCreate(17, AttendanceHistoryComponent_Conditional_35_For_18_Conditional_17_Template, 2, 0, "button", 57)(18, AttendanceHistoryComponent_Conditional_35_For_18_Conditional_18_Template, 3, 0, "button", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, AttendanceHistoryComponent_Conditional_35_For_18_Conditional_19_Template, 7, 1, "tr", 59);
  }
  if (rf & 2) {
    const decl_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(3, 15, decl_r5.date, "d MMM yyyy", "", "fr"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 20, decl_r5.date, "EEEE", "", "fr"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary-container/30", decl_r5.status === "PRESENT")("text-secondary", decl_r5.status === "PRESENT")("bg-error-container", decl_r5.status === "ABSENT")("text-error", decl_r5.status === "ABSENT");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", decl_r5.status === "PRESENT" ? "Pr\xE9sent" : "Absent", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(decl_r5.hours_worked ? decl_r5.hours_worked + "h" : "--:--");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(decl_r5.validation_status === "VALIDEE" ? 13 : decl_r5.validation_status === "REJETEE" ? 14 : 15);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(decl_r5.validation_status === "REJETEE" ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(decl_r5.validation_status === "REJETEE" && decl_r5.rejection_reason ? 19 : -1);
  }
}
function AttendanceHistoryComponent_Conditional_35_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_35_For_27_Template_button_click_0_listener() {
      const $index_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage($index_r7 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", $index_r7 + 1 === ctx_r1.currentPage())("text-white", $index_r7 + 1 === ctx_r1.currentPage())("border", $index_r7 + 1 !== ctx_r1.currentPage())("border-outline-variant", $index_r7 + 1 !== ctx_r1.currentPage())("text-on-surface-variant", $index_r7 + 1 !== ctx_r1.currentPage())("hover:bg-surface-container", $index_r7 + 1 !== ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r7 + 1, " ");
  }
}
function AttendanceHistoryComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "table", 38)(2, "thead", 39)(3, "tr")(4, "th", 40);
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 40);
    \u0275\u0275text(7, "Jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 40);
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11, "Heures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 40);
    \u0275\u0275text(13, "Validation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 41);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 42);
    \u0275\u0275repeaterCreate(17, AttendanceHistoryComponent_Conditional_35_For_18_Template, 20, 25, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 43)(20, "span", 44);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 45)(23, "button", 46);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_35_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275elementStart(24, "span", 6);
    \u0275\u0275text(25, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(26, AttendanceHistoryComponent_Conditional_35_For_27_Template, 2, 13, "button", 47, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(28, "button", 46);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_35_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275elementStart(29, "span", 6);
    \u0275\u0275text(30, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.paginatedDeclarations());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.monthDeclarations().length, " d\xE9claration(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c1).constructor(ctx_r1.totalPages()));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
function AttendanceHistoryComponent_Conditional_73_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "p", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.correctionError());
  }
}
function AttendanceHistoryComponent_Conditional_73_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "label", 79);
    \u0275\u0275text(2, "Heures travaill\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 80);
    \u0275\u0275listener("ngModelChange", function AttendanceHistoryComponent_Conditional_73_Conditional_13_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.correctionHours.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.correctionHours());
    \u0275\u0275control();
  }
}
function AttendanceHistoryComponent_Conditional_73_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 77);
    \u0275\u0275element(1, "circle", 81)(2, "path", 82);
    \u0275\u0275elementEnd();
  }
}
function AttendanceHistoryComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_73_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorrection());
    });
    \u0275\u0275elementStart(1, "div", 67);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_73_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "h3", 68);
    \u0275\u0275text(3, "Corriger la d\xE9claration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 69);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AttendanceHistoryComponent_Conditional_73_Conditional_7_Template, 3, 1, "div", 70);
    \u0275\u0275elementStart(8, "div", 71)(9, "button", 72);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_73_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.correctionStatus.set("PRESENT"));
    });
    \u0275\u0275text(10, " Pr\xE9sent(e) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 72);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_73_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.correctionStatus.set("ABSENT"));
    });
    \u0275\u0275text(12, " Absent(e) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, AttendanceHistoryComponent_Conditional_73_Conditional_13_Template, 4, 1, "div", 73);
    \u0275\u0275elementStart(14, "div", 74)(15, "button", 75);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_73_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCorrection());
    });
    \u0275\u0275text(16, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 76);
    \u0275\u0275listener("click", function AttendanceHistoryComponent_Conditional_73_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCorrection());
    });
    \u0275\u0275conditionalCreate(18, AttendanceHistoryComponent_Conditional_73_Conditional_18_Template, 3, 0, ":svg:svg", 77);
    \u0275\u0275text(19, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 25, ctx_r1.correctionDate(), "fullDate", "", "fr"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.correctionError() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-secondary", ctx_r1.correctionStatus() === "PRESENT")("bg-secondary-container/30", ctx_r1.correctionStatus() === "PRESENT")("text-secondary", ctx_r1.correctionStatus() === "PRESENT")("border-outline-variant", ctx_r1.correctionStatus() !== "PRESENT")("text-on-surface-variant", ctx_r1.correctionStatus() !== "PRESENT");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-warning", ctx_r1.correctionStatus() === "ABSENT")("bg-warning/5", ctx_r1.correctionStatus() === "ABSENT")("text-warning-dark", ctx_r1.correctionStatus() === "ABSENT")("border-outline-variant", ctx_r1.correctionStatus() !== "ABSENT")("text-on-surface-variant", ctx_r1.correctionStatus() !== "ABSENT");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.correctionStatus() === "PRESENT" ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.correctionSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.correctionSaving() ? 18 : -1);
  }
}
var AttendanceHistoryComponent = class _AttendanceHistoryComponent {
  attendanceService = inject(AttendanceDeclarationService);
  declarations = signal(
    [],
    ...ngDevMode ? [{ debugName: "declarations" }] : (
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
  currentMonth = signal(
    (/* @__PURE__ */ new Date()).toISOString().slice(0, 7),
    ...ngDevMode ? [{ debugName: "currentMonth" }] : (
      /* istanbul ignore next */
      []
    )
  );
  monthDeclarations = computed(
    () => {
      const [year, month] = this.currentMonth().split("-").map(Number);
      return this.declarations().filter((d) => {
        const dDate = new Date(d.date);
        return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
      });
    },
    ...ngDevMode ? [{ debugName: "monthDeclarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageSize = 10;
  currentPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "currentPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paginatedDeclarations = computed(
    () => {
      const start = (this.currentPage() - 1) * this.pageSize;
      return this.monthDeclarations().slice(start, start + this.pageSize);
    },
    ...ngDevMode ? [{ debugName: "paginatedDeclarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalPages = computed(
    () => Math.max(1, Math.ceil(this.monthDeclarations().length / this.pageSize)),
    ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  summary = computed(
    () => {
      const decls = this.monthDeclarations();
      const validated = decls.filter((d) => d.validation_status === "VALIDEE");
      const totalDays = new Date(Number(this.currentMonth().split("-")[0]), Number(this.currentMonth().split("-")[1]), 0).getDate();
      return {
        daysPresent: decls.filter((d) => d.status === "PRESENT").length,
        daysAbsent: decls.filter((d) => d.status === "ABSENT").length,
        totalHours: validated.reduce((sum, d) => sum + (d.hours_worked ?? 0), 0),
        pendingCount: decls.filter((d) => d.validation_status === "EN_ATTENTE").length,
        totalDays
      };
    },
    ...ngDevMode ? [{ debugName: "summary" }] : (
      /* istanbul ignore next */
      []
    )
  );
  correctionDate = signal(
    null,
    ...ngDevMode ? [{ debugName: "correctionDate" }] : (
      /* istanbul ignore next */
      []
    )
  );
  correctionStatus = signal(
    "PRESENT",
    ...ngDevMode ? [{ debugName: "correctionStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  correctionHours = signal(
    null,
    ...ngDevMode ? [{ debugName: "correctionHours" }] : (
      /* istanbul ignore next */
      []
    )
  );
  correctionSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "correctionSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  correctionError = signal(
    null,
    ...ngDevMode ? [{ debugName: "correctionError" }] : (
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
    this.loading.set(true);
    this.error.set(null);
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (decls) => {
        this.declarations.set(decls);
        this.loading.set(false);
        this.currentPage.set(1);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Erreur lors du chargement.");
      }
    });
  }
  previousMonth() {
    const [year, month] = this.currentMonth().split("-").map(Number);
    const d = new Date(year, month - 2, 1);
    this.currentMonth.set(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
    this.loadMonth();
  }
  nextMonth() {
    const [year, month] = this.currentMonth().split("-").map(Number);
    const d = new Date(year, month, 1);
    this.currentMonth.set(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
    this.loadMonth();
  }
  goToPage(page) {
    if (page < 1 || page > this.totalPages())
      return;
    this.currentPage.set(page);
  }
  openCorrection(decl) {
    this.correctionDate.set(decl.date);
    this.correctionStatus.set(decl.status);
    this.correctionHours.set(decl.hours_worked);
    this.correctionError.set(null);
  }
  closeCorrection() {
    this.correctionDate.set(null);
    this.correctionError.set(null);
  }
  submitCorrection() {
    const date = this.correctionDate();
    if (!date)
      return;
    if (this.correctionStatus() === "PRESENT" && (this.correctionHours() === null || this.correctionHours() === 0)) {
      this.correctionError.set("Veuillez saisir vos heures travaill\xE9es.");
      return;
    }
    this.correctionSaving.set(true);
    this.correctionError.set(null);
    this.attendanceService.declare({
      date,
      status: this.correctionStatus(),
      hours_worked: this.correctionStatus() === "PRESENT" ? this.correctionHours() : null
    }).subscribe({
      next: () => {
        this.correctionSaving.set(false);
        this.closeCorrection();
        this.loadMonth();
      },
      error: (err) => {
        this.correctionSaving.set(false);
        this.correctionError.set(err.error?.message || "Erreur.");
      }
    });
  }
  static \u0275fac = function AttendanceHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceHistoryComponent, selectors: [["app-attendance-history"]], decls: 74, vars: 8, consts: [[1, "space-y-8", "max-w-[1400px]", "mx-auto", "w-full"], [1, "grid", "grid-cols-1", "md:grid-cols-12", "gap-4", "bg-white", "p-4", "rounded-xl", "border", "border-outline-variant", "shadow-sm", "items-end"], [1, "md:col-span-4", "flex", "flex-col", "gap-2"], [1, "font-sans", "font-medium", "text-xs", "text-on-surface-variant"], [1, "flex", "items-center", "gap-2"], [1, "p-2", "rounded-lg", "hover:bg-surface-container", "transition-colors", "text-on-surface-variant", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined"], [1, "flex-1", "text-center", "font-sans", "text-sm", "font-semibold", "text-on-surface"], [1, "w-full", "px-4", "py-2", "rounded-lg", "border", "border-outline-variant", "bg-surface-container-lowest", "font-sans", "text-sm", "focus:ring-primary", "focus:border-primary"], ["value", ""], ["value", "PRESENT"], ["value", "ABSENT"], [1, "md:col-span-4", "flex", "gap-3"], [1, "flex-1", "px-6", "py-2", "bg-primary", "text-white", "font-sans", "font-medium", "text-sm", "rounded-lg", "flex", "items-center", "justify-center", "gap-2", "hover:opacity-90", "active:scale-95", "transition-all", "cursor-pointer"], [1, "material-symbols-outlined", "text-[20px]"], [1, "px-6", "py-2", "bg-surface-container-high", "text-on-surface-variant", "font-sans", "font-medium", "text-sm", "rounded-lg", "hover:bg-outline-variant/30", "active:scale-95", "transition-all", "cursor-pointer"], [1, "bg-white", "rounded-xl", "border", "border-outline-variant", "shadow-sm", "overflow-hidden"], [1, "p-6", "animate-pulse", "space-y-4"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-4", "text-center"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-outline-variant", "shadow-sm", "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-full", "bg-primary-fixed", "flex", "items-center", "justify-center", "text-primary"], [1, "font-sans", "font-bold", "text-xs", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "font-heading", "font-bold", "text-headline-sm", "text-on-surface"], [1, "w-12", "h-12", "rounded-full", "bg-secondary-container", "flex", "items-center", "justify-center", "text-secondary"], [1, "w-12", "h-12", "rounded-full", "bg-tertiary-fixed", "flex", "items-center", "justify-center", "text-tertiary"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-outline-variant", "shadow-sm", "flex", "items-center", "gap-4", "border-l-4", "border-l-error"], [1, "w-12", "h-12", "rounded-full", "bg-error-container", "flex", "items-center", "justify-center", "text-error"], [1, "font-heading", "font-bold", "text-headline-sm", "text-error"], [1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "h-10", "bg-surface-container", "rounded"], [1, "material-symbols-outlined", "text-error", "text-4xl", "mb-4"], [1, "text-sm", "text-error", "mb-2"], [1, "text-sm", "font-semibold", "text-primary", "hover:underline", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-on-surface-variant", "text-4xl", "mb-4"], [1, "font-heading", "text-lg", "font-semibold", "text-on-surface", "mb-1"], [1, "text-sm", "text-on-surface-variant"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-surface-container-low", "border-b", "border-outline-variant"], [1, "px-6", "py-4", "font-sans", "font-bold", "text-xs", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "font-sans", "font-bold", "text-xs", "text-on-surface-variant", "uppercase", "tracking-wider", "text-right"], [1, "divide-y", "divide-outline-variant"], [1, "px-6", "py-4", "flex", "items-center", "justify-between", "border-t", "border-outline-variant", "bg-surface-container-lowest"], [1, "font-sans", "text-xs", "text-on-surface-variant"], [1, "flex", "items-center", "gap-1"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-outline-variant", "text-on-surface-variant", "hover:bg-surface-container", "transition-colors", "disabled:opacity-50", "cursor-pointer", "disabled:cursor-default", 3, "click", "disabled"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-lg", "font-sans", "font-medium", "text-xs", "transition-all", "cursor-pointer", 3, "bg-primary", "text-white", "border", "border-outline-variant", "text-on-surface-variant", "hover:bg-surface-container"], [1, "table-row-hover", "transition-colors"], [1, "px-6", "py-4", "font-sans", "text-sm", "text-on-surface"], [1, "px-6", "py-4", "font-sans", "text-sm", "text-on-surface-variant"], [1, "px-6", "py-4"], [1, "px-3", "py-1", "rounded-full", "font-sans", "font-medium", "text-xs"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "rounded-full", "bg-secondary-container/30", "text-secondary", "font-sans", "font-medium", "text-xs", "border", "border-secondary/20"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "rounded-full", "bg-error-container", "text-error", "font-sans", "font-medium", "text-xs", "border", "border-error/20"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "rounded-full", "bg-yellow-100", "text-yellow-800", "font-sans", "font-medium", "text-xs", "border", "border-yellow-200"], [1, "px-6", "py-4", "text-right"], [1, "px-4", "py-1.5", "bg-primary", "text-white", "font-sans", "font-medium", "text-xs", "rounded-lg", "hover:bg-primary-hover", "transition-all", "shadow-sm", "cursor-pointer"], [1, "p-2", "hover:bg-surface-container-highest", "rounded-full", "text-on-surface-variant", "transition-colors", "cursor-pointer"], [1, "bg-error-container/10"], [1, "material-symbols-outlined", "text-[14px]"], [1, "px-4", "py-1.5", "bg-primary", "text-white", "font-sans", "font-medium", "text-xs", "rounded-lg", "hover:bg-primary-hover", "transition-all", "shadow-sm", "cursor-pointer", 3, "click"], ["colspan", "6", 1, "px-6", "py-4"], [1, "flex", "items-center", "gap-2", "text-xs", "text-error"], [1, "material-symbols-outlined", "text-[16px]"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-lg", "font-sans", "font-medium", "text-xs", "transition-all", "cursor-pointer", 3, "click"], [1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-white", "rounded-xl", "shadow-xl", "border", "border-outline-variant", "p-6", "max-w-md", "w-full", 3, "click"], [1, "font-heading", "text-lg", "font-bold", "text-on-surface", "mb-1"], [1, "text-sm", "text-on-surface-variant", "mb-4"], [1, "bg-error-container", "border", "border-error/20", "rounded-lg", "p-3", "mb-4"], [1, "flex", "gap-3", "mb-4"], [1, "flex-1", "px-4", "py-3", "rounded-xl", "border-2", "text-sm", "font-semibold", "transition-all", "cursor-pointer", 3, "click"], [1, "mb-4"], [1, "flex", "justify-end", "gap-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-on-surface-variant", "border", "border-outline-variant", "rounded-lg", "hover:bg-surface-container", "transition-all", "cursor-pointer", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "bg-primary", "text-white", "rounded-lg", "hover:opacity-90", "transition-all", "disabled:opacity-50", "cursor-pointer", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4"], [1, "text-sm", "text-error"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-on-surface-variant", "mb-2", "block"], ["type", "number", "step", "0.5", "min", "0", "max", "24", "placeholder", "Ex: 7.5", 1, "w-full", "px-4", "py-2.5", "border", "border-outline-variant", "rounded-lg", "text-sm", "text-on-surface", "placeholder:text-on-surface-variant", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"]], template: function AttendanceHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "P\xE9riode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function AttendanceHistoryComponent_Template_button_click_6_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function AttendanceHistoryComponent_Template_button_click_11_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 2)(15, "label", 3);
      \u0275\u0275text(16, "Statut de pr\xE9sence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "select", 8)(18, "option", 9);
      \u0275\u0275text(19, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 10);
      \u0275\u0275text(21, "Pr\xE9sent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 11);
      \u0275\u0275text(23, "Absent");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 12)(25, "button", 13)(26, "span", 14);
      \u0275\u0275text(27, "filter_list");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Appliquer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 15);
      \u0275\u0275text(30, " Exporter ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 16);
      \u0275\u0275conditionalCreate(32, AttendanceHistoryComponent_Conditional_32_Template, 3, 1, "div", 17)(33, AttendanceHistoryComponent_Conditional_33_Template, 7, 1, "div", 18)(34, AttendanceHistoryComponent_Conditional_34_Template, 7, 0, "div", 18)(35, AttendanceHistoryComponent_Conditional_35_Template, 31, 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 19)(37, "div", 20)(38, "div", 21)(39, "span", 6);
      \u0275\u0275text(40, "timer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div")(42, "p", 22);
      \u0275\u0275text(43, "Total heures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 23);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 20)(47, "div", 24)(48, "span", 6);
      \u0275\u0275text(49, "done_all");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div")(51, "p", 22);
      \u0275\u0275text(52, "Jours pr\xE9sents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 23);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 20)(56, "div", 25)(57, "span", 6);
      \u0275\u0275text(58, "event_busy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div")(60, "p", 22);
      \u0275\u0275text(61, "Jours absents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p", 23);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 26)(65, "div", 27)(66, "span", 6);
      \u0275\u0275text(67, "warning");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div")(69, "p", 22);
      \u0275\u0275text(70, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 28);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(73, AttendanceHistoryComponent_Conditional_73_Template, 20, 30, "div", 29);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.currentMonth());
      \u0275\u0275advance(22);
      \u0275\u0275conditional(ctx.loading() ? 32 : ctx.error() ? 33 : ctx.monthDeclarations().length === 0 ? 34 : 35);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1("", ctx.summary().totalHours, "h");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2("", ctx.summary().daysPresent, "/", ctx.summary().totalDays);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summary().daysAbsent);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.summary().pendingCount);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.correctionDate() !== null ? 73 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-history", standalone: true, imports: [DatePipe, FormsModule], template: `<div class="space-y-8 max-w-[1400px] mx-auto w-full">
  <!-- FILTERS BENTO BAR -->
  <div class="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white p-4 rounded-xl border border-outline-variant shadow-sm items-end">
    <div class="md:col-span-4 flex flex-col gap-2">
      <label class="font-sans font-medium text-xs text-on-surface-variant">P\xE9riode</label>
      <div class="flex items-center gap-2">
        <button (click)="previousMonth()" class="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <span class="flex-1 text-center font-sans text-sm font-semibold text-on-surface">{{ currentMonth() }}</span>
        <button (click)="nextMonth()" class="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
    <div class="md:col-span-4 flex flex-col gap-2">
      <label class="font-sans font-medium text-xs text-on-surface-variant">Statut de pr\xE9sence</label>
      <select class="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-sans text-sm focus:ring-primary focus:border-primary">
        <option value="">Tous les statuts</option>
        <option value="PRESENT">Pr\xE9sent</option>
        <option value="ABSENT">Absent</option>
      </select>
    </div>
    <div class="md:col-span-4 flex gap-3">
      <button class="flex-1 px-6 py-2 bg-primary text-white font-sans font-medium text-sm rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer">
        <span class="material-symbols-outlined text-[20px]">filter_list</span>
        Appliquer
      </button>
      <button class="px-6 py-2 bg-surface-container-high text-on-surface-variant font-sans font-medium text-sm rounded-lg hover:bg-outline-variant/30 active:scale-95 transition-all cursor-pointer">
        Exporter
      </button>
    </div>
  </div>

  <!-- ATTENDANCE TABLE CARD -->
  <div class="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
    @if (loading()) {
      <div class="p-6 animate-pulse space-y-4">
        @for (_ of [1,2,3,4]; track _) { <div class="h-10 bg-surface-container rounded"></div> }
      </div>
    } @else if (error()) {
      <div class="flex flex-col items-center justify-center py-16 px-4 text-center">
        <span class="material-symbols-outlined text-error text-4xl mb-4">error</span>
        <p class="text-sm text-error mb-2">{{ error() }}</p>
        <button (click)="loadMonth()" class="text-sm font-semibold text-primary hover:underline cursor-pointer">R\xE9essayer</button>
      </div>
    } @else if (monthDeclarations().length === 0) {
      <div class="flex flex-col items-center justify-center py-16 px-4 text-center">
        <span class="material-symbols-outlined text-on-surface-variant text-4xl mb-4">calendar_month</span>
        <h3 class="font-heading text-lg font-semibold text-on-surface mb-1">Aucune d\xE9claration ce mois-ci</h3>
        <p class="text-sm text-on-surface-variant">Utilisez l'onglet "Aujourd'hui" pour d\xE9clarer votre pr\xE9sence.</p>
      </div>
    } @else {
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead class="bg-surface-container-low border-b border-outline-variant">
            <tr>
              <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Date</th>
              <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Jour</th>
              <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Statut</th>
              <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Heures</th>
              <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Validation</th>
              <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant">
            @for (decl of paginatedDeclarations(); track decl.id) {
              <tr class="table-row-hover transition-colors">
                <td class="px-6 py-4 font-sans text-sm text-on-surface">{{ decl.date | date:'d MMM yyyy':'':'fr' }}</td>
                <td class="px-6 py-4 font-sans text-sm text-on-surface-variant">{{ decl.date | date:'EEEE':'':'fr' }}</td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full font-sans font-medium text-xs"
                    [class.bg-secondary-container/30]="decl.status === 'PRESENT'"
                    [class.text-secondary]="decl.status === 'PRESENT'"
                    [class.bg-error-container]="decl.status === 'ABSENT'"
                    [class.text-error]="decl.status === 'ABSENT'">
                    {{ decl.status === 'PRESENT' ? 'Pr\xE9sent' : 'Absent' }}
                  </span>
                </td>
                <td class="px-6 py-4 font-sans text-sm text-on-surface">{{ decl.hours_worked ? decl.hours_worked + 'h' : '--:--' }}</td>
                <td class="px-6 py-4">
                  @if (decl.validation_status === 'VALIDEE') {
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-sans font-medium text-xs border border-secondary/20">
                      <span class="material-symbols-outlined text-[14px]">check_circle</span>
                      Valid\xE9e
                    </span>
                  } @else if (decl.validation_status === 'REJETEE') {
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container text-error font-sans font-medium text-xs border border-error/20">
                      <span class="material-symbols-outlined text-[14px]">cancel</span>
                      Rejet\xE9e
                    </span>
                  } @else {
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-sans font-medium text-xs border border-yellow-200">
                      <span class="material-symbols-outlined text-[14px]">schedule</span>
                      En attente
                    </span>
                  }
                </td>
                <td class="px-6 py-4 text-right">
                  @if (decl.validation_status === 'REJETEE') {
                    <button (click)="openCorrection(decl)"
                      class="px-4 py-1.5 bg-primary text-white font-sans font-medium text-xs rounded-lg hover:bg-primary-hover transition-all shadow-sm cursor-pointer">
                      Corriger
                    </button>
                  } @else {
                    <button class="p-2 hover:bg-surface-container-highest rounded-full text-on-surface-variant transition-colors cursor-pointer">
                      <span class="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                  }
                </td>
              </tr>
              @if (decl.validation_status === 'REJETEE' && decl.rejection_reason) {
                <tr class="bg-error-container/10">
                  <td colspan="6" class="px-6 py-4">
                    <div class="flex items-center gap-2 text-xs text-error">
                      <span class="material-symbols-outlined text-[16px]">info</span>
                      <span>{{ decl.rejection_reason }}</span>
                    </div>
                  </td>
                </tr>
              }
            }
          </tbody>
        </table>
      </div>

      <!-- PAGINATION -->
      <div class="px-6 py-4 flex items-center justify-between border-t border-outline-variant bg-surface-container-lowest">
        <span class="font-sans text-xs text-on-surface-variant">{{ monthDeclarations().length }} d\xE9claration(s)</span>
        <div class="flex items-center gap-1">
          <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 1"
            class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-default">
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          @for (page of [].constructor(totalPages()); track $index) {
            <button (click)="goToPage($index + 1)"
              class="w-10 h-10 flex items-center justify-center rounded-lg font-sans font-medium text-xs transition-all cursor-pointer"
              [class.bg-primary]="$index + 1 === currentPage()"
              [class.text-white]="$index + 1 === currentPage()"
              [class.border]="$index + 1 !== currentPage()"
              [class.border-outline-variant]="$index + 1 !== currentPage()"
              [class.text-on-surface-variant]="$index + 1 !== currentPage()"
              [class.hover:bg-surface-container]="$index + 1 !== currentPage()">
              {{ $index + 1 }}
            </button>
          }
          <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()"
            class="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-default">
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    }
  </div>

  <!-- SUMMARY CARDS -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
        <span class="material-symbols-outlined">timer</span>
      </div>
      <div>
        <p class="font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Total heures</p>
        <p class="font-heading font-bold text-headline-sm text-on-surface">{{ summary().totalHours }}h</p>
      </div>
    </div>
    <div class="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
        <span class="material-symbols-outlined">done_all</span>
      </div>
      <div>
        <p class="font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Jours pr\xE9sents</p>
        <p class="font-heading font-bold text-headline-sm text-on-surface">{{ summary().daysPresent }}/{{ summary().totalDays }}</p>
      </div>
    </div>
    <div class="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
        <span class="material-symbols-outlined">event_busy</span>
      </div>
      <div>
        <p class="font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Jours absents</p>
        <p class="font-heading font-bold text-headline-sm text-on-surface">{{ summary().daysAbsent }}</p>
      </div>
    </div>
    <div class="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 border-l-4 border-l-error">
      <div class="w-12 h-12 rounded-full bg-error-container flex items-center justify-center text-error">
        <span class="material-symbols-outlined">warning</span>
      </div>
      <div>
        <p class="font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">En attente</p>
        <p class="font-heading font-bold text-headline-sm text-error">{{ summary().pendingCount }}</p>
      </div>
    </div>
  </div>
</div>

@if (correctionDate() !== null) {
  <div class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" (click)="closeCorrection()">
    <div class="bg-white rounded-xl shadow-xl border border-outline-variant p-6 max-w-md w-full" (click)="$event.stopPropagation()">
      <h3 class="font-heading text-lg font-bold text-on-surface mb-1">Corriger la d\xE9claration</h3>
      <p class="text-sm text-on-surface-variant mb-4">{{ correctionDate() | date:'fullDate':'':'fr' }}</p>

      @if (correctionError()) {
        <div class="bg-error-container border border-error/20 rounded-lg p-3 mb-4">
          <p class="text-sm text-error">{{ correctionError() }}</p>
        </div>
      }

      <div class="flex gap-3 mb-4">
        <button (click)="correctionStatus.set('PRESENT')"
          class="flex-1 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all cursor-pointer"
          [class.border-secondary]="correctionStatus() === 'PRESENT'"
          [class.bg-secondary-container/30]="correctionStatus() === 'PRESENT'"
          [class.text-secondary]="correctionStatus() === 'PRESENT'"
          [class.border-outline-variant]="correctionStatus() !== 'PRESENT'"
          [class.text-on-surface-variant]="correctionStatus() !== 'PRESENT'">
          Pr\xE9sent(e)
        </button>
        <button (click)="correctionStatus.set('ABSENT')"
          class="flex-1 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all cursor-pointer"
          [class.border-warning]="correctionStatus() === 'ABSENT'"
          [class.bg-warning/5]="correctionStatus() === 'ABSENT'"
          [class.text-warning-dark]="correctionStatus() === 'ABSENT'"
          [class.border-outline-variant]="correctionStatus() !== 'ABSENT'"
          [class.text-on-surface-variant]="correctionStatus() !== 'ABSENT'">
          Absent(e)
        </button>
      </div>

      @if (correctionStatus() === 'PRESENT') {
        <div class="mb-4">
          <label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">Heures travaill\xE9es</label>
          <input type="number" step="0.5" min="0" max="24"
            [ngModel]="correctionHours()" (ngModelChange)="correctionHours.set($any($event))"
            placeholder="Ex: 7.5"
            class="w-full px-4 py-2.5 border border-outline-variant rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
        </div>
      }

      <div class="flex justify-end gap-3">
        <button (click)="closeCorrection()"
          class="px-4 py-2 text-sm font-medium text-on-surface-variant border border-outline-variant rounded-lg hover:bg-surface-container transition-all cursor-pointer">
          Annuler
        </button>
        <button (click)="submitCorrection()" [disabled]="correctionSaving()"
          class="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer flex items-center gap-2">
          @if (correctionSaving()) {
            <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          }
          Enregistrer
        </button>
      </div>
    </div>
  </div>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceHistoryComponent, { className: "AttendanceHistoryComponent", filePath: "src/app/features/attendance/attendance-history/attendance-history.component.ts", lineNumber: 13 });
})();
export {
  AttendanceHistoryComponent
};
//# sourceMappingURL=chunk-SXC2KIQR.js.map
