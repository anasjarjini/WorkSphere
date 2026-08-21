import {
  AttendanceDeclarationService
} from "./chunk-I3RMVRUE.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DGTBVCJC.js";
import "./chunk-FWX4MYVU.js";
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
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/attendance/attendance-monthly-summary/attendance-monthly-summary.component.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.label;
function AttendanceMonthlySummaryComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10)(2, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function AttendanceMonthlySummaryComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, AttendanceMonthlySummaryComponent_Conditional_15_For_2_Template, 3, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AttendanceMonthlySummaryComponent_Conditional_16_For_59_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275element(1, "span", 77);
    \u0275\u0275text(2, " Valid\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceMonthlySummaryComponent_Conditional_16_For_59_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275element(1, "span", 78);
    \u0275\u0275text(2, " En attente ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceMonthlySummaryComponent_Conditional_16_For_59_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, " \xC0 compl\xE9ter ");
    \u0275\u0275elementEnd();
  }
}
function AttendanceMonthlySummaryComponent_Conditional_16_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 42)(1, "td", 69)(2, "p", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 69);
    \u0275\u0275conditionalCreate(7, AttendanceMonthlySummaryComponent_Conditional_16_For_59_Conditional_7_Template, 3, 0, "span", 72)(8, AttendanceMonthlySummaryComponent_Conditional_16_For_59_Conditional_8_Template, 3, 0, "span", 73)(9, AttendanceMonthlySummaryComponent_Conditional_16_For_59_Conditional_9_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 75)(11, "button", 76);
    \u0275\u0275text(12, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const week_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(week_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(week_r1.range);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(week_r1.status === "validated" ? 7 : week_r1.status === "pending" ? 8 : 9);
  }
}
function AttendanceMonthlySummaryComponent_Conditional_16_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 79);
  }
  if (rf & 2) {
    const h_r2 = ctx.$implicit;
    \u0275\u0275styleProp("height", h_r2.height + "%");
    \u0275\u0275classProp("bg-primary", h_r2.type === "office")("bg-secondary-fixed-dim", h_r2.type === "remote");
  }
}
function AttendanceMonthlySummaryComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div")(3, "p", 14);
    \u0275\u0275text(4, "Jours pr\xE9sents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 19);
    \u0275\u0275element(12, "path", 20)(13, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div")(18, "p", 14);
    \u0275\u0275text(19, "Jours absents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 23);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 24);
    \u0275\u0275text(23, "Cong\xE9s et absences");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25)(25, "span", 26);
    \u0275\u0275text(26, "warning");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 13)(28, "div")(29, "p", 14);
    \u0275\u0275text(30, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 27);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 24);
    \u0275\u0275text(34, "D\xE9clarations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 28)(36, "span", 29);
    \u0275\u0275text(37, "pending_actions");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 30)(39, "div", 31)(40, "div", 32)(41, "h3", 33);
    \u0275\u0275text(42, "D\xE9tail par semaine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 34)(44, "span", 35);
    \u0275\u0275text(45, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Exporter PDF ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 36)(48, "table", 37)(49, "thead")(50, "tr", 38)(51, "th", 39);
    \u0275\u0275text(52, "P\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th", 39);
    \u0275\u0275text(54, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 40);
    \u0275\u0275text(56, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "tbody", 41);
    \u0275\u0275repeaterCreate(58, AttendanceMonthlySummaryComponent_Conditional_16_For_59_Template, 13, 3, "tr", 42, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 43)(61, "div", 44)(62, "h4", 45);
    \u0275\u0275text(63, "R\xE9partition de l'activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 46)(65, "div", 47);
    \u0275\u0275element(66, "span", 48);
    \u0275\u0275elementStart(67, "span", 49);
    \u0275\u0275text(68, "Bureau");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 47);
    \u0275\u0275element(70, "span", 50);
    \u0275\u0275elementStart(71, "span", 49);
    \u0275\u0275text(72, "T\xE9l\xE9travail");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 51);
    \u0275\u0275repeaterCreate(74, AttendanceMonthlySummaryComponent_Conditional_16_For_75_Template, 1, 6, "div", 52, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 53)(77, "span", 54);
    \u0275\u0275text(78, "Sem 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 54);
    \u0275\u0275text(80, "Sem 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 54);
    \u0275\u0275text(82, "Sem 3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 54);
    \u0275\u0275text(84, "Sem 4");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 0)(86, "div", 55)(87, "div", 56)(88, "span", 57);
    \u0275\u0275text(89, "policy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "h3", 58)(91, "span", 59);
    \u0275\u0275text(92, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " Politiques RH ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "ul", 60)(95, "li", 61)(96, "span", 62);
    \u0275\u0275text(97, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 49);
    \u0275\u0275text(99, "Les d\xE9clarations doivent \xEAtre soumises au plus tard le ");
    \u0275\u0275elementStart(100, "b");
    \u0275\u0275text(101, "vendredi \xE0 18h");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "li", 61)(104, "span", 62);
    \u0275\u0275text(105, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "p", 49);
    \u0275\u0275text(107, "Le t\xE9l\xE9travail est limit\xE9 \xE0 ");
    \u0275\u0275elementStart(108, "b");
    \u0275\u0275text(109, "2 jours");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, " par semaine selon votre contrat actuel.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "li", 61)(112, "span", 62);
    \u0275\u0275text(113, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p", 49);
    \u0275\u0275text(115, "Toute heure suppl\xE9mentaire doit \xEAtre valid\xE9e par votre manager direct.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "button", 63);
    \u0275\u0275text(117, " Consulter le guide complet ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 43)(119, "h4", 64);
    \u0275\u0275text(120, "Acc\xE8s Rapide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 65)(122, "a", 66)(123, "span", 67);
    \u0275\u0275text(124, "beach_access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span", 68);
    \u0275\u0275text(126, "Poser un cong\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "a", 66)(128, "span", 67);
    \u0275\u0275text(129, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "span", 68);
    \u0275\u0275text(131, "Note de frais");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.summary().daysPresent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r2.summary().totalDays, " jours");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("stroke-dasharray", ctx_r2.summary().presencePercent + ", 100");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.summary().presencePercent, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.summary().daysAbsent);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.summary().pendingCount);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx_r2.weeks());
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.chartHeights());
  }
}
var AttendanceMonthlySummaryComponent = class _AttendanceMonthlySummaryComponent {
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
  currentMonth = signal(
    (/* @__PURE__ */ new Date()).toISOString().slice(0, 7),
    ...ngDevMode ? [{ debugName: "currentMonth" }] : (
      /* istanbul ignore next */
      []
    )
  );
  monthLabel = computed(
    () => {
      const [y, m] = this.currentMonth().split("-").map(Number);
      const d = new Date(y, m - 1, 1);
      return d.toLocaleDateString("fr", { month: "long", year: "numeric" });
    },
    ...ngDevMode ? [{ debugName: "monthLabel" }] : (
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
      const decls = this.monthDeclarations();
      const present = decls.filter((d) => d.status === "PRESENT");
      const totalDays = new Date(Number(this.currentMonth().split("-")[0]), Number(this.currentMonth().split("-")[1]), 0).getDate();
      return {
        daysPresent: present.length,
        daysAbsent: decls.filter((d) => d.status === "ABSENT").length,
        pendingCount: decls.filter((d) => d.validation_status === "EN_ATTENTE").length,
        totalDays,
        presencePercent: totalDays > 0 ? Math.round(present.length / totalDays * 100) : 0
      };
    },
    ...ngDevMode ? [{ debugName: "summary" }] : (
      /* istanbul ignore next */
      []
    )
  );
  weeks = computed(
    () => {
      const [year, month] = this.currentMonth().split("-").map(Number);
      const decls = this.monthDeclarations();
      const weeksData = [];
      const firstDate = new Date(year, month - 1, 1);
      const lastDate = new Date(year, month, 0);
      let weekStart = new Date(firstDate);
      while (weekStart <= lastDate) {
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        if (weekEnd > lastDate)
          weekEnd.setDate(lastDate.getDate());
        const weekDecls = decls.filter((d) => {
          const dDate = new Date(d.date);
          return dDate >= weekStart && dDate <= weekEnd;
        });
        const pending = weekDecls.some((d) => d.validation_status === "EN_ATTENTE");
        const weekNum = Math.ceil((weekStart.getDate() + firstDate.getDay()) / 7);
        weeksData.push({
          label: `Semaine ${weekNum + (firstDate.getDay() > 0 ? 0 : 0)}`,
          range: `${weekStart.getDate()} ${weekStart.toLocaleDateString("fr", { month: "short" })} - ${weekEnd.getDate()} ${weekEnd.toLocaleDateString("fr", { month: "short" })}`,
          status: pending ? "pending" : weekDecls.length > 0 ? "validated" : "empty"
        });
        weekStart.setDate(weekStart.getDate() + 7);
      }
      return weeksData;
    },
    ...ngDevMode ? [{ debugName: "weeks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  chartHeights = computed(
    () => {
      const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
      return dayNames.map((_, i) => {
        const office = 30 + Math.sin(i * 1.2) * 30 + 10;
        return {
          height: office,
          type: i % 3 === 0 ? "remote" : "office"
        };
      });
    },
    ...ngDevMode ? [{ debugName: "chartHeights" }] : (
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
    this.attendanceService.getDeclarations({ date_from: dateFrom, date_to: dateTo }).subscribe({
      next: (decls) => {
        this.declarations.set(decls);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
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
  static \u0275fac = function AttendanceMonthlySummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceMonthlySummaryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceMonthlySummaryComponent, selectors: [["app-attendance-monthly-summary"]], decls: 17, vars: 2, consts: [[1, "space-y-8"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "flex", "gap-3", "mb-1", "text-on-surface-variant", "font-sans", "text-xs", "font-medium"], ["routerLink", "/employee/attendance", 1, "hover:text-primary"], [1, "text-primary", "font-bold"], [1, "font-heading", "text-headline-md", "text-on-surface"], [1, "flex", "items-center", "bg-surface-container", "p-2", "rounded-xl"], [1, "px-4", "py-2", "rounded-lg", "font-sans", "text-sm", "font-medium", "bg-white", "shadow-sm", "text-primary"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "p-4", "animate-pulse"], [1, "h-8", "bg-surface-container", "rounded", "w-12", "mb-2"], [1, "h-4", "bg-surface-container", "rounded", "w-24"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "p-4", "flex", "items-center", "justify-between", "hover:shadow-md", "transition-shadow"], [1, "font-sans", "font-bold", "text-xs", "text-on-surface-variant", "uppercase", "tracking-wider", "mb-2"], [1, "flex", "items-baseline", "gap-2"], [1, "font-heading", "font-bold", "text-headline-md", "text-secondary"], [1, "text-on-surface-variant", "text-sm"], [1, "relative", "w-14", "h-14"], ["viewBox", "0 0 36 36", 1, "w-full", "h-full"], ["d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", "stroke-width", "3", 1, "stroke-surface-container-highest", "fill-none"], ["d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", "stroke-width", "3", 1, "stroke-secondary", "fill-none", "progress-ring__circle"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "font-sans", "font-bold", "text-xs", "text-secondary"], [1, "font-heading", "font-bold", "text-headline-md", "text-error"], [1, "text-on-surface-variant", "text-[10px]", "uppercase", "font-bold", "mt-2", "tracking-tight"], [1, "bg-error-container", "p-3", "rounded-full"], [1, "material-symbols-outlined", "text-error"], [1, "font-heading", "font-bold", "text-headline-md", "text-tertiary"], [1, "bg-tertiary-fixed", "p-3", "rounded-full"], [1, "material-symbols-outlined", "text-tertiary"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "space-y-4"], [1, "flex", "items-center", "justify-between", "px-2"], [1, "font-heading", "font-bold", "text-base", "text-on-surface"], [1, "text-primary", "font-sans", "font-medium", "text-sm", "flex", "items-center", "gap-2", "hover:underline", "cursor-pointer"], [1, "material-symbols-outlined", "text-sm"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "overflow-hidden"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-surface-container-low", "border-b", "border-outline-variant"], [1, "px-6", "py-4", "font-sans", "font-bold", "text-xs", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "font-sans", "font-bold", "text-xs", "text-on-surface-variant", "uppercase", "tracking-wider", "text-right"], [1, "divide-y", "divide-surface-container"], [1, "hover:bg-surface-container-low", "transition-colors", "group"], [1, "bg-white", "border", "border-outline-variant", "rounded-xl", "p-6"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "font-sans", "font-bold", "text-sm", "text-on-surface"], [1, "flex", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "w-3", "h-3", "rounded-full", "bg-primary"], [1, "text-xs", "text-on-surface-variant"], [1, "w-3", "h-3", "rounded-full", "bg-secondary-fixed-dim"], [1, "h-32", "flex", "items-end", "gap-3", "px-3"], [1, "flex-1", "rounded-t-lg", "hover:brightness-110", "cursor-pointer", "transition-all", 3, "bg-primary", "bg-secondary-fixed-dim", "height"], [1, "mt-3", "flex", "justify-between", "px-2", "border-t", "border-outline-variant", "pt-2"], [1, "text-[10px]", "text-outline"], [1, "bg-primary-container/10", "border", "border-primary-container/20", "rounded-xl", "p-6", "relative", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "p-3", "opacity-10"], [1, "material-symbols-outlined", "text-[80px]", "text-primary"], [1, "font-heading", "font-bold", "text-base", "text-primary", "mb-4", "flex", "items-center", "gap-3"], [1, "material-symbols-outlined"], [1, "space-y-4"], [1, "flex", "gap-3"], [1, "material-symbols-outlined", "text-primary", "text-sm", "mt-1"], [1, "mt-8", "w-full", "border", "border-primary", "text-primary", "font-sans", "font-medium", "text-sm", "py-3", "rounded-lg", "hover:bg-primary-container/5", "transition-colors", "cursor-pointer"], [1, "font-sans", "font-bold", "text-xs", "text-on-surface", "uppercase", "tracking-widest", "mb-4"], [1, "grid", "grid-cols-2", "gap-3"], [1, "flex", "flex-col", "items-center", "justify-center", "p-4", "bg-surface-container", "rounded-xl", "hover:bg-surface-container-high", "transition-colors", "cursor-pointer"], [1, "material-symbols-outlined", "text-primary", "mb-2"], [1, "font-sans", "font-medium", "text-xs", "text-center"], [1, "px-6", "py-4"], [1, "font-sans", "font-medium", "text-sm", "text-on-surface"], [1, "font-sans", "text-xs", "text-on-surface-variant"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "bg-secondary-container", "text-on-secondary-container", "text-[11px]", "font-bold", "uppercase"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "bg-tertiary-container", "text-white", "text-[11px]", "font-bold", "uppercase"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "bg-surface-container-high", "text-on-surface-variant", "text-[11px]", "font-bold", "uppercase"], [1, "px-6", "py-4", "text-right"], [1, "material-symbols-outlined", "text-on-surface-variant", "group-hover:text-primary", "transition-colors", "cursor-pointer"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-secondary", "mr-2"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-white", "mr-2"], [1, "flex-1", "rounded-t-lg", "hover:brightness-110", "cursor-pointer", "transition-all"]], template: function AttendanceMonthlySummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "nav", 2)(4, "a", 3);
      \u0275\u0275text(5, "Pr\xE9sences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275text(9, "R\xE9sum\xE9 mensuel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "h2", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14, "Mensuel");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(15, AttendanceMonthlySummaryComponent_Conditional_15_Template, 3, 1, "div", 8)(16, AttendanceMonthlySummaryComponent_Conditional_16_Template, 132, 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("R\xE9capitulatif de ", ctx.monthLabel());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 15 : 16);
    }
  }, dependencies: [RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceMonthlySummaryComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-monthly-summary", standalone: true, imports: [RouterModule], template: `<div class="space-y-8">
  <!-- Page Header -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <nav class="flex gap-3 mb-1 text-on-surface-variant font-sans text-xs font-medium">
        <a routerLink="/employee/attendance" class="hover:text-primary">Pr\xE9sences</a>
        <span>/</span>
        <span class="text-primary font-bold">R\xE9sum\xE9 mensuel</span>
      </nav>
      <h2 class="font-heading text-headline-md text-on-surface">R\xE9capitulatif de {{ monthLabel() }}</h2>
    </div>
    <div class="flex items-center bg-surface-container p-2 rounded-xl">
      <span class="px-4 py-2 rounded-lg font-sans text-sm font-medium bg-white shadow-sm text-primary">Mensuel</span>
    </div>
  </div>

  @if (loading()) {
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      @for (_ of [1,2,3,4]; track _) {
        <div class="bg-white border border-outline-variant rounded-xl p-4 animate-pulse">
          <div class="h-8 bg-surface-container rounded w-12 mb-2"></div>
          <div class="h-4 bg-surface-container rounded w-24"></div>
        </div>
      }
    </div>
  } @else {
    <!-- Metrics Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white border border-outline-variant rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow">
        <div>
          <p class="font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider mb-2">Jours pr\xE9sents</p>
          <div class="flex items-baseline gap-2">
            <span class="font-heading font-bold text-headline-md text-secondary">{{ summary().daysPresent }}</span>
            <span class="text-on-surface-variant text-sm">/ {{ summary().totalDays }} jours</span>
          </div>
        </div>
        <div class="relative w-14 h-14">
          <svg class="w-full h-full" viewBox="0 0 36 36">
            <path class="stroke-surface-container-highest fill-none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke-width="3" />
            <path class="stroke-secondary fill-none progress-ring__circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              [attr.stroke-dasharray]="summary().presencePercent + ', 100'" stroke-width="3" />
          </svg>
          <span class="absolute inset-0 flex items-center justify-center font-sans font-bold text-xs text-secondary">{{ summary().presencePercent }}%</span>
        </div>
      </div>
      <div class="bg-white border border-outline-variant rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow">
        <div>
          <p class="font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider mb-2">Jours absents</p>
          <span class="font-heading font-bold text-headline-md text-error">{{ summary().daysAbsent }}</span>
          <p class="text-on-surface-variant text-[10px] uppercase font-bold mt-2 tracking-tight">Cong\xE9s et absences</p>
        </div>
        <div class="bg-error-container p-3 rounded-full">
          <span class="material-symbols-outlined text-error">warning</span>
        </div>
      </div>
      <div class="bg-white border border-outline-variant rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow">
        <div>
          <p class="font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider mb-2">En attente</p>
          <span class="font-heading font-bold text-headline-md text-tertiary">{{ summary().pendingCount }}</span>
          <p class="text-on-surface-variant text-[10px] uppercase font-bold mt-2 tracking-tight">D\xE9clarations</p>
        </div>
        <div class="bg-tertiary-fixed p-3 rounded-full">
          <span class="material-symbols-outlined text-tertiary">pending_actions</span>
        </div>
      </div>
    </div>

    <!-- Main Content: Bento Style -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Weekly Detail Table (2/3) -->
      <div class="lg:col-span-2 space-y-4">
        <div class="flex items-center justify-between px-2">
          <h3 class="font-heading font-bold text-base text-on-surface">D\xE9tail par semaine</h3>
          <button class="text-primary font-sans font-medium text-sm flex items-center gap-2 hover:underline cursor-pointer">
            <span class="material-symbols-outlined text-sm">download</span>
            Exporter PDF
          </button>
        </div>

        <div class="bg-white border border-outline-variant rounded-xl overflow-hidden">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-container-low border-b border-outline-variant">
                <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">P\xE9riode</th>
                <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider">Statut</th>
                <th class="px-6 py-4 font-sans font-bold text-xs text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-surface-container">
              @for (week of weeks(); track week.label) {
                <tr class="hover:bg-surface-container-low transition-colors group">
                  <td class="px-6 py-4">
                    <p class="font-sans font-medium text-sm text-on-surface">{{ week.label }}</p>
                    <p class="font-sans text-xs text-on-surface-variant">{{ week.range }}</p>
                  </td>
                  <td class="px-6 py-4">
                    @if (week.status === 'validated') {
                      <span class="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase">
                        <span class="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                        Valid\xE9e
                      </span>
                    } @else if (week.status === 'pending') {
                      <span class="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-container text-white text-[11px] font-bold uppercase">
                        <span class="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>
                        En attente
                      </span>
                    } @else {
                      <span class="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[11px] font-bold uppercase">
                        \xC0 compl\xE9ter
                      </span>
                    }
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors cursor-pointer">chevron_right</button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Activity Chart -->
        <div class="bg-white border border-outline-variant rounded-xl p-6">
          <div class="flex items-center justify-between mb-6">
            <h4 class="font-sans font-bold text-sm text-on-surface">R\xE9partition de l'activit\xE9</h4>
            <div class="flex gap-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-primary"></span>
                <span class="text-xs text-on-surface-variant">Bureau</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-secondary-fixed-dim"></span>
                <span class="text-xs text-on-surface-variant">T\xE9l\xE9travail</span>
              </div>
            </div>
          </div>
          <div class="h-32 flex items-end gap-3 px-3">
            @for (h of chartHeights(); track $index) {
              <div class="flex-1 rounded-t-lg hover:brightness-110 cursor-pointer transition-all"
                [class.bg-primary]="h.type === 'office'"
                [class.bg-secondary-fixed-dim]="h.type === 'remote'"
                [style.height]="h.height + '%'">
              </div>
            }
          </div>
          <div class="mt-3 flex justify-between px-2 border-t border-outline-variant pt-2">
            <span class="text-[10px] text-outline">Sem 1</span>
            <span class="text-[10px] text-outline">Sem 2</span>
            <span class="text-[10px] text-outline">Sem 3</span>
            <span class="text-[10px] text-outline">Sem 4</span>
          </div>
        </div>
      </div>

      <!-- Right Widgets (1/3) -->
      <div class="space-y-8">
        <!-- Policy Info Box -->
        <div class="bg-primary-container/10 border border-primary-container/20 rounded-xl p-6 relative overflow-hidden">
          <div class="absolute top-0 right-0 p-3 opacity-10">
            <span class="material-symbols-outlined text-[80px] text-primary">policy</span>
          </div>
          <h3 class="font-heading font-bold text-base text-primary mb-4 flex items-center gap-3">
            <span class="material-symbols-outlined">info</span>
            Politiques RH
          </h3>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
              <p class="text-xs text-on-surface-variant">Les d\xE9clarations doivent \xEAtre soumises au plus tard le <b>vendredi \xE0 18h</b>.</p>
            </li>
            <li class="flex gap-3">
              <span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
              <p class="text-xs text-on-surface-variant">Le t\xE9l\xE9travail est limit\xE9 \xE0 <b>2 jours</b> par semaine selon votre contrat actuel.</p>
            </li>
            <li class="flex gap-3">
              <span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
              <p class="text-xs text-on-surface-variant">Toute heure suppl\xE9mentaire doit \xEAtre valid\xE9e par votre manager direct.</p>
            </li>
          </ul>
          <button class="mt-8 w-full border border-primary text-primary font-sans font-medium text-sm py-3 rounded-lg hover:bg-primary-container/5 transition-colors cursor-pointer">
            Consulter le guide complet
          </button>
        </div>

        <!-- Quick Access -->
        <div class="bg-white border border-outline-variant rounded-xl p-6">
          <h4 class="font-sans font-bold text-xs text-on-surface uppercase tracking-widest mb-4">Acc\xE8s Rapide</h4>
          <div class="grid grid-cols-2 gap-3">
            <a class="flex flex-col items-center justify-center p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-primary mb-2">beach_access</span>
              <span class="font-sans font-medium text-xs text-center">Poser un cong\xE9</span>
            </a>
            <a class="flex flex-col items-center justify-center p-4 bg-surface-container rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-primary mb-2">receipt_long</span>
              <span class="font-sans font-medium text-xs text-center">Note de frais</span>
            </a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceMonthlySummaryComponent, { className: "AttendanceMonthlySummaryComponent", filePath: "src/app/features/attendance/attendance-monthly-summary/attendance-monthly-summary.component.ts", lineNumber: 12 });
})();
export {
  AttendanceMonthlySummaryComponent
};
//# sourceMappingURL=chunk-H5BLQYZ3.js.map
