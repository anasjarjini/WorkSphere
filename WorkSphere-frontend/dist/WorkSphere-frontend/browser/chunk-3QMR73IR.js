import {
  AttendanceDeclarationService
} from "./chunk-2PL4LXLU.js";
import {
  EmployeeService
} from "./chunk-EAQSU6LC.js";
import {
  DecimalPipe
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZST2RCVM.js";

// src/app/features/attendance/team-attendance-monthly/team-attendance-monthly.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.employee.id;
function TeamAttendanceMonthlyComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 9);
  }
}
function TeamAttendanceMonthlyComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, TeamAttendanceMonthlyComponent_Conditional_16_For_2_Template, 1, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function TeamAttendanceMonthlyComponent_Conditional_17_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 37)(1, "td", 54)(2, "div", 4)(3, "div", 55);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div")(6, "p", 56);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 57);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(10, "td", 58)(11, "span", 59)(12, "span", 60);
    \u0275\u0275text(13, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "td", 58)(16, "span", 61)(17, "span", 60);
    \u0275\u0275text(18, "cancel");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(19);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "td", 62);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.initials(row_r3.employee.first_name, row_r3.employee.last_name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", row_r3.employee.first_name, " ", row_r3.employee.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.employee.job_title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r3.presentDays, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", row_r3.absentDays, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(22, 7, row_r3.totalHours, "1.1-1", "fr"), "h");
  }
}
function TeamAttendanceMonthlyComponent_Conditional_17_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Excellente assiduit\xE9, maintenez ce rythme ! ");
  }
}
function TeamAttendanceMonthlyComponent_Conditional_17_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Quelques absences \xE0 surveiller ce mois-ci. ");
  }
}
function TeamAttendanceMonthlyComponent_Conditional_17_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Le taux de pr\xE9sence est faible, un suivi est recommand\xE9. ");
  }
}
function TeamAttendanceMonthlyComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3, "auto_awesome");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 13);
    \u0275\u0275text(5, "Taux de pr\xE9sence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 15);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 16)(11, "div", 17)(12, "span", 18);
    \u0275\u0275text(13, "schedule");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "p", 19);
    \u0275\u0275text(15, "Heures valid\xE9es");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "p", 20);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "div", 16)(20, "div", 21)(21, "span", 18);
    \u0275\u0275text(22, "event_busy");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "p", 19);
    \u0275\u0275text(24, "Jours d'absence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "p", 20);
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "div", 16)(28, "div", 22)(29, "span", 18);
    \u0275\u0275text(30, "group");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "p", 19);
    \u0275\u0275text(32, "Employ\xE9s dans l'\xE9quipe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "p", 20);
    \u0275\u0275text(34);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(35, "div", 23)(36, "div", 24)(37, "h3", 25);
    \u0275\u0275text(38, "D\xE9tails par employ\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "div", 26)(40, "button", 27);
    \u0275\u0275domListener("click", function TeamAttendanceMonthlyComponent_Conditional_17_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousMonth());
    });
    \u0275\u0275domElementStart(41, "span", 6);
    \u0275\u0275text(42, "chevron_left");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(43, "span", 28);
    \u0275\u0275text(44);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "button", 29);
    \u0275\u0275domListener("click", function TeamAttendanceMonthlyComponent_Conditional_17_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextMonth());
    });
    \u0275\u0275domElementStart(46, "span", 6);
    \u0275\u0275text(47, "chevron_right");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(48, "div", 30)(49, "table", 31)(50, "thead", 32)(51, "tr", 33)(52, "th", 34);
    \u0275\u0275text(53, "Employ\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(54, "th", 35);
    \u0275\u0275text(55, "Jours pr\xE9sents");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(56, "th", 35);
    \u0275\u0275text(57, "Jours absents");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(58, "th", 35);
    \u0275\u0275text(59, "Total heures");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(60, "tbody", 36);
    \u0275\u0275repeaterCreate(61, TeamAttendanceMonthlyComponent_Conditional_17_For_62_Template, 23, 11, "tr", 37, _forTrack0);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(63, "div", 38)(64, "div", 39)(65, "h3", 40);
    \u0275\u0275text(66, "R\xE9partition des pr\xE9sences");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(67, "div", 41)(68, "div")(69, "div", 42)(70, "span", 43);
    \u0275\u0275text(71, "Pr\xE9sents");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(72, "span", 44);
    \u0275\u0275text(73);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(74, "div", 45);
    \u0275\u0275domElement(75, "div", 46);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(76, "div")(77, "div", 42)(78, "span", 43);
    \u0275\u0275text(79, "Absents");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "span", 44);
    \u0275\u0275text(81);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(82, "div", 45);
    \u0275\u0275domElement(83, "div", 47);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(84, "div")(85, "div", 42)(86, "span", 43);
    \u0275\u0275text(87, "Jours non d\xE9clar\xE9s");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(88, "span", 44);
    \u0275\u0275text(89, "\u2014");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(90, "div", 45);
    \u0275\u0275domElement(91, "div", 48);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(92, "div", 49)(93, "span", 50);
    \u0275\u0275text(94, "auto_awesome");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(95, "h3", 51);
    \u0275\u0275text(96, "Insight du mois");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(97, "p", 52);
    \u0275\u0275text(98, " Votre \xE9quipe affiche un taux de pr\xE9sence de ");
    \u0275\u0275domElementStart(99, "span", 53);
    \u0275\u0275text(100);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(101, ". ");
    \u0275\u0275conditionalCreate(102, TeamAttendanceMonthlyComponent_Conditional_17_Conditional_102_Template, 1, 0)(103, TeamAttendanceMonthlyComponent_Conditional_17_Conditional_103_Template, 1, 0)(104, TeamAttendanceMonthlyComponent_Conditional_17_Conditional_104_Template, 1, 0);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.stats().rate, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("sur ", ctx_r1.stats().size, " employ\xE9(s) ce mois");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(18, 14, ctx_r1.stats().totalHours, "1.0-1", "fr"), "h");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats().totalAbsent);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats().size);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.monthLabel());
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.summary());
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.stats().totalPresent);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats().totalPresent + ctx_r1.stats().totalAbsent > 0 ? ctx_r1.stats().totalPresent / (ctx_r1.stats().totalPresent + ctx_r1.stats().totalAbsent) * 100 : 0, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats().totalAbsent);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.stats().totalPresent + ctx_r1.stats().totalAbsent > 0 ? ctx_r1.stats().totalAbsent / (ctx_r1.stats().totalPresent + ctx_r1.stats().totalAbsent) * 100 : 0, "%");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("", ctx_r1.stats().rate, "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.stats().rate >= 90 ? 102 : ctx_r1.stats().rate >= 70 ? 103 : 104);
  }
}
var TeamAttendanceMonthlyComponent = class _TeamAttendanceMonthlyComponent {
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
      return this.teamMembers().map((m) => {
        const userDecls = monthDecls.filter((d) => d.user_id === m.id);
        const validated = userDecls.filter((d) => d.validation_status === "VALIDEE");
        return {
          employee: m,
          presentDays: validated.filter((d) => d.status === "PRESENT").length,
          absentDays: userDecls.filter((d) => d.status === "ABSENT").length,
          totalHours: validated.reduce((sum, d) => sum + (d.hours_worked ?? 0), 0)
        };
      });
    },
    ...ngDevMode ? [{ debugName: "summary" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stats = computed(
    () => {
      const rows = this.summary();
      const totalHours = rows.reduce((sum, r) => sum + r.totalHours, 0);
      const totalPresent = rows.reduce((sum, r) => sum + r.presentDays, 0);
      const totalAbsent = rows.reduce((sum, r) => sum + r.absentDays, 0);
      const total = totalPresent + totalAbsent;
      const rate = total > 0 ? Math.round(totalPresent / total * 100) : 0;
      return {
        totalHours,
        totalPresent,
        totalAbsent,
        rate,
        size: this.teamMembers().length
      };
    },
    ...ngDevMode ? [{ debugName: "stats" }] : (
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
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (decls) => {
        this.declarations.set(decls);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
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
  exportCsv() {
    const [year, month] = this.currentMonth().split("-").map(Number);
    const rows = this.declarations().filter((d) => {
      const dDate = new Date(d.date);
      return dDate.getFullYear() === year && dDate.getMonth() === month - 1 && d.validation_status === "VALIDEE";
    }).map((d) => {
      const emp = this.teamMembers().find((m) => m.id === d.user_id);
      return {
        employe: emp ? `${emp.first_name} ${emp.last_name}` : `#${d.user_id}`,
        date: d.date,
        statut: d.status === "PRESENT" ? "Pr\xE9sent" : "Absent",
        heures: d.hours_worked?.toFixed(2) ?? ""
      };
    });
    const header = "Employ\xE9,Date,Statut,Heures";
    const csv = [header, ...rows.map((r) => `${r.employe},${r.date},${r.statut},${r.heures}`)].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `presences_${this.currentMonth()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  monthLabel() {
    const [year, month] = this.currentMonth().split("-").map(Number);
    const label = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" }).format(new Date(year, month - 1, 1));
    return label.charAt(0).toUpperCase() + label.slice(1);
  }
  initials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
  roleLabel(role) {
    switch (role) {
      case "EMPLOYE":
        return "Employ\xE9";
      case "MANAGER":
        return "Manager";
      case "HR_ADMIN":
        return "RH Admin";
      default:
        return "Membre";
    }
  }
  statusLabel(status) {
    switch (status) {
      case "ACTIVE":
        return "Actif";
      case "INACTIVE":
        return "Inactif";
      case "PENDING_ACTIVATION":
        return "En attente";
      case "SUSPENDED":
        return "Suspendu";
      default:
        return "Actif";
    }
  }
  static \u0275fac = function TeamAttendanceMonthlyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamAttendanceMonthlyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamAttendanceMonthlyComponent, selectors: [["app-team-attendance-monthly"]], decls: 18, vars: 2, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-4"], [1, "font-heading", "text-headline-lg", "text-on-surface"], [1, "font-body-md", "text-body-md", "text-on-surface-variant", "mt-1"], [1, "flex", "items-center", "gap-3"], [1, "px-4", "py-2.5", "border", "border-outline-variant", "text-on-surface", "rounded-lg", "font-label-md", "text-label-md", "hover:bg-surface-container-low", "transition-colors", "inline-flex", "items-center", "gap-2", "cursor-pointer"], [1, "material-symbols-outlined", "text-[18px]"], [1, "px-4", "py-2.5", "bg-secondary", "text-on-secondary", "rounded-lg", "font-label-md", "text-label-md", "hover:opacity-90", "transition-opacity", "inline-flex", "items-center", "gap-2", "cursor-pointer", 3, "click"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "animate-pulse", "space-y-4"], [1, "h-10", "bg-surface-container-high", "rounded"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-primary", "text-on-primary", "rounded-xl", "p-6", "relative", "overflow-hidden", "min-h-[140px]"], [1, "material-symbols-outlined", "absolute", "right-2", "top-2", "opacity-10", "text-[120px]"], [1, "font-label-sm", "text-label-sm", "uppercase", "tracking-wider", "text-on-primary/70", "mb-2"], [1, "font-heading", "text-headline-lg", "font-bold"], [1, "font-body-sm", "text-body-sm", "text-on-primary/70", "mt-1"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "min-h-[140px]"], [1, "w-12", "h-12", "rounded-lg", "bg-secondary-container/30", "text-secondary", "flex", "items-center", "justify-center", "mb-4"], [1, "material-symbols-outlined"], [1, "font-label-sm", "text-label-sm", "uppercase", "tracking-wider", "text-on-surface-variant", "mb-1"], [1, "font-heading", "text-headline-sm", "font-bold", "text-on-surface"], [1, "w-12", "h-12", "rounded-lg", "bg-error-container/30", "text-error", "flex", "items-center", "justify-center", "mb-4"], [1, "w-12", "h-12", "rounded-lg", "bg-primary-container/30", "text-primary", "flex", "items-center", "justify-center", "mb-4"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "p-5", "border-b", "border-outline-variant", "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-3"], [1, "font-heading", "text-lg", "font-bold", "text-on-surface"], [1, "flex", "items-center", "gap-1"], ["title", "Mois pr\xE9c\xE9dent", 1, "p-2", "rounded-lg", "hover:bg-surface-container-high", "text-on-surface-variant", "transition-colors", "cursor-pointer", 3, "click"], [1, "font-label-md", "text-label-md", "text-on-surface", "min-w-[120px]", "text-center"], ["title", "Mois suivant", 1, "p-2", "rounded-lg", "hover:bg-surface-container-high", "text-on-surface-variant", "transition-colors", "cursor-pointer", 3, "click"], [1, "overflow-x-auto"], [1, "w-full", "border-collapse"], [1, "bg-surface-container-lowest"], [1, "border-b", "border-outline-variant"], [1, "px-6", "py-4", "text-left", "font-label-md", "text-[11px]", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "text-center", "font-label-md", "text-[11px]", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "divide-y", "divide-outline-variant"], [1, "hover:bg-surface-container-lowest", "transition-colors"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-4"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6"], [1, "font-heading", "text-lg", "font-bold", "text-on-surface", "mb-5"], [1, "space-y-5"], [1, "flex", "justify-between", "items-center", "mb-1.5"], [1, "font-label-sm", "text-label-sm", "text-on-surface"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant"], [1, "bg-surface-container-low", "h-2", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-primary", "rounded-full", "transition-all", "duration-500"], [1, "h-full", "bg-secondary", "rounded-full", "transition-all", "duration-500"], [1, "h-full", "bg-tertiary/60", "rounded-full", 2, "width", "12%"], [1, "bg-surface-container-low", "rounded-xl", "p-6", "relative", "overflow-hidden"], [1, "material-symbols-outlined", "absolute", "right-4", "top-4", "text-3xl", "text-primary", "opacity-20"], [1, "font-heading", "text-lg", "font-bold", "text-on-surface", "mb-2"], [1, "font-body-md", "text-body-md", "text-on-surface-variant"], [1, "font-semibold", "text-primary"], [1, "px-6", "py-4"], [1, "w-10", "h-10", "rounded-full", "bg-primary-container/30", "text-primary", "flex", "items-center", "justify-center", "font-bold", "text-xs", "shrink-0"], [1, "font-body-md", "text-body-md", "text-on-surface", "font-medium"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant"], [1, "px-6", "py-4", "text-center"], [1, "inline-flex", "items-center", "gap-1.5", "font-label-sm", "text-label-sm", "px-3", "py-1", "rounded-full", "bg-secondary-container/50", "text-on-secondary-container"], [1, "material-symbols-outlined", "text-[14px]"], [1, "inline-flex", "items-center", "gap-1.5", "font-label-sm", "text-label-sm", "px-3", "py-1", "rounded-full", "bg-error-container/50", "text-on-error-container"], [1, "px-6", "py-4", "text-center", "font-body-md", "text-body-md", "text-on-surface", "font-bold"]], template: function TeamAttendanceMonthlyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "R\xE9sum\xE9 mensuel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "Vue d'ensemble des pr\xE9sences de votre \xE9quipe.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 4)(8, "button", 5)(9, "span", 6);
      \u0275\u0275text(10, "calendar_month");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "button", 7);
      \u0275\u0275domListener("click", function TeamAttendanceMonthlyComponent_Template_button_click_12_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275domElementStart(13, "span", 6);
      \u0275\u0275text(14, "download");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(15, " Exporter CSV ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(16, TeamAttendanceMonthlyComponent_Conditional_16_Template, 3, 1, "div", 8)(17, TeamAttendanceMonthlyComponent_Conditional_17_Template, 105, 18);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.monthLabel(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 16 : 17);
    }
  }, dependencies: [DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamAttendanceMonthlyComponent, [{
    type: Component,
    args: [{ selector: "app-team-attendance-monthly", standalone: true, imports: [DecimalPipe], template: `<div class="flex flex-col gap-6">
  <!-- Page Header -->
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <h2 class="font-heading text-headline-lg text-on-surface">R\xE9sum\xE9 mensuel</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">Vue d'ensemble des pr\xE9sences de votre \xE9quipe.</p>
    </div>
    <div class="flex items-center gap-3">
      <button class="px-4 py-2.5 border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors inline-flex items-center gap-2 cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">calendar_month</span>
        {{ monthLabel() }}
      </button>
      <button (click)="exportCsv()"
        class="px-4 py-2.5 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity inline-flex items-center gap-2 cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">download</span>
        Exporter CSV
      </button>
    </div>
  </div>

  @if (loading()) {
    <div class="bg-surface border border-outline-variant rounded-xl p-6 animate-pulse space-y-4">
      @for (_ of [1,2,3]; track _) { <div class="h-10 bg-surface-container-high rounded"></div> }
    </div>
  } @else {
    <!-- Bento Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Primary Card -->
      <div class="bg-primary text-on-primary rounded-xl p-6 relative overflow-hidden min-h-[140px]">
        <span class="material-symbols-outlined absolute right-2 top-2 opacity-10 text-[120px]">auto_awesome</span>
        <p class="font-label-sm text-label-sm uppercase tracking-wider text-on-primary/70 mb-2">Taux de pr\xE9sence</p>
        <p class="font-heading text-headline-lg font-bold">{{ stats().rate }}%</p>
        <p class="font-body-sm text-body-sm text-on-primary/70 mt-1">sur {{ stats().size }} employ\xE9(s) ce mois</p>
      </div>
      <!-- Heures valid\xE9es -->
      <div class="bg-surface border border-outline-variant rounded-xl p-6 min-h-[140px]">
        <div class="w-12 h-12 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center mb-4">
          <span class="material-symbols-outlined">schedule</span>
        </div>
        <p class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Heures valid\xE9es</p>
        <p class="font-heading text-headline-sm font-bold text-on-surface">{{ stats().totalHours | number:'1.0-1':'fr' }}h</p>
      </div>
      <!-- Jours d'absence -->
      <div class="bg-surface border border-outline-variant rounded-xl p-6 min-h-[140px]">
        <div class="w-12 h-12 rounded-lg bg-error-container/30 text-error flex items-center justify-center mb-4">
          <span class="material-symbols-outlined">event_busy</span>
        </div>
        <p class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Jours d'absence</p>
        <p class="font-heading text-headline-sm font-bold text-on-surface">{{ stats().totalAbsent }}</p>
      </div>
      <!-- Employ\xE9s actifs -->
      <div class="bg-surface border border-outline-variant rounded-xl p-6 min-h-[140px]">
        <div class="w-12 h-12 rounded-lg bg-primary-container/30 text-primary flex items-center justify-center mb-4">
          <span class="material-symbols-outlined">group</span>
        </div>
        <p class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Employ\xE9s dans l'\xE9quipe</p>
        <p class="font-heading text-headline-sm font-bold text-on-surface">{{ stats().size }}</p>
      </div>
    </div>

    <!-- Team Table -->
    <div class="bg-surface border border-outline-variant rounded-xl shadow-sm overflow-hidden">
      <div class="p-5 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 class="font-heading text-lg font-bold text-on-surface">D\xE9tails par employ\xE9</h3>
        <div class="flex items-center gap-1">
          <button (click)="previousMonth()" class="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors cursor-pointer" title="Mois pr\xE9c\xE9dent">
            <span class="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <span class="font-label-md text-label-md text-on-surface min-w-[120px] text-center">{{ monthLabel() }}</span>
          <button (click)="nextMonth()" class="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors cursor-pointer" title="Mois suivant">
            <span class="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead class="bg-surface-container-lowest">
            <tr class="border-b border-outline-variant">
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Employ\xE9</th>
              <th class="px-6 py-4 text-center font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Jours pr\xE9sents</th>
              <th class="px-6 py-4 text-center font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Jours absents</th>
              <th class="px-6 py-4 text-center font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Total heures</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant">
            @for (row of summary(); track row.employee.id) {
              <tr class="hover:bg-surface-container-lowest transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-primary-container/30 text-primary flex items-center justify-center font-bold text-xs shrink-0">{{ initials(row.employee.first_name, row.employee.last_name) }}</div>
                    <div>
                      <p class="font-body-md text-body-md text-on-surface font-medium">{{ row.employee.first_name }} {{ row.employee.last_name }}</p>
                      <p class="font-body-sm text-body-sm text-on-surface-variant">{{ row.employee.job_title }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="inline-flex items-center gap-1.5 font-label-sm text-label-sm px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container">
                    <span class="material-symbols-outlined text-[14px]">check_circle</span>
                    {{ row.presentDays }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center">
                  <span class="inline-flex items-center gap-1.5 font-label-sm text-label-sm px-3 py-1 rounded-full bg-error-container/50 text-on-error-container">
                    <span class="material-symbols-outlined text-[14px]">cancel</span>
                    {{ row.absentDays }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center font-body-md text-body-md text-on-surface font-bold">{{ row.totalHours | number:'1.1-1':'fr' }}h</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- Insights -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- R\xE9partition -->
      <div class="bg-surface border border-outline-variant rounded-xl p-6">
        <h3 class="font-heading text-lg font-bold text-on-surface mb-5">R\xE9partition des pr\xE9sences</h3>
        <div class="space-y-5">
          <div>
            <div class="flex justify-between items-center mb-1.5">
              <span class="font-label-sm text-label-sm text-on-surface">Pr\xE9sents</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">{{ stats().totalPresent }}</span>
            </div>
            <div class="bg-surface-container-low h-2 rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full transition-all duration-500"
                [style.width.%]="(stats().totalPresent + stats().totalAbsent) > 0 ? (stats().totalPresent / (stats().totalPresent + stats().totalAbsent)) * 100 : 0"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-1.5">
              <span class="font-label-sm text-label-sm text-on-surface">Absents</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">{{ stats().totalAbsent }}</span>
            </div>
            <div class="bg-surface-container-low h-2 rounded-full overflow-hidden">
              <div class="h-full bg-secondary rounded-full transition-all duration-500"
                [style.width.%]="(stats().totalPresent + stats().totalAbsent) > 0 ? (stats().totalAbsent / (stats().totalPresent + stats().totalAbsent)) * 100 : 0"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-1.5">
              <span class="font-label-sm text-label-sm text-on-surface">Jours non d\xE9clar\xE9s</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">\u2014</span>
            </div>
            <div class="bg-surface-container-low h-2 rounded-full overflow-hidden">
              <div class="h-full bg-tertiary/60 rounded-full" style="width: 12%"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- AI Insight Card -->
      <div class="bg-surface-container-low rounded-xl p-6 relative overflow-hidden">
        <span class="material-symbols-outlined absolute right-4 top-4 text-3xl text-primary opacity-20">auto_awesome</span>
        <h3 class="font-heading text-lg font-bold text-on-surface mb-2">Insight du mois</h3>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Votre \xE9quipe affiche un taux de pr\xE9sence de <span class="font-semibold text-primary">{{ stats().rate }}%</span>.
          @if (stats().rate >= 90) {
            Excellente assiduit\xE9, maintenez ce rythme !
          } @else if (stats().rate >= 70) {
            Quelques absences \xE0 surveiller ce mois-ci.
          } @else {
            Le taux de pr\xE9sence est faible, un suivi est recommand\xE9.
          }
        </p>
      </div>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamAttendanceMonthlyComponent, { className: "TeamAttendanceMonthlyComponent", filePath: "src/app/features/attendance/team-attendance-monthly/team-attendance-monthly.component.ts", lineNumber: 14 });
})();
export {
  TeamAttendanceMonthlyComponent
};
//# sourceMappingURL=chunk-3QMR73IR.js.map
