import {
  AnnouncementService
} from "./chunk-B5LODSAL.js";
import {
  AvatarComponent
} from "./chunk-DHD6LPVU.js";
import {
  ImageUrlService
} from "./chunk-ZTU2DKVI.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/shared/announcements/announcement-employee/announcement-employee.component.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
function AnnouncementEmployeeComponent_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function AnnouncementEmployeeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AnnouncementEmployeeComponent_Conditional_16_For_1_Template, 5, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AnnouncementEmployeeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.archivedMode() ? "archive" : "campaign");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.archivedMode() ? "Aucune annonce archiv\xE9e" : "Aucune annonce pour le moment", " ");
  }
}
function AnnouncementEmployeeComponent_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h3", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 28)(13, "div", 29);
    \u0275\u0275element(14, "app-avatar", 30);
    \u0275\u0275elementStart(15, "div", 31)(16, "span", 32);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 34)(21, "span", 35);
    \u0275\u0275text(22, "bookmark_add");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ann_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.scopeClass(ann_r2.target_scope));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.scopeLabel(ann_r2.target_scope));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ann_r2.published_at ?? ann_r2.created_at));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ann_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ann_r2.content);
    \u0275\u0275advance(3);
    \u0275\u0275property("imageUrl", ctx_r0.resolveAvatarUrl(ann_r2.creator?.avatar_url))("name", ctx_r0.authorName(ann_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.authorName(ann_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.authorTitle(ann_r2));
  }
}
function AnnouncementEmployeeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AnnouncementEmployeeComponent_Conditional_18_For_1_Template, 23, 10, "div", 21, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.visible());
  }
}
var AnnouncementEmployeeComponent = class _AnnouncementEmployeeComponent {
  announcementService = inject(AnnouncementService);
  imageUrlService = inject(ImageUrlService);
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
  status = signal(
    "published",
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sort = signal(
    "desc",
    ...ngDevMode ? [{ debugName: "sort" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.load();
  }
  visible = computed(
    () => {
      const list = [...this.announcements()];
      const dir = this.sort() === "desc" ? 1 : -1;
      list.sort((a, b) => {
        const da = new Date(a.published_at ?? a.created_at ?? 0).getTime();
        const db = new Date(b.published_at ?? b.created_at ?? 0).getTime();
        return (db - da) * dir;
      });
      return list;
    },
    ...ngDevMode ? [{ debugName: "visible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  archivedMode = computed(
    () => this.status() === "archived",
    ...ngDevMode ? [{ debugName: "archivedMode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  load() {
    this.loading.set(true);
    this.announcementService.getAnnouncements(this.status()).subscribe({
      next: (data) => {
        this.announcements.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  toggleArchives() {
    this.status.set(this.status() === "published" ? "archived" : "published");
    this.load();
  }
  changeSort(value) {
    this.sort.set(value === "asc" ? "asc" : "desc");
  }
  scopeLabel(scope) {
    return scope === "TEAM" ? "Mon \xE9quipe" : "Toute l'entreprise";
  }
  scopeClass(scope) {
    return scope === "TEAM" ? "bg-secondary-container/30 text-on-secondary-container" : "bg-primary-container/10 text-primary";
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
        return "DRH";
      case "MANAGER":
        return "Manager";
      default:
        return "Employ\xE9";
    }
  }
  resolveAvatarUrl(url) {
    return this.imageUrlService.resolve(url);
  }
  formatDate(value) {
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
      return `Aujourd'hui, ${date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`;
    const days = Math.floor(hours / 24);
    if (days === 1)
      return `Hier, ${date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`;
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
  }
  static \u0275fac = function AnnouncementEmployeeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnouncementEmployeeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnouncementEmployeeComponent, selectors: [["app-announcement-employee"]], decls: 24, vars: 5, consts: [[1, "p-6", "lg:p-8", "max-w-5xl", "mx-auto"], [1, "mb-6", "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-4"], [1, "font-headline-lg", "text-headline-lg", "text-on-surface"], [1, "font-body-md", "text-body-md", "text-on-surface-variant", "mt-1"], [1, "flex", "items-center", "gap-1"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant", "uppercase", "tracking-widest", "px-1"], [1, "bg-transparent", "border-none", "font-label-md", "text-primary", "focus:ring-0", "cursor-pointer", "outline-none", 3, "change"], ["value", "desc", 3, "selected"], ["value", "asc", 3, "selected"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "md:col-span-2", "lg:col-span-3", "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-16", "text-center"], [1, "flex", "flex-col", "items-center", "justify-center", "p-6", "border-2", "border-dashed", "border-outline-variant", "rounded-xl", "opacity-60", "hover:opacity-100", "transition-opacity", "cursor-pointer", "group", 3, "click"], [1, "material-symbols-outlined", "text-4xl", "text-on-surface-variant", "group-hover:scale-110", "transition-transform"], [1, "font-label-md", "text-label-md", "mt-2"], [1, "bg-surface", "border", "border-outline-variant", "rounded-xl", "p-6", "animate-pulse"], [1, "h-4", "bg-surface-variant", "rounded", "w-1/3", "mb-4"], [1, "h-5", "bg-surface-variant", "rounded", "w-2/3", "mb-3"], [1, "h-4", "bg-surface-variant", "rounded", "w-full", "mb-2"], [1, "h-4", "bg-surface-variant", "rounded", "w-4/5"], [1, "material-symbols-outlined", "text-4xl", "text-on-surface-variant/40", "block", "mb-3"], [1, "font-label-md", "text-label-md", "text-on-surface-variant"], [1, "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-xl", "p-6", "announcement-card", "flex", "flex-col", "gap-4", "relative", "overflow-hidden", "group"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-primary/5", "rounded-bl-full", "-mr-8", "-mt-8", "transition-all", "group-hover:w-32", "group-hover:h-32", "pointer-events-none"], [1, "flex", "justify-between", "items-start"], [1, "px-3", "py-1", "font-label-sm", "text-label-sm", "rounded-full"], [1, "font-label-sm", "text-label-sm", "text-on-surface-variant", "opacity-60"], [1, "font-headline-sm", "text-headline-sm", "text-on-surface", "group-hover:text-primary", "transition-colors", "leading-tight"], [1, "font-body-sm", "text-body-sm", "text-on-surface-variant", "mt-2", "line-clamp-4", "whitespace-pre-wrap"], [1, "mt-auto", "flex", "items-center", "justify-between", "pt-4", "border-t", "border-outline-variant/30"], [1, "flex", "items-center", "gap-2"], ["size", "sm", 3, "imageUrl", "name"], [1, "flex", "flex-col"], [1, "font-label-sm", "text-label-sm", "font-bold"], [1, "text-[10px]", "text-on-surface-variant"], ["title", "Sauvegarder", 1, "p-1", "hover:bg-surface-container-high", "rounded-full", "text-on-surface-variant", "transition-colors", "cursor-pointer"], [1, "material-symbols-outlined"]], template: function AnnouncementEmployeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Annonces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Restez inform\xE9 des derni\xE8res actualit\xE9s de l'entreprise et de votre \xE9quipe.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "span", 5);
      \u0275\u0275text(9, "Trier par :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275listener("change", function AnnouncementEmployeeComponent_Template_select_change_10_listener($event) {
        return ctx.changeSort($event.target.value);
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Plus r\xE9cent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Plus ancien");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275conditionalCreate(16, AnnouncementEmployeeComponent_Conditional_16_Template, 2, 1)(17, AnnouncementEmployeeComponent_Conditional_17_Template, 5, 2, "div", 10)(18, AnnouncementEmployeeComponent_Conditional_18_Template, 2, 0);
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function AnnouncementEmployeeComponent_Template_button_click_19_listener() {
        return ctx.toggleArchives();
      });
      \u0275\u0275elementStart(20, "span", 12);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 13);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("selected", ctx.sort() === "desc");
      \u0275\u0275advance(2);
      \u0275\u0275property("selected", ctx.sort() === "asc");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.visible().length === 0 ? 17 : 18);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.archivedMode() ? "campaign" : "history");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.archivedMode() ? "Voir les annonces" : "Voir les archives");
    }
  }, dependencies: [AvatarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementEmployeeComponent, [{
    type: Component,
    args: [{ selector: "app-announcement-employee", standalone: true, imports: [AvatarComponent], template: `<div class="p-6 lg:p-8 max-w-5xl mx-auto">
  <div class="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Annonces</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">Restez inform\xE9 des derni\xE8res actualit\xE9s de l'entreprise et de votre \xE9quipe.</p>
    </div>
    <div class="flex items-center gap-1">
      <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest px-1">Trier par :</span>
      <select (change)="changeSort($any($event.target).value)"
        class="bg-transparent border-none font-label-md text-primary focus:ring-0 cursor-pointer outline-none">
        <option value="desc" [selected]="sort() === 'desc'">Plus r\xE9cent</option>
        <option value="asc" [selected]="sort() === 'asc'">Plus ancien</option>
      </select>
    </div>
  </div>

  <!-- Bento-ish Grid Feed -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    @if (loading()) {
      @for (_ of [1,2,3,4]; track _) {
        <div class="bg-surface border border-outline-variant rounded-xl p-6 animate-pulse">
          <div class="h-4 bg-surface-variant rounded w-1/3 mb-4"></div>
          <div class="h-5 bg-surface-variant rounded w-2/3 mb-3"></div>
          <div class="h-4 bg-surface-variant rounded w-full mb-2"></div>
          <div class="h-4 bg-surface-variant rounded w-4/5"></div>
        </div>
      }
    } @else if (visible().length === 0) {
      <div class="md:col-span-2 lg:col-span-3 bg-surface border border-outline-variant rounded-xl p-16 text-center">
        <span class="material-symbols-outlined text-4xl text-on-surface-variant/40 block mb-3">{{ archivedMode() ? 'archive' : 'campaign' }}</span>
        <p class="font-label-md text-label-md text-on-surface-variant">
          {{ archivedMode() ? 'Aucune annonce archiv\xE9e' : 'Aucune annonce pour le moment' }}
        </p>
      </div>
    } @else {
      @for (ann of visible(); track ann.id) {
        <div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 announcement-card flex flex-col gap-4 relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:w-32 group-hover:h-32 pointer-events-none"></div>
          <div class="flex justify-between items-start">
            <span class="px-3 py-1 font-label-sm text-label-sm rounded-full" [class]="scopeClass(ann.target_scope)">{{ scopeLabel(ann.target_scope) }}</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant opacity-60">{{ formatDate(ann.published_at ?? ann.created_at) }}</span>
          </div>
          <div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-tight">{{ ann.title }}</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-4 whitespace-pre-wrap">{{ ann.content }}</p>
          </div>
          <div class="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/30">
            <div class="flex items-center gap-2">
              <app-avatar [imageUrl]="resolveAvatarUrl(ann.creator?.avatar_url)" [name]="authorName(ann)" size="sm" />
              <div class="flex flex-col">
                <span class="font-label-sm text-label-sm font-bold">{{ authorName(ann) }}</span>
                <span class="text-[10px] text-on-surface-variant">{{ authorTitle(ann) }}</span>
              </div>
            </div>
            <button title="Sauvegarder"
              class="p-1 hover:bg-surface-container-high rounded-full text-on-surface-variant transition-colors cursor-pointer">
              <span class="material-symbols-outlined">bookmark_add</span>
            </button>
          </div>
        </div>
      }
    }

    <!-- Archives Toggle -->
    <button (click)="toggleArchives()"
      class="flex flex-col items-center justify-center p-6 border-2 border-dashed border-outline-variant rounded-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
      <span class="material-symbols-outlined text-4xl text-on-surface-variant group-hover:scale-110 transition-transform">{{ archivedMode() ? 'campaign' : 'history' }}</span>
      <span class="font-label-md text-label-md mt-2">{{ archivedMode() ? 'Voir les annonces' : 'Voir les archives' }}</span>
    </button>
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnouncementEmployeeComponent, { className: "AnnouncementEmployeeComponent", filePath: "src/app/features/shared/announcements/announcement-employee/announcement-employee.component.ts", lineNumber: 13 });
})();
export {
  AnnouncementEmployeeComponent
};
//# sourceMappingURL=chunk-SGA2US6R.js.map
