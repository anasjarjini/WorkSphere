import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ADF3COWQ.js";

// src/app/shared/components/password-strength/password-strength.component.ts
function PasswordStrengthComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 5);
    \u0275\u0275domElement(2, "div", 6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5, "S\xE9curit\xE9 :");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-valuenow", ctx_r0.strengthInfo().percent)("aria-label", "Force du mot de passe : " + ctx_r0.strengthInfo().label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.strengthInfo().percent, "%");
    \u0275\u0275classProp("bg-error", ctx_r0.strengthInfo().class === "strength-weak")("bg-warning", ctx_r0.strengthInfo().class === "strength-medium")("bg-success", ctx_r0.strengthInfo().class === "strength-strong");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-error", ctx_r0.strengthInfo().class === "strength-weak")("text-warning", ctx_r0.strengthInfo().class === "strength-medium")("text-success", ctx_r0.strengthInfo().class === "strength-strong");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.strengthInfo().label, " ");
  }
}
function PasswordStrengthComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 12);
    \u0275\u0275domElement(2, "polyline", 13);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Les mots de passe correspondent. ");
    \u0275\u0275domElementEnd();
  }
}
function PasswordStrengthComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 12);
    \u0275\u0275domElement(2, "line", 14)(3, "line", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(4, " Les mots de passe ne correspondent pas. ");
    \u0275\u0275domElementEnd();
  }
}
function PasswordStrengthComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, PasswordStrengthComponent_Conditional_22_Conditional_1_Template, 4, 0, "span", 10)(2, PasswordStrengthComponent_Conditional_22_Conditional_2_Template, 5, 0, "span", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.passwordsMatch() ? 1 : 2);
  }
}
var PasswordStrengthComponent = class _PasswordStrengthComponent {
  password = input(
    "",
    ...ngDevMode ? [{ debugName: "password" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmPassword = input(
    "",
    ...ngDevMode ? [{ debugName: "confirmPassword" }] : (
      /* istanbul ignore next */
      []
    )
  );
  requirements = computed(
    () => {
      const pwd = this.password();
      return {
        minLength: pwd.length >= 8,
        hasUpper: /[A-Z]/.test(pwd),
        hasLower: /[a-z]/.test(pwd),
        hasNumber: /[0-9]/.test(pwd),
        hasSymbol: /[^A-Za-z0-9]/.test(pwd)
      };
    },
    ...ngDevMode ? [{ debugName: "requirements" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Pourcentage de validation du mot de passe */
  strengthInfo = computed(
    () => {
      const reqs = this.requirements();
      const met = [
        reqs.minLength,
        reqs.hasUpper,
        reqs.hasLower,
        reqs.hasNumber,
        reqs.hasSymbol
      ].filter(Boolean).length;
      const percent = met * 20;
      if (percent === 0)
        return { percent, label: "Inexistant", class: "strength-none" };
      if (percent <= 40)
        return { percent, label: "Faible", class: "strength-weak" };
      if (percent <= 80)
        return { percent, label: "Moyen", class: "strength-medium" };
      return { percent, label: "Fort", class: "strength-strong" };
    },
    ...ngDevMode ? [{ debugName: "strengthInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Vérifie si les mots de passe saisis correspondent.
   */
  passwordsMatch = computed(
    () => {
      const pwd = this.password();
      const cpwd = this.confirmPassword();
      return pwd && cpwd && pwd === cpwd;
    },
    ...ngDevMode ? [{ debugName: "passwordsMatch" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function PasswordStrengthComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordStrengthComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordStrengthComponent, selectors: [["app-password-strength"]], inputs: { password: [1, "password"], confirmPassword: [1, "confirmPassword"] }, decls: 23, vars: 62, consts: [[1, "mt-2.5", "p-2.5", "bg-background", "border", "border-border", "rounded-md"], [1, "mt-3", "flex", "flex-col", "gap-1.5", "pl-1"], [1, "text-xs", "flex", "items-center", "gap-2", "transition-colors", "duration-200"], [1, "w-1.5", "h-1.5", "rounded-full", "shrink-0", "transition-all", "duration-200"], [1, "flex", "items-center", "gap-1", "text-xs", "mt-2"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "h-1", "bg-border", "rounded-full", "overflow-hidden", "relative"], [1, "h-full", "rounded-full", "transition-all", "duration-300"], [1, "flex", "justify-between", "text-xs", "mt-1"], [1, "text-text-muted"], [1, "font-semibold"], [1, "text-success", "font-medium", "flex", "items-center", "gap-1"], [1, "text-error", "font-medium", "flex", "items-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3", "h-3"], ["points", "20 6 9 17 4 12"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"]], template: function PasswordStrengthComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, PasswordStrengthComponent_Conditional_0_Template, 8, 17, "div", 0);
      \u0275\u0275domElementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElement(3, "span", 3);
      \u0275\u0275domElementStart(4, "span");
      \u0275\u0275text(5, "Au moins 8 caract\xE8res");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 2);
      \u0275\u0275domElement(7, "span", 3);
      \u0275\u0275domElementStart(8, "span");
      \u0275\u0275text(9, "Au moins une lettre majuscule (A-Z)");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 2);
      \u0275\u0275domElement(11, "span", 3);
      \u0275\u0275domElementStart(12, "span");
      \u0275\u0275text(13, "Au moins une lettre minuscule (a-z)");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "div", 2);
      \u0275\u0275domElement(15, "span", 3);
      \u0275\u0275domElementStart(16, "span");
      \u0275\u0275text(17, "Au moins un chiffre (0-9)");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "div", 2);
      \u0275\u0275domElement(19, "span", 3);
      \u0275\u0275domElementStart(20, "span");
      \u0275\u0275text(21, "Au moins un symbole sp\xE9cial (!@#$...)");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(22, PasswordStrengthComponent_Conditional_22_Template, 3, 1, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.password() ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-primary", ctx.requirements().minLength)("font-medium", ctx.requirements().minLength)("text-text-muted", !ctx.requirements().minLength);
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-success", ctx.requirements().minLength)("scale-125", ctx.requirements().minLength)("bg-border", !ctx.requirements().minLength);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("text-primary", ctx.requirements().hasUpper)("font-medium", ctx.requirements().hasUpper)("text-text-muted", !ctx.requirements().hasUpper);
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-success", ctx.requirements().hasUpper)("scale-125", ctx.requirements().hasUpper)("bg-border", !ctx.requirements().hasUpper);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("text-primary", ctx.requirements().hasLower)("font-medium", ctx.requirements().hasLower)("text-text-muted", !ctx.requirements().hasLower);
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-success", ctx.requirements().hasLower)("scale-125", ctx.requirements().hasLower)("bg-border", !ctx.requirements().hasLower);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("text-primary", ctx.requirements().hasNumber)("font-medium", ctx.requirements().hasNumber)("text-text-muted", !ctx.requirements().hasNumber);
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-success", ctx.requirements().hasNumber)("scale-125", ctx.requirements().hasNumber)("bg-border", !ctx.requirements().hasNumber);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("text-primary", ctx.requirements().hasSymbol)("font-medium", ctx.requirements().hasSymbol)("text-text-muted", !ctx.requirements().hasSymbol);
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-success", ctx.requirements().hasSymbol)("scale-125", ctx.requirements().hasSymbol)("bg-border", !ctx.requirements().hasSymbol);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.confirmPassword() ? 22 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordStrengthComponent, [{
    type: Component,
    args: [{ selector: "app-password-strength", standalone: true, imports: [], template: `@if (password()) {
  <div class="mt-2.5 p-2.5 bg-background border border-border rounded-md">
    <div class="h-1 bg-border rounded-full overflow-hidden relative"
         role="progressbar"
         [attr.aria-valuenow]="strengthInfo().percent"
         aria-valuemin="0"
         aria-valuemax="100"
         [attr.aria-label]="'Force du mot de passe : ' + strengthInfo().label">
      <div
        class="h-full rounded-full transition-all duration-300"
        [class.bg-error]="strengthInfo().class === 'strength-weak'"
        [class.bg-warning]="strengthInfo().class === 'strength-medium'"
        [class.bg-success]="strengthInfo().class === 'strength-strong'"
        [style.width.%]="strengthInfo().percent"
      ></div>
    </div>
    <div class="flex justify-between text-xs mt-1">
      <span class="text-text-muted">S\xE9curit\xE9 :</span>
      <span
        class="font-semibold"
        [class.text-error]="strengthInfo().class === 'strength-weak'"
        [class.text-warning]="strengthInfo().class === 'strength-medium'"
        [class.text-success]="strengthInfo().class === 'strength-strong'"
      >
        {{ strengthInfo().label }}
      </span>
    </div>
  </div>
}

<div class="mt-3 flex flex-col gap-1.5 pl-1">
  <div
    class="text-xs flex items-center gap-2 transition-colors duration-200"
    [class.text-primary]="requirements().minLength"
    [class.font-medium]="requirements().minLength"
    [class.text-text-muted]="!requirements().minLength"
  >
    <span
      class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
      [class.bg-success]="requirements().minLength"
      [class.scale-125]="requirements().minLength"
      [class.bg-border]="!requirements().minLength"
    ></span>
    <span>Au moins 8 caract\xE8res</span>
  </div>
  <div
    class="text-xs flex items-center gap-2 transition-colors duration-200"
    [class.text-primary]="requirements().hasUpper"
    [class.font-medium]="requirements().hasUpper"
    [class.text-text-muted]="!requirements().hasUpper"
  >
    <span
      class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
      [class.bg-success]="requirements().hasUpper"
      [class.scale-125]="requirements().hasUpper"
      [class.bg-border]="!requirements().hasUpper"
    ></span>
    <span>Au moins une lettre majuscule (A-Z)</span>
  </div>
  <div
    class="text-xs flex items-center gap-2 transition-colors duration-200"
    [class.text-primary]="requirements().hasLower"
    [class.font-medium]="requirements().hasLower"
    [class.text-text-muted]="!requirements().hasLower"
  >
    <span
      class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
      [class.bg-success]="requirements().hasLower"
      [class.scale-125]="requirements().hasLower"
      [class.bg-border]="!requirements().hasLower"
    ></span>
    <span>Au moins une lettre minuscule (a-z)</span>
  </div>
  <div
    class="text-xs flex items-center gap-2 transition-colors duration-200"
    [class.text-primary]="requirements().hasNumber"
    [class.font-medium]="requirements().hasNumber"
    [class.text-text-muted]="!requirements().hasNumber"
  >
    <span
      class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
      [class.bg-success]="requirements().hasNumber"
      [class.scale-125]="requirements().hasNumber"
      [class.bg-border]="!requirements().hasNumber"
    ></span>
    <span>Au moins un chiffre (0-9)</span>
  </div>
  <div
    class="text-xs flex items-center gap-2 transition-colors duration-200"
    [class.text-primary]="requirements().hasSymbol"
    [class.font-medium]="requirements().hasSymbol"
    [class.text-text-muted]="!requirements().hasSymbol"
  >
    <span
      class="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200"
      [class.bg-success]="requirements().hasSymbol"
      [class.scale-125]="requirements().hasSymbol"
      [class.bg-border]="!requirements().hasSymbol"
    ></span>
    <span>Au moins un symbole sp\xE9cial (!&#64;#$...)</span>
  </div>
</div>

@if (confirmPassword()) {
  <div class="flex items-center gap-1 text-xs mt-2">
    @if (passwordsMatch()) {
      <span class="text-success font-medium flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Les mots de passe correspondent.
      </span>
    } @else {
      <span class="text-error font-medium flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        Les mots de passe ne correspondent pas.
      </span>
    }
  </div>
}` }]
  }], null, { password: [{ type: Input, args: [{ isSignal: true, alias: "password", required: false }] }], confirmPassword: [{ type: Input, args: [{ isSignal: true, alias: "confirmPassword", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordStrengthComponent, { className: "PasswordStrengthComponent", filePath: "src/app/shared/components/password-strength/password-strength.component.ts", lineNumber: 32 });
})();

export {
  PasswordStrengthComponent
};
//# sourceMappingURL=chunk-G5S2M62M.js.map
