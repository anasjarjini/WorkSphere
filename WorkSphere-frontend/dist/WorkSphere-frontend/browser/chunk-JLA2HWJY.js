import {
  PasswordStrengthComponent
} from "./chunk-HNY4ZCYP.js";
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
  ActivatedRoute,
  Router,
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

// src/app/features/auth/activate-account/activate-account.component.ts
function ActivateAccountComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "polygon", 13)(3, "line", 14)(4, "line", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "h4", 16);
    \u0275\u0275text(7, "Lien d'activation manquant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 18)(11, "a", 19);
    \u0275\u0275text(12, "Retourner \xE0 la page de connexion");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function ActivateAccountComponent_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "circle", 22)(3, "line", 14)(4, "line", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function ActivateAccountComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "polyline", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
function ActivateAccountComponent_Conditional_14_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
    \u0275\u0275text(1, " Activation en cours... ");
  }
}
function ActivateAccountComponent_Conditional_14_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Activer mon compte ");
  }
}
function ActivateAccountComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 27);
    \u0275\u0275listener("ngSubmit", function ActivateAccountComponent_Conditional_14_Conditional_2_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "label", 29);
    \u0275\u0275text(3, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275element(5, "app-password-strength", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28)(7, "label", 32);
    \u0275\u0275text(8, "Confirmez le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 33);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 34);
    \u0275\u0275conditionalCreate(11, ActivateAccountComponent_Conditional_14_Conditional_2_Conditional_11_Template, 2, 0)(12, ActivateAccountComponent_Conditional_14_Conditional_2_Conditional_12_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r0.activateForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("password"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("password"))("focus:border-primary", !ctx_r0.isFieldInvalid("password"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("password"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("password"))("border-error", ctx_r0.isFieldInvalid("password"))("bg-error-light", ctx_r0.isFieldInvalid("password"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("password"))("focus:ring-error/25", ctx_r0.isFieldInvalid("password"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("password", ctx_r0.passwordValue())("confirmPassword", ctx_r0.confirmPasswordValue());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("password_confirmation"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("password_confirmation"))("focus:border-primary", !ctx_r0.isFieldInvalid("password_confirmation"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("password_confirmation"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("password_confirmation"))("border-error", ctx_r0.isFieldInvalid("password_confirmation"))("bg-error-light", ctx_r0.isFieldInvalid("password_confirmation"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("password_confirmation"))("focus:ring-error/25", ctx_r0.isFieldInvalid("password_confirmation"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoading() ? 11 : 12);
  }
}
function ActivateAccountComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ActivateAccountComponent_Conditional_14_Conditional_0_Template, 7, 1, "div", 11);
    \u0275\u0275conditionalCreate(1, ActivateAccountComponent_Conditional_14_Conditional_1_Template, 5, 1, "div", 20);
    \u0275\u0275conditionalCreate(2, ActivateAccountComponent_Conditional_14_Conditional_2_Template, 13, 41, "form", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.errorMessage() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.successMessage() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.successMessage() ? 2 : -1);
  }
}
var passwordMatchValidator = (control) => {
  const password = control.get("password");
  const confirmPassword = control.get("password_confirmation");
  if (!password || !confirmPassword)
    return null;
  return password.value === confirmPassword.value ? null : { passwordMismatch: true };
};
var symbolRegex = /[^A-Za-z0-9]/;
var ActivateAccountComponent = class _ActivateAccountComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  authService = inject(AuthService);
  router = inject(Router);
  token = signal(
    null,
    ...ngDevMode ? [{ debugName: "token" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  successMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "successMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  passwordValue = signal(
    "",
    ...ngDevMode ? [{ debugName: "passwordValue" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmPasswordValue = signal(
    "",
    ...ngDevMode ? [{ debugName: "confirmPasswordValue" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Formulaire d'activation
  activateForm = this.fb.nonNullable.group({
    password: ["", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[A-Z]/),
      // Une majuscule
      Validators.pattern(/[a-z]/),
      // Une minuscule
      Validators.pattern(/[0-9]/),
      // Un chiffre
      Validators.pattern(symbolRegex)
      // Un caractère spécial
    ]],
    password_confirmation: ["", [Validators.required]]
  }, { validators: [passwordMatchValidator] });
  /**
   * Extrait le token des queryParams et initialise les écouteurs de valeur.
   */
  ngOnInit() {
    const urlToken = this.route.snapshot.queryParamMap.get("token");
    this.token.set(urlToken);
    if (!urlToken) {
      this.errorMessage.set("Le token d'activation est manquant dans l'URL. Veuillez utiliser le lien fourni dans l'email d'invitation.");
      return;
    }
    this.activateForm.controls.password.valueChanges.subscribe((val) => {
      this.passwordValue.set(val || "");
    });
    this.activateForm.controls.password_confirmation.valueChanges.subscribe((val) => {
      this.confirmPasswordValue.set(val || "");
    });
  }
  /**
   * Soumet le formulaire d'activation avec le token et les mots de passe.
   */
  onSubmit() {
    const currentToken = this.token();
    if (!currentToken) {
      this.errorMessage.set("Op\xE9ration impossible : aucun token d'activation pr\xE9sent.");
      return;
    }
    if (this.activateForm.invalid) {
      this.activateForm.markAllAsTouched();
      this.errorMessage.set("Veuillez compl\xE9ter correctement le mot de passe avant d'activer le compte.");
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
    const { password, password_confirmation } = this.activateForm.getRawValue();
    this.authService.activateAccount(currentToken, password, password_confirmation).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.successMessage.set("Votre compte a \xE9t\xE9 activ\xE9 avec succ\xE8s ! Connexion automatique...");
        setTimeout(() => {
          const user = this.authService.currentUser();
          const role = user?.role || "";
          const redirectPath = this.authService.getRedirectPathForRole(role);
          this.router.navigate([redirectPath]);
        }, 2e3);
      },
      error: (err) => {
        this.isLoading.set(false);
        if (err.status === 410) {
          this.errorMessage.set(err.error?.message || "Le lien d'activation a expir\xE9 ou a d\xE9j\xE0 \xE9t\xE9 utilis\xE9.");
        } else if (err.status === 422) {
          const errors = err.error?.errors;
          if (errors && typeof errors === "object") {
            const firstErrKey = Object.keys(errors)[0];
            const messages = errors[firstErrKey];
            if (Array.isArray(messages) && messages.length > 0) {
              this.errorMessage.set(messages[0]);
              return;
            }
          }
          this.errorMessage.set(err.error?.message || "Erreurs de validation d\xE9tect\xE9es.");
        } else {
          this.errorMessage.set("Une erreur est survenue lors de l'activation. Veuillez contacter votre administrateur.");
        }
      }
    });
  }
  /**
   * Vérifie si un champ est invalide (inclut l'erreur passwordMismatch pour la confirmation).
   */
  isFieldInvalid(fieldName) {
    const control = this.activateForm.get(fieldName);
    if (!control)
      return false;
    if (fieldName === "password_confirmation") {
      return control.invalid && (control.dirty || control.touched) || this.activateForm.hasError("passwordMismatch") && control.touched;
    }
    return control.invalid && (control.dirty || control.touched);
  }
  static \u0275fac = function ActivateAccountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivateAccountComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivateAccountComponent, selectors: [["app-activate-account"]], decls: 15, vars: 1, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "p-6", "bg-background"], [1, "bg-surface", "border", "border-border", "shadow-sm", "rounded-md", "p-[24px]", "w-full", "max-w-md", "transition-colors", "hover:bg-surface-raised"], [1, "text-center", "mb-8", "flex", "flex-col", "items-center"], [1, "w-12", "h-12", "bg-primary-50", "text-primary", "rounded-md", "flex", "items-center", "justify-center", "mb-4", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "22", "y1", "11", "x2", "16", "y2", "11"], [1, "font-heading", "text-[24px]", "font-bold", "leading-[32px]", "text-text-heading"], [1, "font-sans", "text-[14px]", "leading-[22px]", "text-text-secondary", "mt-1"], [1, "bg-error-light", "border", "border-error", "rounded-md", "p-[16px]", "mb-6", "flex", "items-start", "gap-2.5"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["points", "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "font-sans", "font-semibold", "text-error-dark", "text-[14px]", "mb-1"], [1, "font-sans", "text-[12px]", "text-error-dark/90"], [1, "flex", "justify-center", "mt-6"], ["routerLink", "/login", 1, "font-sans", "text-[14px]", "font-medium", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer"], [1, "bg-success-light", "border", "border-success", "rounded-md", "p-[16px]", "mb-6", "flex", "items-start", "gap-2.5"], [1, "flex", "flex-col", "gap-5", 3, "formGroup"], ["cx", "12", "cy", "12", "r", "10"], [1, "font-sans", "font-medium", "text-[14px]", "text-error-dark"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-success-dark", "shrink-0", "mt-0.5"], ["points", "20 6 9 17 4 12"], [1, "font-sans", "font-medium", "text-[14px]", "text-success-dark"], [1, "flex", "flex-col", "gap-5", 3, "ngSubmit", "formGroup"], [1, "flex", "flex-col"], ["for", "password", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Saisissez un mot de passe fort", "autocomplete", "new-password", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], [3, "password", "confirmPassword"], ["for", "password_confirmation", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "password_confirmation", "type", "password", "formControlName", "password_confirmation", "placeholder", "Confirmez votre mot de passe", "autocomplete", "new-password", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], ["type", "submit", 1, "w-full", "bg-primary", "text-text-inverse", "font-sans", "text-[14px]", "px-[16px]", "py-[8px]", "h-[40px]", "rounded-md", "transition-colors", "hover:bg-primary-hover", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "justify-center", "items-center", "gap-2", "mt-2", "cursor-pointer", 3, "disabled"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"]], template: function ActivateAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "circle", 6)(7, "line", 7)(8, "line", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "h1", 9);
      \u0275\u0275text(10, "Activer votre compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 10);
      \u0275\u0275text(12, "Configurez votre mot de passe d'acc\xE8s WorkSphere");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, ActivateAccountComponent_Conditional_13_Template, 13, 1)(14, ActivateAccountComponent_Conditional_14_Template, 3, 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.errorMessage() && !ctx.token() ? 13 : 14);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, PasswordStrengthComponent], styles: ["\n/*# sourceMappingURL=activate-account.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivateAccountComponent, [{
    type: Component,
    args: [{ selector: "app-activate-account", standalone: true, imports: [ReactiveFormsModule, RouterModule, PasswordStrengthComponent], template: `<div class="min-h-screen flex items-center justify-center p-6 bg-background">
  <div class="bg-surface border border-border shadow-sm rounded-md p-[24px] w-full max-w-md transition-colors hover:bg-surface-raised">
    <div class="text-center mb-8 flex flex-col items-center">
      <div class="w-12 h-12 bg-primary-50 text-primary rounded-md flex items-center justify-center mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="19" y1="8" x2="19" y2="14"></line>
          <line x1="22" y1="11" x2="16" y2="11"></line>
        </svg>
      </div>
      <h1 class="font-heading text-[24px] font-bold leading-[32px] text-text-heading">Activer votre compte</h1>
      <p class="font-sans text-[14px] leading-[22px] text-text-secondary mt-1">Configurez votre mot de passe d'acc\xE8s WorkSphere</p>
    </div>

    @if (errorMessage() && !token()) {
      <div class="bg-error-light border border-error rounded-md p-[16px] mb-6 flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-error shrink-0 mt-0.5">
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <div>
          <h4 class="font-sans font-semibold text-error-dark text-[14px] mb-1">Lien d'activation manquant</h4>
          <p class="font-sans text-[12px] text-error-dark/90">{{ errorMessage() }}</p>
        </div>
      </div>
      
      <div class="flex justify-center mt-6">
        <a routerLink="/login" class="font-sans text-[14px] font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">Retourner \xE0 la page de connexion</a>
      </div>
    } @else {
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

      @if (successMessage()) {
        <div class="bg-success-light border border-success rounded-md p-[16px] mb-6 flex items-start gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-success-dark shrink-0 mt-0.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span class="font-sans font-medium text-[14px] text-success-dark">{{ successMessage() }}</span>
        </div>
      }

      @if (!successMessage()) {
        <form [formGroup]="activateForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
          <div class="flex flex-col">
            <label for="password" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Nouveau mot de passe</label>
            <input
              id="password"
              type="password"
              formControlName="password"
              placeholder="Saisissez un mot de passe fort"
              class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
              [class.border-border]="!isFieldInvalid('password')"
              [class.hover:border-primary-light]="!isFieldInvalid('password')"
              [class.focus:border-primary]="!isFieldInvalid('password')"
              [class.focus:ring-[3px]]="!isFieldInvalid('password')"
              [class.focus:ring-primary/25]="!isFieldInvalid('password')"
              [class.border-error]="isFieldInvalid('password')"
              [class.bg-error-light]="isFieldInvalid('password')"
              [class.focus:ring-[3px]]="isFieldInvalid('password')"
              [class.focus:ring-error/25]="isFieldInvalid('password')"
              autocomplete="new-password"
            />
            
            <app-password-strength
              [password]="passwordValue()"
              [confirmPassword]="confirmPasswordValue()"
            />
          </div>

          <div class="flex flex-col">
            <label for="password_confirmation" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Confirmez le mot de passe</label>
            <input
              id="password_confirmation"
              type="password"
              formControlName="password_confirmation"
              placeholder="Confirmez votre mot de passe"
              class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
              [class.border-border]="!isFieldInvalid('password_confirmation')"
              [class.hover:border-primary-light]="!isFieldInvalid('password_confirmation')"
              [class.focus:border-primary]="!isFieldInvalid('password_confirmation')"
              [class.focus:ring-[3px]]="!isFieldInvalid('password_confirmation')"
              [class.focus:ring-primary/25]="!isFieldInvalid('password_confirmation')"
              [class.border-error]="isFieldInvalid('password_confirmation')"
              [class.bg-error-light]="isFieldInvalid('password_confirmation')"
              [class.focus:ring-[3px]]="isFieldInvalid('password_confirmation')"
              [class.focus:ring-error/25]="isFieldInvalid('password_confirmation')"
              autocomplete="new-password"
            />
          </div>

          <button 
            type="submit" 
            class="w-full bg-primary text-text-inverse font-sans text-[14px] px-[16px] py-[8px] h-[40px] rounded-md transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2 cursor-pointer" 
            [disabled]="isLoading()"
          >
            @if (isLoading()) {
              <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
              Activation en cours...
            } @else {
              Activer mon compte
            }
          </button>
        </form>
      }
    }
  </div>
</div>
`, styles: ["/* src/app/features/auth/activate-account/activate-account.component.scss */\n/*# sourceMappingURL=activate-account.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivateAccountComponent, { className: "ActivateAccountComponent", filePath: "src/app/features/auth/activate-account/activate-account.component.ts", lineNumber: 34 });
})();
export {
  ActivateAccountComponent
};
//# sourceMappingURL=chunk-JLA2HWJY.js.map
