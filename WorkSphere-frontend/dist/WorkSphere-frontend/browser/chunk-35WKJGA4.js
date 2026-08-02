import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-ZST2RCVM.js";

// src/app/features/admin/settings/settings.component.ts
var AdminSettingsComponent = class _AdminSettingsComponent {
  static \u0275fac = function AdminSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettingsComponent, selectors: [["app-admin-settings"]], decls: 11, vars: 0, consts: [[1, "max-w-[720px]", "mx-auto", "flex", "flex-col", "gap-6"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading", "mb-1"], [1, "font-sans", "text-[0.9375rem]", "text-text-secondary", "mb-8"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-8", "shadow-sm"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading", "mb-2"], [1, "text-text-secondary"]], template: function AdminSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Param\xE8tres");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 2);
      \u0275\u0275text(5, "G\xE9rez la configuration de votre entreprise.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 3)(7, "h2", 4);
      \u0275\u0275text(8, "Configuration de l'entreprise");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p", 5);
      \u0275\u0275text(10, "Les param\xE8tres d\xE9taill\xE9s seront disponibles prochainement.");
      \u0275\u0275domElementEnd()()();
    }
  }, styles: ['@charset "UTF-8";\n\n\n/*# sourceMappingURL=settings.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-settings", standalone: true, template: `<div class="max-w-[720px] mx-auto flex flex-col gap-6">
  <div>
    <h1 class="font-heading text-2xl font-bold text-text-heading mb-1">Param\xE8tres</h1>
    <p class="font-sans text-[0.9375rem] text-text-secondary mb-8">G\xE9rez la configuration de votre entreprise.</p>
  </div>

  <div class="bg-surface border border-border rounded-xl p-8 shadow-sm">
    <h2 class="font-heading text-lg font-semibold text-text-heading mb-2">Configuration de l'entreprise</h2>
    <p class="text-text-secondary">Les param\xE8tres d\xE9taill\xE9s seront disponibles prochainement.</p>
  </div>
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/admin/settings/settings.component.scss */\n/*# sourceMappingURL=settings.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettingsComponent, { className: "AdminSettingsComponent", filePath: "src/app/features/admin/settings/settings.component.ts", lineNumber: 14 });
})();
export {
  AdminSettingsComponent
};
//# sourceMappingURL=chunk-35WKJGA4.js.map
