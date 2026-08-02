import {
  AttendanceDeclarationService
} from "./chunk-2PL4LXLU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7RQSPZX3.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import "./chunk-ZEAXW3MP.js";
import {
  DatePipe
} from "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  computed,
  forkJoin,
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
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
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

// src/app/features/attendance/team-approval/team-approval.component.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
function TeamAttendanceApprovalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 8)(3, "polyline", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.success.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 12);
    \u0275\u0275element(8, "line", 13)(9, "line", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.success());
  }
}
function TeamAttendanceApprovalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "circle", 16)(3, "line", 17)(4, "line", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 12);
    \u0275\u0275element(9, "line", 13)(10, "line", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function TeamAttendanceApprovalComponent_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275element(3, "div", 25)(4, "div", 26);
    \u0275\u0275elementEnd()();
  }
}
function TeamAttendanceApprovalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 21);
    \u0275\u0275repeaterCreate(2, TeamAttendanceApprovalComponent_Conditional_3_For_3_Template, 5, 0, "div", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function TeamAttendanceApprovalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 8)(3, "polyline", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 28);
    \u0275\u0275text(5, "Aucune d\xE9claration en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7, "Toutes les d\xE9clarations de pr\xE9sence ont \xE9t\xE9 trait\xE9es.");
    \u0275\u0275elementEnd()();
  }
}
function TeamAttendanceApprovalComponent_Conditional_5_For_15_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_5_For_15_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const decl_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openReject(decl_r6));
    });
    \u0275\u0275elementStart(1, "span", 44);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 56);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_5_For_15_Conditional_28_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const decl_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApprove(decl_r6));
    });
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5, "check");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function TeamAttendanceApprovalComponent_Conditional_5_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "input", 32);
    \u0275\u0275listener("change", function TeamAttendanceApprovalComponent_Conditional_5_For_15_Template_input_change_1_listener() {
      const decl_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelect(decl_r6.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 46)(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 48)(6, "p", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 51)(11, "div")(12, "p", 52);
    \u0275\u0275text(13, "Date & Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 53);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "p", 52);
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 53);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "p", 52);
    \u0275\u0275text(24, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 54);
    \u0275\u0275text(26, "\u2014");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 42);
    \u0275\u0275conditionalCreate(28, TeamAttendanceApprovalComponent_Conditional_5_For_15_Conditional_28_Template, 6, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const decl_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedIds().has(decl_r6.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.initials(decl_r6.user?.first_name ?? "", decl_r6.user?.last_name ?? ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", decl_r6.user?.first_name, " ", decl_r6.user?.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roleLabel(decl_r6.user?.role));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind4(16, 9, decl_r6.date, "shortDate", "", "fr"), " \u2022 ", decl_r6.hours_worked ? decl_r6.hours_worked + "h" : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(decl_r6.status === "PRESENT" ? "Pr\xE9sent" : "Absent");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.canApprove(decl_r6) ? 28 : -1);
  }
}
function TeamAttendanceApprovalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 30)(2, "label", 31);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_5_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll());
    });
    \u0275\u0275elementStart(3, "input", 32);
    \u0275\u0275listener("change", function TeamAttendanceApprovalComponent_Conditional_5_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5, "Tout s\xE9lectionner");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "button", 35);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBulkReject());
    });
    \u0275\u0275text(8, " Refuser la s\xE9lection ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 36);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBulkApprove());
    });
    \u0275\u0275elementStart(10, "span", 37);
    \u0275\u0275text(11, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Approuver la s\xE9lection ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 38);
    \u0275\u0275repeaterCreate(14, TeamAttendanceApprovalComponent_Conditional_5_For_15_Template, 29, 14, "div", 39, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 40)(17, "span", 41);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 42)(20, "button", 43)(21, "span", 44);
    \u0275\u0275text(22, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 45);
    \u0275\u0275text(24, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 43)(26, "span", 44);
    \u0275\u0275text(27, "chevron_right");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.selectAllChecked());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.selectedCount() === 0 || ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.selectedCount() === 0 || ctx_r1.loading());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.filteredDeclarations());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredDeclarations().length, " d\xE9claration(s) en attente");
  }
}
function TeamAttendanceApprovalComponent_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 64);
    \u0275\u0275element(1, "circle", 65)(2, "path", 66);
    \u0275\u0275elementEnd();
  }
}
function TeamAttendanceApprovalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReject());
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_6_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "h3", 59);
    \u0275\u0275text(3, "Motif du rejet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 60);
    \u0275\u0275listener("ngModelChange", function TeamAttendanceApprovalComponent_Conditional_6_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectReason.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "div", 61)(6, "button", 62);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeReject());
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 63);
    \u0275\u0275listener("click", function TeamAttendanceApprovalComponent_Conditional_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275conditionalCreate(9, TeamAttendanceApprovalComponent_Conditional_6_Conditional_9_Template, 3, 0, ":svg:svg", 64);
    \u0275\u0275text(10, " Rejeter ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.rejectReason());
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.rejectReason().trim() || ctx_r1.rejecting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rejecting() ? 9 : -1);
  }
}
var TeamAttendanceApprovalComponent = class _TeamAttendanceApprovalComponent {
  authService = inject(AuthService);
  attendanceService = inject(AttendanceDeclarationService);
  declarations = signal(
    [],
    ...ngDevMode ? [{ debugName: "declarations" }] : (
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
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  success = signal(
    null,
    ...ngDevMode ? [{ debugName: "success" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedIds = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "selectedIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rejectDeclarationId = signal(
    null,
    ...ngDevMode ? [{ debugName: "rejectDeclarationId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rejectReason = signal(
    "",
    ...ngDevMode ? [{ debugName: "rejectReason" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rejecting = signal(
    false,
    ...ngDevMode ? [{ debugName: "rejecting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectAllChecked = computed(
    () => {
      const displayed = this.filteredDeclarations();
      if (displayed.length === 0)
        return false;
      return displayed.every((d) => this.selectedIds().has(d.id));
    },
    ...ngDevMode ? [{ debugName: "selectAllChecked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredDeclarations = computed(
    () => this.declarations().filter((d) => d.validation_status === "EN_ATTENTE"),
    ...ngDevMode ? [{ debugName: "filteredDeclarations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedCount = computed(
    () => this.selectedIds().size,
    ...ngDevMode ? [{ debugName: "selectedCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isManager = computed(
    () => this.authService.currentUser()?.role === "MANAGER",
    ...ngDevMode ? [{ debugName: "isManager" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isHrAdmin = computed(
    () => this.authService.currentUser()?.role === "HR_ADMIN",
    ...ngDevMode ? [{ debugName: "isHrAdmin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadDeclarations();
  }
  loadDeclarations() {
    this.loading.set(true);
    this.error.set(null);
    const params = { validation_status: "EN_ATTENTE" };
    const role = this.authService.currentUser()?.role;
    if (role === "MANAGER") {
      params.queue = "manager";
    } else if (role === "HR_ADMIN") {
      params.queue = "rh";
    }
    this.attendanceService.getDeclarations(params).subscribe({
      next: (declarations) => {
        this.declarations.set(declarations);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("Erreur lors du chargement des d\xE9clarations.");
      }
    });
  }
  toggleSelect(id) {
    this.selectedIds.update((set) => {
      const next = new Set(set);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }
  toggleSelectAll() {
    if (this.selectAllChecked()) {
      this.selectedIds.set(/* @__PURE__ */ new Set());
    } else {
      this.selectedIds.set(new Set(this.filteredDeclarations().map((d) => d.id)));
    }
  }
  onBulkApprove() {
    const ids = Array.from(this.selectedIds());
    if (ids.length === 0)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    this.attendanceService.bulkApprove(ids).subscribe({
      next: (result) => {
        this.declarations.update((list) => list.filter((d) => !result.approved.includes(d.id)));
        this.selectedIds.set(/* @__PURE__ */ new Set());
        const approvedCount = result.approved.length;
        const skippedCount = result.skipped.length;
        this.success.set(`${approvedCount} d\xE9claration(s) approuv\xE9e(s).${skippedCount > 0 ? ` ${skippedCount} ignor\xE9e(s).` : ""}`);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Erreur lors de l'approbation group\xE9e.");
      }
    });
  }
  onBulkReject() {
    const ids = Array.from(this.selectedIds());
    if (ids.length === 0)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);
    const reason = "Demande rejet\xE9e par le manager";
    forkJoin(ids.map((id) => this.attendanceService.reject(id, reason))).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => !ids.includes(d.id)));
        this.selectedIds.set(/* @__PURE__ */ new Set());
        this.loading.set(false);
        this.success.set(`${ids.length} d\xE9claration(s) rejet\xE9e(s).`);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Erreur lors du rejet group\xE9.");
      }
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
  onApprove(declaration) {
    this.loading.set(true);
    this.error.set(null);
    this.attendanceService.approve(declaration.id).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => d.id !== declaration.id));
        this.selectedIds.update((set) => {
          const next = new Set(set);
          next.delete(declaration.id);
          return next;
        });
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Erreur lors de l'approbation.");
      }
    });
  }
  openReject(declaration) {
    this.rejectDeclarationId.set(declaration.id);
    this.rejectReason.set("");
  }
  closeReject() {
    this.rejectDeclarationId.set(null);
    this.rejectReason.set("");
  }
  onReject() {
    const id = this.rejectDeclarationId();
    if (id === null || !this.rejectReason().trim())
      return;
    this.rejecting.set(true);
    this.error.set(null);
    this.attendanceService.reject(id, this.rejectReason()).subscribe({
      next: () => {
        this.declarations.update((list) => list.filter((d) => d.id !== id));
        this.selectedIds.update((set) => {
          const next = new Set(set);
          next.delete(id);
          return next;
        });
        this.closeReject();
        this.rejecting.set(false);
      },
      error: (err) => {
        this.rejecting.set(false);
        this.error.set(err.error?.message || "Erreur lors du rejet.");
      }
    });
  }
  canApprove(declaration) {
    const user = this.authService.currentUser();
    if (!user)
      return false;
    if (user.id === declaration.user_id)
      return false;
    if (user.role === "MANAGER") {
      return declaration.user?.manager_id === user.id && declaration.user?.role === "EMPLOYE";
    }
    if (user.role === "HR_ADMIN") {
      return declaration.user?.role === "MANAGER" || declaration.user?.role === "EMPLOYE" && declaration.manager_validated_by != null;
    }
    return false;
  }
  static \u0275fac = function TeamAttendanceApprovalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamAttendanceApprovalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamAttendanceApprovalComponent, selectors: [["app-team-approval"]], decls: 7, vars: 4, consts: [[1, "flex", "flex-col", "gap-4"], [1, "bg-success-light", "border", "border-success/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2.5"], [1, "bg-error-light", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2.5"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "overflow-hidden", "animate-pulse"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-4", "text-center", "bg-surface", "border", "border-outline-variant", "rounded-xl"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "overflow-hidden", "shadow-sm"], [1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-success", "shrink-0", "mt-0.5"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "text-sm", "font-medium", "text-success-dark", "flex-1"], [1, "text-success-dark/60", "hover:text-success-dark", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-sm", "font-medium", "text-error-dark", "flex-1"], [1, "text-error-dark/60", "hover:text-error-dark", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], [1, "p-6", "space-y-5"], [1, "flex", "items-center", "gap-4"], [1, "w-5", "h-5", "bg-surface-container-high", "rounded"], [1, "flex-1", "space-y-2"], [1, "h-4", "bg-surface-container-high", "rounded", "w-1/3"], [1, "h-3", "bg-surface-container-high", "rounded", "w-1/5"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-12", "h-12", "text-on-surface-variant", "mb-4"], [1, "font-heading", "text-xl", "font-semibold", "text-on-surface", "mb-2"], [1, "text-sm", "text-on-surface-variant", "max-w-sm"], [1, "p-4", "bg-surface-container-low", "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "border-b", "border-outline-variant"], [1, "flex", "items-center", "gap-4", "cursor-pointer", "select-none", 3, "click"], ["type", "checkbox", 1, "w-5", "h-5", "rounded", "border-outline-variant", "text-primary-container", "focus:ring-primary-container", "cursor-pointer", 3, "change", "checked"], [1, "font-label-md", "text-label-md", "text-on-surface-variant"], [1, "flex", "gap-3"], [1, "px-4", "py-2", "border", "border-outline", "text-on-surface-variant", "rounded-lg", "font-label-md", "text-label-md", "hover:bg-surface", "transition-colors", "disabled:opacity-40", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], [1, "px-4", "py-2", "bg-primary-container", "text-on-primary-container", "rounded-lg", "font-label-md", "text-label-md", "hover:opacity-90", "transition-all", "flex", "items-center", "gap-2", "disabled:opacity-40", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-[18px]"], [1, "divide-y", "divide-outline-variant"], [1, "p-4", "flex", "flex-wrap", "lg:flex-nowrap", "items-center", "gap-6", "hover:bg-surface-container-low", "transition-colors"], [1, "p-4", "bg-surface-container-low", "border-t", "border-outline-variant", "flex", "items-center", "justify-between"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant"], [1, "flex", "gap-2"], ["disabled", "", 1, "p-2", "rounded", "hover:bg-surface-container-high", "text-on-surface-variant", "cursor-pointer"], [1, "material-symbols-outlined"], [1, "px-3", "py-2", "rounded", "bg-primary-container", "text-on-primary-container", "font-bold", "font-label-sm", "text-label-sm", "cursor-pointer"], [1, "flex", "items-center", "gap-4", "min-w-[220px]"], [1, "w-12", "h-12", "rounded-full", "bg-primary-container/30", "text-primary", "flex", "items-center", "justify-center", "font-bold", "text-sm", "shrink-0"], [1, "min-w-0"], [1, "font-label-md", "text-label-md", "text-on-surface", "font-semibold", "truncate"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant", "italic", "truncate"], [1, "flex-grow", "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant", "uppercase", "tracking-wider", "mb-1"], [1, "text-body-md", "text-body-md", "text-on-surface"], [1, "text-body-md", "text-body-md", "text-on-surface-variant", "italic", "truncate"], ["title", "Refuser", 1, "p-3", "rounded-lg", "border", "border-error", "text-error", "hover:bg-error-container", "transition-colors", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], ["title", "Approuver", 1, "p-3", "rounded-lg", "bg-secondary", "text-on-secondary", "hover:opacity-90", "transition-opacity", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], [1, "fixed", "inset-0", "bg-black/40", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-surface-container-lowest", "rounded-xl", "shadow-xl", "border", "border-outline-variant", "p-6", "max-w-md", "w-full", 3, "click"], [1, "font-heading", "text-lg", "font-bold", "text-on-surface", "mb-4"], ["rows", "3", "placeholder", "Expliquez le motif du rejet...", 1, "w-full", "px-4", "py-2.5", "bg-surface-bright", "border", "border-outline-variant", "rounded-lg", "text-sm", "text-on-surface", "placeholder:text-on-surface-variant", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "mb-4", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3"], [1, "px-4", "py-2", "text-sm", "font-medium", "text-on-surface-variant", "border", "border-outline", "rounded-lg", "hover:bg-surface-container-low", "transition-all", "cursor-pointer", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "bg-error", "text-on-error", "rounded-lg", "hover:opacity-90", "transition-all", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-4", "w-4", "inline"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"]], template: function TeamAttendanceApprovalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, TeamAttendanceApprovalComponent_Conditional_1_Template, 10, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, TeamAttendanceApprovalComponent_Conditional_2_Template, 11, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, TeamAttendanceApprovalComponent_Conditional_3_Template, 4, 1, "div", 3)(4, TeamAttendanceApprovalComponent_Conditional_4_Template, 8, 0, "div", 4)(5, TeamAttendanceApprovalComponent_Conditional_5_Template, 28, 4, "div", 5);
      \u0275\u0275conditionalCreate(6, TeamAttendanceApprovalComponent_Conditional_6_Template, 11, 3, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() && ctx.declarations().length === 0 ? 3 : ctx.filteredDeclarations().length === 0 ? 4 : 5);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.rejectDeclarationId() !== null ? 6 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamAttendanceApprovalComponent, [{
    type: Component,
    args: [{ selector: "app-team-approval", standalone: true, imports: [DatePipe, FormsModule], template: `<div class="flex flex-col gap-4">

    @if (success()) {
      <div class="bg-success-light border border-success/20 rounded-lg p-4 flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-success shrink-0 mt-0.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span class="text-sm font-medium text-success-dark flex-1">{{ success() }}</span>
        <button (click)="success.set(null)" class="text-success-dark/60 hover:text-success-dark transition-colors shrink-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    }

    @if (error()) {
      <div class="bg-error-light border border-error/20 rounded-lg p-4 flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-error shrink-0 mt-0.5">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span class="text-sm font-medium text-error-dark flex-1">{{ error() }}</span>
        <button (click)="error.set(null)" class="text-error-dark/60 hover:text-error-dark transition-colors shrink-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    }

    @if (loading() && declarations().length === 0) {
      <div class="bg-surface border border-outline-variant rounded-xl overflow-hidden animate-pulse">
        <div class="p-6 space-y-5">
          @for (_ of [1,2,3,4]; track _) {
            <div class="flex items-center gap-4">
              <div class="w-5 h-5 bg-surface-container-high rounded"></div>
              <div class="flex-1 space-y-2">
                <div class="h-4 bg-surface-container-high rounded w-1/3"></div>
                <div class="h-3 bg-surface-container-high rounded w-1/5"></div>
              </div>
            </div>
          }
        </div>
      </div>
    } @else if (filteredDeclarations().length === 0) {
      <div class="flex flex-col items-center justify-center py-16 px-4 text-center bg-surface border border-outline-variant rounded-xl">
        <svg class="w-12 h-12 text-on-surface-variant mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <h3 class="font-heading text-xl font-semibold text-on-surface mb-2">Aucune d\xE9claration en attente</h3>
        <p class="text-sm text-on-surface-variant max-w-sm">Toutes les d\xE9clarations de pr\xE9sence ont \xE9t\xE9 trait\xE9es.</p>
      </div>
    } @else {
      <div class="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <!-- Bulk Actions Toolbar -->
        <div class="p-4 bg-surface-container-low flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant">
          <label class="flex items-center gap-4 cursor-pointer select-none" (click)="toggleSelectAll()">
            <input type="checkbox" [checked]="selectAllChecked()" (change)="toggleSelectAll()"
              class="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer" />
            <span class="font-label-md text-label-md text-on-surface-variant">Tout s\xE9lectionner</span>
          </label>
          <div class="flex gap-3">
            <button (click)="onBulkReject()" [disabled]="selectedCount() === 0 || loading()"
              class="px-4 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
              Refuser la s\xE9lection
            </button>
            <button (click)="onBulkApprove()" [disabled]="selectedCount() === 0 || loading()"
              class="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
              <span class="material-symbols-outlined text-[18px]">done_all</span>
              Approuver la s\xE9lection
            </button>
          </div>
        </div>

        <!-- Validation List -->
        <div class="divide-y divide-outline-variant">
          @for (decl of filteredDeclarations(); track decl.id) {
            <div class="p-4 flex flex-wrap lg:flex-nowrap items-center gap-6 hover:bg-surface-container-low transition-colors">
              <input type="checkbox" [checked]="selectedIds().has(decl.id)" (change)="toggleSelect(decl.id)"
                class="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer" />
              <div class="flex items-center gap-4 min-w-[220px]">
                <div class="w-12 h-12 rounded-full bg-primary-container/30 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                  {{ initials(decl.user?.first_name ?? '', decl.user?.last_name ?? '') }}
                </div>
                <div class="min-w-0">
                  <p class="font-label-md text-label-md text-on-surface font-semibold truncate">{{ decl.user?.first_name }} {{ decl.user?.last_name }}</p>
                  <p class="font-body-sm text-body-sm text-on-surface-variant italic truncate">{{ roleLabel(decl.user?.role) }}</p>
                </div>
              </div>
              <div class="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Date &amp; Dur\xE9e</p>
                  <p class="text-body-md text-body-md text-on-surface">{{ decl.date | date:'shortDate':'':'fr' }} \u2022 {{ decl.hours_worked ? decl.hours_worked + 'h' : '\u2014' }}</p>
                </div>
                <div>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Statut</p>
                  <p class="text-body-md text-body-md text-on-surface">{{ decl.status === 'PRESENT' ? 'Pr\xE9sent' : 'Absent' }}</p>
                </div>
                <div>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Note</p>
                  <p class="text-body-md text-body-md text-on-surface-variant italic truncate">\u2014</p>
                </div>
              </div>
              <div class="flex gap-2">
                @if (canApprove(decl)) {
                  <button (click)="openReject(decl)" [disabled]="loading()" title="Refuser"
                    class="p-3 rounded-lg border border-error text-error hover:bg-error-container transition-colors disabled:opacity-50 cursor-pointer">
                    <span class="material-symbols-outlined">close</span>
                  </button>
                  <button (click)="onApprove(decl)" [disabled]="loading()" title="Approuver"
                    class="p-3 rounded-lg bg-secondary text-on-secondary hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer">
                    <span class="material-symbols-outlined">check</span>
                  </button>
                }
              </div>
            </div>
          }
        </div>

        <!-- Footer -->
        <div class="p-4 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
          <span class="font-label-sm text-label-sm text-on-surface-variant">{{ filteredDeclarations().length }} d\xE9claration(s) en attente</span>
          <div class="flex gap-2">
            <button class="p-2 rounded hover:bg-surface-container-high text-on-surface-variant cursor-pointer" disabled>
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="px-3 py-2 rounded bg-primary-container text-on-primary-container font-bold font-label-sm text-label-sm cursor-pointer">1</button>
            <button class="p-2 rounded hover:bg-surface-container-high text-on-surface-variant cursor-pointer" disabled>
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    }

    @if (rejectDeclarationId() !== null) {
      <div class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" (click)="closeReject()">
        <div class="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant p-6 max-w-md w-full" (click)="$event.stopPropagation()">
          <h3 class="font-heading text-lg font-bold text-on-surface mb-4">Motif du rejet</h3>
          <textarea [ngModel]="rejectReason()" (ngModelChange)="rejectReason.set($event)"
            rows="3" placeholder="Expliquez le motif du rejet..."
            class="w-full px-4 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-sm text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all mb-4"></textarea>
          <div class="flex justify-end gap-3">
            <button (click)="closeReject()"
              class="px-4 py-2 text-sm font-medium text-on-surface-variant border border-outline rounded-lg hover:bg-surface-container-low transition-all cursor-pointer">Annuler</button>
            <button (click)="onReject()" [disabled]="!rejectReason().trim() || rejecting()"
              class="px-4 py-2 text-sm font-semibold bg-error text-on-error rounded-lg hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer">
              @if (rejecting()) {
                <svg class="animate-spin h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
              }
              Rejeter
            </button>
          </div>
        </div>
      </div>
    }

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamAttendanceApprovalComponent, { className: "TeamAttendanceApprovalComponent", filePath: "src/app/features/attendance/team-approval/team-approval.component.ts", lineNumber: 15 });
})();

// src/app/features/attendance/team-attendance-validation/team-attendance-validation.component.ts
var TeamAttendanceValidationComponent = class _TeamAttendanceValidationComponent {
  static \u0275fac = function TeamAttendanceValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamAttendanceValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamAttendanceValidationComponent, selectors: [["app-team-attendance-validation"]], decls: 1, vars: 0, template: function TeamAttendanceValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-team-approval");
    }
  }, dependencies: [TeamAttendanceApprovalComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamAttendanceValidationComponent, [{
    type: Component,
    args: [{ selector: "app-team-attendance-validation", standalone: true, imports: [TeamAttendanceApprovalComponent], template: "<app-team-approval />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamAttendanceValidationComponent, { className: "TeamAttendanceValidationComponent", filePath: "src/app/features/attendance/team-attendance-validation/team-attendance-validation.component.ts", lineNumber: 10 });
})();
export {
  TeamAttendanceValidationComponent
};
//# sourceMappingURL=chunk-BCR7EVGV.js.map
