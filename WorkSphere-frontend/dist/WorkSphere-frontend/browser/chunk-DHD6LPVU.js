import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ADF3COWQ.js";

// src/app/shared/components/avatar/avatar.component.ts
function AvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.sizeClass());
    \u0275\u0275domProperty("src", ctx_r0.imageUrl(), \u0275\u0275sanitizeUrl)("alt", "Avatar de " + ctx_r0.name());
  }
}
function AvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.avatarClass() + " " + ctx_r0.sizeClass());
    \u0275\u0275attribute("aria-label", "Avatar de " + ctx_r0.name());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials(), " ");
  }
}
var AVATAR_CLASSES = [
  "bg-primary text-text-inverse",
  "bg-accent text-text-inverse",
  "bg-tertiary text-text-inverse",
  "bg-secondary text-text-inverse",
  "bg-info text-text-inverse",
  "bg-primary-light text-primary-dark"
];
var AvatarComponent = class _AvatarComponent {
  imageUrl = input(
    null,
    ...ngDevMode ? [{ debugName: "imageUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  name = input(
    "",
    ...ngDevMode ? [{ debugName: "name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  size = input(
    "md",
    ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    )
  );
  initials = computed(
    () => {
      const n = this.name();
      if (!n)
        return "??";
      const parts = n.trim().split(/\s+/);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return n.slice(0, 2).toUpperCase();
    },
    ...ngDevMode ? [{ debugName: "initials" }] : (
      /* istanbul ignore next */
      []
    )
  );
  avatarClass = computed(
    () => {
      const n = this.name();
      if (!n)
        return AVATAR_CLASSES[0];
      let hash = 0;
      for (let i = 0; i < n.length; i++) {
        hash = n.charCodeAt(i) + ((hash << 5) - hash);
      }
      return AVATAR_CLASSES[Math.abs(hash) % AVATAR_CLASSES.length];
    },
    ...ngDevMode ? [{ debugName: "avatarClass" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sizeClass = computed(
    () => {
      switch (this.size()) {
        case "sm":
          return "w-8 h-8 text-xs";
        case "md":
          return "w-10 h-10 text-sm";
        case "lg":
          return "w-16 h-16 text-xl";
      }
    },
    ...ngDevMode ? [{ debugName: "sizeClass" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function AvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvatarComponent, selectors: [["app-avatar"]], inputs: { imageUrl: [1, "imageUrl"], name: [1, "name"], size: [1, "size"] }, decls: 2, vars: 1, consts: [[1, "shrink-0", "rounded-full", "object-cover", 3, "src", "alt", "class"], ["role", "img", 1, "shrink-0", "rounded-full", "flex", "items-center", "justify-center", "font-semibold", 3, "class"], [1, "shrink-0", "rounded-full", "object-cover", 3, "src", "alt"], ["role", "img", 1, "shrink-0", "rounded-full", "flex", "items-center", "justify-center", "font-semibold"]], template: function AvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AvatarComponent_Conditional_0_Template, 1, 4, "img", 0)(1, AvatarComponent_Conditional_1_Template, 2, 4, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.imageUrl() ? 0 : 1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{ selector: "app-avatar", standalone: true, template: `@if (imageUrl()) {
  <img
    [src]="imageUrl()"
    [alt]="'Avatar de ' + name()"
    class="shrink-0 rounded-full object-cover"
    [class]="sizeClass()"
  />
} @else {
  <div
    class="shrink-0 rounded-full flex items-center justify-center font-semibold"
    [class]="avatarClass() + ' ' + sizeClass()"
    role="img"
    [attr.aria-label]="'Avatar de ' + name()"
  >
    {{ initials() }}
  </div>
}
` }]
  }], null, { imageUrl: [{ type: Input, args: [{ isSignal: true, alias: "imageUrl", required: false }] }], name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvatarComponent, { className: "AvatarComponent", filePath: "src/app/shared/components/avatar/avatar.component.ts", lineNumber: 17 });
})();

export {
  AvatarComponent
};
//# sourceMappingURL=chunk-DHD6LPVU.js.map
