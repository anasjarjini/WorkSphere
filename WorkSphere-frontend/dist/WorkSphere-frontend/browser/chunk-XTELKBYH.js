import {
  AnnouncementService
} from "./chunk-B5LODSAL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-75TSC3TY.js";
import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import "./chunk-DGTBVCJC.js";
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
  ɵɵnextContext,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/shared/announcements/announcement-admin/announcement-admin.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function AnnouncementAdminComponent_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 28);
    \u0275\u0275element(2, "div", 29);
    \u0275\u0275elementStart(3, "div", 30)(4, "span", 31);
    \u0275\u0275text(5, "draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 31);
    \u0275\u0275text(7, "inventory_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "p", 2);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 33);
    \u0275\u0275text(12, "Brouillons en cours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 28);
    \u0275\u0275element(14, "div", 29);
    \u0275\u0275elementStart(15, "div", 30)(16, "span", 31);
    \u0275\u0275text(17, "timer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 32)(19, "p", 2);
    \u0275\u0275text(20, "2.4 ");
    \u0275\u0275elementStart(21, "span", 34);
    \u0275\u0275text(22, "jours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 33);
    \u0275\u0275text(24, "Temps moy. de r\xE9daction");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 28);
    \u0275\u0275element(26, "div", 29);
    \u0275\u0275elementStart(27, "div", 30)(28, "span", 31);
    \u0275\u0275text(29, "update");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 32)(31, "p", 35);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 33);
    \u0275\u0275text(34, "Derni\xE8re activit\xE9");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.statCount());
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx_r0.lastActivity());
  }
}
function AnnouncementAdminComponent_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 28);
    \u0275\u0275element(2, "div", 29);
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32)(6, "p", 2);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 36);
    \u0275\u0275text(9, "Total Archiv\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 28);
    \u0275\u0275element(11, "div", 29);
    \u0275\u0275elementStart(12, "span", 31);
    \u0275\u0275text(13, "auto_delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 32)(15, "p", 2);
    \u0275\u0275text(16, "30 ");
    \u0275\u0275elementStart(17, "span", 15);
    \u0275\u0275text(18, "jours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 36);
    \u0275\u0275text(20, "Archivage Automatique");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 28);
    \u0275\u0275element(22, "div", 29);
    \u0275\u0275elementStart(23, "span", 31);
    \u0275\u0275text(24, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 32)(26, "p", 2);
    \u0275\u0275text(27);
    \u0275\u0275elementStart(28, "span", 37);
    \u0275\u0275text(29, "+3% ce mois");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "p", 36);
    \u0275\u0275text(31, "Annonces Restaur\xE9es");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.statCount());
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate1("", ctx_r0.restoredCount(), " ");
  }
}
function AnnouncementAdminComponent_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 28);
    \u0275\u0275element(2, "div", 29);
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32)(6, "p", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 33);
    \u0275\u0275text(9, "Annonces actives");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 28);
    \u0275\u0275element(11, "div", 29);
    \u0275\u0275elementStart(12, "span", 40);
    \u0275\u0275text(13, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 32)(15, "p", 41);
    \u0275\u0275text(16, "89%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 33);
    \u0275\u0275text(18, "Taux d'ouverture");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 42)(20, "div", 43)(21, "div", 44);
    \u0275\u0275element(22, "div", 45)(23, "div", 46)(24, "div", 47)(25, "div", 48)(26, "div", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 32)(28, "h4", 50);
    \u0275\u0275text(29, "Engagement Global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 51);
    \u0275\u0275text(31, "L'engagement a augment\xE9 de 12% par rapport au mois dernier suite aux nouvelles politiques de feedback.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.statCount());
  }
}
function AnnouncementAdminComponent_Conditional_44_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 52)(1, "td", 53);
    \u0275\u0275element(2, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
    \u0275\u0275element(4, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 53);
    \u0275\u0275element(6, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 53);
    \u0275\u0275element(8, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "td", 53);
    \u0275\u0275elementEnd();
  }
}
function AnnouncementAdminComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AnnouncementAdminComponent_Conditional_44_For_1_Template, 10, 0, "tr", 52, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AnnouncementAdminComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 58)(2, "span", 59);
    \u0275\u0275text(3, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5, "Aucune annonce pour le moment");
    \u0275\u0275elementEnd()()();
  }
}
function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Manager: ", ctx_r0.managerName(ann_r2));
  }
}
function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AnnouncementAdminComponent_Conditional_46_For_1_Conditional_12_Conditional_3_Template, 2, 1, "span", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getScopeLabel(ann_r2.target_scope));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.managerName(ann_r2) ? 3 : -1);
  }
}
function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getScopeLabel(ann_r2.target_scope));
  }
}
function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "archive");
    \u0275\u0275elementEnd();
  }
}
function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ann_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.restore(ann_r2));
    });
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2, "unarchive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ann_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.forceDelete(ann_r2));
    });
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5, "delete_forever");
    \u0275\u0275elementEnd()();
  }
}
function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_23_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ann_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.publish(ann_r2));
    });
    \u0275\u0275elementStart(1, "span", 82);
    \u0275\u0275text(2, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Publier ");
    \u0275\u0275elementEnd();
  }
}
function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ann_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(ann_r2));
    });
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 79);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_46_For_1_Conditional_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ann_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.archive(ann_r2));
    });
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, AnnouncementAdminComponent_Conditional_46_For_1_Conditional_23_Conditional_6_Template, 4, 0, "button", 80);
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ann_r2.status === "draft" ? 6 : -1);
  }
}
function AnnouncementAdminComponent_Conditional_46_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 60)(1, "td", 53)(2, "div", 61)(3, "div", 62)(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 64)(7, "p", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 66);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td", 53);
    \u0275\u0275conditionalCreate(12, AnnouncementAdminComponent_Conditional_46_For_1_Conditional_12_Template, 4, 2, "div", 67)(13, AnnouncementAdminComponent_Conditional_46_For_1_Conditional_13_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 69);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 53)(17, "span", 70);
    \u0275\u0275conditionalCreate(18, AnnouncementAdminComponent_Conditional_46_For_1_Conditional_18_Template, 2, 0, "span", 71);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 72)(21, "div", 73);
    \u0275\u0275conditionalCreate(22, AnnouncementAdminComponent_Conditional_46_For_1_Conditional_22_Template, 6, 0)(23, AnnouncementAdminComponent_Conditional_46_For_1_Conditional_23_Template, 7, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ann_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getTypeIcon(ann_r2.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ann_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r2.content);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ann_r2.target_scope === "TEAM" ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatPublishedDate(ann_r2));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(ann_r2.status));
    \u0275\u0275advance();
    \u0275\u0275conditional(ann_r2.status === "archived" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ann_r2.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ann_r2.status === "archived" ? 22 : 23);
  }
}
function AnnouncementAdminComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AnnouncementAdminComponent_Conditional_46_For_1_Template, 24, 10, "tr", 60, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.filtered());
  }
}
function AnnouncementAdminComponent_Conditional_57_Conditional_21_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const manager_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", manager_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", manager_r8.first_name, " ", manager_r8.last_name);
  }
}
function AnnouncementAdminComponent_Conditional_57_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 89);
    \u0275\u0275text(2, "Manager cible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementAdminComponent_Conditional_57_Conditional_21_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.target_manager_id, $event) || (ctx_r0.formData.target_manager_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 104);
    \u0275\u0275text(5, "Choisir un manager...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, AnnouncementAdminComponent_Conditional_57_Conditional_21_For_7_Template, 2, 3, "option", 104, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.target_manager_id);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.managers());
  }
}
function AnnouncementAdminComponent_Conditional_57_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.modalError());
  }
}
function AnnouncementAdminComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 84);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_57_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 85)(3, "h3", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 87);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_57_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 88);
    \u0275\u0275listener("ngSubmit", function AnnouncementAdminComponent_Conditional_57_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit("published"));
    });
    \u0275\u0275elementStart(8, "div")(9, "label", 89);
    \u0275\u0275text(10, "Titre de l'annonce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementAdminComponent_Conditional_57_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.title, $event) || (ctx_r0.formData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 91)(13, "div")(14, "label", 89);
    \u0275\u0275text(15, "Visibilit\xE9 (Scope)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 92);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementAdminComponent_Conditional_57_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.target_scope, $event) || (ctx_r0.formData.target_scope = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 93);
    \u0275\u0275text(18, "Toute l'entreprise (COMPANY)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 94);
    \u0275\u0275text(20, "\xC9quipe sp\xE9cifique (TEAM)");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, AnnouncementAdminComponent_Conditional_57_Conditional_21_Template, 8, 2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "label", 89);
    \u0275\u0275text(24, "Contenu de l'annonce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 95);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementAdminComponent_Conditional_57_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formData.content, $event) || (ctx_r0.formData.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 96)(27, "span", 97);
    \u0275\u0275text(28, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 33);
    \u0275\u0275text(30, "Cliquez pour ajouter une image ou un document (PDF, PNG, JPG)");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, AnnouncementAdminComponent_Conditional_57_Conditional_31_Template, 2, 1, "p", 98);
    \u0275\u0275elementStart(32, "div", 99)(33, "button", 100);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_57_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(34, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 101);
    \u0275\u0275listener("click", function AnnouncementAdminComponent_Conditional_57_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit("draft"));
    });
    \u0275\u0275text(36, " Enregistrer brouillon ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 102);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.modalTitle());
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.title);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.target_scope);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isTeamScope() ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formData.content);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.modalError() ? 31 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.modalSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalSaving() ? "Enregistrement..." : "Publier maintenant", " ");
  }
}
var AnnouncementAdminComponent = class _AnnouncementAdminComponent {
  announcementService = inject(AnnouncementService);
  authService = inject(AuthService);
  user = this.authService.currentUser;
  announcements = signal(
    [],
    ...ngDevMode ? [{ debugName: "announcements" }] : (
      /* istanbul ignore next */
      []
    )
  );
  managers = signal(
    [],
    ...ngDevMode ? [{ debugName: "managers" }] : (
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
  search = signal(
    "",
    ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeTab = signal(
    "published",
    ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalError = signal(
    null,
    ...ngDevMode ? [{ debugName: "modalError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editingId = null;
  formData = {
    title: "",
    content: "",
    target_scope: "COMPANY",
    target_manager_id: null
  };
  constructor() {
    this.announcementService.getManagers().subscribe({
      next: (data) => this.managers.set(data),
      error: () => {
      }
    });
    this.load();
  }
  isTeamScope = computed(
    () => this.formData.target_scope === "TEAM",
    ...ngDevMode ? [{ debugName: "isTeamScope" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalTitle = computed(
    () => this.editingId ? "Modifier l'annonce" : "Nouvelle Annonce",
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtered = computed(
    () => {
      const query = this.search().trim().toLowerCase();
      if (!query)
        return this.announcements();
      return this.announcements().filter((a) => a.title.toLowerCase().includes(query) || a.content.toLowerCase().includes(query));
    },
    ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statTitle = computed(
    () => this.activeTab() === "draft" ? "Brouillons en cours" : "Annonces actives",
    ...ngDevMode ? [{ debugName: "statTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statCount = computed(
    () => this.announcements().length,
    ...ngDevMode ? [{ debugName: "statCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  restoredCount = computed(
    () => this.announcements().length,
    ...ngDevMode ? [{ debugName: "restoredCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  lastActivity = computed(
    () => {
      if (!this.announcements().length)
        return "\u2014";
      const latest = this.announcements().reduce((a, b) => new Date(b.updated_at ?? b.created_at ?? 0).getTime() > new Date(a.updated_at ?? a.created_at ?? 0).getTime() ? b : a);
      const date = latest.updated_at ?? latest.created_at;
      return date ? this.formatRelative(date) : "\u2014";
    },
    ...ngDevMode ? [{ debugName: "lastActivity" }] : (
      /* istanbul ignore next */
      []
    )
  );
  switchTab(tab) {
    if (this.activeTab() === tab)
      return;
    this.activeTab.set(tab);
    this.search.set("");
    this.load();
  }
  load() {
    this.loading.set(true);
    this.announcementService.getAnnouncements(this.activeTab()).subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openCreateModal() {
    this.editingId = null;
    this.formData = {
      title: "",
      content: "",
      target_scope: "COMPANY",
      target_manager_id: null
    };
    this.modalError.set(null);
    this.modalOpen.set(true);
  }
  openEditModal(announcement) {
    this.editingId = announcement.id;
    this.formData = {
      title: announcement.title,
      content: announcement.content,
      target_scope: announcement.target_scope ?? "COMPANY",
      target_manager_id: announcement.target_manager_id ?? null
    };
    this.modalError.set(null);
    this.modalOpen.set(true);
  }
  closeModal() {
    if (this.modalSaving())
      return;
    this.modalOpen.set(false);
    this.modalError.set(null);
  }
  submit(status) {
    if (!this.formData.title.trim()) {
      this.modalError.set("Le titre est requis.");
      return;
    }
    if (!this.formData.content.trim()) {
      this.modalError.set("Le contenu est requis.");
      return;
    }
    const payload = {
      title: this.formData.title.trim(),
      content: this.formData.content.trim(),
      target_scope: this.formData.target_scope,
      status
    };
    if (this.formData.target_scope === "TEAM") {
      if (!this.formData.target_manager_id) {
        this.modalError.set("Le manager cible est requis pour une annonce d'\xE9quipe.");
        return;
      }
      payload.target_manager_id = this.formData.target_manager_id;
    }
    this.modalSaving.set(true);
    this.modalError.set(null);
    const request = this.editingId ? this.announcementService.updateAnnouncement(this.editingId, payload) : this.announcementService.createAnnouncement(payload);
    request.subscribe({
      next: () => {
        this.modalSaving.set(false);
        this.modalOpen.set(false);
        this.load();
      },
      error: (err) => {
        this.modalSaving.set(false);
        this.modalError.set(err.error?.message || "Erreur lors de l'enregistrement.");
      }
    });
  }
  publish(announcement) {
    this.announcementService.updateAnnouncement(announcement.id, { status: "published" }).subscribe({
      next: () => this.load(),
      error: () => {
      }
    });
  }
  archive(announcement) {
    const confirmed = window.confirm(`Archiver l'annonce \xAB ${announcement.title} \xBB ?`);
    if (!confirmed)
      return;
    this.announcementService.deleteAnnouncement(announcement.id).subscribe({
      next: () => this.load(),
      error: () => {
      }
    });
  }
  restore(announcement) {
    this.announcementService.updateAnnouncement(announcement.id, { status: "published" }).subscribe({
      next: () => this.load(),
      error: () => {
      }
    });
  }
  forceDelete(announcement) {
    const confirmed = window.confirm(`Supprimer d\xE9finitivement l'annonce \xAB ${announcement.title} \xBB ? Cette action est irr\xE9versible.`);
    if (!confirmed)
      return;
    this.announcementService.forceDeleteAnnouncement(announcement.id).subscribe({
      next: () => this.load(),
      error: () => {
      }
    });
  }
  getScopeLabel(scope) {
    return scope === "COMPANY" ? "COMPANY" : "TEAM";
  }
  getScopeClass(scope) {
    return scope === "COMPANY" ? "bg-surface-container-high text-primary" : "bg-tertiary-fixed text-on-tertiary-fixed";
  }
  getStatusLabel(status) {
    return status === "draft" ? "Brouillon" : status === "archived" ? "Archiv\xE9" : "Publi\xE9";
  }
  getStatusClass(status) {
    if (status === "draft")
      return "bg-surface-variant text-on-surface-variant";
    if (status === "archived")
      return "bg-surface-container-highest text-on-surface-variant";
    return "bg-secondary-container text-on-secondary-container";
  }
  getTypeIcon(type) {
    switch (type) {
      case "MEETING":
        return "event";
      case "TRAINING":
        return "school";
      case "POLICY":
        return "policy";
      default:
        return "celebration";
    }
  }
  formatRelative(value) {
    const date = new Date(value);
    const diffMs = Date.now() - date.getTime();
    const minutes = Math.floor(diffMs / 6e4);
    if (minutes < 1)
      return "\xC0 l'instant";
    if (minutes < 60)
      return `Il y a ${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24)
      return `Il y a ${hours} h`;
    const days = Math.floor(hours / 24);
    if (days === 1)
      return "Hier";
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
  }
  formatPublishedDate(announcement) {
    const date = announcement.published_at ?? announcement.created_at;
    return date ? this.formatRelative(date) : "\u2014";
  }
  managerName(announcement) {
    const manager = announcement.targetManager;
    return manager ? `${manager.first_name} ${manager.last_name}` : "";
  }
  static \u0275fac = function AnnouncementAdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnouncementAdminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnouncementAdminComponent, selectors: [["app-announcement-admin"]], decls: 58, vars: 14, consts: [[1, "p-6", "lg:p-8", "max-w-[1280px]", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-end", "gap-4"], [1, "font-headline-lg", "text-headline-lg", "text-on-surface"], [1, "font-body-md", "text-on-surface-variant", "mt-1"], [1, "inline-flex", "items-center", "gap-2", "bg-primary", "text-on-primary", "px-5", "py-2.5", "rounded-lg", "font-label-md", "text-label-md", "hover:bg-primary-container", "transition-all", "shadow-md", "hover:shadow-lg", "active:scale-95", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-lg"], [1, "flex", "bg-surface-container", "rounded-lg", "p-1", "w-fit", "border", "border-outline-variant"], [1, "px-5", "py-1.5", "rounded-md", "font-label-md", "text-label-md", "transition-colors", "cursor-pointer", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-6"], [1, "bg-surface", "rounded-xl", "border", "border-outline-variant", "overflow-hidden"], [1, "p-4", "border-b", "border-outline-variant", "bg-surface-container-lowest", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-3"], [1, "flex", "items-center", "bg-surface", "rounded-lg", "border", "border-outline-variant", "px-3", "py-2", "w-full", "sm:w-80", "focus-within:border-primary", "transition-colors"], [1, "material-symbols-outlined", "text-on-surface-variant", "text-[20px]", "mr-2"], ["type", "text", "placeholder", "Rechercher une annonce...", 1, "bg-transparent", "border-none", "outline-none", "text-body-sm", "font-body-sm", "text-on-surface", "placeholder:text-on-surface-variant", "focus:ring-0", "w-full", 3, "ngModelChange", "ngModel"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant"], [1, "overflow-x-auto", "w-full"], [1, "w-full", "text-left", "min-w-[800px]"], [1, "bg-surface-container-low", "border-b", "border-outline-variant"], [1, "px-6", "py-4", "font-label-sm", "text-label-sm", "text-on-surface-variant", "font-bold", "uppercase", "tracking-wider", "w-2/5"], [1, "px-6", "py-4", "font-label-sm", "text-label-sm", "text-on-surface-variant", "font-bold", "uppercase", "tracking-wider"], [1, "px-6", "py-4", "font-label-sm", "text-label-sm", "text-on-surface-variant", "font-bold", "uppercase", "tracking-wider", "text-right"], [1, "divide-y", "divide-outline-variant", "font-body-sm", "text-body-sm"], [1, "px-6", "py-4", "border-t", "border-outline-variant", "bg-surface-container-lowest", "flex", "justify-between", "items-center"], [1, "flex", "items-center", "gap-2"], ["disabled", "", 1, "p-2", "rounded", "border", "border-outline-variant", "text-on-surface-variant", "opacity-50", "cursor-not-allowed"], [1, "material-symbols-outlined", "text-[20px]"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "modal-overlay"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-5", "flex", "flex-col", "justify-between", "gap-4", "relative", "overflow-hidden", "group"], [1, "absolute", "-right-4", "-top-4", "w-24", "h-24", "bg-surface-container", "rounded-full", "opacity-50", "group-hover:scale-110", "transition-transform", "duration-500"], [1, "flex", "items-center", "justify-between", "relative", "z-10"], [1, "material-symbols-outlined", "text-on-surface-variant"], [1, "relative", "z-10"], [1, "font-label-md", "text-label-md", "text-on-surface-variant"], [1, "font-headline-sm", "text-headline-sm", "text-on-surface-variant"], [1, "font-headline-sm", "text-headline-sm", "text-on-surface", "mt-auto"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant", "uppercase", "tracking-wider"], [1, "font-body-sm", "text-body-sm", "text-secondary"], [1, "material-symbols-outlined", "text-primary", "text-3xl"], [1, "font-headline-lg", "text-headline-lg", "text-primary"], [1, "material-symbols-outlined", "text-secondary", "text-3xl"], [1, "font-headline-lg", "text-headline-lg", "text-secondary"], [1, "md:col-span-2", "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-5", "relative", "overflow-hidden", "group"], [1, "absolute", "right-0", "bottom-0", "w-1/2", "h-full", "opacity-20", "pointer-events-none"], [1, "absolute", "right-6", "bottom-2", "flex", "items-end", "gap-1"], [1, "w-6", "h-8", "bg-primary-container", "rounded-t-md"], [1, "w-6", "h-12", "bg-primary", "rounded-t-md"], [1, "w-6", "h-10", "bg-secondary-container", "rounded-t-md"], [1, "w-6", "h-16", "bg-primary", "rounded-t-md"], [1, "w-6", "h-14", "bg-tertiary-fixed", "rounded-t-md"], [1, "font-headline-sm", "text-headline-sm", "text-on-surface", "mb-1"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant", "max-w-xs"], [1, "animate-pulse"], [1, "px-6", "py-5"], [1, "h-4", "bg-surface-variant", "rounded", "w-2/3"], [1, "h-4", "bg-surface-variant", "rounded", "w-16"], [1, "h-4", "bg-surface-variant", "rounded", "w-20"], [1, "h-4", "bg-surface-variant", "rounded", "w-14"], ["colspan", "5", 1, "px-6", "py-16", "text-center"], [1, "material-symbols-outlined", "text-4xl", "text-on-surface-variant/40", "block", "mb-3"], [1, "hover:bg-surface-container-lowest", "transition-colors", "group"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "rounded-lg", "bg-primary-container", "flex", "items-center", "justify-center", "text-white", "shrink-0"], [1, "material-symbols-outlined"], [1, "min-w-0"], [1, "font-bold", "text-on-surface", "truncate"], [1, "text-on-surface-variant", "text-xs", "mt-0.5", "truncate", "max-w-[280px]"], [1, "flex", "flex-col", "gap-1"], [1, "px-3", "py-1", "bg-surface-container-high", "text-primary", "rounded-full", "font-label-sm", "text-[11px]", "font-bold"], [1, "px-6", "py-5", "text-on-surface-variant"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-full", "font-label-sm", "text-[11px]", "font-bold", "gap-1"], [1, "material-symbols-outlined", "text-[12px]"], [1, "px-6", "py-5", "text-right"], [1, "flex", "items-center", "justify-end", "gap-1"], [1, "px-3", "py-1", "bg-tertiary-fixed", "text-on-tertiary-fixed", "rounded-full", "font-label-sm", "text-[11px]", "font-bold", "w-fit"], [1, "text-[10px]", "text-on-surface-variant"], ["title", "Restaurer", 1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "text-on-surface-variant", "hover:text-primary", "hover:bg-primary/10", "transition-colors", "cursor-pointer", 3, "click"], ["title", "Supprimer d\xE9finitivement", 1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "text-on-surface-variant", "hover:text-error", "hover:bg-error/10", "transition-colors", "cursor-pointer", 3, "click"], ["title", "Modifier", 1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "text-on-surface-variant", "hover:text-primary", "hover:bg-primary/10", "transition-colors", "cursor-pointer", 3, "click"], ["title", "Archiver", 1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "text-on-surface-variant", "hover:text-error", "hover:bg-error/10", "transition-colors", "cursor-pointer", 3, "click"], ["title", "Publier", 1, "ml-1", "px-4", "py-2", "bg-primary-container", "text-on-primary-container", "hover:bg-primary", "hover:text-on-primary", "rounded-lg", "font-label-sm", "text-[12px]", "font-bold", "transition-colors", "flex", "items-center", "gap-1.5", "cursor-pointer"], ["title", "Publier", 1, "ml-1", "px-4", "py-2", "bg-primary-container", "text-on-primary-container", "hover:bg-primary", "hover:text-on-primary", "rounded-lg", "font-label-sm", "text-[12px]", "font-bold", "transition-colors", "flex", "items-center", "gap-1.5", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-[16px]"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "modal-overlay", 3, "click"], [1, "bg-surface", "w-full", "max-w-2xl", "rounded-2xl", "shadow-2xl", "overflow-hidden", "transform", "transition-transform", "duration-300", "scale-100", 3, "click"], [1, "px-8", "py-6", "border-b", "border-outline-variant", "flex", "justify-between", "items-center", "bg-surface-container-lowest"], [1, "font-headline-md", "text-headline-md", "text-on-surface"], [1, "material-symbols-outlined", "text-on-surface-variant", "hover:text-error", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-8", "py-6", "space-y-6", 3, "ngSubmit"], [1, "block", "font-label-md", "text-label-md", "text-on-surface-variant", "mb-2"], ["name", "title", "type", "text", "placeholder", "Ex: Changement des horaires d'\xE9t\xE9", 1, "w-full", "px-4", "py-3", "border", "border-outline-variant", "rounded-lg", "focus:ring-2", "focus:ring-primary/40", "focus:border-primary", "outline-none", "transition-all", "bg-surface", "text-on-surface", "placeholder:text-on-surface-variant", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-6"], ["name", "target_scope", 1, "w-full", "px-4", "py-3", "border", "border-outline-variant", "rounded-lg", "focus:ring-2", "focus:ring-primary/40", "focus:border-primary", "outline-none", "transition-all", "bg-surface", "text-on-surface", "cursor-pointer", 3, "ngModelChange", "ngModel"], ["value", "COMPANY"], ["value", "TEAM"], ["name", "content", "rows", "5", "placeholder", "D\xE9crivez votre annonce de mani\xE8re claire et concise...", 1, "w-full", "px-4", "py-3", "border", "border-outline-variant", "rounded-lg", "focus:ring-2", "focus:ring-primary/40", "focus:border-primary", "outline-none", "transition-all", "bg-surface", "text-on-surface", "placeholder:text-on-surface-variant", "resize-none", 3, "ngModelChange", "ngModel"], [1, "border-2", "border-dashed", "border-outline-variant", "rounded-xl", "p-8", "text-center", "hover:bg-surface-container", "transition-colors", "cursor-pointer", "group"], [1, "material-symbols-outlined", "text-on-surface-variant", "text-4xl", "mb-2", "group-hover:text-primary", "transition-colors"], [1, "font-body-sm", "text-body-sm", "text-error"], [1, "flex", "justify-end", "gap-3", "pt-2"], ["type", "button", 1, "px-5", "py-2.5", "text-on-surface-variant", "font-label-md", "text-label-md", "hover:bg-surface-variant", "rounded-lg", "transition-colors", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-5", "py-2.5", "border", "border-outline-variant", "text-on-surface", "font-label-md", "text-label-md", "hover:bg-surface-container", "rounded-lg", "transition-colors", "disabled:opacity-50", "cursor-pointer", 3, "click", "disabled"], ["type", "submit", 1, "px-6", "py-2.5", "bg-primary", "text-on-primary", "font-label-md", "text-label-md", "rounded-lg", "hover:bg-primary-container", "shadow-md", "transition-all", "active:scale-95", "disabled:opacity-50", "cursor-pointer", 3, "disabled"], ["name", "target_manager_id", 1, "w-full", "px-4", "py-3", "border", "border-outline-variant", "rounded-lg", "focus:ring-2", "focus:ring-primary/40", "focus:border-primary", "outline-none", "transition-all", "bg-surface", "text-on-surface", "cursor-pointer", 3, "ngModelChange", "ngModel"], [3, "ngValue"]], template: function AnnouncementAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Gestion des Annonces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Administrez les communications officielles de l'entreprise.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function AnnouncementAdminComponent_Template_button_click_7_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvelle Annonce ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
      \u0275\u0275listener("click", function AnnouncementAdminComponent_Template_button_click_12_listener() {
        return ctx.switchTab("published");
      });
      \u0275\u0275text(13, " Publi\xE9es ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 7);
      \u0275\u0275listener("click", function AnnouncementAdminComponent_Template_button_click_14_listener() {
        return ctx.switchTab("draft");
      });
      \u0275\u0275text(15, " Brouillons ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 7);
      \u0275\u0275listener("click", function AnnouncementAdminComponent_Template_button_click_16_listener() {
        return ctx.switchTab("archived");
      });
      \u0275\u0275text(17, " Archiv\xE9es ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, AnnouncementAdminComponent_Case_18_Template, 35, 2, "div", 8)(19, AnnouncementAdminComponent_Case_19_Template, 32, 2, "div", 8)(20, AnnouncementAdminComponent_Case_20_Template, 32, 1, "div", 9);
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "span", 13);
      \u0275\u0275text(25, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AnnouncementAdminComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 15);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 16)(30, "table", 17)(31, "thead")(32, "tr", 18)(33, "th", 19);
      \u0275\u0275text(34, "Titre de l'annonce");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 20);
      \u0275\u0275text(36, "Cible (Scope)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 20);
      \u0275\u0275text(38, "Date de publication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 20);
      \u0275\u0275text(40, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 21);
      \u0275\u0275text(42, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "tbody", 22);
      \u0275\u0275conditionalCreate(44, AnnouncementAdminComponent_Conditional_44_Template, 2, 1)(45, AnnouncementAdminComponent_Conditional_45_Template, 6, 0, "tr")(46, AnnouncementAdminComponent_Conditional_46_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 23)(48, "p", 15);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 24)(51, "button", 25)(52, "span", 26);
      \u0275\u0275text(53, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "button", 25)(55, "span", 26);
      \u0275\u0275text(56, "chevron_right");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(57, AnnouncementAdminComponent_Conditional_57_Template, 39, 9, "div", 27);
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(12);
      \u0275\u0275classMap(ctx.activeTab() === "published" ? "bg-white text-primary font-bold shadow-sm" : "text-on-surface-variant hover:text-primary");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.activeTab() === "draft" ? "bg-white text-primary font-bold shadow-sm" : "text-on-surface-variant hover:text-primary");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.activeTab() === "archived" ? "bg-white text-primary font-bold shadow-sm" : "text-on-surface-variant hover:text-primary");
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_3_0 = ctx.activeTab()) === "draft" ? 18 : tmp_3_0 === "archived" ? 19 : 20);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("Affichage 1-", ctx.filtered().length, " sur ", ctx.announcements().length);
      \u0275\u0275advance(16);
      \u0275\u0275conditional(ctx.loading() ? 44 : ctx.filtered().length === 0 ? 45 : 46);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("Affichage 1-", ctx.filtered().length, " sur ", ctx.announcements().length);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.modalOpen() ? 57 : -1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementAdminComponent, [{
    type: Component,
    args: [{ selector: "app-announcement-admin", standalone: true, imports: [FormsModule], template: `<div class="p-6 lg:p-8 max-w-[1280px] mx-auto flex flex-col gap-6">

  <!-- Header Section -->
  <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
    <div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Gestion des Annonces</h2>
      <p class="font-body-md text-on-surface-variant mt-1">Administrez les communications officielles de l'entreprise.</p>
    </div>
    <button (click)="openCreateModal()"
      class="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer">
      <span class="material-symbols-outlined text-lg">add</span>
      Nouvelle Annonce
    </button>
  </div>

  <!-- Tabs -->
  <div class="flex bg-surface-container rounded-lg p-1 w-fit border border-outline-variant">
    <button (click)="switchTab('published')"
      class="px-5 py-1.5 rounded-md font-label-md text-label-md transition-colors cursor-pointer"
      [class]="activeTab() === 'published'
        ? 'bg-white text-primary font-bold shadow-sm'
        : 'text-on-surface-variant hover:text-primary'">
      Publi\xE9es
    </button>
    <button (click)="switchTab('draft')"
      class="px-5 py-1.5 rounded-md font-label-md text-label-md transition-colors cursor-pointer"
      [class]="activeTab() === 'draft'
        ? 'bg-white text-primary font-bold shadow-sm'
        : 'text-on-surface-variant hover:text-primary'">
      Brouillons
    </button>
    <button (click)="switchTab('archived')"
      class="px-5 py-1.5 rounded-md font-label-md text-label-md transition-colors cursor-pointer"
      [class]="activeTab() === 'archived'
        ? 'bg-white text-primary font-bold shadow-sm'
        : 'text-on-surface-variant hover:text-primary'">
      Archiv\xE9es
    </button>
  </div>

  <!-- Bento Statistics Grid -->
  @switch (activeTab()) {
    @case ('draft') {
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between gap-4 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <div class="flex items-center justify-between relative z-10">
            <span class="material-symbols-outlined text-on-surface-variant">draft</span>
            <span class="material-symbols-outlined text-on-surface-variant">inventory_2</span>
          </div>
          <div class="relative z-10">
            <p class="font-headline-lg text-headline-lg text-on-surface">{{ statCount() }}</p>
            <p class="font-label-md text-label-md text-on-surface-variant">Brouillons en cours</p>
          </div>
        </div>
        <div class="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between gap-4 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <div class="flex items-center justify-between relative z-10">
            <span class="material-symbols-outlined text-on-surface-variant">timer</span>
          </div>
          <div class="relative z-10">
            <p class="font-headline-lg text-headline-lg text-on-surface">2.4 <span class="font-headline-sm text-headline-sm text-on-surface-variant">jours</span></p>
            <p class="font-label-md text-label-md text-on-surface-variant">Temps moy. de r\xE9daction</p>
          </div>
        </div>
        <div class="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between gap-4 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <div class="flex items-center justify-between relative z-10">
            <span class="material-symbols-outlined text-on-surface-variant">update</span>
          </div>
          <div class="relative z-10">
            <p class="font-headline-sm text-headline-sm text-on-surface mt-auto">{{ lastActivity() }}</p>
            <p class="font-label-md text-label-md text-on-surface-variant">Derni\xE8re activit\xE9</p>
          </div>
        </div>
      </div>
    }
    @case ('archived') {
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between gap-4 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <span class="material-symbols-outlined text-on-surface-variant">inventory_2</span>
          <div class="relative z-10">
            <p class="font-headline-lg text-headline-lg text-on-surface">{{ statCount() }}</p>
            <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Archiv\xE9</p>
          </div>
        </div>
        <div class="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between gap-4 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <span class="material-symbols-outlined text-on-surface-variant">auto_delete</span>
          <div class="relative z-10">
            <p class="font-headline-lg text-headline-lg text-on-surface">30 <span class="font-body-sm text-body-sm text-on-surface-variant">jours</span></p>
            <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Archivage Automatique</p>
          </div>
        </div>
        <div class="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between gap-4 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <span class="material-symbols-outlined text-on-surface-variant">history</span>
          <div class="relative z-10">
            <p class="font-headline-lg text-headline-lg text-on-surface">{{ restoredCount() }} <span class="font-body-sm text-body-sm text-secondary">+3% ce mois</span></p>
            <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Annonces Restaur\xE9es</p>
          </div>
        </div>
      </div>
    }
    @default {
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between gap-4 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <span class="material-symbols-outlined text-primary text-3xl">campaign</span>
          <div class="relative z-10">
            <p class="font-headline-lg text-headline-lg text-primary">{{ statCount() }}</p>
            <p class="font-label-md text-label-md text-on-surface-variant">Annonces actives</p>
          </div>
        </div>
        <div class="bg-surface border border-outline-variant rounded-xl p-5 flex flex-col justify-between gap-4 relative overflow-hidden group">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
          <span class="material-symbols-outlined text-secondary text-3xl">visibility</span>
          <div class="relative z-10">
            <p class="font-headline-lg text-headline-lg text-secondary">89%</p>
            <p class="font-label-md text-label-md text-on-surface-variant">Taux d'ouverture</p>
          </div>
        </div>
        <div class="md:col-span-2 bg-surface border border-outline-variant rounded-xl p-5 relative overflow-hidden group">
          <div class="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div class="absolute right-6 bottom-2 flex items-end gap-1">
              <div class="w-6 h-8 bg-primary-container rounded-t-md"></div>
              <div class="w-6 h-12 bg-primary rounded-t-md"></div>
              <div class="w-6 h-10 bg-secondary-container rounded-t-md"></div>
              <div class="w-6 h-16 bg-primary rounded-t-md"></div>
              <div class="w-6 h-14 bg-tertiary-fixed rounded-t-md"></div>
            </div>
          </div>
          <div class="relative z-10">
            <h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Engagement Global</h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs">L'engagement a augment\xE9 de 12% par rapport au mois dernier suite aux nouvelles politiques de feedback.</p>
          </div>
        </div>
      </div>
    }
  }

  <!-- Announcements Table -->
  <div class="bg-surface rounded-xl border border-outline-variant overflow-hidden">
    <!-- Toolbar -->
    <div class="p-4 border-b border-outline-variant bg-surface-container-lowest flex flex-col sm:flex-row justify-between items-center gap-3">
      <div class="flex items-center bg-surface rounded-lg border border-outline-variant px-3 py-2 w-full sm:w-80 focus-within:border-primary transition-colors">
        <span class="material-symbols-outlined text-on-surface-variant text-[20px] mr-2">search</span>
        <input [(ngModel)]="search" type="text" placeholder="Rechercher une annonce..."
          class="bg-transparent border-none outline-none text-body-sm font-body-sm text-on-surface placeholder:text-on-surface-variant focus:ring-0 w-full" />
      </div>
      <span class="font-body-sm text-body-sm text-on-surface-variant">Affichage 1-{{ filtered().length }} sur {{ announcements().length }}</span>
    </div>

    <div class="overflow-x-auto w-full">
      <table class="w-full text-left min-w-[800px]">
        <thead>
          <tr class="bg-surface-container-low border-b border-outline-variant">
            <th class="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider w-2/5">Titre de l'annonce</th>
            <th class="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Cible (Scope)</th>
            <th class="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Date de publication</th>
            <th class="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Statut</th>
            <th class="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-outline-variant font-body-sm text-body-sm">
          @if (loading()) {
            @for (_ of [1,2,3]; track _) {
              <tr class="animate-pulse">
                <td class="px-6 py-5"><div class="h-4 bg-surface-variant rounded w-2/3"></div></td>
                <td class="px-6 py-5"><div class="h-4 bg-surface-variant rounded w-16"></div></td>
                <td class="px-6 py-5"><div class="h-4 bg-surface-variant rounded w-20"></div></td>
                <td class="px-6 py-5"><div class="h-4 bg-surface-variant rounded w-14"></div></td>
                <td class="px-6 py-5"></td>
              </tr>
            }
          } @else if (filtered().length === 0) {
            <tr>
              <td colspan="5" class="px-6 py-16 text-center">
                <span class="material-symbols-outlined text-4xl text-on-surface-variant/40 block mb-3">campaign</span>
                <p class="font-label-md text-label-md text-on-surface-variant">Aucune annonce pour le moment</p>
              </td>
            </tr>
          } @else {
            @for (ann of filtered(); track ann.id) {
              <tr class="hover:bg-surface-container-lowest transition-colors group">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-white shrink-0">
                      <span class="material-symbols-outlined">{{ getTypeIcon(ann.type) }}</span>
                    </div>
                    <div class="min-w-0">
                      <p class="font-bold text-on-surface truncate">{{ ann.title }}</p>
                      <p class="text-on-surface-variant text-xs mt-0.5 truncate max-w-[280px]">{{ ann.content }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-5">
                  @if (ann.target_scope === 'TEAM') {
                    <div class="flex flex-col gap-1">
                      <span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-sm text-[11px] font-bold w-fit">{{ getScopeLabel(ann.target_scope) }}</span>
                      @if (managerName(ann)) {
                        <span class="text-[10px] text-on-surface-variant">Manager: {{ managerName(ann) }}</span>
                      }
                    </div>
                  } @else {
                    <span class="px-3 py-1 bg-surface-container-high text-primary rounded-full font-label-sm text-[11px] font-bold">{{ getScopeLabel(ann.target_scope) }}</span>
                  }
                </td>
                <td class="px-6 py-5 text-on-surface-variant">{{ formatPublishedDate(ann) }}</td>
                <td class="px-6 py-5">
                  <span class="inline-flex items-center px-3 py-1 rounded-full font-label-sm text-[11px] font-bold gap-1" [class]="getStatusClass(ann.status)">
                    @if (ann.status === 'archived') {
                      <span class="material-symbols-outlined text-[12px]">archive</span>
                    }
                    {{ getStatusLabel(ann.status) }}
                  </span>
                </td>
                <td class="px-6 py-5 text-right">
                  <div class="flex items-center justify-end gap-1">
                    @if (ann.status === 'archived') {
                      <button (click)="restore(ann)" title="Restaurer"
                        class="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer">
                        <span class="material-symbols-outlined text-[20px]">unarchive</span>
                      </button>
                      <button (click)="forceDelete(ann)" title="Supprimer d\xE9finitivement"
                        class="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-error/10 transition-colors cursor-pointer">
                        <span class="material-symbols-outlined text-[20px]">delete_forever</span>
                      </button>
                    } @else {
                      <button (click)="openEditModal(ann)" title="Modifier"
                        class="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer">
                        <span class="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button (click)="archive(ann)" title="Archiver"
                        class="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-error/10 transition-colors cursor-pointer">
                        <span class="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                      @if (ann.status === 'draft') {
                        <button (click)="publish(ann)" title="Publier"
                          class="ml-1 px-4 py-2 bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary rounded-lg font-label-sm text-[12px] font-bold transition-colors flex items-center gap-1.5 cursor-pointer">
                          <span class="material-symbols-outlined text-[16px]">send</span>
                          Publier
                        </button>
                      }
                    }
                  </div>
                </td>
              </tr>
            }
          }
        </tbody>
      </table>
    </div>

    <!-- Pagination Footer -->
    <div class="px-6 py-4 border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center">
      <p class="font-body-sm text-body-sm text-on-surface-variant">Affichage 1-{{ filtered().length }} sur {{ announcements().length }}</p>
      <div class="flex items-center gap-2">
        <button disabled class="p-2 rounded border border-outline-variant text-on-surface-variant opacity-50 cursor-not-allowed">
          <span class="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button disabled class="p-2 rounded border border-outline-variant text-on-surface-variant opacity-50 cursor-not-allowed">
          <span class="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Form for New / Edit Announcement -->
@if (modalOpen()) {
  <div class="fixed inset-0 z-50 flex items-center justify-center modal-overlay" (click)="closeModal()">
    <div class="bg-surface w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 scale-100"
      (click)="$event.stopPropagation()">
      <div class="px-8 py-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
        <h3 class="font-headline-md text-headline-md text-on-surface">{{ modalTitle() }}</h3>
        <button (click)="closeModal()"
          class="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors cursor-pointer">close</button>
      </div>
      <form class="px-8 py-6 space-y-6" (ngSubmit)="submit('published')">
        <!-- Title Field -->
        <div>
          <label class="block font-label-md text-label-md text-on-surface-variant mb-2">Titre de l'annonce</label>
          <input [(ngModel)]="formData.title" name="title" type="text" placeholder="Ex: Changement des horaires d'\xE9t\xE9"
            class="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all bg-surface text-on-surface placeholder:text-on-surface-variant" />
        </div>

        <!-- Scope Selection -->
        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block font-label-md text-label-md text-on-surface-variant mb-2">Visibilit\xE9 (Scope)</label>
            <select [(ngModel)]="formData.target_scope" name="target_scope"
              class="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all bg-surface text-on-surface cursor-pointer">
              <option value="COMPANY">Toute l'entreprise (COMPANY)</option>
              <option value="TEAM">\xC9quipe sp\xE9cifique (TEAM)</option>
            </select>
          </div>
          @if (isTeamScope()) {
            <div>
              <label class="block font-label-md text-label-md text-on-surface-variant mb-2">Manager cible</label>
              <select [(ngModel)]="formData.target_manager_id" name="target_manager_id"
                class="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all bg-surface text-on-surface cursor-pointer">
                <option [ngValue]="null">Choisir un manager...</option>
                @for (manager of managers(); track manager.id) {
                  <option [ngValue]="manager.id">{{ manager.first_name }} {{ manager.last_name }}</option>
                }
              </select>
            </div>
          }
        </div>

        <!-- Content Area -->
        <div>
          <label class="block font-label-md text-label-md text-on-surface-variant mb-2">Contenu de l'annonce</label>
          <textarea [(ngModel)]="formData.content" name="content" rows="5" placeholder="D\xE9crivez votre annonce de mani\xE8re claire et concise..."
            class="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all bg-surface text-on-surface placeholder:text-on-surface-variant resize-none"></textarea>
        </div>

        <!-- Media Upload Dummy -->
        <div class="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center hover:bg-surface-container transition-colors cursor-pointer group">
          <span class="material-symbols-outlined text-on-surface-variant text-4xl mb-2 group-hover:text-primary transition-colors">cloud_upload</span>
          <p class="font-label-md text-label-md text-on-surface-variant">Cliquez pour ajouter une image ou un document (PDF, PNG, JPG)</p>
        </div>

        @if (modalError()) {
          <p class="font-body-sm text-body-sm text-error">{{ modalError() }}</p>
        }

        <!-- Action Buttons -->
        <div class="flex justify-end gap-3 pt-2">
          <button type="button" (click)="closeModal()"
            class="px-5 py-2.5 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant rounded-lg transition-colors cursor-pointer">
            Annuler
          </button>
          <button type="button" (click)="submit('draft')" [disabled]="modalSaving()"
            class="px-5 py-2.5 border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container rounded-lg transition-colors disabled:opacity-50 cursor-pointer">
            Enregistrer brouillon
          </button>
          <button type="submit" [disabled]="modalSaving()"
            class="px-6 py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer">
            {{ modalSaving() ? 'Enregistrement...' : 'Publier maintenant' }}
          </button>
        </div>
      </form>
    </div>
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnouncementAdminComponent, { className: "AnnouncementAdminComponent", filePath: "src/app/features/shared/announcements/announcement-admin/announcement-admin.component.ts", lineNumber: 16 });
})();
export {
  AnnouncementAdminComponent
};
//# sourceMappingURL=chunk-XTELKBYH.js.map
