import {
  ProjectService
} from "./chunk-RUGM4DEW.js";
import {
  FileUploaderComponent
} from "./chunk-BYBK475U.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-7RQSPZX3.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  computed,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZST2RCVM.js";

// src/app/features/projects/project-form/project-form.component.ts
var _c0 = (a0) => [a0];
function ProjectFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 5)(2, "div", 5)(3, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function ProjectFormComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage(), " ");
  }
}
function ProjectFormComponent_Conditional_7_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function ProjectFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function ProjectFormComponent_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275conditionalCreate(1, ProjectFormComponent_Conditional_7_Conditional_1_Template, 2, 1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9)(3, "div", 10)(4, "label", 11);
    \u0275\u0275text(5, "Nom du projet ");
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectFormComponent_Conditional_7_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.name, $event) || (ctx_r1.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10)(10, "label", 11);
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectFormComponent_Conditional_7_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.description, $event) || (ctx_r1.formData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15)(14, "label", 11);
    \u0275\u0275text(15, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 16)(17, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectFormComponent_Conditional_7_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.priority, $event) || (ctx_r1.formData.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 18);
    \u0275\u0275text(19, "S\xE9lectionner...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 19);
    \u0275\u0275text(21, "Faible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 20);
    \u0275\u0275text(23, "Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 21);
    \u0275\u0275text(25, "Haute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 22);
    \u0275\u0275text(27, "Critique");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(28, "span", 23);
    \u0275\u0275text(29, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 15)(31, "label", 11);
    \u0275\u0275text(32, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 24)(34, "input", 25);
    \u0275\u0275listener("input", function ProjectFormComponent_Conditional_7_Template_input_input_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateProgress(+$event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 26);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 15)(38, "label", 11);
    \u0275\u0275text(39, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 16)(41, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectFormComponent_Conditional_7_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.status, $event) || (ctx_r1.formData.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(42, "option", 28);
    \u0275\u0275text(43, "Planification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 29);
    \u0275\u0275text(45, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 30);
    \u0275\u0275text(47, "En pause");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 31);
    \u0275\u0275text(49, "Termin\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(50, "span", 23);
    \u0275\u0275text(51, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "p", 32);
    \u0275\u0275text(53, "Le statut est calcul\xE9 automatiquement selon la progression");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 15)(55, "label", 11);
    \u0275\u0275text(56, "Date de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectFormComponent_Conditional_7_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.start_date, $event) || (ctx_r1.formData.start_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 15)(59, "label", 11);
    \u0275\u0275text(60, "Date de fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectFormComponent_Conditional_7_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.end_date, $event) || (ctx_r1.formData.end_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 15)(63, "label", 11);
    \u0275\u0275text(64, "Budget estim\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectFormComponent_Conditional_7_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.estimated_budget, $event) || (ctx_r1.formData.estimated_budget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 15)(67, "label", 11);
    \u0275\u0275text(68, "Devise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 16)(70, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectFormComponent_Conditional_7_Template_select_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.currency, $event) || (ctx_r1.formData.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(71, "option", 37);
    \u0275\u0275text(72, "MAD (Dirham)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "option", 38);
    \u0275\u0275text(74, "EUR (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "option", 39);
    \u0275\u0275text(76, "USD ($)");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(77, "span", 23);
    \u0275\u0275text(78, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 10)(80, "label", 11);
    \u0275\u0275text(81, "Cahier des charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "app-file-uploader", 40);
    \u0275\u0275listener("fileSelected", function ProjectFormComponent_Conditional_7_Template_app_file_uploader_fileSelected_82_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCahierChargesSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 41)(84, "a", 42);
    \u0275\u0275text(85, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 43);
    \u0275\u0275conditionalCreate(87, ProjectFormComponent_Conditional_7_Conditional_87_Template, 1, 0, "span", 44);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 1 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.name);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.description);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.priority);
    \u0275\u0275control();
    \u0275\u0275advance(17);
    \u0275\u0275property("value", ctx_r1.formData.progress_percentage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.formData.progress_percentage, "%");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.status);
    \u0275\u0275control();
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.start_date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.end_date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.estimated_budget);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.currency);
    \u0275\u0275control();
    \u0275\u0275advance(12);
    \u0275\u0275property("maxSizeMB", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, ctx_r1.baseRoute + "/projects"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 87 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEdit() ? "Enregistrer" : "Cr\xE9er le projet", " ");
  }
}
var ProjectFormComponent = class _ProjectFormComponent {
  projectService = inject(ProjectService);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  user = this.authService.currentUser;
  isEdit = signal(
    false,
    ...ngDevMode ? [{ debugName: "isEdit" }] : (
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
  title = computed(
    () => this.isEdit() ? "Modifier le projet" : "Nouveau projet",
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formData = {
    name: "",
    description: "",
    priority: "",
    status: "PLANIFICATION",
    progress_percentage: 0,
    start_date: "",
    end_date: "",
    estimated_budget: null,
    currency: "MAD"
  };
  cahierChargesFile = null;
  updateProgress(value) {
    this.formData.progress_percentage = Math.max(0, Math.min(100, value));
    this.formData.status = this.formData.progress_percentage === 0 ? "PLANIFICATION" : this.formData.progress_percentage === 100 ? "TERMINE" : "EN_COURS";
  }
  projectId = null;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit.set(true);
      this.projectId = +id;
      this.loadProject(+id);
    }
  }
  loadProject(id) {
    this.loading.set(true);
    this.projectService.getProject(id).subscribe({
      next: (project) => {
        this.formData = {
          name: project.name,
          description: project.description || "",
          priority: project.priority || "",
          status: project.status || "PLANIFICATION",
          progress_percentage: project.progress_percentage ?? 0,
          start_date: project.start_date || "",
          end_date: project.end_date || "",
          estimated_budget: project.estimated_budget ?? null,
          currency: project.currency || "MAD"
        };
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set("Erreur lors du chargement du projet.");
      }
    });
  }
  onCahierChargesSelected(file) {
    this.cahierChargesFile = file;
  }
  get baseRoute() {
    const role = this.user()?.role;
    return role === "HR_ADMIN" ? "/admin" : "/manager";
  }
  onSubmit() {
    if (!this.formData.name.trim()) {
      this.errorMessage.set("Le nom du projet est requis.");
      return;
    }
    this.saving.set(true);
    this.errorMessage.set(null);
    const payload = {};
    payload["name"] = this.formData.name;
    if (this.formData.description)
      payload["description"] = this.formData.description;
    payload["status"] = this.formData.status;
    if (this.formData.priority)
      payload["priority"] = this.formData.priority;
    payload["progress_percentage"] = this.formData.progress_percentage;
    if (this.formData.start_date)
      payload["start_date"] = this.formData.start_date;
    if (this.formData.end_date)
      payload["end_date"] = this.formData.end_date;
    if (this.formData.estimated_budget !== null)
      payload["estimated_budget"] = this.formData.estimated_budget;
    payload["currency"] = this.formData.currency;
    const project$ = this.isEdit() && this.projectId ? this.projectService.updateProject(this.projectId, payload) : this.projectService.createProject(payload);
    project$.pipe(switchMap((project) => {
      if (this.cahierChargesFile) {
        return this.projectService.uploadCahierCharges(project.id, this.cahierChargesFile);
      }
      return of(null);
    })).subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute}/projects`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || err.statusText || "Une erreur est survenue lors de l'enregistrement.");
      }
    });
  }
  static \u0275fac = function ProjectFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectFormComponent, selectors: [["app-project-form"]], decls: 8, vars: 2, consts: [[1, "max-w-3xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "text-2xl", "font-heading", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-8", "animate-pulse", "space-y-4"], [1, "bg-surface", "rounded-xl", "border", "border-border", "p-6", "sm:p-8", "flex", "flex-col", "gap-6", "shadow-sm"], [1, "h-10", "bg-border", "rounded-lg", "w-full"], [1, "h-20", "bg-border", "rounded-lg", "w-full"], [1, "bg-surface", "rounded-xl", "border", "border-border", "p-6", "sm:p-8", "flex", "flex-col", "gap-6", "shadow-sm", 3, "ngSubmit"], [1, "bg-error-light", "border", "border-error/20", "rounded-md", "px-4", "py-3", "text-sm", "font-medium", "text-error-dark"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], [1, "sm:col-span-2", "flex", "flex-col", "gap-1.5"], [1, "text-sm", "font-medium", "text-text"], [1, "text-error-dark"], ["type", "text", "name", "name", "required", "", "placeholder", "Ex: Refonte du portail interne", 1, "w-full", "rounded-lg", "bg-surface", "border", "border-border", "px-3.5", "py-2.5", "text-sm", "text-text", "placeholder:text-text-muted", "focus:border-primary", "focus:ring-2", "focus:ring-primary/20", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "4", "placeholder", "D\xE9crivez les objectifs et la port\xE9e du projet...", 1, "w-full", "rounded-lg", "bg-surface", "border", "border-border", "px-3.5", "py-2.5", "text-sm", "text-text", "placeholder:text-text-muted", "focus:border-primary", "focus:ring-2", "focus:ring-primary/20", "outline-none", "transition-all", "resize-y", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "gap-1.5"], [1, "relative"], ["name", "priority", 1, "w-full", "appearance-none", "rounded-lg", "bg-surface", "border", "border-border", "px-3.5", "py-2.5", "pr-10", "text-sm", "text-text", "focus:border-primary", "focus:ring-2", "focus:ring-primary/20", "outline-none", "transition-all", "cursor-pointer", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "low"], ["value", "medium"], ["value", "high"], ["value", "critical"], [1, "material-symbols-outlined", "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-text-secondary", "pointer-events-none"], [1, "flex", "items-center", "gap-3"], ["type", "range", "min", "0", "max", "100", "step", "1", 1, "flex-1", "h-2", "rounded-full", "appearance-none", "cursor-pointer", "bg-border", "accent-[#630ed4]", 3, "input", "value"], [1, "text-sm", "font-bold", "text-primary", "min-w-[3ch]", "text-right", "tabular-nums"], ["name", "status", "disabled", "", 1, "w-full", "appearance-none", "rounded-lg", "bg-surface", "border", "border-border", "px-3.5", "py-2.5", "pr-10", "text-sm", "text-text", "opacity-80", "cursor-not-allowed", "focus:border-primary", "focus:ring-2", "focus:ring-primary/20", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["value", "PLANIFICATION"], ["value", "EN_COURS"], ["value", "EN_PAUSE"], ["value", "TERMINE"], [1, "text-xs", "text-text-muted"], ["type", "date", "name", "start_date", 1, "w-full", "rounded-lg", "bg-surface", "border", "border-border", "px-3.5", "py-2.5", "text-sm", "text-text", "focus:border-primary", "focus:ring-2", "focus:ring-primary/20", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "end_date", 1, "w-full", "rounded-lg", "bg-surface", "border", "border-border", "px-3.5", "py-2.5", "text-sm", "text-text", "focus:border-primary", "focus:ring-2", "focus:ring-primary/20", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "name", "estimated_budget", "placeholder", "0.00", 1, "w-full", "rounded-lg", "bg-surface", "border", "border-border", "px-3.5", "py-2.5", "text-sm", "text-text", "placeholder:text-text-muted", "focus:border-primary", "focus:ring-2", "focus:ring-primary/20", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["name", "currency", 1, "w-full", "appearance-none", "rounded-lg", "bg-surface", "border", "border-border", "px-3.5", "py-2.5", "pr-10", "text-sm", "text-text", "focus:border-primary", "focus:ring-2", "focus:ring-primary/20", "outline-none", "transition-all", "cursor-pointer", 3, "ngModelChange", "ngModel"], ["value", "MAD"], ["value", "EUR"], ["value", "USD"], ["accept", ".pdf,.doc,.docx,.zip", "label", "Cahier des charges", 3, "fileSelected", "maxSizeMB"], [1, "flex", "items-center", "justify-end", "gap-3", "pt-4", "border-t", "border-border"], [1, "px-5", "py-2.5", "rounded-lg", "border", "border-border", "text-text-secondary", "text-sm", "font-medium", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "routerLink"], ["type", "submit", 1, "px-5", "py-2.5", "rounded-lg", "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "hover:bg-primary-hover", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shadow-sm", 3, "disabled"], [1, "w-4", "h-4", "border-2", "border-text-inverse/30", "border-t-text-inverse", "rounded-full", "animate-spin", "inline-block"]], template: function ProjectFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Remplissez les informations du projet");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ProjectFormComponent_Conditional_6_Template, 4, 0, "div", 3)(7, ProjectFormComponent_Conditional_7_Template, 89, 18, "form", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 6 : 7);
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, FileUploaderComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectFormComponent, [{
    type: Component,
    args: [{ selector: "app-project-form", standalone: true, imports: [RouterModule, FormsModule, FileUploaderComponent], template: `<div class="max-w-3xl mx-auto flex flex-col gap-6">

  <!-- Breadcrumbs & Header -->
  <div>
  
    <h1 class="text-2xl font-heading font-bold text-text-heading">{{ title() }}</h1>
    <p class="text-sm text-text-secondary mt-1">Remplissez les informations du projet</p>
  </div>

  @if (loading()) {
    <div class="bg-surface border border-border rounded-xl p-8 animate-pulse space-y-4">
      <div class="h-10 bg-border rounded-lg w-full"></div>
      <div class="h-10 bg-border rounded-lg w-full"></div>
      <div class="h-20 bg-border rounded-lg w-full"></div>
    </div>
  } @else {
    <form (ngSubmit)="onSubmit()" class="bg-surface rounded-xl border border-border p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
      @if (errorMessage()) {
        <div class="bg-error-light border border-error/20 rounded-md px-4 py-3 text-sm font-medium text-error-dark">
          {{ errorMessage() }}
        </div>
      }

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <!-- Nom du projet -->
        <div class="sm:col-span-2 flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Nom du projet <span class="text-error-dark">*</span></label>
          <input type="text" [(ngModel)]="formData.name" name="name" required placeholder="Ex: Refonte du portail interne"
            class="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
        </div>

        <!-- Description -->
        <div class="sm:col-span-2 flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Description</label>
          <textarea [(ngModel)]="formData.description" name="description" rows="4" placeholder="D\xE9crivez les objectifs et la port\xE9e du projet..."
            class="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"></textarea>
        </div>

        <!-- Priorit\xE9 -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Priorit\xE9</label>
          <div class="relative">
            <select [(ngModel)]="formData.priority" name="priority"
              class="w-full appearance-none rounded-lg bg-surface border border-border px-3.5 py-2.5 pr-10 text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer">
              <option value="">S\xE9lectionner...</option>
              <option value="low">Faible</option>
              <option value="medium">Moyenne</option>
              <option value="high">Haute</option>
              <option value="critical">Critique</option>
            </select>
            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">expand_more</span>
          </div>
        </div>

        <!-- Progression -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Progression</label>
          <div class="flex items-center gap-3">
            <input type="range" min="0" max="100" step="1"
              [value]="formData.progress_percentage"
              (input)="updateProgress(+$any($event.target).value)"
              class="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-border accent-[#630ed4]" />
            <span class="text-sm font-bold text-primary min-w-[3ch] text-right tabular-nums">{{ formData.progress_percentage }}%</span>
          </div>
        </div>

        <!-- Statut -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Statut</label>
          <div class="relative">
            <select [(ngModel)]="formData.status" name="status" disabled
              class="w-full appearance-none rounded-lg bg-surface border border-border px-3.5 py-2.5 pr-10 text-sm text-text opacity-80 cursor-not-allowed focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
              <option value="PLANIFICATION">Planification</option>
              <option value="EN_COURS">En cours</option>
              <option value="EN_PAUSE">En pause</option>
              <option value="TERMINE">Termin\xE9</option>
            </select>
            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">expand_more</span>
          </div>
          <p class="text-xs text-text-muted">Le statut est calcul\xE9 automatiquement selon la progression</p>
        </div>

        <!-- Dates -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Date de d\xE9but</label>
          <input type="date" [(ngModel)]="formData.start_date" name="start_date"
            class="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Date de fin</label>
          <input type="date" [(ngModel)]="formData.end_date" name="end_date"
            class="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
        </div>

        <!-- Budget & Devise -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Budget estim\xE9</label>
          <input type="number" step="0.01" [(ngModel)]="formData.estimated_budget" name="estimated_budget" placeholder="0.00"
            class="w-full rounded-lg bg-surface border border-border px-3.5 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Devise</label>
          <div class="relative">
            <select [(ngModel)]="formData.currency" name="currency"
              class="w-full appearance-none rounded-lg bg-surface border border-border px-3.5 py-2.5 pr-10 text-sm text-text focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer">
              <option value="MAD">MAD (Dirham)</option>
              <option value="EUR">EUR (\u20AC)</option>
              <option value="USD">USD ($)</option>
            </select>
            <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">expand_more</span>
          </div>
        </div>

        <!-- Cahier des charges -->
        <div class="sm:col-span-2 flex flex-col gap-1.5">
          <label class="text-sm font-medium text-text">Cahier des charges</label>
          <app-file-uploader accept=".pdf,.doc,.docx,.zip" [maxSizeMB]="20" label="Cahier des charges"
            (fileSelected)="onCahierChargesSelected($event)" />
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-end gap-3 pt-4 border-t border-border">
        <a [routerLink]="[baseRoute + '/projects']"
          class="px-5 py-2.5 rounded-lg border border-border text-text-secondary text-sm font-medium hover:bg-background-alt transition-colors cursor-pointer">
          Annuler
        </a>
        <button type="submit" [disabled]="saving()"
          class="px-5 py-2.5 rounded-lg bg-primary text-text-inverse text-sm font-semibold hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 cursor-pointer shadow-sm">
          @if (saving()) {
            <span class="w-4 h-4 border-2 border-text-inverse/30 border-t-text-inverse rounded-full animate-spin inline-block"></span>
          }
          {{ isEdit() ? 'Enregistrer' : 'Cr\xE9er le projet' }}
        </button>
      </div>
    </form>
  }
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectFormComponent, { className: "ProjectFormComponent", filePath: "src/app/features/projects/project-form/project-form.component.ts", lineNumber: 17 });
})();
export {
  ProjectFormComponent
};
//# sourceMappingURL=chunk-HUPBL5CI.js.map
