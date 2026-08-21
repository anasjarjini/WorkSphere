import {
  AnnouncementService
} from "./chunk-B5LODSAL.js";
import {
  AvatarComponent
} from "./chunk-DHD6LPVU.js";
import {
  ImageUrlService
} from "./chunk-ZTU2DKVI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/shared/announcements/announcement-manager/announcement-manager.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function AnnouncementManagerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Affichage des annonces destin\xE9es \xE0 votre \xE9quipe uniquement. ");
  }
}
function AnnouncementManagerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Centralisez la communication pour l'entreprise et votre \xE9quipe. ");
  }
}
function AnnouncementManagerComponent_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "div", 35);
    \u0275\u0275elementEnd();
  }
}
function AnnouncementManagerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AnnouncementManagerComponent_Conditional_14_For_1_Template, 5, 0, "div", 31, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AnnouncementManagerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 36);
    \u0275\u0275text(2, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 37);
    \u0275\u0275text(4, "Aucune annonce pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function AnnouncementManagerComponent_Conditional_16_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 54);
    \u0275\u0275listener("click", function AnnouncementManagerComponent_Conditional_16_For_1_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ann_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditModal(ann_r2));
    });
    \u0275\u0275elementStart(2, "span", 55);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 56);
    \u0275\u0275listener("click", function AnnouncementManagerComponent_Conditional_16_For_1_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ann_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteAnnouncement(ann_r2));
    });
    \u0275\u0275elementStart(5, "span", 55);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function AnnouncementManagerComponent_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "span", 42)(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, AnnouncementManagerComponent_Conditional_16_For_1_Conditional_9_Template, 7, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "h3", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 48)(16, "div", 41);
    \u0275\u0275element(17, "app-avatar", 49);
    \u0275\u0275elementStart(18, "div", 50)(19, "span", 51);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 52);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "span", 53);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ann_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.isCompany(ann_r2) ? "border-l-secondary" : "border-l-primary");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.isCompany(ann_r2) ? "bg-secondary-fixed text-on-secondary-fixed" : "bg-primary-container text-on-primary-container");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isCompany(ann_r2) ? "domain" : "groups");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.scopeLabel(ann_r2.target_scope), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatRelative(ann_r2.published_at ?? ann_r2.created_at));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canManage(ann_r2) ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ann_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r2.content);
    \u0275\u0275advance(3);
    \u0275\u0275property("imageUrl", ctx_r2.resolveAvatarUrl(ann_r2.creator?.avatar_url))("name", ctx_r2.authorName(ann_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.authorName(ann_r2), "", ctx_r2.isMine(ann_r2) ? " (Moi)" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.authorTitle(ann_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isCompany(ann_r2) ? "visibility" : "forum");
  }
}
function AnnouncementManagerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AnnouncementManagerComponent_Conditional_16_For_1_Template, 25, 16, "div", 38, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.filtered());
  }
}
function AnnouncementManagerComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 58);
    \u0275\u0275text(5, " Lire les d\xE9tails ");
    \u0275\u0275elementStart(6, "span", 59);
    \u0275\u0275text(7, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const last_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(last_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(last_r4.content);
  }
}
function AnnouncementManagerComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Aucune annonce d'entreprise pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function AnnouncementManagerComponent_Conditional_48_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.modalError());
  }
}
function AnnouncementManagerComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function AnnouncementManagerComponent_Conditional_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function AnnouncementManagerComponent_Conditional_48_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "div", 63)(4, "div", 64)(5, "span", 65);
    \u0275\u0275text(6, "campaign");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h3", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 29);
    \u0275\u0275text(11, "Scope : ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "Mon \xC9quipe");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 67);
    \u0275\u0275listener("click", function AnnouncementManagerComponent_Conditional_48_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(15, "span", 65);
    \u0275\u0275text(16, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "form", 68);
    \u0275\u0275listener("ngSubmit", function AnnouncementManagerComponent_Conditional_48_Template_form_ngSubmit_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275elementStart(18, "div", 69)(19, "label", 37);
    \u0275\u0275text(20, "Titre de l'annonce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementManagerComponent_Conditional_48_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.title, $event) || (ctx_r2.formData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 69)(23, "label", 37);
    \u0275\u0275text(24, "Contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 71);
    \u0275\u0275twoWayListener("ngModelChange", function AnnouncementManagerComponent_Conditional_48_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.content, $event) || (ctx_r2.formData.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 72)(27, "span", 73);
    \u0275\u0275text(28, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 74);
    \u0275\u0275text(30, " En tant que manager, cette annonce sera automatiquement diffus\xE9e \xE0 tous les membres de votre \xE9quipe directe uniquement. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, AnnouncementManagerComponent_Conditional_48_Conditional_31_Template, 2, 1, "p", 75);
    \u0275\u0275elementStart(32, "div", 76)(33, "button", 77);
    \u0275\u0275listener("click", function AnnouncementManagerComponent_Conditional_48_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(34, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 78);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.modalTitle());
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.title);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.content);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.modalError() ? 31 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.modalSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.modalSaving() ? "Publication..." : "Publier l'annonce", " ");
  }
}
var AnnouncementManagerComponent = class _AnnouncementManagerComponent {
  announcementService = inject(AnnouncementService);
  authService = inject(AuthService);
  imageUrlService = inject(ImageUrlService);
  user = this.authService.currentUser;
  announcements = signal(
    [],
    ...ngDevMode ? [{ debugName: "announcements" }] : (
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
  tab = signal(
    "all",
    ...ngDevMode ? [{ debugName: "tab" }] : (
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
  formData = { title: "", content: "" };
  constructor() {
    this.load();
  }
  filtered = computed(
    () => {
      if (this.tab() === "team") {
        return this.announcements().filter((a) => a.target_scope === "TEAM");
      }
      return this.announcements();
    },
    ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  lastCompanyAnnouncement = computed(
    () => this.announcements().find((a) => a.target_scope === "COMPANY") ?? null,
    ...ngDevMode ? [{ debugName: "lastCompanyAnnouncement" }] : (
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
  load() {
    this.loading.set(true);
    this.announcementService.getAnnouncements("published").subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  switchTab(tab) {
    this.tab.set(tab);
  }
  openCreateModal() {
    this.editingId = null;
    this.formData = { title: "", content: "" };
    this.modalError.set(null);
    this.modalOpen.set(true);
  }
  openEditModal(announcement) {
    this.editingId = announcement.id;
    this.formData = { title: announcement.title, content: announcement.content };
    this.modalError.set(null);
    this.modalOpen.set(true);
  }
  closeModal() {
    if (this.modalSaving())
      return;
    this.modalOpen.set(false);
    this.modalError.set(null);
  }
  submit() {
    if (!this.formData.title.trim()) {
      this.modalError.set("Le titre est requis.");
      return;
    }
    if (!this.formData.content.trim()) {
      this.modalError.set("Le contenu est requis.");
      return;
    }
    this.modalSaving.set(true);
    this.modalError.set(null);
    const payload = {
      title: this.formData.title.trim(),
      content: this.formData.content.trim(),
      target_scope: "TEAM"
    };
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
  deleteAnnouncement(announcement) {
    const confirmed = window.confirm(`Archiver l'annonce \xAB ${announcement.title} \xBB ?`);
    if (!confirmed)
      return;
    this.announcementService.deleteAnnouncement(announcement.id).subscribe({
      next: () => this.load(),
      error: () => {
      }
    });
  }
  canManage(announcement) {
    const user = this.user();
    return !!user && user.id === announcement.creator_id;
  }
  isMine(announcement) {
    return this.canManage(announcement);
  }
  authorName(announcement) {
    const creator = announcement.creator;
    return creator ? `${creator.first_name} ${creator.last_name}` : "";
  }
  authorTitle(announcement) {
    const creator = announcement.creator;
    if (!creator)
      return "";
    return creator.job_title || this.roleLabel(creator.role);
  }
  roleLabel(role) {
    switch (role) {
      case "HR_ADMIN":
        return "RH";
      case "MANAGER":
        return "Manager";
      default:
        return "Employ\xE9";
    }
  }
  resolveAvatarUrl(url) {
    return this.imageUrlService.resolve(url);
  }
  formatRelative(value) {
    if (!value)
      return "\u2014";
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
  scopeLabel(scope) {
    return scope === "TEAM" ? "\xC9quipe" : "Entreprise";
  }
  isCompany(announcement) {
    return announcement.target_scope === "COMPANY";
  }
  static \u0275fac = function AnnouncementManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnouncementManagerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnouncementManagerComponent, selectors: [["app-announcement-manager"]], decls: 49, vars: 8, consts: [[1, "p-6", "lg:p-8", "max-w-5xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "items-end", "justify-between", "gap-4"], [1, "font-headline-lg", "text-headline-lg", "text-on-surface"], [1, "font-body-md", "text-body-md", "text-on-surface-variant"], [1, "flex", "gap-1", "bg-surface-container-high", "p-1", "rounded-lg"], [1, "px-4", "py-1.5", "rounded-md", "font-label-md", "text-label-md", "transition-colors", "cursor-pointer", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "md:col-span-2", "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-16", "text-center"], [1, "border-2", "border-dashed", "border-outline-variant", "rounded-xl", "flex", "flex-col", "items-center", "justify-center", "gap-4", "p-8", "hover:bg-surface-container-low", "transition-all", "group", "cursor-pointer", 3, "click"], [1, "w-16", "h-16", "rounded-full", "bg-surface-variant", "text-on-surface-variant", "flex", "items-center", "justify-center", "group-hover:bg-primary", "group-hover:text-on-primary", "transition-all"], [1, "material-symbols-outlined", "text-3xl"], [1, "text-center"], [1, "font-headline-sm", "block", "text-on-surface-variant", "group-hover:text-primary"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant", "opacity-70"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6"], [1, "font-label-md", "text-label-md", "text-on-surface-variant", "uppercase", "tracking-wider", "mb-4"], [1, "flex", "items-center", "justify-center", "py-4"], [1, "relative", "w-24", "h-24"], ["viewBox", "0 0 36 36", 1, "w-full", "h-full"], ["cx", "18", "cy", "18", "fill", "none", "r", "16", "stroke-width", "3", 1, "stroke-surface-container-highest"], ["cx", "18", "cy", "18", "fill", "none", "r", "16", "stroke-dasharray", "85, 100", "stroke-linecap", "round", "stroke-width", "3", 1, "stroke-primary"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "font-display-lg-mobile", "text-primary", "leading-none"], [1, "text-[10px]", "uppercase", "font-bold", "text-on-surface-variant"], [1, "font-body-sm", "text-body-sm", "text-center", "text-on-surface-variant", "mt-2"], [1, "md:col-span-2", "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "flex", "items-center", "gap-6"], [1, "flex-1"], [1, "font-label-md", "text-label-md", "text-on-surface-variant", "uppercase", "tracking-wider", "mb-3"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "modal-overlay"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "animate-pulse"], [1, "h-4", "bg-surface-variant", "rounded", "w-1/3", "mb-4"], [1, "h-5", "bg-surface-variant", "rounded", "w-2/3", "mb-3"], [1, "h-4", "bg-surface-variant", "rounded", "w-full", "mb-2"], [1, "h-4", "bg-surface-variant", "rounded", "w-4/5"], [1, "material-symbols-outlined", "text-4xl", "text-on-surface-variant/40", "block", "mb-3"], [1, "font-label-md", "text-label-md", "text-on-surface-variant"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "flex", "flex-col", "gap-4", "relative", "group", "hover:shadow-lg", "transition-all", "border-l-4", 3, "class"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "flex", "flex-col", "gap-4", "relative", "group", "hover:shadow-lg", "transition-all", "border-l-4"], [1, "flex", "justify-between", "items-start"], [1, "flex", "items-center", "gap-2"], [1, "px-3", "py-1", "rounded-full", "font-label-sm", "text-[11px]", "flex", "items-center", "gap-1", "uppercase", "tracking-wider"], [1, "material-symbols-outlined", "text-[14px]"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant"], [1, "flex", "items-center", "gap-1", "opacity-0", "group-hover:opacity-100", "transition-opacity"], [1, "font-headline-sm", "text-headline-sm", "text-on-surface", "mb-1"], [1, "font-body-md", "text-body-md", "text-on-surface-variant", "line-clamp-3", "whitespace-pre-wrap"], [1, "mt-auto", "pt-4", "flex", "items-center", "justify-between", "border-t", "border-outline-variant/30"], ["size", "sm", 3, "imageUrl", "name"], [1, "flex", "flex-col"], [1, "font-label-md", "text-label-md", "font-bold"], [1, "text-[11px]", "text-on-surface-variant"], [1, "material-symbols-outlined", "text-on-surface-variant", "opacity-50"], ["title", "Modifier", 1, "p-1.5", "hover:bg-primary-fixed", "rounded-md", "text-primary", "transition-colors", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-[20px]"], ["title", "Supprimer", 1, "p-1.5", "hover:bg-error-container", "rounded-md", "text-error", "transition-colors", "cursor-pointer", 3, "click"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant", "mb-3", "line-clamp-2"], [1, "text-primary", "font-bold", "font-label-md", "text-label-md", "flex", "items-center", "gap-1", "hover:gap-2", "transition-all", "cursor-pointer"], [1, "material-symbols-outlined", "text-[18px]"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "modal-overlay", 3, "click"], [1, "bg-surface", "w-full", "max-w-lg", "rounded-2xl", "shadow-2xl", "overflow-hidden", "transform", "transition-transform", "duration-300", "scale-100", 3, "click"], [1, "px-6", "py-5", "border-b", "border-outline-variant", "flex", "justify-between", "items-center", "bg-surface-container-low"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "rounded-full", "bg-primary-container", "text-on-primary-container", "flex", "items-center", "justify-center"], [1, "material-symbols-outlined"], [1, "font-headline-sm", "text-headline-sm", "text-on-surface", "leading-tight"], [1, "p-1.5", "hover:bg-surface-variant", "rounded-full", "text-on-surface-variant", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-6", "py-5", "space-y-5", 3, "ngSubmit"], [1, "space-y-1"], ["name", "title", "type", "text", "placeholder", "Ex: D\xE9calage r\xE9union, Pizza Friday...", 1, "w-full", "border", "border-outline-variant", "rounded-lg", "px-4", "py-3", "focus:ring-2", "focus:ring-primary/50", "focus:border-primary", "text-body-md", "transition-all", "bg-surface", "text-on-surface", "placeholder:text-on-surface-variant", "outline-none", 3, "ngModelChange", "ngModel"], ["name", "content", "rows", "4", "placeholder", "Saisissez votre message ici...", 1, "w-full", "border", "border-outline-variant", "rounded-lg", "px-4", "py-3", "focus:ring-2", "focus:ring-primary/50", "focus:border-primary", "text-body-md", "transition-all", "resize-none", "bg-surface", "text-on-surface", "placeholder:text-on-surface-variant", "outline-none", 3, "ngModelChange", "ngModel"], [1, "bg-surface-container", "px-4", "py-3", "rounded-xl", "flex", "items-start", "gap-3"], [1, "material-symbols-outlined", "text-primary", "mt-0.5"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant", "italic"], [1, "font-body-sm", "text-body-sm", "text-error"], [1, "flex", "gap-4", "pt-2"], ["type", "button", 1, "flex-1", "py-3", "px-5", "rounded-xl", "border", "border-outline-variant", "text-on-surface", "font-label-md", "text-label-md", "hover:bg-surface-container", "transition-colors", "cursor-pointer", 3, "click"], ["type", "submit", 1, "flex-1", "py-3", "px-5", "rounded-xl", "bg-primary", "text-on-primary", "font-label-md", "text-label-md", "hover:brightness-110", "shadow-md", "transition-all", "active:scale-95", "disabled:opacity-50", "cursor-pointer", 3, "disabled"]], template: function AnnouncementManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Gestion des annonces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275conditionalCreate(6, AnnouncementManagerComponent_Conditional_6_Template, 1, 0)(7, AnnouncementManagerComponent_Conditional_7_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
      \u0275\u0275listener("click", function AnnouncementManagerComponent_Template_button_click_9_listener() {
        return ctx.switchTab("all");
      });
      \u0275\u0275text(10, " Toutes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function AnnouncementManagerComponent_Template_button_click_11_listener() {
        return ctx.switchTab("team");
      });
      \u0275\u0275text(12, " Mon \xE9quipe ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 6);
      \u0275\u0275conditionalCreate(14, AnnouncementManagerComponent_Conditional_14_Template, 2, 1)(15, AnnouncementManagerComponent_Conditional_15_Template, 5, 0, "div", 7)(16, AnnouncementManagerComponent_Conditional_16_Template, 2, 0);
      \u0275\u0275elementStart(17, "button", 8);
      \u0275\u0275listener("click", function AnnouncementManagerComponent_Template_button_click_17_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275elementStart(18, "div", 9)(19, "span", 10);
      \u0275\u0275text(20, "add_circle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 11)(22, "span", 12);
      \u0275\u0275text(23, "Nouvelle annonce");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 13);
      \u0275\u0275text(25, "Publiez une note pour votre \xE9quipe uniquement.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "h4", 16);
      \u0275\u0275text(29, "Visibilit\xE9 Equipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 19);
      \u0275\u0275element(33, "circle", 20)(34, "circle", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "div", 22)(36, "span", 23);
      \u0275\u0275text(37, "85%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 24);
      \u0275\u0275text(39, "Lus");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "p", 25);
      \u0275\u0275text(41, "Votre \xE9quipe est tr\xE8s r\xE9active aux annonces cette semaine.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 26)(43, "div", 27)(44, "h4", 28);
      \u0275\u0275text(45, "Derni\xE8re annonce Corporate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(46, AnnouncementManagerComponent_Conditional_46_Template, 8, 2)(47, AnnouncementManagerComponent_Conditional_47_Template, 2, 0, "p", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(48, AnnouncementManagerComponent_Conditional_48_Template, 37, 6, "div", 30);
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.tab() === "team" ? 6 : 7);
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.tab() === "all" ? "bg-white shadow-sm font-bold text-primary" : "text-on-surface-variant hover:bg-white/50");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.tab() === "team" ? "bg-white shadow-sm font-bold text-primary" : "text-on-surface-variant hover:bg-white/50");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 14 : ctx.filtered().length === 0 ? 15 : 16);
      \u0275\u0275advance(32);
      \u0275\u0275conditional((tmp_4_0 = ctx.lastCompanyAnnouncement()) ? 46 : 47, tmp_4_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modalOpen() ? 48 : -1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, AvatarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementManagerComponent, [{
    type: Component,
    args: [{ selector: "app-announcement-manager", standalone: true, imports: [FormsModule, AvatarComponent], template: `<div class="p-6 lg:p-8 max-w-5xl mx-auto flex flex-col gap-6">

  <!-- Header Section -->
  <div class="flex items-end justify-between gap-4">
    <div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Gestion des annonces</h2>
      <p class="font-body-md text-body-md text-on-surface-variant">
        @if (tab() === 'team') {
          Affichage des annonces destin\xE9es \xE0 votre \xE9quipe uniquement.
        } @else {
          Centralisez la communication pour l'entreprise et votre \xE9quipe.
        }
      </p>
    </div>
    <div class="flex gap-1 bg-surface-container-high p-1 rounded-lg">
      <button (click)="switchTab('all')"
        class="px-4 py-1.5 rounded-md font-label-md text-label-md transition-colors cursor-pointer"
        [class]="tab() === 'all' ? 'bg-white shadow-sm font-bold text-primary' : 'text-on-surface-variant hover:bg-white/50'">
        Toutes
      </button>
      <button (click)="switchTab('team')"
        class="px-4 py-1.5 rounded-md font-label-md text-label-md transition-colors cursor-pointer"
        [class]="tab() === 'team' ? 'bg-white shadow-sm font-bold text-primary' : 'text-on-surface-variant hover:bg-white/50'">
        Mon \xE9quipe
      </button>
    </div>
  </div>

  <!-- Announcements Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    @if (loading()) {
      @for (_ of [1,2,3]; track _) {
        <div class="bg-surface border border-outline-variant rounded-xl p-6 animate-pulse">
          <div class="h-4 bg-surface-variant rounded w-1/3 mb-4"></div>
          <div class="h-5 bg-surface-variant rounded w-2/3 mb-3"></div>
          <div class="h-4 bg-surface-variant rounded w-full mb-2"></div>
          <div class="h-4 bg-surface-variant rounded w-4/5"></div>
        </div>
      }
    } @else if (filtered().length === 0) {
      <div class="md:col-span-2 bg-surface border border-outline-variant rounded-xl p-16 text-center">
        <span class="material-symbols-outlined text-4xl text-on-surface-variant/40 block mb-3">campaign</span>
        <p class="font-label-md text-label-md text-on-surface-variant">Aucune annonce pour le moment</p>
      </div>
    } @else {
      @for (ann of filtered(); track ann.id) {
        <div class="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col gap-4 relative group hover:shadow-lg transition-all border-l-4"
          [class]="isCompany(ann) ? 'border-l-secondary' : 'border-l-primary'">
          <div class="flex justify-between items-start">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full font-label-sm text-[11px] flex items-center gap-1 uppercase tracking-wider"
                [class]="isCompany(ann) ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-primary-container text-on-primary-container'">
                <span class="material-symbols-outlined text-[14px]">{{ isCompany(ann) ? 'domain' : 'groups' }}</span>
                {{ scopeLabel(ann.target_scope) }}
              </span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">{{ formatRelative(ann.published_at ?? ann.created_at) }}</span>
            </div>
            @if (canManage(ann)) {
              <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button (click)="openEditModal(ann)" title="Modifier"
                  class="p-1.5 hover:bg-primary-fixed rounded-md text-primary transition-colors cursor-pointer">
                  <span class="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button (click)="deleteAnnouncement(ann)" title="Supprimer"
                  class="p-1.5 hover:bg-error-container rounded-md text-error transition-colors cursor-pointer">
                  <span class="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>
            }
          </div>
          <div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ ann.title }}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 whitespace-pre-wrap">{{ ann.content }}</p>
          </div>
          <div class="mt-auto pt-4 flex items-center justify-between border-t border-outline-variant/30">
            <div class="flex items-center gap-2">
              <app-avatar [imageUrl]="resolveAvatarUrl(ann.creator?.avatar_url)" [name]="authorName(ann)" size="sm" />
              <div class="flex flex-col">
                <span class="font-label-md text-label-md font-bold">{{ authorName(ann) }}{{ isMine(ann) ? ' (Moi)' : '' }}</span>
                <span class="text-[11px] text-on-surface-variant">{{ authorTitle(ann) }}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-on-surface-variant opacity-50">{{ isCompany(ann) ? 'visibility' : 'forum' }}</span>
          </div>
        </div>
      }
    }

    <!-- Add New Announcement Placeholder Card -->
    <button (click)="openCreateModal()"
      class="border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center gap-4 p-8 hover:bg-surface-container-low transition-all group cursor-pointer">
      <div class="w-16 h-16 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
        <span class="material-symbols-outlined text-3xl">add_circle</span>
      </div>
      <div class="text-center">
        <span class="font-headline-sm block text-on-surface-variant group-hover:text-primary">Nouvelle annonce</span>
        <p class="font-body-sm text-body-sm text-on-surface-variant opacity-70">Publiez une note pour votre \xE9quipe uniquement.</p>
      </div>
    </button>
  </div>

  <!-- Statistics & Context (Bento Style) -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-surface border border-outline-variant rounded-xl p-6">
      <h4 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Visibilit\xE9 Equipe</h4>
      <div class="flex items-center justify-center py-4">
        <div class="relative w-24 h-24">
          <svg class="w-full h-full" viewBox="0 0 36 36">
            <circle class="stroke-surface-container-highest" cx="18" cy="18" fill="none" r="16" stroke-width="3"></circle>
            <circle class="stroke-primary" cx="18" cy="18" fill="none" r="16" stroke-dasharray="85, 100" stroke-linecap="round" stroke-width="3"></circle>
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="font-display-lg-mobile text-primary leading-none">85%</span>
            <span class="text-[10px] uppercase font-bold text-on-surface-variant">Lus</span>
          </div>
        </div>
      </div>
      <p class="font-body-sm text-body-sm text-center text-on-surface-variant mt-2">Votre \xE9quipe est tr\xE8s r\xE9active aux annonces cette semaine.</p>
    </div>
    <div class="md:col-span-2 bg-surface border border-outline-variant rounded-xl p-6 flex items-center gap-6">
      <div class="flex-1">
        <h4 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Derni\xE8re annonce Corporate</h4>
        @if (lastCompanyAnnouncement(); as last) {
          <h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">{{ last.title }}</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant mb-3 line-clamp-2">{{ last.content }}</p>
          <button class="text-primary font-bold font-label-md text-label-md flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
            Lire les d\xE9tails <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        } @else {
          <p class="font-body-sm text-body-sm text-on-surface-variant">Aucune annonce d'entreprise pour le moment.</p>
        }
      </div>
    </div>
  </div>
</div>

<!-- Modal Form -->
@if (modalOpen()) {
  <div class="fixed inset-0 z-50 flex items-center justify-center modal-overlay" (click)="closeModal()">
    <div class="bg-surface w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-300 scale-100"
      (click)="$event.stopPropagation()">
      <!-- Modal Header -->
      <div class="px-6 py-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
            <span class="material-symbols-outlined">campaign</span>
          </div>
          <div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface leading-tight">{{ modalTitle() }}</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Scope : <strong>Mon \xC9quipe</strong></p>
          </div>
        </div>
        <button (click)="closeModal()"
          class="p-1.5 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors cursor-pointer">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <!-- Modal Body -->
      <form class="px-6 py-5 space-y-5" (ngSubmit)="submit()">
        <div class="space-y-1">
          <label class="font-label-md text-label-md text-on-surface-variant">Titre de l'annonce</label>
          <input [(ngModel)]="formData.title" name="title" type="text"
            placeholder="Ex: D\xE9calage r\xE9union, Pizza Friday..."
            class="w-full border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary text-body-md transition-all bg-surface text-on-surface placeholder:text-on-surface-variant outline-none" />
        </div>
        <div class="space-y-1">
          <label class="font-label-md text-label-md text-on-surface-variant">Contenu</label>
          <textarea [(ngModel)]="formData.content" name="content" rows="4"
            placeholder="Saisissez votre message ici..."
            class="w-full border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary text-body-md transition-all resize-none bg-surface text-on-surface placeholder:text-on-surface-variant outline-none"></textarea>
        </div>
        <div class="bg-surface-container px-4 py-3 rounded-xl flex items-start gap-3">
          <span class="material-symbols-outlined text-primary mt-0.5">info</span>
          <p class="font-body-sm text-body-sm text-on-surface-variant italic">
            En tant que manager, cette annonce sera automatiquement diffus\xE9e \xE0 tous les membres de votre \xE9quipe directe uniquement.
          </p>
        </div>
        @if (modalError()) {
          <p class="font-body-sm text-body-sm text-error">{{ modalError() }}</p>
        }
        <div class="flex gap-4 pt-2">
          <button type="button" (click)="closeModal()"
            class="flex-1 py-3 px-5 rounded-xl border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors cursor-pointer">
            Annuler
          </button>
          <button type="submit" [disabled]="modalSaving()"
            class="flex-1 py-3 px-5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:brightness-110 shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer">
            {{ modalSaving() ? 'Publication...' : 'Publier l\\'annonce' }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnouncementManagerComponent, { className: "AnnouncementManagerComponent", filePath: "src/app/features/shared/announcements/announcement-manager/announcement-manager.component.ts", lineNumber: 15 });
})();
export {
  AnnouncementManagerComponent
};
//# sourceMappingURL=chunk-4FBMXQDB.js.map
