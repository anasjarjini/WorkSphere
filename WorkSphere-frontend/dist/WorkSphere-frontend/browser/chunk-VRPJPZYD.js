import {
  AttendanceDeclarationService
} from "./chunk-2PL4LXLU.js";
import {
  EmployeeService
} from "./chunk-EAQSU6LC.js";
import {
  DatePipe,
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZST2RCVM.js";

// src/app/features/attendance/hr-attendance-monthly/hr-attendance-monthly.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.name;
function HrAttendanceMonthlyComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 13);
  }
}
function HrAttendanceMonthlyComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, HrAttendanceMonthlyComponent_Conditional_24_For_2_Template, 1, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function HrAttendanceMonthlyComponent_Conditional_25_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 34);
    \u0275\u0275text(1, "CRITIQUE");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceMonthlyComponent_Conditional_25_For_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 50)(1, "td", 68)(2, "div", 69)(3, "div", 70)(4, "span", 71);
    \u0275\u0275text(5, "business_center");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "span", 72);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "td", 73);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 73);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 68)(13, "div", 69)(14, "div", 74);
    \u0275\u0275domElement(15, "div", 75);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "span", 76);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "td", 77)(19, "button", 78);
    \u0275\u0275text(20, " View report ");
    \u0275\u0275domElementStart(21, "span", 20);
    \u0275\u0275text(22, "arrow_forward");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const dept_r1 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(dept_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r1.size);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", dept_r1.avgPresent, " jours");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", dept_r1.conformity, "%");
    \u0275\u0275classProp("bg-[#059669]", dept_r1.conformity >= 90)("bg-tertiary", dept_r1.conformity < 90);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-[#059669]", dept_r1.conformity >= 90)("text-tertiary", dept_r1.conformity < 90);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", dept_r1.conformity, "%");
  }
}
function HrAttendanceMonthlyComponent_Conditional_25_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.nonConformingCount(), " d\xE9partement(s) sont sous le seuil de 90%. Une relance cibl\xE9e des managers concern\xE9s pourrait am\xE9liorer le suivi des d\xE9clarations. ");
  }
}
function HrAttendanceMonthlyComponent_Conditional_25_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Tous les d\xE9partements sont au-dessus du seuil de 90%. Excellent suivi ! ");
  }
}
function HrAttendanceMonthlyComponent_Conditional_25_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 62);
    \u0275\u0275text(1, "Aucune anomalie d\xE9tect\xE9e ce mois-ci.");
    \u0275\u0275domElementEnd();
  }
}
function HrAttendanceMonthlyComponent_Conditional_25_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 63);
    \u0275\u0275domElement(1, "span", 79);
    \u0275\u0275domElementStart(2, "div", 66)(3, "p", 67);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 62);
    \u0275\u0275text(6, "\xC0 v\xE9rifier par les managers concern\xE9s");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.totals().absentDays, " journ\xE9e(s) d'absence d\xE9clar\xE9e(s)");
  }
}
function HrAttendanceMonthlyComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275domElement(2, "div", 16);
    \u0275\u0275domElementStart(3, "div", 17)(4, "div", 18)(5, "span", 11);
    \u0275\u0275text(6, "how_to_reg");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "span", 19)(8, "span", 20);
    \u0275\u0275text(9, "trending_up");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(10, " Conformit\xE9 ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div")(12, "p", 21);
    \u0275\u0275text(13, "Taux de pr\xE9sence global");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "h3", 22);
    \u0275\u0275text(15);
    \u0275\u0275domElementStart(16, "span", 23);
    \u0275\u0275text(17, "%");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(18, "div", 24);
    \u0275\u0275domElement(19, "div", 25);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 26);
    \u0275\u0275domElement(21, "div", 27);
    \u0275\u0275domElementStart(22, "div", 17)(23, "div", 28)(24, "span", 11);
    \u0275\u0275text(25, "schedule");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "span", 29);
    \u0275\u0275text(27, "Total company");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "div")(29, "p", 21);
    \u0275\u0275text(30, "Total heures travaill\xE9es");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "h3", 22);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275domElementStart(34, "span", 23);
    \u0275\u0275text(35, "h");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(36, "p", 30);
    \u0275\u0275text(37);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(38, "div", 31);
    \u0275\u0275domElement(39, "div", 32);
    \u0275\u0275domElementStart(40, "div", 17)(41, "div", 33)(42, "span", 11);
    \u0275\u0275text(43, "report_problem");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(44, HrAttendanceMonthlyComponent_Conditional_25_Conditional_44_Template, 2, 0, "span", 34);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "div")(46, "p", 21);
    \u0275\u0275text(47, "Anomalies critiques");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "h3", 35);
    \u0275\u0275text(49);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(50, "div", 36)(51, "span", 20);
    \u0275\u0275text(52, "warning");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "span");
    \u0275\u0275text(54, "\xC9quipe(s) sous le seuil de 90%");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(55, "div", 37)(56, "div", 38)(57, "div", 39)(58, "h4", 40);
    \u0275\u0275text(59, "Statistiques par D\xE9partement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(60, "div", 5)(61, "div", 6);
    \u0275\u0275domElement(62, "span", 41);
    \u0275\u0275domElementStart(63, "span", 42);
    \u0275\u0275text(64, "Conformit\xE9 optimale");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(65, "select", 43)(66, "option");
    \u0275\u0275text(67, "Trier par Taux");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "option");
    \u0275\u0275text(69, "Trier par Effectif");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "option");
    \u0275\u0275text(71, "Ordre Alphab\xE9tique");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(72, "div", 44)(73, "table", 45)(74, "thead")(75, "tr", 46)(76, "th", 47);
    \u0275\u0275text(77, "D\xE9partement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(78, "th", 47);
    \u0275\u0275text(79, "Effectif");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "th", 47);
    \u0275\u0275text(81, "Jours pr\xE9sent (avg)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(82, "th", 48);
    \u0275\u0275text(83, "Taux de conformit\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(84, "th", 47);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(85, "tbody", 49);
    \u0275\u0275repeaterCreate(86, HrAttendanceMonthlyComponent_Conditional_25_For_87_Template, 23, 14, "tr", 50, _forTrack0);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(88, "div", 0)(89, "div", 51)(90, "div", 52)(91, "div", 53)(92, "span", 11);
    \u0275\u0275text(93, "psychology");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(94, "div", 54)(95, "h5", 55);
    \u0275\u0275text(96, "Analyse Pr\xE9dictive IA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(97, "p", 56);
    \u0275\u0275text(98);
    \u0275\u0275conditionalCreate(99, HrAttendanceMonthlyComponent_Conditional_25_Conditional_99_Template, 1, 1)(100, HrAttendanceMonthlyComponent_Conditional_25_Conditional_100_Template, 1, 0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(101, "button", 57);
    \u0275\u0275text(102, " Voir les recommandations d\xE9taill\xE9es ");
    \u0275\u0275domElementStart(103, "span", 20);
    \u0275\u0275text(104, "open_in_new");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(105, "div", 58)(106, "div", 59)(107, "h5", 40);
    \u0275\u0275text(108, "Derni\xE8res anomalies d\xE9tect\xE9es");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(109, "button", 60)(110, "span", 11);
    \u0275\u0275text(111, "more_horiz");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(112, "div", 61);
    \u0275\u0275conditionalCreate(113, HrAttendanceMonthlyComponent_Conditional_25_Conditional_113_Template, 2, 0, "p", 62)(114, HrAttendanceMonthlyComponent_Conditional_25_Conditional_114_Template, 7, 1, "div", 63);
    \u0275\u0275domElementStart(115, "div", 64);
    \u0275\u0275domElement(116, "span", 65);
    \u0275\u0275domElementStart(117, "div", 66)(118, "p", 67);
    \u0275\u0275text(119);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(120, "p", 62);
    \u0275\u0275text(121, "Donn\xE9es synchronis\xE9es en temps r\xE9el");
    \u0275\u0275domElementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.overallConformity());
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.overallConformity(), "%");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 11, ctx_r1.totals().totalHours, "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Bas\xE9 sur ", ctx_r1.allEmployees().length, " collaborateurs");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.nonConformingCount() > 0 ? 44 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.nonConformingCount());
    \u0275\u0275advance(37);
    \u0275\u0275repeater(ctx_r1.departments());
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" Le taux de conformit\xE9 global est de ", ctx_r1.overallConformity(), "% ce mois-ci. ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nonConformingCount() > 0 ? 99 : 100);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.totals().absentDays === 0 ? 113 : 114);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.monthDeclarations().length, " d\xE9claration(s) ce mois-ci");
  }
}
var HrAttendanceMonthlyComponent = class _HrAttendanceMonthlyComponent {
  attendanceService = inject(AttendanceDeclarationService);
  employeeService = inject(EmployeeService);
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
  summary = computed(
    () => {
      const monthDecls = this.monthDeclarations();
      return this.allEmployees().map((e) => {
        const userDecls = monthDecls.filter((d) => d.user_id === e.id);
        const validated = userDecls.filter((d) => d.validation_status === "VALIDEE");
        return {
          employee: e,
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
  totals = computed(
    () => ({
      presentDays: this.summary().reduce((s, r) => s + r.presentDays, 0),
      absentDays: this.summary().reduce((s, r) => s + r.absentDays, 0),
      totalHours: this.summary().reduce((s, r) => s + r.totalHours, 0)
    }),
    ...ngDevMode ? [{ debugName: "totals" }] : (
      /* istanbul ignore next */
      []
    )
  );
  departments = computed(
    () => {
      const map = /* @__PURE__ */ new Map();
      this.summary().forEach((row) => {
        const deptId = row.employee.department?.id ?? 0;
        if (!map.has(deptId))
          map.set(deptId, { name: row.employee.department?.name ?? "Sans d\xE9partement", rows: [] });
        map.get(deptId).rows.push(row);
      });
      return Array.from(map.values()).map((g) => {
        const total = g.rows.length;
        const presentDays = g.rows.reduce((s, r) => s + r.presentDays, 0);
        const absentDays = g.rows.reduce((s, r) => s + r.absentDays, 0);
        const workedDays = presentDays + absentDays;
        const avgPresent = total ? presentDays / total : 0;
        const conformity = workedDays > 0 ? Math.round(presentDays / workedDays * 100) : 0;
        return {
          name: g.name,
          size: total,
          avgPresent: Math.round(avgPresent * 10) / 10,
          conformity,
          totalHours: g.rows.reduce((s, r) => s + r.totalHours, 0)
        };
      });
    },
    ...ngDevMode ? [{ debugName: "departments" }] : (
      /* istanbul ignore next */
      []
    )
  );
  overallConformity = computed(
    () => {
      const t = this.totals();
      const worked = t.presentDays + t.absentDays;
      return worked > 0 ? Math.round(t.presentDays / worked * 100) : 0;
    },
    ...ngDevMode ? [{ debugName: "overallConformity" }] : (
      /* istanbul ignore next */
      []
    )
  );
  nonConformingCount = computed(
    () => this.departments().filter((d) => d.conformity < 90).length,
    ...ngDevMode ? [{ debugName: "nonConformingCount" }] : (
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
      const emp = this.allEmployees().find((e) => e.id === d.user_id);
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
    a.download = `presences_company_${this.currentMonth()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function HrAttendanceMonthlyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrAttendanceMonthlyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrAttendanceMonthlyComponent, selectors: [["app-hr-attendance-monthly"]], decls: 26, vars: 7, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "font-label-md", "text-primary", "mb-1"], [1, "font-heading", "text-headline-lg", "text-on-surface", "mb-1"], [1, "font-body-md", "text-on-surface-variant"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "w-9", "h-9", "rounded-full", "border", "border-primary-container/40", "flex", "items-center", "justify-center", "hover:bg-primary-container/20", "transition-colors", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-primary-container"], [1, "bg-primary-container/10", "text-primary-container", "px-4", "py-1.5", "rounded-full", "font-label-sm", "font-bold"], [1, "bg-primary", "text-on-primary", "px-4", "py-2", "rounded-xl", "font-label-md", "flex", "items-center", "gap-2", "hover:opacity-95", "transition-all", "shadow-md", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "animate-pulse", "space-y-4"], [1, "h-10", "bg-surface-container-high", "rounded"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "glass-card", "rounded-2xl", "p-6", "flex", "flex-col", "gap-4", "relative", "overflow-hidden", "group", "hover:border-primary/30", "transition-all", "duration-300", "custom-shadow"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-primary/5", "rounded-bl-full", "-mr-10", "-mt-10", "group-hover:scale-110", "transition-transform"], [1, "flex", "items-center", "justify-between", "relative"], [1, "p-3", "bg-primary/10", "text-primary", "rounded-lg"], [1, "text-[#059669]", "text-label-sm", "font-bold", "flex", "items-center", "gap-1"], [1, "material-symbols-outlined", "text-sm"], [1, "text-on-surface-variant", "font-label-md", "text-label-md"], [1, "font-heading", "text-display-lg", "text-on-surface", "mt-2"], [1, "text-body-lg", "text-on-surface-variant"], [1, "w-full", "bg-surface-variant", "h-1.5", "rounded-full", "overflow-hidden"], [1, "bg-primary", "h-full", "rounded-full", "transition-all", "duration-500"], [1, "glass-card", "rounded-2xl", "p-6", "flex", "flex-col", "gap-4", "relative", "overflow-hidden", "group", "hover:border-secondary/30", "transition-all", "duration-300", "custom-shadow"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-secondary/5", "rounded-bl-full", "-mr-10", "-mt-10", "group-hover:scale-110", "transition-transform"], [1, "p-3", "bg-secondary/10", "text-secondary", "rounded-lg"], [1, "text-on-surface-variant", "text-label-sm", "font-label-sm"], [1, "text-on-surface-variant", "text-label-sm", "font-label-sm", "italic", "opacity-60"], [1, "glass-card", "rounded-2xl", "p-6", "flex", "flex-col", "gap-4", "relative", "overflow-hidden", "group", "border-error/20", "hover:border-error/40", "transition-all", "duration-300", "custom-shadow"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-error/5", "rounded-bl-full", "-mr-10", "-mt-10", "group-hover:scale-110", "transition-transform"], [1, "p-3", "bg-error/10", "text-error", "rounded-lg"], [1, "bg-error", "text-white", "text-[10px]", "font-bold", "px-2", "py-0.5", "rounded-full"], [1, "font-heading", "text-display-lg", "text-error", "mt-2"], [1, "flex", "items-center", "gap-1", "text-error", "font-label-sm", "text-label-sm"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6", "items-start"], [1, "lg:col-span-2", "bg-surface", "border", "border-outline-variant", "rounded-2xl", "overflow-hidden", "shadow-sm"], [1, "px-6", "py-4", "border-b", "border-outline-variant", "flex", "items-center", "justify-between", "bg-surface-container-low/30"], [1, "font-heading", "text-headline-sm", "text-on-surface"], [1, "w-3", "h-3", "bg-[#059669]", "rounded-full"], [1, "text-label-sm", "font-label-sm", "text-on-surface-variant"], [1, "bg-transparent", "border-outline-variant", "rounded-lg", "font-label-md", "text-label-md", "focus:ring-primary", "focus:border-primary", "cursor-pointer"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-surface-container-low/50", "border-b", "border-outline-variant"], [1, "px-6", "py-3.5", "font-label-md", "text-on-surface-variant"], [1, "px-6", "py-3.5", "font-label-md", "text-on-surface-variant", "w-[220px]"], [1, "divide-y", "divide-outline-variant/50"], [1, "group", "hover:bg-surface-container-lowest", "transition-colors"], [1, "bg-[#7c3aed]/5", "border", "border-[#7c3aed]/20", "rounded-2xl", "p-6"], [1, "flex", "items-start", "gap-4"], [1, "w-12", "h-12", "rounded-full", "bg-[#7c3aed]", "text-white", "flex", "items-center", "justify-center", "shrink-0", "shadow-lg"], [1, "space-y-2"], [1, "font-heading", "text-headline-sm", "text-on-surface", "font-bold"], [1, "text-body-sm", "text-on-surface-variant", "leading-relaxed"], [1, "font-label-sm", "text-[#7c3aed]", "font-bold", "flex", "items-center", "gap-1", "hover:underline", "cursor-pointer"], [1, "bg-surface", "border", "border-outline-variant", "rounded-2xl", "p-6", "shadow-sm"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-on-surface-variant", "hover:text-primary", "transition-colors", "cursor-pointer"], [1, "flex", "flex-col", "gap-3"], [1, "text-body-sm", "text-on-surface-variant"], [1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", "bg-error-container/30"], [1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", "bg-surface-container-low/50"], [1, "w-2", "h-2", "bg-tertiary-container", "rounded-full", "shrink-0"], [1, "flex-1"], [1, "font-label-sm", "text-on-surface"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "bg-primary-container/10", "text-primary-container", "flex", "items-center", "justify-center"], [1, "material-symbols-outlined", "text-lg"], [1, "font-label-md", "text-on-surface"], [1, "px-6", "py-4", "font-body-sm", "text-on-surface-variant"], [1, "h-1.5", "flex-1", "bg-surface-variant", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-500"], [1, "font-label-sm", "w-9", "text-right"], [1, "px-6", "py-4", "text-right"], [1, "flex", "items-center", "gap-1", "font-label-sm", "text-primary", "group-hover:translate-x-[-4px]", "transition-transform", "cursor-pointer"], [1, "w-2", "h-2", "bg-error", "rounded-full", "shrink-0"]], template: function HrAttendanceMonthlyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "Rapports de Performance");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h1", 3);
      \u0275\u0275text(6, "R\xE9sum\xE9 mensuel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 4);
      \u0275\u0275text(8, "Vue d'ensemble de l'activit\xE9 RH par d\xE9partement pour la p\xE9riode s\xE9lectionn\xE9e.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "div", 5)(10, "div", 6)(11, "button", 7);
      \u0275\u0275domListener("click", function HrAttendanceMonthlyComponent_Template_button_click_11_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275domElementStart(12, "span", 8);
      \u0275\u0275text(13, "chevron_left");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "span", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "date");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "button", 7);
      \u0275\u0275domListener("click", function HrAttendanceMonthlyComponent_Template_button_click_17_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275domElementStart(18, "span", 8);
      \u0275\u0275text(19, "chevron_right");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(20, "button", 10);
      \u0275\u0275domListener("click", function HrAttendanceMonthlyComponent_Template_button_click_20_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275domElementStart(21, "span", 11);
      \u0275\u0275text(22, "download");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(23, " Export CSV (Full) ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(24, HrAttendanceMonthlyComponent_Conditional_24_Template, 3, 1, "div", 12)(25, HrAttendanceMonthlyComponent_Conditional_25_Template, 122, 14);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(16, 2, ctx.currentMonth() + "-01", "MMMM yyyy", "", "fr"));
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading() && ctx.allEmployees().length === 0 ? 24 : 25);
    }
  }, dependencies: [DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrAttendanceMonthlyComponent, [{
    type: Component,
    args: [{ selector: "app-hr-attendance-monthly", standalone: true, imports: [DecimalPipe, DatePipe], template: `<div class="flex flex-col gap-6">
  <!-- Header Section -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <p class="font-label-md text-primary mb-1">Rapports de Performance</p>
      <h1 class="font-heading text-headline-lg text-on-surface mb-1">R\xE9sum\xE9 mensuel</h1>
      <p class="font-body-md text-on-surface-variant">Vue d'ensemble de l'activit\xE9 RH par d\xE9partement pour la p\xE9riode s\xE9lectionn\xE9e.</p>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <button (click)="previousMonth()" class="w-9 h-9 rounded-full border border-primary-container/40 flex items-center justify-center hover:bg-primary-container/20 transition-colors cursor-pointer">
          <span class="material-symbols-outlined text-primary-container">chevron_left</span>
        </button>
        <span class="bg-primary-container/10 text-primary-container px-4 py-1.5 rounded-full font-label-sm font-bold">{{ currentMonth() + '-01' | date:'MMMM yyyy':'':'fr' }}</span>
        <button (click)="nextMonth()" class="w-9 h-9 rounded-full border border-primary-container/40 flex items-center justify-center hover:bg-primary-container/20 transition-colors cursor-pointer">
          <span class="material-symbols-outlined text-primary-container">chevron_right</span>
        </button>
      </div>
      <button (click)="exportCsv()" class="bg-primary text-on-primary px-4 py-2 rounded-xl font-label-md flex items-center gap-2 hover:opacity-95 transition-all shadow-md cursor-pointer">
        <span class="material-symbols-outlined">download</span>
        Export CSV (Full)
      </button>
    </div>
  </div>

  @if (loading() && allEmployees().length === 0) {
    <div class="bg-surface border border-outline-variant rounded-xl p-6 animate-pulse space-y-4">
      @for (_ of [1,2,3]; track _) { <div class="h-10 bg-surface-container-high rounded"></div> }
    </div>
  } @else {
    <!-- KPI Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Taux de pr\xE9sence global -->
      <div class="glass-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 custom-shadow">
        <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
        <div class="flex items-center justify-between relative">
          <div class="p-3 bg-primary/10 text-primary rounded-lg">
            <span class="material-symbols-outlined">how_to_reg</span>
          </div>
          <span class="text-[#059669] text-label-sm font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">trending_up</span>
            Conformit\xE9
          </span>
        </div>
        <div>
          <p class="text-on-surface-variant font-label-md text-label-md">Taux de pr\xE9sence global</p>
          <h3 class="font-heading text-display-lg text-on-surface mt-2">{{ overallConformity() }}<span class="text-body-lg text-on-surface-variant">%</span></h3>
        </div>
        <div class="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
          <div class="bg-primary h-full rounded-full transition-all duration-500" [style.width.%]="overallConformity()"></div>
        </div>
      </div>
      <!-- Total heures travaill\xE9es -->
      <div class="glass-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-secondary/30 transition-all duration-300 custom-shadow">
        <div class="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
        <div class="flex items-center justify-between relative">
          <div class="p-3 bg-secondary/10 text-secondary rounded-lg">
            <span class="material-symbols-outlined">schedule</span>
          </div>
          <span class="text-on-surface-variant text-label-sm font-label-sm">Total company</span>
        </div>
        <div>
          <p class="text-on-surface-variant font-label-md text-label-md">Total heures travaill\xE9es</p>
          <h3 class="font-heading text-display-lg text-on-surface mt-2">{{ totals().totalHours | number:'1.0-0' }}<span class="text-body-lg text-on-surface-variant">h</span></h3>
        </div>
        <p class="text-on-surface-variant text-label-sm font-label-sm italic opacity-60">Bas\xE9 sur {{ allEmployees().length }} collaborateurs</p>
      </div>
      <!-- Anomalies critiques -->
      <div class="glass-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group border-error/20 hover:border-error/40 transition-all duration-300 custom-shadow">
        <div class="absolute top-0 right-0 w-24 h-24 bg-error/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
        <div class="flex items-center justify-between relative">
          <div class="p-3 bg-error/10 text-error rounded-lg">
            <span class="material-symbols-outlined">report_problem</span>
          </div>
          @if (nonConformingCount() > 0) {
            <span class="bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full">CRITIQUE</span>
          }
        </div>
        <div>
          <p class="text-on-surface-variant font-label-md text-label-md">Anomalies critiques</p>
          <h3 class="font-heading text-display-lg text-error mt-2">{{ nonConformingCount() }}</h3>
        </div>
        <div class="flex items-center gap-1 text-error font-label-sm text-label-sm">
          <span class="material-symbols-outlined text-sm">warning</span>
          <span>\xC9quipe(s) sous le seuil de 90%</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <!-- Department Table -->
      <div class="lg:col-span-2 bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
        <div class="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-low/30">
          <h4 class="font-heading text-headline-sm text-on-surface">Statistiques par D\xE9partement</h4>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[#059669] rounded-full"></span>
              <span class="text-label-sm font-label-sm text-on-surface-variant">Conformit\xE9 optimale</span>
            </div>
            <select class="bg-transparent border-outline-variant rounded-lg font-label-md text-label-md focus:ring-primary focus:border-primary cursor-pointer">
              <option>Trier par Taux</option>
              <option>Trier par Effectif</option>
              <option>Ordre Alphab\xE9tique</option>
            </select>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-container-low/50 border-b border-outline-variant">
                <th class="px-6 py-3.5 font-label-md text-on-surface-variant">D\xE9partement</th>
                <th class="px-6 py-3.5 font-label-md text-on-surface-variant">Effectif</th>
                <th class="px-6 py-3.5 font-label-md text-on-surface-variant">Jours pr\xE9sent (avg)</th>
                <th class="px-6 py-3.5 font-label-md text-on-surface-variant w-[220px]">Taux de conformit\xE9</th>
                <th class="px-6 py-3.5 font-label-md text-on-surface-variant"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/50">
              @for (dept of departments(); track dept.name) {
                <tr class="group hover:bg-surface-container-lowest transition-colors">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center">
                        <span class="material-symbols-outlined text-lg">business_center</span>
                      </div>
                      <span class="font-label-md text-on-surface">{{ dept.name }}</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 font-body-sm text-on-surface-variant">{{ dept.size }}</td>
                  <td class="px-6 py-4 font-body-sm text-on-surface-variant">{{ dept.avgPresent }} jours</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="h-1.5 flex-1 bg-surface-variant rounded-full overflow-hidden">
                        <div class="h-full rounded-full transition-all duration-500" [class.bg-[#059669]]="dept.conformity >= 90" [class.bg-tertiary]="dept.conformity < 90" [style.width.%]="dept.conformity"></div>
                      </div>
                      <span class="font-label-sm w-9 text-right" [class.text-[#059669]]="dept.conformity >= 90" [class.text-tertiary]="dept.conformity < 90">{{ dept.conformity }}%</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button class="flex items-center gap-1 font-label-sm text-primary group-hover:translate-x-[-4px] transition-transform cursor-pointer">
                      View report
                      <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

      <!-- AI Insight + Anomalies -->
      <div class="flex flex-col gap-6">
        <div class="bg-[#7c3aed]/5 border border-[#7c3aed]/20 rounded-2xl p-6">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shrink-0 shadow-lg">
              <span class="material-symbols-outlined">psychology</span>
            </div>
            <div class="space-y-2">
              <h5 class="font-heading text-headline-sm text-on-surface font-bold">Analyse Pr\xE9dictive IA</h5>
              <p class="text-body-sm text-on-surface-variant leading-relaxed">
                Le taux de conformit\xE9 global est de {{ overallConformity() }}% ce mois-ci.
                @if (nonConformingCount() > 0) {
                  {{ nonConformingCount() }} d\xE9partement(s) sont sous le seuil de 90%. Une relance cibl\xE9e
                  des managers concern\xE9s pourrait am\xE9liorer le suivi des d\xE9clarations.
                } @else {
                  Tous les d\xE9partements sont au-dessus du seuil de 90%. Excellent suivi !
                }
              </p>
              <button class="font-label-sm text-[#7c3aed] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                Voir les recommandations d\xE9taill\xE9es
                <span class="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>
        </div>

        <div class="bg-surface border border-outline-variant rounded-2xl p-6 shadow-sm">
          <div class="flex justify-between items-center mb-4">
            <h5 class="font-heading text-headline-sm text-on-surface">Derni\xE8res anomalies d\xE9tect\xE9es</h5>
            <button class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <span class="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div class="flex flex-col gap-3">
            @if (totals().absentDays === 0) {
              <p class="text-body-sm text-on-surface-variant">Aucune anomalie d\xE9tect\xE9e ce mois-ci.</p>
            } @else {
              <div class="flex items-center gap-3 p-3 rounded-xl bg-error-container/30">
                <span class="w-2 h-2 bg-error rounded-full shrink-0"></span>
                <div class="flex-1">
                  <p class="font-label-sm text-on-surface">{{ totals().absentDays }} journ\xE9e(s) d'absence d\xE9clar\xE9e(s)</p>
                  <p class="text-body-sm text-on-surface-variant">\xC0 v\xE9rifier par les managers concern\xE9s</p>
                </div>
              </div>
            }
            <div class="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low/50">
              <span class="w-2 h-2 bg-tertiary-container rounded-full shrink-0"></span>
              <div class="flex-1">
                <p class="font-label-sm text-on-surface">{{ monthDeclarations().length }} d\xE9claration(s) ce mois-ci</p>
                <p class="text-body-sm text-on-surface-variant">Donn\xE9es synchronis\xE9es en temps r\xE9el</p>
              </div>
            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrAttendanceMonthlyComponent, { className: "HrAttendanceMonthlyComponent", filePath: "src/app/features/attendance/hr-attendance-monthly/hr-attendance-monthly.component.ts", lineNumber: 21 });
})();
export {
  HrAttendanceMonthlyComponent
};
//# sourceMappingURL=chunk-VRPJPZYD.js.map
