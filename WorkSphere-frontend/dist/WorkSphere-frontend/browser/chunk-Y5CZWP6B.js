import {
  AttendanceDeclarationService
} from "./chunk-I3RMVRUE.js";
import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
import {
  Component,
  computed,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/attendance/hr-attendance-validation/hr-attendance-validation.component.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.managerId;
var arrowFn0 = (ctx, view) => (d) => {
  \u0275\u0275restoreView(view);
  const ctx_r1 = \u0275\u0275nextContext(2);
  return \u0275\u0275resetView(ctx_r1.selectedIds().has(d.id));
};
function HrAttendanceValidationComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 10);
    \u0275\u0275domElement(2, "path", 11)(3, "polyline", 12);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 14);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(7, "svg", 15);
    \u0275\u0275domElement(8, "line", 16)(9, "line", 17);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function HrAttendanceValidationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 18);
    \u0275\u0275domElement(2, "circle", 19)(3, "line", 20)(4, "line", 21);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 23);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(8, "svg", 15);
    \u0275\u0275domElement(9, "line", 16)(10, "line", 17);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function HrAttendanceValidationComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 24);
  }
}
function HrAttendanceValidationComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, HrAttendanceValidationComponent_Conditional_16_For_2_Template, 1, 0, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function HrAttendanceValidationComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "span", 25);
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3", 26);
    \u0275\u0275text(4, "Aucune d\xE9claration en attente");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 27);
    \u0275\u0275text(6, "Toutes les d\xE9clarations des managers ont \xE9t\xE9 trait\xE9es.");
    \u0275\u0275domElementEnd()();
  }
}
function HrAttendanceValidationComponent_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 28)(1, "div", 53)(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(4, "div", 54);
    \u0275\u0275domElementStart(5, "button", 55);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_18_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBulkApprove());
    });
    \u0275\u0275domElementStart(6, "span", 7);
    \u0275\u0275text(7, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(8, " Valider tout ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "button", 56);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_18_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBulkReject());
    });
    \u0275\u0275domElementStart(10, "span", 7);
    \u0275\u0275text(11, "block");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(12, " Refuser ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "button", 57);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_18_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275text(14, "Tout d\xE9s\xE9lectionner");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r1.selectedCount(), " \xE9l\xE9ment", ctx_r1.selectedCount() > 1 ? "s" : "", " s\xE9lectionn\xE9", ctx_r1.selectedCount() > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.loading());
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("disabled", ctx_r1.rejecting());
  }
}
function HrAttendanceValidationComponent_Conditional_18_For_48_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 65);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceValidationComponent_Conditional_18_For_48_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 65);
    \u0275\u0275text(1, "warning");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceValidationComponent_Conditional_18_For_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 49)(1, "div", 47)(2, "input", 48);
    \u0275\u0275domListener("change", function HrAttendanceValidationComponent_Conditional_18_For_48_Template_input_change_2_listener() {
      const group_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(group_r7));
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(3, "div", 58)(4, "div", 59);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div")(7, "p", 60);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 61);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "div", 62);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div")(14, "span", 63);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 64);
    \u0275\u0275conditionalCreate(17, HrAttendanceValidationComponent_Conditional_18_For_48_Conditional_17_Template, 2, 0, "span", 65)(18, HrAttendanceValidationComponent_Conditional_18_For_48_Conditional_18_Template, 2, 0, "span", 65);
    \u0275\u0275domElementStart(19, "span", 66);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(21, "div", 5)(22, "button", 67);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_18_For_48_Template_button_click_22_listener() {
      const group_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveGroup(group_r7));
    });
    \u0275\u0275domElementStart(23, "span", 68);
    \u0275\u0275text(24, "done");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "button", 69);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_18_For_48_Template_button_click_25_listener() {
      const group_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectGroup(group_r7));
    });
    \u0275\u0275domElementStart(26, "span", 68);
    \u0275\u0275text(27, "close");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "button", 70)(29, "span", 68);
    \u0275\u0275text(30, "visibility");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("checked", group_r7.declarations.every(\u0275\u0275arrowFunction(23, arrowFn0, ctx)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.initialsFromName(group_r7.managerName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r7.managerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", group_r7.teamName, " (", ctx_r1.teamSize(group_r7), " pers.)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatPeriod(group_r7.declarations));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-secondary-container", group_r7.complete)("text-on-secondary-fixed-variant", group_r7.complete)("bg-surface-container-highest", !group_r7.complete)("text-on-surface-variant", !group_r7.complete);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r7.complete ? "COMPLET" : "INCOMPLET", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-on-surface-variant", group_r7.complete)("text-error", !group_r7.complete);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r7.complete ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r7.anomalies);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.loading() || ctx_r1.rejecting());
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r1.loading() || ctx_r1.rejecting());
  }
}
function HrAttendanceValidationComponent_Conditional_18_For_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 71);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_18_For_57_Template_button_click_0_listener() {
      const $index_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage($index_r9 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const $index_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", $index_r9 + 1 === ctx_r1.currentPage())("text-on-primary", $index_r9 + 1 === ctx_r1.currentPage())("border", $index_r9 + 1 !== ctx_r1.currentPage())("border-outline-variant", $index_r9 + 1 !== ctx_r1.currentPage())("hover:bg-surface-container", $index_r9 + 1 !== ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r9 + 1, " ");
  }
}
function HrAttendanceValidationComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, HrAttendanceValidationComponent_Conditional_18_Conditional_0_Template, 15, 5, "div", 28);
    \u0275\u0275domElementStart(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "h3", 32);
    \u0275\u0275text(5, "Aper\xE7u rapide");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 33)(7, "div", 34)(8, "span", 35);
    \u0275\u0275text(9, "Total en attente");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "div", 34)(13, "span", 35);
    \u0275\u0275text(14, "\xC9quipes incompl\xE8tes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 37);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "div", 34)(18, "span", 35);
    \u0275\u0275text(19, "Absences d\xE9clar\xE9es");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "span", 36);
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(22, "div", 38)(23, "p", 39);
    \u0275\u0275text(24, "Derni\xE8re mise \xE0 jour : maintenant");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(25, "div", 40)(26, "div", 41)(27, "span", 42);
    \u0275\u0275text(28, "info");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "p", 43);
    \u0275\u0275text(30, "Conseil IA");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "p", 44);
    \u0275\u0275text(32);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(33, "div", 45)(34, "div", 46)(35, "div", 47)(36, "input", 48);
    \u0275\u0275domListener("change", function HrAttendanceValidationComponent_Conditional_18_Template_input_change_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll());
    });
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(37, "div");
    \u0275\u0275text(38, "Manager / \xC9quipe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "div");
    \u0275\u0275text(40, "P\xE9riode");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "div");
    \u0275\u0275text(42, "Statut \xC9quipe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "div");
    \u0275\u0275text(44, "Anomalies");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "div");
    \u0275\u0275text(46, "Actions");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(47, HrAttendanceValidationComponent_Conditional_18_For_48_Template, 31, 24, "div", 49, _forTrack0);
    \u0275\u0275domElementStart(49, "div", 50)(50, "p", 35);
    \u0275\u0275text(51);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(52, "div", 5)(53, "button", 51);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_18_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275domElementStart(54, "span", 7);
    \u0275\u0275text(55, "chevron_left");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(56, HrAttendanceValidationComponent_Conditional_18_For_57_Template, 2, 11, "button", 52, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementStart(58, "button", 51);
    \u0275\u0275domListener("click", function HrAttendanceValidationComponent_Conditional_18_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275domElementStart(59, "span", 7);
    \u0275\u0275text(60, "chevron_right");
    \u0275\u0275domElementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.selectedCount() > 0 ? 0 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.totalPending());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.criticalCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.leaveCount());
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.criticalCount() > 0 ? `${ctx_r1.criticalCount()} \xE9quipe(s) ont des d\xE9clarations incompl\xE8tes \xE0 examiner avant la cl\xF4ture mensuelle.` : "Toutes les \xE9quipes ont des d\xE9clarations compl\xE8tes. Vous pouvez valider en un clic.");
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("checked", ctx_r1.selectAllChecked());
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.paginatedGroups());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("Affichage de ", ctx_r1.pageStart(), "-", ctx_r1.pageEnd(), " sur ", ctx_r1.managerGroups().length, " \xE9quipe(s)");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(11, _c1).constructor(ctx_r1.totalPages()));
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
var HrAttendanceValidationComponent = class _HrAttendanceValidationComponent {
  attendanceService = inject(AttendanceDeclarationService);
  employeeService = inject(EmployeeService);
  declarations = signal(
    [],
    ...ngDevMode ? [{ debugName: "declarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allEmployees = signal(
    [],
    ...ngDevMode ? [{ debugName: "allEmployees" }] : (
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
  selectedIds = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "selectedIds" }] : (
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
  pageSize = 5;
  currentPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "currentPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pendingDeclarations = computed(
    () => this.declarations().filter((d) => d.validation_status === "EN_ATTENTE"),
    ...ngDevMode ? [{ debugName: "pendingDeclarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  managerGroups = computed(
    () => {
      const map = /* @__PURE__ */ new Map();
      for (const d of this.pendingDeclarations()) {
        const managerId = d.user?.role === "MANAGER" ? d.user.id : d.user?.manager_id ?? d.user_id;
        const manager = this.allEmployees().find((e) => e.id === managerId);
        const group = map.get(managerId) ?? {
          managerId,
          managerName: manager ? `${manager.first_name} ${manager.last_name}` : d.user?.first_name ? `${d.user.first_name} ${d.user.last_name}` : `Manager #${managerId}`,
          teamName: manager?.department?.name ?? "\xC9quipe",
          declarations: [],
          dateFrom: d.date,
          dateTo: d.date,
          period: "",
          anomalies: 0,
          complete: true
        };
        group.declarations.push(d);
        if (d.date < group.dateFrom)
          group.dateFrom = d.date;
        if (d.date > group.dateTo)
          group.dateTo = d.date;
        const anomaly = d.status === "ABSENT";
        if (anomaly)
          group.anomalies += 1;
        map.set(managerId, group);
      }
      const groups = [...map.values()];
      groups.forEach((g) => g.complete = g.anomalies === 0);
      return groups;
    },
    ...ngDevMode ? [{ debugName: "managerGroups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paginatedGroups = computed(
    () => {
      const start = (this.currentPage() - 1) * this.pageSize;
      return this.managerGroups().slice(start, start + this.pageSize);
    },
    ...ngDevMode ? [{ debugName: "paginatedGroups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalPages = computed(
    () => Math.max(1, Math.ceil(this.managerGroups().length / this.pageSize)),
    ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedCount = computed(
    () => this.selectedIds().size,
    ...ngDevMode ? [{ debugName: "selectedCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageStart = computed(
    () => (this.currentPage() - 1) * this.pageSize + 1,
    ...ngDevMode ? [{ debugName: "pageStart" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageEnd = computed(
    () => Math.min(this.currentPage() * this.pageSize, this.managerGroups().length),
    ...ngDevMode ? [{ debugName: "pageEnd" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectAllChecked = computed(
    () => {
      const ids = this.managerGroups().flatMap((g) => g.declarations.map((d) => d.id));
      return ids.length > 0 && ids.every((id) => this.selectedIds().has(id));
    },
    ...ngDevMode ? [{ debugName: "selectAllChecked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalPending = computed(
    () => this.pendingDeclarations().length,
    ...ngDevMode ? [{ debugName: "totalPending" }] : (
      /* istanbul ignore next */
      []
    )
  );
  criticalCount = computed(
    () => this.managerGroups().filter((g) => !g.complete).length,
    ...ngDevMode ? [{ debugName: "criticalCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  leaveCount = computed(
    () => this.pendingDeclarations().filter((d) => d.status === "ABSENT").length,
    ...ngDevMode ? [{ debugName: "leaveCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadEmployees();
    this.loadDeclarations();
  }
  loadEmployees() {
    this.employeeService.getEmployees({ per_page: 1e3 }).subscribe({
      next: (res) => this.allEmployees.set(res.data)
    });
  }
  loadDeclarations() {
    this.loading.set(true);
    this.error.set(null);
    this.attendanceService.getDeclarations({ validation_status: "EN_ATTENTE", queue: "rh" }).subscribe({
      next: (decls) => {
        this.declarations.set(decls);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Erreur lors du chargement des d\xE9clarations.");
      }
    });
  }
  formatPeriod(decls) {
    const dates = decls.map((d) => new Date(d.date)).sort((a, b) => a.getTime() - b.getTime());
    if (dates.length === 0)
      return "\u2014";
    const first = dates[0];
    const last = dates[dates.length - 1];
    const fmt = (d, withMonth) => withMonth ? `${d.getDate()} ${d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "")}` : `${d.getDate()}`;
    if (first.getMonth() === last.getMonth() && first.getFullYear() === last.getFullYear()) {
      return `${fmt(first, false)} - ${fmt(last, true)}`;
    }
    return `${fmt(first, true)} - ${fmt(last, true)}`;
  }
  teamSize(group) {
    return group.declarations.length;
  }
  toggleSelect(id) {
    this.selectedIds.update((set) => {
      const next = new Set(set);
      if (next.has(id))
        next.delete(id);
      else
        next.add(id);
      return next;
    });
  }
  toggleSelectAll() {
    if (this.selectAllChecked()) {
      this.selectedIds.set(/* @__PURE__ */ new Set());
    } else {
      this.selectedIds.set(new Set(this.managerGroups().flatMap((g) => g.declarations.map((d) => d.id))));
    }
  }
  toggleGroup(group) {
    const ids = group.declarations.map((d) => d.id);
    const allSelected = ids.every((id) => this.selectedIds().has(id));
    this.selectedIds.update((set) => {
      const next = new Set(set);
      if (allSelected) {
        ids.forEach((id) => next.delete(id));
      } else {
        ids.forEach((id) => next.add(id));
      }
      return next;
    });
  }
  clearSelection() {
    this.selectedIds.set(/* @__PURE__ */ new Set());
  }
  onBulkReject() {
    const ids = Array.from(this.selectedIds());
    if (ids.length === 0)
      return;
    this.rejecting.set(true);
    this.error.set(null);
    this.success.set(null);
    const reason = "Demande rejet\xE9e par l'\xE9quipe RH";
    forkJoin(ids.map((id) => this.attendanceService.reject(id, reason))).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => !ids.includes(d.id)));
        this.selectedIds.set(/* @__PURE__ */ new Set());
        this.rejecting.set(false);
        this.success.set(`${ids.length} d\xE9claration(s) rejet\xE9e(s).`);
      },
      error: (err) => {
        this.rejecting.set(false);
        this.error.set(err.error?.message || "Erreur lors du rejet group\xE9.");
      }
    });
  }
  initialsFromName(name) {
    const parts = name.trim().split(/\s+/);
    return `${parts[0]?.charAt(0) ?? ""}${parts[1]?.charAt(0) ?? ""}`.toUpperCase();
  }
  onBulkApprove() {
    const ids = Array.from(this.selectedIds());
    if (ids.length === 0)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    this.attendanceService.bulkApprove(ids).subscribe({
      next: (result) => {
        this.declarations.update((list) => list.filter((d) => !result.approved.includes(d.id)));
        this.selectedIds.set(/* @__PURE__ */ new Set());
        this.success.set(`${result.approved.length} d\xE9claration(s) approuv\xE9e(s).${result.skipped.length > 0 ? ` ${result.skipped.length} ignor\xE9e(s).` : ""}`);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Erreur lors de l'approbation group\xE9e.");
      }
    });
  }
  approveGroup(group) {
    const ids = group.declarations.map((d) => d.id);
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    this.attendanceService.bulkApprove(ids).subscribe({
      next: (result) => {
        this.declarations.update((list) => list.filter((d) => !result.approved.includes(d.id)));
        this.selectedIds.update((set) => {
          const next = new Set(set);
          ids.forEach((id) => next.delete(id));
          return next;
        });
        this.success.set(`${result.approved.length} d\xE9claration(s) de ${group.managerName} approuv\xE9e(s).`);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Erreur lors de l'approbation.");
      }
    });
  }
  rejectGroup(group) {
    const ids = group.declarations.map((d) => d.id);
    this.rejecting.set(true);
    this.error.set(null);
    this.success.set(null);
    const reason = "Demande rejet\xE9e par l'\xE9quipe RH";
    forkJoin(ids.map((id) => this.attendanceService.reject(id, reason))).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => !ids.includes(d.id)));
        this.selectedIds.update((set) => {
          const next = new Set(set);
          ids.forEach((id) => next.delete(id));
          return next;
        });
        this.rejecting.set(false);
        this.success.set(`${ids.length} d\xE9claration(s) de ${group.managerName} rejet\xE9e(s).`);
      },
      error: (err) => {
        this.rejecting.set(false);
        this.error.set(err.error?.message || "Erreur lors du rejet.");
      }
    });
  }
  goToPage(page) {
    this.currentPage.set(page);
  }
  static \u0275fac = function HrAttendanceValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrAttendanceValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrAttendanceValidationComponent, selectors: [["app-hr-attendance-validation"]], decls: 19, vars: 3, consts: [[1, "flex", "flex-col", "gap-6"], [1, "bg-success-light", "border", "border-success/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2.5"], [1, "bg-error-light", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2.5"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "font-heading", "text-headline-lg", "text-on-surface"], [1, "flex", "gap-2"], [1, "px-4", "py-2", "border", "border-outline-variant", "rounded-lg", "font-label-md", "flex", "items-center", "gap-2", "hover:bg-surface-container-low", "transition-colors", "cursor-pointer"], [1, "material-symbols-outlined", "text-[18px]"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "animate-pulse", "space-y-4"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-4", "text-center", "bg-surface", "border", "border-outline-variant", "rounded-xl"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-success", "shrink-0", "mt-0.5"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "text-sm", "font-medium", "text-success-dark", "flex-1"], [1, "text-success-dark/60", "hover:text-success-dark", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-sm", "font-medium", "text-error-dark", "flex-1"], [1, "text-error-dark/60", "hover:text-error-dark", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], [1, "h-10", "bg-surface-container-high", "rounded"], [1, "material-symbols-outlined", "text-5xl", "text-on-surface-variant", "mb-4"], [1, "font-heading", "text-lg", "font-semibold", "text-on-surface", "mb-1"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant"], [1, "sticky", "top-0", "mb-4", "bg-primary-container", "text-on-primary-container", "p-4", "rounded-xl", "flex", "items-center", "justify-between", "shadow-lg", "z-10"], [1, "grid", "grid-cols-12", "gap-6"], [1, "col-span-12", "lg:col-span-3", "space-y-4"], [1, "bg-surface-container", "p-6", "rounded-xl", "border", "border-outline-variant"], [1, "font-label-md", "font-bold", "mb-4"], [1, "space-y-4"], [1, "flex", "justify-between", "items-center"], [1, "text-body-sm", "text-on-surface-variant"], [1, "font-heading", "text-headline-sm", "font-bold"], [1, "text-error", "font-bold", "font-heading", "text-headline-sm"], [1, "mt-6", "pt-4", "border-t", "border-outline-variant"], [1, "text-[11px]", "text-on-surface-variant", "italic"], [1, "bg-secondary-container", "text-on-secondary-fixed-variant", "p-6", "rounded-xl", "border", "border-secondary/20"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "material-symbols-outlined", "text-secondary"], [1, "font-label-md", "font-bold"], [1, "text-body-sm", "opacity-90"], [1, "col-span-12", "lg:col-span-9", "space-y-4"], [1, "hidden", "lg:grid", "grid-cols-[48px_2fr_1fr_1fr_1fr_auto]", "gap-4", "px-6", "py-2", "text-label-sm", "text-on-surface-variant", "font-bold", "uppercase", "tracking-wider"], [1, "flex", "justify-center"], ["type", "checkbox", 1, "rounded", "border-outline-variant", "text-primary", "focus:ring-primary", "cursor-pointer", 3, "change", "checked"], [1, "group", "grid", "grid-cols-[48px_2fr_1fr_1fr_1fr_auto]", "gap-4", "px-6", "py-4", "bg-surface", "border", "border-outline-variant", "rounded-xl", "items-center", "hover:shadow-md", "hover:border-primary/30", "transition-all"], [1, "flex", "justify-between", "items-center", "py-4", "px-2"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-outline-variant", "hover:bg-surface-container", "transition-colors", "disabled:opacity-30", "cursor-pointer", 3, "click", "disabled"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "font-bold", "text-[12px]", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-on-primary", "border", "border-outline-variant", "hover:bg-surface-container"], [1, "flex", "items-center", "gap-4", "flex-wrap"], [1, "h-6", "w-px", "bg-on-primary-container/20"], [1, "bg-secondary", "text-on-secondary", "px-4", "py-1.5", "rounded-lg", "font-label-md", "flex", "items-center", "gap-2", "hover:opacity-90", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], [1, "border", "border-on-primary-container/30", "px-4", "py-1.5", "rounded-lg", "font-label-md", "flex", "items-center", "gap-2", "hover:bg-white/10", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], [1, "text-label-sm", "underline", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-full", "bg-primary-container/15", "text-primary", "flex", "items-center", "justify-center", "font-bold", "text-xs", "border", "border-outline-variant", "shrink-0"], [1, "font-label-md", "font-bold", "text-on-surface"], [1, "text-[12px]", "text-on-surface-variant"], [1, "text-body-sm", "text-on-surface-variant", "font-medium"], [1, "px-2.5", "py-0.5", "rounded-full", "text-[11px]", "font-bold"], [1, "flex", "items-center", "gap-1"], [1, "material-symbols-outlined", "text-[16px]"], [1, "text-body-sm", "font-bold"], ["title", "Valider", 1, "p-2", "hover:bg-secondary-container", "hover:text-secondary", "rounded-lg", "transition-colors", "disabled:opacity-40", "cursor-pointer", 3, "click", "disabled"], [1, "material-symbols-outlined"], ["title", "Refuser", 1, "p-2", "hover:bg-error-container", "hover:text-error", "rounded-lg", "transition-colors", "disabled:opacity-40", "cursor-pointer", 3, "click", "disabled"], ["title", "D\xE9tails", 1, "p-2", "hover:bg-surface-container-high", "rounded-lg", "transition-colors", "cursor-pointer"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "font-bold", "text-[12px]", "transition-colors", "cursor-pointer", 3, "click"]], template: function HrAttendanceValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, HrAttendanceValidationComponent_Conditional_1_Template, 10, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, HrAttendanceValidationComponent_Conditional_2_Template, 11, 1, "div", 2);
      \u0275\u0275domElementStart(3, "div", 3)(4, "div")(5, "h2", 4);
      \u0275\u0275text(6, "D\xE9clarations des Managers");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 5)(8, "button", 6)(9, "span", 7);
      \u0275\u0275text(10, "filter_list");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(11, " Filtrer ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "button", 6)(13, "span", 7);
      \u0275\u0275text(14, "download");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(15, " Exporter ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(16, HrAttendanceValidationComponent_Conditional_16_Template, 3, 1, "div", 8)(17, HrAttendanceValidationComponent_Conditional_17_Template, 7, 0, "div", 9)(18, HrAttendanceValidationComponent_Conditional_18_Template, 61, 12);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 2 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.loading() && ctx.declarations().length === 0 ? 16 : ctx.managerGroups().length === 0 ? 17 : 18);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrAttendanceValidationComponent, [{
    type: Component,
    args: [{ selector: "app-hr-attendance-validation", standalone: true, template: `<div class="flex flex-col gap-6">

  @if (success()) {
    <div class="bg-success-light border border-success/20 rounded-lg p-4 flex items-start gap-2.5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-success shrink-0 mt-0.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span class="text-sm font-medium text-success-dark flex-1">{{ success() }}</span>
      <button (click)="success.set(null)" class="text-success-dark/60 hover:text-success-dark transition-colors shrink-0 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  }

  @if (error()) {
    <div class="bg-error-light border border-error/20 rounded-lg p-4 flex items-start gap-2.5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-error shrink-0 mt-0.5">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <span class="text-sm font-medium text-error-dark flex-1">{{ error() }}</span>
      <button (click)="error.set(null)" class="text-error-dark/60 hover:text-error-dark transition-colors shrink-0 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  }

  <!-- Header Section -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
     
      <h2 class="font-heading text-headline-lg text-on-surface">D\xE9clarations des Managers</h2>
    </div>
    <div class="flex gap-2">
      <button class="px-4 py-2 border border-outline-variant rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">filter_list</span>
        Filtrer
      </button>
      <button class="px-4 py-2 border border-outline-variant rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">download</span>
        Exporter
      </button>
    </div>
  </div>

  @if (loading() && declarations().length === 0) {
    <div class="bg-surface border border-outline-variant rounded-xl p-6 animate-pulse space-y-4">
      @for (_ of [1,2,3]; track _) { <div class="h-10 bg-surface-container-high rounded"></div> }
    </div>
  } @else if (managerGroups().length === 0) {
    <div class="flex flex-col items-center justify-center py-16 px-4 text-center bg-surface border border-outline-variant rounded-xl">
      <span class="material-symbols-outlined text-5xl text-on-surface-variant mb-4">task_alt</span>
      <h3 class="font-heading text-lg font-semibold text-on-surface mb-1">Aucune d\xE9claration en attente</h3>
      <p class="font-body-sm text-body-sm text-on-surface-variant">Toutes les d\xE9clarations des managers ont \xE9t\xE9 trait\xE9es.</p>
    </div>
  } @else {
    <!-- Selection / Action Bar (Sticky) -->
    @if (selectedCount() > 0) {
      <div class="sticky top-0 mb-4 bg-primary-container text-on-primary-container p-4 rounded-xl flex items-center justify-between shadow-lg z-10">
        <div class="flex items-center gap-4 flex-wrap">
          <span class="font-label-md font-bold">{{ selectedCount() }} \xE9l\xE9ment{{ selectedCount() > 1 ? 's' : '' }} s\xE9lectionn\xE9{{ selectedCount() > 1 ? 's' : '' }}</span>
          <div class="h-6 w-px bg-on-primary-container/20"></div>
          <button (click)="onBulkApprove()" [disabled]="loading()"
            class="bg-secondary text-on-secondary px-4 py-1.5 rounded-lg font-label-md flex items-center gap-2 hover:opacity-90 disabled:opacity-50 cursor-pointer">
            <span class="material-symbols-outlined text-[18px]">check_circle</span>
            Valider tout
          </button>
          <button (click)="onBulkReject()" [disabled]="rejecting()"
            class="border border-on-primary-container/30 px-4 py-1.5 rounded-lg font-label-md flex items-center gap-2 hover:bg-white/10 disabled:opacity-50 cursor-pointer">
            <span class="material-symbols-outlined text-[18px]">block</span>
            Refuser
          </button>
        </div>
        <button (click)="clearSelection()" class="text-label-sm underline cursor-pointer">Tout d\xE9s\xE9lectionner</button>
      </div>
    }

    <!-- Grid Content -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Summary Sidebar -->
      <div class="col-span-12 lg:col-span-3 space-y-4">
        <div class="bg-surface-container p-6 rounded-xl border border-outline-variant">
          <h3 class="font-label-md font-bold mb-4">Aper\xE7u rapide</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-body-sm text-on-surface-variant">Total en attente</span>
              <span class="font-heading text-headline-sm font-bold">{{ totalPending() }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-body-sm text-on-surface-variant">\xC9quipes incompl\xE8tes</span>
              <span class="text-error font-bold font-heading text-headline-sm">{{ criticalCount() }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-body-sm text-on-surface-variant">Absences d\xE9clar\xE9es</span>
              <span class="font-heading text-headline-sm font-bold">{{ leaveCount() }}</span>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-outline-variant">
            <p class="text-[11px] text-on-surface-variant italic">Derni\xE8re mise \xE0 jour : maintenant</p>
          </div>
        </div>
        <div class="bg-secondary-container text-on-secondary-fixed-variant p-6 rounded-xl border border-secondary/20">
          <div class="flex items-center gap-2 mb-2">
            <span class="material-symbols-outlined text-secondary">info</span>
            <p class="font-label-md font-bold">Conseil IA</p>
          </div>
          <p class="text-body-sm opacity-90">{{ criticalCount() > 0 ? \`\${criticalCount()} \xE9quipe(s) ont des d\xE9clarations incompl\xE8tes \xE0 examiner avant la cl\xF4ture mensuelle.\` : 'Toutes les \xE9quipes ont des d\xE9clarations compl\xE8tes. Vous pouvez valider en un clic.' }}</p>
        </div>
      </div>

      <!-- Main Validation List -->
      <div class="col-span-12 lg:col-span-9 space-y-4">
        <!-- Table Header -->
        <div class="hidden lg:grid grid-cols-[48px_2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-2 text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
          <div class="flex justify-center">
            <input type="checkbox" [checked]="selectAllChecked()" (change)="toggleSelectAll()"
              class="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" />
          </div>
          <div>Manager / \xC9quipe</div>
          <div>P\xE9riode</div>
          <div>Statut \xC9quipe</div>
          <div>Anomalies</div>
          <div>Actions</div>
        </div>

        @for (group of paginatedGroups(); track group.managerId) {
          <div class="group grid grid-cols-[48px_2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-4 bg-surface border border-outline-variant rounded-xl items-center hover:shadow-md hover:border-primary/30 transition-all">
            <div class="flex justify-center">
              <input type="checkbox" [checked]="group.declarations.every(d => selectedIds().has(d.id))" (change)="toggleGroup(group)"
                class="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" />
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary-container/15 text-primary flex items-center justify-center font-bold text-xs border border-outline-variant shrink-0">{{ initialsFromName(group.managerName) }}</div>
              <div>
                <p class="font-label-md font-bold text-on-surface">{{ group.managerName }}</p>
                <p class="text-[12px] text-on-surface-variant">{{ group.teamName }} ({{ teamSize(group) }} pers.)</p>
              </div>
            </div>
            <div class="text-body-sm text-on-surface-variant font-medium">{{ formatPeriod(group.declarations) }}</div>
            <div>
              <span [class.bg-secondary-container]="group.complete" [class.text-on-secondary-fixed-variant]="group.complete"
                [class.bg-surface-container-highest]="!group.complete" [class.text-on-surface-variant]="!group.complete"
                class="px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                {{ group.complete ? 'COMPLET' : 'INCOMPLET' }}
              </span>
            </div>
            <div class="flex items-center gap-1" [class.text-on-surface-variant]="group.complete" [class.text-error]="!group.complete">
              @if (group.complete) {
                <span class="material-symbols-outlined text-[16px]">check_circle</span>
              } @else {
                <span class="material-symbols-outlined text-[16px]">warning</span>
              }
              <span class="text-body-sm font-bold">{{ group.anomalies }}</span>
            </div>
            <div class="flex gap-2">
              <button (click)="approveGroup(group)" [disabled]="loading() || rejecting()" title="Valider"
                class="p-2 hover:bg-secondary-container hover:text-secondary rounded-lg transition-colors disabled:opacity-40 cursor-pointer">
                <span class="material-symbols-outlined">done</span>
              </button>
              <button (click)="rejectGroup(group)" [disabled]="loading() || rejecting()" title="Refuser"
                class="p-2 hover:bg-error-container hover:text-error rounded-lg transition-colors disabled:opacity-40 cursor-pointer">
                <span class="material-symbols-outlined">close</span>
              </button>
              <button class="p-2 hover:bg-surface-container-high rounded-lg transition-colors cursor-pointer" title="D\xE9tails">
                <span class="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
        }

        <!-- Pagination -->
        <div class="flex justify-between items-center py-4 px-2">
          <p class="text-body-sm text-on-surface-variant">Affichage de {{ pageStart() }}-{{ pageEnd() }} sur {{ managerGroups().length }} \xE9quipe(s)</p>
          <div class="flex gap-2">
            <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 1"
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-colors disabled:opacity-30 cursor-pointer">
              <span class="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            @for (page of [].constructor(totalPages()); track $index) {
              <button (click)="goToPage($index + 1)"
                class="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-[12px] transition-colors cursor-pointer"
                [class.bg-primary]="$index + 1 === currentPage()" [class.text-on-primary]="$index + 1 === currentPage()"
                [class.border]="$index + 1 !== currentPage()" [class.border-outline-variant]="$index + 1 !== currentPage()"
                [class.hover:bg-surface-container]="$index + 1 !== currentPage()">
                {{ $index + 1 }}
              </button>
            }
            <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()"
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-colors disabled:opacity-30 cursor-pointer">
              <span class="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrAttendanceValidationComponent, { className: "HrAttendanceValidationComponent", filePath: "src/app/features/attendance/hr-attendance-validation/hr-attendance-validation.component.ts", lineNumber: 25 });
})();
export {
  HrAttendanceValidationComponent
};
//# sourceMappingURL=chunk-Y5CZWP6B.js.map
