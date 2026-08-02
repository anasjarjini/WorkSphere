import {
  ServiceRequestService
} from "./chunk-ZKL55WQO.js";
import {
  DepartmentService
} from "./chunk-MQA6KGB6.js";
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
} from "./chunk-7RQSPZX3.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZST2RCVM.js";

// src/app/features/shared/service-requests/request-form/request-form.component.ts
var _c0 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.id;
function RequestFormComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function RequestFormComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", dept_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r2.name);
  }
}
function RequestFormComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
var RequestFormComponent = class _RequestFormComponent {
  requestService = inject(ServiceRequestService);
  departmentService = inject(DepartmentService);
  authService = inject(AuthService);
  router = inject(Router);
  user = this.authService.currentUser;
  departments = signal(
    [],
    ...ngDevMode ? [{ debugName: "departments" }] : (
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
  formData = {
    title: "",
    description: "",
    to_department_id: null,
    project_id: null,
    priority: ""
  };
  baseRoute = computed(
    () => {
      const role = this.user()?.role;
      if (role === "HR_ADMIN")
        return "/admin";
      if (role === "MANAGER")
        return "/manager";
      return "/employee";
    },
    ...ngDevMode ? [{ debugName: "baseRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments.set(data),
      error: () => {
      }
    });
  }
  onSubmit() {
    if (!this.formData.title.trim()) {
      this.errorMessage.set("Le titre est requis.");
      return;
    }
    if (!this.formData.to_department_id) {
      this.errorMessage.set("Veuillez s\xE9lectionner un d\xE9partement destinataire.");
      return;
    }
    this.saving.set(true);
    this.errorMessage.set(null);
    const payload = __spreadValues({}, this.formData);
    if (!payload.to_department_id)
      delete payload.to_department_id;
    if (!payload.project_id)
      delete payload.project_id;
    if (!payload.priority)
      delete payload.priority;
    this.requestService.createRequest(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute()}/requests`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || "Erreur lors de la cr\xE9ation.");
      }
    });
  }
  static \u0275fac = function RequestFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestFormComponent, selectors: [["app-request-form"]], decls: 47, vars: 14, consts: [[1, "max-w-3xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "items-center", "gap-3"], [1, "text-text-secondary", "hover:text-text", "transition-colors", "p-1", "cursor-pointer", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "sm:p-8", "flex", "flex-col", "gap-6", 3, "ngSubmit"], [1, "bg-error-light", "border", "border-error/20", "rounded-md", "px-4", "py-3", "text-sm", "font-medium", "text-error-dark"], [1, "block", "text-sm", "font-semibold", "text-text", "mb-1.5"], ["type", "text", "name", "title", "required", "", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "4", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", "resize-vertical", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], ["name", "to_department_id", "required", "", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["name", "priority", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "LOW"], ["value", "MEDIUM"], ["value", "HIGH"], ["value", "CRITICAL"], [1, "flex", "items-center", "justify-end", "gap-3", "pt-2", "border-t", "border-border"], [1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-text-secondary", "border", "border-border", "rounded-md", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "routerLink"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "bg-primary", "text-text-inverse", "rounded-md", "hover:bg-primary-hover", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "flex", "items-center", "gap-2", "cursor-pointer", 3, "disabled"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"]], template: function RequestFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "line", 4)(5, "polyline", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, "Nouvelle demande");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 7);
      \u0275\u0275listener("ngSubmit", function RequestFormComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275conditionalCreate(9, RequestFormComponent_Conditional_9_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(10, "div")(11, "label", 9);
      \u0275\u0275text(12, "Titre *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RequestFormComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.title, $event) || (ctx.formData.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "label", 9);
      \u0275\u0275text(16, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "textarea", 11);
      \u0275\u0275twoWayListener("ngModelChange", function RequestFormComponent_Template_textarea_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.description, $event) || (ctx.formData.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "div")(20, "label", 9);
      \u0275\u0275text(21, "D\xE9partement destinataire *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function RequestFormComponent_Template_select_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.to_department_id, $event) || (ctx.formData.to_department_id = $event);
        return $event;
      });
      \u0275\u0275elementStart(23, "option", 14);
      \u0275\u0275text(24, "S\xE9lectionner...");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(25, RequestFormComponent_For_26_Template, 2, 2, "option", 14, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div")(28, "label", 9);
      \u0275\u0275text(29, "Priorit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function RequestFormComponent_Template_select_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.priority, $event) || (ctx.formData.priority = $event);
        return $event;
      });
      \u0275\u0275elementStart(31, "option", 16);
      \u0275\u0275text(32, "S\xE9lectionner...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 17);
      \u0275\u0275text(34, "Faible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 18);
      \u0275\u0275text(36, "Moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 19);
      \u0275\u0275text(38, "Haute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 20);
      \u0275\u0275text(40, "Critique");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 21)(42, "a", 22);
      \u0275\u0275text(43, " Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 23);
      \u0275\u0275conditionalCreate(45, RequestFormComponent_Conditional_45_Template, 1, 0, "span", 24);
      \u0275\u0275text(46, " Soumettre la demande ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, ctx.baseRoute() + "/requests"));
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.errorMessage() ? 9 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.title);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.description);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.to_department_id);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.departments());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.priority);
      \u0275\u0275control();
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx.baseRoute() + "/requests"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 45 : -1);
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestFormComponent, [{
    type: Component,
    args: [{ selector: "app-request-form", standalone: true, imports: [RouterModule, FormsModule], template: `<div class="max-w-3xl mx-auto flex flex-col gap-6">
  <div class="flex items-center gap-3">
    <a [routerLink]="[baseRoute() + '/requests']" class="text-text-secondary hover:text-text transition-colors p-1 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </a>
    <h1 class="font-heading text-2xl font-bold text-text-heading">Nouvelle demande</h1>
  </div>

  <form (ngSubmit)="onSubmit()" class="bg-surface border border-border rounded-xl p-6 sm:p-8 flex flex-col gap-6">
    @if (errorMessage()) {
      <div class="bg-error-light border border-error/20 rounded-md px-4 py-3 text-sm font-medium text-error-dark">
        {{ errorMessage() }}
      </div>
    }

    <div>
      <label class="block text-sm font-semibold text-text mb-1.5">Titre *</label>
      <input type="text" [(ngModel)]="formData.title" name="title" required
        class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
    </div>

    <div>
      <label class="block text-sm font-semibold text-text mb-1.5">Description</label>
      <textarea [(ngModel)]="formData.description" name="description" rows="4"
        class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-vertical"></textarea>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label class="block text-sm font-semibold text-text mb-1.5">D\xE9partement destinataire *</label>
        <select [(ngModel)]="formData.to_department_id" name="to_department_id" required
          class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
          <option [ngValue]="null">S\xE9lectionner...</option>
          @for (dept of departments(); track dept.id) {
            <option [ngValue]="dept.id">{{ dept.name }}</option>
          }
        </select>
      </div>

      <div>
        <label class="block text-sm font-semibold text-text mb-1.5">Priorit\xE9</label>
        <select [(ngModel)]="formData.priority" name="priority"
          class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
          <option value="">S\xE9lectionner...</option>
          <option value="LOW">Faible</option>
          <option value="MEDIUM">Moyenne</option>
          <option value="HIGH">Haute</option>
          <option value="CRITICAL">Critique</option>
        </select>
      </div>
    </div>

    <div class="flex items-center justify-end gap-3 pt-2 border-t border-border">
      <a [routerLink]="[baseRoute() + '/requests']"
        class="px-5 py-2.5 text-sm font-semibold text-text-secondary border border-border rounded-md hover:bg-background-alt transition-colors cursor-pointer">
        Annuler
      </a>
      <button type="submit" [disabled]="saving()"
        class="px-5 py-2.5 text-sm font-semibold bg-primary text-text-inverse rounded-md hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 cursor-pointer">
        @if (saving()) {
          <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
        }
        Soumettre la demande
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestFormComponent, { className: "RequestFormComponent", filePath: "src/app/features/shared/service-requests/request-form/request-form.component.ts", lineNumber: 15 });
})();
export {
  RequestFormComponent
};
//# sourceMappingURL=chunk-ZLOQ7DM5.js.map
