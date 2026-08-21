import {
  ExportService
} from "./chunk-ITIHXOB5.js";
import "./chunk-7YWLATDR.js";
import {
  AttendanceDeclarationService
} from "./chunk-I3RMVRUE.js";
import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import "./chunk-U7CQY2TY.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-75TSC3TY.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/attendance/hr-attendance-history/hr-attendance-history.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HrAttendanceHistoryComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r1 = ctx.$implicit;
    \u0275\u0275property("value", dept_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r1.name);
  }
}
function HrAttendanceHistoryComponent_For_80_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46)(1, "span", 39);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Valid\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function HrAttendanceHistoryComponent_For_80_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47)(1, "span", 39);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Rejet\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function HrAttendanceHistoryComponent_For_80_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48)(1, "span", 39);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " En attente ");
    \u0275\u0275elementEnd();
  }
}
function HrAttendanceHistoryComponent_For_80_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50)(1, "span", 54);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.anomalyCount(d_r2), " ");
  }
}
function HrAttendanceHistoryComponent_For_80_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51)(1, "span", 54);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " 0 ");
    \u0275\u0275elementEnd();
  }
}
function HrAttendanceHistoryComponent_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 41)(5, "div", 42)(6, "div", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "p", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 41);
    \u0275\u0275conditionalCreate(14, HrAttendanceHistoryComponent_For_80_Case_14_Template, 4, 0, "span", 46)(15, HrAttendanceHistoryComponent_For_80_Case_15_Template, 4, 0, "span", 47)(16, HrAttendanceHistoryComponent_For_80_Case_16_Template, 4, 0, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 49);
    \u0275\u0275conditionalCreate(18, HrAttendanceHistoryComponent_For_80_Conditional_18_Template, 4, 1, "span", 50)(19, HrAttendanceHistoryComponent_For_80_Conditional_19_Template, 4, 0, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 52)(21, "button", 53)(22, "span", 8);
    \u0275\u0275text(23, "visibility");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const d_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(3, 6, d_r2.date, "dd MMM yyyy", "", "fr"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.initialsOf(d_r2.user_id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.employeeName(d_r2.user_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.teamOf(d_r2.user_id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_14_0 = d_r2.validation_status) === "VALIDEE" ? 14 : tmp_14_0 === "REJETEE" ? 15 : 16);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.anomalyCount(d_r2) > 0 ? 18 : 19);
  }
}
function HrAttendanceHistoryComponent_For_90_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function HrAttendanceHistoryComponent_For_90_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function HrAttendanceHistoryComponent_For_90_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const page_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary", page_r5 === ctx_r2.currentPage())("text-white", page_r5 === ctx_r2.currentPage())("border", page_r5 !== ctx_r2.currentPage())("border-outline-variant", page_r5 !== ctx_r2.currentPage())("hover:bg-surface-container", page_r5 !== ctx_r2.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r5, " ");
  }
}
function HrAttendanceHistoryComponent_For_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrAttendanceHistoryComponent_For_90_Conditional_0_Template, 2, 0, "span", 55)(1, HrAttendanceHistoryComponent_For_90_Conditional_1_Template, 2, 11, "button", 56);
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    \u0275\u0275conditional(page_r5 === "..." ? 0 : 1);
  }
}
var HrAttendanceHistoryComponent = class _HrAttendanceHistoryComponent {
  attendanceService = inject(AttendanceDeclarationService);
  employeeService = inject(EmployeeService);
  exportService = inject(ExportService);
  allEmployees = signal(
    [],
    ...ngDevMode ? [{ debugName: "allEmployees" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  historyEmployeeFilter = signal(
    null,
    ...ngDevMode ? [{ debugName: "historyEmployeeFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  historyDeptFilter = signal(
    null,
    ...ngDevMode ? [{ debugName: "historyDeptFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  historyStatusFilter = signal(
    "TOUS",
    ...ngDevMode ? [{ debugName: "historyStatusFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageSize = 15;
  currentPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "currentPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  departments = computed(
    () => {
      const map = /* @__PURE__ */ new Map();
      this.allEmployees().forEach((e) => {
        if (e.department?.id)
          map.set(e.department.id, e.department.name);
      });
      return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
    },
    ...ngDevMode ? [{ debugName: "departments" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredDeclarations = computed(
    () => {
      const [year, month] = this.currentMonth().split("-").map(Number);
      let list = this.declarations().filter((d) => {
        const dDate = new Date(d.date);
        return dDate.getFullYear() === year && dDate.getMonth() === month - 1;
      });
      const empFilter = this.historyEmployeeFilter();
      if (empFilter)
        list = list.filter((d) => d.user_id === empFilter);
      const deptFilter = this.historyDeptFilter();
      if (deptFilter) {
        const deptIds = new Set(this.allEmployees().filter((e) => e.department?.id === deptFilter).map((e) => e.id));
        list = list.filter((d) => deptIds.has(d.user_id));
      }
      const statusFilter = this.historyStatusFilter();
      if (statusFilter !== "TOUS")
        list = list.filter((d) => d.validation_status === statusFilter);
      return list;
    },
    ...ngDevMode ? [{ debugName: "filteredDeclarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paginatedDeclarations = computed(
    () => {
      const start = (this.currentPage() - 1) * this.pageSize;
      return this.filteredDeclarations().slice(start, start + this.pageSize);
    },
    ...ngDevMode ? [{ debugName: "paginatedDeclarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalPages = computed(
    () => Math.max(1, Math.ceil(this.filteredDeclarations().length / this.pageSize)),
    ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  visiblePages = computed(
    () => {
      const total = this.totalPages();
      const current = this.currentPage();
      const pages = /* @__PURE__ */ new Set([1, total, current - 1, current, current + 1]);
      const sorted = Array.from(pages).filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
      const result = [];
      let prev = 0;
      for (const p of sorted) {
        if (p - prev > 1)
          result.push("...");
        result.push(p);
        prev = p;
      }
      return result;
    },
    ...ngDevMode ? [{ debugName: "visiblePages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadEmployees();
    this.loadMonth();
  }
  loadEmployees() {
    this.employeeService.getEmployees({ per_page: 1e3 }).subscribe({
      next: (res) => this.allEmployees.set(res.data)
    });
  }
  changeMonth(value) {
    this.currentMonth.set(value);
    this.currentPage.set(1);
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
    this.currentPage.set(1);
    this.loadMonth();
  }
  nextMonth() {
    const [year, month] = this.currentMonth().split("-").map(Number);
    const d = new Date(year, month, 1);
    this.currentMonth.set(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
    this.currentPage.set(1);
    this.loadMonth();
  }
  filterByEmployee(userId) {
    this.historyEmployeeFilter.set(userId);
    this.currentPage.set(1);
  }
  setDeptFilter(deptId) {
    this.historyDeptFilter.set(deptId);
    this.currentPage.set(1);
  }
  setStatusFilter(status) {
    this.historyStatusFilter.set(status);
    this.currentPage.set(1);
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages())
      this.currentPage.set(page);
  }
  employeeName(userId) {
    const emp = this.allEmployees().find((e) => e.id === userId);
    return emp ? `${emp.first_name} ${emp.last_name}` : `Employ\xE9 #${userId}`;
  }
  initialsOf(userId) {
    const emp = this.allEmployees().find((e) => e.id === userId);
    if (!emp)
      return "?";
    return `${emp.first_name.charAt(0)}${emp.last_name.charAt(0)}`.toUpperCase();
  }
  teamOf(userId) {
    const emp = this.allEmployees().find((e) => e.id === userId);
    return emp?.department?.name ?? "\u2014";
  }
  anomalyCount(d) {
    return d.status === "ABSENT" || d.validation_status === "REJETEE" ? 1 : 0;
  }
  statusLabel(status) {
    switch (status) {
      case "VALIDEE":
        return "Valid\xE9";
      case "REJETEE":
        return "Rejet\xE9";
      default:
        return "En attente";
    }
  }
  monthLabel() {
    return (/* @__PURE__ */ new Date(this.currentMonth() + "-01")).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  }
  exportRows() {
    return this.filteredDeclarations().map((d) => [
      new Date(d.date).toLocaleDateString("fr-FR"),
      this.employeeName(d.user_id),
      this.teamOf(d.user_id),
      this.statusLabel(d.validation_status),
      this.anomalyCount(d).toString()
    ]);
  }
  exportPdf() {
    this.exportService.pdf({
      title: "Suivi des Pr\xE9sences",
      subtitle: "Espace RH",
      period: this.monthLabel(),
      columns: ["Date", "Employ\xE9", "D\xE9partement", "Statut", "Anomalies"],
      rows: this.exportRows(),
      filename: `presences_historique_${this.currentMonth()}.pdf`
    });
  }
  exportExcel() {
    this.exportService.xlsx({
      title: "Suivi des Pr\xE9sences",
      period: this.monthLabel(),
      columns: ["Date", "Employ\xE9", "D\xE9partement", "Statut", "Anomalies"],
      rows: this.exportRows(),
      filename: `presences_historique_${this.currentMonth()}.xlsx`,
      sheetName: "Pr\xE9sences"
    });
  }
  static \u0275fac = function HrAttendanceHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrAttendanceHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrAttendanceHistoryComponent, selectors: [["app-hr-attendance-history"]], decls: 94, vars: 11, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "font-label-md", "text-primary", "mb-1"], [1, "font-heading", "text-headline-lg", "text-on-surface", "mb-1"], [1, "font-body-md", "text-on-surface-variant"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "w-9", "h-9", "rounded-lg", "border", "border-outline-variant", "flex", "items-center", "justify-center", "hover:bg-surface-container", "transition-colors", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined"], [1, "border", "border-outline-variant", "px-4", "py-2", "rounded-xl", "font-label-md", "flex", "items-center", "gap-2", "hover:bg-surface-container", "transition-colors", "cursor-pointer", 3, "click"], [1, "bg-surface", "border", "border-outline-variant", "rounded-2xl", "p-6", "shadow-sm"], [1, "font-label-md", "text-on-surface", "mb-4", "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-primary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "block", "font-label-sm", "text-on-surface-variant", "mb-2"], [1, "relative"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "material-symbols-outlined", "text-on-surface-variant/60", "text-lg"], ["type", "month", 1, "w-full", "bg-surface-container-low", "rounded-lg", "border", "border-outline-variant", "py-2.5", "pl-10", "pr-3", "font-body-sm", "text-on-surface", "focus:border-primary", "focus:ring-1", "focus:ring-primary", "outline-none", 3, "change", "value"], [1, "w-full", "bg-surface-container-low", "rounded-lg", "border", "border-outline-variant", "py-2.5", "px-3", "font-body-sm", "text-on-surface", "focus:border-primary", "focus:ring-1", "focus:ring-primary", "outline-none", "cursor-pointer", 3, "change"], [3, "value"], ["value", "TOUS"], ["value", "VALIDEE"], ["value", "REJETEE"], ["value", "EN_ATTENTE"], [1, "flex", "items-end"], [1, "w-full", "bg-primary", "text-on-primary", "rounded-lg", "py-2.5", "px-6", "font-label-md", "flex", "items-center", "justify-center", "gap-2", "hover:bg-primary-dark", "transition-colors", "cursor-pointer"], [1, "bg-surface", "border", "border-outline-variant", "rounded-2xl", "overflow-hidden", "shadow-sm"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-surface-container", "border-b", "border-outline-variant"], [1, "px-6", "py-4", "font-label-sm", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "font-label-sm", "text-on-surface-variant", "uppercase", "tracking-wider", "text-center"], [1, "px-6", "py-4", "font-label-sm", "text-on-surface-variant", "uppercase", "tracking-wider", "text-right"], [1, "divide-y", "divide-outline-variant/50"], [1, "hover:bg-surface-container-lowest", "transition-colors", "group"], [1, "p-4", "bg-surface-container-lowest", "border-t", "border-outline-variant", "flex", "items-center", "justify-between", "gap-4", "flex-wrap"], [1, "text-body-sm", "text-on-surface-variant"], [1, "flex", "gap-2", "items-center"], [1, "w-8", "h-8", "rounded", "border", "border-outline-variant", "flex", "items-center", "justify-center", "hover:bg-surface-container", "transition-colors", "disabled:opacity-30", "cursor-pointer", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-sm"], [1, "px-6", "py-4", "font-body-sm", "text-on-surface"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-surface-container-highest", "border", "border-outline-variant", "flex", "items-center", "justify-center", "font-bold", "text-on-surface-variant", "text-[11px]", "overflow-hidden", "shrink-0"], [1, "font-label-md", "text-on-surface"], [1, "text-xs", "text-on-surface-variant"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1", "bg-purple-100", "text-purple-700", "rounded-full", "text-label-sm"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1", "bg-orange-100", "text-orange-700", "rounded-full", "text-label-sm"], [1, "inline-flex", "items-center", "gap-1", "px-3", "py-1", "bg-gray-100", "text-gray-700", "rounded-full", "text-label-sm"], [1, "px-6", "py-4", "text-center"], [1, "font-label-md", "text-error", "inline-flex", "items-center", "justify-center", "gap-1"], [1, "font-label-md", "text-on-surface-variant", "inline-flex", "items-center", "justify-center", "gap-1"], [1, "px-6", "py-4", "text-right"], [1, "p-1.5", "rounded-lg", "text-on-surface-variant", "hover:text-primary", "hover:bg-surface-container", "transition-colors", "cursor-pointer"], [1, "material-symbols-outlined", "text-[16px]"], [1, "w-8", "text-center", "font-label-sm", "text-on-surface-variant"], [1, "min-w-8", "h-8", "px-2", "rounded", "flex", "items-center", "justify-center", "text-label-sm", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-white", "border", "border-outline-variant", "hover:bg-surface-container"], [1, "min-w-8", "h-8", "px-2", "rounded", "flex", "items-center", "justify-center", "text-label-sm", "transition-colors", "cursor-pointer", 3, "click"]], template: function HrAttendanceHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "Espace RH / Pr\xE9sences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 3);
      \u0275\u0275text(6, "Suivi des Pr\xE9sences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "G\xE9rez et validez l'historique des pr\xE9sences de vos \xE9quipes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function HrAttendanceHistoryComponent_Template_button_click_11_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 7);
      \u0275\u0275listener("click", function HrAttendanceHistoryComponent_Template_button_click_14_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275text(16, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function HrAttendanceHistoryComponent_Template_button_click_17_listener() {
        return ctx.exportPdf();
      });
      \u0275\u0275elementStart(18, "span", 8);
      \u0275\u0275text(19, "picture_as_pdf");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " PDF ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 9);
      \u0275\u0275listener("click", function HrAttendanceHistoryComponent_Template_button_click_21_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275elementStart(22, "span", 8);
      \u0275\u0275text(23, "table_chart");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Excel ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 10)(26, "h3", 11)(27, "span", 12);
      \u0275\u0275text(28, "tune");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " Filtres ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 13)(31, "div")(32, "label", 14);
      \u0275\u0275text(33, "P\xE9riode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 15)(35, "span", 16);
      \u0275\u0275text(36, "calendar_month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "input", 17);
      \u0275\u0275listener("change", function HrAttendanceHistoryComponent_Template_input_change_37_listener($event) {
        return ctx.changeMonth($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div")(39, "label", 14);
      \u0275\u0275text(40, "D\xE9partement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "select", 18);
      \u0275\u0275listener("change", function HrAttendanceHistoryComponent_Template_select_change_41_listener($event) {
        return ctx.setDeptFilter($event.target.value ? +$event.target.value : null);
      });
      \u0275\u0275elementStart(42, "option", 19);
      \u0275\u0275text(43, "Tous les d\xE9partements");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(44, HrAttendanceHistoryComponent_For_45_Template, 2, 2, "option", 19, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "label", 14);
      \u0275\u0275text(48, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 18);
      \u0275\u0275listener("change", function HrAttendanceHistoryComponent_Template_select_change_49_listener($event) {
        return ctx.setStatusFilter($event.target.value);
      });
      \u0275\u0275elementStart(50, "option", 20);
      \u0275\u0275text(51, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 21);
      \u0275\u0275text(53, "Valid\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 22);
      \u0275\u0275text(55, "Rejet\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 23);
      \u0275\u0275text(57, "En attente");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 24)(59, "button", 25)(60, "span", 8);
      \u0275\u0275text(61, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275text(62, " Filtrer ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 26)(64, "div", 27)(65, "table", 28)(66, "thead")(67, "tr", 29)(68, "th", 30);
      \u0275\u0275text(69, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 30);
      \u0275\u0275text(71, "Manager / \xC9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 30);
      \u0275\u0275text(73, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 31);
      \u0275\u0275text(75, "Anomalies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 32);
      \u0275\u0275text(77, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "tbody", 33);
      \u0275\u0275repeaterCreate(79, HrAttendanceHistoryComponent_For_80_Template, 24, 11, "tr", 34, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "div", 35)(82, "span", 36);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 37)(86, "button", 38);
      \u0275\u0275listener("click", function HrAttendanceHistoryComponent_Template_button_click_86_listener() {
        return ctx.goToPage(ctx.currentPage() - 1);
      });
      \u0275\u0275elementStart(87, "span", 39);
      \u0275\u0275text(88, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(89, HrAttendanceHistoryComponent_For_90_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(91, "button", 38);
      \u0275\u0275listener("click", function HrAttendanceHistoryComponent_Template_button_click_91_listener() {
        return ctx.goToPage(ctx.currentPage() + 1);
      });
      \u0275\u0275elementStart(92, "span", 39);
      \u0275\u0275text(93, "chevron_right");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(37);
      \u0275\u0275property("value", ctx.currentMonth());
      \u0275\u0275advance(5);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.departments());
      \u0275\u0275advance(35);
      \u0275\u0275repeater(ctx.paginatedDeclarations());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("Affichage de ", ctx.filteredDeclarations().length, " d\xE9claration(s) pour ", \u0275\u0275pipeBind4(84, 6, ctx.currentMonth() + "-01", "MMMM yyyy", "", "fr"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.visiblePages());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrAttendanceHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-hr-attendance-history", standalone: true, imports: [DatePipe, FormsModule], template: `<div class="flex flex-col gap-6">
  <!-- Header Section -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <p class="font-label-md text-primary mb-1">Espace RH / Pr\xE9sences</p>
      <h1 class="font-heading text-headline-lg text-on-surface mb-1">Suivi des Pr\xE9sences</h1>
      <p class="font-body-md text-on-surface-variant">G\xE9rez et validez l'historique des pr\xE9sences de vos \xE9quipes.</p>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <button (click)="previousMonth()" class="w-9 h-9 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button (click)="nextMonth()" class="w-9 h-9 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors cursor-pointer">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
      <button (click)="exportPdf()" class="border border-outline-variant px-4 py-2 rounded-xl font-label-md flex items-center gap-2 hover:bg-surface-container transition-colors cursor-pointer">
        <span class="material-symbols-outlined">picture_as_pdf</span>
        PDF
      </button>
      <button (click)="exportExcel()" class="border border-outline-variant px-4 py-2 rounded-xl font-label-md flex items-center gap-2 hover:bg-surface-container transition-colors cursor-pointer">
        <span class="material-symbols-outlined">table_chart</span>
        Excel
      </button>
    </div>
  </div>

  <!-- Filters -->
  <div class="bg-surface border border-outline-variant rounded-2xl p-6 shadow-sm">
    <h3 class="font-label-md text-on-surface mb-4 flex items-center gap-2">
      <span class="material-symbols-outlined text-primary">tune</span>
      Filtres
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <label class="block font-label-sm text-on-surface-variant mb-2">P\xE9riode</label>
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/60 text-lg">calendar_month</span>
          <input type="month" [value]="currentMonth()"
            class="w-full bg-surface-container-low rounded-lg border border-outline-variant py-2.5 pl-10 pr-3 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            (change)="changeMonth($any($event.target).value)" />
        </div>
      </div>
      <div>
        <label class="block font-label-sm text-on-surface-variant mb-2">D\xE9partement</label>
        <select (change)="setDeptFilter(($any($event.target).value ? +$any($event.target).value : null))"
          class="w-full bg-surface-container-low rounded-lg border border-outline-variant py-2.5 px-3 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
          <option [value]="null">Tous les d\xE9partements</option>
          @for (dept of departments(); track dept.id) {
            <option [value]="dept.id">{{ dept.name }}</option>
          }
        </select>
      </div>
      <div>
        <label class="block font-label-sm text-on-surface-variant mb-2">Statut</label>
        <select (change)="setStatusFilter(($any($event.target).value))"
          class="w-full bg-surface-container-low rounded-lg border border-outline-variant py-2.5 px-3 font-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
          <option value="TOUS">Tous les statuts</option>
          <option value="VALIDEE">Valid\xE9</option>
          <option value="REJETEE">Rejet\xE9</option>
          <option value="EN_ATTENTE">En attente</option>
        </select>
      </div>
      <div class="flex items-end">
        <button class="w-full bg-primary text-on-primary rounded-lg py-2.5 px-6 font-label-md flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors cursor-pointer">
          <span class="material-symbols-outlined">search</span>
          Filtrer
        </button>
      </div>
    </div>
  </div>

  <!-- Table -->
  <div class="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface-container border-b border-outline-variant">
            <th class="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Date</th>
            <th class="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Manager / \xC9quipe</th>
            <th class="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider">Statut</th>
            <th class="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider text-center">Anomalies</th>
            <th class="px-6 py-4 font-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-outline-variant/50">
          @for (d of paginatedDeclarations(); track d.id) {
            <tr class="hover:bg-surface-container-lowest transition-colors group">
              <td class="px-6 py-4 font-body-sm text-on-surface">{{ d.date | date:'dd MMM yyyy':'':'fr' }}</td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center font-bold text-on-surface-variant text-[11px] overflow-hidden shrink-0">{{ initialsOf(d.user_id) }}</div>
                  <div>
                    <p class="font-label-md text-on-surface">{{ employeeName(d.user_id) }}</p>
                    <p class="text-xs text-on-surface-variant">{{ teamOf(d.user_id) }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                @switch (d.validation_status) {
                  @case ('VALIDEE') {
                    <span class="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-label-sm">
                      <span class="material-symbols-outlined text-sm">check_circle</span> Valid\xE9
                    </span>
                  }
                  @case ('REJETEE') {
                    <span class="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-label-sm">
                      <span class="material-symbols-outlined text-sm">cancel</span> Rejet\xE9
                    </span>
                  }
                  @default {
                    <span class="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-label-sm">
                      <span class="material-symbols-outlined text-sm">hourglass_empty</span> En attente
                    </span>
                  }
                }
              </td>
              <td class="px-6 py-4 text-center">
                @if (anomalyCount(d) > 0) {
                  <span class="font-label-md text-error inline-flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[16px]">warning</span>
                    {{ anomalyCount(d) }}
                  </span>
                } @else {
                  <span class="font-label-md text-on-surface-variant inline-flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[16px]">check_circle</span>
                    0
                  </span>
                }
              </td>
              <td class="px-6 py-4 text-right">
                <button class="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer">
                  <span class="material-symbols-outlined">visibility</span>
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <!-- Pagination -->
    <div class="p-4 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between gap-4 flex-wrap">
      <span class="text-body-sm text-on-surface-variant">Affichage de {{ filteredDeclarations().length }} d\xE9claration(s) pour {{ currentMonth() + '-01' | date:'MMMM yyyy':'':'fr' }}</span>
      <div class="flex gap-2 items-center">
        <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 1"
          class="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-30 cursor-pointer">
          <span class="material-symbols-outlined text-sm">chevron_left</span>
        </button>
        @for (page of visiblePages(); track $index) {
          @if (page === '...') {
            <span class="w-8 text-center font-label-sm text-on-surface-variant">\u2026</span>
          } @else {
            <button (click)="goToPage(page)"
              class="min-w-8 h-8 px-2 rounded flex items-center justify-center text-label-sm transition-colors cursor-pointer"
              [class.bg-primary]="page === currentPage()" [class.text-white]="page === currentPage()"
              [class.border]="page !== currentPage()" [class.border-outline-variant]="page !== currentPage()"
              [class.hover:bg-surface-container]="page !== currentPage()">
              {{ page }}
            </button>
          }
        }
        <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()"
          class="w-8 h-8 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors disabled:opacity-30 cursor-pointer">
          <span class="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrAttendanceHistoryComponent, { className: "HrAttendanceHistoryComponent", filePath: "src/app/features/attendance/hr-attendance-history/hr-attendance-history.component.ts", lineNumber: 16 });
})();
export {
  HrAttendanceHistoryComponent
};
//# sourceMappingURL=chunk-6MMNZ4ZT.js.map
