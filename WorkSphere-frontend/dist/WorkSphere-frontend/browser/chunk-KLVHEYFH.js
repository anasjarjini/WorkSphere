import {
  ProjectService
} from "./chunk-RUGM4DEW.js";
import {
  TaskService
} from "./chunk-PRJJ3FJQ.js";
import {
  AvatarComponent
} from "./chunk-LREV36OT.js";
import {
  ImageUrlService
} from "./chunk-44FZWU4S.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import {
  DatePipe
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
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4
} from "./chunk-ZST2RCVM.js";

// src/app/features/projects/project-detail/project-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProjectDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 2)(2, "div", 3);
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275element(4, "div", 5)(5, "div", 6)(6, "div", 7);
    \u0275\u0275elementEnd()();
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "app-avatar", 39);
    \u0275\u0275elementStart(2, "div")(3, "p", 37);
    \u0275\u0275text(4, "Cr\xE9ateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r1.creatorAvatarUrl())("name", p_r3.creator.first_name + " " + p_r3.creator.last_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", p_r3.creator.first_name, " ", p_r3.creator.last_name);
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
    \u0275\u0275elementStart(1, "div")(2, "p", 37);
    \u0275\u0275text(3, "Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", p_r3.start_date || "\u2014", " - ", p_r3.end_date || "\u2014");
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_33_Conditional_5_Template(rf, ctx) {
}
function ProjectDetailComponent_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
    \u0275\u0275elementStart(1, "div")(2, "p", 37);
    \u0275\u0275text(3, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275conditionalCreate(5, ProjectDetailComponent_Conditional_1_Conditional_33_Conditional_5_Template, 0, 0);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(p_r3.actual_cost ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r3.estimated_budget, " ", p_r3.currency || "", " ");
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "a", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 43)(4, "polyline", 44)(5, "line", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " T\xE9l\xE9charger cahier des charges ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.cahierChargesUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", ctx_r1.doneTasksCount(), " t\xE2che", ctx_r1.doneTasksCount() > 1 ? "s" : "", " termin\xE9e", ctx_r1.doneTasksCount() > 1 ? "s" : "", " sur ", ctx_r1.tasks().length, " au total. ");
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "p", 65);
    \u0275\u0275text(2, "Aucune t\xE2che pour ce projet");
    \u0275\u0275elementEnd()();
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.getPriorityClass(task_r7.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r7.priority, " ");
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "app-avatar", 39);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r1.getAvatarUrl(task_r7.assigned_user.avatar_url))("name", task_r7.assigned_user.first_name + " " + task_r7.assigned_user.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", task_r7.assigned_user.first_name, " ", task_r7.assigned_user.last_name);
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "Non assign\xE9");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, task_r7.due_date, "d MMM y"));
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 81)(1, "td", 82);
    \u0275\u0275element(2, "input", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 84)(4, "span", 85);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Template_span_click_4_listener() {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.viewTask(task_r7));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 84)(9, "span", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 84);
    \u0275\u0275conditionalCreate(12, ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Conditional_12_Template, 2, 3, "span", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 84);
    \u0275\u0275conditionalCreate(14, ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Conditional_14_Template, 4, 4, "div", 28)(15, ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Conditional_15_Template, 2, 0, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 84);
    \u0275\u0275conditionalCreate(17, ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Conditional_17_Template, 3, 4, "span", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("opacity-60", task_r7.status === "DONE");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", task_r7.status === "DONE");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", task_r7.status === "DONE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r7.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r7.reference_code);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getTaskStatusClass(task_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTaskStatusLabel(task_r7.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r7.priority ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r7.assigned_user ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(task_r7.due_date ? 17 : -1);
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_30_Template_button_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("bg-primary", p_r9 === ctx_r1.currentPage())("text-text-inverse", p_r9 === ctx_r1.currentPage())("border", p_r9 !== ctx_r1.currentPage())("border-border", p_r9 !== ctx_r1.currentPage())("bg-surface-bright", p_r9 !== ctx_r1.currentPage())("text-text-secondary", p_r9 !== ctx_r1.currentPage())("hover:bg-surface-container", p_r9 !== ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9, " ");
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 66)(2, "table", 67)(3, "thead")(4, "tr", 68)(5, "th", 69);
    \u0275\u0275element(6, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 71);
    \u0275\u0275text(8, "T\xE2che");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 71);
    \u0275\u0275text(10, "R\xE9f");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 71);
    \u0275\u0275text(12, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 71);
    \u0275\u0275text(14, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 71);
    \u0275\u0275text(16, "Assign\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 71);
    \u0275\u0275text(18, "\xC9ch\xE9ance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody", 72);
    \u0275\u0275repeaterCreate(20, ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_21_Template, 18, 13, "tr", 73, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 74)(23, "p", 75);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 76)(26, "button", 77);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 16);
    \u0275\u0275element(28, "polyline", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(29, ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_For_30_Template, 2, 15, "button", 79, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "button", 77);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 16);
    \u0275\u0275element(33, "polyline", 80);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.paginatedTasks());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" Affichage ", ctx_r1.currentStart(), " \xE0 ", ctx_r1.currentEnd(), " sur ", ctx_r1.tasks().length, " t\xE2che", ctx_r1.tasks().length > 1 ? "s" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.pages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
