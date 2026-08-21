import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables
} from "./chunk-6YEXYA67.js";
import {
  EmployeeService
} from "./chunk-CN3SQTU3.js";
import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DGTBVCJC.js";
import {
  DatePipe
} from "./chunk-FWX4MYVU.js";
import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-3HN2YFK3.js";
import {
  Component,
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/core/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/dashboard`;
  /**
   * Récupère les statistiques globales pour le tableau de bord RH.
   * @returns Observable avec les KPIs (total employés, actifs, managers, etc.)
   */
  getStats() {
    return this.http.get(`${this.apiUrl}/stats`);
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/admin/dashboard/dashboard.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2];
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14);
    \u0275\u0275element(2, "div", 15)(3, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 17)(5, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 19)(2, "div", 20);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_20_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function AdminDashboardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, AdminDashboardComponent_Conditional_20_For_2_Template, 6, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275repeaterCreate(4, AdminDashboardComponent_Conditional_20_For_5_Template, 3, 0, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275element(7, "div", 11);
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275repeaterCreate(9, AdminDashboardComponent_Conditional_20_For_10_Template, 1, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c0));
  }
}
function AdminDashboardComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 21);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 22);
    \u0275\u0275text(5, "Erreur de chargement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_21_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadStats());
    });
    \u0275\u0275text(9, " R\xE9essayer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const errMsg_r3 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(errMsg_r3);
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47)(1, "span", 6);
    \u0275\u0275text(2, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5, "ce mois");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const recentHires_r4 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" +", recentHires_r4, " ");
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Aucune embauche r\xE9cente");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48)(1, "span", 6);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5, "en attente");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const s_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", s_r5?.pending_count, " ");
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32)(1, "span", 6);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucun en attente ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const deptCount_r6 = \u0275\u0275readContextLet(4);
    \u0275\u0275textInterpolate1(" ", deptCount_r6, " configur\xE9(s) ");
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucun d\xE9partement d\xE9fini ");
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const deptCount_r6 = \u0275\u0275readContextLet(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", deptCount_r6, " d\xE9partement(s)");
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "canvas", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.barChartData())("options", ctx_r1.barChartOptions)("type", "bar");
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 50);
    \u0275\u0275text(2, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 51);
    \u0275\u0275text(4, "Aucune donn\xE9e disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 52);
    \u0275\u0275text(6, "Importez des employ\xE9s pour voir la r\xE9partition par d\xE9partement.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const totalRoles_r7 = \u0275\u0275readContextLet(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", totalRoles_r7, " personne(s)");
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "canvas", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.donutChartData())("options", ctx_r1.donutChartOptions)("type", "doughnut");
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 50);
    \u0275\u0275text(2, "donut_large");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 51);
    \u0275\u0275text(4, "Aucune donn\xE9e disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 52);
    \u0275\u0275text(6, "Importez des employ\xE9s pour voir la r\xE9partition par r\xF4le.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275text(1, "Voir tout");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(emp_r8.department.name);
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275element(1, "span", 67);
    \u0275\u0275text(2, " Actif ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275element(1, "span", 68);
    \u0275\u0275text(2, " En attente ");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 57)(2, "div", 58)(3, "div", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 57);
    \u0275\u0275conditionalCreate(13, AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Conditional_13_Template, 2, 1, "span", 63)(14, AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Conditional_14_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 62);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 57);
    \u0275\u0275conditionalCreate(19, AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Conditional_19_Template, 3, 0, "span", 65)(20, AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Conditional_20_Template, 3, 0, "span", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emp_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(emp_r8.first_name, emp_r8.last_name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", emp_r8.first_name, " ", emp_r8.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r8.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r8.job_title || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(emp_r8.department ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 8, emp_r8.hire_date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(emp_r8.status === "ACTIVE" ? 19 : 20);
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "table", 53)(2, "thead")(3, "tr", 54)(4, "th", 55);
    \u0275\u0275text(5, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 55);
    \u0275\u0275text(7, "Poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 55);
    \u0275\u0275text(9, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 55);
    \u0275\u0275text(11, "Date d'embauche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 55);
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, AdminDashboardComponent_Conditional_22_Conditional_79_For_16_Template, 21, 11, "tr", 56, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const recent_r9 = \u0275\u0275readContextLet(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(recent_r9);
  }
}
function AdminDashboardComponent_Conditional_22_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 50);
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 51);
    \u0275\u0275text(4, "Aucun employ\xE9 r\xE9cent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 69);
    \u0275\u0275text(6, "Les employ\xE9s embauch\xE9s dans les 30 derniers jours appara\xEEtront ici.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 25)(2, "div", 14)(3, "span", 26);
    \u0275\u0275text(4, "Total employ\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "span", 28);
    \u0275\u0275text(7, "group");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 30);
    \u0275\u0275conditionalCreate(11, AdminDashboardComponent_Conditional_22_Conditional_11_Template, 6, 1)(12, AdminDashboardComponent_Conditional_22_Conditional_12_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25)(14, "div", 14)(15, "span", 26);
    \u0275\u0275text(16, "Comptes actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 27)(18, "span", 28);
    \u0275\u0275text(19, "verified_user");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 29);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 30);
    \u0275\u0275conditionalCreate(23, AdminDashboardComponent_Conditional_22_Conditional_23_Template, 6, 1)(24, AdminDashboardComponent_Conditional_22_Conditional_24_Template, 4, 0, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 25)(26, "div", 14)(27, "span", 26);
    \u0275\u0275text(28, "Managers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 33)(30, "span", 28);
    \u0275\u0275text(31, "badge");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 29);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 30)(35, "span", 31);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 25)(38, "div", 14)(39, "span", 26);
    \u0275\u0275text(40, "D\xE9partements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 27)(42, "span", 28);
    \u0275\u0275text(43, "category");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 29);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 30)(47, "span", 31);
    \u0275\u0275conditionalCreate(48, AdminDashboardComponent_Conditional_22_Conditional_48_Template, 1, 1)(49, AdminDashboardComponent_Conditional_22_Conditional_49_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 10)(51, "div", 34)(52, "div", 35)(53, "div", 36)(54, "span", 37);
    \u0275\u0275text(55, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "h2", 38);
    \u0275\u0275text(57, "R\xE9partition par d\xE9partement");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(58, AdminDashboardComponent_Conditional_22_Conditional_58_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(59, AdminDashboardComponent_Conditional_22_Conditional_59_Template, 2, 3, "div", 40)(60, AdminDashboardComponent_Conditional_22_Conditional_60_Template, 7, 0, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 34)(62, "div", 35)(63, "div", 36)(64, "span", 37);
    \u0275\u0275text(65, "donut_large");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "h2", 38);
    \u0275\u0275text(67, "R\xE9partition par r\xF4le");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(68, AdminDashboardComponent_Conditional_22_Conditional_68_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(69, AdminDashboardComponent_Conditional_22_Conditional_69_Template, 2, 3, "div", 40)(70, AdminDashboardComponent_Conditional_22_Conditional_70_Template, 7, 0, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 42)(72, "div", 43)(73, "div", 36)(74, "span", 37);
    \u0275\u0275text(75, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "h2", 38);
    \u0275\u0275text(77, "Embauches r\xE9centes");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(78, AdminDashboardComponent_Conditional_22_Conditional_78_Template, 2, 0, "a", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(79, AdminDashboardComponent_Conditional_22_Conditional_79_Template, 17, 0, "div", 45)(80, AdminDashboardComponent_Conditional_22_Conditional_80_Template, 7, 0, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const s_r5 = \u0275\u0275readContextLet(0);
    const recent_r9 = \u0275\u0275readContextLet(2);
    const recentHires_r4 = \u0275\u0275readContextLet(3);
    const deptCount_r6 = \u0275\u0275readContextLet(4);
    const totalRoles_r7 = \u0275\u0275readContextLet(5);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(s_r5?.total_employees ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(recentHires_r4 > 0 ? 11 : 12);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(s_r5?.active_count ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((s_r5?.pending_count ?? 0) > 0 ? 23 : 24);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(s_r5?.managers_count ?? "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", s_r5?.regular_employees_count ?? 0, " employ\xE9(s)");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(deptCount_r6 || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(deptCount_r6 > 0 ? 48 : 49);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(deptCount_r6 > 0 ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((s_r5?.department_distribution?.length ?? 0) > 0 && ctx_r1.barChartData() ? 59 : 60);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(totalRoles_r7 > 0 ? 68 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(totalRoles_r7 > 0 && ctx_r1.donutChartData() ? 69 : 70);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(recentHires_r4 > 0 ? 78 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(recent_r9.length > 0 ? 79 : 80);
  }
}
var CSS_VAR = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
var STITCH_PRIMARY = "#630ed4";
var STITCH_PRIMARY_LIGHT = "#f0e6ff";
var STITCH_SECONDARY_CONTAINER = "#86f2e4";
var CSS_COLORS = () => [
  CSS_VAR("--color-stitch-primary") || STITCH_PRIMARY,
  CSS_VAR("--color-stitch-primary-container") || "#7c3aed",
  STITCH_SECONDARY_CONTAINER,
  CSS_VAR("--color-stitch-primary-light") || STITCH_PRIMARY_LIGHT,
  "#e8def8",
  "#ffb4ab",
  "#d0bcff",
  "#bae2e0"
];
var CHART_TOOLTIP_BG = () => CSS_VAR("--color-tooltip") || "#1E293B";
var CHART_GRID_COLOR = () => CSS_VAR("--color-border") || "#E2E8F0";
var CHART_TICK_MUTED = () => CSS_VAR("--color-text-muted") || "#64748B";
var CHART_TICK_SECONDARY = () => CSS_VAR("--color-text-secondary") || "#475569";
var AdminDashboardComponent = class _AdminDashboardComponent {
  authService = inject(AuthService);
  dashboardService = inject(DashboardService);
  employeeService = inject(EmployeeService);
  user = this.authService.currentUser;
  userName = computed(
    () => this.authService.displayName(this.user()),
    ...ngDevMode ? [{ debugName: "userName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  today = (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  loading = signal(
    true,
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
  stats = signal(
    null,
    ...ngDevMode ? [{ debugName: "stats" }] : (
      /* istanbul ignore next */
      []
    )
  );
  recentEmployees = signal(
    [],
    ...ngDevMode ? [{ debugName: "recentEmployees" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Bar chart data for department distribution */
  barChartData = signal(
    null,
    ...ngDevMode ? [{ debugName: "barChartData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Bar chart options */
  get barChartOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: CHART_TOOLTIP_BG(),
          titleFont: { family: "DM Sans", size: 13, weight: "bold" },
          bodyFont: { family: "DM Sans", size: 12 },
          padding: 10,
          cornerRadius: 4,
          callbacks: {
            label: (context) => {
              const parsed = context.parsed;
              if (parsed === null || parsed.x === null)
                return "";
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const value = parsed.x;
              const pct = total > 0 ? Math.round(value / total * 100) : 0;
              return ` ${value} employ\xE9(s) (${pct}%)`;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: CHART_GRID_COLOR() },
          ticks: {
            font: { family: "DM Sans", size: 11 },
            color: CHART_TICK_MUTED(),
            stepSize: 1
          }
        },
        y: {
          grid: { display: false },
          ticks: {
            font: { family: "DM Sans", size: 12 },
            color: CHART_TICK_SECONDARY()
          }
        }
      }
    };
  }
  /** Donut chart data for role distribution */
  donutChartData = signal(
    null,
    ...ngDevMode ? [{ debugName: "donutChartData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Donut chart options */
  get donutChartOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: { family: "DM Sans", size: 12 },
            padding: 16,
            usePointStyle: true,
            pointStyle: "circle",
            color: CHART_TICK_SECONDARY()
          }
        },
        tooltip: {
          backgroundColor: CHART_TOOLTIP_BG(),
          titleFont: { family: "DM Sans", size: 13, weight: "bold" },
          bodyFont: { family: "DM Sans", size: 12 },
          padding: 10,
          cornerRadius: 4,
          callbacks: {
            label: (context) => {
              const parsed = context.parsed;
              if (parsed === null)
                return "";
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const value = parsed;
              const pct = total > 0 ? Math.round(value / total * 100) : 0;
              return ` ${context.label} : ${value} (${pct}%)`;
            }
          }
        }
      }
    };
  }
  /** Total des managers + employés (hors admin) pour le donut */
  totalRolesCount = computed(
    () => {
      const s = this.stats();
      if (!s)
        return 0;
      return s.managers_count + s.regular_employees_count;
    },
    ...ngDevMode ? [{ debugName: "totalRolesCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadStats();
    this.loadRecentEmployees();
  }
  /**
   * Extrait les initiales à partir du prénom et du nom.
   * @param first Prénom
   * @param last Nom de famille
   * @returns Initiales en majuscules
   */
  getInitials(first, last) {
    return `${(first?.[0] || "").toUpperCase()}${(last?.[0] || "").toUpperCase()}`;
  }
  /**
   * Charge les statistiques du dashboard depuis l'API et prépare les données des graphiques.
   */
  loadStats() {
    this.loading.set(true);
    this.error.set(null);
    this.dashboardService.getStats().subscribe({
      next: (stats) => {
        this.stats.set(stats);
        const chartColors = CSS_COLORS();
        if (stats.department_distribution.length > 0) {
          this.barChartData.set({
            labels: stats.department_distribution.map((d) => d.department),
            datasets: [
              {
                data: stats.department_distribution.map((d) => d.count),
                backgroundColor: stats.department_distribution.map((_, i) => chartColors[i % chartColors.length]),
                borderColor: stats.department_distribution.map((_, i) => chartColors[i % chartColors.length]),
                borderWidth: 1,
                borderRadius: 4,
                barThickness: 18
              }
            ]
          });
        }
        const totalNonAdmin = stats.managers_count + stats.regular_employees_count;
        const stitchPrimary = CSS_VAR("--color-stitch-primary") || STITCH_PRIMARY;
        const stitchSecondary = STITCH_SECONDARY_CONTAINER;
        if (totalNonAdmin > 0) {
          this.donutChartData.set({
            labels: ["Managers", "Employ\xE9s"],
            datasets: [
              {
                data: [stats.managers_count, stats.regular_employees_count],
                backgroundColor: [stitchPrimary, stitchSecondary],
                borderColor: [CSS_VAR("--color-surface") || "#FFFFFF", CSS_VAR("--color-surface") || "#FFFFFF"],
                borderWidth: 3,
                hoverOffset: 8
              }
            ]
          });
        }
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Impossible de charger les statistiques. Veuillez r\xE9essayer.");
        this.loading.set(false);
      }
    });
  }
  /**
   * Charge les 5 dernières embauches triées par date d'embauche décroissante.
   */
  loadRecentEmployees() {
    this.employeeService.getEmployees({ per_page: 50 }).subscribe({
      next: (response) => {
        const sorted = [...response.data].filter((e) => e.hire_date).sort((a, b) => new Date(b.hire_date).getTime() - new Date(a.hire_date).getTime()).slice(0, 5);
        this.recentEmployees.set(sorted);
      },
      error: () => {
        this.recentEmployees.set([]);
      }
    });
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], features: [\u0275\u0275ProvidersFeature([provideCharts(withDefaultRegisterables())])], decls: 23, vars: 11, consts: [[1, "flex", "flex-col", "gap-6", "w-full", "max-w-7xl", "mx-auto"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "bg-surface", "p-6", "rounded-xl", "border", "border-border", "shadow-sm"], [1, "font-heading", "text-2xl", "font-bold", "text-primary"], [1, "text-text-secondary", "mt-1"], [1, "font-semibold", "text-text"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "text-text-muted"], [1, "material-symbols-outlined", "text-sm"], [1, "bg-error-light", "border", "border-error", "rounded-2xl", "p-8", "flex", "flex-col", "items-center", "gap-4", "text-center"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-5"], [1, "bg-surface", "rounded-2xl", "p-6", "animate-pulse", "border", "border-border"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-5"], [1, "h-5", "w-52", "bg-border", "rounded", "mb-5"], [1, "space-y-3"], [1, "h-10", "bg-border", "rounded"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "h-3", "w-20", "bg-border", "rounded"], [1, "w-10", "h-10", "rounded-full", "bg-border"], [1, "h-9", "w-14", "bg-border", "rounded", "mt-2"], [1, "h-3", "w-28", "bg-border", "rounded", "mt-3"], [1, "h-5", "w-48", "bg-border", "rounded", "mb-6"], [1, "h-[260px]", "bg-border", "rounded"], [1, "material-symbols-outlined", "text-5xl", "text-error"], [1, "font-heading", "text-lg", "font-semibold", "text-error-dark"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-6", "py-2.5", "rounded-full", "shadow-sm", "hover:bg-primary-hover", "transition-all", "cursor-pointer", 3, "click"], [1, "bg-surface", "rounded-2xl", "p-6", "shadow-sm", "border", "border-border", "hover:shadow-md", "transition-all", "duration-300", "group"], [1, "text-xs", "font-semibold", "text-text-muted", "uppercase", "tracking-wider"], [1, "w-10", "h-10", "rounded-xl", "bg-primary-50", "text-primary", "flex", "items-center", "justify-center", "transition-all", "duration-300", "group-hover:scale-110", "group-hover:bg-primary", "group-hover:text-text-inverse"], [1, "material-symbols-outlined", "text-xl"], [1, "text-3xl", "font-heading", "font-bold", "text-text-heading"], [1, "flex", "items-center", "gap-1.5", "mt-2"], [1, "text-xs", "text-text-secondary"], [1, "inline-flex", "items-center", "gap-0.5", "text-xs", "text-text-secondary"], [1, "w-10", "h-10", "rounded-xl", "bg-accent-light", "text-accent-dark", "flex", "items-center", "justify-center", "transition-all", "duration-300", "group-hover:scale-110", "group-hover:bg-accent", "group-hover:text-text-inverse"], [1, "bg-surface", "rounded-2xl", "p-6", "shadow-sm", "border", "border-border", "hover:shadow-md", "transition-shadow"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-primary", "text-xl"], [1, "font-heading", "text-base", "font-semibold", "text-text-heading"], [1, "text-xs", "text-text-secondary", "bg-primary-50", "px-3", "py-1", "rounded-full"], [1, "h-[260px]", "flex", "items-center", "justify-center"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "text-center"], [1, "bg-surface", "rounded-2xl", "shadow-sm", "border", "border-border", "hover:shadow-md", "transition-shadow"], [1, "flex", "items-center", "justify-between", "px-6", "pt-6", "pb-4"], ["routerLink", "/admin/employees", 1, "text-sm", "font-medium", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer"], [1, "overflow-x-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "text-center", "px-6"], [1, "inline-flex", "items-center", "gap-0.5", "text-xs", "font-semibold", "text-success"], [1, "inline-flex", "items-center", "gap-0.5", "text-xs", "font-semibold", "text-warning"], ["baseChart", "", 1, "max-w-full", "max-h-full", 3, "data", "options", "type"], [1, "material-symbols-outlined", "text-5xl", "text-text-muted", "mb-3"], [1, "font-heading", "text-base", "font-semibold", "text-text-heading", "mb-1"], [1, "text-sm", "text-text-secondary", "max-w-xs"], [1, "w-full", "text-sm"], [1, "border-t", "border-border"], [1, "text-left", "px-6", "py-3", "font-semibold", "text-xs", "text-text-muted", "uppercase", "tracking-wider"], [1, "border-t", "border-border-light", "hover:bg-background-alt", "transition-colors"], [1, "px-6", "py-3"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-primary-50", "text-primary", "font-semibold", "text-xs", "flex", "items-center", "justify-center", "shrink-0"], [1, "font-medium", "text-text-heading"], [1, "text-text-secondary", "text-xs", "block"], [1, "px-6", "py-3", "text-text-secondary"], [1, "inline-flex", "items-center", "px-3", "py-1", "bg-primary-50", "text-primary", "rounded-full", "text-xs", "font-medium"], [1, "text-text-muted"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-medium", "text-success"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-medium", "text-warning"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-success"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-warning"], [1, "text-sm", "text-text-secondary", "max-w-sm"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275declareLet(0)(1)(2)(3)(4)(5);
      \u0275\u0275elementStart(6, "div", 0)(7, "div", 1)(8, "div")(9, "h1", 2);
      \u0275\u0275text(10, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 3);
      \u0275\u0275text(12, "Bienvenue, ");
      \u0275\u0275elementStart(13, "span", 4);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, ". Voici l'aper\xE7u global de votre entreprise.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "span", 5)(17, "span", 6);
      \u0275\u0275text(18, "calendar_month");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(20, AdminDashboardComponent_Conditional_20_Template, 11, 3);
      \u0275\u0275conditionalCreate(21, AdminDashboardComponent_Conditional_21_Template, 10, 1, "div", 7);
      \u0275\u0275conditionalCreate(22, AdminDashboardComponent_Conditional_22_Template, 81, 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const s_r10 = \u0275\u0275storeLet(ctx.stats());
      const isLoading_r11 = ctx.loading();
      \u0275\u0275advance();
      const errMsg_r12 = \u0275\u0275storeLet(ctx.error());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.recentEmployees());
      \u0275\u0275advance();
      \u0275\u0275storeLet(s_r10?.recent_hires_count ?? 0);
      \u0275\u0275advance();
      \u0275\u0275storeLet(s_r10?.departments_count ?? 0);
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.totalRolesCount());
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.today, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(isLoading_r11 ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!isLoading_r11 && errMsg_r12 ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!isLoading_r11 && !errMsg_r12 ? 22 : -1);
    }
  }, dependencies: [RouterModule, RouterLink, BaseChartDirective, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [RouterModule, BaseChartDirective, DatePipe], providers: [provideCharts(withDefaultRegisterables())], template: `@let s = stats();
@let isLoading = loading();
@let errMsg = error();
@let recent = recentEmployees();
@let recentHires = s?.recent_hires_count ?? 0;
@let deptCount = s?.departments_count ?? 0;
@let totalRoles = totalRolesCount();

<div class="flex flex-col gap-6 w-full max-w-7xl mx-auto">

  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface p-6 rounded-xl border border-border shadow-sm">
    <div>
      <h1 class="font-heading text-2xl font-bold text-primary">Tableau de bord</h1>
      <p class="text-text-secondary mt-1">Bienvenue, <span class="font-semibold text-text">{{ userName() }}</span>. Voici l'aper\xE7u global de votre entreprise.</p>
    </div>
    <span class="inline-flex items-center gap-1.5 text-xs text-text-muted">
      <span class="material-symbols-outlined text-sm">calendar_month</span>
      {{ today }}
    </span>
  </div>

  @if (isLoading) {
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      @for (item of [1, 2, 3, 4]; track item) {
        <div class="bg-surface rounded-2xl p-6 animate-pulse border border-border">
          <div class="flex items-center justify-between mb-4">
            <div class="h-3 w-20 bg-border rounded"></div>
            <div class="w-10 h-10 rounded-full bg-border"></div>
          </div>
          <div class="h-9 w-14 bg-border rounded mt-2"></div>
          <div class="h-3 w-28 bg-border rounded mt-3"></div>
        </div>
      }
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      @for (item of [1, 2]; track item) {
        <div class="bg-surface rounded-2xl p-6 animate-pulse border border-border">
          <div class="h-5 w-48 bg-border rounded mb-6"></div>
          <div class="h-[260px] bg-border rounded"></div>
        </div>
      }
    </div>
    <div class="bg-surface rounded-2xl p-6 animate-pulse border border-border">
      <div class="h-5 w-52 bg-border rounded mb-5"></div>
      <div class="space-y-3">
        @for (item of [1, 2, 3, 4]; track item) {
          <div class="h-10 bg-border rounded"></div>
        }
      </div>
    </div>
  }

  @if (!isLoading && errMsg) {
    <div class="bg-error-light border border-error rounded-2xl p-8 flex flex-col items-center gap-4 text-center">
      <span class="material-symbols-outlined text-5xl text-error">error_outline</span>
      <div>
        <h3 class="font-heading text-lg font-semibold text-error-dark">Erreur de chargement</h3>
        <p class="text-sm text-text-secondary mt-1">{{ errMsg }}</p>
      </div>
      <button (click)="loadStats()" class="bg-primary text-text-inverse text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:bg-primary-hover transition-all cursor-pointer">
        R\xE9essayer
      </button>
    </div>
  }

  @if (!isLoading && !errMsg) {
    <!-- Stats cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">Total employ\xE9s</span>
          <div class="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-text-inverse">
            <span class="material-symbols-outlined text-xl">group</span>
          </div>
        </div>
        <div class="text-3xl font-heading font-bold text-text-heading">{{ s?.total_employees ?? '\u2014' }}</div>
        <div class="flex items-center gap-1.5 mt-2">
          @if (recentHires > 0) {
            <span class="inline-flex items-center gap-0.5 text-xs font-semibold text-success">
              <span class="material-symbols-outlined text-sm">trending_up</span> +{{ recentHires }}
            </span>
            <span class="text-xs text-text-secondary">ce mois</span>
          } @else {
            <span class="text-xs text-text-secondary">Aucune embauche r\xE9cente</span>
          }
        </div>
      </div>

      <div class="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">Comptes actifs</span>
          <div class="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-text-inverse">
            <span class="material-symbols-outlined text-xl">verified_user</span>
          </div>
        </div>
        <div class="text-3xl font-heading font-bold text-text-heading">{{ s?.active_count ?? '\u2014' }}</div>
        <div class="flex items-center gap-1.5 mt-2">
          @if ((s?.pending_count ?? 0) > 0) {
            <span class="inline-flex items-center gap-0.5 text-xs font-semibold text-warning">
              <span class="material-symbols-outlined text-sm">hourglass_empty</span> {{ s?.pending_count }}
            </span>
            <span class="text-xs text-text-secondary">en attente</span>
          } @else {
            <span class="inline-flex items-center gap-0.5 text-xs text-text-secondary">
              <span class="material-symbols-outlined text-sm">check_circle</span> Aucun en attente
            </span>
          }
        </div>
      </div>

      <div class="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">Managers</span>
          <div class="w-10 h-10 rounded-xl bg-accent-light text-accent-dark flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-text-inverse">
            <span class="material-symbols-outlined text-xl">badge</span>
          </div>
        </div>
        <div class="text-3xl font-heading font-bold text-text-heading">{{ s?.managers_count ?? '\u2014' }}</div>
        <div class="flex items-center gap-1.5 mt-2">
          <span class="text-xs text-text-secondary">{{ s?.regular_employees_count ?? 0 }} employ\xE9(s)</span>
        </div>
      </div>

      <div class="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-semibold text-text-muted uppercase tracking-wider">D\xE9partements</span>
          <div class="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-text-inverse">
            <span class="material-symbols-outlined text-xl">category</span>
          </div>
        </div>
        <div class="text-3xl font-heading font-bold text-text-heading">{{ deptCount || '\u2014' }}</div>
        <div class="flex items-center gap-1.5 mt-2">
          <span class="text-xs text-text-secondary">
            @if (deptCount > 0) {
              {{ deptCount }} configur\xE9(s)
            } @else {
              Aucun d\xE9partement d\xE9fini
            }
          </span>
        </div>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div class="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between mb-5">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">bar_chart</span>
            <h2 class="font-heading text-base font-semibold text-text-heading">R\xE9partition par d\xE9partement</h2>
          </div>
          @if (deptCount > 0) {
            <span class="text-xs text-text-secondary bg-primary-50 px-3 py-1 rounded-full">{{ deptCount }} d\xE9partement(s)</span>
          }
        </div>
        @if ((s?.department_distribution?.length ?? 0) > 0 && barChartData()) {
          <div class="h-[260px] flex items-center justify-center">
            <canvas baseChart [data]="barChartData()!" [options]="barChartOptions" [type]="'bar'" class="max-w-full max-h-full"></canvas>
          </div>
        } @else {
          <div class="flex flex-col items-center justify-center py-12 text-center">
            <span class="material-symbols-outlined text-5xl text-text-muted mb-3">bar_chart</span>
            <h3 class="font-heading text-base font-semibold text-text-heading mb-1">Aucune donn\xE9e disponible</h3>
            <p class="text-sm text-text-secondary max-w-xs">Importez des employ\xE9s pour voir la r\xE9partition par d\xE9partement.</p>
          </div>
        }
      </div>

      <div class="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between mb-5">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">donut_large</span>
            <h2 class="font-heading text-base font-semibold text-text-heading">R\xE9partition par r\xF4le</h2>
          </div>
          @if (totalRoles > 0) {
            <span class="text-xs text-text-secondary bg-primary-50 px-3 py-1 rounded-full">{{ totalRoles }} personne(s)</span>
          }
        </div>
        @if (totalRoles > 0 && donutChartData()) {
          <div class="h-[260px] flex items-center justify-center">
            <canvas baseChart [data]="donutChartData()!" [options]="donutChartOptions" [type]="'doughnut'" class="max-w-full max-h-full"></canvas>
          </div>
        } @else {
          <div class="flex flex-col items-center justify-center py-12 text-center">
            <span class="material-symbols-outlined text-5xl text-text-muted mb-3">donut_large</span>
            <h3 class="font-heading text-base font-semibold text-text-heading mb-1">Aucune donn\xE9e disponible</h3>
            <p class="text-sm text-text-secondary max-w-xs">Importez des employ\xE9s pour voir la r\xE9partition par r\xF4le.</p>
          </div>
        }
      </div>
    </div>

    <!-- Recent hires table -->
    <div class="bg-surface rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
      <div class="flex items-center justify-between px-6 pt-6 pb-4">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-xl">person_add</span>
          <h2 class="font-heading text-base font-semibold text-text-heading">Embauches r\xE9centes</h2>
        </div>
        @if (recentHires > 0) {
          <a routerLink="/admin/employees" class="text-sm font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">Voir tout</a>
        }
      </div>

      @if (recent.length > 0) {
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-t border-border">
                <th class="text-left px-6 py-3 font-semibold text-xs text-text-muted uppercase tracking-wider">Employ\xE9</th>
                <th class="text-left px-6 py-3 font-semibold text-xs text-text-muted uppercase tracking-wider">Poste</th>
                <th class="text-left px-6 py-3 font-semibold text-xs text-text-muted uppercase tracking-wider">D\xE9partement</th>
                <th class="text-left px-6 py-3 font-semibold text-xs text-text-muted uppercase tracking-wider">Date d'embauche</th>
                <th class="text-left px-6 py-3 font-semibold text-xs text-text-muted uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody>
              @for (emp of recent; track emp.id) {
                <tr class="border-t border-border-light hover:bg-background-alt transition-colors">
                  <td class="px-6 py-3">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-primary-50 text-primary font-semibold text-xs flex items-center justify-center shrink-0">
                        {{ getInitials(emp.first_name, emp.last_name) }}
                      </div>
                      <div>
                        <span class="font-medium text-text-heading">{{ emp.first_name }} {{ emp.last_name }}</span>
                        <span class="text-text-secondary text-xs block">{{ emp.email }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-3 text-text-secondary">{{ emp.job_title || '\u2014' }}</td>
                  <td class="px-6 py-3">
                    @if (emp.department) {
                      <span class="inline-flex items-center px-3 py-1 bg-primary-50 text-primary rounded-full text-xs font-medium">{{ emp.department.name }}</span>
                    } @else {
                      <span class="text-text-muted">\u2014</span>
                    }
                  </td>
                  <td class="px-6 py-3 text-text-secondary">{{ emp.hire_date | date: 'dd/MM/yyyy' }}</td>
                  <td class="px-6 py-3">
                    @if (emp.status === 'ACTIVE') {
                      <span class="inline-flex items-center gap-1.5 text-xs font-medium text-success">
                        <span class="w-1.5 h-1.5 rounded-full bg-success"></span>
                        Actif
                      </span>
                    } @else {
                      <span class="inline-flex items-center gap-1.5 text-xs font-medium text-warning">
                        <span class="w-1.5 h-1.5 rounded-full bg-warning"></span>
                        En attente
                      </span>
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      } @else {
        <div class="flex flex-col items-center justify-center py-12 text-center px-6">
          <span class="material-symbols-outlined text-5xl text-text-muted mb-3">person_add</span>
          <h3 class="font-heading text-base font-semibold text-text-heading mb-1">Aucun employ\xE9 r\xE9cent</h3>
          <p class="text-sm text-text-secondary max-w-sm">Les employ\xE9s embauch\xE9s dans les 30 derniers jours appara\xEEtront ici.</p>
        </div>
      }
    </div>
  }
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/dashboard/dashboard.component.ts", lineNumber: 55 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-LINKCYW3.js.map
