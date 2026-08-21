import {
  AttendanceDeclarationService
} from "./chunk-I3RMVRUE.js";
import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
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
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/attendance/team-attendance-history/team-attendance-history.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function TeamAttendanceHistoryComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", m_r1.first_name, " ", m_r1.last_name);
  }
}
function TeamAttendanceHistoryComponent_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
function TeamAttendanceHistoryComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, TeamAttendanceHistoryComponent_Conditional_36_For_2_Template, 1, 0, "div", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function TeamAttendanceHistoryComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function TeamAttendanceHistoryComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 24);
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 25);
    \u0275\u0275text(4, "Aucune d\xE9claration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 26);
    \u0275\u0275text(6, "Aucune d\xE9claration pour la p\xE9riode s\xE9lectionn\xE9e.");
    \u0275\u0275elementEnd()();
  }
}
function TeamAttendanceHistoryComponent_Conditional_39_For_15_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "verified");
    \u0275\u0275elementEnd();
  }
}
function TeamAttendanceHistoryComponent_Conditional_39_For_15_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "block");
    \u0275\u0275elementEnd();
  }
}
function TeamAttendanceHistoryComponent_Conditional_39_For_15_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "schedule");
    \u0275\u0275elementEnd();
  }
}
function TeamAttendanceHistoryComponent_Conditional_39_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 39)(2, "div", 40)(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 43);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 39)(11, "span", 44);
    \u0275\u0275element(12, "span", 45);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 39)(15, "span", 46);
    \u0275\u0275conditionalCreate(16, TeamAttendanceHistoryComponent_Conditional_39_For_15_Conditional_16_Template, 2, 0, "span", 47)(17, TeamAttendanceHistoryComponent_Conditional_39_For_15_Conditional_17_Template, 2, 0, "span", 47)(18, TeamAttendanceHistoryComponent_Conditional_39_For_15_Conditional_18_Template, 2, 0, "span", 47);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const decl_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.initials(decl_r4.user?.first_name ?? "", decl_r4.user?.last_name ?? ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", decl_r4.user?.first_name, " ", decl_r4.user?.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 31, decl_r4.date, "shortDate", "", "fr"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary-container", decl_r4.status === "PRESENT")("text-on-secondary-container", decl_r4.status === "PRESENT")("bg-error-container", decl_r4.status === "ABSENT")("text-on-error-container", decl_r4.status === "ABSENT");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-secondary", decl_r4.status === "PRESENT")("bg-error", decl_r4.status === "ABSENT");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", decl_r4.status === "PRESENT" ? "Pr\xE9sent" : "Absent", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-surface-container-high", decl_r4.validation_status === "EN_ATTENTE")("text-on-surface-variant", decl_r4.validation_status === "EN_ATTENTE")("bg-primary-container", decl_r4.validation_status === "VALIDEE")("text-on-primary-container", decl_r4.validation_status === "VALIDEE")("bg-error-container", decl_r4.validation_status === "REJETEE")("text-on-error-container", decl_r4.validation_status === "REJETEE");
    \u0275\u0275advance();
    \u0275\u0275conditional(decl_r4.validation_status === "VALIDEE" ? 16 : decl_r4.validation_status === "REJETEE" ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", decl_r4.validation_status === "EN_ATTENTE" ? "En attente" : decl_r4.validation_status === "VALIDEE" ? "Valid\xE9e" : "Rejet\xE9e", " ");
  }
}
function TeamAttendanceHistoryComponent_Conditional_39_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function TeamAttendanceHistoryComponent_Conditional_39_For_24_Template_button_click_0_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage($index_r6 + 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary-container", $index_r6 + 1 === ctx_r1.currentPage())("text-on-primary-container", $index_r6 + 1 === ctx_r1.currentPage())("text-on-surface-variant", $index_r6 + 1 !== ctx_r1.currentPage())("hover:bg-surface-container-high", $index_r6 + 1 !== ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", $index_r6 + 1, " ");
  }
}
function TeamAttendanceHistoryComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 27)(2, "table", 28)(3, "thead", 29)(4, "tr", 30)(5, "th", 31);
    \u0275\u0275text(6, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 31);
    \u0275\u0275text(8, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 31);
    \u0275\u0275text(10, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 31);
    \u0275\u0275text(12, "Validation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody", 32);
    \u0275\u0275repeaterCreate(14, TeamAttendanceHistoryComponent_Conditional_39_For_15_Template, 20, 36, "tr", 33, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 34)(17, "p", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 36)(20, "button", 37);
    \u0275\u0275listener("click", function TeamAttendanceHistoryComponent_Conditional_39_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275elementStart(21, "span", 6);
    \u0275\u0275text(22, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(23, TeamAttendanceHistoryComponent_Conditional_39_For_24_Template, 2, 9, "button", 38, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(25, "button", 37);
    \u0275\u0275listener("click", function TeamAttendanceHistoryComponent_Conditional_39_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275elementStart(26, "span", 6);
    \u0275\u0275text(27, "chevron_right");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.paginatedDeclarations());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredDeclarations().length, " d\xE9claration(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c1).constructor(ctx_r1.totalPages()));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
var TeamAttendanceHistoryComponent = class _TeamAttendanceHistoryComponent {
  attendanceService = inject(AttendanceDeclarationService);
  employeeService = inject(EmployeeService);
  teamMembers = signal(
    [],
    ...ngDevMode ? [{ debugName: "teamMembers" }] : (
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
  pageSize = 15;
  currentPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "currentPage" }] : (
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
  ngOnInit() {
    this.loadTeam();
    this.loadMonth();
  }
  loadTeam() {
    this.employeeService.getManagerTeam().subscribe({
      next: (res) => this.teamMembers.set(res.data)
    });
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
  goToPage(page) {
    this.currentPage.set(page);
  }
  initials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
  static \u0275fac = function TeamAttendanceHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamAttendanceHistoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamAttendanceHistoryComponent, selectors: [["app-team-attendance-history"]], decls: 40, vars: 4, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-4"], [1, "font-heading", "text-headline-lg", "text-on-surface"], [1, "font-body-md", "text-body-md", "text-on-surface-variant", "mt-1"], [1, "flex", "gap-3"], [1, "px-4", "py-2.5", "border", "border-outline-variant", "text-on-surface", "rounded-lg", "font-label-md", "text-label-md", "hover:bg-surface-container-low", "transition-colors", "inline-flex", "items-center", "gap-2", "cursor-pointer"], [1, "material-symbols-outlined", "text-[18px]"], [1, "px-4", "py-2.5", "bg-secondary", "text-on-secondary", "rounded-lg", "font-label-md", "text-label-md", "hover:opacity-90", "transition-opacity", "inline-flex", "items-center", "gap-2", "cursor-pointer"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "flex", "items-center", "gap-2", "bg-surface", "border", "border-outline-variant", "rounded-lg", "px-3", "py-2"], [1, "material-symbols-outlined", "text-on-surface-variant", "text-[18px]"], [1, "bg-transparent", "text-sm", "font-medium", "text-on-surface", "outline-none", "cursor-pointer", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "flex", "items-center", "gap-1", "bg-surface", "border", "border-outline-variant", "rounded-lg", "px-2", "py-1.5"], ["title", "Mois pr\xE9c\xE9dent", 1, "p-1.5", "rounded-md", "hover:bg-surface-container-high", "text-on-surface-variant", "transition-colors", "cursor-pointer", 3, "click"], [1, "font-label-md", "text-label-md", "text-on-surface", "min-w-[120px]", "text-center"], ["title", "Mois suivant", 1, "p-1.5", "rounded-md", "hover:bg-surface-container-high", "text-on-surface-variant", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-4", "py-2", "text-primary", "font-label-md", "text-label-md", "hover:underline", "transition-all", "cursor-pointer", 3, "click"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "shadow-sm", "p-6", "animate-pulse", "space-y-4"], [1, "bg-error-light", "border", "border-error/20", "rounded-xl", "p-6", "text-center"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-4", "text-center", "bg-surface", "border", "border-outline-variant", "rounded-xl"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "h-10", "bg-surface-container-high", "rounded"], [1, "text-sm", "text-error-dark"], [1, "material-symbols-outlined", "text-5xl", "text-on-surface-variant", "mb-4"], [1, "font-heading", "text-lg", "font-semibold", "text-on-surface", "mb-1"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant"], [1, "overflow-x-auto"], [1, "w-full", "border-collapse"], [1, "bg-surface-container-lowest"], [1, "border-b", "border-outline-variant"], [1, "px-6", "py-4", "text-left", "font-label-md", "text-[11px]", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "divide-y", "divide-outline-variant"], [1, "hover:bg-surface-container-lowest", "transition-colors"], [1, "px-6", "py-4", "bg-surface-container-lowest", "border-t", "border-outline-variant", "flex", "items-center", "justify-between"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant"], [1, "flex", "items-center", "gap-1.5"], [1, "p-1.5", "rounded-lg", "text-on-surface-variant", "hover:bg-surface-container-high", "transition-colors", "disabled:opacity-40", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], [1, "w-8", "h-8", "text-xs", "font-semibold", "rounded-lg", "transition-colors", "cursor-pointer", 3, "bg-primary-container", "text-on-primary-container", "text-on-surface-variant", "hover:bg-surface-container-high"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-full", "bg-primary-container/30", "text-primary", "flex", "items-center", "justify-center", "text-xs", "font-bold", "shrink-0"], [1, "font-body-md", "text-body-md", "text-on-surface", "font-medium"], [1, "px-6", "py-4", "font-body-sm", "text-body-sm", "text-on-surface-variant"], [1, "inline-flex", "items-center", "gap-1.5", "font-label-sm", "text-label-sm", "px-3", "py-1", "rounded-full"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "inline-flex", "items-center", "gap-1.5", "font-label-sm", "text-label-sm", "px-3", "py-1", "rounded-lg"], [1, "material-symbols-outlined", "text-[14px]"], [1, "w-8", "h-8", "text-xs", "font-semibold", "rounded-lg", "transition-colors", "cursor-pointer", 3, "click"]], template: function TeamAttendanceHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Historique des pr\xE9sences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Suivez l'historique des d\xE9clarations de votre \xE9quipe mois par mois.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5)(9, "span", 6);
      \u0275\u0275text(10, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Exporter PDF ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7)(13, "span", 6);
      \u0275\u0275text(14, "description");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " G\xE9n\xE9rer Rapport ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "span", 10);
      \u0275\u0275text(19, "person_search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 11);
      \u0275\u0275listener("ngModelChange", function TeamAttendanceHistoryComponent_Template_select_ngModelChange_20_listener($event) {
        return ctx.filterByEmployee($event);
      });
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "Tous les employ\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(23, TeamAttendanceHistoryComponent_For_24_Template, 2, 3, "option", 12, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13)(26, "button", 14);
      \u0275\u0275listener("click", function TeamAttendanceHistoryComponent_Template_button_click_26_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275elementStart(27, "span", 6);
      \u0275\u0275text(28, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "span", 15);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 16);
      \u0275\u0275listener("click", function TeamAttendanceHistoryComponent_Template_button_click_31_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275elementStart(32, "span", 6);
      \u0275\u0275text(33, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "button", 17);
      \u0275\u0275listener("click", function TeamAttendanceHistoryComponent_Template_button_click_34_listener() {
        return ctx.filterByEmployee(null);
      });
      \u0275\u0275text(35, " R\xE9initialiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(36, TeamAttendanceHistoryComponent_Conditional_36_Template, 3, 1, "div", 18)(37, TeamAttendanceHistoryComponent_Conditional_37_Template, 3, 1, "div", 19)(38, TeamAttendanceHistoryComponent_Conditional_38_Template, 7, 0, "div", 20)(39, TeamAttendanceHistoryComponent_Conditional_39_Template, 28, 4, "div", 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275property("ngModel", ctx.historyEmployeeFilter());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.teamMembers());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.currentMonth());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 36 : ctx.error() ? 37 : ctx.filteredDeclarations().length === 0 ? 38 : 39);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamAttendanceHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-team-attendance-history", standalone: true, imports: [DatePipe, FormsModule], template: `<div class="flex flex-col gap-6">
  <!-- Page Header -->
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <h2 class="font-heading text-headline-lg text-on-surface">Historique des pr\xE9sences</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">Suivez l'historique des d\xE9clarations de votre \xE9quipe mois par mois.</p>
    </div>
    <div class="flex gap-3">
      <button class="px-4 py-2.5 border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors inline-flex items-center gap-2 cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">download</span>
        Exporter PDF
      </button>
      <button class="px-4 py-2.5 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity inline-flex items-center gap-2 cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">description</span>
        G\xE9n\xE9rer Rapport
      </button>
    </div>
  </div>

  <!-- Filters Bar -->
  <div class="flex flex-wrap items-center gap-3">
    <div class="flex items-center gap-2 bg-surface border border-outline-variant rounded-lg px-3 py-2">
      <span class="material-symbols-outlined text-on-surface-variant text-[18px]">person_search</span>
      <select [ngModel]="historyEmployeeFilter()" (ngModelChange)="filterByEmployee($any($event))"
        class="bg-transparent text-sm font-medium text-on-surface outline-none cursor-pointer">
        <option [ngValue]="null">Tous les employ\xE9s</option>
        @for (m of teamMembers(); track m.id) {
          <option [ngValue]="m.id">{{ m.first_name }} {{ m.last_name }}</option>
        }
      </select>
    </div>
    <div class="flex items-center gap-1 bg-surface border border-outline-variant rounded-lg px-2 py-1.5">
      <button (click)="previousMonth()" class="p-1.5 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors cursor-pointer" title="Mois pr\xE9c\xE9dent">
        <span class="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
      <span class="font-label-md text-label-md text-on-surface min-w-[120px] text-center">{{ currentMonth() }}</span>
      <button (click)="nextMonth()" class="p-1.5 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors cursor-pointer" title="Mois suivant">
        <span class="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
    </div>
    <button (click)="filterByEmployee(null)"
      class="px-4 py-2 text-primary font-label-md text-label-md hover:underline transition-all cursor-pointer">
      R\xE9initialiser
    </button>
  </div>

  @if (loading()) {
    <div class="bg-surface border border-outline-variant rounded-xl shadow-sm p-6 animate-pulse space-y-4">
      @for (_ of [1,2,3,4]; track _) { <div class="h-10 bg-surface-container-high rounded"></div> }
    </div>
  } @else if (error()) {
    <div class="bg-error-light border border-error/20 rounded-xl p-6 text-center">
      <p class="text-sm text-error-dark">{{ error() }}</p>
    </div>
  } @else if (filteredDeclarations().length === 0) {
    <div class="flex flex-col items-center justify-center py-16 px-4 text-center bg-surface border border-outline-variant rounded-xl">
      <span class="material-symbols-outlined text-5xl text-on-surface-variant mb-4">calendar_today</span>
      <h3 class="font-heading text-lg font-semibold text-on-surface mb-1">Aucune d\xE9claration</h3>
      <p class="font-body-sm text-body-sm text-on-surface-variant">Aucune d\xE9claration pour la p\xE9riode s\xE9lectionn\xE9e.</p>
    </div>
  } @else {
    <div class="bg-surface border border-outline-variant rounded-xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead class="bg-surface-container-lowest">
            <tr class="border-b border-outline-variant">
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Employ\xE9</th>
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Date</th>
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Statut</th>
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Validation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant">
            @for (decl of paginatedDeclarations(); track decl.id) {
              <tr class="hover:bg-surface-container-lowest transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-full bg-primary-container/30 text-primary flex items-center justify-center text-xs font-bold shrink-0">{{ initials(decl.user?.first_name ?? '', decl.user?.last_name ?? '') }}</div>
                    <span class="font-body-md text-body-md text-on-surface font-medium">{{ decl.user?.first_name }} {{ decl.user?.last_name }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{{ decl.date | date:'shortDate':'':'fr' }}</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center gap-1.5 font-label-sm text-label-sm px-3 py-1 rounded-full"
                    [class.bg-secondary-container]="decl.status === 'PRESENT'" [class.text-on-secondary-container]="decl.status === 'PRESENT'"
                    [class.bg-error-container]="decl.status === 'ABSENT'" [class.text-on-error-container]="decl.status === 'ABSENT'">
                    <span class="w-1.5 h-1.5 rounded-full"
                      [class.bg-secondary]="decl.status === 'PRESENT'" [class.bg-error]="decl.status === 'ABSENT'"></span>
                    {{ decl.status === 'PRESENT' ? 'Pr\xE9sent' : 'Absent' }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center gap-1.5 font-label-sm text-label-sm px-3 py-1 rounded-lg"
                    [class.bg-surface-container-high]="decl.validation_status === 'EN_ATTENTE'" [class.text-on-surface-variant]="decl.validation_status === 'EN_ATTENTE'"
                    [class.bg-primary-container]="decl.validation_status === 'VALIDEE'" [class.text-on-primary-container]="decl.validation_status === 'VALIDEE'"
                    [class.bg-error-container]="decl.validation_status === 'REJETEE'" [class.text-on-error-container]="decl.validation_status === 'REJETEE'">
                    @if (decl.validation_status === 'VALIDEE') {
                      <span class="material-symbols-outlined text-[14px]">verified</span>
                    } @else if (decl.validation_status === 'REJETEE') {
                      <span class="material-symbols-outlined text-[14px]">block</span>
                    } @else {
                      <span class="material-symbols-outlined text-[14px]">schedule</span>
                    }
                    {{ decl.validation_status === 'EN_ATTENTE' ? 'En attente' : decl.validation_status === 'VALIDEE' ? 'Valid\xE9e' : 'Rejet\xE9e' }}
                  </span>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Pagination Footer -->
      <div class="px-6 py-4 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between">
        <p class="font-label-sm text-label-sm text-on-surface-variant">{{ filteredDeclarations().length }} d\xE9claration(s)</p>
        <div class="flex items-center gap-1.5">
          <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 1"
            class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
            <span class="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          @for (page of [].constructor(totalPages()); track $index) {
            <button (click)="goToPage($index + 1)"
              class="w-8 h-8 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              [class.bg-primary-container]="$index + 1 === currentPage()" [class.text-on-primary-container]="$index + 1 === currentPage()"
              [class.text-on-surface-variant]="$index + 1 !== currentPage()" [class.hover:bg-surface-container-high]="$index + 1 !== currentPage()">
              {{ $index + 1 }}
            </button>
          }
          <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()"
            class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
            <span class="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamAttendanceHistoryComponent, { className: "TeamAttendanceHistoryComponent", filePath: "src/app/features/attendance/team-attendance-history/team-attendance-history.component.ts", lineNumber: 15 });
})();
export {
  TeamAttendanceHistoryComponent
};
//# sourceMappingURL=chunk-VFJMWNBB.js.map
