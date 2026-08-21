import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import {
  AvatarComponent
} from "./chunk-DHD6LPVU.js";
import {
  ImageUrlService
} from "./chunk-ZTU2DKVI.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-75TSC3TY.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-DGTBVCJC.js";
import "./chunk-FWX4MYVU.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
import {
  Component,
  Subject,
  computed,
  debounceTime,
  distinctUntilChanged,
  inject,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/admin/employee-list/employee-list.component.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
function EmployeeListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 33)(3, "polyline", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 36);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissSuccess());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 7);
    \u0275\u0275element(8, "line", 37)(9, "line", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
  }
}
function EmployeeListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 39);
    \u0275\u0275element(2, "circle", 40)(3, "line", 41)(4, "line", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissError());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 7);
    \u0275\u0275element(9, "line", 37)(10, "line", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function EmployeeListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "button", 45);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_51_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 46);
    \u0275\u0275element(3, "polyline", 47)(4, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " R\xE9initialiser ");
    \u0275\u0275elementEnd()();
  }
}
function EmployeeListComponent_Conditional_52_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "div", 52);
    \u0275\u0275element(3, "div", 53)(4, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 55);
    \u0275\u0275elementEnd();
  }
}
function EmployeeListComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 49);
    \u0275\u0275repeaterCreate(2, EmployeeListComponent_Conditional_52_For_3_Template, 6, 0, "div", 50, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function EmployeeListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "circle", 40)(3, "line", 41)(4, "line", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 57);
    \u0275\u0275text(6, "Une erreur est survenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 59);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_53_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadEmployees());
    });
    \u0275\u0275text(10, "R\xE9essayer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function EmployeeListComponent_Conditional_54_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 57);
    \u0275\u0275text(1, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 58);
    \u0275\u0275text(3, "Essayez de modifier vos filtres de recherche.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_54_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275text(5, "R\xE9initialiser les filtres");
    \u0275\u0275elementEnd();
  }
}
function EmployeeListComponent_Conditional_54_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 57);
    \u0275\u0275text(1, "Aucun employ\xE9 pour le moment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 58);
    \u0275\u0275text(3, "Commencez par inviter vos premiers collaborateurs ou importez une liste.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 7);
    \u0275\u0275element(6, "path", 8)(7, "polyline", 9)(8, "line", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Importer des employ\xE9s ");
    \u0275\u0275elementEnd();
  }
}
function EmployeeListComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 61)(3, "circle", 62)(4, "path", 63)(5, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, EmployeeListComponent_Conditional_54_Conditional_6_Template, 6, 0)(7, EmployeeListComponent_Conditional_54_Conditional_7_Template, 10, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isFiltered() ? 6 : 7);
  }
}
function EmployeeListComponent_Conditional_55_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 86);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bulkDelete());
    });
    \u0275\u0275text(4, "Supprimer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 87);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275text(6, "Annuler");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCount(), " s\xE9lectionn\xE9", ctx_r1.selectedCount() > 1 ? "s" : "");
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Admin ");
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Manager ");
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Employ\xE9 ");
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Actif ");
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Inactif ");
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const employee_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", employee_r10.status, " ");
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "rect", 103)(3, "polygon", 104)(4, "circle", 105)(5, "circle", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 7);
    \u0275\u0275element(8, "polyline", 107)(9, "path", 108);
    \u0275\u0275elementEnd()();
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "rect", 103)(2, "polygon", 104)(3, "circle", 105)(4, "circle", 106);
    \u0275\u0275elementEnd();
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "polygon", 111);
    \u0275\u0275elementEnd();
  }
}
function EmployeeListComponent_Conditional_55_For_24_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_For_24_Conditional_32_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const employee_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.toggleStatus(employee_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275conditionalCreate(1, EmployeeListComponent_Conditional_55_For_24_Conditional_32_Conditional_1_Template, 5, 0, ":svg:svg", 7)(2, EmployeeListComponent_Conditional_55_For_24_Conditional_32_Conditional_2_Template, 2, 0, ":svg:svg", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 110);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_For_24_Conditional_32_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const employee_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.confirmDelete(employee_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 7);
    \u0275\u0275element(5, "polyline", 107)(6, "path", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const employee_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", employee_r10.status === "ACTIVE" ? "D\xE9sactiver" : "R\xE9activer");
    \u0275\u0275advance();
    \u0275\u0275conditional(employee_r10.status === "ACTIVE" ? 1 : 2);
  }
}
function EmployeeListComponent_Conditional_55_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 88);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_For_24_Template_tr_click_0_listener() {
      const employee_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelect(employee_r10.id));
    });
    \u0275\u0275elementStart(1, "td", 89);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_For_24_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 71)(3, "input", 72);
    \u0275\u0275listener("change", function EmployeeListComponent_Conditional_55_For_24_Template_input_change_3_listener() {
      const employee_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelect(employee_r10.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 90)(6, "div", 91);
    \u0275\u0275element(7, "app-avatar", 92);
    \u0275\u0275elementStart(8, "div")(9, "p", 93);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 94);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 90)(14, "span", 95);
    \u0275\u0275conditionalCreate(15, EmployeeListComponent_Conditional_55_For_24_Conditional_15_Template, 1, 0)(16, EmployeeListComponent_Conditional_55_For_24_Conditional_16_Template, 1, 0)(17, EmployeeListComponent_Conditional_55_For_24_Conditional_17_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 90)(19, "span", 96);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 97);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 90)(24, "span", 98);
    \u0275\u0275element(25, "span", 99);
    \u0275\u0275conditionalCreate(26, EmployeeListComponent_Conditional_55_For_24_Conditional_26_Template, 1, 0)(27, EmployeeListComponent_Conditional_55_For_24_Conditional_27_Template, 1, 0)(28, EmployeeListComponent_Conditional_55_For_24_Conditional_28_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 100)(30, "div", 101);
    \u0275\u0275conditionalCreate(31, EmployeeListComponent_Conditional_55_For_24_Conditional_31_Template, 10, 0)(32, EmployeeListComponent_Conditional_55_For_24_Conditional_32_Template, 7, 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const employee_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.selectedIds().has(employee_r10.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("imageUrl", ctx_r1.imageUrlService.resolve(employee_r10.avatar_url))("name", employee_r10.first_name + " " + employee_r10.last_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", employee_r10.first_name, " ", employee_r10.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#WS-", ctx_r1.formatId(employee_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getRoleBadgeClass(employee_r10.role));
    \u0275\u0275advance();
    \u0275\u0275conditional(employee_r10.role === "HR_ADMIN" ? 15 : employee_r10.role === "MANAGER" ? 16 : 17);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(employee_r10.department.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-light", employee_r10.status === "ACTIVE")("text-success-dark", employee_r10.status === "ACTIVE")("bg-background-alt", employee_r10.status !== "ACTIVE")("text-text-muted", employee_r10.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", employee_r10.status === "ACTIVE")("bg-text-muted", employee_r10.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275conditional(employee_r10.status === "ACTIVE" ? 26 : employee_r10.status === "INACTIVE" ? 27 : 28);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.isAdminRh(employee_r10.role) ? 31 : 32);
  }
}
function EmployeeListComponent_Conditional_55_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Affichage de ");
    \u0275\u0275elementStart(1, "span", 112);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " sur ");
    \u0275\u0275elementStart(4, "span", 112);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " employ\xE9s ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.from(), "\u2013", ctx_r1.to());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.total());
  }
}
function EmployeeListComponent_Conditional_55_For_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function EmployeeListComponent_Conditional_55_For_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_For_33_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const page_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary", page_r13 === ctx_r1.currentPage())("text-text-inverse", page_r13 === ctx_r1.currentPage())("text-text-secondary", page_r13 !== ctx_r1.currentPage())("hover:bg-background-alt", page_r13 !== ctx_r1.currentPage())("border", page_r13 !== ctx_r1.currentPage())("border-border", page_r13 !== ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r13, " ");
  }
}
function EmployeeListComponent_Conditional_55_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EmployeeListComponent_Conditional_55_For_33_Conditional_0_Template, 2, 0, "span", 113)(1, EmployeeListComponent_Conditional_55_For_33_Conditional_1_Template, 2, 13, "button", 114);
  }
  if (rf & 2) {
    const page_r13 = ctx.$implicit;
    \u0275\u0275conditional(page_r13 === -1 ? 0 : 1);
  }
}
function EmployeeListComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275conditionalCreate(1, EmployeeListComponent_Conditional_55_Conditional_1_Template, 7, 2, "div", 66);
    \u0275\u0275elementStart(2, "div", 67)(3, "table", 68)(4, "thead")(5, "tr", 69)(6, "th", 70)(7, "label", 71)(8, "input", 72);
    \u0275\u0275listener("change", function EmployeeListComponent_Conditional_55_Template_input_change_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "th", 74);
    \u0275\u0275text(11, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 74);
    \u0275\u0275text(13, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 74);
    \u0275\u0275text(15, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 75);
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 74);
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 76);
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody", 77);
    \u0275\u0275repeaterCreate(23, EmployeeListComponent_Conditional_55_For_24_Template, 33, 25, "tr", 78, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 79)(26, "p", 80);
    \u0275\u0275conditionalCreate(27, EmployeeListComponent_Conditional_55_Conditional_27_Template, 7, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 81)(29, "button", 82);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 7);
    \u0275\u0275element(31, "polyline", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(32, EmployeeListComponent_Conditional_55_For_33_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "button", 82);
    \u0275\u0275listener("click", function EmployeeListComponent_Conditional_55_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 7);
    \u0275\u0275element(36, "polyline", 84);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedCount() > 0 ? 1 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("checked", ctx_r1.allSelected());
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.employees());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.from() !== null && ctx_r1.to() !== null ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() >= ctx_r1.lastPage());
  }
}
var EmployeeListComponent = class _EmployeeListComponent {
  employeeService = inject(EmployeeService);
  imageUrlService = inject(ImageUrlService);
  route = inject(ActivatedRoute);
  employees = signal(
    [],
    ...ngDevMode ? [{ debugName: "employees" }] : (
      /* istanbul ignore next */
      []
    )
  );
  total = signal(
    0,
    ...ngDevMode ? [{ debugName: "total" }] : (
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
  lastPage = signal(
    0,
    ...ngDevMode ? [{ debugName: "lastPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  perPage = signal(
    10,
    ...ngDevMode ? [{ debugName: "perPage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  from = signal(
    null,
    ...ngDevMode ? [{ debugName: "from" }] : (
      /* istanbul ignore next */
      []
    )
  );
  to = signal(
    null,
    ...ngDevMode ? [{ debugName: "to" }] : (
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
  successMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "successMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchTerm = signal(
    "",
    ...ngDevMode ? [{ debugName: "searchTerm" }] : (
      /* istanbul ignore next */
      []
    )
  );
  roleFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "roleFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  departmentFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "departmentFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statusFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "statusFilter" }] : (
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
  searchSubject = new Subject();
  subscriptions = [];
  isFiltered = computed(
    () => !!this.searchTerm() || !!this.roleFilter() || !!this.departmentFilter() || !!this.statusFilter(),
    ...ngDevMode ? [{ debugName: "isFiltered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allSelected = computed(
    () => {
      const emp = this.employees();
      const sel = this.selectedIds();
      return emp.length > 0 && emp.every((e) => sel.has(e.id));
    },
    ...ngDevMode ? [{ debugName: "allSelected" }] : (
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
  pageNumbers = computed(
    () => {
      const current = this.currentPage();
      const last = this.lastPage();
      if (last <= 7) {
        return Array.from({ length: last }, (_, i) => i + 1);
      }
      const pages = [];
      if (current <= 4) {
        for (let i = 1; i <= 5; i++)
          pages.push(i);
        pages.push(-1);
        pages.push(last);
      } else if (current >= last - 3) {
        pages.push(1);
        pages.push(-1);
        for (let i = last - 4; i <= last; i++)
          pages.push(i);
      } else {
        pages.push(1);
        pages.push(-1);
        for (let i = current - 1; i <= current + 1; i++)
          pages.push(i);
        pages.push(-1);
        pages.push(last);
      }
      return pages;
    },
    ...ngDevMode ? [{ debugName: "pageNumbers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const searchSub = this.searchSubject.pipe(debounceTime(400), distinctUntilChanged()).subscribe(() => {
      this.currentPage.set(1);
      this.loadEmployees();
    });
    this.subscriptions.push(searchSub);
    this.route.queryParamMap.pipe(take(1)).subscribe((params) => {
      const q = params.get("search");
      if (q) {
        this.searchTerm.set(q);
        this.loadEmployees();
      }
    });
    this.loadEmployees();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  buildQueryParams(page) {
    const params = { page, per_page: this.perPage() };
    if (this.searchTerm())
      params.search = this.searchTerm();
    if (this.roleFilter())
      params.role = this.roleFilter();
    if (this.departmentFilter())
      params.department = this.departmentFilter();
    if (this.statusFilter())
      params.status = this.statusFilter();
    return params;
  }
  applyPaginationMeta(response) {
    this.total.set(response.meta.total);
    this.currentPage.set(response.meta.current_page);
    this.lastPage.set(response.meta.last_page);
    this.perPage.set(response.meta.per_page);
    this.from.set(response.meta.from);
    this.to.set(response.meta.to);
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    this.searchSubject.next(value);
  }
  onRoleChange(value) {
    this.roleFilter.set(value);
    this.currentPage.set(1);
    this.loadEmployees();
  }
  onDepartmentChange(value) {
    this.departmentFilter.set(value);
    this.currentPage.set(1);
    this.loadEmployees();
  }
  onStatusChange(value) {
    this.statusFilter.set(value);
    this.currentPage.set(1);
    this.loadEmployees();
  }
  resetFilters() {
    this.searchTerm.set("");
    this.roleFilter.set("");
    this.departmentFilter.set("");
    this.statusFilter.set("");
    this.currentPage.set(1);
    this.loadEmployees();
  }
  loadEmployees(page) {
    const pageToLoad = page ?? this.currentPage();
    this.loading.set(true);
    this.error.set(null);
    this.successMessage.set(null);
    this.selectedIds.set(/* @__PURE__ */ new Set());
    this.employeeService.getEmployees(this.buildQueryParams(pageToLoad)).subscribe({
      next: (response) => {
        this.employees.set(response.data);
        this.applyPaginationMeta(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.employees.set([]);
        if (err.status === 0) {
          this.error.set("Impossible de contacter le serveur. V\xE9rifiez votre connexion.");
        } else {
          this.error.set(err.error?.message || "Une erreur est survenue lors du chargement des employ\xE9s.");
        }
      }
    });
  }
  goToPage(page) {
    if (page < 1 || page > this.lastPage() || page === this.currentPage())
      return;
    this.currentPage.set(page);
    this.loadEmployees(page);
  }
  toggleSelectAll() {
    if (this.allSelected()) {
      this.selectedIds.set(/* @__PURE__ */ new Set());
    } else {
      this.selectedIds.set(new Set(this.employees().map((e) => e.id)));
    }
  }
  toggleSelect(id) {
    const sel = new Set(this.selectedIds());
    if (sel.has(id)) {
      sel.delete(id);
    } else {
      sel.add(id);
    }
    this.selectedIds.set(sel);
  }
  clearSelection() {
    this.selectedIds.set(/* @__PURE__ */ new Set());
  }
  bulkDelete() {
    const count = this.selectedCount();
    if (count === 0)
      return;
    const confirmed = window.confirm(`Supprimer ${count} employ\xE9${count > 1 ? "s" : ""} ?`);
    if (!confirmed)
      return;
    this.loading.set(true);
    const ids = Array.from(this.selectedIds());
    this.employeeService.bulkDeleteEmployees(ids).subscribe({
      next: (response) => {
        this.successMessage.set(response.message || `${ids.length} employ\xE9(s) supprim\xE9(s).`);
        this.loading.set(false);
        this.loadEmployees();
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err.error?.message || "Une erreur est survenue lors de la suppression.");
      }
    });
  }
  toggleStatus(employee) {
    this.loading.set(true);
    this.error.set(null);
    this.successMessage.set(null);
    this.employeeService.toggleStatus(employee.id).subscribe({
      next: () => {
        this.successMessage.set("Statut de l'employ\xE9 mis \xE0 jour avec succ\xE8s.");
        this.loading.set(false);
        this.loadEmployees();
      },
      error: (err) => {
        this.loading.set(false);
        if (err.status === 403) {
          this.error.set(err.error?.message || "Action non autoris\xE9e.");
        } else {
          this.error.set(err.error?.message || "Une erreur est survenue.");
        }
      }
    });
  }
  confirmDelete(employee) {
    const fullName = `${employee.first_name} ${employee.last_name}`;
    const confirmed = window.confirm(`\xCAtes-vous s\xFBr de vouloir supprimer ${fullName} ?`);
    if (!confirmed)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.successMessage.set(null);
    this.employeeService.deleteEmployee(employee.id).subscribe({
      next: (response) => {
        this.successMessage.set(response.message);
        this.loading.set(false);
        this.loadEmployees();
      },
      error: (err) => {
        this.loading.set(false);
        if (err.status === 403) {
          this.error.set(err.error?.message || "Action non autoris\xE9e.");
        } else {
          this.error.set(err.error?.message || "Une erreur est survenue lors de la suppression.");
        }
      }
    });
  }
  isAdminRh(role) {
    return role === "HR_ADMIN";
  }
  formatId(id) {
    return id.toString().padStart(4, "0");
  }
  getRoleBadgeClass(role) {
    switch (role) {
      case "HR_ADMIN":
        return "bg-primary-100 text-primary-dark";
      case "MANAGER":
        return "bg-accent-light text-accent-dark";
      case "EMPLOYE":
        return "bg-info-light text-primary-dark";
      default:
        return "bg-background-alt text-text-muted";
    }
  }
  dismissSuccess() {
    this.successMessage.set(null);
  }
  dismissError() {
    this.error.set(null);
  }
  static \u0275fac = function EmployeeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeListComponent, selectors: [["app-employee-list"]], decls: 56, vars: 8, consts: [[1, "min-h-screen", "bg-background", "py-8", "px-6"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "flex", "gap-3"], ["routerLink", "/admin/employees/import", 1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-lg", "shadow-sm", "hover:bg-primary-hover", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "bg-success-light", "border", "border-success/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2.5"], [1, "bg-error-light", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2.5"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-5", "shadow-sm"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "items-end"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-text-muted", "mb-1.5", "block"], [1, "relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-text-muted", "pointer-events-none"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Pr\xE9nom, nom ou email...", 1, "w-full", "pl-10", "pr-4", "py-2.5", "bg-surface-bright", "border", "border-border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", 3, "input", "value"], ["type", "text", "placeholder", "Filtrer...", 1, "w-full", "px-3.5", "py-2.5", "bg-surface-bright", "border", "border-border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", 3, "input", "value"], [1, "w-full", "px-3.5", "py-2.5", "bg-surface-bright", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "cursor-pointer", 3, "change", "value"], ["value", ""], ["value", "MANAGER"], ["value", "EMPLOYE"], ["value", "ACTIVE"], ["value", "INACTIVE"], [1, "mt-3", "flex", "justify-end"], [1, "bg-surface", "border", "border-border", "rounded-xl", "overflow-hidden", "animate-pulse"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-4", "text-center", "bg-surface", "border", "border-border", "rounded-xl"], [1, "bg-surface", "border", "border-border", "rounded-xl", "overflow-hidden", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-success", "shrink-0", "mt-0.5"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "text-sm", "font-medium", "text-success-dark", "flex-1"], [1, "text-success-dark/60", "hover:text-success-dark", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-sm", "font-medium", "text-error-dark", "flex-1"], [1, "text-error-dark/60", "hover:text-error-dark", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], [1, "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "border", "border-border", "px-4", "py-1.5", "rounded-md", "hover:bg-background-alt", "transition-all", "flex", "items-center", "gap-1.5", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"], [1, "p-6", "space-y-5"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "bg-background-alt", "rounded-full"], [1, "flex-1", "space-y-2"], [1, "h-4", "bg-background-alt", "rounded", "w-1/3"], [1, "h-3", "bg-background-alt", "rounded", "w-1/5"], [1, "h-6", "bg-background-alt", "rounded", "w-20"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-12", "h-12", "text-error", "mb-4"], [1, "font-heading", "text-xl", "font-semibold", "text-text-heading", "mb-2"], [1, "text-sm", "text-text-secondary", "max-w-sm", "mb-6"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-lg", "shadow-sm", "hover:bg-primary-hover", "transition-all", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-12", "h-12", "text-text-muted", "mb-4"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/admin/employees/import", 1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-lg", "shadow-sm", "hover:bg-primary-hover", "transition-all", "inline-flex", "items-center", "gap-2", "cursor-pointer"], [1, "flex", "items-center", "gap-3", "px-4", "py-2", "bg-primary-50", "border-b", "border-border"], [1, "overflow-x-auto"], [1, "w-full", "border-collapse"], [1, "bg-surface-container-low", "border-b", "border-border"], [1, "w-12", "px-4", "py-3.5"], [1, "flex", "items-center", "cursor-pointer"], ["type", "checkbox", 1, "peer", "sr-only", 3, "change", "checked"], [1, "w-4", "h-4", "rounded", "border-2", "border-border", "bg-surface", "peer-checked:bg-primary", "peer-checked:border-primary", "transition-colors"], [1, "px-4", "py-3.5", "text-left", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider"], [1, "px-4", "py-3.5", "text-left", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider", "hidden", "md:table-cell"], [1, "px-4", "py-3.5", "text-center", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider"], [1, "divide-y", "divide-border"], [1, "hover:bg-surface-container-lowest", "transition-colors"], [1, "px-4", "py-3.5", "bg-surface-container-low", "border-t", "border-border", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3"], [1, "text-sm", "text-text-muted"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-border", "bg-surface-bright", "text-text-muted", "hover:bg-surface-container", "transition-colors", "disabled:opacity-30", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], ["points", "15 18 9 12 15 6"], ["points", "9 18 15 12 9 6"], [1, "text-sm", "font-medium", "text-primary"], [1, "text-sm", "text-error", "hover:text-error-dark", "font-medium", "transition-colors", "cursor-pointer", 3, "click"], [1, "text-sm", "text-text-secondary", "hover:text-text", "font-medium", "transition-colors", "cursor-pointer", 3, "click"], [1, "hover:bg-surface-container-lowest", "transition-colors", 3, "click"], [1, "px-4", "py-3.5", 3, "click"], [1, "px-4", "py-3.5"], [1, "flex", "items-center", "gap-3"], ["size", "sm", 3, "imageUrl", "name"], [1, "text-sm", "font-semibold", "text-text"], [1, "text-xs", "text-text-muted"], [1, "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full"], [1, "text-sm", "text-text-secondary"], [1, "px-4", "py-3.5", "text-sm", "text-text-secondary", "hidden", "md:table-cell"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-medium", "px-2.5", "py-1", "rounded-full"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "px-4", "py-3.5", "text-center"], [1, "flex", "items-center", "justify-center", "gap-1"], ["title", "Admin RH non modifiable", 1, "inline-flex", "items-center", "p-1.5", "rounded-md", "text-text-muted", "cursor-not-allowed"], ["x", "1", "y", "3", "width", "15", "height", "13"], ["points", "16 8 20 8 23 11 23 16 16 16 16 8"], ["cx", "5.5", "cy", "18.5", "r", "2.5"], ["cx", "18.5", "cy", "18.5", "r", "2.5"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "inline-flex", "items-center", "p-1.5", "rounded-md", "text-text-muted", "hover:bg-background-alt", "hover:text-primary", "transition-all", "cursor-pointer", 3, "click", "title"], ["title", "Supprimer", 1, "inline-flex", "items-center", "p-1.5", "rounded-md", "text-text-muted", "hover:bg-error-light", "hover:text-error", "transition-all", "cursor-pointer", 3, "click"], ["points", "5 3 19 12 5 21 5 3"], [1, "font-semibold", "text-text"], [1, "px-1", "text-text-muted", "text-sm"], [1, "w-8", "h-8", "rounded-lg", "text-sm", "font-medium", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-text-inverse", "text-text-secondary", "hover:bg-background-alt", "border", "border-border"], [1, "w-8", "h-8", "rounded-lg", "text-sm", "font-medium", "transition-colors", "cursor-pointer", 3, "click"]], template: function EmployeeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Employ\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "G\xE9rez les employ\xE9s de votre entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 7);
      \u0275\u0275element(11, "path", 8)(12, "polyline", 9)(13, "line", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Importer ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(15, EmployeeListComponent_Conditional_15_Template, 10, 1, "div", 11);
      \u0275\u0275conditionalCreate(16, EmployeeListComponent_Conditional_16_Template, 11, 1, "div", 12);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div")(20, "label", 15);
      \u0275\u0275text(21, "Recherche");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 17);
      \u0275\u0275element(24, "circle", 18)(25, "line", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "input", 20);
      \u0275\u0275listener("input", function EmployeeListComponent_Template_input_input_26_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div")(28, "label", 15);
      \u0275\u0275text(29, "D\xE9partement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 21);
      \u0275\u0275listener("input", function EmployeeListComponent_Template_input_input_30_listener($event) {
        return ctx.onDepartmentChange($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div")(32, "label", 15);
      \u0275\u0275text(33, "R\xF4le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "select", 22);
      \u0275\u0275listener("change", function EmployeeListComponent_Template_select_change_34_listener($event) {
        return ctx.onRoleChange($event.target.value);
      });
      \u0275\u0275elementStart(35, "option", 23);
      \u0275\u0275text(36, "Tous les r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 24);
      \u0275\u0275text(38, "Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 25);
      \u0275\u0275text(40, "Employ\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div")(42, "label", 15);
      \u0275\u0275text(43, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "select", 22);
      \u0275\u0275listener("change", function EmployeeListComponent_Template_select_change_44_listener($event) {
        return ctx.onStatusChange($event.target.value);
      });
      \u0275\u0275elementStart(45, "option", 23);
      \u0275\u0275text(46, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 26);
      \u0275\u0275text(48, "Actif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 27);
      \u0275\u0275text(50, "Inactif");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(51, EmployeeListComponent_Conditional_51_Template, 6, 0, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(52, EmployeeListComponent_Conditional_52_Template, 4, 1, "div", 29)(53, EmployeeListComponent_Conditional_53_Template, 11, 1, "div", 30)(54, EmployeeListComponent_Conditional_54_Template, 8, 1, "div", 30)(55, EmployeeListComponent_Conditional_55_Template, 37, 5, "div", 31);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.successMessage() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 16 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.departmentFilter());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.roleFilter());
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.statusFilter());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isFiltered() ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 52 : ctx.error() && ctx.employees().length === 0 ? 53 : ctx.employees().length === 0 ? 54 : 55);
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, AvatarComponent], styles: ['@charset "UTF-8";\n\n\n/*# sourceMappingURL=employee-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeListComponent, [{
    type: Component,
    args: [{ selector: "app-employee-list", standalone: true, imports: [RouterModule, FormsModule, AvatarComponent], template: `<div class="min-h-screen bg-background py-8 px-6">
  <div class="max-w-7xl mx-auto flex flex-col gap-6">

    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="font-heading text-2xl font-bold text-text-heading">Employ\xE9s</h1>
        <p class="text-sm text-text-secondary mt-1">G\xE9rez les employ\xE9s de votre entreprise</p>
      </div>
      <div class="flex gap-3">
        <a routerLink="/admin/employees/import"
           class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-primary-hover transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          Importer
        </a>
      </div>
    </div>

    <!-- Alerts -->
    @if (successMessage()) {
      <div class="bg-success-light border border-success/20 rounded-lg p-4 flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-success shrink-0 mt-0.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span class="text-sm font-medium text-success-dark flex-1">{{ successMessage() }}</span>
        <button (click)="dismissSuccess()" class="text-success-dark/60 hover:text-success-dark transition-colors shrink-0 cursor-pointer">
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
        <button (click)="dismissError()" class="text-error-dark/60 hover:text-error-dark transition-colors shrink-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    }

    <!-- Search & Filter Bar -->
    <div class="bg-surface border border-border rounded-xl p-5 shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label class="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5 block">Recherche</label>
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" [value]="searchTerm()" (input)="onSearchChange(($any($event).target).value)"
              placeholder="Pr\xE9nom, nom ou email..."
              class="w-full pl-10 pr-4 py-2.5 bg-surface-bright border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5 block">D\xE9partement</label>
          <input type="text" [value]="departmentFilter()" (input)="onDepartmentChange(($any($event).target).value)"
            placeholder="Filtrer..."
            class="w-full px-3.5 py-2.5 bg-surface-bright border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
        </div>
        <div>
          <label class="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5 block">R\xF4le</label>
          <select [value]="roleFilter()" (change)="onRoleChange(($any($event).target).value)"
            class="w-full px-3.5 py-2.5 bg-surface-bright border border-border rounded-lg text-sm text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all cursor-pointer">
            <option value="">Tous les r\xF4les</option>
            <option value="MANAGER">Manager</option>
            <option value="EMPLOYE">Employ\xE9</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5 block">Statut</label>
          <select [value]="statusFilter()" (change)="onStatusChange(($any($event).target).value)"
            class="w-full px-3.5 py-2.5 bg-surface-bright border border-border rounded-lg text-sm text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all cursor-pointer">
            <option value="">Tous</option>
            <option value="ACTIVE">Actif</option>
            <option value="INACTIVE">Inactif</option>
          </select>
        </div>
      </div>
      @if (isFiltered()) {
        <div class="mt-3 flex justify-end">
          <button (click)="resetFilters()" class="text-sm font-medium text-text-secondary hover:text-text border border-border px-4 py-1.5 rounded-md hover:bg-background-alt transition-all flex items-center gap-1.5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
            R\xE9initialiser
          </button>
        </div>
      }
    </div>

    <!-- Loading -->
    @if (loading()) {
      <div class="bg-surface border border-border rounded-xl overflow-hidden animate-pulse">
        <div class="p-6 space-y-5">
          @for (_ of [1,2,3,4]; track _) {
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-background-alt rounded-full"></div>
              <div class="flex-1 space-y-2">
                <div class="h-4 bg-background-alt rounded w-1/3"></div>
                <div class="h-3 bg-background-alt rounded w-1/5"></div>
              </div>
              <div class="h-6 bg-background-alt rounded w-20"></div>
            </div>
          }
        </div>
      </div>
    } @else if (error() && employees().length === 0) {
      <!-- Error state -->
      <div class="flex flex-col items-center justify-center py-16 px-4 text-center bg-surface border border-border rounded-xl">
        <svg class="w-12 h-12 text-error mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <h3 class="font-heading text-xl font-semibold text-text-heading mb-2">Une erreur est survenue</h3>
        <p class="text-sm text-text-secondary max-w-sm mb-6">{{ error() }}</p>
        <button (click)="loadEmployees()" class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-primary-hover transition-all cursor-pointer">R\xE9essayer</button>
      </div>
    } @else if (employees().length === 0) {
      <!-- Empty state -->
      <div class="flex flex-col items-center justify-center py-16 px-4 text-center bg-surface border border-border rounded-xl">
        <svg class="w-12 h-12 text-text-muted mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        @if (isFiltered()) {
          <h3 class="font-heading text-xl font-semibold text-text-heading mb-2">Aucun r\xE9sultat</h3>
          <p class="text-sm text-text-secondary max-w-sm mb-6">Essayez de modifier vos filtres de recherche.</p>
          <button (click)="resetFilters()" class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-primary-hover transition-all cursor-pointer">R\xE9initialiser les filtres</button>
        } @else {
          <h3 class="font-heading text-xl font-semibold text-text-heading mb-2">Aucun employ\xE9 pour le moment</h3>
          <p class="text-sm text-text-secondary max-w-sm mb-6">Commencez par inviter vos premiers collaborateurs ou importez une liste.</p>
          <a routerLink="/admin/employees/import" class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-primary-hover transition-all inline-flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Importer des employ\xE9s
          </a>
        }
      </div>
    } @else {
      <!-- Table -->
      <div class="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
        @if (selectedCount() > 0) {
          <div class="flex items-center gap-3 px-4 py-2 bg-primary-50 border-b border-border">
            <span class="text-sm font-medium text-primary">{{ selectedCount() }} s\xE9lectionn\xE9{{ selectedCount() > 1 ? 's' : '' }}</span>
            <button (click)="bulkDelete()" class="text-sm text-error hover:text-error-dark font-medium transition-colors cursor-pointer">Supprimer</button>
            <button (click)="clearSelection()" class="text-sm text-text-secondary hover:text-text font-medium transition-colors cursor-pointer">Annuler</button>
          </div>
        }
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-surface-container-low border-b border-border">
                <th class="w-12 px-4 py-3.5">
                  <label class="flex items-center cursor-pointer">
                    <input type="checkbox" class="peer sr-only" [checked]="allSelected()" (change)="toggleSelectAll()" />
                    <div class="w-4 h-4 rounded border-2 border-border bg-surface peer-checked:bg-primary peer-checked:border-primary transition-colors"></div>
                  </label>
                </th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider">Employ\xE9</th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider">R\xF4le</th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider">D\xE9partement</th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider hidden md:table-cell">Email</th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider">Statut</th>
                <th class="px-4 py-3.5 text-center text-xs font-bold text-text-muted uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              @for (employee of employees(); track employee.id) {
                <tr class="hover:bg-surface-container-lowest transition-colors" (click)="toggleSelect(employee.id)">
                  <td class="px-4 py-3.5" (click)="$event.stopPropagation()">
                    <label class="flex items-center cursor-pointer">
                      <input type="checkbox" class="peer sr-only" [checked]="selectedIds().has(employee.id)" (change)="toggleSelect(employee.id)" />
                      <div class="w-4 h-4 rounded border-2 border-border bg-surface peer-checked:bg-primary peer-checked:border-primary transition-colors"></div>
                    </label>
                  </td>
                  <td class="px-4 py-3.5">
                    <div class="flex items-center gap-3">
                      <app-avatar [imageUrl]="imageUrlService.resolve(employee.avatar_url)" [name]="employee.first_name + ' ' + employee.last_name" size="sm" />
                      <div>
                        <p class="text-sm font-semibold text-text">{{ employee.first_name }} {{ employee.last_name }}</p>
                        <p class="text-xs text-text-muted">#WS-{{ formatId(employee.id) }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3.5">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full" [class]="getRoleBadgeClass(employee.role)">
                      @if (employee.role === 'HR_ADMIN') { Admin }
                      @else if (employee.role === 'MANAGER') { Manager }
                      @else { Employ\xE9 }
                    </span>
                  </td>
                  <td class="px-4 py-3.5">
                    <span class="text-sm text-text-secondary">{{ employee.department.name }}</span>
                  </td>
                  <td class="px-4 py-3.5 text-sm text-text-secondary hidden md:table-cell">{{ employee.email }}</td>
                  <td class="px-4 py-3.5">
                    <span class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                      [class.bg-success-light]="employee.status === 'ACTIVE'"
                      [class.text-success-dark]="employee.status === 'ACTIVE'"
                      [class.bg-background-alt]="employee.status !== 'ACTIVE'"
                      [class.text-text-muted]="employee.status !== 'ACTIVE'">
                      <span class="w-1.5 h-1.5 rounded-full"
                        [class.bg-success]="employee.status === 'ACTIVE'"
                        [class.bg-text-muted]="employee.status !== 'ACTIVE'"></span>
                      @if (employee.status === 'ACTIVE') { Actif }
                      @else if (employee.status === 'INACTIVE') { Inactif }
                      @else { {{ employee.status }} }
                    </span>
                  </td>
                  <td class="px-4 py-3.5 text-center">
                    <div class="flex items-center justify-center gap-1">
                      @if (isAdminRh(employee.role)) {
                        <span class="inline-flex items-center p-1.5 rounded-md text-text-muted cursor-not-allowed" title="Admin RH non modifiable">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        </span>
                        <span class="inline-flex items-center p-1.5 rounded-md text-text-muted cursor-not-allowed" title="Admin RH non modifiable">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </span>
                      } @else {
                        <button (click)="toggleStatus(employee); $event.stopPropagation()"
                          [title]="employee.status === 'ACTIVE' ? 'D\xE9sactiver' : 'R\xE9activer'"
                          class="inline-flex items-center p-1.5 rounded-md text-text-muted hover:bg-background-alt hover:text-primary transition-all cursor-pointer">
                          @if (employee.status === 'ACTIVE') {
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                          } @else {
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                          }
                        </button>
                        <button (click)="confirmDelete(employee); $event.stopPropagation()"
                          title="Supprimer"
                          class="inline-flex items-center p-1.5 rounded-md text-text-muted hover:bg-error-light hover:text-error transition-all cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                      }
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="px-4 py-3.5 bg-surface-container-low border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-sm text-text-muted">
            @if (from() !== null && to() !== null) {
              Affichage de <span class="font-semibold text-text">{{ from() }}\u2013{{ to() }}</span> sur <span class="font-semibold text-text">{{ total() }}</span> employ\xE9s
            }
          </p>
          <div class="flex items-center gap-2">
            <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() <= 1"
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-surface-bright text-text-muted hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            @for (page of pageNumbers(); track $index) {
              @if (page === -1) {
                <span class="px-1 text-text-muted text-sm">\u2026</span>
              } @else {
                <button (click)="goToPage(page)"
                  class="w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  [class.bg-primary]="page === currentPage()"
                  [class.text-text-inverse]="page === currentPage()"
                  [class.text-text-secondary]="page !== currentPage()"
                  [class.hover:bg-background-alt]="page !== currentPage()"
                  [class.border]="page !== currentPage()"
                  [class.border-border]="page !== currentPage()">
                  {{ page }}
                </button>
              }
            }
            <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() >= lastPage()"
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-surface-bright text-text-muted hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

  
      </div>
    }
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/admin/employee-list/employee-list.component.scss */\n/*# sourceMappingURL=employee-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeListComponent, { className: "EmployeeListComponent", filePath: "src/app/features/admin/employee-list/employee-list.component.ts", lineNumber: 18 });
})();
export {
  EmployeeListComponent
};
//# sourceMappingURL=chunk-AOBGM6JJ.js.map
