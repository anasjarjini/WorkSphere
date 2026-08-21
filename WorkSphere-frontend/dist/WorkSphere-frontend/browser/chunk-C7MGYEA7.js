import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import {
  TaskService
} from "./chunk-ZNZLQX3N.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-75TSC3TY.js";
import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ADF3COWQ.js";
import {
  __spreadValues
} from "./chunk-FDMHZOCR.js";

// src/app/features/shared/tasks/task-form/task-form.component.ts
var _c0 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.id;
function TaskFormComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 44);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function TaskFormComponent_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage.set(null));
    });
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function TaskFormComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", member_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", member_r3.first_name, " ", member_r3.last_name, " \u2014 ", member_r3.job_title);
  }
}
function TaskFormComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
  }
}
function TaskFormComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "add_task");
    \u0275\u0275elementEnd();
  }
}
var TaskFormComponent = class _TaskFormComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  taskService = inject(TaskService);
  employeeService = inject(EmployeeService);
  authService = inject(AuthService);
  user = this.authService.currentUser;
  teamMembers = signal(
    [],
    ...ngDevMode ? [{ debugName: "teamMembers" }] : (
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
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projectId;
  today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  formData = {
    title: "",
    description: "",
    priority: "",
    due_date: "",
    user_id: null
  };
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
  ngOnInit() {
    const pid = this.route.snapshot.paramMap.get("projectId");
    if (!pid) {
      this.errorMessage.set("Projet non sp\xE9cifi\xE9.");
      return;
    }
    this.projectId = +pid;
    this.loadTeamMembers();
  }
  loadTeamMembers() {
    this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
      next: (res) => this.teamMembers.set(res.data),
      error: () => {
      }
    });
  }
  onSubmit() {
    if (!this.formData.title.trim()) {
      this.errorMessage.set("Le titre est requis.");
      return;
    }
    this.saving.set(true);
    this.errorMessage.set(null);
    const payload = __spreadValues({}, this.formData);
    if (!payload.user_id)
      delete payload.user_id;
    this.taskService.createTask(this.projectId, payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute()}/projects/${this.projectId}`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || "Erreur lors de la cr\xE9ation.");
      }
    });
  }
  static \u0275fac = function TaskFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskFormComponent, selectors: [["app-task-form"]], decls: 92, vars: 17, consts: [[1, "min-h-screen", "bg-background", "py-8", "px-6"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "items-center", "gap-1.5", "text-sm", "text-text-muted"], [1, "hover:text-primary", "transition-colors", 3, "routerLink"], [1, "material-symbols-outlined", "text-sm"], [1, "text-text", "font-semibold"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-6"], [1, "lg:col-span-8"], [1, "bg-surface", "border", "border-border", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "p-6", "sm:p-8", "space-y-6", 3, "ngSubmit"], [1, "bg-error-light", "border", "border-error/20", "rounded-lg", "px-4", "py-3", "text-sm", "font-medium", "text-error-dark", "flex", "items-center", "gap-2"], [1, "space-y-1.5"], ["for", "task-title", 1, "block", "text-sm", "font-semibold", "text-text"], ["type", "text", "id", "task-title", "name", "title", "required", "", "placeholder", "ex: Finalisation du rapport trimestriel", 1, "w-full", "px-3.5", "py-2.5", "bg-surface", "border", "border-border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "block", "text-sm", "font-semibold", "text-text"], ["id", "description", "name", "description", "rows", "5", "placeholder", "D\xE9crivez les objectifs et les livrables attendus...", 1, "w-full", "px-3.5", "py-2.5", "bg-surface", "border", "border-border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "resize-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], ["for", "priority", 1, "block", "text-sm", "font-semibold", "text-text"], [1, "relative"], ["id", "priority", "name", "priority", 1, "w-full", "appearance-none", "px-3.5", "py-2.5", "pr-10", "bg-surface", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "cursor-pointer", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "LOW"], ["value", "MEDIUM"], ["value", "HIGH"], [1, "material-symbols-outlined", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "pointer-events-none", "text-text-muted", "text-base"], ["for", "due-date", 1, "block", "text-sm", "font-semibold", "text-text"], ["type", "date", "id", "due-date", "name", "due_date", 1, "w-full", "px-3.5", "py-2.5", "bg-surface", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["for", "assignee", 1, "block", "text-sm", "font-semibold", "text-text"], ["id", "assignee", "name", "user_id", 1, "w-full", "appearance-none", "px-3.5", "py-2.5", "pr-10", "bg-surface", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "cursor-pointer", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "flex", "items-center", "justify-end", "gap-3", "pt-5", "border-t", "border-border"], [1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-text-secondary", "border", "border-border", "rounded-lg", "hover:bg-background-alt", "transition-all", "cursor-pointer", 3, "routerLink"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "bg-primary", "text-text-inverse", "rounded-lg", "shadow-sm", "hover:bg-primary-hover", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", 3, "disabled"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"], [1, "lg:col-span-4", "space-y-6"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6"], [1, "flex", "items-center", "gap-2", "mb-4", "text-primary"], [1, "material-symbols-outlined"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading"], [1, "space-y-3"], [1, "flex", "gap-2.5", "text-sm", "text-text-secondary"], [1, "material-symbols-outlined", "text-base", "text-accent", "shrink-0", "mt-0.5"], [1, "material-symbols-outlined", "text-sm", "shrink-0"], [1, "flex-1"], ["type", "button", 1, "text-error-dark/60", "hover:text-error-dark", "cursor-pointer", "shrink-0", 3, "click"]], template: function TaskFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "Accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "chevron_right");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275text(8, "Projets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "chevron_right");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 5);
      \u0275\u0275text(12, "Nouvelle t\xE2che");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div")(14, "h1", 6);
      \u0275\u0275text(15, "Nouvelle t\xE2che");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 7);
      \u0275\u0275text(17, "D\xE9finissez les d\xE9tails de la mission pour votre \xE9quipe.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 8)(19, "div", 9)(20, "div", 10)(21, "form", 11);
      \u0275\u0275listener("ngSubmit", function TaskFormComponent_Template_form_ngSubmit_21_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275conditionalCreate(22, TaskFormComponent_Conditional_22_Template, 8, 1, "div", 12);
      \u0275\u0275elementStart(23, "div", 13)(24, "label", 14);
      \u0275\u0275text(25, "Titre de la t\xE2che *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.title, $event) || (ctx.formData.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 13)(28, "label", 16);
      \u0275\u0275text(29, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "textarea", 17);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_textarea_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.description, $event) || (ctx.formData.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 18)(32, "div", 13)(33, "label", 19);
      \u0275\u0275text(34, "Priorit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 20)(36, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_select_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.priority, $event) || (ctx.formData.priority = $event);
        return $event;
      });
      \u0275\u0275elementStart(37, "option", 22);
      \u0275\u0275text(38, "S\xE9lectionner...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 23);
      \u0275\u0275text(40, "Faible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 24);
      \u0275\u0275text(42, "Moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 25);
      \u0275\u0275text(44, "Haute");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(45, "span", 26);
      \u0275\u0275text(46, "expand_more");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 13)(48, "label", 27);
      \u0275\u0275text(49, "Date d'\xE9ch\xE9ance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 20)(51, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.due_date, $event) || (ctx.formData.due_date = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(52, "span", 26);
      \u0275\u0275text(53, "calendar_today");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 13)(55, "label", 29);
      \u0275\u0275text(56, "Assigner \xE0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 20)(58, "select", 30);
      \u0275\u0275twoWayListener("ngModelChange", function TaskFormComponent_Template_select_ngModelChange_58_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.user_id, $event) || (ctx.formData.user_id = $event);
        return $event;
      });
      \u0275\u0275elementStart(59, "option", 31);
      \u0275\u0275text(60, "S\xE9lectionner un collaborateur");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(61, TaskFormComponent_For_62_Template, 2, 4, "option", 31, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(63, "span", 26);
      \u0275\u0275text(64, "person_search");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 32)(66, "a", 33);
      \u0275\u0275text(67, " Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 34);
      \u0275\u0275conditionalCreate(69, TaskFormComponent_Conditional_69_Template, 1, 0, "span", 35)(70, TaskFormComponent_Conditional_70_Template, 2, 0, "span", 4);
      \u0275\u0275text(71, " Cr\xE9er la t\xE2che ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(72, "div", 36)(73, "div", 37)(74, "div", 38)(75, "span", 39);
      \u0275\u0275text(76, "lightbulb");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h4", 40);
      \u0275\u0275text(78, "Conseils");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "ul", 41)(80, "li", 42)(81, "span", 43);
      \u0275\u0275text(82, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " Soyez sp\xE9cifique dans le titre pour une identification rapide. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "li", 42)(85, "span", 43);
      \u0275\u0275text(86, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, ' D\xE9finissez une priorit\xE9 "Haute" uniquement pour les urgences r\xE9elles. ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "li", 42)(89, "span", 43);
      \u0275\u0275text(90, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, " L'assignation d'une date d'\xE9ch\xE9ance aide \xE0 la gestion du calendrier d'\xE9quipe. ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.baseRoute());
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, ctx.baseRoute() + "/projects"));
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.errorMessage() ? 22 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.title);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.description);
      \u0275\u0275control();
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.priority);
      \u0275\u0275control();
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.due_date);
      \u0275\u0275attribute("min", ctx.today);
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.user_id);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.teamMembers());
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, ctx.baseRoute() + "/projects/" + ctx.projectId));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 69 : 70);
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskFormComponent, [{
    type: Component,
    args: [{ selector: "app-task-form", standalone: true, imports: [RouterModule, FormsModule], template: `<div class="min-h-screen bg-background py-8 px-6">
  <div class="max-w-7xl mx-auto flex flex-col gap-6">

    <!-- Breadcrumbs -->
    <nav class="flex items-center gap-1.5 text-sm text-text-muted">
      <a [routerLink]="baseRoute()" class="hover:text-primary transition-colors">Accueil</a>
      <span class="material-symbols-outlined text-sm">chevron_right</span>
      <a [routerLink]="[baseRoute() + '/projects']" class="hover:text-primary transition-colors">Projets</a>
      <span class="material-symbols-outlined text-sm">chevron_right</span>
      <span class="text-text font-semibold">Nouvelle t\xE2che</span>
    </nav>

    <!-- Page Title -->
    <div>
      <h1 class="font-heading text-2xl font-bold text-text-heading">Nouvelle t\xE2che</h1>
      <p class="text-sm text-text-secondary mt-1">D\xE9finissez les d\xE9tails de la mission pour votre \xE9quipe.</p>
    </div>

    <!-- Grid: Form + Side Panel -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

      <!-- Form Card -->
      <div class="lg:col-span-8">
        <div class="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
          <form (ngSubmit)="onSubmit()" class="p-6 sm:p-8 space-y-6">

            @if (errorMessage()) {
              <div class="bg-error-light border border-error/20 rounded-lg px-4 py-3 text-sm font-medium text-error-dark flex items-center gap-2">
                <span class="material-symbols-outlined text-sm shrink-0">error</span>
                <span class="flex-1">{{ errorMessage() }}</span>
                <button type="button" (click)="errorMessage.set(null)" class="text-error-dark/60 hover:text-error-dark cursor-pointer shrink-0">
                  <span class="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            }

            <!-- Title -->
            <div class="space-y-1.5">
              <label class="block text-sm font-semibold text-text" for="task-title">Titre de la t\xE2che *</label>
              <input type="text" id="task-title" [(ngModel)]="formData.title" name="title" required
                placeholder="ex: Finalisation du rapport trimestriel"
                class="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
            </div>

            <!-- Description -->
            <div class="space-y-1.5">
              <label class="block text-sm font-semibold text-text" for="description">Description</label>
              <textarea id="description" [(ngModel)]="formData.description" name="description" rows="5"
                placeholder="D\xE9crivez les objectifs et les livrables attendus..."
                class="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"></textarea>
            </div>

            <!-- Priority + Due Date -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="space-y-1.5">
                <label class="block text-sm font-semibold text-text" for="priority">Priorit\xE9</label>
                <div class="relative">
                  <select id="priority" [(ngModel)]="formData.priority" name="priority"
                    class="w-full appearance-none px-3.5 py-2.5 pr-10 bg-surface border border-border rounded-lg text-sm text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all cursor-pointer">
                    <option value="">S\xE9lectionner...</option>
                    <option value="LOW">Faible</option>
                    <option value="MEDIUM">Moyenne</option>
                    <option value="HIGH">Haute</option>
                  </select>
                  <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-base">expand_more</span>
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="block text-sm font-semibold text-text" for="due-date">Date d'\xE9ch\xE9ance</label>
                <div class="relative">
                  <input type="date" id="due-date" [(ngModel)]="formData.due_date" name="due_date"
                    [attr.min]="today"
                    class="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                  <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-base">calendar_today</span>
                </div>
              </div>
            </div>

            <!-- Assignee -->
            <div class="space-y-1.5">
              <label class="block text-sm font-semibold text-text" for="assignee">Assigner \xE0</label>
              <div class="relative">
                <select id="assignee" [(ngModel)]="formData.user_id" name="user_id"
                  class="w-full appearance-none px-3.5 py-2.5 pr-10 bg-surface border border-border rounded-lg text-sm text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all cursor-pointer">
                  <option [ngValue]="null">S\xE9lectionner un collaborateur</option>
                  @for (member of teamMembers(); track member.id) {
                    <option [ngValue]="member.id">{{ member.first_name }} {{ member.last_name }} \u2014 {{ member.job_title }}</option>
                  }
                </select>
                <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-base">person_search</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center justify-end gap-3 pt-5 border-t border-border">
              <a [routerLink]="[baseRoute() + '/projects/' + projectId]"
                class="px-5 py-2.5 text-sm font-semibold text-text-secondary border border-border rounded-lg hover:bg-background-alt transition-all cursor-pointer">
                Annuler
              </a>
              <button type="submit" [disabled]="saving()"
                class="px-5 py-2.5 text-sm font-semibold bg-primary text-text-inverse rounded-lg shadow-sm hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 cursor-pointer">
                @if (saving()) {
                  <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
                } @else {
                  <span class="material-symbols-outlined text-sm">add_task</span>
                }
                Cr\xE9er la t\xE2che
              </button>
            </div>

          </form>
        </div>
      </div>

      <!-- Side Panel -->
      <div class="lg:col-span-4 space-y-6">

        <!-- Helper Card -->
        <div class="bg-surface border border-border rounded-xl p-6">
          <div class="flex items-center gap-2 mb-4 text-primary">
            <span class="material-symbols-outlined">lightbulb</span>
            <h4 class="font-heading text-lg font-semibold text-text-heading">Conseils</h4>
          </div>
          <ul class="space-y-3">
            <li class="flex gap-2.5 text-sm text-text-secondary">
              <span class="material-symbols-outlined text-base text-accent shrink-0 mt-0.5">check_circle</span>
              Soyez sp\xE9cifique dans le titre pour une identification rapide.
            </li>
            <li class="flex gap-2.5 text-sm text-text-secondary">
              <span class="material-symbols-outlined text-base text-accent shrink-0 mt-0.5">check_circle</span>
              D\xE9finissez une priorit\xE9 "Haute" uniquement pour les urgences r\xE9elles.
            </li>
            <li class="flex gap-2.5 text-sm text-text-secondary">
              <span class="material-symbols-outlined text-base text-accent shrink-0 mt-0.5">check_circle</span>
              L'assignation d'une date d'\xE9ch\xE9ance aide \xE0 la gestion du calendrier d'\xE9quipe.
            </li>
          </ul>
        </div>

      

      </div>

    </div>
  </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskFormComponent, { className: "TaskFormComponent", filePath: "src/app/features/shared/tasks/task-form/task-form.component.ts", lineNumber: 15 });
})();
export {
  TaskFormComponent
};
//# sourceMappingURL=chunk-C7MGYEA7.js.map
