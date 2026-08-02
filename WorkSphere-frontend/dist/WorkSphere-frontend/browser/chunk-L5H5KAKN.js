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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZST2RCVM.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "circle", 25)(3, "line", 26)(4, "line", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "circle", 25)(3, "line", 26)(4, "line", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Veuillez saisir une adresse email valide. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "circle", 25)(3, "line", 26)(4, "line", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Le mot de passe est requis. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
    \u0275\u0275text(1, " Connexion en cours... ");
  }
}
function LoginComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Se connecter ");
  }
}
var LoginComponent = class _LoginComponent {
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
  loginForm = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  /**
   * Soumet le formulaire d'authentification
   */
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set(null);
    const { email, password } = this.loginForm.getRawValue();
    this.authService.login(email, password).subscribe({
      next: () => {
        this.isLoading.set(false);
        const user = this.authService.currentUser();
        const role = user?.role || "";
        const redirectPath = this.authService.getRedirectPathForRole(role);
        this.router.navigate([redirectPath]);
      },
      error: (err) => {
        this.isLoading.set(false);
        if (err.status === 401) {
          this.errorMessage.set("Identifiants invalides.");
        } else if (err.status === 403) {
          const apiMessage = err.error?.message || "Votre compte n'est pas encore activ\xE9.";
          this.errorMessage.set(apiMessage);
        } else {
          this.errorMessage.set("Une erreur inattendue est survenue. Veuillez r\xE9essayer.");
        }
      }
    });
  }
  /**
   * Vérifie si un champ est invalide pour afficher les messages d'erreur.
   * @param fieldName Nom du champ à vérifier
   * @returns true si le champ est invalide et a été touché
   */
  isFieldInvalid(fieldName) {
    const control = this.loginForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 34, vars: 38, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "p-6", "bg-background"], [1, "bg-surface", "border", "border-border", "shadow-sm", "rounded-md", "p-[24px]", "w-full", "max-w-md", "transition-colors", "hover:bg-surface-raised"], [1, "text-center", "mb-8", "flex", "flex-col", "items-center"], [1, "w-12", "h-12", "bg-primary-50", "text-primary", "rounded-md", "flex", "items-center", "justify-center", "mb-4", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M22 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "font-heading", "text-[24px]", "font-bold", "leading-[32px]", "text-text-heading"], [1, "font-sans", "text-[14px]", "leading-[22px]", "text-text-secondary", "mt-1"], [1, "bg-error-light", "border", "border-error", "rounded-md", "p-[16px]", "mb-6", "flex", "items-start", "gap-2.5"], [1, "flex", "flex-col", "gap-5", 3, "ngSubmit", "formGroup"], [1, "flex", "flex-col"], ["for", "email", 1, "font-sans", "font-medium", "text-[14px]", "text-primary", "mb-[4px]"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "nom@entreprise.com", "autocomplete", "email", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], [1, "font-sans", "font-normal", "text-[12px]", "text-error", "mt-[4px]", "flex", "items-center", "gap-1"], [1, "flex", "justify-between", "items-center", "mb-[4px]"], ["for", "password", 1, "font-sans", "font-medium", "text-[14px]", "text-primary"], ["routerLink", "/forgot-password", 1, "font-sans", "text-[12px]", "font-medium", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "w-full", "h-[40px]", "px-[12px]", "py-[8px]", "bg-surface", "border", "rounded-md", "shadow-none", "font-sans", "text-[14px]", "text-text", "transition-colors", "placeholder:text-text-muted", "focus:outline-none", "disabled:border-border", "disabled:bg-surface-raised", "disabled:cursor-not-allowed"], ["type", "submit", 1, "w-full", "bg-primary", "text-text-inverse", "font-sans", "text-[14px]", "px-[16px]", "py-[8px]", "h-[40px]", "rounded-md", "transition-colors", "hover:bg-primary-hover", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "justify-center", "items-center", "gap-2", "mt-2", "cursor-pointer", 3, "disabled"], [1, "flex", "justify-center", "mt-6"], ["routerLink", "/register-company", 1, "font-sans", "text-[14px]", "font-medium", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-error", "shrink-0", "mt-0.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "font-sans", "text-[14px]", "font-medium", "text-error-dark"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3", "h-3"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "circle", 6)(7, "path", 7)(8, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "h1", 9);
      \u0275\u0275text(10, "WorkSphere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 10);
      \u0275\u0275text(12, "Plateforme RH SaaS Intelligente");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, LoginComponent_Conditional_13_Template, 7, 1, "div", 11);
      \u0275\u0275elementStart(14, "form", 12);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(15, "div", 13)(16, "label", 14);
      \u0275\u0275text(17, "Adresse Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 15);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(19, LoginComponent_Conditional_19_Template, 6, 0, "span", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 17)(22, "label", 18);
      \u0275\u0275text(23, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 19);
      \u0275\u0275text(25, " Mot de passe oubli\xE9 ? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "input", 20);
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(27, LoginComponent_Conditional_27_Template, 6, 0, "span", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 21);
      \u0275\u0275conditionalCreate(29, LoginComponent_Conditional_29_Template, 2, 0)(30, LoginComponent_Conditional_30_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 22)(32, "a", 23);
      \u0275\u0275text(33, "Cr\xE9er un compte entreprise");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.errorMessage() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-border", !ctx.isFieldInvalid("email"))("hover:border-primary-light", !ctx.isFieldInvalid("email"))("focus:border-primary", !ctx.isFieldInvalid("email"))("focus:ring-[3px]", true)("focus:ring-primary/25", !ctx.isFieldInvalid("email"))("border-error", ctx.isFieldInvalid("email"))("bg-error-light", ctx.isFieldInvalid("email"))("focus:ring-error/25", ctx.isFieldInvalid("email"));
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("email") ? 19 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("border-border", !ctx.isFieldInvalid("password"))("hover:border-primary-light", !ctx.isFieldInvalid("password"))("focus:border-primary", !ctx.isFieldInvalid("password"))("focus:ring-[3px]", true)("focus:ring-primary/25", !ctx.isFieldInvalid("password"))("border-error", ctx.isFieldInvalid("password"))("bg-error-light", ctx.isFieldInvalid("password"))("focus:ring-error/25", ctx.isFieldInvalid("password"));
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isFieldInvalid("password") ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading() || ctx.loginForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 29 : 30);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [ReactiveFormsModule, RouterModule], template: `<!-- \u2550\u2550\u2550 Page de Connexion \u2550\u2550\u2550 -->
<div class="min-h-screen flex items-center justify-center p-6 bg-background">
  <div class="bg-surface border border-border shadow-sm rounded-md p-[24px] w-full max-w-md transition-colors hover:bg-surface-raised">
    <div class="text-center mb-8 flex flex-col items-center">
      <div class="w-12 h-12 bg-primary-50 text-primary rounded-md flex items-center justify-center mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <!-- Hero : logo + titre WorkSphere -->
      <h1 class="font-heading text-[24px] font-bold leading-[32px] text-text-heading">WorkSphere</h1>
      <p class="font-sans text-[14px] leading-[22px] text-text-secondary mt-1">Plateforme RH SaaS Intelligente</p>
    </div>

    <!-- Affichage des erreurs API (identifiants invalides, compte inactif...) -->
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

    <!-- \u2550\u2550\u2550 Formulaire de Connexion \u2550\u2550\u2550 -->
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
      <!-- Champ Email -->
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
          [class.focus:ring-[3px]]="true"
          [class.focus:ring-primary/25]="!isFieldInvalid('email')"
          [class.border-error]="isFieldInvalid('email')"
          [class.bg-error-light]="isFieldInvalid('email')"
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

      <!-- Champ Mot de Passe -->
      <div class="flex flex-col">
        <div class="flex justify-between items-center mb-[4px]">
          <label for="password" class="font-sans font-medium text-[14px] text-primary">Mot de passe</label>
          <a routerLink="/forgot-password" class="font-sans text-[12px] font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
            Mot de passe oubli\xE9 ?
          </a>
        </div>
        <input
          id="password"
          type="password"
          formControlName="password"
          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
          class="w-full h-[40px] px-[12px] py-[8px] bg-surface border rounded-md shadow-none font-sans text-[14px] text-text transition-colors placeholder:text-text-muted focus:outline-none disabled:border-border disabled:bg-surface-raised disabled:cursor-not-allowed"
          [class.border-border]="!isFieldInvalid('password')"
          [class.hover:border-primary-light]="!isFieldInvalid('password')"
          [class.focus:border-primary]="!isFieldInvalid('password')"
          [class.focus:ring-[3px]]="true"
          [class.focus:ring-primary/25]="!isFieldInvalid('password')"
          [class.border-error]="isFieldInvalid('password')"
          [class.bg-error-light]="isFieldInvalid('password')"
          [class.focus:ring-error/25]="isFieldInvalid('password')"
          autocomplete="current-password"
        />
        @if (isFieldInvalid('password')) {
          <span class="font-sans font-normal text-[12px] text-error mt-[4px] flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Le mot de passe est requis.
          </span>
        }
      </div>

      <!-- Bouton de soumission avec \xE9tat de chargement -->
      <button type="submit" class="w-full bg-primary text-text-inverse font-sans text-[14px] px-[16px] py-[8px] h-[40px] rounded-md transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2 cursor-pointer" [disabled]="isLoading() || loginForm.invalid">
        @if (isLoading()) {
          <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
          Connexion en cours...
        } @else {
          Se connecter
        }
      </button>
    </form>
    
    <!-- Lien cr\xE9ation de compte entreprise -->
    <div class="flex justify-center mt-6">
      <a routerLink="/register-company" class="font-sans text-[14px] font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">Cr\xE9er un compte entreprise</a>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/auth/login/login.component.scss */\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 20 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-L5H5KAKN.js.map
