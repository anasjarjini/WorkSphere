import {
  ExportService
} from "./chunk-ITIHXOB5.js";
import "./chunk-7YWLATDR.js";
import {
  AbsenceService
} from "./chunk-PXDOOJZG.js";
import {
  AttendanceDeclarationService
} from "./chunk-I3RMVRUE.js";
import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import "./chunk-U7CQY2TY.js";
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
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
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
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/attendance/hr-attendance-today/hr-attendance-today.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.employee.id;
function HrAttendanceTodayComponent_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 12);
  }
}
function HrAttendanceTodayComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, HrAttendanceTodayComponent_Conditional_17_For_2_Template, 1, 0, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aujourd'hui, d\xE9clar\xE9 ");
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(1, 1, item_r3.declaration.date, "dd MMM", "", "fr"), " ");
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrAttendanceTodayComponent_Conditional_18_For_34_Conditional_15_Conditional_0_Template, 1, 0)(1, HrAttendanceTodayComponent_Conditional_18_For_34_Conditional_15_Conditional_1_Template, 2, 6);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(item_r3.declaration.date === ctx_r1.todayStr ? 0 : 1);
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 36);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 37);
    \u0275\u0275domElement(1, "span", 43);
    \u0275\u0275text(2, " Pr\xE9sent ");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 38);
    \u0275\u0275domElement(1, "span", 44);
    \u0275\u0275text(2, " En attente ");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 39);
    \u0275\u0275domElement(1, "span", 45);
    \u0275\u0275text(2, " En cong\xE9 ");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 40);
    \u0275\u0275domElement(1, "span", 46);
    \u0275\u0275text(2, " Absent ");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 24)(1, "td", 31)(2, "div", 4)(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div")(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 26);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(10, "td", 34);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 35);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td", 35);
    \u0275\u0275conditionalCreate(15, HrAttendanceTodayComponent_Conditional_18_For_34_Conditional_15_Template, 2, 1)(16, HrAttendanceTodayComponent_Conditional_18_For_34_Conditional_16_Template, 2, 0, "span", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td", 31);
    \u0275\u0275conditionalCreate(18, HrAttendanceTodayComponent_Conditional_18_For_34_Case_18_Template, 3, 0, "span", 37)(19, HrAttendanceTodayComponent_Conditional_18_For_34_Case_19_Template, 3, 0, "span", 38)(20, HrAttendanceTodayComponent_Conditional_18_For_34_Case_20_Template, 3, 0, "span", 39)(21, HrAttendanceTodayComponent_Conditional_18_For_34_Case_21_Template, 3, 0, "span", 40);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "td", 41)(23, "button", 42);
    \u0275\u0275text(24, "visibility");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.initials(item_r3.employee.first_name, item_r3.employee.last_name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r3.employee.first_name, " ", item_r3.employee.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.employee.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.employee.department?.name ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roleLabel(item_r3.employee.role));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r3.declaration ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.statusOf(item_r3)) === "PRESENT" ? 18 : tmp_17_0 === "EN_ATTENTE" ? 19 : tmp_17_0 === "EN_CONGE" ? 20 : tmp_17_0 === "ABSENT" ? 21 : -1);
  }
}
function HrAttendanceTodayComponent_Conditional_18_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 47);
    \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Conditional_18_For_43_Template_button_click_0_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage($index_r5 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const $index_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", $index_r5 + 1 === ctx_r1.currentPage())("text-on-primary", $index_r5 + 1 === ctx_r1.currentPage())("border", $index_r5 + 1 !== ctx_r1.currentPage())("border-outline-variant", $index_r5 + 1 !== ctx_r1.currentPage())("hover:bg-surface-container", $index_r5 + 1 !== ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r5 + 1, " ");
  }
}
function HrAttendanceTodayComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 13)(1, "h3", 14)(2, "span", 15);
    \u0275\u0275text(3, "groups");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4, " Statut Global (Aujourd'hui) ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 16)(6, "button", 17);
    \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Conditional_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("TOUS"));
    });
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "button", 17);
    \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Conditional_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("PRESENT"));
    });
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "button", 17);
    \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Conditional_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("EN_ATTENTE"));
    });
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "button", 17);
    \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Conditional_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("EN_CONGE"));
    });
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "button", 17);
    \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Conditional_18_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFilter("ABSENT"));
    });
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "div", 18)(17, "div", 19)(18, "table", 20)(19, "thead")(20, "tr", 21)(21, "th", 22);
    \u0275\u0275text(22, "Collaborateur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "th", 22);
    \u0275\u0275text(24, "D\xE9partement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "th", 22);
    \u0275\u0275text(26, "R\xF4le");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "th", 22);
    \u0275\u0275text(28, "Derni\xE8re D\xE9cl.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "th", 22);
    \u0275\u0275text(30, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(31, "th", 22);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "tbody", 23);
    \u0275\u0275repeaterCreate(33, HrAttendanceTodayComponent_Conditional_18_For_34_Template, 25, 8, "tr", 24, _forTrack0);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(35, "div", 25)(36, "span", 26);
    \u0275\u0275text(37);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "div", 27)(39, "button", 28);
    \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Conditional_18_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275domElementStart(40, "span", 29);
    \u0275\u0275text(41, "chevron_left");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(42, HrAttendanceTodayComponent_Conditional_18_For_43_Template, 2, 11, "button", 30, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementStart(44, "button", 28);
    \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Conditional_18_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275domElementStart(45, "span", 29);
    \u0275\u0275text(46, "chevron_right");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("bg-primary", ctx_r1.statusFilter() === "TOUS")("text-on-primary", ctx_r1.statusFilter() === "TOUS")("bg-surface-container", ctx_r1.statusFilter() !== "TOUS")("text-on-surface-variant", ctx_r1.statusFilter() !== "TOUS")("hover:bg-surface-container-high", ctx_r1.statusFilter() !== "TOUS");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Tous (", ctx_r1.counts().total, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", ctx_r1.statusFilter() === "PRESENT")("text-on-primary", ctx_r1.statusFilter() === "PRESENT")("bg-surface-container", ctx_r1.statusFilter() !== "PRESENT")("text-on-surface-variant", ctx_r1.statusFilter() !== "PRESENT")("hover:bg-surface-container-high", ctx_r1.statusFilter() !== "PRESENT");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pr\xE9sents (", ctx_r1.counts().present, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", ctx_r1.statusFilter() === "EN_ATTENTE")("text-on-primary", ctx_r1.statusFilter() === "EN_ATTENTE")("bg-surface-container", ctx_r1.statusFilter() !== "EN_ATTENTE")("text-on-surface-variant", ctx_r1.statusFilter() !== "EN_ATTENTE")("hover:bg-surface-container-high", ctx_r1.statusFilter() !== "EN_ATTENTE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" En attente (", ctx_r1.counts().pending, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", ctx_r1.statusFilter() === "EN_CONGE")("text-on-primary", ctx_r1.statusFilter() === "EN_CONGE")("bg-surface-container", ctx_r1.statusFilter() !== "EN_CONGE")("text-on-surface-variant", ctx_r1.statusFilter() !== "EN_CONGE")("hover:bg-surface-container-high", ctx_r1.statusFilter() !== "EN_CONGE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" En cong\xE9 (", ctx_r1.counts().leave, ") ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", ctx_r1.statusFilter() === "ABSENT")("text-on-primary", ctx_r1.statusFilter() === "ABSENT")("bg-surface-container", ctx_r1.statusFilter() !== "ABSENT")("text-on-surface-variant", ctx_r1.statusFilter() !== "ABSENT")("hover:bg-surface-container-high", ctx_r1.statusFilter() !== "ABSENT");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Absents (", ctx_r1.counts().absent, ") ");
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.paginatedStatus());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Affichage de ", (ctx_r1.currentPage() - 1) * ctx_r1.pageSize + 1, " sur ", ctx_r1.filteredStatus().length, " employ\xE9s");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(59, _c1).constructor(ctx_r1.totalPages()));
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
var HrAttendanceTodayComponent = class _HrAttendanceTodayComponent {
  attendanceService = inject(AttendanceDeclarationService);
  employeeService = inject(EmployeeService);
  absenceService = inject(AbsenceService);
  exportService = inject(ExportService);
  todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  allEmployees = signal(
    [],
    ...ngDevMode ? [{ debugName: "allEmployees" }] : (
      /* istanbul ignore next */
      []
    )
  );
  todayDeclarations = signal(
    [],
    ...ngDevMode ? [{ debugName: "todayDeclarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  onLeaveIds = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "onLeaveIds" }] : (
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
  statusFilter = signal(
    "TOUS",
    ...ngDevMode ? [{ debugName: "statusFilter" }] : (
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
  companyStatus = computed(
    () => {
      const employees = this.allEmployees();
      const todayDecls = this.todayDeclarations();
      return employees.map((e) => ({
        employee: e,
        declaration: todayDecls.find((d) => d.user_id === e.id) ?? null
      }));
    },
    ...ngDevMode ? [{ debugName: "companyStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statusOf = (item) => {
    if (this.onLeaveIds().has(item.employee.id))
      return "EN_CONGE";
    const d = item.declaration;
    if (!d)
      return "ABSENT";
    if (d.status === "ABSENT")
      return "ABSENT";
    if (d.validation_status === "VALIDEE")
      return "PRESENT";
    return "EN_ATTENTE";
  };
  counts = computed(
    () => {
      const items = this.companyStatus();
      return {
        total: items.length,
        present: items.filter((i) => this.statusOf(i) === "PRESENT").length,
        pending: items.filter((i) => this.statusOf(i) === "EN_ATTENTE").length,
        leave: items.filter((i) => this.statusOf(i) === "EN_CONGE").length,
        absent: items.filter((i) => this.statusOf(i) === "ABSENT").length
      };
    },
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredStatus = computed(
    () => {
      const filter = this.statusFilter();
      if (filter === "TOUS")
        return this.companyStatus();
      return this.companyStatus().filter((i) => this.statusOf(i) === filter);
    },
    ...ngDevMode ? [{ debugName: "filteredStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paginatedStatus = computed(
    () => {
      const start = (this.currentPage() - 1) * this.pageSize;
      return this.filteredStatus().slice(start, start + this.pageSize);
    },
    ...ngDevMode ? [{ debugName: "paginatedStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalPages = computed(
    () => Math.max(1, Math.ceil(this.filteredStatus().length / this.pageSize)),
    ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadEmployees();
    this.loadToday();
    this.loadLeaves();
  }
  loadLeaves() {
    this.absenceService.getOnLeaveToday(this.todayStr).subscribe({
      next: (ids) => this.onLeaveIds.set(new Set(ids))
    });
  }
  loadEmployees() {
    this.employeeService.getEmployees({ per_page: 1e3 }).subscribe({
      next: (res) => this.allEmployees.set(res.data)
    });
  }
  loadToday() {
    this.loading.set(true);
    this.attendanceService.getDeclarations({ date: this.todayStr }).subscribe({
      next: (decls) => {
        this.todayDeclarations.set(decls);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  setFilter(filter) {
    this.statusFilter.set(filter);
    this.currentPage.set(1);
  }
  goToPage(page) {
    this.currentPage.set(page);
  }
  initials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
  roleLabel(role) {
    switch (role) {
      case "HR_ADMIN":
        return "RH";
      case "MANAGER":
        return "Manager";
      case "EMPLOYE":
        return "Employ\xE9";
      default:
        return "Membre";
    }
  }
  statusLabel(item) {
    switch (this.statusOf(item)) {
      case "PRESENT":
        return "Pr\xE9sent";
      case "EN_ATTENTE":
        return "En attente";
      case "EN_CONGE":
        return "En cong\xE9";
      default:
        return "Absent";
    }
  }
  lastDeclarationLabel(item) {
    const d = item.declaration;
    if (!d)
      return "\u2014";
    if (d.date === this.todayStr) {
      return "Aujourd'hui, d\xE9clar\xE9";
    }
    return new Date(d.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
  }
  exportCsv() {
    const period = (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
    const rows = this.filteredStatus().map((item) => [
      `${item.employee.first_name} ${item.employee.last_name}`,
      item.employee.email,
      item.employee.department?.name ?? "\u2014",
      this.roleLabel(item.employee.role),
      this.lastDeclarationLabel(item),
      this.statusLabel(item)
    ]);
    this.exportService.csv(`presences_aujourdhui_${this.todayStr}.csv`, ["Collaborateur", "Email", "D\xE9partement", "R\xF4le", "Derni\xE8re d\xE9claration", "Statut"], rows, { title: "Statut Global de l'Entreprise", period });
  }
  static \u0275fac = function HrAttendanceTodayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrAttendanceTodayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrAttendanceTodayComponent, selectors: [["app-hr-attendance-today"]], decls: 23, vars: 7, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "font-heading", "text-headline-lg", "text-on-surface", "mb-1"], [1, "font-body-md", "text-on-surface-variant"], [1, "flex", "items-center", "gap-4"], [1, "bg-surface-container", "px-4", "py-2", "rounded-xl", "flex", "items-center", "gap-2", "text-on-surface-variant", "font-label-md"], [1, "material-symbols-outlined"], [1, "bg-secondary", "text-on-secondary", "px-4", "py-2", "rounded-xl", "font-label-md", "flex", "items-center", "gap-2", "hover:opacity-95", "transition-all", "shadow-sm", "cursor-pointer", 3, "click"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "animate-pulse", "space-y-4"], [1, "fixed", "bottom-8", "right-8"], ["title", "Nouvelle demande", 1, "w-14", "h-14", "bg-primary", "text-on-primary", "rounded-full", "shadow-2xl", "flex", "items-center", "justify-center", "hover:scale-110", "active:scale-95", "transition-all", "cursor-pointer"], [1, "material-symbols-outlined", "text-3xl"], [1, "h-10", "bg-surface-container-high", "rounded"], [1, "flex", "items-center", "justify-between", "gap-4", "flex-wrap"], [1, "font-heading", "text-headline-sm", "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-secondary", 2, "font-variation-settings", "'FILL' 1"], [1, "flex", "gap-2", "flex-wrap"], [1, "px-4", "py-1", "font-label-sm", "rounded-full", "cursor-pointer", "transition-colors", 3, "click"], [1, "bg-surface", "border", "border-outline-variant", "rounded-2xl", "overflow-hidden", "shadow-sm"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-surface-container-low", "border-b", "border-outline-variant"], [1, "px-6", "py-4", "font-label-md", "text-on-surface-variant"], [1, "divide-y", "divide-outline-variant/50"], [1, "hover:bg-surface-container-lowest", "transition-colors"], [1, "p-4", "bg-surface-container-lowest", "border-t", "border-outline-variant", "flex", "items-center", "justify-between"], [1, "text-body-sm", "text-on-surface-variant"], [1, "flex", "gap-2"], [1, "w-8", "h-8", "rounded", "border", "border-outline-variant", "flex", "items-center", "justify-center", "hover:bg-surface-container", "transition-colors", "disabled:opacity-30", "cursor-pointer", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-sm"], [1, "w-8", "h-8", "rounded", "flex", "items-center", "justify-center", "text-label-sm", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-on-primary", "border", "border-outline-variant", "hover:bg-surface-container"], [1, "px-6", "py-4"], [1, "w-10", "h-10", "rounded-full", "bg-surface-variant", "flex", "items-center", "justify-center", "font-bold", "text-on-surface-variant", "shrink-0"], [1, "font-label-md", "text-on-surface"], [1, "px-6", "py-4", "font-body-sm", "text-on-surface"], [1, "px-6", "py-4", "font-body-sm", "text-on-surface-variant"], [1, "text-on-surface-variant/50"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1", "bg-secondary-container", "text-on-secondary-container", "rounded-full", "text-label-sm"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1", "bg-blue-100", "text-blue-800", "rounded-full", "text-label-sm"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1", "bg-amber-100", "text-amber-800", "rounded-full", "text-label-sm"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1", "bg-surface-container", "text-on-surface-variant", "rounded-full", "text-label-sm"], [1, "px-6", "py-4", "text-right"], [1, "material-symbols-outlined", "text-outline", "hover:text-primary", "transition-colors", "cursor-pointer"], [1, "w-2", "h-2", "bg-secondary", "rounded-full"], [1, "w-2", "h-2", "bg-blue-500", "rounded-full"], [1, "w-2", "h-2", "bg-amber-500", "rounded-full"], [1, "w-2", "h-2", "bg-outline", "rounded-full"], [1, "w-8", "h-8", "rounded", "flex", "items-center", "justify-center", "text-label-sm", "transition-colors", "cursor-pointer", 3, "click"]], template: function HrAttendanceTodayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Statut Global de l'Entreprise");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Vue d'ensemble des pr\xE9sences de tous les collaborateurs aujourd'hui.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10, "event");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "date");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "button", 7);
      \u0275\u0275domListener("click", function HrAttendanceTodayComponent_Template_button_click_13_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275domElementStart(14, "span", 6);
      \u0275\u0275text(15, "download");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(16, " Export CSV (Full) ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(17, HrAttendanceTodayComponent_Conditional_17_Template, 3, 1, "div", 8)(18, HrAttendanceTodayComponent_Conditional_18_Template, 47, 60);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "div", 9)(20, "button", 10)(21, "span", 11);
      \u0275\u0275text(22, "add");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(12, 2, ctx.todayStr, "MMMM yyyy", "", "fr"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() && ctx.allEmployees().length === 0 ? 17 : 18);
    }
  }, dependencies: [DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrAttendanceTodayComponent, [{
    type: Component,
    args: [{ selector: "app-hr-attendance-today", standalone: true, imports: [DatePipe], template: `<div class="flex flex-col gap-6">
  <!-- Header Section -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <h1 class="font-heading text-headline-lg text-on-surface mb-1">Statut Global de l'Entreprise</h1>
      <p class="font-body-md text-on-surface-variant">Vue d'ensemble des pr\xE9sences de tous les collaborateurs aujourd'hui.</p>
    </div>
    <div class="flex items-center gap-4">
      <div class="bg-surface-container px-4 py-2 rounded-xl flex items-center gap-2 text-on-surface-variant font-label-md">
        <span class="material-symbols-outlined">event</span>
        {{ todayStr | date:'MMMM yyyy':'':'fr' }}
      </div>
      <button (click)="exportCsv()" class="bg-secondary text-on-secondary px-4 py-2 rounded-xl font-label-md flex items-center gap-2 hover:opacity-95 transition-all shadow-sm cursor-pointer">
        <span class="material-symbols-outlined">download</span>
        Export CSV (Full)
      </button>
    </div>
  </div>

  @if (loading() && allEmployees().length === 0) {
    <div class="bg-surface border border-outline-variant rounded-xl p-6 animate-pulse space-y-4">
      @for (_ of [1,2,3,4]; track _) { <div class="h-10 bg-surface-container-high rounded"></div> }
    </div>
  } @else {
    <!-- Status Filter Chips -->
    <div class="flex items-center justify-between gap-4 flex-wrap">
      <h3 class="font-heading text-headline-sm flex items-center gap-2">
        <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">groups</span>
        Statut Global (Aujourd'hui)
      </h3>
      <div class="flex gap-2 flex-wrap">
        <button (click)="setFilter('TOUS')"
          class="px-4 py-1 font-label-sm rounded-full cursor-pointer transition-colors"
          [class.bg-primary]="statusFilter() === 'TOUS'" [class.text-on-primary]="statusFilter() === 'TOUS'"
          [class.bg-surface-container]="statusFilter() !== 'TOUS'" [class.text-on-surface-variant]="statusFilter() !== 'TOUS'"
          [class.hover:bg-surface-container-high]="statusFilter() !== 'TOUS'">
          Tous ({{ counts().total }})
        </button>
        <button (click)="setFilter('PRESENT')"
          class="px-4 py-1 font-label-sm rounded-full cursor-pointer transition-colors"
          [class.bg-primary]="statusFilter() === 'PRESENT'" [class.text-on-primary]="statusFilter() === 'PRESENT'"
          [class.bg-surface-container]="statusFilter() !== 'PRESENT'" [class.text-on-surface-variant]="statusFilter() !== 'PRESENT'"
          [class.hover:bg-surface-container-high]="statusFilter() !== 'PRESENT'">
          Pr\xE9sents ({{ counts().present }})
        </button>
        <button (click)="setFilter('EN_ATTENTE')"
          class="px-4 py-1 font-label-sm rounded-full cursor-pointer transition-colors"
          [class.bg-primary]="statusFilter() === 'EN_ATTENTE'" [class.text-on-primary]="statusFilter() === 'EN_ATTENTE'"
          [class.bg-surface-container]="statusFilter() !== 'EN_ATTENTE'" [class.text-on-surface-variant]="statusFilter() !== 'EN_ATTENTE'"
          [class.hover:bg-surface-container-high]="statusFilter() !== 'EN_ATTENTE'">
          En attente ({{ counts().pending }})
        </button>
        <button (click)="setFilter('EN_CONGE')"
          class="px-4 py-1 font-label-sm rounded-full cursor-pointer transition-colors"
          [class.bg-primary]="statusFilter() === 'EN_CONGE'" [class.text-on-primary]="statusFilter() === 'EN_CONGE'"
          [class.bg-surface-container]="statusFilter() !== 'EN_CONGE'" [class.text-on-surface-variant]="statusFilter() !== 'EN_CONGE'"
          [class.hover:bg-surface-container-high]="statusFilter() !== 'EN_CONGE'">
          En cong\xE9 ({{ counts().leave }})
        </button>
        <button (click)="setFilter('ABSENT')"
          class="px-4 py-1 font-label-sm rounded-full cursor-pointer transition-colors"
          [class.bg-primary]="statusFilter() === 'ABSENT'" [class.text-on-primary]="statusFilter() === 'ABSENT'"
          [class.bg-surface-container]="statusFilter() !== 'ABSENT'" [class.text-on-surface-variant]="statusFilter() !== 'ABSENT'"
          [class.hover:bg-surface-container-high]="statusFilter() !== 'ABSENT'">
          Absents ({{ counts().absent }})
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container-low border-b border-outline-variant">
              <th class="px-6 py-4 font-label-md text-on-surface-variant">Collaborateur</th>
              <th class="px-6 py-4 font-label-md text-on-surface-variant">D\xE9partement</th>
              <th class="px-6 py-4 font-label-md text-on-surface-variant">R\xF4le</th>
              <th class="px-6 py-4 font-label-md text-on-surface-variant">Derni\xE8re D\xE9cl.</th>
              <th class="px-6 py-4 font-label-md text-on-surface-variant">Statut</th>
              <th class="px-6 py-4 font-label-md text-on-surface-variant"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/50">
            @for (item of paginatedStatus(); track item.employee.id) {
              <tr class="hover:bg-surface-container-lowest transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center font-bold text-on-surface-variant shrink-0">{{ initials(item.employee.first_name, item.employee.last_name) }}</div>
                    <div>
                      <div class="font-label-md text-on-surface">{{ item.employee.first_name }} {{ item.employee.last_name }}</div>
                      <div class="text-body-sm text-on-surface-variant">{{ item.employee.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 font-body-sm text-on-surface">{{ item.employee.department?.name ?? '\u2014' }}</td>
                <td class="px-6 py-4 font-body-sm text-on-surface-variant">{{ roleLabel(item.employee.role) }}</td>
                <td class="px-6 py-4 font-body-sm text-on-surface-variant">
                  @if (item.declaration) {
                    @if (item.declaration.date === todayStr) {
                      Aujourd'hui, d\xE9clar\xE9
                    } @else {
                      {{ item.declaration.date | date:'dd MMM':'':'fr' }}
                    }
                  } @else {
                    <span class="text-on-surface-variant/50">\u2014</span>
                  }
                </td>
                <td class="px-6 py-4">
                  @switch (statusOf(item)) {
                    @case ('PRESENT') {
                      <span class="inline-flex items-center gap-1 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm">
                        <span class="w-2 h-2 bg-secondary rounded-full"></span> Pr\xE9sent
                      </span>
                    }
                    @case ('EN_ATTENTE') {
                      <span class="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-label-sm">
                        <span class="w-2 h-2 bg-blue-500 rounded-full"></span> En attente
                      </span>
                    }
                    @case ('EN_CONGE') {
                      <span class="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-label-sm">
                        <span class="w-2 h-2 bg-amber-500 rounded-full"></span> En cong\xE9
                      </span>
                    }
                    @case ('ABSENT') {
                      <span class="inline-flex items-center gap-1 px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-label-sm">
                        <span class="w-2 h-2 bg-outline rounded-full"></span> Absent
                      </span>
                    }
                  }
                </td>
                <td class="px-6 py-4 text-right">
                  <button class="material-symbols-outlined text-outline hover:text-primary transition-colors cursor-pointer">visibility</button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <!-- Pagination -->
      <div class="p-4 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between">
        <span class="text-body-sm text-on-surface-variant">Affichage de {{ (currentPage() - 1) * pageSize + 1 }} sur {{ filteredStatus().length }} employ\xE9s</span>
        <div class="flex gap-2">
          <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 1"
            class="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-30 cursor-pointer">
            <span class="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          @for (page of [].constructor(totalPages()); track $index) {
            <button (click)="goToPage($index + 1)"
              class="w-8 h-8 rounded flex items-center justify-center text-label-sm transition-colors cursor-pointer"
              [class.bg-primary]="$index + 1 === currentPage()" [class.text-on-primary]="$index + 1 === currentPage()"
              [class.border]="$index + 1 !== currentPage()" [class.border-outline-variant]="$index + 1 !== currentPage()"
              [class.hover:bg-surface-container]="$index + 1 !== currentPage()">
              {{ $index + 1 }}
            </button>
          }
          <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()"
            class="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-30 cursor-pointer">
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  }
</div>

<!-- Floating Action Button -->
<div class="fixed bottom-8 right-8">
  <button class="w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer" title="Nouvelle demande">
    <span class="material-symbols-outlined text-3xl">add</span>
  </button>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrAttendanceTodayComponent, { className: "HrAttendanceTodayComponent", filePath: "src/app/features/attendance/hr-attendance-today/hr-attendance-today.component.ts", lineNumber: 18 });
})();
export {
  HrAttendanceTodayComponent
};
//# sourceMappingURL=chunk-QVZZDWC4.js.map
