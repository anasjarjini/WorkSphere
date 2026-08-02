import {
  DepartmentService
} from "./chunk-MQA6KGB6.js";
import {
  AnnouncementService
} from "./chunk-MAATT2I5.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZST2RCVM.js";

// src/app/features/shared/announcements/announcement-form/announcement-form.component.ts
var _c0 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.id;
function AnnouncementFormComponent_Conditional_9_Template(rf, ctx) {
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
function AnnouncementFormComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
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
function AnnouncementFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 9);
    \u0275\u0275text(2, "Date de r\xE9union");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementFormComponent_Conditional_39_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.meeting_date, $event) || (ctx_r0.formData.meeting_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "label", 9);
    \u0275\u0275text(6, "Lien r\xE9union");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementFormComponent_Conditional_39_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.meeting_link, $event) || (ctx_r0.formData.meeting_link = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.meeting_date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.meeting_link);
    \u0275\u0275control();
  }
}
function AnnouncementFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 9);
    \u0275\u0275text(2, "Lien formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementFormComponent_Conditional_40_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.training_link, $event) || (ctx_r0.formData.training_link = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.training_link);
    \u0275\u0275control();
  }
}
function AnnouncementFormComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
var AnnouncementFormComponent = class _AnnouncementFormComponent {
  announcementService = inject(AnnouncementService);
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
    content: "",
    type: "GENERAL",
    department_id: null,
    meeting_date: "",
    meeting_link: "",
    training_link: ""
  };
  isMeeting = computed(
    () => this.formData.type === "MEETING",
    ...ngDevMode ? [{ debugName: "isMeeting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isTraining = computed(
    () => this.formData.type === "TRAINING",
    ...ngDevMode ? [{ debugName: "isTraining" }] : (
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
    if (!this.formData.content.trim()) {
      this.errorMessage.set("Le contenu est requis.");
      return;
    }
    this.saving.set(true);
    this.errorMessage.set(null);
    const payload = __spreadValues({}, this.formData);
    if (!payload.department_id)
      delete payload.department_id;
    if (!payload.meeting_date)
      delete payload.meeting_date;
    if (!payload.meeting_link)
      delete payload.meeting_link;
    if (!payload.training_link)
      delete payload.training_link;
    this.announcementService.createAnnouncement(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.router.navigate([`${this.baseRoute()}/announcements`]);
      },
      error: (err) => {
        this.saving.set(false);
        this.errorMessage.set(err.error?.message || "Erreur lors de la cr\xE9ation.");
      }
    });
  }
  static \u0275fac = function AnnouncementFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnouncementFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnouncementFormComponent, selectors: [["app-announcement-form"]], decls: 47, vars: 16, consts: [[1, "max-w-3xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "items-center", "gap-3"], [1, "text-text-secondary", "hover:text-text", "transition-colors", "p-1", "cursor-pointer", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "sm:p-8", "flex", "flex-col", "gap-6", 3, "ngSubmit"], [1, "bg-error-light", "border", "border-error/20", "rounded-md", "px-4", "py-3", "text-sm", "font-medium", "text-error-dark"], [1, "block", "text-sm", "font-semibold", "text-text", "mb-1.5"], ["type", "text", "name", "title", "required", "", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], ["name", "content", "rows", "6", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", "resize-vertical", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-5"], ["name", "type", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], ["value", "GENERAL"], ["value", "MEETING"], ["value", "TRAINING"], ["value", "POLICY"], ["name", "department_id", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "sm:col-span-2"], [1, "flex", "items-center", "justify-end", "gap-3", "pt-2", "border-t", "border-border"], [1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-text-secondary", "border", "border-border", "rounded-md", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "routerLink"], ["type", "submit", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "bg-primary", "text-text-inverse", "rounded-md", "hover:bg-primary-hover", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "flex", "items-center", "gap-2", "cursor-pointer", 3, "disabled"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"], ["type", "datetime-local", "name", "meeting_date", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "meeting_link", "placeholder", "https://...", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "training_link", "placeholder", "https://...", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"]], template: function AnnouncementFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "line", 4)(5, "polyline", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, "Nouvelle annonce");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 7);
      \u0275\u0275listener("ngSubmit", function AnnouncementFormComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275conditionalCreate(9, AnnouncementFormComponent_Conditional_9_Template, 2, 1, "div", 8);
      \u0275\u0275elementStart(10, "div")(11, "label", 9);
      \u0275\u0275text(12, "Titre *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AnnouncementFormComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.title, $event) || (ctx.formData.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "label", 9);
      \u0275\u0275text(16, "Contenu *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "textarea", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AnnouncementFormComponent_Template_textarea_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.content, $event) || (ctx.formData.content = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "div")(20, "label", 9);
      \u0275\u0275text(21, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AnnouncementFormComponent_Template_select_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.type, $event) || (ctx.formData.type = $event);
        return $event;
      });
      \u0275\u0275elementStart(23, "option", 14);
      \u0275\u0275text(24, "G\xE9n\xE9ral");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 15);
      \u0275\u0275text(26, "R\xE9union");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 16);
      \u0275\u0275text(28, "Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 17);
      \u0275\u0275text(30, "Politique");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div")(32, "label", 9);
      \u0275\u0275text(33, "D\xE9partement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AnnouncementFormComponent_Template_select_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.department_id, $event) || (ctx.formData.department_id = $event);
        return $event;
      });
      \u0275\u0275elementStart(35, "option", 19);
      \u0275\u0275text(36, "Toute l'entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(37, AnnouncementFormComponent_For_38_Template, 2, 2, "option", 19, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(39, AnnouncementFormComponent_Conditional_39_Template, 8, 2);
      \u0275\u0275conditionalCreate(40, AnnouncementFormComponent_Conditional_40_Template, 4, 1, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 21)(42, "a", 22);
      \u0275\u0275text(43, " Annuler ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 23);
      \u0275\u0275conditionalCreate(45, AnnouncementFormComponent_Conditional_45_Template, 1, 0, "span", 24);
      \u0275\u0275text(46, " Publier ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx.baseRoute() + "/announcements"));
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.errorMessage() ? 9 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.title);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.content);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.type);
      \u0275\u0275control();
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.department_id);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.departments());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isMeeting() ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isTraining() ? 40 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c0, ctx.baseRoute() + "/announcements"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 45 : -1);
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementFormComponent, [{
    type: Component,
    args: [{ selector: "app-announcement-form", standalone: true, imports: [RouterModule, FormsModule], template: `<div class="max-w-3xl mx-auto flex flex-col gap-6">
  <div class="flex items-center gap-3">
    <a [routerLink]="[baseRoute() + '/announcements']" class="text-text-secondary hover:text-text transition-colors p-1 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </a>
    <h1 class="font-heading text-2xl font-bold text-text-heading">Nouvelle annonce</h1>
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
      <label class="block text-sm font-semibold text-text mb-1.5">Contenu *</label>
      <textarea [(ngModel)]="formData.content" name="content" rows="6"
        class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-vertical"></textarea>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label class="block text-sm font-semibold text-text mb-1.5">Type</label>
        <select [(ngModel)]="formData.type" name="type"
          class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
          <option value="GENERAL">G\xE9n\xE9ral</option>
          <option value="MEETING">R\xE9union</option>
          <option value="TRAINING">Formation</option>
          <option value="POLICY">Politique</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-semibold text-text mb-1.5">D\xE9partement</label>
        <select [(ngModel)]="formData.department_id" name="department_id"
          class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
          <option [ngValue]="null">Toute l'entreprise</option>
          @for (dept of departments(); track dept.id) {
            <option [ngValue]="dept.id">{{ dept.name }}</option>
          }
        </select>
      </div>

      @if (isMeeting()) {
        <div>
          <label class="block text-sm font-semibold text-text mb-1.5">Date de r\xE9union</label>
          <input type="datetime-local" [(ngModel)]="formData.meeting_date" name="meeting_date"
            class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-text mb-1.5">Lien r\xE9union</label>
          <input type="url" [(ngModel)]="formData.meeting_link" name="meeting_link" placeholder="https://..."
            class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
        </div>
      }

      @if (isTraining()) {
        <div class="sm:col-span-2">
          <label class="block text-sm font-semibold text-text mb-1.5">Lien formation</label>
          <input type="url" [(ngModel)]="formData.training_link" name="training_link" placeholder="https://..."
            class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
        </div>
      }
    </div>

    <div class="flex items-center justify-end gap-3 pt-2 border-t border-border">
      <a [routerLink]="[baseRoute() + '/announcements']"
        class="px-5 py-2.5 text-sm font-semibold text-text-secondary border border-border rounded-md hover:bg-background-alt transition-colors cursor-pointer">
        Annuler
      </a>
      <button type="submit" [disabled]="saving()"
        class="px-5 py-2.5 text-sm font-semibold bg-primary text-text-inverse rounded-md hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 cursor-pointer">
        @if (saving()) {
          <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
        }
        Publier
      </button>
    </div>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnouncementFormComponent, { className: "AnnouncementFormComponent", filePath: "src/app/features/shared/announcements/announcement-form/announcement-form.component.ts", lineNumber: 16 });
})();
export {
  AnnouncementFormComponent
};
//# sourceMappingURL=chunk-NOXYNFZX.js.map
