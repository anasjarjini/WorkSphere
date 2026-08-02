import {
  TaskService
} from "./chunk-PRJJ3FJQ.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  Router,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import {
  DatePipe,
  DecimalPipe
} from "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4
} from "./chunk-ZST2RCVM.js";

// src/app/features/employee/my-tasks/my-tasks.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function MyTasksComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 18);
    \u0275\u0275domListener("click", function MyTasksComponent_For_9_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.selectedStatus.set(s_r2);
      return \u0275\u0275resetView(ctx_r2.currentPage.set(1));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary", ctx_r2.selectedStatus() === s_r2)("text-text-inverse", ctx_r2.selectedStatus() === s_r2)("shadow-sm", ctx_r2.selectedStatus() === s_r2)("bg-surface-bright", ctx_r2.selectedStatus() !== s_r2)("border", ctx_r2.selectedStatus() !== s_r2)("border-border/60", ctx_r2.selectedStatus() !== s_r2)("text-text-secondary", ctx_r2.selectedStatus() !== s_r2)("hover:bg-background-alt", ctx_r2.selectedStatus() !== s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2 === "ALL" ? "Tous" : ctx_r2.getStatusLabel(s_r2), " ");
  }
}
function MyTasksComponent_Conditional_24_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275domElement(1, "div", 21);
    \u0275\u0275domElementStart(2, "div", 22);
    \u0275\u0275domElement(3, "div", 23)(4, "div", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(5, "div", 25);
    \u0275\u0275domElementEnd();
  }
}
function MyTasksComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "div", 19);
    \u0275\u0275repeaterCreate(2, MyTasksComponent_Conditional_24_For_3_Template, 6, 0, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function MyTasksComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 26);
    \u0275\u0275domElement(2, "rect", 27)(3, "line", 28)(4, "line", 29)(5, "line", 30);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(6, "h3", 31);
    \u0275\u0275text(7, "Aucune t\xE2che trouv\xE9e");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 32);
    \u0275\u0275text(9, "Aucune t\xE2che ne correspond \xE0 vos crit\xE8res.");
    \u0275\u0275domElementEnd()();
  }
}
function MyTasksComponent_Conditional_26_For_21_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 61);
    \u0275\u0275domListener("click", function MyTasksComponent_Conditional_26_For_21_Conditional_13_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const task_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewProject(task_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 62);
    \u0275\u0275domElement(2, "path", 63);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const task_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", task_r6.project.name, " ");
  }
}
function MyTasksComponent_Conditional_26_For_21_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 59);
    \u0275\u0275domElement(1, "span", 64);
    \u0275\u0275domElementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const task_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getPriorityColor(task_r6.priority));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getPriorityLabel(task_r6.priority));
  }
}
function MyTasksComponent_Conditional_26_For_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const task_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-error", ctx_r2.isOverdue(task_r6))("text-text-secondary", !ctx_r2.isOverdue(task_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 5, task_r6.due_date, "d MMM"), " ");
  }
}
function MyTasksComponent_Conditional_26_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 50)(1, "td", 51);
    \u0275\u0275domElement(2, "input", 52);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 51)(4, "div", 53)(5, "span", 54);
    \u0275\u0275domListener("click", function MyTasksComponent_Conditional_26_For_21_Template_span_click_5_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewTask(task_r6));
    });
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(7, "td", 55);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 51)(10, "span", 56);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "td", 57);
    \u0275\u0275conditionalCreate(13, MyTasksComponent_Conditional_26_For_21_Conditional_13_Template, 4, 1, "span", 58);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td", 51);
    \u0275\u0275conditionalCreate(15, MyTasksComponent_Conditional_26_For_21_Conditional_15_Template, 4, 3, "div", 59);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "td", 51);
    \u0275\u0275conditionalCreate(17, MyTasksComponent_Conditional_26_For_21_Conditional_17_Template, 3, 8, "span", 60);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-60", task_r6.status === "DONE");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("checked", task_r6.status === "DONE");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("line-through", task_r6.status === "DONE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r6.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r6.reference_code);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusClass(task_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(task_r6.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r6.project ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r6.priority ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r6.due_date ? 17 : -1);
  }
}
function MyTasksComponent_Conditional_26_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 66);
    \u0275\u0275domListener("click", function MyTasksComponent_Conditional_26_For_30_Template_button_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", p_r9 === ctx_r2.currentPage())("text-text-inverse", p_r9 === ctx_r2.currentPage())("border", p_r9 !== ctx_r2.currentPage())("border-border", p_r9 !== ctx_r2.currentPage())("bg-surface-bright", p_r9 !== ctx_r2.currentPage())("text-text-secondary", p_r9 !== ctx_r2.currentPage())("hover:bg-surface-container", p_r9 !== ctx_r2.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9, " ");
  }
}
function MyTasksComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 17)(1, "div", 33)(2, "table", 34)(3, "thead")(4, "tr", 35)(5, "th", 36);
    \u0275\u0275domElement(6, "input", 37);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th", 38);
    \u0275\u0275text(8, "Titre de la t\xE2che");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th", 38);
    \u0275\u0275text(10, "R\xE9f");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th", 38);
    \u0275\u0275text(12, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th", 39);
    \u0275\u0275text(14, "Projet li\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th", 38);
    \u0275\u0275text(16, "Priorit\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "th", 38);
    \u0275\u0275text(18, "\xC9ch\xE9ance");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(19, "tbody", 40);
    \u0275\u0275repeaterCreate(20, MyTasksComponent_Conditional_26_For_21_Template, 18, 13, "tr", 41, _forTrack0);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(22, "div", 42)(23, "p", 43);
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "div", 44)(26, "button", 45);
    \u0275\u0275domListener("click", function MyTasksComponent_Conditional_26_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(27, "svg", 46);
    \u0275\u0275domElement(28, "polyline", 47);
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(29, MyTasksComponent_Conditional_26_For_30_Template, 2, 15, "button", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(31, "button", 45);
    \u0275\u0275domListener("click", function MyTasksComponent_Conditional_26_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(32, "svg", 46);
    \u0275\u0275domElement(33, "polyline", 49);
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r2.paginatedTasks());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" Affichage ", ctx_r2.currentStart(), " \xE0 ", ctx_r2.currentEnd(), " sur ", ctx_r2.filteredTasks().length, " t\xE2che", ctx_r2.filteredTasks().length > 1 ? "s" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.pages());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
var STATUS_LABELS = {
  TODO: "\xC0 faire",
  IN_PROGRESS: "En cours",
  REVIEW: "En r\xE9vision",
  DONE: "Termin\xE9"
};
var PRIORITY_LABELS = {
  LOW: "Faible",
  MEDIUM: "Moyenne",
  HIGH: "Haute",
  CRITICAL: "Critique"
};
var STATUS_CLASSES = {
  TODO: "bg-background-alt text-text-secondary",
  IN_PROGRESS: "bg-primary-100 text-primary",
  REVIEW: "bg-tertiary-light text-warning-dark",
  DONE: "bg-accent-light text-accent-dark"
};
var MyTasksComponent = class _MyTasksComponent {
  authService = inject(AuthService);
  taskService = inject(TaskService);
  router = inject(Router);
  tasks = signal(
    [],
    ...ngDevMode ? [{ debugName: "tasks" }] : (
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
  selectedStatus = signal(
    "ALL",
    ...ngDevMode ? [{ debugName: "selectedStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentPage = signal(
    1,
    ...ngDevMode ? [{ debugName: "currentPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageSize = 5;
  statuses = ["ALL", "TODO", "IN_PROGRESS", "REVIEW", "DONE"];
  filteredTasks = computed(
    () => {
      const list = this.tasks();
      const status = this.selectedStatus();
      if (status === "ALL")
        return list;
      return list.filter((t) => t.status === status);
    },
    ...ngDevMode ? [{ debugName: "filteredTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalPages = computed(
    () => Math.max(1, Math.ceil(this.filteredTasks().length / this.pageSize)),
    ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paginatedTasks = computed(
    () => {
      const start = (this.currentPage() - 1) * this.pageSize;
      return this.filteredTasks().slice(start, start + this.pageSize);
    },
    ...ngDevMode ? [{ debugName: "paginatedTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentStart = computed(
    () => (this.currentPage() - 1) * this.pageSize + 1,
    ...ngDevMode ? [{ debugName: "currentStart" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentEnd = computed(
    () => Math.min(this.currentPage() * this.pageSize, this.filteredTasks().length),
    ...ngDevMode ? [{ debugName: "currentEnd" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pages = computed(
    () => {
      const total = this.totalPages();
      const current = this.currentPage();
      const range = [];
      const start = Math.max(1, current - 1);
      const end = Math.min(total, current + 1);
      for (let i = start; i <= end; i++)
        range.push(i);
      return range;
    },
    ...ngDevMode ? [{ debugName: "pages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  inProgressCount = computed(
    () => this.tasks().filter((t) => t.status === "IN_PROGRESS" || t.status === "REVIEW").length,
    ...ngDevMode ? [{ debugName: "inProgressCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  completedCount = computed(
    () => this.tasks().filter((t) => t.status === "DONE").length,
    ...ngDevMode ? [{ debugName: "completedCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  overdueCount = computed(
    () => this.tasks().filter((t) => t.due_date && new Date(t.due_date) < /* @__PURE__ */ new Date() && t.status !== "DONE").length,
    ...ngDevMode ? [{ debugName: "overdueCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.taskService.getMyTasks().subscribe({
      next: (data) => {
        this.tasks.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  getStatusLabel(status) {
    return STATUS_LABELS[status];
  }
  getStatusClass(status) {
    return STATUS_CLASSES[status];
  }
  getPriorityLabel(priority) {
    return PRIORITY_LABELS[priority || ""] || priority || "\u2014";
  }
  getPriorityColor(priority) {
    switch ((priority || "").toLowerCase()) {
      case "critique":
      case "haute":
      case "high":
      case "critical":
        return "bg-error";
      case "moyenne":
      case "medium":
        return "bg-tertiary";
      case "basse":
      case "low":
        return "bg-secondary";
      default:
        return "bg-text-muted";
    }
  }
  viewTask(task) {
    this.router.navigate([`/employee/tasks/${task.id}`]);
  }
  startTask(task) {
    this.taskService.updateStatus(task.id, "IN_PROGRESS").subscribe(() => {
      this.tasks.update((list) => list.map((t) => t.id === task.id ? __spreadProps(__spreadValues({}, t), { status: "IN_PROGRESS" }) : t));
    });
  }
  submitTask(task) {
    this.taskService.updateStatus(task.id, "REVIEW").subscribe(() => {
      this.tasks.update((list) => list.map((t) => t.id === task.id ? __spreadProps(__spreadValues({}, t), { status: "REVIEW" }) : t));
    });
  }
  isOverdue(task) {
    if (!task.due_date || task.status === "DONE")
      return false;
    return new Date(task.due_date) < /* @__PURE__ */ new Date();
  }
  viewProject(task) {
    if (!task.project)
      return;
    const role = this.authService.currentUser()?.role;
    if (role === "HR_ADMIN") {
      this.router.navigate(["/admin/projects", task.project.id]);
    } else if (role === "MANAGER") {
      this.router.navigate(["/manager/projects", task.project.id]);
    } else {
      this.router.navigate(["/employee/projects", task.project.id]);
    }
  }
  static \u0275fac = function MyTasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyTasksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyTasksComponent, selectors: [["app-my-tasks"]], decls: 27, vars: 1, consts: [[1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "flex", "items-center", "gap-2", "mt-1"], [1, "bg-surface-bright/70", "backdrop-blur-md", "border", "border-border/60", "rounded-xl", "p-4", "flex", "flex-col", "md:flex-row", "gap-4", "items-center", "justify-between", "shadow-sm"], [1, "flex", "flex-wrap", "items-center", "gap-1.5"], [1, "px-4", "py-1.5", "rounded-full", "text-sm", "font-medium", "transition-all", "cursor-pointer", 3, "bg-primary", "text-text-inverse", "shadow-sm", "bg-surface-bright", "border", "border-border/60", "text-text-secondary", "hover:bg-background-alt"], [1, "relative", "w-full", "md:w-56"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-text-muted", "pointer-events-none"], ["x1", "4", "y1", "6", "x2", "20", "y2", "6"], ["x1", "4", "y1", "12", "x2", "16", "y2", "12"], ["x1", "4", "y1", "18", "x2", "10", "y2", "18"], [1, "w-full", "bg-surface-bright", "border", "border-border/60", "rounded-lg", "py-2", "pl-10", "pr-9", "text-sm", "text-text", "appearance-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "pointer-events-none", "text-text-muted"], ["points", "6 9 12 15 18 9"], [1, "bg-surface", "border", "border-border", "rounded-xl", "overflow-hidden", "animate-pulse"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-16", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "bg-surface", "border", "border-border", "rounded-xl", "overflow-hidden", "shadow-sm"], [1, "px-4", "py-1.5", "rounded-full", "text-sm", "font-medium", "transition-all", "cursor-pointer", 3, "click"], [1, "p-5", "space-y-5"], [1, "flex", "items-center", "gap-4"], [1, "w-5", "h-5", "bg-background-alt", "rounded"], [1, "flex-1", "space-y-2"], [1, "h-4", "bg-background-alt", "rounded", "w-2/3"], [1, "h-3", "bg-background-alt", "rounded", "w-1/4"], [1, "h-6", "bg-background-alt", "rounded", "w-16"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-14", "h-14", "text-text-muted", "mb-4"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9"], ["x1", "9", "y1", "13", "x2", "15", "y2", "13"], ["x1", "9", "y1", "17", "x2", "13", "y2", "17"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading", "mb-1"], [1, "text-sm", "text-text-secondary"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-surface-container-low", "border-b", "border-border"], [1, "px-4", "py-3.5", "w-10"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "border-border", "text-primary", "focus:ring-primary/30", "cursor-pointer"], [1, "px-4", "py-3.5", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider"], [1, "px-4", "py-3.5", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider", "hidden", "md:table-cell"], [1, "divide-y", "divide-border"], [1, "hover:bg-surface-container-lowest", "transition-colors", "group", 3, "opacity-60"], [1, "px-4", "py-3.5", "bg-surface-container-low", "border-t", "border-border", "flex", "items-center", "justify-between"], [1, "text-sm", "text-text-muted"], [1, "flex", "items-center", "gap-1"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-border", "bg-surface-bright", "text-text-muted", "hover:bg-surface-container", "transition-colors", "cursor-pointer", "disabled:opacity-30", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["points", "15 18 9 12 15 6"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "text-sm", "font-bold", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-text-inverse", "border", "border-border", "bg-surface-bright", "text-text-secondary", "hover:bg-surface-container"], ["points", "9 18 15 12 9 6"], [1, "hover:bg-surface-container-lowest", "transition-colors", "group"], [1, "px-4", "py-3.5"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "border-border", "text-primary", "focus:ring-primary/30", "cursor-pointer", 3, "checked"], [1, "flex", "flex-col"], [1, "text-sm", "font-semibold", "text-text", "group-hover:text-primary", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-4", "py-3.5", "text-sm", "text-text-muted", "font-mono"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold"], [1, "px-4", "py-3.5", "hidden", "md:table-cell"], [1, "text-sm", "text-primary", "hover:underline", "cursor-pointer", "flex", "items-center", "gap-1"], [1, "flex", "items-center", "gap-1.5"], [1, "text-sm", "font-medium", 3, "text-error", "text-text-secondary"], [1, "text-sm", "text-primary", "hover:underline", "cursor-pointer", "flex", "items-center", "gap-1", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], [1, "w-2", "h-2", "rounded-full"], [1, "text-sm", "font-medium"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "text-sm", "font-bold", "transition-colors", "cursor-pointer", 3, "click"]], template: function MyTasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Mes t\xE2ches");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(5, "div", 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275repeaterCreate(8, MyTasksComponent_For_9_Template, 2, 17, "button", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(11, "svg", 8);
      \u0275\u0275domElement(12, "line", 9)(13, "line", 10)(14, "line", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(15, "select", 12)(16, "option");
      \u0275\u0275text(17, "Trier par : \xC9ch\xE9ance");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "option");
      \u0275\u0275text(19, "Trier par : Priorit\xE9");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "option");
      \u0275\u0275text(21, "Trier par : Projet");
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(22, "svg", 13);
      \u0275\u0275domElement(23, "polyline", 14);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(24, MyTasksComponent_Conditional_24_Template, 4, 1, "div", 15)(25, MyTasksComponent_Conditional_25_Template, 10, 0, "div", 16)(26, MyTasksComponent_Conditional_26_Template, 34, 6, "div", 17);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(16);
      \u0275\u0275conditional(ctx.loading() ? 24 : ctx.filteredTasks().length === 0 ? 25 : 26);
    }
  }, dependencies: [RouterModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyTasksComponent, [{
    type: Component,
    args: [{ selector: "app-my-tasks", standalone: true, imports: [RouterModule, DatePipe, DecimalPipe], template: `<div class="max-w-7xl mx-auto flex flex-col gap-6">

  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <h1 class="font-heading text-2xl font-bold text-text-heading">Mes t\xE2ches</h1>
      <div class="flex items-center gap-2 mt-1">
       
      </div>
    </div>
  </div>

  <!-- Filters -->
  <div class="bg-surface-bright/70 backdrop-blur-md border border-border/60 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
    <div class="flex flex-wrap items-center gap-1.5">
      @for (s of statuses; track s) {
        <button (click)="selectedStatus.set(s); currentPage.set(1)"
          class="px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer"
          [class.bg-primary]="selectedStatus() === s"
          [class.text-text-inverse]="selectedStatus() === s"
          [class.shadow-sm]="selectedStatus() === s"
          [class.bg-surface-bright]="selectedStatus() !== s"
          [class.border]="selectedStatus() !== s"
          [class.border-border/60]="selectedStatus() !== s"
          [class.text-text-secondary]="selectedStatus() !== s"
          [class.hover:bg-background-alt]="selectedStatus() !== s">
          {{ s === 'ALL' ? 'Tous' : getStatusLabel(s) }}
        </button>
      }
    </div>
    <div class="relative w-full md:w-56">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
        <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="18" x2="10" y2="18"/>
      </svg>
      <select class="w-full bg-surface-bright border border-border/60 rounded-lg py-2 pl-10 pr-9 text-sm text-text appearance-none focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all cursor-pointer">
        <option>Trier par : \xC9ch\xE9ance</option>
        <option>Trier par : Priorit\xE9</option>
        <option>Trier par : Projet</option>
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </div>

  <!-- Loading -->
  @if (loading()) {
    <div class="bg-surface border border-border rounded-xl overflow-hidden animate-pulse">
      <div class="p-5 space-y-5">
        @for (_ of [1,2,3]; track _) {
          <div class="flex items-center gap-4">
            <div class="w-5 h-5 bg-background-alt rounded"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-background-alt rounded w-2/3"></div>
              <div class="h-3 bg-background-alt rounded w-1/4"></div>
            </div>
            <div class="h-6 bg-background-alt rounded w-16"></div>
          </div>
        }
      </div>
    </div>
  } @else if (filteredTasks().length === 0) {
    <!-- Empty -->
    <div class="bg-surface border border-border rounded-xl p-16 flex flex-col items-center justify-center text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-14 h-14 text-text-muted mb-4">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>
      </svg>
      <h3 class="font-heading text-lg font-semibold text-text-heading mb-1">Aucune t\xE2che trouv\xE9e</h3>
      <p class="text-sm text-text-secondary">Aucune t\xE2che ne correspond \xE0 vos crit\xE8res.</p>
    </div>
  } @else {
    <!-- Table -->
    <div class="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container-low border-b border-border">
              <th class="px-4 py-3.5 w-10">
                <input type="checkbox" class="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 cursor-pointer" />
              </th>
              <th class="px-4 py-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">Titre de la t\xE2che</th>
              <th class="px-4 py-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">R\xE9f</th>
              <th class="px-4 py-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">Statut</th>
              <th class="px-4 py-3.5 text-xs font-bold text-text-muted uppercase tracking-wider hidden md:table-cell">Projet li\xE9</th>
              <th class="px-4 py-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">Priorit\xE9</th>
              <th class="px-4 py-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">\xC9ch\xE9ance</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            @for (task of paginatedTasks(); track task.id) {
              <tr class="hover:bg-surface-container-lowest transition-colors group"
                [class.opacity-60]="task.status === 'DONE'">
                <td class="px-4 py-3.5">
                  <input type="checkbox" class="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 cursor-pointer"
                    [checked]="task.status === 'DONE'" />
                </td>
                <td class="px-4 py-3.5">
                  <div class="flex flex-col">
                    <span (click)="viewTask(task)" class="text-sm font-semibold text-text group-hover:text-primary transition-colors cursor-pointer"
                      [class.line-through]="task.status === 'DONE'">
                      {{ task.title }}
                    </span>
                  </div>
                </td>
                <td class="px-4 py-3.5 text-sm text-text-muted font-mono">{{ task.reference_code }}</td>
                <td class="px-4 py-3.5">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold" [class]="getStatusClass(task.status)">
                    {{ getStatusLabel(task.status) }}
                  </span>
                </td>
                <td class="px-4 py-3.5 hidden md:table-cell">
                  @if (task.project) {
                    <span (click)="viewProject(task)" class="text-sm text-primary hover:underline cursor-pointer flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                      {{ task.project.name }}
                    </span>
                  }
                </td>
                <td class="px-4 py-3.5">
                  @if (task.priority) {
                    <div class="flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full" [class]="getPriorityColor(task.priority)"></span>
                      <span class="text-sm text-text-secondary">{{ getPriorityLabel(task.priority) }}</span>
                    </div>
                  }
                </td>
                <td class="px-4 py-3.5">
                  @if (task.due_date) {
                    <span class="text-sm font-medium"
                      [class.text-error]="isOverdue(task)"
                      [class.text-text-secondary]="!isOverdue(task)">
                      {{ task.due_date | date:'d MMM' }}
                    </span>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <!-- Pagination -->
      <div class="px-4 py-3.5 bg-surface-container-low border-t border-border flex items-center justify-between">
        <p class="text-sm text-text-muted">
          Affichage {{ currentStart() }} \xE0 {{ currentEnd() }} sur {{ filteredTasks().length }} t\xE2che{{ filteredTasks().length > 1 ? 's' : '' }}
        </p>
        <div class="flex items-center gap-1">
          <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() === 1"
            class="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-surface-bright text-text-muted hover:bg-surface-container transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          @for (p of pages(); track p) {
            <button (click)="goToPage(p)"
              class="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-colors cursor-pointer"
              [class.bg-primary]="p === currentPage()"
              [class.text-text-inverse]="p === currentPage()"
              [class.border]="p !== currentPage()"
              [class.border-border]="p !== currentPage()"
              [class.bg-surface-bright]="p !== currentPage()"
              [class.text-text-secondary]="p !== currentPage()"
              [class.hover:bg-surface-container]="p !== currentPage()">
              {{ p }}
            </button>
          }
          <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()"
            class="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-surface-bright text-text-muted hover:bg-surface-container transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </div>

  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyTasksComponent, { className: "MyTasksComponent", filePath: "src/app/features/employee/my-tasks/my-tasks.component.ts", lineNumber: 29 });
})();
export {
  MyTasksComponent
};
//# sourceMappingURL=chunk-DJSZQ2ZU.js.map
