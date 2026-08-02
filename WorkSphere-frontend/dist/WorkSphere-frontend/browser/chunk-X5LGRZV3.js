import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7RQSPZX3.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZST2RCVM.js";

// src/app/features/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "circle", 19)(3, "line", 20)(4, "line", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function ForgotPasswordComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 19)(3, "line", 20)(4, "line", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Veuillez saisir une adresse email valide. ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
    \u0275\u0275text(1, " Envoi en cours... ");
  }
}
function ForgotPasswordComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Envoyer le lien ");
  }
}
function ForgotPasswordComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 6);
    \u0275\u0275element(3, "rect", 7)(4, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h1", 9);
    \u0275\u0275text(6, "Mot de passe oubli\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8, " Saisissez votre adresse email pour recevoir un lien de r\xE9initialisation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ForgotPasswordComponent_Conditional_2_Conditional_9_Template, 7, 1, "div", 11);
    \u0275\u0275elementStart(10, "form", 12);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Conditional_2_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 13)(12, "label", 14);
    \u0275\u0275text(13, "Adresse Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(15, ForgotPasswordComponent_Conditional_2_Conditional_15_Template, 6, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 17);
    \u0275\u0275conditionalCreate(17, ForgotPasswordComponent_Conditional_2_Conditional_17_Template, 2, 0)(18, ForgotPasswordComponent_Conditional_2_Conditional_18_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.forgotForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r1.isFieldInvalid("email"))("hover:border-primary-light", !ctx_r1.isFieldInvalid("email"))("focus:border-primary", !ctx_r1.isFieldInvalid("email"))("focus:ring-[3px]", !ctx_r1.isFieldInvalid("email"))("focus:ring-primary/25", !ctx_r1.isFieldInvalid("email"))("border-error", ctx_r1.isFieldInvalid("email"))("bg-error-light", ctx_r1.isFieldInvalid("email"))("focus:ring-[3px]", ctx_r1.isFieldInvalid("email"))("focus:ring-error/25", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("email") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading() || ctx_r1.forgotForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 17 : 18);
  }
}
function ForgotPasswordComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 26);
    \u0275\u0275element(3, "polyline", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 28);
    \u0275\u0275text(5, "Email envoy\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7, " Si un compte existe avec cette adresse email, vous recevrez un lien de r\xE9initialisation de mot de passe sous quelques minutes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 30);
    \u0275\u0275text(9, " Pensez \xE0 v\xE9rifier vos spams si vous ne trouvez pas l'email. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 31);
    \u0275\u0275text(11, " Retour \xE0 la connexion ");
    \u0275\u0275elementEnd()();
  }
}
function ForgotPasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "a", 31);
    \u0275\u0275text(2, " Retour \xE0 la connexion ");
    \u0275\u0275elementEnd()();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  isLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "isLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submitted = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitted" }] : (
      /* istanbul ignore next */
      []
    )
  );
  forgotForm = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]]
  });
  /**
   * Soumet l'email pour recevoir le lien de réinitialisation.
   * En cas d'erreur, affiche quand même succès pour ne pas révéler l'existence du compte.
   */
  onSubmit() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);
    const { email } = this.forgotForm.getRawValue();
    this.authService.forgotPassword(email).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.submitted.set(true);
      },
      error: (err) => {
        this.isLoading.set(false);
        if (err.status === 422) {
          const errors = err.error?.errors;
          if (errors && typeof errors === "object") {
            const firstKey = Object.keys(errors)[0];
            const messages = errors[firstKey];
            if (Array.isArray(messages) && messages.length > 0) {
              this.errorMessage.set(messages[0]);
              return;
            }
          }
        } else if (err.status === 429) {
          this.errorMessage.set("Trop de tentatives. Veuillez r\xE9essayer dans une minute.");
          return;
        }
        this.isLoading.set(false);
        this.submitted.set(true);
      }
    });
  }
  /**
   * Vérifie si le champ email est invalide.
   */
  isFieldInvalid(fieldName) {
    const control = this.forgotForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 5, vars: 2, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "p-6", "bg-background"], [1, "bg-surface", "border", "border-border", "shadow-sm", "rounded-md", "p-[24px]", "w-full", "max-w-md", "transition-colors", "hover:bg-surface-raised"], [1, "text-center", "flex", "flex-col", "items-center"], [1, "flex", "justify-center", "mt-6"], [1, "text-center", "mb-8", "flex", "flex-col", "items-center"], [1, "w-12", "h-12", "bg-primary-50", "text-primary", "rounded-md", "flex", "items-center", "justify-center", "mb-4", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "font-heading", "text-[24px]", "font-bold", "leading-[32px]", "text-text-heading"], [1, "font-sans", "text-[14px]", "leading-[22px]", "text-text-secondary", "mt-1"], [1, "bg-error-light", "border", "border-error", "rounded-md", "p-[16px]", "mb-6", "flex", "items-start", "gap-2.5"], [1, "flex", "flex-col", "gap-5", 3, "ngSubmit", "formGroup"], [1, "flex", "flex-col"], ["for", "email", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "nom@entreprise.com", "autocomplete", "email", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], [1, "font-sans", "font-normal", "text-[12px]", "text-error", "mt-[4px]", "flex", "items-center", "gap-1"], ["type", "submit", 1, "w-full", "bg-primary", "text-text-inverse", "font-sans", "text-[14px]", "px-[16px]", "py-[8px]", "h-[40px]", "rounded-md", "transition-colors", "hover:bg-primary-hover", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "justify-center", "items-center", "gap-2", "mt-2", "cursor-pointer", 3, "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "font-sans", "font-medium", "text-[14px]", "text-error-dark"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3", "h-3"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"], [1, "w-[64px]", "h-[64px]", "bg-success-light", "text-success", "rounded-full", "flex", "items-center", "justify-center", "mb-[24px]", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-[32px]", "h-[32px]"], ["points", "20 6 9 17 4 12"], [1, "font-heading", "text-[20px]", "font-semibold", "leading-[28px]", "text-text-heading", "mb-[12px]"], [1, "font-sans", "text-[14px]", "leading-[22px]", "text-text-secondary", "mb-[24px]"], [1, "font-sans", "text-[12px]", "text-text-muted", "mb-[32px]"], ["routerLink", "/login", 1, "font-sans", "text-[14px]", "font-medium", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ForgotPasswordComponent_Conditional_2_Template, 19, 23)(3, ForgotPasswordComponent_Conditional_3_Template, 12, 0, "div", 2);
      \u0275\u0275conditionalCreate(4, ForgotPasswordComponent_Conditional_4_Template, 3, 0, "div", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.submitted() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.submitted() ? 4 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [ReactiveFormsModule, RouterModule], template: `<div class="min-h-screen flex items-center justify-center p-6 bg-background">
  <div class="bg-surface border border-border shadow-sm rounded-md p-[24px] w-full max-w-md transition-colors hover:bg-surface-raised">

    @if (!submitted()) {
      <div class="text-center mb-8 flex flex-col items-center">
        <div class="w-12 h-12 bg-primary-50 text-primary rounded-md flex items-center justify-center mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h1 class="font-heading text-[24px] font-bold leading-[32px] text-text-heading">Mot de passe oubli\xE9</h1>
        <p class="font-sans text-[14px] leading-[22px] text-text-secondary mt-1">
          Saisissez votre adresse email pour recevoir un lien de r\xE9initialisation
        </p>
      </div>

      @if (errorMessage()) {
        <div class="bg-error-light border border-error rounded-md p-[16px] mb-6 flex items-start gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-error shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span class="font-sans font-medium text-[14px] text-error-dark">{{ errorMessage() }}</span>
        </div>
      }

      <form [formGroup]="forgotForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
        <div class="flex flex-col">
          <label for="email" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Adresse Email</label>
          <input
            id="email"
            type="email"
            formControlName="email"
            placeholder="nom@entreprise.com"
            class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
            [class.border-border]="!isFieldInvalid('email')"
            [class.hover:border-primary-light]="!isFieldInvalid('email')"
            [class.focus:border-primary]="!isFieldInvalid('email')"
            [class.focus:ring-[3px]]="!isFieldInvalid('email')"
            [class.focus:ring-primary/25]="!isFieldInvalid('email')"
            [class.border-error]="isFieldInvalid('email')"
            [class.bg-error-light]="isFieldInvalid('email')"
            [class.focus:ring-[3px]]="isFieldInvalid('email')"
            [class.focus:ring-error/25]="isFieldInvalid('email')"
            autocomplete="email"
          />
          @if (isFieldInvalid('email')) {
            <span class="font-sans font-normal text-[12px] text-error mt-[4px] flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Veuillez saisir une adresse email valide.
            </span>
          }
        </div>

        <button
          type="submit"
          class="w-full bg-primary text-text-inverse font-sans text-[14px] px-[16px] py-[8px] h-[40px] rounded-md transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2 cursor-pointer"
          [disabled]="isLoading() || forgotForm.invalid"
        >
          @if (isLoading()) {
            <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
            Envoi en cours...
          } @else {
            Envoyer le lien
          }
        </button>
      </form>
    } @else {
      <div class="text-center flex flex-col items-center">
        <div class="w-[64px] h-[64px] bg-success-light text-success rounded-full flex items-center justify-center mb-[24px] shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[32px] h-[32px]">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 class="font-heading text-[20px] font-semibold leading-[28px] text-text-heading mb-[12px]">Email envoy\xE9</h2>
        <p class="font-sans text-[14px] leading-[22px] text-text-secondary mb-[24px]">
          Si un compte existe avec cette adresse email, vous recevrez un lien de r\xE9initialisation de mot de passe sous quelques minutes.
        </p>
        <p class="font-sans text-[12px] text-text-muted mb-[32px]">
          Pensez \xE0 v\xE9rifier vos spams si vous ne trouvez pas l'email.
        </p>
        <a routerLink="/login" class="font-sans text-[14px] font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
          Retour \xE0 la connexion
        </a>
      </div>
    }

    @if (!submitted()) {
      <div class="flex justify-center mt-6">
        <a routerLink="/login" class="font-sans text-[14px] font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
          Retour \xE0 la connexion
        </a>
      </div>
    }
  </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/forgot-password/forgot-password.component.ts", lineNumber: 19 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-X5LGRZV3.js.map
