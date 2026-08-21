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
  ActivatedRoute,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/manager/team/team.component.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
function ManagerTeamComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 21)(3, "polyline", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275listener("click", function ManagerTeamComponent_Conditional_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissSuccess());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 25);
    \u0275\u0275element(8, "line", 26)(9, "line", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
  }
}
function ManagerTeamComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "circle", 29)(3, "line", 30)(4, "line", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 33);
    \u0275\u0275listener("click", function ManagerTeamComponent_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissError());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 25);
    \u0275\u0275element(9, "line", 26)(10, "line", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function ManagerTeamComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 34);
    \u0275\u0275listener("click", function ManagerTeamComponent_Conditional_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "polyline", 36)(4, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " R\xE9initialiser ");
    \u0275\u0275elementEnd()();
  }
}
function ManagerTeamComponent_Conditional_25_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementStart(2, "div", 41);
    \u0275\u0275element(3, "div", 42)(4, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 44);
    \u0275\u0275elementEnd();
  }
}
function ManagerTeamComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 38);
    \u0275\u0275repeaterCreate(2, ManagerTeamComponent_Conditional_25_For_3_Template, 6, 0, "div", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ManagerTeamComponent_Conditional_26_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 50);
    \u0275\u0275text(1, "Aucun r\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3, "Essayez de modifier vos filtres de recherche.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function ManagerTeamComponent_Conditional_26_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275text(5, "R\xE9initialiser les filtres");
    \u0275\u0275elementEnd();
  }
}
function ManagerTeamComponent_Conditional_26_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 50);
    \u0275\u0275text(1, "Aucun membre dans votre \xE9quipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3, "Les membres de votre \xE9quipe appara\xEEtront ici.");
    \u0275\u0275elementEnd();
  }
}
function ManagerTeamComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 46)(3, "circle", 47)(4, "path", 48)(5, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ManagerTeamComponent_Conditional_26_Conditional_6_Template, 6, 0)(7, ManagerTeamComponent_Conditional_26_Conditional_7_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isFiltered() ? 6 : 7);
  }
}
function ManagerTeamComponent_Conditional_27_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 59)(1, "td", 61)(2, "div", 62);
    \u0275\u0275element(3, "app-avatar", 63);
    \u0275\u0275elementStart(4, "div")(5, "p", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td", 61)(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 61)(13, "span", 66);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 67);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 61)(18, "span", 68);
    \u0275\u0275element(19, "span", 69);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const emp_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("imageUrl", ctx_r1.imageUrlService.resolve(emp_r6.avatar_url))("name", emp_r6.first_name + " " + emp_r6.last_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", emp_r6.first_name, " ", emp_r6.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r6.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r6.job_title || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r6.department?.name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success-light", emp_r6.status === "ACTIVE")("text-success-dark", emp_r6.status === "ACTIVE")("bg-background-alt", emp_r6.status !== "ACTIVE")("text-text-muted", emp_r6.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", emp_r6.status === "ACTIVE")("bg-text-muted", emp_r6.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", emp_r6.status === "ACTIVE" ? "Actif" : emp_r6.status === "INACTIVE" ? "Inactif" : "En attente", " ");
  }
}
function ManagerTeamComponent_Conditional_27_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Affichage de ");
    \u0275\u0275elementStart(1, "span", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " sur ");
    \u0275\u0275elementStart(4, "span", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.from(), "\u2013", ctx_r1.to());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.total());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" membre", ctx_r1.total() > 1 ? "s" : "", " ");
  }
}
function ManagerTeamComponent_Conditional_27_Conditional_18_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function ManagerTeamComponent_Conditional_27_Conditional_18_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function ManagerTeamComponent_Conditional_27_Conditional_18_For_8_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-primary", p_r9 === ctx_r1.currentPage())("text-text-inverse", p_r9 === ctx_r1.currentPage())("text-text-secondary", p_r9 !== ctx_r1.currentPage())("hover:bg-background-alt", p_r9 !== ctx_r1.currentPage())("border", p_r9 !== ctx_r1.currentPage())("border-border", p_r9 !== ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9, " ");
  }
}
function ManagerTeamComponent_Conditional_27_Conditional_18_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ManagerTeamComponent_Conditional_27_Conditional_18_For_8_Conditional_0_Template, 2, 0, "span", 76)(1, ManagerTeamComponent_Conditional_27_Conditional_18_For_8_Conditional_1_Template, 2, 13, "button", 77);
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275conditional(p_r9 === -1 ? 0 : 1);
  }
}
function ManagerTeamComponent_Conditional_27_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "p", 70);
    \u0275\u0275conditionalCreate(2, ManagerTeamComponent_Conditional_27_Conditional_18_Conditional_2_Template, 7, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "button", 72);
    \u0275\u0275listener("click", function ManagerTeamComponent_Conditional_27_Conditional_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 25);
    \u0275\u0275element(6, "polyline", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(7, ManagerTeamComponent_Conditional_27_Conditional_18_For_8_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "button", 72);
    \u0275\u0275listener("click", function ManagerTeamComponent_Conditional_27_Conditional_18_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 25);
    \u0275\u0275element(11, "polyline", 74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.from() !== null && ctx_r1.to() !== null ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() >= ctx_r1.lastPage());
  }
}
function ManagerTeamComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 53)(2, "table", 54)(3, "thead")(4, "tr", 55)(5, "th", 56);
    \u0275\u0275text(6, "Membre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 56);
    \u0275\u0275text(8, "Poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 56);
    \u0275\u0275text(10, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 57);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 56);
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 58);
    \u0275\u0275repeaterCreate(16, ManagerTeamComponent_Conditional_27_For_17_Template, 21, 21, "tr", 59, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, ManagerTeamComponent_Conditional_27_Conditional_18_Template, 12, 3, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.employees());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.lastPage() > 1 ? 18 : -1);
  }
}
var ManagerTeamComponent = class _ManagerTeamComponent {
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
    15,
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
  departmentFilter = signal(
    "",
    ...ngDevMode ? [{ debugName: "departmentFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchSubject = new Subject();
  subscriptions = [];
  isFiltered = computed(
    () => !!this.searchTerm() || !!this.departmentFilter(),
    ...ngDevMode ? [{ debugName: "isFiltered" }] : (
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
      this.loadTeam();
    });
    this.subscriptions.push(searchSub);
    this.route.queryParamMap.pipe(take(1)).subscribe((params) => {
      const q = params.get("search");
      if (q) {
        this.searchTerm.set(q);
        this.loadTeam();
      }
    });
    this.loadTeam();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  onSearchChange(value) {
    this.searchTerm.set(value);
    this.searchSubject.next(value);
  }
  onDepartmentChange(value) {
    this.departmentFilter.set(value);
    this.currentPage.set(1);
    this.loadTeam();
  }
  resetFilters() {
    this.searchTerm.set("");
    this.departmentFilter.set("");
    this.currentPage.set(1);
    this.loadTeam();
  }
  loadTeam(page) {
    const pageToLoad = page ?? this.currentPage();
    this.loading.set(true);
    this.error.set(null);
    this.successMessage.set(null);
    const params = {
      page: pageToLoad,
      per_page: this.perPage()
    };
    if (this.searchTerm())
      params.search = this.searchTerm();
    if (this.departmentFilter())
      params.department = this.departmentFilter();
    this.employeeService.getManagerTeam(params).subscribe({
      next: (response) => {
        this.employees.set(response.data);
        this.total.set(response.meta.total);
        this.currentPage.set(response.meta.current_page);
        this.lastPage.set(response.meta.last_page);
        this.perPage.set(response.meta.per_page);
        this.from.set(response.meta.from);
        this.to.set(response.meta.to);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.employees.set([]);
        console.error("Erreur chargement \xE9quipe:", err);
        if (err.status === 0) {
          this.error.set("Impossible de contacter le serveur. V\xE9rifiez votre connexion.");
        } else if (err.status === 403) {
          this.error.set("Acc\xE8s non autoris\xE9 \xE0 cette ressource.");
        } else {
          this.error.set(err.error?.message || "Une erreur est survenue lors du chargement des membres.");
        }
      }
    });
  }
  goToPage(page) {
    if (page < 1 || page > this.lastPage() || page === this.currentPage())
      return;
    this.currentPage.set(page);
    this.loadTeam(page);
  }
  dismissSuccess() {
    this.successMessage.set(null);
  }
  dismissError() {
    this.error.set(null);
  }
  static \u0275fac = function ManagerTeamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagerTeamComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagerTeamComponent, selectors: [["app-manager-team"]], decls: 28, vars: 6, consts: [[1, "min-h-screen", "bg-background", "py-8", "px-6"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "bg-success-light", "border", "border-success/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2.5"], [1, "bg-error-light", "border", "border-error/20", "rounded-lg", "p-4", "flex", "items-start", "gap-2.5"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-5", "shadow-sm"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "items-end"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-text-muted", "mb-1.5", "block"], [1, "relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-text-muted", "pointer-events-none"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Pr\xE9nom, nom ou email...", 1, "w-full", "pl-10", "pr-4", "py-2.5", "bg-surface-bright", "border", "border-border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", 3, "input", "value"], ["type", "text", "placeholder", "Filtrer...", 1, "w-full", "px-3.5", "py-2.5", "bg-surface-bright", "border", "border-border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", 3, "input", "value"], [1, "mt-3", "flex", "justify-end"], [1, "bg-surface", "border", "border-border", "rounded-xl", "overflow-hidden", "animate-pulse"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-4", "text-center", "bg-surface", "border", "border-border", "rounded-xl"], [1, "bg-surface", "border", "border-border", "rounded-xl", "overflow-hidden", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-success", "shrink-0", "mt-0.5"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "text-sm", "font-medium", "text-success-dark", "flex-1"], [1, "text-success-dark/60", "hover:text-success-dark", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-sm", "font-medium", "text-error-dark", "flex-1"], [1, "text-error-dark/60", "hover:text-error-dark", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], [1, "text-sm", "font-medium", "text-text-secondary", "hover:text-text", "border", "border-border", "px-4", "py-1.5", "rounded-md", "hover:bg-background-alt", "transition-all", "flex", "items-center", "gap-1.5", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"], [1, "p-6", "space-y-5"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "bg-background-alt", "rounded-full"], [1, "flex-1", "space-y-2"], [1, "h-4", "bg-background-alt", "rounded", "w-1/3"], [1, "h-3", "bg-background-alt", "rounded", "w-1/5"], [1, "h-6", "bg-background-alt", "rounded", "w-20"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-12", "h-12", "text-text-muted", "mb-4"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "font-heading", "text-xl", "font-semibold", "text-text-heading", "mb-2"], [1, "text-sm", "text-text-secondary", "max-w-sm", "mb-6"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-lg", "shadow-sm", "hover:bg-primary-hover", "transition-all", "cursor-pointer", 3, "click"], [1, "overflow-x-auto"], [1, "w-full", "border-collapse"], [1, "bg-surface-container-low", "border-b", "border-border"], [1, "px-4", "py-3.5", "text-left", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider"], [1, "px-4", "py-3.5", "text-left", "text-xs", "font-bold", "text-text-muted", "uppercase", "tracking-wider", "hidden", "md:table-cell"], [1, "divide-y", "divide-border"], [1, "hover:bg-surface-container-lowest", "transition-colors"], [1, "px-4", "py-3.5", "bg-surface-container-low", "border-t", "border-border", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-3"], [1, "px-4", "py-3.5"], [1, "flex", "items-center", "gap-3"], ["size", "sm", 3, "imageUrl", "name"], [1, "text-sm", "font-semibold", "text-text"], [1, "text-xs", "text-text-muted"], [1, "text-sm", "text-text-secondary"], [1, "px-4", "py-3.5", "text-sm", "text-text-secondary", "hidden", "md:table-cell"], [1, "inline-flex", "items-center", "gap-1.5", "text-xs", "font-medium", "px-2.5", "py-1", "rounded-full"], [1, "w-1.5", "h-1.5", "rounded-full"], [1, "text-sm", "text-text-muted"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-border", "bg-surface-bright", "text-text-muted", "hover:bg-surface-container", "transition-colors", "disabled:opacity-30", "disabled:cursor-not-allowed", "cursor-pointer", 3, "click", "disabled"], ["points", "15 18 9 12 15 6"], ["points", "9 18 15 12 9 6"], [1, "font-semibold", "text-text"], [1, "px-1", "text-text-muted", "text-sm"], [1, "w-8", "h-8", "rounded-lg", "text-sm", "font-medium", "transition-colors", "cursor-pointer", 3, "bg-primary", "text-text-inverse", "text-text-secondary", "hover:bg-background-alt", "border", "border-border"], [1, "w-8", "h-8", "rounded-lg", "text-sm", "font-medium", "transition-colors", "cursor-pointer", 3, "click"]], template: function ManagerTeamComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
      \u0275\u0275text(5, "Mon \xE9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Consultez les membres de votre \xE9quipe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, ManagerTeamComponent_Conditional_8_Template, 10, 1, "div", 5);
      \u0275\u0275conditionalCreate(9, ManagerTeamComponent_Conditional_9_Template, 11, 1, "div", 6);
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div")(13, "label", 9);
      \u0275\u0275text(14, "Recherche");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 11);
      \u0275\u0275element(17, "circle", 12)(18, "line", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "input", 14);
      \u0275\u0275listener("input", function ManagerTeamComponent_Template_input_input_19_listener($event) {
        return ctx.onSearchChange($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div")(21, "label", 9);
      \u0275\u0275text(22, "D\xE9partement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 15);
      \u0275\u0275listener("input", function ManagerTeamComponent_Template_input_input_23_listener($event) {
        return ctx.onDepartmentChange($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(24, ManagerTeamComponent_Conditional_24_Template, 6, 0, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, ManagerTeamComponent_Conditional_25_Template, 4, 1, "div", 17)(26, ManagerTeamComponent_Conditional_26_Template, 8, 1, "div", 18)(27, ManagerTeamComponent_Conditional_27_Template, 19, 1, "div", 19);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.successMessage() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 9 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.departmentFilter());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFiltered() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 25 : ctx.employees().length === 0 ? 26 : 27);
    }
  }, dependencies: [RouterModule, AvatarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagerTeamComponent, [{
    type: Component,
    args: [{ selector: "app-manager-team", standalone: true, imports: [RouterModule, AvatarComponent], template: `<div class="min-h-screen bg-background py-8 px-6">
  <div class="max-w-7xl mx-auto flex flex-col gap-6">

    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="font-heading text-2xl font-bold text-text-heading">Mon \xE9quipe</h1>
        <p class="text-sm text-text-secondary mt-1">Consultez les membres de votre \xE9quipe</p>
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
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
          <h3 class="font-heading text-xl font-semibold text-text-heading mb-2">Aucun membre dans votre \xE9quipe</h3>
          <p class="text-sm text-text-secondary max-w-sm mb-6">Les membres de votre \xE9quipe appara\xEEtront ici.</p>
        }
      </div>
    } @else {
      <!-- Table -->
      <div class="bg-surface border border-border rounded-xl overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-surface-container-low border-b border-border">
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider">Membre</th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider">Poste</th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider">D\xE9partement</th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider hidden md:table-cell">Email</th>
                <th class="px-4 py-3.5 text-left text-xs font-bold text-text-muted uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              @for (emp of employees(); track emp.id) {
                <tr class="hover:bg-surface-container-lowest transition-colors">
                  <td class="px-4 py-3.5">
                    <div class="flex items-center gap-3">
                      <app-avatar [imageUrl]="imageUrlService.resolve(emp.avatar_url)" [name]="emp.first_name + ' ' + emp.last_name" size="sm" />
                      <div>
                        <p class="text-sm font-semibold text-text">{{ emp.first_name }} {{ emp.last_name }}</p>
                        <p class="text-xs text-text-muted">{{ emp.email }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3.5">
                    <span class="text-sm text-text-secondary">{{ emp.job_title || '\u2014' }}</span>
                  </td>
                  <td class="px-4 py-3.5">
                    <span class="text-sm text-text-secondary">{{ emp.department?.name || '\u2014' }}</span>
                  </td>
                  <td class="px-4 py-3.5 text-sm text-text-secondary hidden md:table-cell">{{ emp.email }}</td>
                  <td class="px-4 py-3.5">
                    <span class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                      [class.bg-success-light]="emp.status === 'ACTIVE'"
                      [class.text-success-dark]="emp.status === 'ACTIVE'"
                      [class.bg-background-alt]="emp.status !== 'ACTIVE'"
                      [class.text-text-muted]="emp.status !== 'ACTIVE'">
                      <span class="w-1.5 h-1.5 rounded-full"
                        [class.bg-success]="emp.status === 'ACTIVE'"
                        [class.bg-text-muted]="emp.status !== 'ACTIVE'"></span>
                      {{ emp.status === 'ACTIVE' ? 'Actif' : emp.status === 'INACTIVE' ? 'Inactif' : 'En attente' }}
                    </span>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        @if (lastPage() > 1) {
          <div class="px-4 py-3.5 bg-surface-container-low border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p class="text-sm text-text-muted">
              @if (from() !== null && to() !== null) {
                Affichage de <span class="font-semibold text-text">{{ from() }}\u2013{{ to() }}</span> sur <span class="font-semibold text-text">{{ total() }}</span> membre{{ total() > 1 ? 's' : '' }}
              }
            </p>
            <div class="flex items-center gap-2">
              <button (click)="goToPage(currentPage() - 1)" [disabled]="currentPage() <= 1"
                class="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-surface-bright text-text-muted hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              @for (p of pageNumbers(); track p) {
                @if (p === -1) {
                  <span class="px-1 text-text-muted text-sm">\u2026</span>
                } @else {
                  <button (click)="goToPage(p)"
                    class="w-8 h-8 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                    [class.bg-primary]="p === currentPage()"
                    [class.text-text-inverse]="p === currentPage()"
                    [class.text-text-secondary]="p !== currentPage()"
                    [class.hover:bg-background-alt]="p !== currentPage()"
                    [class.border]="p !== currentPage()"
                    [class.border-border]="p !== currentPage()">
                    {{ p }}
                  </button>
                }
              }
              <button (click)="goToPage(currentPage() + 1)" [disabled]="currentPage() >= lastPage()"
                class="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-surface-bright text-text-muted hover:bg-surface-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        }

      
      </div>
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagerTeamComponent, { className: "ManagerTeamComponent", filePath: "src/app/features/manager/team/team.component.ts", lineNumber: 21 });
})();
export {
  ManagerTeamComponent
};
//# sourceMappingURL=chunk-LJZIUM54.js.map
