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
  Router,
  RouterLink,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  __spreadValues,
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

// src/app/features/auth/register-company/register-company.component.ts
function RegisterCompanyComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "circle", 15)(3, "line", 16)(4, "line", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function RegisterCompanyComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "polyline", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Le nom de l'entreprise est requis.");
    \u0275\u0275elementEnd();
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getServerError("company_name"));
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Format d'email invalide.");
    \u0275\u0275elementEnd();
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getServerError("company_email"));
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getServerError("admin_first_name"));
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getServerError("admin_last_name"));
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Email invalide ou requis.");
    \u0275\u0275elementEnd();
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getServerError("admin_email"));
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getServerError("admin_password"));
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
    \u0275\u0275text(1, " Cr\xE9ation en cours... ");
  }
}
function RegisterCompanyComponent_Conditional_13_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cr\xE9er l'entreprise ");
  }
}
function RegisterCompanyComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 22);
    \u0275\u0275listener("ngSubmit", function RegisterCompanyComponent_Conditional_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "h3", 24);
    \u0275\u0275text(3, "Votre entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "label", 26);
    \u0275\u0275text(6, "Nom de l'entreprise *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 27);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(8, RegisterCompanyComponent_Conditional_13_Conditional_8_Template, 2, 0, "span", 28);
    \u0275\u0275conditionalCreate(9, RegisterCompanyComponent_Conditional_13_Conditional_9_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25)(11, "label", 29);
    \u0275\u0275text(12, "Email de l'entreprise (Optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(14, RegisterCompanyComponent_Conditional_13_Conditional_14_Template, 2, 0, "span", 28);
    \u0275\u0275conditionalCreate(15, RegisterCompanyComponent_Conditional_13_Conditional_15_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "div", 31);
    \u0275\u0275elementStart(17, "div", 23)(18, "h3", 24);
    \u0275\u0275text(19, "Votre compte Administrateur RH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 32)(21, "div", 33)(22, "label", 34);
    \u0275\u0275text(23, "Pr\xE9nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 35);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(25, RegisterCompanyComponent_Conditional_13_Conditional_25_Template, 2, 0, "span", 28);
    \u0275\u0275conditionalCreate(26, RegisterCompanyComponent_Conditional_13_Conditional_26_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 33)(28, "label", 36);
    \u0275\u0275text(29, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(31, RegisterCompanyComponent_Conditional_13_Conditional_31_Template, 2, 0, "span", 28);
    \u0275\u0275conditionalCreate(32, RegisterCompanyComponent_Conditional_13_Conditional_32_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 25)(34, "label", 38);
    \u0275\u0275text(35, "Email professionnel *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 39);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(37, RegisterCompanyComponent_Conditional_13_Conditional_37_Template, 2, 0, "span", 28);
    \u0275\u0275conditionalCreate(38, RegisterCompanyComponent_Conditional_13_Conditional_38_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 25)(40, "label", 40);
    \u0275\u0275text(41, "Mot de passe *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 41);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(43, RegisterCompanyComponent_Conditional_13_Conditional_43_Template, 2, 1, "span", 28);
    \u0275\u0275element(44, "app-password-strength", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 25)(46, "label", 43);
    \u0275\u0275text(47, "Confirmez le mot de passe *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 44);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 45);
    \u0275\u0275conditionalCreate(50, RegisterCompanyComponent_Conditional_13_Conditional_50_Template, 2, 0)(51, RegisterCompanyComponent_Conditional_13_Conditional_51_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.registerForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("company_name"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("company_name"))("focus:border-primary", !ctx_r0.isFieldInvalid("company_name"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("company_name"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("company_name"))("border-error", ctx_r0.isFieldInvalid("company_name"))("bg-error-light", ctx_r0.isFieldInvalid("company_name"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("company_name"))("focus:ring-error/25", ctx_r0.isFieldInvalid("company_name"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isFieldInvalid("company_name") && !ctx_r0.getServerError("company_name") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getServerError("company_name") ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("company_email"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("company_email"))("focus:border-primary", !ctx_r0.isFieldInvalid("company_email"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("company_email"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("company_email"))("border-error", ctx_r0.isFieldInvalid("company_email"))("bg-error-light", ctx_r0.isFieldInvalid("company_email"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("company_email"))("focus:ring-error/25", ctx_r0.isFieldInvalid("company_email"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isFieldInvalid("company_email") && !ctx_r0.getServerError("company_email") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getServerError("company_email") ? 15 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("admin_first_name"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("admin_first_name"))("focus:border-primary", !ctx_r0.isFieldInvalid("admin_first_name"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("admin_first_name"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("admin_first_name"))("border-error", ctx_r0.isFieldInvalid("admin_first_name"))("bg-error-light", ctx_r0.isFieldInvalid("admin_first_name"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("admin_first_name"))("focus:ring-error/25", ctx_r0.isFieldInvalid("admin_first_name"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isFieldInvalid("admin_first_name") && !ctx_r0.getServerError("admin_first_name") ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getServerError("admin_first_name") ? 26 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("admin_last_name"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("admin_last_name"))("focus:border-primary", !ctx_r0.isFieldInvalid("admin_last_name"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("admin_last_name"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("admin_last_name"))("border-error", ctx_r0.isFieldInvalid("admin_last_name"))("bg-error-light", ctx_r0.isFieldInvalid("admin_last_name"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("admin_last_name"))("focus:ring-error/25", ctx_r0.isFieldInvalid("admin_last_name"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isFieldInvalid("admin_last_name") && !ctx_r0.getServerError("admin_last_name") ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getServerError("admin_last_name") ? 32 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("admin_email"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("admin_email"))("focus:border-primary", !ctx_r0.isFieldInvalid("admin_email"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("admin_email"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("admin_email"))("border-error", ctx_r0.isFieldInvalid("admin_email"))("bg-error-light", ctx_r0.isFieldInvalid("admin_email"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("admin_email"))("focus:ring-error/25", ctx_r0.isFieldInvalid("admin_email"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isFieldInvalid("admin_email") && !ctx_r0.getServerError("admin_email") ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getServerError("admin_email") ? 38 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("admin_password"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("admin_password"))("focus:border-primary", !ctx_r0.isFieldInvalid("admin_password"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("admin_password"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("admin_password"))("border-error", ctx_r0.isFieldInvalid("admin_password"))("bg-error-light", ctx_r0.isFieldInvalid("admin_password"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("admin_password"))("focus:ring-error/25", ctx_r0.isFieldInvalid("admin_password"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getServerError("admin_password") ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("password", ctx_r0.passwordValue())("confirmPassword", ctx_r0.confirmPasswordValue());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-border", !ctx_r0.isFieldInvalid("admin_password_confirmation"))("hover:border-primary-light", !ctx_r0.isFieldInvalid("admin_password_confirmation"))("focus:border-primary", !ctx_r0.isFieldInvalid("admin_password_confirmation"))("focus:ring-[3px]", !ctx_r0.isFieldInvalid("admin_password_confirmation"))("focus:ring-primary/25", !ctx_r0.isFieldInvalid("admin_password_confirmation"))("border-error", ctx_r0.isFieldInvalid("admin_password_confirmation"))("bg-error-light", ctx_r0.isFieldInvalid("admin_password_confirmation"))("focus:ring-[3px]", ctx_r0.isFieldInvalid("admin_password_confirmation"))("focus:ring-error/25", ctx_r0.isFieldInvalid("admin_password_confirmation"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading() || ctx_r0.registerForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoading() ? 50 : 51);
  }
}
var passwordMatchValidator = (control) => {
  const password = control.get("admin_password");
  const confirmPassword = control.get("admin_password_confirmation");
  if (!password || !confirmPassword)
    return null;
  return password.value === confirmPassword.value ? null : { passwordMismatch: true };
};
var RegisterCompanyComponent = class _RegisterCompanyComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
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
  // Formulaire d'inscription (structure plate correspondant au payload backend)
  registerForm = this.fb.nonNullable.group({
    // Section Entreprise
    company_name: ["", [Validators.required]],
    company_email: ["", [Validators.email]],
    // Optionnel, mais validé si rempli
    // Section Admin RH
    admin_first_name: ["", [Validators.required]],
    admin_last_name: ["", [Validators.required]],
    admin_email: ["", [Validators.required, Validators.email]],
    admin_password: ["", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[A-Z]/),
      // Une majuscule
      Validators.pattern(/[a-z]/),
      // Une minuscule
      Validators.pattern(/[0-9]/),
      // Un chiffre
      Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/)
      // Un caractère spécial
    ]],
    admin_password_confirmation: ["", [Validators.required]]
  }, { validators: [passwordMatchValidator] });
  // La logique de force du mot de passe est maintenant dans le composant partagé PasswordStrengthComponent
  /**
   * Initialise les écouteurs de changement pour les signaux de mot de passe (force en temps réel).
   */
  ngOnInit() {
    this.registerForm.controls.admin_password.valueChanges.subscribe((val) => {
      this.passwordValue.set(val || "");
    });
    this.registerForm.controls.admin_password_confirmation.valueChanges.subscribe((val) => {
      this.confirmPasswordValue.set(val || "");
    });
  }
  /**
   * Soumet le formulaire d'inscription à l'API. Gère les erreurs de validation 422 avec mapping par champ.
   */
  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
    Object.keys(this.registerForm.controls).forEach((key) => {
      const control = this.registerForm.get(key);
      if (control?.hasError("serverError")) {
        const errors = __spreadValues({}, control.errors);
        delete errors["serverError"];
        control.setErrors(Object.keys(errors).length ? errors : null);
      }
    });
    const payload = this.registerForm.getRawValue();
    this.authService.registerCompany(payload).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.successMessage.set("Votre entreprise a \xE9t\xE9 cr\xE9\xE9e avec succ\xE8s ! Connexion en cours...");
        setTimeout(() => {
          const user = this.authService.currentUser();
          const role = user?.role || "";
          const redirectPath = this.authService.getRedirectPathForRole(role);
          this.router.navigate([redirectPath]);
        }, 1500);
      },
      error: (err) => {
        this.isLoading.set(false);
        if (err.status === 422 && err.error?.errors) {
          const apiErrors = err.error.errors;
          let firstErrorMessage = null;
          Object.keys(apiErrors).forEach((field) => {
            const control = this.registerForm.get(field);
            const messages = apiErrors[field];
            if (messages && messages.length > 0) {
              if (!firstErrorMessage)
                firstErrorMessage = messages[0];
              if (control) {
                control.setErrors({ serverError: messages[0] });
                control.markAsTouched();
              }
            }
          });
          this.errorMessage.set(firstErrorMessage || "Veuillez corriger les erreurs dans le formulaire.");
        } else {
          this.errorMessage.set("Une erreur est survenue, r\xE9essayez plus tard.");
        }
      }
    });
  }
  /**
   * Helper pour déterminer si un champ spécifique est invalide
   */
  isFieldInvalid(fieldName) {
    const control = this.registerForm.get(fieldName);
    if (!control)
      return false;
    if (fieldName === "admin_password_confirmation") {
      return control.invalid && (control.dirty || control.touched) || this.registerForm.hasError("passwordMismatch") && control.touched;
    }
    return control.invalid && (control.dirty || control.touched);
  }
  /**
     * Récupère le message d'erreur serveur d'un champ (mapping 422).
     * @param fieldName Nom du champ
     * @returns Message d'erreur ou null
     */
  getServerError(fieldName) {
    const control = this.registerForm.get(fieldName);
    return control?.getError("serverError") || null;
  }
  static \u0275fac = function RegisterCompanyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterCompanyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterCompanyComponent, selectors: [["app-register-company"]], decls: 17, vars: 3, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "p-6", "bg-background"], [1, "bg-surface", "border", "border-border", "shadow-sm", "rounded-md", "p-[24px]", "w-full", "max-w-[580px]", "transition-colors", "hover:bg-surface-raised"], [1, "text-center", "mb-8", "flex", "flex-col", "items-center"], [1, "w-12", "h-12", "bg-primary-50", "text-primary", "rounded-md", "flex", "items-center", "justify-center", "mb-4", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "font-heading", "text-[24px]", "font-bold", "leading-[32px]", "text-text-heading"], [1, "font-sans", "text-[14px]", "leading-[22px]", "text-text-secondary", "mt-1"], [1, "bg-error-light", "border", "border-error", "rounded-md", "p-[16px]", "mb-6", "flex", "items-start", "gap-2.5"], [1, "bg-success-light", "border", "border-success", "rounded-md", "p-[16px]", "mb-6", "flex", "items-start", "gap-2.5"], [1, "flex", "flex-col", 3, "formGroup"], [1, "flex", "justify-center", "mt-6"], ["routerLink", "/login", 1, "font-sans", "text-[14px]", "font-medium", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "font-sans", "text-[14px]", "font-medium", "text-error-dark"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-success-dark", "shrink-0", "mt-0.5"], ["points", "20 6 9 17 4 12"], [1, "font-sans", "text-[14px]", "font-medium", "text-success-dark"], [1, "flex", "flex-col", 3, "ngSubmit", "formGroup"], [1, "flex", "flex-col", "gap-4"], [1, "font-heading", "text-[16px]", "font-semibold", "leading-[24px]", "text-primary", "mb-1"], [1, "flex", "flex-col"], ["for", "company_name", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "company_name", "type", "text", "formControlName", "company_name", "placeholder", "Ex: Google", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], [1, "font-sans", "font-normal", "text-[12px]", "text-error", "mt-[4px]"], ["for", "company_email", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "company_email", "type", "email", "formControlName", "company_email", "placeholder", "contact@entreprise.com", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], [1, "h-px", "bg-border", "my-8"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex", "flex-col", "flex-1"], ["for", "admin_first_name", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "admin_first_name", "type", "text", "formControlName", "admin_first_name", "placeholder", "Pr\xE9nom", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], ["for", "admin_last_name", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "admin_last_name", "type", "text", "formControlName", "admin_last_name", "placeholder", "Nom", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], ["for", "admin_email", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "admin_email", "type", "email", "formControlName", "admin_email", "placeholder", "jean.dupont@entreprise.com", "autocomplete", "email", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], ["for", "admin_password", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "admin_password", "type", "password", "formControlName", "admin_password", "placeholder", "Saisissez un mot de passe fort", "autocomplete", "new-password", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], [3, "password", "confirmPassword"], ["for", "admin_password_confirmation", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "admin_password_confirmation", "type", "password", "formControlName", "admin_password_confirmation", "placeholder", "Confirmez votre mot de passe", "autocomplete", "new-password", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], ["type", "submit", 1, "w-full", "bg-primary", "text-text-inverse", "font-sans", "text-[14px]", "px-[16px]", "py-[8px]", "h-[40px]", "rounded-md", "transition-colors", "hover:bg-primary-hover", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "justify-center", "items-center", "gap-2", "mt-6", "cursor-pointer", 3, "disabled"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"]], template: function RegisterCompanyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "polyline", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h1", 7);
      \u0275\u0275text(8, "Inscription Entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, "Cr\xE9ez votre espace WorkSphere et votre compte Administrateur RH");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, RegisterCompanyComponent_Conditional_11_Template, 7, 1, "div", 9);
      \u0275\u0275conditionalCreate(12, RegisterCompanyComponent_Conditional_12_Template, 5, 1, "div", 10);
      \u0275\u0275conditionalCreate(13, RegisterCompanyComponent_Conditional_13_Template, 52, 142, "form", 11);
      \u0275\u0275elementStart(14, "div", 12)(15, "a", 13);
      \u0275\u0275text(16, "Vous avez d\xE9j\xE0 un compte ? Connectez-vous");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.errorMessage() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMessage() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.successMessage() ? 13 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, PasswordStrengthComponent], styles: ["\n/*# sourceMappingURL=register-company.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterCompanyComponent, [{
    type: Component,
    args: [{ selector: "app-register-company", standalone: true, imports: [ReactiveFormsModule, RouterModule, PasswordStrengthComponent], template: `<div class="min-h-screen flex items-center justify-center p-6 bg-background">
  <div class="bg-surface border border-border shadow-sm rounded-md p-[24px] w-full max-w-[580px] transition-colors hover:bg-surface-raised">
    <div class="text-center mb-8 flex flex-col items-center">
      <div class="w-12 h-12 bg-primary-50 text-primary rounded-md flex items-center justify-center mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </div>
      <h1 class="font-heading text-[24px] font-bold leading-[32px] text-text-heading">Inscription Entreprise</h1>
      <p class="font-sans text-[14px] leading-[22px] text-text-secondary mt-1">Cr\xE9ez votre espace WorkSphere et votre compte Administrateur RH</p>
    </div>
<!-- afficher errur message -->
    @if (errorMessage()) {
      <div class="bg-error-light border border-error rounded-md p-[16px] mb-6 flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-error shrink-0 mt-0.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span class="font-sans text-[14px] font-medium text-error-dark">{{ errorMessage() }}</span>
      </div>
    }
<!-- afficher success message-->
    @if (successMessage()) {
      <div class="bg-success-light border border-success rounded-md p-[16px] mb-6 flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-success-dark shrink-0 mt-0.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="font-sans text-[14px] font-medium text-success-dark">{{ successMessage() }}</span>
      </div>
    }

    @if (!successMessage()) {
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="flex flex-col">
        
        <!-- Section: Votre entreprise -->
        <div class="flex flex-col gap-4">
          <h3 class="font-heading text-[16px] font-semibold leading-[24px] text-primary mb-1">Votre entreprise</h3>
          
          <div class="flex flex-col">
            <label for="company_name" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Nom de l'entreprise *</label>
            <input
              id="company_name"
              type="text"
              formControlName="company_name"
              placeholder="Ex: Google"
              class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
              [class.border-border]="!isFieldInvalid('company_name')"
              [class.hover:border-primary-light]="!isFieldInvalid('company_name')"
              [class.focus:border-primary]="!isFieldInvalid('company_name')"
              [class.focus:ring-[3px]]="!isFieldInvalid('company_name')"
              [class.focus:ring-primary/25]="!isFieldInvalid('company_name')"
              [class.border-error]="isFieldInvalid('company_name')"
              [class.bg-error-light]="isFieldInvalid('company_name')"
              [class.focus:ring-[3px]]="isFieldInvalid('company_name')"
              [class.focus:ring-error/25]="isFieldInvalid('company_name')"
            />
            @if (isFieldInvalid('company_name') && !getServerError('company_name')) {
              <span class="font-sans font-normal text-[12px] text-error mt-[4px]">Le nom de l'entreprise est requis.</span>
            }
            @if (getServerError('company_name')) {
              <span class="font-sans font-normal text-[12px] text-error mt-[4px]">{{ getServerError('company_name') }}</span>
            }
          </div>

          <div class="flex flex-col">
            <label for="company_email" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Email de l'entreprise (Optionnel)</label>
            <input
              id="company_email"
              type="email"
              formControlName="company_email"
              placeholder="contact@entreprise.com"
              class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
              [class.border-border]="!isFieldInvalid('company_email')"
              [class.hover:border-primary-light]="!isFieldInvalid('company_email')"
              [class.focus:border-primary]="!isFieldInvalid('company_email')"
              [class.focus:ring-[3px]]="!isFieldInvalid('company_email')"
              [class.focus:ring-primary/25]="!isFieldInvalid('company_email')"
              [class.border-error]="isFieldInvalid('company_email')"
              [class.bg-error-light]="isFieldInvalid('company_email')"
              [class.focus:ring-[3px]]="isFieldInvalid('company_email')"
              [class.focus:ring-error/25]="isFieldInvalid('company_email')"
            />
            @if (isFieldInvalid('company_email') && !getServerError('company_email')) {
              <span class="font-sans font-normal text-[12px] text-error mt-[4px]">Format d'email invalide.</span>
            }
            @if (getServerError('company_email')) {
              <span class="font-sans font-normal text-[12px] text-error mt-[4px]">{{ getServerError('company_email') }}</span>
            }
          </div>
        </div>

        <div class="h-px bg-border my-8"></div>

        <!-- Section: Administrateur RH -->
        <div class="flex flex-col gap-4">
          <h3 class="font-heading text-[16px] font-semibold leading-[24px] text-primary mb-1">Votre compte Administrateur RH</h3>

          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex flex-col flex-1">
              <label for="admin_first_name" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Pr\xE9nom *</label>
              <input
                id="admin_first_name"
                type="text"
                formControlName="admin_first_name"
                placeholder="Pr\xE9nom"
                class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
                [class.border-border]="!isFieldInvalid('admin_first_name')"
                [class.hover:border-primary-light]="!isFieldInvalid('admin_first_name')"
                [class.focus:border-primary]="!isFieldInvalid('admin_first_name')"
                [class.focus:ring-[3px]]="!isFieldInvalid('admin_first_name')"
                [class.focus:ring-primary/25]="!isFieldInvalid('admin_first_name')"
                [class.border-error]="isFieldInvalid('admin_first_name')"
                [class.bg-error-light]="isFieldInvalid('admin_first_name')"
                [class.focus:ring-[3px]]="isFieldInvalid('admin_first_name')"
                [class.focus:ring-error/25]="isFieldInvalid('admin_first_name')"
              />
              @if (isFieldInvalid('admin_first_name') && !getServerError('admin_first_name')) {
                <span class="font-sans font-normal text-[12px] text-error mt-[4px]">Requis.</span>
              }
              @if (getServerError('admin_first_name')) {
                <span class="font-sans font-normal text-[12px] text-error mt-[4px]">{{ getServerError('admin_first_name') }}</span>
              }
            </div>

            <div class="flex flex-col flex-1">
              <label for="admin_last_name" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Nom *</label>
              <input
                id="admin_last_name"
                type="text"
                formControlName="admin_last_name"
                placeholder="Nom"
                class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
                [class.border-border]="!isFieldInvalid('admin_last_name')"
                [class.hover:border-primary-light]="!isFieldInvalid('admin_last_name')"
                [class.focus:border-primary]="!isFieldInvalid('admin_last_name')"
                [class.focus:ring-[3px]]="!isFieldInvalid('admin_last_name')"
                [class.focus:ring-primary/25]="!isFieldInvalid('admin_last_name')"
                [class.border-error]="isFieldInvalid('admin_last_name')"
                [class.bg-error-light]="isFieldInvalid('admin_last_name')"
                [class.focus:ring-[3px]]="isFieldInvalid('admin_last_name')"
                [class.focus:ring-error/25]="isFieldInvalid('admin_last_name')"
              />
              @if (isFieldInvalid('admin_last_name') && !getServerError('admin_last_name')) {
                <span class="font-sans font-normal text-[12px] text-error mt-[4px]">Requis.</span>
              }
              @if (getServerError('admin_last_name')) {
                <span class="font-sans font-normal text-[12px] text-error mt-[4px]">{{ getServerError('admin_last_name') }}</span>
              }
            </div>
          </div>

          <div class="flex flex-col">
            <label for="admin_email" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Email professionnel *</label>
            <input
              id="admin_email"
              type="email"
              formControlName="admin_email"
              placeholder="jean.dupont@entreprise.com"
              class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
              [class.border-border]="!isFieldInvalid('admin_email')"
              [class.hover:border-primary-light]="!isFieldInvalid('admin_email')"
              [class.focus:border-primary]="!isFieldInvalid('admin_email')"
              [class.focus:ring-[3px]]="!isFieldInvalid('admin_email')"
              [class.focus:ring-primary/25]="!isFieldInvalid('admin_email')"
              [class.border-error]="isFieldInvalid('admin_email')"
              [class.bg-error-light]="isFieldInvalid('admin_email')"
              [class.focus:ring-[3px]]="isFieldInvalid('admin_email')"
              [class.focus:ring-error/25]="isFieldInvalid('admin_email')"
              autocomplete="email"
            />
            @if (isFieldInvalid('admin_email') && !getServerError('admin_email')) {
              <span class="font-sans font-normal text-[12px] text-error mt-[4px]">Email invalide ou requis.</span>
            }
            @if (getServerError('admin_email')) {
              <span class="font-sans font-normal text-[12px] text-error mt-[4px]">{{ getServerError('admin_email') }}</span>
            }
          </div>

          <div class="flex flex-col">
            <label for="admin_password" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Mot de passe *</label>
            <input
              id="admin_password"
              type="password"
              formControlName="admin_password"
              placeholder="Saisissez un mot de passe fort"
              class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
              [class.border-border]="!isFieldInvalid('admin_password')"
              [class.hover:border-primary-light]="!isFieldInvalid('admin_password')"
              [class.focus:border-primary]="!isFieldInvalid('admin_password')"
              [class.focus:ring-[3px]]="!isFieldInvalid('admin_password')"
              [class.focus:ring-primary/25]="!isFieldInvalid('admin_password')"
              [class.border-error]="isFieldInvalid('admin_password')"
              [class.bg-error-light]="isFieldInvalid('admin_password')"
              [class.focus:ring-[3px]]="isFieldInvalid('admin_password')"
              [class.focus:ring-error/25]="isFieldInvalid('admin_password')"
              autocomplete="new-password"
            />
            @if (getServerError('admin_password')) {
              <span class="font-sans font-normal text-[12px] text-error mt-[4px]">{{ getServerError('admin_password') }}</span>
            }
            
            <!-- Indicateur de force du mot de passe (composant partag\xE9) -->
            <app-password-strength
              [password]="passwordValue()"
              [confirmPassword]="confirmPasswordValue()"
            />
          </div>

          <div class="flex flex-col">
            <label for="admin_password_confirmation" class="font-sans font-medium text-[14px] text-primary mb-[4px]">Confirmez le mot de passe *</label>
            <input
              id="admin_password_confirmation"
              type="password"
              formControlName="admin_password_confirmation"
              placeholder="Confirmez votre mot de passe"
              class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
              [class.border-border]="!isFieldInvalid('admin_password_confirmation')"
              [class.hover:border-primary-light]="!isFieldInvalid('admin_password_confirmation')"
              [class.focus:border-primary]="!isFieldInvalid('admin_password_confirmation')"
              [class.focus:ring-[3px]]="!isFieldInvalid('admin_password_confirmation')"
              [class.focus:ring-primary/25]="!isFieldInvalid('admin_password_confirmation')"
              [class.border-error]="isFieldInvalid('admin_password_confirmation')"
              [class.bg-error-light]="isFieldInvalid('admin_password_confirmation')"
              [class.focus:ring-[3px]]="isFieldInvalid('admin_password_confirmation')"
              [class.focus:ring-error/25]="isFieldInvalid('admin_password_confirmation')"
              autocomplete="new-password"
            />
          </div>
        </div>

        <button 
          type="submit" 
          class="w-full bg-primary text-text-inverse font-sans text-[14px] px-[16px] py-[8px] h-[40px] rounded-md transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-6 cursor-pointer" 
          [disabled]="isLoading() || registerForm.invalid"
        >
          @if (isLoading()) {
            <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
            Cr\xE9ation en cours...
          } @else {
            Cr\xE9er l'entreprise
          }
        </button>
      </form>
    }
    
    <div class="flex justify-center mt-6">
      <a routerLink="/login" class="font-sans text-[14px] font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">Vous avez d\xE9j\xE0 un compte ? Connectez-vous</a>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/auth/register-company/register-company.component.scss */\n/*# sourceMappingURL=register-company.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterCompanyComponent, { className: "RegisterCompanyComponent", filePath: "src/app/features/auth/register-company/register-company.component.ts", lineNumber: 32 });
})();
export {
  RegisterCompanyComponent
};
//# sourceMappingURL=chunk-WE5RQNSD.js.map
