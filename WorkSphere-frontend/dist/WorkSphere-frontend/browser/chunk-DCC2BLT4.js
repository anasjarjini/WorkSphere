import {
  ProjectService
} from "./chunk-RUGM4DEW.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  Router,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZST2RCVM.js";

// src/app/features/projects/project-list/project-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _forTrack0 = ($index, $item) => $item.id;
function ProjectListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 19);
    \u0275\u0275domListener("click", function ProjectListComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newProject());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 20);
    \u0275\u0275domElement(2, "line", 21)(3, "line", 22);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4, " Nouveau projet ");
    \u0275\u0275domElementEnd();
  }
}
function ProjectListComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 23);
    \u0275\u0275domListener("click", function ProjectListComponent_For_16_Template_button_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedStatus.set(s_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary", ctx_r1.selectedStatus() === s_r4)("text-text-inverse", ctx_r1.selectedStatus() === s_r4)("shadow-sm", ctx_r1.selectedStatus() === s_r4)("bg-surface-bright", ctx_r1.selectedStatus() !== s_r4)("border", ctx_r1.selectedStatus() !== s_r4)("border-border/60", ctx_r1.selectedStatus() !== s_r4)("text-text-secondary", ctx_r1.selectedStatus() !== s_r4)("hover:bg-background-alt", ctx_r1.selectedStatus() !== s_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r4 === "ALL" ? "Tous" : ctx_r1.getStatusLabel(s_r4), " ");
  }
}
function ProjectListComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24);
    \u0275\u0275domElement(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "div", 28);
    \u0275\u0275domElementStart(5, "div", 29);
    \u0275\u0275domElement(6, "div", 30)(7, "div", 30);
    \u0275\u0275domElementEnd()();
  }
}
function ProjectListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, ProjectListComponent_Conditional_29_For_2_Template, 8, 0, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ProjectListComponent_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 36);
    \u0275\u0275domListener("click", function ProjectListComponent_Conditional_30_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newProject());
    });
    \u0275\u0275text(1, " Cr\xE9er un projet ");
    \u0275\u0275domElementEnd();
  }
}
function ProjectListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 31);
    \u0275\u0275domElement(2, "path", 32);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "h3", 33);
    \u0275\u0275text(4, "Aucun projet trouv\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 34);
    \u0275\u0275text(6, "Commencez par cr\xE9er un nouveau projet.");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, ProjectListComponent_Conditional_30_Conditional_7_Template, 2, 0, "button", 35);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.isManagerOrAdmin() ? 7 : -1);
  }
}
function ProjectListComponent_Conditional_31_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const project_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r7.description);
  }
}
function ProjectListComponent_Conditional_31_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 48);
    \u0275\u0275domElement(2, "polyline", 49)(3, "polyline", 50)(4, "line", 51)(5, "line", 52);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const project_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", project_r7.priority, " ");
  }
}
function ProjectListComponent_Conditional_31_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 48);
    \u0275\u0275domElement(2, "rect", 53)(3, "line", 54)(4, "line", 55)(5, "line", 56);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const project_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", project_r7.tasks_count, " t\xE2che", project_r7.tasks_count > 1 ? "s" : "", " ");
  }
}
function ProjectListComponent_Conditional_31_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const project_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r7.start_date);
  }
}
function ProjectListComponent_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 38);
    \u0275\u0275domListener("click", function ProjectListComponent_Conditional_31_For_2_Template_div_click_0_listener() {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewProject(project_r7));
    });
    \u0275\u0275domElementStart(1, "div", 39)(2, "div", 40)(3, "p", 41);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h3", 42);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(9, ProjectListComponent_Conditional_31_For_2_Conditional_9_Template, 2, 1, "p", 44);
    \u0275\u0275domElementStart(10, "div", 45)(11, "div", 46);
    \u0275\u0275conditionalCreate(12, ProjectListComponent_Conditional_31_For_2_Conditional_12_Template, 7, 1, "span", 47);
    \u0275\u0275conditionalCreate(13, ProjectListComponent_Conditional_31_For_2_Conditional_13_Template, 7, 2, "span", 47);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(14, ProjectListComponent_Conditional_31_For_2_Conditional_14_Template, 2, 1, "span");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r7.reference_code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r7.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(project_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(project_r7.status), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r7.description ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(project_r7.priority ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r7.tasks_count !== void 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r7.start_date ? 14 : -1);
  }
}
function ProjectListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, ProjectListComponent_Conditional_31_For_2_Template, 15, 9, "div", 37, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredProjects());
  }
}
var STATUS_LABELS = {
  PLANIFICATION: "Planification",
  EN_COURS: "En cours",
  EN_PAUSE: "En pause",
  TERMINE: "Termin\xE9"
};
var STATUS_CLASSES = {
  PLANIFICATION: "bg-accent-light text-accent-dark border-accent/20",
  EN_COURS: "bg-info-light text-info-dark border-info/20",
  EN_PAUSE: "bg-warning-light text-warning-dark border-warning/20",
  TERMINE: "bg-success-light text-success-dark border-success/20"
};
var ProjectListComponent = class _ProjectListComponent {
  projectService = inject(ProjectService);
  authService = inject(AuthService);
  router = inject(Router);
  user = this.authService.currentUser;
  projects = signal(
    [],
    ...ngDevMode ? [{ debugName: "projects" }] : (
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
  isManagerOrAdmin = computed(
    () => {
      const role = this.user()?.role;
      return role === "MANAGER" || role === "HR_ADMIN";
    },
    ...ngDevMode ? [{ debugName: "isManagerOrAdmin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredProjects = computed(
    () => {
      const list = this.projects();
      const status = this.selectedStatus();
      if (status === "ALL")
        return list;
      return list.filter((p) => p.status === status);
    },
    ...ngDevMode ? [{ debugName: "filteredProjects" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statuses = ["ALL", "PLANIFICATION", "EN_COURS", "EN_PAUSE", "TERMINE"];
  constructor() {
    this.loadProjects();
  }
  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects.set(data);
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
  newProject() {
    const role = this.user()?.role;
    const base = role === "HR_ADMIN" ? "/admin" : "/manager";
    this.router.navigate([`${base}/projects/new`]);
  }
  viewProject(project) {
    const role = this.user()?.role;
    const base = role === "HR_ADMIN" ? "/admin" : "/manager";
    this.router.navigate([`${base}/projects/${project.id}`]);
  }
  static \u0275fac = function ProjectListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectListComponent, selectors: [["app-project-list"]], decls: 32, vars: 2, consts: [[1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-4"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "flex", "items-center", "gap-2", "bg-primary", "text-text-inverse", "px-5", "py-2.5", "rounded-xl", "text-sm", "font-bold", "shadow-lg", "shadow-primary/20", "hover:opacity-90", "transition-all", "cursor-pointer", "shrink-0"], [1, "bg-surface-bright/70", "backdrop-blur-md", "border", "border-border/60", "rounded-xl", "p-4", "flex", "flex-wrap", "items-center", "gap-4", "shadow-sm"], [1, "flex-1", "min-w-[200px]", "relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-text-muted", "pointer-events-none"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Rechercher un projet...", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-surface-bright", "border", "border-border/60", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted/60", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all"], [1, "flex", "items-center", "gap-2", "overflow-x-auto", "pb-1", "md:pb-0"], [1, "px-4", "py-1.5", "rounded-lg", "text-sm", "font-medium", "whitespace-nowrap", "transition-all", "cursor-pointer", 3, "bg-primary", "text-text-inverse", "shadow-sm", "bg-surface-bright", "border", "border-border/60", "text-text-secondary", "hover:bg-background-alt"], [1, "relative"], [1, "pl-4", "pr-9", "py-2", "bg-surface-bright", "border", "border-border/60", "rounded-lg", "text-sm", "text-text", "appearance-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "pointer-events-none", "text-text-muted"], ["points", "6 9 12 15 18 9"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-16", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "flex", "items-center", "gap-2", "bg-primary", "text-text-inverse", "px-5", "py-2.5", "rounded-xl", "text-sm", "font-bold", "shadow-lg", "shadow-primary/20", "hover:opacity-90", "transition-all", "cursor-pointer", "shrink-0", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "px-4", "py-1.5", "rounded-lg", "text-sm", "font-medium", "whitespace-nowrap", "transition-all", "cursor-pointer", 3, "click"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-5", "animate-pulse"], [1, "h-4", "bg-background-alt", "rounded", "w-1/3", "mb-3"], [1, "h-5", "bg-background-alt", "rounded", "w-3/4", "mb-3"], [1, "h-4", "bg-background-alt", "rounded", "w-full", "mb-2"], [1, "h-4", "bg-background-alt", "rounded", "w-2/3", "mb-4"], [1, "flex", "justify-between"], [1, "h-4", "bg-background-alt", "rounded", "w-1/4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-14", "h-14", "text-text-muted", "mb-4"], ["d", "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading", "mb-1"], [1, "text-sm", "text-text-secondary", "mb-6"], [1, "bg-primary", "text-text-inverse", "px-5", "py-2.5", "rounded-lg", "text-sm", "font-bold", "hover:opacity-90", "transition-all", "cursor-pointer"], [1, "bg-primary", "text-text-inverse", "px-5", "py-2.5", "rounded-lg", "text-sm", "font-bold", "hover:opacity-90", "transition-all", "cursor-pointer", 3, "click"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-5", "shadow-sm", "hover:shadow-lg", "hover:-translate-y-0.5", "transition-all", "duration-200", "cursor-pointer", "flex", "flex-col", "gap-4", "group"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-5", "shadow-sm", "hover:shadow-lg", "hover:-translate-y-0.5", "transition-all", "duration-200", "cursor-pointer", "flex", "flex-col", "gap-4", "group", 3, "click"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-primary"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading", "group-hover:text-primary", "transition-colors", "mt-0.5", "truncate"], [1, "shrink-0", "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full", "border"], [1, "text-sm", "text-text-secondary", "line-clamp-2"], [1, "flex", "items-center", "justify-between", "text-xs", "text-text-secondary", "pt-3", "mt-auto", "border-t", "border-border/50"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5", "text-text-muted"], ["points", "15 3 21 3 21 9"], ["points", "9 21 3 21 3 15"], ["x1", "21", "y1", "3", "x2", "14", "y2", "10"], ["x1", "3", "y1", "21", "x2", "10", "y2", "14"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9"], ["x1", "9", "y1", "13", "x2", "15", "y2", "13"], ["x1", "9", "y1", "17", "x2", "13", "y2", "17"]], template: function ProjectListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Projets");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE9rez et suivez l'avancement de vos projets RH");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(7, ProjectListComponent_Conditional_7_Template, 5, 0, "button", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5)(9, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(10, "svg", 7);
      \u0275\u0275domElement(11, "circle", 8)(12, "line", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElement(13, "input", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "div", 11);
      \u0275\u0275repeaterCreate(15, ProjectListComponent_For_16_Template, 2, 17, "button", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "div", 13)(18, "select", 14)(19, "option");
      \u0275\u0275text(20, "Toutes les priorit\xE9s");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "option");
      \u0275\u0275text(22, "Haute");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "option");
      \u0275\u0275text(24, "Moyenne");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "option");
      \u0275\u0275text(26, "Basse");
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(27, "svg", 15);
      \u0275\u0275domElement(28, "polyline", 16);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(29, ProjectListComponent_Conditional_29_Template, 3, 1, "div", 17)(30, ProjectListComponent_Conditional_30_Template, 8, 1, "div", 18)(31, ProjectListComponent_Conditional_31_Template, 3, 0, "div", 17);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isManagerOrAdmin() ? 7 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.loading() ? 29 : ctx.filteredProjects().length === 0 ? 30 : 31);
    }
  }, dependencies: [RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectListComponent, [{
    type: Component,
    args: [{ selector: "app-project-list", standalone: true, imports: [RouterModule], template: `<div class="max-w-7xl mx-auto flex flex-col gap-6">

  <!-- Page Header -->
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <h1 class="font-heading text-2xl font-bold text-text-heading">Projets</h1>
      <p class="text-sm text-text-secondary mt-1">G\xE9rez et suivez l'avancement de vos projets RH</p>
    </div>
    @if (isManagerOrAdmin()) {
      <button (click)="newProject()"
        class="flex items-center gap-2 bg-primary text-text-inverse px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all cursor-pointer shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Nouveau projet
      </button>
    }
  </div>

  <!-- Glassmorphic Filter Bar -->
  <div class="bg-surface-bright/70 backdrop-blur-md border border-border/60 rounded-xl p-4 flex flex-wrap items-center gap-4 shadow-sm">
    <div class="flex-1 min-w-[200px] relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input type="text" placeholder="Rechercher un projet..."
        class="w-full pl-10 pr-4 py-2 bg-surface-bright border border-border/60 rounded-lg text-sm text-text placeholder:text-text-muted/60 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
    </div>
    <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
      @for (s of statuses; track s) {
        <button (click)="selectedStatus.set(s)"
          class="px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all cursor-pointer"
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
    <div class="relative">
      <select class="pl-4 pr-9 py-2 bg-surface-bright border border-border/60 rounded-lg text-sm text-text appearance-none focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all cursor-pointer">
        <option>Toutes les priorit\xE9s</option>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </div>

  <!-- Loading -->
  @if (loading()) {
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (_ of [1,2,3,4,5,6]; track _) {
        <div class="bg-surface border border-border rounded-xl p-5 animate-pulse">
          <div class="h-4 bg-background-alt rounded w-1/3 mb-3"></div>
          <div class="h-5 bg-background-alt rounded w-3/4 mb-3"></div>
          <div class="h-4 bg-background-alt rounded w-full mb-2"></div>
          <div class="h-4 bg-background-alt rounded w-2/3 mb-4"></div>
          <div class="flex justify-between">
            <div class="h-4 bg-background-alt rounded w-1/4"></div>
            <div class="h-4 bg-background-alt rounded w-1/4"></div>
          </div>
        </div>
      }
    </div>
  } @else if (filteredProjects().length === 0) {
    <!-- Empty -->
    <div class="bg-surface border border-border rounded-xl p-16 flex flex-col items-center justify-center text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="w-14 h-14 text-text-muted mb-4">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
      <h3 class="font-heading text-lg font-semibold text-text-heading mb-1">Aucun projet trouv\xE9</h3>
      <p class="text-sm text-text-secondary mb-6">Commencez par cr\xE9er un nouveau projet.</p>
      @if (isManagerOrAdmin()) {
        <button (click)="newProject()" class="bg-primary text-text-inverse px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all cursor-pointer">
          Cr\xE9er un projet
        </button>
      }
    </div>
  } @else {
    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (project of filteredProjects(); track project.id) {
        <div (click)="viewProject(project)"
          class="bg-surface border border-border rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col gap-4 group">

          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 flex-1">
              <p class="text-xs font-bold uppercase tracking-wider text-primary">{{ project.reference_code }}</p>
              <h3 class="font-heading text-lg font-semibold text-text-heading group-hover:text-primary transition-colors mt-0.5 truncate">{{ project.name }}</h3>
            </div>
            <span class="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border"
              [class]="getStatusClass(project.status)">
              {{ getStatusLabel(project.status) }}
            </span>
          </div>

          @if (project.description) {
            <p class="text-sm text-text-secondary line-clamp-2">{{ project.description }}</p>
          }

          <div class="flex items-center justify-between text-xs text-text-secondary pt-3 mt-auto border-t border-border/50">
            <div class="flex items-center gap-3">
              @if (project.priority) {
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-text-muted"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                  {{ project.priority }}
                </span>
              }
              @if (project.tasks_count !== undefined) {
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-text-muted"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>
                  {{ project.tasks_count }} t\xE2che{{ project.tasks_count > 1 ? 's' : '' }}
                </span>
              }
            </div>
            @if (project.start_date) {
              <span>{{ project.start_date }}</span>
            }
          </div>
        </div>
      }
    </div>
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectListComponent, { className: "ProjectListComponent", filePath: "src/app/features/projects/project-list/project-list.component.ts", lineNumber: 27 });
})();
export {
  ProjectListComponent
};
//# sourceMappingURL=chunk-DCC2BLT4.js.map
