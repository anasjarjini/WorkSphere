import {
  AnnouncementService
} from "./chunk-MAATT2I5.js";
import {
  AvatarComponent
} from "./chunk-LREV36OT.js";
import {
  ImageUrlService
} from "./chunk-44FZWU4S.js";
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
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZST2RCVM.js";

// src/app/features/shared/announcements/announcement-feed/announcement-feed.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.id;
function AnnouncementFeedComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "line", 9)(3, "line", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Nouvelle annonce ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r0.baseRoute() + "/announcements/new"));
  }
}
function AnnouncementFeedComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275element(2, "div", 13);
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275element(4, "div", 15)(5, "div", 16)(6, "div", 17);
    \u0275\u0275elementEnd()()();
  }
}
function AnnouncementFeedComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, AnnouncementFeedComponent_Conditional_8_For_2_Template, 7, 0, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function AnnouncementFeedComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 18);
    \u0275\u0275text(2, "Aucune annonce pour l'instant");
    \u0275\u0275elementEnd()();
  }
}
function AnnouncementFeedComponent_Conditional_10_For_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" D\xE9partement : ", ann_r2.department.name, " ");
  }
}
function AnnouncementFeedComponent_Conditional_10_For_4_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 42)(3, "polyline", 43)(4, "line", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Lien r\xE9union ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", ann_r2.meeting_link, \u0275\u0275sanitizeUrl);
  }
}
function AnnouncementFeedComponent_Conditional_10_For_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "rect", 37)(4, "line", 38)(5, "line", 39)(6, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AnnouncementFeedComponent_Conditional_10_For_4_Conditional_18_Conditional_8_Template, 6, 1, "a", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ann_r2.meeting_date, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ann_r2.meeting_link ? 8 : -1);
  }
}
function AnnouncementFeedComponent_Conditional_10_For_4_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "a", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "path", 42)(4, "polyline", 43)(5, "line", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Lien formation ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ann_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", ann_r2.training_link, \u0275\u0275sanitizeUrl);
  }
}
function AnnouncementFeedComponent_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "div", 24)(4, "div", 25);
    \u0275\u0275element(5, "app-avatar", 26);
    \u0275\u0275elementStart(6, "div", 27)(7, "p", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h3", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 32);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, AnnouncementFeedComponent_Conditional_10_For_4_Conditional_17_Template, 2, 1, "div", 33);
    \u0275\u0275conditionalCreate(18, AnnouncementFeedComponent_Conditional_10_For_4_Conditional_18_Template, 9, 2, "div", 34);
    \u0275\u0275conditionalCreate(19, AnnouncementFeedComponent_Conditional_10_For_4_Conditional_19_Template, 7, 1, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ann_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("imageUrl", ctx_r0.resolveAvatarUrl(ann_r2.creator?.avatar_url))("name", (ann_r2.creator?.first_name || "") + " " + (ann_r2.creator?.last_name || ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ann_r2.creator?.first_name, " ", ann_r2.creator?.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r2.created_at);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getTypeClass(ann_r2.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTypeLabel(ann_r2.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r2.content);
    \u0275\u0275advance();
    \u0275\u0275conditional(ann_r2.department ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ann_r2.type === "MEETING" && ann_r2.meeting_date ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ann_r2.type === "TRAINING" && ann_r2.training_link ? 19 : -1);
  }
}
function AnnouncementFeedComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275repeaterCreate(3, AnnouncementFeedComponent_Conditional_10_For_4_Template, 20, 13, "div", 21, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.announcements());
  }
}
var TYPE_LABELS = {
  GENERAL: "G\xE9n\xE9ral",
  MEETING: "R\xE9union",
  TRAINING: "Formation",
  POLICY: "Politique"
};
var TYPE_CLASSES = {
  GENERAL: "bg-primary-light text-primary-dark",
  MEETING: "bg-accent-light text-accent-dark",
  TRAINING: "bg-info-light text-info-dark",
  POLICY: "bg-warning-light text-warning-dark"
};
var AnnouncementFeedComponent = class _AnnouncementFeedComponent {
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
  isManagerOrAdmin = computed(
    () => {
      const role = this.user()?.role;
      return role === "MANAGER" || role === "HR_ADMIN";
    },
    ...ngDevMode ? [{ debugName: "isManagerOrAdmin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.announcementService.getAnnouncements().subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  getTypeLabel(type) {
    return TYPE_LABELS[type];
  }
  getTypeClass(type) {
    return TYPE_CLASSES[type];
  }
  resolveAvatarUrl(url) {
    return this.imageUrlService.resolve(url);
  }
  newAnnouncement() {
    const router = inject(Router);
    router.navigate([`${this.baseRoute()}/announcements/new`]);
  }
  static \u0275fac = function AnnouncementFeedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnouncementFeedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnouncementFeedComponent, selectors: [["app-announcement-feed"]], decls: 11, vars: 2, consts: [[1, "max-w-4xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "flex", "items-center", "justify-between"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2.5", "rounded-md", "hover:bg-primary-hover", "transition-colors", "flex", "items-center", "gap-2", "cursor-pointer", 3, "routerLink"], [1, "space-y-4"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-12", "text-center"], [1, "relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "animate-pulse"], [1, "flex", "gap-3"], [1, "w-10", "h-10", "bg-background-alt", "rounded-full", "shrink-0"], [1, "flex-1", "space-y-2"], [1, "h-5", "bg-background-alt", "rounded", "w-1/3"], [1, "h-4", "bg-background-alt", "rounded", "w-full"], [1, "h-4", "bg-background-alt", "rounded", "w-2/3"], [1, "text-text-secondary", "font-medium"], [1, "absolute", "left-5", "top-0", "bottom-0", "w-px", "bg-border"], [1, "flex", "flex-col", "gap-6"], [1, "relative", "pl-14"], [1, "absolute", "left-3.5", "top-2", "w-3", "h-3", "rounded-full", "bg-primary", "border-2", "border-surface"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "shadow-sm", "hover:shadow-md", "transition-shadow"], [1, "flex", "items-start", "justify-between", "gap-4", "mb-3"], [1, "flex", "items-center", "gap-3", "min-w-0"], ["size", "sm", 3, "imageUrl", "name"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-text", "truncate"], [1, "text-xs", "text-text-muted"], [1, "shrink-0", "text-xs", "font-semibold", "px-2.5", "py-1", "rounded-full"], [1, "font-heading", "font-semibold", "text-text-heading", "mb-2"], [1, "text-sm", "text-text-secondary", "whitespace-pre-wrap"], [1, "mt-3", "text-xs", "text-text-muted"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-3", "text-sm"], [1, "mt-3"], [1, "inline-flex", "items-center", "gap-1.5", "text-text-secondary"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-1.5", "text-primary", "font-semibold", "hover:text-primary-hover", 3, "href"], ["d", "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"], ["points", "15 3 21 3 21 9"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-1.5", "text-primary", "font-semibold", "hover:text-primary-hover", "text-sm", 3, "href"]], template: function AnnouncementFeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Annonces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Toutes les communications de l'entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, AnnouncementFeedComponent_Conditional_7_Template, 5, 3, "a", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, AnnouncementFeedComponent_Conditional_8_Template, 3, 1, "div", 5)(9, AnnouncementFeedComponent_Conditional_9_Template, 3, 0, "div", 6)(10, AnnouncementFeedComponent_Conditional_10_Template, 5, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isManagerOrAdmin() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 8 : ctx.announcements().length === 0 ? 9 : 10);
    }
  }, dependencies: [RouterModule, RouterLink, AvatarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementFeedComponent, [{
    type: Component,
    args: [{ selector: "app-announcement-feed", standalone: true, imports: [RouterModule, AvatarComponent], template: `<div class="max-w-4xl mx-auto flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="font-heading text-2xl font-bold text-text-heading">Annonces</h1>
      <p class="text-sm text-text-secondary mt-1">Toutes les communications de l'entreprise</p>
    </div>
    @if (isManagerOrAdmin()) {
      <a [routerLink]="[baseRoute() + '/announcements/new']"
        class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-primary-hover transition-colors flex items-center gap-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Nouvelle annonce
      </a>
    }
  </div>

  @if (loading()) {
    <div class="space-y-4">
      @for (_ of [1,2,3]; track _) {
        <div class="bg-surface border border-border rounded-xl p-6 animate-pulse">
          <div class="flex gap-3">
            <div class="w-10 h-10 bg-background-alt rounded-full shrink-0"></div>
            <div class="flex-1 space-y-2">
              <div class="h-5 bg-background-alt rounded w-1/3"></div>
              <div class="h-4 bg-background-alt rounded w-full"></div>
              <div class="h-4 bg-background-alt rounded w-2/3"></div>
            </div>
          </div>
        </div>
      }
    </div>
  } @else if (announcements().length === 0) {
    <div class="bg-surface border border-border rounded-xl p-12 text-center">
      <p class="text-text-secondary font-medium">Aucune annonce pour l'instant</p>
    </div>
  } @else {
    <div class="relative">
      <div class="absolute left-5 top-0 bottom-0 w-px bg-border"></div>
      <div class="flex flex-col gap-6">
        @for (ann of announcements(); track ann.id) {
          <div class="relative pl-14">
            <div class="absolute left-3.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-surface"></div>
            <div class="bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start justify-between gap-4 mb-3">
                <div class="flex items-center gap-3 min-w-0">
                  <app-avatar [imageUrl]="resolveAvatarUrl(ann.creator?.avatar_url)" [name]="(ann.creator?.first_name || '') + ' ' + (ann.creator?.last_name || '')" size="sm" />
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-text truncate">{{ ann.creator?.first_name }} {{ ann.creator?.last_name }}</p>
                    <p class="text-xs text-text-muted">{{ ann.created_at }}</p>
                  </div>
                </div>
                <span class="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full" [class]="getTypeClass(ann.type)">
                  {{ getTypeLabel(ann.type) }}
                </span>
              </div>

              <h3 class="font-heading font-semibold text-text-heading mb-2">{{ ann.title }}</h3>
              <p class="text-sm text-text-secondary whitespace-pre-wrap">{{ ann.content }}</p>

              @if (ann.department) {
                <div class="mt-3 text-xs text-text-muted">
                  D\xE9partement : {{ ann.department.name }}
                </div>
              }

              @if (ann.type === 'MEETING' && ann.meeting_date) {
                <div class="mt-3 flex flex-wrap items-center gap-3 text-sm">
                  <span class="inline-flex items-center gap-1.5 text-text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {{ ann.meeting_date }}
                  </span>
                  @if (ann.meeting_link) {
                    <a [href]="ann.meeting_link" target="_blank"
                      class="inline-flex items-center gap-1.5 text-primary font-semibold hover:text-primary-hover">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Lien r\xE9union
                    </a>
                  }
                </div>
              }

              @if (ann.type === 'TRAINING' && ann.training_link) {
                <div class="mt-3">
                  <a [href]="ann.training_link" target="_blank"
                    class="inline-flex items-center gap-1.5 text-primary font-semibold hover:text-primary-hover text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Lien formation
                  </a>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnouncementFeedComponent, { className: "AnnouncementFeedComponent", filePath: "src/app/features/shared/announcements/announcement-feed/announcement-feed.component.ts", lineNumber: 26 });
})();
export {
  AnnouncementFeedComponent
};
//# sourceMappingURL=chunk-KY2CJ64W.js.map
