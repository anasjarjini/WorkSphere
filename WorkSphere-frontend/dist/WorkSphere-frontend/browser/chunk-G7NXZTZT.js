import {
  AbsenceService
} from "./chunk-6BD4SRHK.js";
import {
  AttendanceDeclarationService
} from "./chunk-2PL4LXLU.js";
import {
  EmployeeService
} from "./chunk-EAQSU6LC.js";
import {
  DatePipe
} from "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZST2RCVM.js";

// src/app/features/attendance/attendance-status-badge/attendance-status-badge.component.ts
function AttendanceStatusBadgeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label(), " ");
  }
}
var AttendanceStatusBadgeComponent = class _AttendanceStatusBadgeComponent {
  status = input(
    null,
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  validationStatus = input(
    null,
    ...ngDevMode ? [{ debugName: "validationStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isOnLeave = input(
    false,
    ...ngDevMode ? [{ debugName: "isOnLeave" }] : (
      /* istanbul ignore next */
      []
    )
  );
  size = input(
    "sm",
    ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showLabel = input(
    true,
    ...ngDevMode ? [{ debugName: "showLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  todayStatus = computed(
    () => {
      if (this.isOnLeave())
        return "on_leave";
      if (!this.status())
        return "not_declared";
      if (this.status() === "ABSENT")
        return "absent";
      if (this.status() === "PRESENT" && this.validationStatus() === "VALIDEE")
        return "present_validated";
      if (this.status() === "PRESENT" && this.validationStatus() === "EN_ATTENTE")
        return "present_pending";
      if (this.status() === "PRESENT" && this.validationStatus() === "REJETEE")
        return "present_pending";
      return "not_declared";
    },
    ...ngDevMode ? [{ debugName: "todayStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  label = computed(
    () => {
      switch (this.todayStatus()) {
        case "on_leave":
          return "En cong\xE9";
        case "present_validated":
          return "Pr\xE9sent";
        case "present_pending":
          return "Pr\xE9sent (en attente)";
        case "absent":
          return "Absent";
        case "not_declared":
          return "Non d\xE9clar\xE9";
      }
    },
    ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dotClass = computed(
    () => {
      const base = "w-1.5 h-1.5 rounded-full shrink-0";
      switch (this.todayStatus()) {
        case "on_leave":
          return `${base} bg-info`;
        case "present_validated":
          return `${base} bg-success`;
        case "present_pending":
          return `${base} bg-text-muted`;
        case "absent":
          return `${base} bg-warning`;
        case "not_declared":
          return `${base} bg-text-muted/40`;
      }
    },
    ...ngDevMode ? [{ debugName: "dotClass" }] : (
      /* istanbul ignore next */
      []
    )
  );
  badgeClass = computed(
    () => {
      const base = "inline-flex items-center gap-1.5 text-xs font-medium rounded-full";
      const sizeClass = this.size() === "sm" ? "px-2.5 py-1" : "px-3 py-1.5";
      switch (this.todayStatus()) {
        case "on_leave":
          return `${base} ${sizeClass} bg-info-light text-info`;
        case "present_validated":
          return `${base} ${sizeClass} bg-success-light text-success-dark`;
        case "present_pending":
          return `${base} ${sizeClass} bg-background-alt text-text-muted`;
        case "absent":
          return `${base} ${sizeClass} bg-warning-light text-warning-dark`;
        case "not_declared":
          return `${base} ${sizeClass} bg-background-alt text-text-muted/60`;
      }
    },
    ...ngDevMode ? [{ debugName: "badgeClass" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function AttendanceStatusBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceStatusBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceStatusBadgeComponent, selectors: [["app-attendance-status-badge"]], inputs: { status: [1, "status"], validationStatus: [1, "validationStatus"], isOnLeave: [1, "isOnLeave"], size: [1, "size"], showLabel: [1, "showLabel"] }, decls: 3, vars: 5, template: function AttendanceStatusBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span");
      \u0275\u0275domElement(1, "span");
      \u0275\u0275conditionalCreate(2, AttendanceStatusBadgeComponent_Conditional_2_Template, 1, 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.badgeClass());
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.dotClass());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showLabel() ? 2 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceStatusBadgeComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-status-badge", standalone: true, template: '<span [class]="badgeClass()">\n  <span [class]="dotClass()"></span>\n  @if (showLabel()) {\n    {{ label() }}\n  }\n</span>\n' }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], validationStatus: [{ type: Input, args: [{ isSignal: true, alias: "validationStatus", required: false }] }], isOnLeave: [{ type: Input, args: [{ isSignal: true, alias: "isOnLeave", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], showLabel: [{ type: Input, args: [{ isSignal: true, alias: "showLabel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceStatusBadgeComponent, { className: "AttendanceStatusBadgeComponent", filePath: "src/app/features/attendance/attendance-status-badge/attendance-status-badge.component.ts", lineNumber: 11 });
})();

// src/app/features/attendance/team-attendance-today/team-attendance-today.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.employee.id;
function TeamAttendanceTodayComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function TeamAttendanceTodayComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, TeamAttendanceTodayComponent_Conditional_14_For_2_Template, 1, 0, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 53);
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-attendance-status-badge", 56);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("status", item_r1.declaration.status)("validationStatus", item_r1.declaration.validation_status)("isOnLeave", item_r1.isOnLeave);
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-attendance-status-badge", 56);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("status", null)("validationStatus", null)("isOnLeave", item_r1.isOnLeave);
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58)(1, "span", 63);
    \u0275\u0275text(2, "apartment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bureau ");
    \u0275\u0275elementEnd();
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61)(1, "span", 63);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Valider ");
    \u0275\u0275elementEnd();
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TeamAttendanceTodayComponent_Conditional_15_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 27)(1, "td", 48)(2, "div", 49)(3, "div", 50)(4, "div", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_6_Template, 1, 0, "span", 52)(7, TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_7_Template, 1, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "p", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 48);
    \u0275\u0275conditionalCreate(14, TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_14_Template, 1, 3, "app-attendance-status-badge", 56)(15, TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_15_Template, 1, 3, "app-attendance-status-badge", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 57);
    \u0275\u0275conditionalCreate(17, TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_17_Template, 4, 0, "span", 58)(18, TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_18_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 57);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 60);
    \u0275\u0275conditionalCreate(22, TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_22_Template, 4, 0, "a", 61)(23, TeamAttendanceTodayComponent_Conditional_15_For_52_Conditional_23_Template, 2, 0, "span", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.initials(item_r1.employee.first_name, item_r1.employee.last_name));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.declaration?.status === "PRESENT" ? 6 : item_r1.declaration?.status === "ABSENT" ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", item_r1.employee.first_name, " ", item_r1.employee.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.employee.job_title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r1.declaration ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r1.declaration ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.declaration?.hours_worked ? item_r1.declaration.hours_worked + "h" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r1.declaration?.validation_status === "EN_ATTENTE" ? 22 : 23);
  }
}
function TeamAttendanceTodayComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6, "Pr\xE9sents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 16)(13, "span", 12);
    \u0275\u0275text(14, "schedule");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 13);
    \u0275\u0275text(16, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 14);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 10)(20, "div", 17)(21, "span", 12);
    \u0275\u0275text(22, "event_busy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 13);
    \u0275\u0275text(24, "Absents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 10)(28, "div", 18)(29, "span", 12);
    \u0275\u0275text(30, "help");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p", 13);
    \u0275\u0275text(32, "Non d\xE9clar\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 14);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 19)(36, "div", 20)(37, "table", 21)(38, "thead", 22)(39, "tr", 23)(40, "th", 24);
    \u0275\u0275text(41, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 24);
    \u0275\u0275text(43, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 24);
    \u0275\u0275text(45, "Lieu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 24);
    \u0275\u0275text(47, "Heures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 25);
    \u0275\u0275text(49, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody", 26);
    \u0275\u0275repeaterCreate(51, TeamAttendanceTodayComponent_Conditional_15_For_52_Template, 24, 9, "tr", 27, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 28)(54, "div", 29)(55, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 31);
    \u0275\u0275element(57, "path", 32)(58, "path", 33)(59, "path", 34)(60, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(61, "div", 36)(62, "span", 37);
    \u0275\u0275text(63, "Carte des \xE9quipes (Bureau central)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 38)(65, "span", 39);
    \u0275\u0275element(66, "span", 40);
    \u0275\u0275text(67, " Pr\xE9sent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 39);
    \u0275\u0275element(69, "span", 41);
    \u0275\u0275text(70, " En attente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 39);
    \u0275\u0275element(72, "span", 42);
    \u0275\u0275text(73, " Absent ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 43)(75, "span", 44);
    \u0275\u0275text(76, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div")(78, "h3", 45);
    \u0275\u0275text(79, "Performance de l'\xE9quipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 46);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "a", 47);
    \u0275\u0275text(83, " Voir Analytics ");
    \u0275\u0275elementStart(84, "span", 5);
    \u0275\u0275text(85, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.counts().present, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.counts().total);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.counts().pending);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.counts().absent);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.counts().notDeclared);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.teamStatus());
    \u0275\u0275advance(30);
    \u0275\u0275textInterpolate1("", ctx_r1.counts().rate, "% de pr\xE9sence aujourd'hui");
  }
}
var TeamAttendanceTodayComponent = class _TeamAttendanceTodayComponent {
  attendanceService = inject(AttendanceDeclarationService);
  employeeService = inject(EmployeeService);
  absenceService = inject(AbsenceService);
  todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  teamMembers = signal(
    [],
    ...ngDevMode ? [{ debugName: "teamMembers" }] : (
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
  teamStatus = computed(
    () => {
      const members = this.teamMembers();
      const todayDecls = this.todayDeclarations();
      const onLeave = this.onLeaveIds();
      return members.map((m) => ({
        employee: m,
        declaration: todayDecls.find((d) => d.user_id === m.id) ?? null,
        isOnLeave: onLeave.has(m.id)
      }));
    },
    ...ngDevMode ? [{ debugName: "teamStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  counts = computed(
    () => {
      const decls = this.todayDeclarations();
      const members = this.teamMembers();
      const leave = members.filter((m) => this.onLeaveIds().has(m.id)).length;
      const present = decls.filter((d) => d.status === "PRESENT").length;
      const pending = decls.filter((d) => d.validation_status === "EN_ATTENTE").length;
      const absent = decls.filter((d) => d.status === "ABSENT").length;
      return {
        present,
        pending,
        absent,
        leave,
        notDeclared: Math.max(0, members.length - decls.length - leave),
        total: members.length,
        rate: members.length > 0 ? Math.round(present / members.length * 100) : 0
      };
    },
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadTeam();
    this.loadToday();
    this.loadLeaves();
  }
  loadLeaves() {
    this.absenceService.getOnLeaveToday(this.todayStr).subscribe({
      next: (ids) => this.onLeaveIds.set(new Set(ids))
    });
  }
  loadTeam() {
    this.employeeService.getManagerTeam().subscribe({
      next: (res) => this.teamMembers.set(res.data)
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
  static \u0275fac = function TeamAttendanceTodayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamAttendanceTodayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamAttendanceTodayComponent, selectors: [["app-team-attendance-today"]], decls: 16, vars: 7, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-4"], [1, "font-label-md", "text-label-md", "text-on-surface-variant"], [1, "flex", "gap-3"], [1, "px-4", "py-2.5", "bg-surface", "border", "border-outline-variant", "text-on-surface", "rounded-lg", "font-label-md", "text-label-md", "hover:bg-surface-container-low", "transition-colors", "inline-flex", "items-center", "gap-2", "cursor-pointer"], [1, "material-symbols-outlined", "text-[18px]"], [1, "px-4", "py-2.5", "bg-primary", "text-on-primary", "rounded-lg", "font-label-md", "text-label-md", "hover:opacity-90", "transition-opacity", "inline-flex", "items-center", "gap-2", "cursor-pointer"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "animate-pulse", "space-y-4"], [1, "h-10", "bg-surface-container-high", "rounded"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-5"], [1, "w-12", "h-12", "rounded-lg", "bg-secondary-container/30", "text-secondary", "flex", "items-center", "justify-center", "mb-4"], [1, "material-symbols-outlined"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant", "uppercase", "tracking-wider", "mb-1"], [1, "font-heading", "text-headline-sm", "font-bold", "text-on-surface"], [1, "text-on-surface-variant", "font-label-md", "text-label-md"], [1, "w-12", "h-12", "rounded-lg", "bg-primary-container/30", "text-primary", "flex", "items-center", "justify-center", "mb-4"], [1, "w-12", "h-12", "rounded-lg", "bg-error-container/30", "text-error", "flex", "items-center", "justify-center", "mb-4"], [1, "w-12", "h-12", "rounded-lg", "bg-surface-variant", "text-on-surface-variant", "flex", "items-center", "justify-center", "mb-4"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full", "border-collapse"], [1, "bg-surface-container-lowest"], [1, "border-b", "border-outline-variant"], [1, "px-6", "py-4", "text-left", "font-label-md", "text-[11px]", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "text-right", "font-label-md", "text-[11px]", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "divide-y", "divide-outline-variant"], [1, "hover:bg-surface-container-lowest", "transition-colors"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-4"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "overflow-hidden", "lg:col-span-2"], [1, "h-52", "relative", "bg-surface-container-low"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "absolute", "inset-0", "w-full", "h-full", "opacity-10", "text-primary"], ["d", "M1 6v16l6 3 6-3 6 3 4-2V6l-4 2-6-3-6 3-4-2z"], ["d", "M7 8v16"], ["d", "M13 5v16"], ["d", "M19 7v16"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "font-label-md", "text-label-md", "text-on-surface-variant", "bg-surface", "px-4", "py-2", "rounded-lg", "shadow-sm"], [1, "p-4", "border-t", "border-outline-variant", "flex", "flex-wrap", "items-center", "gap-3"], [1, "inline-flex", "items-center", "gap-1.5", "font-label-sm", "text-label-sm", "text-on-surface-variant", "bg-surface-container-low", "px-3", "py-1.5", "rounded-lg"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-secondary"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-primary"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-error"], [1, "bg-primary-container", "text-on-primary-container", "rounded-xl", "p-6", "relative", "overflow-hidden", "flex", "flex-col", "justify-between"], [1, "material-symbols-outlined", "absolute", "right-4", "top-4", "text-4xl", "opacity-30"], [1, "font-heading", "text-lg", "font-bold", "mb-2"], [1, "font-body-md", "text-body-md", "opacity-90"], ["routerLink", "/manager/dashboard", 1, "mt-6", "inline-flex", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "bg-surface", "text-primary", "rounded-full", "font-label-md", "text-label-md", "font-semibold", "hover:opacity-90", "transition-opacity", "cursor-pointer", "w-fit"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "relative"], [1, "w-10", "h-10", "rounded-full", "bg-primary-container/30", "text-primary", "flex", "items-center", "justify-center", "font-bold", "text-xs", "shrink-0"], [1, "absolute", "bottom-0", "right-0", "w-3", "h-3", "bg-secondary", "border-2", "border-surface", "rounded-full", "status-pulse"], [1, "absolute", "bottom-0", "right-0", "w-3", "h-3", "bg-error", "border-2", "border-surface", "rounded-full"], [1, "font-body-md", "text-body-md", "text-on-surface", "font-medium"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant"], ["size", "sm", 3, "status", "validationStatus", "isOnLeave"], [1, "px-6", "py-4", "font-body-sm", "text-body-sm", "text-on-surface-variant"], [1, "inline-flex", "items-center", "gap-1.5"], [1, "text-on-surface-variant/50"], [1, "px-6", "py-4", "text-right"], ["routerLink", "/manager/attendance/validation", 1, "inline-flex", "items-center", "gap-1.5", "px-4", "py-2", "bg-primary", "text-on-primary", "rounded-lg", "font-label-sm", "text-label-sm", "hover:opacity-90", "transition-opacity", "cursor-pointer"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant/50"], [1, "material-symbols-outlined", "text-[16px]"]], template: function TeamAttendanceTodayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "button", 4)(7, "span", 5);
      \u0275\u0275text(8, "filter_list");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Filtrer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 6)(11, "span", 5);
      \u0275\u0275text(12, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " Exporter Rapport ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(14, TeamAttendanceTodayComponent_Conditional_14_Template, 3, 1, "div", 7)(15, TeamAttendanceTodayComponent_Conditional_15_Template, 86, 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(4, 2, ctx.todayStr, "fullDate", "", "fr"));
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.loading() && ctx.teamMembers().length === 0 ? 14 : 15);
    }
  }, dependencies: [AttendanceStatusBadgeComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamAttendanceTodayComponent, [{
    type: Component,
    args: [{ selector: "app-team-attendance-today", standalone: true, imports: [DatePipe, AttendanceStatusBadgeComponent], template: `<div class="flex flex-col gap-6">
  <!-- Sub Header -->
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <p class="font-label-md text-label-md text-on-surface-variant">{{ todayStr | date:'fullDate':'':'fr' }}</p>
    <div class="flex gap-3">
      <button class="px-4 py-2.5 bg-surface border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors inline-flex items-center gap-2 cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">filter_list</span>
        Filtrer
      </button>
      <button class="px-4 py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity inline-flex items-center gap-2 cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">download</span>
        Exporter Rapport
      </button>
    </div>
  </div>

  @if (loading() && teamMembers().length === 0) {
    <div class="bg-surface border border-outline-variant rounded-xl p-6 animate-pulse space-y-4">
      @for (_ of [1,2,3]; track _) { <div class="h-10 bg-surface-container-high rounded"></div> }
    </div>
  } @else {
    <!-- Summary Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-surface border border-outline-variant rounded-xl p-5">
        <div class="w-12 h-12 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center mb-4">
          <span class="material-symbols-outlined">check_circle</span>
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Pr\xE9sents</p>
        <p class="font-heading text-headline-sm font-bold text-on-surface">{{ counts().present }} <span class="text-on-surface-variant font-label-md text-label-md">/ {{ counts().total }}</span></p>
      </div>
      <div class="bg-surface border border-outline-variant rounded-xl p-5">
        <div class="w-12 h-12 rounded-lg bg-primary-container/30 text-primary flex items-center justify-center mb-4">
          <span class="material-symbols-outlined">schedule</span>
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">En attente</p>
        <p class="font-heading text-headline-sm font-bold text-on-surface">{{ counts().pending }}</p>
      </div>
      <div class="bg-surface border border-outline-variant rounded-xl p-5">
        <div class="w-12 h-12 rounded-lg bg-error-container/30 text-error flex items-center justify-center mb-4">
          <span class="material-symbols-outlined">event_busy</span>
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Absents</p>
        <p class="font-heading text-headline-sm font-bold text-on-surface">{{ counts().absent }}</p>
      </div>
      <div class="bg-surface border border-outline-variant rounded-xl p-5">
        <div class="w-12 h-12 rounded-lg bg-surface-variant text-on-surface-variant flex items-center justify-center mb-4">
          <span class="material-symbols-outlined">help</span>
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Non d\xE9clar\xE9s</p>
        <p class="font-heading text-headline-sm font-bold text-on-surface">{{ counts().notDeclared }}</p>
      </div>
    </div>

    <!-- Attendance Table -->
    <div class="bg-surface border border-outline-variant rounded-xl shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead class="bg-surface-container-lowest">
            <tr class="border-b border-outline-variant">
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Employ\xE9</th>
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Statut</th>
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Lieu</th>
              <th class="px-6 py-4 text-left font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Heures</th>
              <th class="px-6 py-4 text-right font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant">
            @for (item of teamStatus(); track item.employee.id) {
              <tr class="hover:bg-surface-container-lowest transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="relative">
                      <div class="w-10 h-10 rounded-full bg-primary-container/30 text-primary flex items-center justify-center font-bold text-xs shrink-0">{{ initials(item.employee.first_name, item.employee.last_name) }}</div>
                      @if (item.declaration?.status === 'PRESENT') {
                        <span class="absolute bottom-0 right-0 w-3 h-3 bg-secondary border-2 border-surface rounded-full status-pulse"></span>
                      } @else if (item.declaration?.status === 'ABSENT') {
                        <span class="absolute bottom-0 right-0 w-3 h-3 bg-error border-2 border-surface rounded-full"></span>
                      }
                    </div>
                    <div>
                      <p class="font-body-md text-body-md text-on-surface font-medium">{{ item.employee.first_name }} {{ item.employee.last_name }}</p>
                      <p class="font-body-sm text-body-sm text-on-surface-variant">{{ item.employee.job_title }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  @if (item.declaration) {
                    <app-attendance-status-badge [status]="item.declaration.status" [validationStatus]="item.declaration.validation_status" [isOnLeave]="item.isOnLeave" size="sm" />
                  } @else {
                    <app-attendance-status-badge [status]="null" [validationStatus]="null" [isOnLeave]="item.isOnLeave" size="sm" />
                  }
                </td>
                <td class="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">
                  @if (item.declaration) {
                    <span class="inline-flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-[16px]">apartment</span>
                      Bureau
                    </span>
                  } @else {
                    <span class="text-on-surface-variant/50">\u2014</span>
                  }
                </td>
                <td class="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">{{ item.declaration?.hours_worked ? item.declaration.hours_worked + 'h' : '\u2014' }}</td>
                <td class="px-6 py-4 text-right">
                  @if (item.declaration?.validation_status === 'EN_ATTENTE') {
                    <a routerLink="/manager/attendance/validation"
                      class="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity cursor-pointer">
                      <span class="material-symbols-outlined text-[16px]">check</span>
                      Valider
                    </a>
                  } @else {
                    <span class="font-label-sm text-label-sm text-on-surface-variant/50">\u2014</span>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- Bottom Cards -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Map / Legend Card -->
      <div class="bg-surface border border-outline-variant rounded-xl overflow-hidden lg:col-span-2">
        <div class="h-52 relative bg-surface-container-low">
          <svg class="absolute inset-0 w-full h-full opacity-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 6v16l6 3 6-3 6 3 4-2V6l-4 2-6-3-6 3-4-2z"/>
            <path d="M7 8v16"/><path d="M13 5v16"/><path d="M19 7v16"/>
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="font-label-md text-label-md text-on-surface-variant bg-surface px-4 py-2 rounded-lg shadow-sm">Carte des \xE9quipes (Bureau central)</span>
          </div>
        </div>
        <div class="p-4 border-t border-outline-variant flex flex-wrap items-center gap-3">
          <span class="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
            <span class="w-2.5 h-2.5 rounded-full bg-secondary"></span> Pr\xE9sent
          </span>
          <span class="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
            <span class="w-2.5 h-2.5 rounded-full bg-primary"></span> En attente
          </span>
          <span class="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
            <span class="w-2.5 h-2.5 rounded-full bg-error"></span> Absent
          </span>
        </div>
      </div>
      <!-- Performance Card -->
      <div class="bg-primary-container text-on-primary-container rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
        <span class="material-symbols-outlined absolute right-4 top-4 text-4xl opacity-30">bolt</span>
        <div>
          <h3 class="font-heading text-lg font-bold mb-2">Performance de l'\xE9quipe</h3>
          <p class="font-body-md text-body-md opacity-90">{{ counts().rate }}% de pr\xE9sence aujourd'hui</p>
        </div>
        <a routerLink="/manager/dashboard" class="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-surface text-primary rounded-full font-label-md text-label-md font-semibold hover:opacity-90 transition-opacity cursor-pointer w-fit">
          Voir Analytics
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
      </div>
    </div>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamAttendanceTodayComponent, { className: "TeamAttendanceTodayComponent", filePath: "src/app/features/attendance/team-attendance-today/team-attendance-today.component.ts", lineNumber: 16 });
})();
export {
  TeamAttendanceTodayComponent
};
//# sourceMappingURL=chunk-G7NXZTZT.js.map