function ProjectDetailComponent_Conditional_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "button", 48);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Conditional_46_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewMode.set("list"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 16);
    \u0275\u0275element(4, "line", 49)(5, "line", 50)(6, "line", 51)(7, "line", 52)(8, "line", 53)(9, "line", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Liste ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 48);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Conditional_46_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewKanban());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 16);
    \u0275\u0275element(13, "rect", 55)(14, "rect", 56)(15, "rect", 57)(16, "rect", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Kanban ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 59)(19, "button", 60);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Conditional_46_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newTask());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 16);
    \u0275\u0275element(21, "line", 61)(22, "line", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Nouvelle t\xE2che ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(24, ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_24_Template, 3, 0, "div", 63)(25, ProjectDetailComponent_Conditional_1_Conditional_46_Conditional_25_Template, 34, 6, "div", 64);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-surface", ctx_r1.viewMode() === "list")("shadow-sm", ctx_r1.viewMode() === "list")("text-primary", ctx_r1.viewMode() === "list")("text-text-secondary", ctx_r1.viewMode() !== "list")("hover:bg-surface", ctx_r1.viewMode() !== "list");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("bg-surface", ctx_r1.viewMode() === "kanban")("shadow-sm", ctx_r1.viewMode() === "kanban")("text-primary", ctx_r1.viewMode() === "kanban")("text-text-secondary", ctx_r1.viewMode() !== "kanban")("hover:bg-surface", ctx_r1.viewMode() !== "kanban");
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.tasks().length === 0 ? 24 : 25);
  }
}
function ProjectDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 8)(2, "div")(3, "div", 9)(4, "h1", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9, "Ref: ");
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 14)(13, "button", 15);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editProject());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 16);
    \u0275\u0275element(15, "path", 17)(16, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 19);
    \u0275\u0275listener("click", function ProjectDetailComponent_Conditional_1_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteProject());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 16);
    \u0275\u0275element(20, "polyline", 20)(21, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Supprimer ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "section", 22)(24, "div", 23)(25, "div", 24)(26, "h3", 25);
    \u0275\u0275text(27, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 26);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 27);
    \u0275\u0275conditionalCreate(31, ProjectDetailComponent_Conditional_1_Conditional_31_Template, 7, 4, "div", 28);
    \u0275\u0275conditionalCreate(32, ProjectDetailComponent_Conditional_1_Conditional_32_Template, 6, 2);
    \u0275\u0275conditionalCreate(33, ProjectDetailComponent_Conditional_1_Conditional_33_Template, 7, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, ProjectDetailComponent_Conditional_1_Conditional_34_Template, 7, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 30)(36, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 32);
    \u0275\u0275element(38, "circle", 33)(39, "circle", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 35)(41, "span", 36);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 37);
    \u0275\u0275text(44, "Progression");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(45, ProjectDetailComponent_Conditional_1_Conditional_45_Template, 2, 4, "p", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(46, ProjectDetailComponent_Conditional_1_Conditional_46_Template, 26, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r3.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(p_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(p_r3.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r3.reference_code);
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(p_r3.description || "Aucune description.");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r3.creator ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r3.start_date || p_r3.end_date ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r3.estimated_budget ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cahierChargesUrl() ? 34 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke-dashoffset", ctx_r1.circleDashoffset());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r3.progress_percentage, "%");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isManager() ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isManager() ? 46 : -1);
  }
}
var STATUS_LABELS = {
  PLANIFICATION: "Planification",
  EN_COURS: "En cours",
  EN_PAUSE: "En pause",
  TERMINE: "Termin\xE9"
};
var STATUS_CLASSES = {
  PLANIFICATION: "bg-accent-light text-accent-dark",
  EN_COURS: "bg-info-light text-info-dark",
  EN_PAUSE: "bg-warning-light text-warning-dark",
  TERMINE: "bg-success-light text-success-dark"
};
var TASK_STATUS_LABELS = {
  TODO: "\xC0 faire",
  IN_PROGRESS: "En cours",
  REVIEW: "R\xE9vision",
  DONE: "Termin\xE9"
};
var TASK_STATUS_CLASSES = {
  TODO: "bg-background-alt text-text-secondary",
  IN_PROGRESS: "bg-info-light text-info-dark",
  REVIEW: "bg-warning-light text-warning-dark",
  DONE: "bg-success-light text-success-dark"
};
var ProjectDetailComponent = class _ProjectDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  projectService = inject(ProjectService);
  taskService = inject(TaskService);
  authService = inject(AuthService);
  imageUrlService = inject(ImageUrlService);
  user = this.authService.currentUser;
  project = signal(
    null,
    ...ngDevMode ? [{ debugName: "project" }] : (
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
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  viewMode = signal(
    "list",
    ...ngDevMode ? [{ debugName: "viewMode" }] : (
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
  totalPages = computed(
    () => Math.max(1, Math.ceil(this.tasks().length / this.pageSize)),
    ...ngDevMode ? [{ debugName: "totalPages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  paginatedTasks = computed(
    () => {
      const start = (this.currentPage() - 1) * this.pageSize;
      return this.tasks().slice(start, start + this.pageSize);
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
    () => Math.min(this.currentPage() * this.pageSize, this.tasks().length),
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
  isManager = computed(
    () => this.user()?.role === "MANAGER",
    ...ngDevMode ? [{ debugName: "isManager" }] : (
      /* istanbul ignore next */
      []
    )
  );
  baseRoute = computed(
    () => {
      const role = this.user()?.role;
      return role === "HR_ADMIN" ? "/admin" : "/manager";
    },
    ...ngDevMode ? [{ debugName: "baseRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  creatorAvatarUrl = computed(
    () => {
      const p = this.project();
      if (!p?.creator)
        return null;
      return this.imageUrlService.resolve(p.creator.avatar_url);
    },
    ...ngDevMode ? [{ debugName: "creatorAvatarUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cahierChargesUrl = computed(
    () => {
      const p = this.project();
      return p?.cahier_charges_url ? this.imageUrlService.resolve(p.cahier_charges_url) : null;
    },
    ...ngDevMode ? [{ debugName: "cahierChargesUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  doneTasksCount = computed(
    () => this.tasks().filter((t) => t.status === "DONE").length,
    ...ngDevMode ? [{ debugName: "doneTasksCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  circleDashoffset = computed(
    () => {
      const p = this.project();
      if (!p)
        return 440;
      return 440 - p.progress_percentage / 100 * 440;
    },
    ...ngDevMode ? [{ debugName: "circleDashoffset" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadProject(+id);
      if (this.isManager()) {
        this.loadTasks(+id);
      } else {
        this.loading.set(false);
      }
    }
  }
  loadProject(id) {
    this.projectService.getProject(id).subscribe({
      next: (data) => {
        this.project.set(data);
        if (!this.isManager())
          this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  loadTasks(projectId) {
    this.taskService.getProjectTasks(projectId).subscribe({
      next: (data) => {
        this.tasks.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  getStatusLabel(status) {
    return STATUS_LABELS[status] || status;
  }
  getStatusClass(status) {
    return STATUS_CLASSES[status] || "";
  }
  getTaskStatusLabel(status) {
    return TASK_STATUS_LABELS[status];
  }
  getTaskStatusClass(status) {
    return TASK_STATUS_CLASSES[status];
  }
  getPriorityClass(priority) {
    switch ((priority || "").toLowerCase()) {
      case "critique":
      case "haute":
      case "high":
      case "critical":
        return "bg-error/10 text-error";
      case "moyenne":
      case "medium":
        return "bg-tertiary-fixed/50 text-on-tertiary-fixed-variant";
      case "basse":
      case "low":
        return "bg-outline-variant/30 text-outline";
      default:
        return "bg-background-alt text-text-muted";
    }
  }
  editProject() {
    const project = this.project();
    if (project) {
      this.router.navigate([`${this.baseRoute()}/projects/${project.id}/edit`]);
    }
  }
  deleteProject() {
    const project = this.project();
    if (!project)
      return;
    const confirmed = window.confirm(`Supprimer le projet "${project.name}" ? Cette action est irr\xE9versible.`);
    if (!confirmed)
      return;
    this.projectService.deleteProject(project.id).subscribe({
      next: () => this.router.navigate([`${this.baseRoute()}/projects`]),
      error: () => {
      }
    });
  }
  newTask() {
    const project = this.project();
    if (project) {
      this.router.navigate([`${this.baseRoute()}/projects/${project.id}/tasks/new`]);
    }
  }
  viewTask(task) {
    this.router.navigate([`/tasks/${task.id}`]);
  }
  startTask(task) {
    this.taskService.updateStatus(task.id, "IN_PROGRESS").subscribe(() => {
      this.tasks.update((list) => list.map((t) => t.id === task.id ? __spreadProps(__spreadValues({}, t), { status: "IN_PROGRESS" }) : t));
    });
  }
  submitTask(task) {
    const targetStatus = task.status === "IN_PROGRESS" ? "REVIEW" : "REVIEW";
    this.taskService.updateStatus(task.id, targetStatus).subscribe(() => {
      this.tasks.update((list) => list.map((t) => t.id === task.id ? __spreadProps(__spreadValues({}, t), { status: targetStatus }) : t));
    });
  }
  viewKanban() {
    const project = this.project();
    if (project) {
      this.router.navigate([`${this.baseRoute()}/projects/${project.id}/board`]);
    }
  }
  getAvatarUrl(url) {
    return this.imageUrlService.resolve(url);
  }
  static \u0275fac = function ProjectDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["app-project-detail"]], decls: 2, vars: 1, consts: [[1, "max-w-7xl", "mx-auto", "animate-pulse", "space-y-6", "px-6", "py-8"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6", "px-6", "py-8"], [1, "h-4", "bg-background-alt", "rounded", "w-1/4", "mb-4"], [1, "h-8", "bg-background-alt", "rounded", "w-1/3", "mb-4"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-8", "space-y-4"], [1, "h-6", "bg-background-alt", "rounded", "w-1/2"], [1, "h-4", "bg-background-alt", "rounded", "w-3/4"], [1, "h-4", "bg-background-alt", "rounded", "w-2/3"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3", "mb-1"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "text-sm", "text-text-secondary"], [1, "font-mono", "text-text"], [1, "flex", "gap-2"], [1, "px-3.5", "py-2", "border", "border-border", "text-text-secondary", "text-sm", "font-semibold", "rounded-lg", "flex", "items-center", "gap-1.5", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "px-3.5", "py-2", "border", "border-error/40", "text-error", "text-sm", "font-semibold", "rounded-lg", "flex", "items-center", "gap-1.5", "hover:bg-error/5", "transition-colors", "cursor-pointer", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "bg-surface", "border", "border-border", "rounded-xl", "shadow-sm", "p-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-4"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-6", "items-center", "pt-2"], [1, "flex", "items-center", "gap-2"], [1, "pt-1"], [1, "flex", "flex-col", "items-center", "justify-center", "lg:items-end", "gap-3"], [1, "relative", "w-40", "h-40"], ["viewBox", "0 0 160 160", 1, "w-full", "h-full", "-rotate-90"], ["cx", "80", "cy", "80", "r", "70", "fill", "transparent", "stroke", "currentColor", "stroke-width", "12", 1, "text-background-alt"], ["cx", "80", "cy", "80", "r", "70", "fill", "transparent", "stroke", "currentColor", "stroke-width", "12", "stroke-dasharray", "440", 1, "text-primary", "transition-all", "duration-1000", "ease-out"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "font-heading", "text-3xl", "font-bold", "text-primary"], [1, "text-xs", "text-text-muted"], [1, "text-xs", "text-text-muted", "text-center", "lg:text-right", "italic"], ["size", "sm", 3, "imageUrl", "name"], [1, "text-sm", "font-semibold", "text-text"], [1, "w-px", "h-10", "bg-border"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-1.5", "text-sm", "font-semibold", "text-primary", "hover:underline", "transition-colors", 3, "href"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4"], [1, "bg-surface-container-low", "p-1", "rounded-xl", "flex", "border", "border-border"], [1, "px-5", "py-2", "text-sm", "font-semibold", "rounded-lg", "flex", "items-center", "gap-1.5", "transition-all", "cursor-pointer", 3, "click"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3.01", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3.01", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3.01", "y2", "18"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], [1, "flex", "items-center", "gap-3", "w-full", "sm:w-auto"], [1, "bg-primary", "text-text-inverse", "px-4", "py-2", "rounded-lg", "text-sm", "font-bold", "flex", "items-center", "gap-1.5", "hover:opacity-90", "active:scale-95", "transition-all", "shadow-sm", "cursor-pointer", "shrink-0", 3, "click"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-12", "text-center"], [1, "bg-surface", "border", "border-border", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "text-text-secondary", "font-medium"], [1, "overflow-x-auto"], [1, "w-full", "text-left", "border-collapse"], [1, "bg-surface-container-low", "border-b", "border-border"], [1, "p-3.5", "w-10", "text-center"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "border-border", "text-primary", "focus:ring-primary/30", "cursor-pointer"], [1, "p-3.5", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider"], [1, "divide-y", "divide-border"], [1, "hover:bg-surface-container-lowest", "transition-colors", "group", 3, "opacity-60"], [1, "p-3.5", "bg-surface-container-low", "border-t", "border-border", "flex", "items-center", "justify-between"], [1, "text-sm", "text-text-muted"], [1, "flex", "items-center", "gap-1"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-border", "bg-surface-bright", "text-text-muted", "hover:bg-surface-container", "transition-colors", "cursor-pointer", "disabled:opacity-30", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["points", "15 18 9 12 15 6"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "text-sm", "font-bold", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-text-inverse", "border", "border-border", "bg-surface-bright", "text-text-secondary", "hover:bg-surface-container"], ["points", "9 18 15 12 9 6"], [1, "hover:bg-surface-container-lowest", "transition-colors", "group"], [1, "p-3.5", "text-center"], ["type", "checkbox", 1, "w-4", "h-4", "rounded", "border-border", "text-primary", "focus:ring-primary/30", "cursor-pointer", 3, "checked"], [1, "p-3.5"], [1, "text-sm", "font-semibold", "text-text", "group-hover:text-primary", "transition-colors", "cursor-pointer", 3, "click"], [1, "p-3.5", "text-sm", "text-text-muted", "font-mono"], [1, "inline-flex", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold"], [1, "inline-flex", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "class"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "text-sm", "font-bold", "transition-colors", "cursor-pointer", 3, "click"]], template: function ProjectDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProjectDetailComponent_Conditional_0_Template, 7, 0, "div", 0)(1, ProjectDetailComponent_Conditional_1_Template, 47, 14, "div", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.loading() ? 0 : (tmp_0_0 = ctx.project()) ? 1 : -1, tmp_0_0);
    }
  }, dependencies: [RouterModule, AvatarComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDetailComponent, [{
    type: Component,
    args: [{ selector: "app-project-detail", standalone: true, imports: [RouterModule, AvatarComponent, DatePipe], template: `@if (loading()) {
  <div class="max-w-7xl mx-auto animate-pulse space-y-6 px-6 py-8">
    <div class="h-4 bg-background-alt rounded w-1/4 mb-4"></div>
    <div class="h-8 bg-background-alt rounded w-1/3 mb-4"></div>
    <div class="bg-surface border border-border rounded-xl p-8 space-y-4">
      <div class="h-6 bg-background-alt rounded w-1/2"></div>
      <div class="h-4 bg-background-alt rounded w-3/4"></div>
      <div class="h-4 bg-background-alt rounded w-2/3"></div>
    </div>
  </div>
} @else if (project(); as p) {
  <div class="max-w-7xl mx-auto flex flex-col gap-6 px-6 py-8">

 

    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <div class="flex items-center gap-3 mb-1">
          <h1 class="font-heading text-2xl font-bold text-text-heading">{{ p.name }}</h1>
          <span class="text-xs font-semibold px-3 py-1 rounded-full" [class]="getStatusClass(p.status)">
            {{ getStatusLabel(p.status) }}
          </span>
        </div>
        <p class="text-sm text-text-secondary">Ref: <span class="font-mono text-text">{{ p.reference_code }}</span></p>
      </div>
      <div class="flex gap-2">
        <button (click)="editProject()"
          class="px-3.5 py-2 border border-border text-text-secondary text-sm font-semibold rounded-lg flex items-center gap-1.5 hover:bg-background-alt transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Modifier
        </button>
        <button (click)="deleteProject()"
          class="px-3.5 py-2 border border-error/40 text-error text-sm font-semibold rounded-lg flex items-center gap-1.5 hover:bg-error/5 transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          Supprimer
        </button>
      </div>
    </div>

    <!-- Info Card -->
    <section class="bg-surface border border-border rounded-xl shadow-sm p-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-4">
          <h3 class="font-heading text-lg font-semibold text-text-heading">Description</h3>
          <p class="text-sm text-text-secondary leading-relaxed">{{ p.description || 'Aucune description.' }}</p>

          <div class="flex flex-wrap gap-6 items-center pt-2">
            @if (p.creator) {
              <div class="flex items-center gap-2">
                <app-avatar [imageUrl]="creatorAvatarUrl()" [name]="p.creator.first_name + ' ' + p.creator.last_name" size="sm" />
                <div>
                  <p class="text-xs text-text-muted">Cr\xE9ateur</p>
                  <p class="text-sm font-semibold text-text">{{ p.creator.first_name }} {{ p.creator.last_name }}</p>
                </div>
              </div>
            }
            @if (p.start_date || p.end_date) {
              <div class="w-px h-10 bg-border"></div>
              <div>
                <p class="text-xs text-text-muted">Dates</p>
                <p class="text-sm font-semibold text-text">{{ p.start_date || '\u2014' }} - {{ p.end_date || '\u2014' }}</p>
              </div>
            }
            @if (p.estimated_budget) {
              <div class="w-px h-10 bg-border"></div>
              <div>
                <p class="text-xs text-text-muted">Budget</p>
                <p class="text-sm font-semibold text-text">
                  @if (p.actual_cost) {
                   
                  }
                  {{ p.estimated_budget }} {{ p.currency || '' }}
                </p>
              </div>
            }
          </div>

          @if (cahierChargesUrl()) {
            <div class="pt-1">
              <a [href]="cahierChargesUrl()" target="_blank"
                class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                T\xE9l\xE9charger cahier des charges
              </a>
            </div>
          }
        </div>

        <!-- Circular Progress -->
        <div class="flex flex-col items-center justify-center lg:items-end gap-3">
          <div class="relative w-40 h-40">
            <svg class="w-full h-full -rotate-90" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" stroke-width="12" class="text-background-alt"></circle>
              <circle cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" stroke-width="12"
                class="text-primary transition-all duration-1000 ease-out"
                stroke-dasharray="440" [attr.stroke-dashoffset]="circleDashoffset()"></circle>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="font-heading text-3xl font-bold text-primary">{{ p.progress_percentage }}%</span>
              <span class="text-xs text-text-muted">Progression</span>
            </div>
          </div>
          @if (isManager()) {
            <p class="text-xs text-text-muted text-center lg:text-right italic">
              {{ doneTasksCount() }} t\xE2che{{ doneTasksCount() > 1 ? 's' : '' }} termin\xE9e{{ doneTasksCount() > 1 ? 's' : '' }} sur {{ tasks().length }} au total.
            </p>
          }
        </div>
      </div>
    </section>

    @if (isManager()) {
      <!-- Toggle & Actions Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="bg-surface-container-low p-1 rounded-xl flex border border-border">
          <button (click)="viewMode.set('list')"
            class="px-5 py-2 text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
            [class.bg-surface]="viewMode() === 'list'"
            [class.shadow-sm]="viewMode() === 'list'"
            [class.text-primary]="viewMode() === 'list'"
            [class.text-text-secondary]="viewMode() !== 'list'"
            [class.hover:bg-surface]="viewMode() !== 'list'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Liste
          </button>
          <button (click)="viewKanban()"
            class="px-5 py-2 text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
            [class.bg-surface]="viewMode() === 'kanban'"
            [class.shadow-sm]="viewMode() === 'kanban'"
            [class.text-primary]="viewMode() === 'kanban'"
            [class.text-text-secondary]="viewMode() !== 'kanban'"
            [class.hover:bg-surface]="viewMode() !== 'kanban'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Kanban
          </button>
        </div>
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <button (click)="newTask()"
            class="bg-primary text-text-inverse px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Nouvelle t\xE2che
          </button>
        </div>
      </div>

      @if (tasks().length === 0) {
        <div class="bg-surface border border-border rounded-xl p-12 text-center">
          <p class="text-text-secondary font-medium">Aucune t\xE2che pour ce projet</p>
        </div>
      } @else {
        <!-- Task Table -->
        <div class="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-surface-container-low border-b border-border">
                  <th class="p-3.5 w-10 text-center">
                    <input type="checkbox" class="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 cursor-pointer" />
                  </th>
                  <th class="p-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">T\xE2che</th>
                  <th class="p-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">R\xE9f</th>
                  <th class="p-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">Statut</th>
                  <th class="p-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">Priorit\xE9</th>
                  <th class="p-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">Assign\xE9</th>
                  <th class="p-3.5 text-xs font-bold text-text-muted uppercase tracking-wider">\xC9ch\xE9ance</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                @for (task of paginatedTasks(); track task.id) {
                  <tr class="hover:bg-surface-container-lowest transition-colors group"
                    [class.opacity-60]="task.status === 'DONE'">
                    <td class="p-3.5 text-center">
                      <input type="checkbox" class="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 cursor-pointer"
                        [checked]="task.status === 'DONE'" />
                    </td>
                    <td class="p-3.5">
                      <span (click)="viewTask(task)" class="text-sm font-semibold text-text group-hover:text-primary transition-colors cursor-pointer"
                        [class.line-through]="task.status === 'DONE'">
                        {{ task.title }}
                      </span>
                    </td>
                    <td class="p-3.5 text-sm text-text-muted font-mono">{{ task.reference_code }}</td>
                    <td class="p-3.5">
                      <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold" [class]="getTaskStatusClass(task.status)">
                        {{ getTaskStatusLabel(task.status) }}
                      </span>
                    </td>
                    <td class="p-3.5">
                      @if (task.priority) {
                        <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold" [class]="getPriorityClass(task.priority)">
                          {{ task.priority }}
                        </span>
                      }
                    </td>
                      <td class="p-3.5">
                        @if (task.assigned_user) {
                          <div class="flex items-center gap-2">
                            <app-avatar [imageUrl]="getAvatarUrl(task.assigned_user.avatar_url)" [name]="task.assigned_user.first_name + ' ' + task.assigned_user.last_name" size="sm" />
                            <span class="text-sm text-text-secondary">{{ task.assigned_user.first_name }} {{ task.assigned_user.last_name }}</span>
                          </div>
                        } @else {
                          <span class="text-sm text-text-muted">Non assign\xE9</span>
                        }
                      </td>
                      <td class="p-3.5">
                        @if (task.due_date) {
                          <span class="text-sm text-text-secondary">{{ task.due_date | date:'d MMM y' }}</span>
                        }
                      </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="p-3.5 bg-surface-container-low border-t border-border flex items-center justify-between">
            <p class="text-sm text-text-muted">
              Affichage {{ currentStart() }} \xE0 {{ currentEnd() }} sur {{ tasks().length }} t\xE2che{{ tasks().length > 1 ? 's' : '' }}
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
    }
  </div>
}` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src/app/features/projects/project-detail/project-detail.component.ts", lineNumber: 41 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=chunk-KLVHEYFH.js.map
