import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import {
  ProjectService
} from "./chunk-BEYW5LAA.js";
import {
  TaskService
} from "./chunk-ZNZLQX3N.js";
import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DGTBVCJC.js";
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/manager/dashboard/dashboard.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.id;
function ManagerDashboardComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 15);
    \u0275\u0275element(2, "div", 16)(3, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 18)(5, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function ManagerDashboardComponent_Conditional_18_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 20);
    \u0275\u0275element(2, "div", 21)(3, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function ManagerDashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, ManagerDashboardComponent_Conditional_18_For_2_Template, 6, 0, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9);
    \u0275\u0275element(5, "div", 10);
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275repeaterCreate(7, ManagerDashboardComponent_Conditional_18_For_8_Template, 5, 0, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275element(10, "div", 13)(11, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_56_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const proj_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2022 ", proj_r1.deadline, " ");
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_56_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 58)(2, "div")(3, "h4", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 51);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, ManagerDashboardComponent_Conditional_19_Conditional_56_For_2_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 61);
    \u0275\u0275element(11, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const proj_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(proj_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", proj_r1.team, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(proj_r1.deadline ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", proj_r1.progress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", proj_r1.progress, "%");
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ManagerDashboardComponent_Conditional_19_Conditional_56_For_2_Template, 12, 6, "div", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const progressList_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275repeater(progressList_r2);
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 63);
    \u0275\u0275text(2, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 64);
    \u0275\u0275text(4, "Aucun projet pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(emp_r3.department.name);
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275element(1, "span", 79);
    \u0275\u0275text(2, " Actif ");
    \u0275\u0275elementEnd();
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275element(1, "span", 80);
    \u0275\u0275text(2, " Inactif ");
    \u0275\u0275elementEnd();
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 69)(1, "td", 70)(2, "div", 71)(3, "div", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 74);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 70);
    \u0275\u0275conditionalCreate(10, ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Conditional_10_Template, 2, 1, "span", 75)(11, ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Conditional_11_Template, 2, 0, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 70);
    \u0275\u0275conditionalCreate(13, ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Conditional_13_Template, 3, 0, "span", 77)(14, ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Conditional_14_Template, 3, 0, "span", 78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emp_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getInitials(emp_r3.first_name, emp_r3.last_name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", emp_r3.first_name, " ", emp_r3.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r3.job_title || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(emp_r3.department ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(emp_r3.status === "ACTIVE" ? 13 : 14);
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "table", 65)(2, "thead", 66)(3, "tr")(4, "th", 67);
    \u0275\u0275text(5, "Membre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 67);
    \u0275\u0275text(7, "Poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 67);
    \u0275\u0275text(9, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 67);
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody", 68);
    \u0275\u0275repeaterCreate(13, ManagerDashboardComponent_Conditional_19_Conditional_89_For_14_Template, 15, 6, "tr", 69, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const members_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(members_r5);
  }
}
function ManagerDashboardComponent_Conditional_19_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 63);
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 64);
    \u0275\u0275text(4, "Aucun membre dans votre \xE9quipe");
    \u0275\u0275elementEnd()();
  }
}
function ManagerDashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 24)(2, "div", 15)(3, "div", 25)(4, "span", 5);
    \u0275\u0275text(5, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 26)(7, "span", 27);
    \u0275\u0275text(8, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 28);
    \u0275\u0275text(11, "Membres d'\xC9quipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h3", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 24)(15, "div", 15)(16, "div", 30)(17, "span", 5);
    \u0275\u0275text(18, "folder_shared");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 31);
    \u0275\u0275text(20, "En cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 28);
    \u0275\u0275text(22, "Projets Actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 29);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 24)(26, "div", 15)(27, "div", 32)(28, "span", 5);
    \u0275\u0275text(29, "assignment_late");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "span", 33);
    \u0275\u0275text(31, "Important");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 28);
    \u0275\u0275text(33, "T\xE2ches en Attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h3", 29);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 24)(37, "div", 15)(38, "div", 34)(39, "span", 5);
    \u0275\u0275text(40, "priority_high");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "span", 35)(42, "span", 27);
    \u0275\u0275text(43, "report");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Critique ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "p", 28);
    \u0275\u0275text(46, "T\xE2ches en Retard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "h3", 29);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 36)(50, "div", 37)(51, "div", 38)(52, "h2", 39);
    \u0275\u0275text(53, "Progr\xE8s des Projets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "a", 40);
    \u0275\u0275text(55, "Voir tout");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(56, ManagerDashboardComponent_Conditional_19_Conditional_56_Template, 3, 0, "div", 11)(57, ManagerDashboardComponent_Conditional_19_Conditional_57_Template, 5, 0, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 42)(59, "h2", 43);
    \u0275\u0275text(60, "\xC9tat des T\xE2ches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 44);
    \u0275\u0275element(62, "div", 45);
    \u0275\u0275elementStart(63, "div", 46)(64, "span", 29);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 47);
    \u0275\u0275text(67, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 48)(69, "div", 49);
    \u0275\u0275element(70, "span", 50);
    \u0275\u0275elementStart(71, "span", 51);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 49);
    \u0275\u0275element(74, "span", 52);
    \u0275\u0275elementStart(75, "span", 51);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 49);
    \u0275\u0275element(78, "span", 53);
    \u0275\u0275elementStart(79, "span", 51);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 49);
    \u0275\u0275element(82, "span", 54);
    \u0275\u0275elementStart(83, "span", 51);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 55)(86, "div", 56)(87, "h2", 39);
    \u0275\u0275text(88, "Activit\xE9 de l'\xE9quipe r\xE9cente");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(89, ManagerDashboardComponent_Conditional_19_Conditional_89_Template, 15, 0, "div", 57)(90, ManagerDashboardComponent_Conditional_19_Conditional_90_Template, 5, 0, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const members_r5 = \u0275\u0275readContextLet(0);
    const progressList_r2 = \u0275\u0275readContextLet(1);
    const totalTeam_r6 = \u0275\u0275readContextLet(2);
    const activeProj_r7 = \u0275\u0275readContextLet(3);
    const pending_r8 = \u0275\u0275readContextLet(4);
    const overdue_r9 = \u0275\u0275readContextLet(5);
    const taskPcts_r10 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" +", members_r5.length > 5 ? 2 : 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totalTeam_r6);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(activeProj_r7);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(pending_r8);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(overdue_r9);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(progressList_r2.length > 0 ? 56 : 57);
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("background", ctx_r3.donutGradient());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.totalTaskCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\xC0 faire (", taskPcts_r10.todo, "%)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("En cours (", taskPcts_r10.inProgress, "%)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("R\xE9vision (", taskPcts_r10.review, "%)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Termin\xE9 (", taskPcts_r10.done, "%)");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(members_r5.length > 0 ? 89 : 90);
  }
}
var ManagerDashboardComponent = class _ManagerDashboardComponent {
  authService = inject(AuthService);
  employeeService = inject(EmployeeService);
  projectService = inject(ProjectService);
  taskService = inject(TaskService);
  user = this.authService.currentUser;
  userName = computed(
    () => this.authService.displayName(this.user()),
    ...ngDevMode ? [{ debugName: "userName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadedTeams = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadedTeams" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadedProjects = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadedProjects" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadedTasks = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadedTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  teamMembers = signal(
    [],
    ...ngDevMode ? [{ debugName: "teamMembers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projects = signal(
    [],
    ...ngDevMode ? [{ debugName: "projects" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tasks = signal(
    [],
    ...ngDevMode ? [{ debugName: "tasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  teamCount = computed(
    () => this.teamMembers().length,
    ...ngDevMode ? [{ debugName: "teamCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeProjects = computed(
    () => this.projects().filter((p) => p.status === "EN_COURS").length,
    ...ngDevMode ? [{ debugName: "activeProjects" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pendingTasks = computed(
    () => this.projects().reduce((sum, p) => sum + (p.tasks_count || 0), 0),
    ...ngDevMode ? [{ debugName: "pendingTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  overdueTasks = computed(
    () => this.projects().filter((p) => {
      if (!p.end_date || p.status === "TERMINE")
        return false;
      return new Date(p.end_date) < /* @__PURE__ */ new Date();
    }).length,
    ...ngDevMode ? [{ debugName: "overdueTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  todoTasks = computed(
    () => this.tasks().filter((t) => t.status === "TODO").length,
    ...ngDevMode ? [{ debugName: "todoTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inProgressTasks = computed(
    () => this.tasks().filter((t) => t.status === "IN_PROGRESS").length,
    ...ngDevMode ? [{ debugName: "inProgressTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reviewTasks = computed(
    () => this.tasks().filter((t) => t.status === "REVIEW").length,
    ...ngDevMode ? [{ debugName: "reviewTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  doneTasks = computed(
    () => this.tasks().filter((t) => t.status === "DONE").length,
    ...ngDevMode ? [{ debugName: "doneTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalTaskCount = computed(
    () => this.tasks().length,
    ...ngDevMode ? [{ debugName: "totalTaskCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  taskPct = computed(
    () => {
      const total = this.totalTaskCount();
      if (total === 0)
        return { todo: 0, inProgress: 0, review: 0, done: 0 };
      return {
        todo: Math.round(this.todoTasks() / total * 100),
        inProgress: Math.round(this.inProgressTasks() / total * 100),
        review: Math.round(this.reviewTasks() / total * 100),
        done: Math.round(this.doneTasks() / total * 100)
      };
    },
    ...ngDevMode ? [{ debugName: "taskPct" }] : (
      /* istanbul ignore next */
      []
    )
  );
  donutGradient = computed(
    () => {
      const p = this.taskPct();
      const colors = ["#7c3aed", "#0d9488", "#f59e0b", "#ef4444"];
      const segments = [p.todo, p.inProgress, p.review, p.done];
      const stops = [];
      let current = 0;
      for (let i = 0; i < segments.length; i++) {
        if (segments[i] === 0)
          continue;
        const start = current;
        const end = current + segments[i];
        stops.push(`${colors[i]} ${start}% ${end}%`);
        current = end;
      }
      if (stops.length === 0)
        return "conic-gradient(#e8dfee 0% 100%)";
      return `conic-gradient(${stops.join(", ")})`;
    },
    ...ngDevMode ? [{ debugName: "donutGradient" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projectProgress = computed(
    () => this.projects().slice(0, 3).map((p) => ({
      name: p.name,
      progress: p.progress_percentage ?? 0,
      team: p.creator?.first_name ?? "\xC9quipe",
      deadline: p.end_date ? new Date(p.end_date).toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) : ""
    })),
    ...ngDevMode ? [{ debugName: "projectProgress" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadTeam();
    this.loadProjects();
    this.loadTasks();
  }
  checkLoaded() {
    if (this.loadedTeams() && this.loadedProjects() && this.loadedTasks()) {
      this.loading.set(false);
    }
  }
  getInitials(first, last) {
    return `${(first?.[0] || "").toUpperCase()}${(last?.[0] || "").toUpperCase()}`;
  }
  loadTeam() {
    this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
      next: (response) => {
        this.teamMembers.set(response.data.filter((e) => e.role !== "HR_ADMIN"));
        this.loadedTeams.set(true);
        this.checkLoaded();
      },
      error: () => {
        this.teamMembers.set([]);
        this.loadedTeams.set(true);
        this.checkLoaded();
      }
    });
  }
  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
        this.loadedProjects.set(true);
        this.checkLoaded();
      },
      error: () => {
        this.projects.set([]);
        this.loadedProjects.set(true);
        this.checkLoaded();
      }
    });
  }
  loadTasks() {
    this.taskService.getManagerCreatedTasks().subscribe({
      next: (tasks) => {
        this.tasks.set(tasks);
        this.loadedTasks.set(true);
        this.checkLoaded();
      },
      error: () => {
        this.tasks.set([]);
        this.loadedTasks.set(true);
        this.checkLoaded();
      }
    });
  }
  static \u0275fac = function ManagerDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerDashboardComponent, selectors: [["app-manager-dashboard"]], decls: 20, vars: 9, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-7xl", "mx-auto"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "text-3xl", "font-heading", "font-bold", "text-text-heading"], [1, "text-base", "text-text-secondary"], ["routerLink", "/manager/projects/new", 1, "bg-primary", "text-text-inverse", "px-6", "py-3", "rounded-lg", "text-sm", "font-semibold", "flex", "items-center", "gap-3", "hover:opacity-90", "transition-all", "cursor-pointer"], [1, "material-symbols-outlined"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "bg-surface", "p-6", "rounded-xl", "border", "border-border", "animate-pulse"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-6"], [1, "lg:col-span-8", "bg-surface", "p-8", "rounded-xl", "border", "border-border", "animate-pulse"], [1, "h-5", "w-40", "bg-border", "rounded", "mb-8"], [1, "space-y-8"], [1, "lg:col-span-4", "bg-surface", "p-8", "rounded-xl", "border", "border-border", "animate-pulse"], [1, "h-5", "w-32", "bg-border", "rounded", "mb-8"], [1, "h-48", "w-48", "bg-border", "rounded-full", "mx-auto"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "h-10", "w-10", "bg-border", "rounded-lg"], [1, "h-4", "w-12", "bg-border", "rounded"], [1, "h-3", "w-24", "bg-border", "rounded", "mb-2"], [1, "h-7", "w-10", "bg-border", "rounded"], [1, "flex", "justify-between", "mb-3"], [1, "h-4", "w-48", "bg-border", "rounded"], [1, "h-4", "w-8", "bg-border", "rounded"], [1, "h-2", "bg-border", "rounded"], [1, "bg-surface", "p-6", "rounded-xl", "border", "border-border", "hover:shadow-md", "transition-shadow"], [1, "p-3", "bg-primary-50", "rounded-lg", "text-primary"], [1, "text-success", "text-xs", "font-bold", "flex", "items-center", "gap-1"], [1, "material-symbols-outlined", "text-base"], [1, "text-text-secondary", "text-sm", "font-medium", "mb-1"], [1, "text-2xl", "font-heading", "font-bold", "text-text-heading"], [1, "p-3", "bg-secondary-container", "rounded-lg", "text-on-secondary-container"], [1, "text-text-secondary", "text-xs", "font-medium"], [1, "p-3", "bg-surface-container-highest", "rounded-lg", "text-text-heading"], [1, "text-error", "text-xs", "font-bold"], [1, "p-3", "bg-error-light", "rounded-lg", "text-error"], [1, "text-error", "text-xs", "font-bold", "flex", "items-center", "gap-1"], [1, "grid", "grid-cols-12", "gap-6"], [1, "col-span-12", "lg:col-span-8", "bg-surface", "p-8", "rounded-xl", "border", "border-border"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-xl", "font-heading", "font-semibold", "text-text-heading"], ["routerLink", "/manager/projects", 1, "text-primary", "text-sm", "font-bold", "hover:underline", "cursor-pointer"], [1, "flex", "flex-col", "items-center", "py-12", "text-center"], [1, "col-span-12", "lg:col-span-4", "bg-surface", "p-8", "rounded-xl", "border", "border-border", "flex", "flex-col"], [1, "text-xl", "font-heading", "font-semibold", "text-text-heading", "mb-8"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center"], [1, "w-48", "h-48", "rounded-full", "relative"], [1, "flex", "flex-col", "items-center", "-mt-36", "mb-16"], [1, "text-xs", "text-text-secondary"], [1, "grid", "grid-cols-2", "gap-4", "mt-8"], [1, "flex", "items-center", "gap-2"], [1, "w-3", "h-3", "rounded-full", 2, "background", "#7c3aed"], [1, "text-sm", "text-text-secondary"], [1, "w-3", "h-3", "rounded-full", 2, "background", "#0d9488"], [1, "w-3", "h-3", "rounded-full", 2, "background", "#f59e0b"], [1, "w-3", "h-3", "rounded-full", 2, "background", "#ef4444"], [1, "col-span-12", "bg-surface", "rounded-xl", "border", "border-border", "overflow-hidden"], [1, "p-8", "border-b", "border-border"], [1, "overflow-x-auto"], [1, "flex", "justify-between", "items-end", "mb-3"], [1, "text-sm", "font-bold", "text-text-heading"], [1, "text-sm", "font-bold", "text-primary"], [1, "h-2", "bg-border", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-primary", "rounded-full", "transition-all", "duration-1000"], [1, "material-symbols-outlined", "text-5xl", "text-text-muted", "mb-3"], [1, "text-text-secondary"], [1, "w-full", "text-left"], [1, "bg-surface-container-low", "border-b", "border-border"], [1, "px-8", "py-4", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider"], [1, "divide-y", "divide-border"], [1, "hover:bg-surface-container-low", "transition-colors"], [1, "px-8", "py-4"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-primary-50", "text-primary", "font-semibold", "text-xs", "flex", "items-center", "justify-center", "shrink-0"], [1, "text-base", "font-medium", "text-text-heading"], [1, "px-8", "py-4", "text-base", "text-text-secondary"], [1, "px-3", "py-1", "bg-primary-50", "text-primary", "rounded-full", "text-xs", "font-bold"], [1, "text-text-muted"], [1, "flex", "items-center", "gap-1.5", "text-sm", "font-medium", "text-success"], [1, "flex", "items-center", "gap-1.5", "text-sm", "font-medium", "text-warning"], [1, "w-2", "h-2", "rounded-full", "bg-success"], [1, "w-2", "h-2", "rounded-full", "bg-warning"]], template: function ManagerDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275declareLet(0)(1)(2)(3)(4)(5)(6);
      \u0275\u0275elementStart(7, "div", 0)(8, "div", 1)(9, "div")(10, "h1", 2);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 3);
      \u0275\u0275text(13, "Voici l'\xE9tat actuel de votre \xE9quipe et de vos projets pour aujourd'hui.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "a", 4)(15, "span", 5);
      \u0275\u0275text(16, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Nouveau Projet ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, ManagerDashboardComponent_Conditional_18_Template, 12, 2)(19, ManagerDashboardComponent_Conditional_19_Template, 91, 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const isLoading_r11 = ctx.loading();
      \u0275\u0275storeLet(ctx.teamMembers());
      ctx.projects();
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.projectProgress());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.teamCount());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.activeProjects());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.pendingTasks());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.overdueTasks());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.taskPct());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Bonjour, ", ctx.userName());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(isLoading_r11 ? 18 : 19);
    }
  }, dependencies: [RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-manager-dashboard", standalone: true, imports: [RouterModule, DatePipe], template: `@let isLoading = loading();
@let members = teamMembers();
@let projs = projects();
@let progressList = projectProgress();
@let totalTeam = teamCount();
@let activeProj = activeProjects();
@let pending = pendingTasks();
@let overdue = overdueTasks();
@let taskPcts = taskPct();

<div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">

  <!-- Header & Welcome -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <h1 class="text-3xl font-heading font-bold text-text-heading">Bonjour, {{ userName() }}</h1>
      <p class="text-base text-text-secondary">Voici l'\xE9tat actuel de votre \xE9quipe et de vos projets pour aujourd'hui.</p>
    </div>
    <a routerLink="/manager/projects/new" class="bg-primary text-text-inverse px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-3 hover:opacity-90 transition-all cursor-pointer">
      <span class="material-symbols-outlined">add</span>
      Nouveau Projet
    </a>
  </div>

  @if (isLoading) {
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      @for (_ of [1,2,3,4]; track _) {
        <div class="bg-surface p-6 rounded-xl border border-border animate-pulse">
          <div class="flex justify-between items-start mb-4">
            <div class="h-10 w-10 bg-border rounded-lg"></div>
            <div class="h-4 w-12 bg-border rounded"></div>
          </div>
          <div class="h-3 w-24 bg-border rounded mb-2"></div>
          <div class="h-7 w-10 bg-border rounded"></div>
        </div>
      }
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div class="lg:col-span-8 bg-surface p-8 rounded-xl border border-border animate-pulse">
        <div class="h-5 w-40 bg-border rounded mb-8"></div>
        <div class="space-y-8">
          @for (_ of [1,2,3]; track _) {
            <div>
              <div class="flex justify-between mb-3">
                <div class="h-4 w-48 bg-border rounded"></div>
                <div class="h-4 w-8 bg-border rounded"></div>
              </div>
              <div class="h-2 bg-border rounded"></div>
            </div>
          }
        </div>
      </div>
      <div class="lg:col-span-4 bg-surface p-8 rounded-xl border border-border animate-pulse">
        <div class="h-5 w-32 bg-border rounded mb-8"></div>
        <div class="h-48 w-48 bg-border rounded-full mx-auto"></div>
      </div>
    </div>
  } @else {
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-surface p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-4">
          <div class="p-3 bg-primary-50 rounded-lg text-primary">
            <span class="material-symbols-outlined">group</span>
          </div>
          <span class="text-success text-xs font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-base">trending_up</span>
            +{{ members.length > 5 ? 2 : 1 }}
          </span>
        </div>
        <p class="text-text-secondary text-sm font-medium mb-1">Membres d'\xC9quipe</p>
        <h3 class="text-2xl font-heading font-bold text-text-heading">{{ totalTeam }}</h3>
      </div>

      <div class="bg-surface p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-4">
          <div class="p-3 bg-secondary-container rounded-lg text-on-secondary-container">
            <span class="material-symbols-outlined">folder_shared</span>
          </div>
          <span class="text-text-secondary text-xs font-medium">En cours</span>
        </div>
        <p class="text-text-secondary text-sm font-medium mb-1">Projets Actifs</p>
        <h3 class="text-2xl font-heading font-bold text-text-heading">{{ activeProj }}</h3>
      </div>

      <div class="bg-surface p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-4">
          <div class="p-3 bg-surface-container-highest rounded-lg text-text-heading">
            <span class="material-symbols-outlined">assignment_late</span>
          </div>
          <span class="text-error text-xs font-bold">Important</span>
        </div>
        <p class="text-text-secondary text-sm font-medium mb-1">T\xE2ches en Attente</p>
        <h3 class="text-2xl font-heading font-bold text-text-heading">{{ pending }}</h3>
      </div>

      <div class="bg-surface p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-4">
          <div class="p-3 bg-error-light rounded-lg text-error">
            <span class="material-symbols-outlined">priority_high</span>
          </div>
          <span class="text-error text-xs font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-base">report</span>
            Critique
          </span>
        </div>
        <p class="text-text-secondary text-sm font-medium mb-1">T\xE2ches en Retard</p>
        <h3 class="text-2xl font-heading font-bold text-text-heading">{{ overdue }}</h3>
      </div>
    </div>

    <!-- Bento Content Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Project Progress -->
      <div class="col-span-12 lg:col-span-8 bg-surface p-8 rounded-xl border border-border">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-heading font-semibold text-text-heading">Progr\xE8s des Projets</h2>
          <a routerLink="/manager/projects" class="text-primary text-sm font-bold hover:underline cursor-pointer">Voir tout</a>
        </div>
        @if (progressList.length > 0) {
          <div class="space-y-8">
            @for (proj of progressList; track proj.name) {
              <div>
                <div class="flex justify-between items-end mb-3">
                  <div>
                    <h4 class="text-sm font-bold text-text-heading">{{ proj.name }}</h4>
                    <p class="text-sm text-text-secondary">{{ proj.team }} @if (proj.deadline) { \u2022 {{ proj.deadline }} }</p>
                  </div>
                  <span class="text-sm font-bold text-primary">{{ proj.progress }}%</span>
                </div>
                <div class="h-2 bg-border rounded-full overflow-hidden">
                  <div class="h-full bg-primary rounded-full transition-all duration-1000" [style.width.%]="proj.progress"></div>
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="flex flex-col items-center py-12 text-center">
            <span class="material-symbols-outlined text-5xl text-text-muted mb-3">folder_open</span>
            <p class="text-text-secondary">Aucun projet pour le moment</p>
          </div>
        }
      </div>

      <!-- Task Status Distribution -->
      <div class="col-span-12 lg:col-span-4 bg-surface p-8 rounded-xl border border-border flex flex-col">
        <h2 class="text-xl font-heading font-semibold text-text-heading mb-8">\xC9tat des T\xE2ches</h2>
        <div class="flex-1 flex flex-col items-center justify-center">
          <div class="w-48 h-48 rounded-full relative"
               [style.background]="donutGradient()">
          </div>
          <div class="flex flex-col items-center -mt-36 mb-16">
            <span class="text-2xl font-heading font-bold text-text-heading">{{ totalTaskCount() }}</span>
            <span class="text-xs text-text-secondary">Total</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full" style="background: #7c3aed"></span>
            <span class="text-sm text-text-secondary">\xC0 faire ({{ taskPcts.todo }}%)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full" style="background: #0d9488"></span>
            <span class="text-sm text-text-secondary">En cours ({{ taskPcts.inProgress }}%)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full" style="background: #f59e0b"></span>
            <span class="text-sm text-text-secondary">R\xE9vision ({{ taskPcts.review }}%)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full" style="background: #ef4444"></span>
            <span class="text-sm text-text-secondary">Termin\xE9 ({{ taskPcts.done }}%)</span>
          </div>
        </div>
      </div>

      <!-- Recent Team Activity -->
      <div class="col-span-12 bg-surface rounded-xl border border-border overflow-hidden">
        <div class="p-8 border-b border-border">
          <h2 class="text-xl font-heading font-semibold text-text-heading">Activit\xE9 de l'\xE9quipe r\xE9cente</h2>
        </div>
        @if (members.length > 0) {
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-surface-container-low border-b border-border">
                <tr>
                  <th class="px-8 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Membre</th>
                  <th class="px-8 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Poste</th>
                  <th class="px-8 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">D\xE9partement</th>
                  <th class="px-8 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                @for (emp of members; track emp.id) {
                  <tr class="hover:bg-surface-container-low transition-colors">
                    <td class="px-8 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-primary-50 text-primary font-semibold text-xs flex items-center justify-center shrink-0">
                          {{ getInitials(emp.first_name, emp.last_name) }}
                        </div>
                        <span class="text-base font-medium text-text-heading">{{ emp.first_name }} {{ emp.last_name }}</span>
                      </div>
                    </td>
                    <td class="px-8 py-4 text-base text-text-secondary">{{ emp.job_title || '\u2014' }}</td>
                    <td class="px-8 py-4">
                      @if (emp.department) {
                        <span class="px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-bold">{{ emp.department.name }}</span>
                      } @else {
                        <span class="text-text-muted">\u2014</span>
                      }
                    </td>
                    <td class="px-8 py-4">
                      @if (emp.status === 'ACTIVE') {
                        <span class="flex items-center gap-1.5 text-sm font-medium text-success">
                          <span class="w-2 h-2 rounded-full bg-success"></span>
                          Actif
                        </span>
                      } @else {
                        <span class="flex items-center gap-1.5 text-sm font-medium text-warning">
                          <span class="w-2 h-2 rounded-full bg-warning"></span>
                          Inactif
                        </span>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        } @else {
          <div class="flex flex-col items-center py-12 text-center">
            <span class="material-symbols-outlined text-5xl text-text-muted mb-3">group_off</span>
            <p class="text-text-secondary">Aucun membre dans votre \xE9quipe</p>
          </div>
        }
      </div>
    </div>
  }
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerDashboardComponent, { className: "ManagerDashboardComponent", filePath: "src/app/features/manager/dashboard/dashboard.component.ts", lineNumber: 18 });
})();
export {
  ManagerDashboardComponent
};
//# sourceMappingURL=chunk-MLHJZLHG.js.map
