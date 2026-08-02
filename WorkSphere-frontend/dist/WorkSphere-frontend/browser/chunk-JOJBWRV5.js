import {
  RouterLink,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-ZST2RCVM.js";

// src/app/shared/components/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 10, vars: 0, consts: [["role", "alert", 1, "min-h-screen", "flex", "items-center", "justify-center", "p-8", "bg-background"], [1, "text-center", "max-w-[420px]"], [1, "font-heading", "text-6xl", "font-extrabold", "text-accent", "leading-none", "mb-2", "tracking-tight"], [1, "font-heading", "text-2xl", "font-semibold", "text-text-heading", "mb-2"], [1, "font-sans", "text-[0.9375rem]", "text-text-muted", "mb-8"], ["routerLink", "/", 1, "inline-flex", "items-center", "justify-center", "h-[40px]", "px-[16px]", "py-[8px]", "bg-accent", "text-text-inverse", "font-sans", "text-[14px]", "rounded-md", "transition-colors", "hover:bg-accent-dark", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "cursor-pointer"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Page introuvable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "La page que vous cherchez n'existe pas ou a \xE9t\xE9 d\xE9plac\xE9e.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Retour \xE0 l'accueil ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n/*# sourceMappingURL=not-found.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: true, imports: [RouterModule], template: `<div role="alert" class="min-h-screen flex items-center justify-center p-8 bg-background">
  <div class="text-center max-w-[420px]">
    <h1 class="font-heading text-6xl font-extrabold text-accent leading-none mb-2 tracking-tight">404</h1>
    <p class="font-heading text-2xl font-semibold text-text-heading mb-2">Page introuvable</p>
    <p class="font-sans text-[0.9375rem] text-text-muted mb-8">La page que vous cherchez n'existe pas ou a \xE9t\xE9 d\xE9plac\xE9e.</p>
    <a routerLink="/" class="inline-flex items-center justify-center h-[40px] px-[16px] py-[8px] bg-accent text-text-inverse font-sans text-[14px] rounded-md transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25 cursor-pointer">
      Retour \xE0 l'accueil
    </a>
  </div>
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/shared/components/not-found/not-found.component.scss */\n/*# sourceMappingURL=not-found.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/shared/components/not-found/not-found.component.ts", lineNumber: 16 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-JOJBWRV5.js.map
