import {
  PasswordStrengthComponent
} from "./chunk-G5S2M62M.js";
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
} from "./chunk-75TSC3TY.js";
import {
  AuthService
} from "./chunk-AI3EC5OL.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DGTBVCJC.js";
import "./chunk-FWX4MYVU.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/features/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "polygon", 5)(4, "line", 6)(5, "line", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 8);
    \u0275\u0275text(7, "Lien de r\xE9initialisation invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 9);
    \u0275\u0275text(9, " Le lien que vous avez utilis\xE9 est incomplet ou invalide. Veuillez faire une nouvelle demande de r\xE9initialisation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 10);
    \u0275\u0275text(11, " Demander un nouveau lien ");
    \u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "polyline", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 8);
    \u0275\u0275text(5, "Mot de passe r\xE9initialis\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 13);
    \u0275\u0275text(7, " Votre mot de passe a \xE9t\xE9 modifi\xE9 avec succ\xE8s. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 15);
    \u0275\u0275text(11, " Se connecter maintenant ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" Vous allez \xEAtre redirig\xE9 vers la page de connexion dans ", ctx_r0.countdown(), " secondes... ");
  }
}
function ResetPasswordComponent_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "circle", 34)(3, "line", 6)(4, "line", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function ResetPasswordComponent_Conditional_4_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
    \u0275\u0275text(1, " R\xE9initialisation en cours... ");
  }
}
function ResetPasswordComponent_Conditional_4_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " R\xE9initialiser mon mot de passe ");
  }
}
function ResetPasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "rect", 19)(4, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h1", 21);
    \u0275\u0275text(6, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 22);
    \u0275\u0275text(8, " Choisissez un mot de passe s\xE9curis\xE9 pour votre compte ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ResetPasswordComponent_Conditional_4_Conditional_9_Template, 7, 1, "div", 23);
    \u0275\u0275elementStart(10, "form", 24);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Conditional_4_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 25)(12, "label", 26);
    \u0275\u0275text(13, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 27);
    \u0275\u0275controlCreate();
    \u0275\u0275element(15, "app-password-strength", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "label", 29);
    \u0275\u0275text(18, "Confirmez le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275conditionalCreate(21, ResetPasswordComponent_Conditional_4_Conditional_21_Template, 2, 0)(22, ResetPasswordComponent_Conditional_4_Conditional_22_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 32)(24, "a", 15);
    \u0275\u0275text(25, " Retour \xE0 la connexion ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.errorMessage() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.resetForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("password"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("password"))("focus:border-primary", !ctx_r0.isFieldInvalid("password"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("password"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("password"))("border-error", ctx_r0.isFieldInvalid("password"))("bg-error-light", ctx_r0.isFieldInvalid("password"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("password"))("focus:ring-error/25", ctx_r0.isFieldInvalid("password"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("password", ctx_r0.passwordValue())("confirmPassword", ctx_r0.confirmPasswordValue());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("password_confirmation"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("password_confirmation"))("focus:border-primary", !ctx_r0.isFieldInvalid("password_confirmation"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("password_confirmation"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("password_confirmation"))("border-error", ctx_r0.isFieldInvalid("password_confirmation"))("bg-error-light", ctx_r0.isFieldInvalid("password_confirmation"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("password_confirmation"))("focus:ring-error/25", ctx_r0.isFieldInvalid("password_confirmation"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading() || ctx_r0.resetForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoading() ? 21 : 22);
  }
}
var passwordMatchValidator = (control) => {
  const password = control.get("password");
  const confirmPassword = control.get("password_confirmation");
  if (!password || !confirmPassword)
    return null;
  return password.value === confirmPassword.value ? null : { passwordMismatch: true };
};
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  authService = inject(AuthService);
  token = signal(
    null,
    ...ngDevMode ? [{ debugName: "token" }] : (
      /* istanbul ignore next */
      []
    )
  );
  email = signal(
    null,
    ...ngDevMode ? [{ debugName: "email" }] : (
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
  countdown = signal(
    3,
    ...ngDevMode ? [{ debugName: "countdown" }] : (
      /* istanbul ignore next */
      []
    )
  );
  countdownInterval = null;
  resetForm = this.fb.nonNullable.group({
    password: ["", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[A-Z]/),
      Validators.pattern(/[a-z]/),
      Validators.pattern(/[0-9]/),
      Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/)
    ]],
    password_confirmation: ["", [Validators.required]]
  }, { validators: [passwordMatchValidator] });
  /**
   * Extrait token et email des queryParams de l'URL, initialise les écouteurs des mots de passe.
   */
  ngOnInit() {
    const urlToken = this.route.snapshot.queryParamMap.get("token");
    const urlEmail = this.route.snapshot.queryParamMap.get("email");
    this.token.set(urlToken);
    this.email.set(urlEmail);
    this.resetForm.controls.password.valueChanges.subscribe((val) => {
      this.passwordValue.set(val || "");
    });
    this.resetForm.controls.password_confirmation.valueChanges.subscribe((val) => {
      this.confirmPasswordValue.set(val || "");
    });
  }
  /**
   * Soumet le nouveau mot de passe avec le token et l'email.
   * En cas de succès, démarre un compte à rebours avant redirection vers /login.
   */
  onSubmit() {
    const currentToken = this.token();
    const currentEmail = this.email();
    if (!currentToken || !currentEmail) {
      this.errorMessage.set("Op\xE9ration impossible : token ou email manquant.");
      return;
    }
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);
    const { password, password_confirmation } = this.resetForm.getRawValue();
    this.authService.resetPassword({
      token: currentToken,
      email: currentEmail,
      password,
      password_confirmation
    }).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.successMessage.set("Votre mot de passe a \xE9t\xE9 r\xE9initialis\xE9 avec succ\xE8s !");
        this.startCountdown();
      },
      error: (err) => {
        this.isLoading.set(false);
        if (err.status === 400 || err.status === 422) {
          this.errorMessage.set(err.error?.message || "Ce lien de r\xE9initialisation est invalide ou a expir\xE9. Veuillez faire une nouvelle demande.");
        } else if (err.status === 403) {
          this.errorMessage.set(err.error?.message || "Ce compte n'est pas encore activ\xE9. V\xE9rifiez votre email pour le lien d'activation initial.");
        } else if (err.status === 429) {
          this.errorMessage.set("Trop de tentatives. Veuillez r\xE9essayer dans une minute.");
        } else {
          this.errorMessage.set("Une erreur est survenue. Veuillez r\xE9essayer.");
        }
      }
    });
  }
  /**
   * Démarre un compte à rebours de 3 secondes puis redirige vers la page de connexion.
   */
  startCountdown() {
    this.countdown.set(3);
    this.countdownInterval = setInterval(() => {
      this.countdown.update((val) => val - 1);
      if (this.countdown() <= 0) {
        if (this.countdownInterval) {
          clearInterval(this.countdownInterval);
          this.countdownInterval = null;
        }
        this.router.navigate(["/login"]);
      }
    }, 1e3);
  }
  /**
   * Vérifie si un champ est invalide (inclut l'erreur passwordMismatch pour la confirmation).
   */
  isFieldInvalid(fieldName) {
    const control = this.resetForm.get(fieldName);
    if (!control)
      return false;
    if (fieldName === "password_confirmation") {
      return control.invalid && (control.dirty || control.touched) || this.resetForm.hasError("passwordMismatch") && control.touched;
    }
    return control.invalid && (control.dirty || control.touched);
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 5, vars: 1, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "p-6", "bg-background"], [1, "bg-surface", "border", "border-border", "shadow-sm", "rounded-md", "p-[24px]", "w-full", "max-w-md", "transition-colors", "hover:bg-surface-raised"], [1, "text-center", "flex", "flex-col", "items-center"], [1, "w-[64px]", "h-[64px]", "bg-error-light", "text-error", "rounded-full", "flex", "items-center", "justify-center", "mb-[24px]", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-[32px]", "h-[32px]"], ["points", "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "font-heading", "text-[20px]", "font-semibold", "leading-[28px]", "text-text-heading", "mb-[12px]"], [1, "font-sans", "text-[14px]", "leading-[22px]", "text-text-secondary", "mb-[32px]"], ["routerLink", "/forgot-password", 1, "w-full", "bg-primary", "text-text-inverse", "font-sans", "text-[14px]", "px-[16px]", "py-[8px]", "h-[40px]", "rounded-md", "transition-colors", "hover:bg-primary-hover", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "cursor-pointer", "text-center", "flex", "items-center", "justify-center"], [1, "w-[64px]", "h-[64px]", "bg-success-light", "text-success", "rounded-full", "flex", "items-center", "justify-center", "mb-[24px]", "shadow-sm"], ["points", "20 6 9 17 4 12"], [1, "font-sans", "text-[14px]", "leading-[22px]", "text-text-secondary", "mb-[8px]"], [1, "font-sans", "text-[12px]", "text-text-muted", "mb-[32px]"], ["routerLink", "/login", 1, "font-sans", "text-[14px]", "font-medium", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer"], [1, "text-center", "mb-8", "flex", "flex-col", "items-center"], [1, "w-12", "h-12", "bg-primary-50", "text-primary", "rounded-md", "flex", "items-center", "justify-center", "mb-4", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "font-heading", "text-[24px]", "font-bold", "leading-[32px]", "text-text-heading"], [1, "font-sans", "text-[14px]", "leading-[22px]", "text-text-secondary", "mt-1"], [1, "bg-error-light", "border", "border-error", "rounded-md", "p-[16px]", "mb-6", "flex", "items-start", "gap-2.5"], [1, "flex", "flex-col", "gap-5", 3, "ngSubmit", "formGroup"], [1, "flex", "flex-col"], ["for", "password", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Saisissez un mot de passe fort", "autocomplete", "new-password", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], [3, "password", "confirmPassword"], ["for", "password_confirmation", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "password_confirmation", "type", "password", "formControlName", "password_confirmation", "placeholder", "Confirmez votre mot de passe", "autocomplete", "new-password", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], ["type", "submit", 1, "w-full", "bg-primary", "text-text-inverse", "font-sans", "text-[14px]", "px-[16px]", "py-[8px]", "h-[40px]", "rounded-md", "transition-colors", "hover:bg-primary-hover", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "justify-center", "items-center", "gap-2", "mt-2", "cursor-pointer", 3, "disabled"], [1, "flex", "justify-center", "mt-6"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], [1, "font-sans", "font-medium", "text-[14px]", "text-error-dark"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ResetPasswordComponent_Conditional_2_Template, 12, 0, "div", 2)(3, ResetPasswordComponent_Conditional_3_Template, 12, 1, "div", 2)(4, ResetPasswordComponent_Conditional_4_Template, 26, 42);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.token() || !ctx.email() ? 2 : ctx.successMessage() ? 3 : 4);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, PasswordStrengthComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [ReactiveFormsModule, RouterModule, PasswordStrengthComponent], template: `<div class="min-h-screen flex items-center justify-center p-6 bg-background">
  <div class="bg-surface border border-border shadow-sm rounded-md p-[24px] w-full max-w-md transition-colors hover:bg-surface-raised">

    @if (!token() || !email()) {
      <div class="text-center flex flex-col items-center">
        <div class="w-[64px] h-[64px] bg-error-light text-error rounded-full flex items-center justify-center mb-[24px] shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[32px] h-[32px]">
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h2 class="font-heading text-[20px] font-semibold leading-[28px] text-text-heading mb-[12px]">Lien de r\xE9initialisation invalide</h2>
        <p class="font-sans text-[14px] leading-[22px] text-text-secondary mb-[32px]">
          Le lien que vous avez utilis\xE9 est incomplet ou invalide. Veuillez faire une nouvelle demande de r\xE9initialisation.
        </p>
        <a routerLink="/forgot-password" class="w-full bg-primary text-text-inverse font-sans text-[14px] px-[16px] py-[8px] h-[40px] rounded-md transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25 cursor-pointer text-center flex items-center justify-center">
          Demander un nouveau lien
        </a>
      </div>
    } @else if (successMessage()) {
      <div class="text-center flex flex-col items-center">
        <div class="w-[64px] h-[64px] bg-success-light text-success rounded-full flex items-center justify-center mb-[24px] shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[32px] h-[32px]">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2 class="font-heading text-[20px] font-semibold leading-[28px] text-text-heading mb-[12px]">Mot de passe r\xE9initialis\xE9</h2>
        <p class="font-sans text-[14px] leading-[22px] text-text-secondary mb-[8px]">
          Votre mot de passe a \xE9t\xE9 modifi\xE9 avec succ\xE8s.
        </p>
        <p class="font-sans text-[12px] text-text-muted mb-[32px]">
          Vous allez \xEAtre redirig\xE9 vers la page de connexion dans {{ countdown() }} secondes...
        </p>
        <a routerLink="/login" class="font-sans text-[14px] font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
          Se connecter maintenant
        </a>
      </div>
    } @else {
      <div class="text-center mb-8 flex flex-col items-center">
        <div class="w-12 h-12 bg-primary-50 text-primary rounded-md flex items-center justify-center mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h1 class="font-heading text-[24px] font-bold leading-[32px] text-text-heading">Nouveau mot de passe</h1>
        <p class="font-sans text-[14px] leading-[22px] text-text-secondary mt-1">
          Choisissez un mot de passe s\xE9curis\xE9 pour votre compte
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

      <form [formGroup]="resetForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
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
          [disabled]="isLoading() || resetForm.invalid"
        >
          @if (isLoading()) {
            <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
            R\xE9initialisation en cours...
          } @else {
            R\xE9initialiser mon mot de passe
          }
        </button>
      </form>

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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/features/auth/reset-password/reset-password.component.ts", lineNumber: 31 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-ZP52KTO2.js.map
