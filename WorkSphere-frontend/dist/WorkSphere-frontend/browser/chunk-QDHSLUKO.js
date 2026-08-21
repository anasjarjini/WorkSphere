import {
  ServiceRequestService
} from "./chunk-AT65WJ62.js";
import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  ɵɵclassMap,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/shared/service-requests/request-detail/request-detail.component.ts
var _c0 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.id;
function RequestDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275element(3, "div", 4)(4, "div", 5);
    \u0275\u0275elementEnd()();
  }
}
function RequestDetailComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p", 21);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.description);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 23);
    \u0275\u0275text(2, "D\xE9partement demandeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.from_department.name);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 23);
    \u0275\u0275text(2, "D\xE9partement destinataire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.to_department.name);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 23);
    \u0275\u0275text(2, "Cr\xE9\xE9 par");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r1.creator.first_name, " ", r_r1.creator.last_name);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 23);
    \u0275\u0275text(2, "D\xE9veloppeur assign\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r1.developer.first_name, " ", r_r1.developer.last_name);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 23);
    \u0275\u0275text(2, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.priority);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 23);
    \u0275\u0275text(2, "Assign\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.assigned_at);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 23);
    \u0275\u0275text(2, "R\xE9solue le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.resolved_at);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 25);
    \u0275\u0275text(2, "Motif du rejet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.rejection_reason);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.approve());
    });
    \u0275\u0275text(1, " Approuver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 8)(3, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_1_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.rejectionReason, $event) || (ctx_r2.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "button", 30);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.reject());
    });
    \u0275\u0275text(5, " Rejeter ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.rejectionReason);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.rejectionReason().trim() || ctx_r2.saving());
  }
}
function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r5 = ctx.$implicit;
    \u0275\u0275property("value", emp_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", emp_r5.first_name, " ", emp_r5.last_name);
  }
}
function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "select", 31);
    \u0275\u0275listener("change", function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_2_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectedDeveloperId.set(+$event.target.value));
    });
    \u0275\u0275elementStart(2, "option", 32);
    \u0275\u0275text(3, "Choisir un d\xE9veloppeur...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, RequestDetailComponent_Conditional_1_Conditional_25_Conditional_2_For_5_Template, 2, 3, "option", 33, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 34);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.assignDeveloper());
    });
    \u0275\u0275text(7, " Assigner ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.employees());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedDeveloperId() || ctx_r2.saving());
  }
}
function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateStatus("TESTING"));
    });
    \u0275\u0275text(1, " Passer en test ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.saving());
  }
}
function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateStatus("DEPLOYED"));
    });
    \u0275\u0275text(1, " Valider le d\xE9ploiement ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 36);
    \u0275\u0275listener("click", function RequestDetailComponent_Conditional_1_Conditional_25_Conditional_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateStatus("IN_DEVELOPMENT"));
    });
    \u0275\u0275text(3, " Renvoyer en d\xE9veloppement ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.saving());
  }
}
function RequestDetailComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275conditionalCreate(1, RequestDetailComponent_Conditional_1_Conditional_25_Conditional_1_Template, 6, 3);
    \u0275\u0275conditionalCreate(2, RequestDetailComponent_Conditional_1_Conditional_25_Conditional_2_Template, 8, 2, "div", 8);
    \u0275\u0275conditionalCreate(3, RequestDetailComponent_Conditional_1_Conditional_25_Conditional_3_Template, 2, 1, "button", 27);
    \u0275\u0275conditionalCreate(4, RequestDetailComponent_Conditional_1_Conditional_25_Conditional_4_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canApprove() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canAssignDeveloper() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canStartDevelopment() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canApproveDeployment() ? 4 : -1);
  }
}
function RequestDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "a", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 10);
    \u0275\u0275element(6, "line", 11)(7, "polyline", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h1", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16);
    \u0275\u0275conditionalCreate(15, RequestDetailComponent_Conditional_1_Conditional_15_Template, 5, 1, "div", 17);
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275conditionalCreate(17, RequestDetailComponent_Conditional_1_Conditional_17_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(18, RequestDetailComponent_Conditional_1_Conditional_18_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(19, RequestDetailComponent_Conditional_1_Conditional_19_Template, 5, 2, "div");
    \u0275\u0275conditionalCreate(20, RequestDetailComponent_Conditional_1_Conditional_20_Template, 5, 2, "div");
    \u0275\u0275conditionalCreate(21, RequestDetailComponent_Conditional_1_Conditional_21_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(22, RequestDetailComponent_Conditional_1_Conditional_22_Template, 5, 1, "div");
    \u0275\u0275conditionalCreate(23, RequestDetailComponent_Conditional_1_Conditional_23_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, RequestDetailComponent_Conditional_1_Conditional_24_Template, 5, 1, "div", 19);
    \u0275\u0275conditionalCreate(25, RequestDetailComponent_Conditional_1_Conditional_25_Template, 5, 4, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, ctx_r2.baseRoute() + "/requests"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.reference_code);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(r_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(r_r1.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r1.description ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r1.from_department ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.to_department ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.creator ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.developer ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.priority ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.assigned_at ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r1.resolved_at ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isRejected() && r_r1.rejection_reason ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showActions() ? 25 : -1);
  }
}
var STATUS_LABELS = {
  PENDING: "En attente",
  APPROVED: "Approuv\xE9e",
  IN_DEVELOPMENT: "En d\xE9veloppement",
  TESTING: "En test",
  DEPLOYED: "D\xE9ploy\xE9e",
  REJECTED: "Rejet\xE9e"
};
var STATUS_CLASSES = {
  PENDING: "bg-accent-light text-accent-dark",
  APPROVED: "bg-info-light text-info-dark",
  IN_DEVELOPMENT: "bg-primary-light text-primary-dark",
  TESTING: "bg-warning-light text-warning-dark",
  DEPLOYED: "bg-success-light text-success-dark",
  REJECTED: "bg-error-light text-error-dark"
};
var RequestDetailComponent = class _RequestDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  requestService = inject(ServiceRequestService);
  employeeService = inject(EmployeeService);
  authService = inject(AuthService);
  user = this.authService.currentUser;
  request = signal(
    null,
    ...ngDevMode ? [{ debugName: "request" }] : (
      /* istanbul ignore next */
      []
    )
  );
  employees = signal(
    [],
    ...ngDevMode ? [{ debugName: "employees" }] : (
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
  rejectionReason = signal(
    "",
    ...ngDevMode ? [{ debugName: "rejectionReason" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedDeveloperId = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedDeveloperId" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  requestId;
  canApprove = computed(
    () => {
      const r = this.request();
      return r?.status === "PENDING" && (this.user()?.role === "HR_ADMIN" || this.user()?.role === "MANAGER");
    },
    ...ngDevMode ? [{ debugName: "canApprove" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canAssignDeveloper = computed(
    () => {
      return this.request()?.status === "APPROVED" && (this.user()?.role === "HR_ADMIN" || this.user()?.role === "MANAGER");
    },
    ...ngDevMode ? [{ debugName: "canAssignDeveloper" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canStartDevelopment = computed(
    () => {
      const r = this.request();
      return r?.status === "IN_DEVELOPMENT" && r?.developer_id === this.user()?.id;
    },
    ...ngDevMode ? [{ debugName: "canStartDevelopment" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canApproveDeployment = computed(
    () => {
      const r = this.request();
      return r?.status === "TESTING" && (this.user()?.role === "HR_ADMIN" || this.user()?.role === "MANAGER");
    },
    ...ngDevMode ? [{ debugName: "canApproveDeployment" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isRejected = computed(
    () => this.request()?.status === "REJECTED",
    ...ngDevMode ? [{ debugName: "isRejected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showActions = computed(
    () => {
      return this.canApprove() || this.canAssignDeveloper() || this.canStartDevelopment() || this.canApproveDeployment();
    },
    ...ngDevMode ? [{ debugName: "showActions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.requestId = +id;
      this.loadRequest(+id);
      this.loadEmployees();
    }
  }
  loadRequest(id) {
    this.requestService.getRequest(id).subscribe({
      next: (data) => {
        this.request.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  loadEmployees() {
    this.employeeService.getEmployees({ per_page: 100 }).subscribe({
      next: (res) => this.employees.set(res.data),
      error: () => {
      }
    });
  }
  getStatusLabel(status) {
    return STATUS_LABELS[status];
  }
  getStatusClass(status) {
    return STATUS_CLASSES[status];
  }
  approve() {
    this.saving.set(true);
    this.requestService.approve(this.requestId).subscribe({
      next: (r) => {
        this.request.set(r);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  reject() {
    if (!this.rejectionReason().trim())
      return;
    this.saving.set(true);
    this.requestService.reject(this.requestId, this.rejectionReason()).subscribe({
      next: (r) => {
        this.request.set(r);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  assignDeveloper() {
    const devId = this.selectedDeveloperId();
    if (!devId)
      return;
    this.saving.set(true);
    this.requestService.assignDeveloper(this.requestId, devId).subscribe({
      next: (r) => {
        this.request.set(r);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  updateStatus(status) {
    this.saving.set(true);
    this.requestService.updateStatus(this.requestId, status).subscribe({
      next: (r) => {
        this.request.set(r);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  static \u0275fac = function RequestDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestDetailComponent, selectors: [["app-request-detail"]], decls: 2, vars: 1, consts: [[1, "max-w-4xl", "mx-auto", "animate-pulse", "space-y-6"], [1, "max-w-4xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "h-8", "bg-background-alt", "rounded", "w-1/3"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-8", "space-y-4"], [1, "h-6", "bg-background-alt", "rounded", "w-1/2"], [1, "h-4", "bg-background-alt", "rounded", "w-full"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2"], [1, "text-text-secondary", "hover:text-text", "transition-colors", "p-1", "cursor-pointer", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading", "truncate"], [1, "text-sm", "text-text-muted", "font-mono", "mt-1"], [1, "shrink-0", "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-full"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "sm:p-8", "shadow-sm"], [1, "mb-6"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "text-sm"], [1, "mt-6", "bg-error-light", "border", "border-error/20", "rounded-md", "p-4"], [1, "flex", "flex-wrap", "items-center", "gap-3", "mt-6", "pt-4", "border-t", "border-border"], [1, "text-xs", "uppercase", "tracking-wider", "text-text-muted", "font-semibold", "mb-1"], [1, "text-sm", "text-text", "whitespace-pre-wrap"], [1, "text-xs", "uppercase", "tracking-wider", "text-text-muted", "font-semibold"], [1, "text-text", "font-medium"], [1, "text-xs", "uppercase", "tracking-wider", "text-error-dark", "font-semibold", "mb-1"], [1, "text-sm", "text-error-dark"], [1, "bg-accent", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-md", "hover:bg-accent-hover", "disabled:opacity-50", "transition-colors", "cursor-pointer", 3, "disabled"], [1, "bg-success", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-md", "hover:bg-success-hover", "disabled:opacity-50", "transition-colors", "cursor-pointer", 3, "click", "disabled"], ["type", "text", "placeholder", "Motif du rejet...", 1, "px-3", "py-2", "bg-background", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", 3, "ngModelChange", "ngModel"], [1, "bg-error", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-md", "hover:bg-error-hover", "disabled:opacity-50", "transition-colors", "cursor-pointer", 3, "click", "disabled"], [1, "px-3", "py-2", "bg-background", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", 3, "change"], [3, "ngValue"], [3, "value"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-md", "hover:bg-primary-hover", "disabled:opacity-50", "transition-colors", "cursor-pointer", 3, "click", "disabled"], [1, "bg-accent", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-md", "hover:bg-accent-hover", "disabled:opacity-50", "transition-colors", "cursor-pointer", 3, "click", "disabled"], [1, "bg-warning", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-md", "hover:bg-warning-hover", "disabled:opacity-50", "transition-colors", "cursor-pointer", 3, "click", "disabled"]], template: function RequestDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, RequestDetailComponent_Conditional_0_Template, 5, 0, "div", 0)(1, RequestDetailComponent_Conditional_1_Template, 26, 18, "div", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.loading() ? 0 : (tmp_0_0 = ctx.request()) ? 1 : -1, tmp_0_0);
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestDetailComponent, [{
    type: Component,
    args: [{ selector: "app-request-detail", standalone: true, imports: [RouterModule, FormsModule], template: `@if (loading()) {
  <div class="max-w-4xl mx-auto animate-pulse space-y-6">
    <div class="h-8 bg-background-alt rounded w-1/3"></div>
    <div class="bg-surface border border-border rounded-xl p-8 space-y-4">
      <div class="h-6 bg-background-alt rounded w-1/2"></div>
      <div class="h-4 bg-background-alt rounded w-full"></div>
    </div>
  </div>
} @else if (request(); as r) {
  <div class="max-w-4xl mx-auto flex flex-col gap-6">
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <a [routerLink]="[baseRoute() + '/requests']" class="text-text-secondary hover:text-text transition-colors p-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </a>
          <h1 class="font-heading text-2xl font-bold text-text-heading truncate">{{ r.title }}</h1>
        </div>
        <p class="text-sm text-text-muted font-mono mt-1">{{ r.reference_code }}</p>
      </div>
      <span class="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full" [class]="getStatusClass(r.status)">
        {{ getStatusLabel(r.status) }}
      </span>
    </div>

    <div class="bg-surface border border-border rounded-xl p-6 sm:p-8 shadow-sm">
      @if (r.description) {
        <div class="mb-6">
          <p class="text-xs uppercase tracking-wider text-text-muted font-semibold mb-1">Description</p>
          <p class="text-sm text-text whitespace-pre-wrap">{{ r.description }}</p>
        </div>
      }

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        @if (r.from_department) {
          <div>
            <p class="text-xs uppercase tracking-wider text-text-muted font-semibold">D\xE9partement demandeur</p>
            <p class="text-text font-medium">{{ r.from_department.name }}</p>
          </div>
        }
        @if (r.to_department) {
          <div>
            <p class="text-xs uppercase tracking-wider text-text-muted font-semibold">D\xE9partement destinataire</p>
            <p class="text-text font-medium">{{ r.to_department.name }}</p>
          </div>
        }
        @if (r.creator) {
          <div>
            <p class="text-xs uppercase tracking-wider text-text-muted font-semibold">Cr\xE9\xE9 par</p>
            <p class="text-text font-medium">{{ r.creator.first_name }} {{ r.creator.last_name }}</p>
          </div>
        }
        @if (r.developer) {
          <div>
            <p class="text-xs uppercase tracking-wider text-text-muted font-semibold">D\xE9veloppeur assign\xE9</p>
            <p class="text-text font-medium">{{ r.developer.first_name }} {{ r.developer.last_name }}</p>
          </div>
        }
        @if (r.priority) {
          <div>
            <p class="text-xs uppercase tracking-wider text-text-muted font-semibold">Priorit\xE9</p>
            <p class="text-text font-medium">{{ r.priority }}</p>
          </div>
        }
        @if (r.assigned_at) {
          <div>
            <p class="text-xs uppercase tracking-wider text-text-muted font-semibold">Assign\xE9e le</p>
            <p class="text-text font-medium">{{ r.assigned_at }}</p>
          </div>
        }
        @if (r.resolved_at) {
          <div>
            <p class="text-xs uppercase tracking-wider text-text-muted font-semibold">R\xE9solue le</p>
            <p class="text-text font-medium">{{ r.resolved_at }}</p>
          </div>
        }
      </div>

      @if (isRejected() && r.rejection_reason) {
        <div class="mt-6 bg-error-light border border-error/20 rounded-md p-4">
          <p class="text-xs uppercase tracking-wider text-error-dark font-semibold mb-1">Motif du rejet</p>
          <p class="text-sm text-error-dark">{{ r.rejection_reason }}</p>
        </div>
      }

      @if (showActions()) {
        <div class="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-border">
          @if (canApprove()) {
            <button (click)="approve()" [disabled]="saving()"
              class="bg-success text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-success-hover disabled:opacity-50 transition-colors cursor-pointer">
              Approuver
            </button>
            <div class="flex items-center gap-2">
              <input type="text" [(ngModel)]="rejectionReason" placeholder="Motif du rejet..."
                class="px-3 py-2 bg-background border border-border rounded-lg text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <button (click)="reject()" [disabled]="!rejectionReason().trim() || saving()"
                class="bg-error text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-error-hover disabled:opacity-50 transition-colors cursor-pointer">
                Rejeter
              </button>
            </div>
          }

          @if (canAssignDeveloper()) {
            <div class="flex items-center gap-2">
              <select (change)="selectedDeveloperId.set(+$any($event.target).value)"
                class="px-3 py-2 bg-background border border-border rounded-lg text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30">
                <option [ngValue]="null">Choisir un d\xE9veloppeur...</option>
                @for (emp of employees(); track emp.id) {
                  <option [value]="emp.id">{{ emp.first_name }} {{ emp.last_name }}</option>
                }
              </select>
              <button (click)="assignDeveloper()" [disabled]="!selectedDeveloperId() || saving()"
                class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-primary-hover disabled:opacity-50 transition-colors cursor-pointer">
                Assigner
              </button>
            </div>
          }

          @if (canStartDevelopment()) {
            <button (click)="updateStatus('TESTING')" [disabled]="saving()"
              class="bg-accent text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-accent-hover disabled:opacity-50 transition-colors cursor-pointer">
              Passer en test
            </button>
          }

          @if (canApproveDeployment()) {
            <button (click)="updateStatus('DEPLOYED')" [disabled]="saving()"
              class="bg-success text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-success-hover disabled:opacity-50 transition-colors cursor-pointer">
              Valider le d\xE9ploiement
            </button>
            <button (click)="updateStatus('IN_DEVELOPMENT')" [disabled]="saving()"
              class="bg-warning text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-warning-hover disabled:opacity-50 transition-colors cursor-pointer">
              Renvoyer en d\xE9veloppement
            </button>
          }
        </div>
      }
    </div>
  </div>
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestDetailComponent, { className: "RequestDetailComponent", filePath: "src/app/features/shared/service-requests/request-detail/request-detail.component.ts", lineNumber: 29 });
})();
export {
  RequestDetailComponent
};
//# sourceMappingURL=chunk-QDHSLUKO.js.map
