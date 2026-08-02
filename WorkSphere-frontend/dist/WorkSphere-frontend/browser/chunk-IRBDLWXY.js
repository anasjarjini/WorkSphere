import {
  CompanyService
} from "./chunk-5T2LCEU4.js";
import {
  ImageUrlService
} from "./chunk-44FZWU4S.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7RQSPZX3.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZST2RCVM.js";

// src/app/shared/components/image-uploader/image-uploader.component.ts
function ImageUploaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rounded-lg", ctx_r2.shape() === "square")("rounded-full", ctx_r2.shape() === "circle");
    \u0275\u0275domProperty("src", ctx_r2.previewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ImageUploaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 6);
    \u0275\u0275domElementStart(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, " Changer l'image ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rounded-lg", ctx_r2.shape() === "square")("rounded-full", ctx_r2.shape() === "circle");
    \u0275\u0275domProperty("src", ctx_r2.currentImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ImageUploaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 9);
    \u0275\u0275domElement(1, "rect", 10)(2, "circle", 11)(3, "polyline", 12);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(4, "div", 13)(5, "p", 14);
    \u0275\u0275text(6, "Cliquez ou glissez une image");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 15);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("JPG, JPEG ou PNG \u2014 max ", ctx_r2.maxSizeMB(), " Mo");
  }
}
function ImageUploaderComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 16);
    \u0275\u0275domElement(2, "circle", 17)(3, "line", 18)(4, "line", 19);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
var ImageUploaderComponent = class _ImageUploaderComponent {
  currentImageUrl = input(
    null,
    ...ngDevMode ? [{ debugName: "currentImageUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shape = input(
    "square",
    ...ngDevMode ? [{ debugName: "shape" }] : (
      /* istanbul ignore next */
      []
    )
  );
  maxSizeMB = input(
    2,
    ...ngDevMode ? [{ debugName: "maxSizeMB" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fileSelected = output();
  isDragOver = signal(
    false,
    ...ngDevMode ? [{ debugName: "isDragOver" }] : (
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
  previewUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "previewUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Stocke l'URL de l'objet pour la nettoyer dans OnDestroy */
  currentObjectUrl = null;
  constructor() {
    effect(() => {
      if (this.currentImageUrl() && this.previewUrl()) {
        this.clearPreview();
      }
    });
  }
  maxSizeBytes() {
    return this.maxSizeMB() * 1024 * 1024;
  }
  /**
   * Nettoie l'URL de l'objet pour éviter les fuites mémoire.
   */
  ngOnDestroy() {
    this.revokeObjectUrl();
  }
  clearPreview() {
    this.revokeObjectUrl();
    this.previewUrl.set(null);
  }
  revokeObjectUrl() {
    if (this.currentObjectUrl) {
      URL.revokeObjectURL(this.currentObjectUrl);
      this.currentObjectUrl = null;
    }
  }
  /**
   * Gère le survol d'un élément glissé (drag over) pour l'effet visuel.
   */
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(true);
  }
  onDragLeave() {
    this.isDragOver.set(false);
  }
  /**
   * Gère le dépôt d'un fichier par glisser-déposer.
   */
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.validateAndEmit(file);
    }
  }
  /**
   * Gère la sélection d'un fichier via le bouton de l'input file.
   */
  onFileSelected(event) {
    const input2 = event.target;
    const file = input2.files?.[0];
    if (file) {
      this.validateAndEmit(file);
    }
    input2.value = "";
  }
  /**
   * Valide le format MIME et la taille du fichier, puis crée une preview locale et émet le fichier.
   * @param file Fichier sélectionné par l'utilisateur
   */
  validateAndEmit(file) {
    this.errorMessage.set(null);
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      this.errorMessage.set("Format non accept\xE9. Utilisez JPG, JPEG ou PNG.");
      return;
    }
    if (file.size > this.maxSizeBytes()) {
      this.errorMessage.set(`Le fichier ne peut pas d\xE9passer ${this.maxSizeMB()} Mo.`);
      return;
    }
    this.revokeObjectUrl();
    this.currentObjectUrl = URL.createObjectURL(file);
    this.previewUrl.set(this.currentObjectUrl);
    this.fileSelected.emit(file);
  }
  static \u0275fac = function ImageUploaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageUploaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageUploaderComponent, selectors: [["app-image-uploader"]], inputs: { currentImageUrl: [1, "currentImageUrl"], shape: [1, "shape"], maxSizeMB: [1, "maxSizeMB"] }, outputs: { fileSelected: "fileSelected" }, decls: 7, vars: 16, consts: [["fileInput", ""], ["role", "button", "tabindex", "0", 1, "relative", "border-2", "border-dashed", "rounded-lg", "p-6", "flex", "flex-col", "items-center", "justify-center", "gap-3", "transition-all", "duration-200", "cursor-pointer", "focus-visible:outline-none", "focus-visible:ring-[3px]", "focus-visible:ring-primary/25", 3, "keydown.escape", "click", "keydown.enter", "keydown.space", "dragover", "dragleave", "drop"], ["type", "file", "accept", ".jpg,.jpeg,.png", 1, "hidden", 3, "change"], ["alt", "", 1, "w-full", "h-full", "object-cover", 3, "src", "rounded-lg", "rounded-full"], [1, "flex", "items-center", "gap-1.5", "mt-2"], ["alt", "", 1, "w-full", "h-full", "object-cover", 3, "src"], ["alt", "Image actuelle", 1, "w-full", "h-full", "object-cover", "opacity-60", 3, "src"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "bg-surface/90", "text-text-secondary", "text-sm", "font-medium", "px-4", "py-2", "rounded-md", "shadow-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "w-10", "h-10", "text-text-muted"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], [1, "text-center"], [1, "text-sm", "font-medium", "text-text-secondary"], [1, "text-xs", "text-text-muted", "mt-0.5"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-error", "shrink-0"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-xs", "font-medium", "text-error-dark"]], template: function ImageUploaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "div", 1);
      \u0275\u0275domListener("keydown.escape", function ImageUploaderComponent_Template_div_keydown_escape_0_listener() {
        return ctx.isDragOver.set(false);
      })("click", function ImageUploaderComponent_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(fileInput_r2.click());
      })("keydown.enter", function ImageUploaderComponent_Template_div_keydown_enter_0_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(fileInput_r2.click());
      })("keydown.space", function ImageUploaderComponent_Template_div_keydown_space_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(2);
        fileInput_r2.click();
        return \u0275\u0275resetView($event.preventDefault());
      })("dragover", function ImageUploaderComponent_Template_div_dragover_0_listener($event) {
        return ctx.onDragOver($event);
      })("dragleave", function ImageUploaderComponent_Template_div_dragleave_0_listener() {
        return ctx.onDragLeave();
      })("drop", function ImageUploaderComponent_Template_div_drop_0_listener($event) {
        return ctx.onDrop($event);
      });
      \u0275\u0275domElementStart(1, "input", 2, 0);
      \u0275\u0275domListener("change", function ImageUploaderComponent_Template_input_change_1_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(3, ImageUploaderComponent_Conditional_3_Template, 1, 5, "img", 3)(4, ImageUploaderComponent_Conditional_4_Template, 4, 5)(5, ImageUploaderComponent_Conditional_5_Template, 9, 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, ImageUploaderComponent_Conditional_6_Template, 7, 1, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275classProp("border-primary", !ctx.isDragOver())("border-accent", ctx.isDragOver())("bg-primary-50", !ctx.isDragOver() && !ctx.previewUrl())("bg-accent-light", ctx.isDragOver())("rounded-full", ctx.shape() === "circle")("w-40", ctx.shape() === "circle")("h-40", ctx.shape() === "circle");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.previewUrl() ? 3 : ctx.currentImageUrl() ? 4 : 5);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMessage() ? 6 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageUploaderComponent, [{
    type: Component,
    args: [{ selector: "app-image-uploader", standalone: true, template: `<div
  class="relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-3 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25"
  [class.border-primary]="!isDragOver()"
  [class.border-accent]="isDragOver()"
  [class.bg-primary-50]="!isDragOver() && !previewUrl()"
  [class.bg-accent-light]="isDragOver()"
  [class.rounded-full]="shape() === 'circle'"
  [class.w-40]="shape() === 'circle'"
  [class.h-40]="shape() === 'circle'"
  role="button"
  tabindex="0"
  (keydown.escape)="isDragOver.set(false)"
  (click)="fileInput.click()"
  (keydown.enter)="fileInput.click()"
  (keydown.space)="fileInput.click(); $event.preventDefault()"
  (dragover)="onDragOver($event)"
  (dragleave)="onDragLeave()"
  (drop)="onDrop($event)"
>
  <input
    #fileInput
    type="file"
    accept=".jpg,.jpeg,.png"
    class="hidden"
    (change)="onFileSelected($event)"
  />

  @if (previewUrl()) {
    <img
      [src]="previewUrl()"
      alt=""
      class="w-full h-full object-cover"
      [class.rounded-lg]="shape() === 'square'"
      [class.rounded-full]="shape() === 'circle'"
    />
  } @else if (currentImageUrl()) {
    <img
      [src]="currentImageUrl()"
      alt="Image actuelle"
      class="w-full h-full object-cover opacity-60"
      [class.rounded-lg]="shape() === 'square'"
      [class.rounded-full]="shape() === 'circle'"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="bg-surface/90 text-text-secondary text-sm font-medium px-4 py-2 rounded-md shadow-sm">
        Changer l'image
      </span>
    </div>
  } @else {
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
    <div class="text-center">
      <p class="text-sm font-medium text-text-secondary">Cliquez ou glissez une image</p>
      <p class="text-xs text-text-muted mt-0.5">JPG, JPEG ou PNG \u2014 max {{ maxSizeMB() }} Mo</p>
    </div>
  }
</div>

@if (errorMessage()) {
  <div class="flex items-center gap-1.5 mt-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-error shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
    <span class="text-xs font-medium text-error-dark">{{ errorMessage() }}</span>
  </div>
}` }]
  }], () => [], { currentImageUrl: [{ type: Input, args: [{ isSignal: true, alias: "currentImageUrl", required: false }] }], shape: [{ type: Input, args: [{ isSignal: true, alias: "shape", required: false }] }], maxSizeMB: [{ type: Input, args: [{ isSignal: true, alias: "maxSizeMB", required: false }] }], fileSelected: [{ type: Output, args: ["fileSelected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageUploaderComponent, { className: "ImageUploaderComponent", filePath: "src/app/shared/components/image-uploader/image-uploader.component.ts", lineNumber: 13 });
})();

// src/app/features/admin/company-settings/company-settings.component.ts
function CompanySettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275element(2, "span", 6);
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4, "Chargement de votre espace...");
    \u0275\u0275elementEnd()()();
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "span", 58);
    \u0275\u0275text(2, " Mise \xE0 jour... ");
    \u0275\u0275elementEnd();
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "polyline", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const logoSuccess_r3 = \u0275\u0275readContextLet(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", logoSuccess_r3, " ");
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "circle", 61)(3, "line", 62)(4, "line", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const logoError_r4 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", logoError_r4, " ");
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "polyline", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const formSuccess_r5 = \u0275\u0275readContextLet(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(formSuccess_r5);
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "circle", 61)(3, "line", 62)(4, "line", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const formError_r6 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(formError_r6);
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "circle", 61)(3, "line", 62)(4, "line", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Le nom de l'entreprise est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getServerError("name"));
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "circle", 61)(3, "line", 62)(4, "line", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Email invalide. ");
    \u0275\u0275elementEnd();
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 66);
    \u0275\u0275text(1, " Sauvegarde... ");
  }
}
function CompanySettingsComponent_Conditional_15_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 68)(2, "polyline", 69)(3, "polyline", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Enregistrer les modifications ");
  }
}
function CompanySettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "section", 9)(2, "div", 10)(3, "div", 11)(4, "h2", 12);
    \u0275\u0275text(5, "Logo de l'entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 3);
    \u0275\u0275text(7, "Ce logo appara\xEEtra de mani\xE8re officielle sur vos emails, documents et l'interface WorkSphere.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14)(10, "app-image-uploader", 15);
    \u0275\u0275listener("fileSelected", function CompanySettingsComponent_Conditional_15_Template_app_image_uploader_fileSelected_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, CompanySettingsComponent_Conditional_15_Conditional_11_Template, 3, 0, "div", 16);
    \u0275\u0275conditionalCreate(12, CompanySettingsComponent_Conditional_15_Conditional_12_Template, 4, 1, "div", 17);
    \u0275\u0275conditionalCreate(13, CompanySettingsComponent_Conditional_15_Conditional_13_Template, 6, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 19)(15, "p", 20)(16, "span", 21);
    \u0275\u0275text(17, "Contraintes :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Formats accept\xE9s : JPG, JPEG, PNG. Taille maximale : 2 Mo. Privil\xE9giez un format carr\xE9 pour un meilleur rendu. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "section", 22)(20, "div", 23)(21, "div", 24)(22, "div")(23, "h2", 12);
    \u0275\u0275text(24, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 3);
    \u0275\u0275text(26, "Mettez \xE0 jour les coordonn\xE9es et d\xE9tails l\xE9gaux de votre entreprise.");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 25);
    \u0275\u0275element(28, "rect", 26)(29, "line", 27)(30, "line", 28)(31, "line", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(32, CompanySettingsComponent_Conditional_15_Conditional_32_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(33, CompanySettingsComponent_Conditional_15_Conditional_33_Template, 7, 1, "div", 31);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "form", 32);
    \u0275\u0275listener("ngSubmit", function CompanySettingsComponent_Conditional_15_Template_form_ngSubmit_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(35, "div", 33)(36, "label", 34);
    \u0275\u0275text(37, "Slug de l'espace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 35)(39, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 37);
    \u0275\u0275element(41, "rect", 38)(42, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "span", 40);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "p", 41);
    \u0275\u0275text(46, "Identifiant unique fig\xE9.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 33)(48, "label", 34);
    \u0275\u0275text(49, "Nom de l'entreprise ");
    \u0275\u0275elementStart(50, "span", 42);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 35);
    \u0275\u0275element(53, "input", 43);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(54, CompanySettingsComponent_Conditional_15_Conditional_54_Template, 6, 0, "span", 44);
    \u0275\u0275conditionalCreate(55, CompanySettingsComponent_Conditional_15_Conditional_55_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 45)(57, "div")(58, "label", 46);
    \u0275\u0275text(59, "Email de contact");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "input", 47);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(61, CompanySettingsComponent_Conditional_15_Conditional_61_Template, 6, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div")(63, "label", 46);
    \u0275\u0275text(64, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 48);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div")(67, "label", 46);
    \u0275\u0275text(68, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "textarea", 49);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 50)(71, "label", 46);
    \u0275\u0275text(72, "Politique de cong\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 51);
    \u0275\u0275text(74, "Nombre de jours de cong\xE9 pay\xE9 allou\xE9s \xE0 chaque employ\xE9 par an (utilis\xE9 \xE0 l'initialisation des soldes).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 52);
    \u0275\u0275element(76, "input", 53);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(77, "span", 54);
    \u0275\u0275text(78, "jours / an");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(79, "div", 55)(80, "button", 56);
    \u0275\u0275listener("click", function CompanySettingsComponent_Conditional_15_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCompany());
    });
    \u0275\u0275text(81, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 57);
    \u0275\u0275listener("click", function CompanySettingsComponent_Conditional_15_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275conditionalCreate(83, CompanySettingsComponent_Conditional_15_Conditional_83_Template, 2, 0)(84, CompanySettingsComponent_Conditional_15_Conditional_84_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const currentCompany_r7 = \u0275\u0275readContextLet(0);
    const logoUploading_r8 = \u0275\u0275readContextLet(1);
    const logoSuccess_r3 = \u0275\u0275readContextLet(2);
    const logoError_r4 = \u0275\u0275readContextLet(3);
    const formSubmitting_r9 = \u0275\u0275readContextLet(4);
    const formSuccess_r5 = \u0275\u0275readContextLet(5);
    const formError_r6 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance(10);
    \u0275\u0275property("currentImageUrl", ctx_r1.resolvedLogoUrl())("maxSizeMB", 2);
    \u0275\u0275advance();
    \u0275\u0275conditional(logoUploading_r8 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logoSuccess_r3 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(logoError_r4 ? 13 : -1);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(formSuccess_r5 ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(formError_r6 ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.companyForm);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(currentCompany_r7?.slug ?? "");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("border-border", !ctx_r1.isFieldInvalid("name"))("border-error", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("name") && !ctx_r1.getServerError("name") ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getServerError("name") ? 55 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-border", !ctx_r1.isFieldInvalid("email"))("border-error", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldInvalid("email") ? 61 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", formSubmitting_r9 || ctx_r1.companyForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(formSubmitting_r9 ? 83 : 84);
  }
}
var CompanySettingsComponent = class _CompanySettingsComponent {
  fb = inject(FormBuilder);
  companyService = inject(CompanyService);
  imageUrlService = inject(ImageUrlService);
  company = signal(
    null,
    ...ngDevMode ? [{ debugName: "company" }] : (
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
  isLogoUploading = signal(
    false,
    ...ngDevMode ? [{ debugName: "isLogoUploading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  logoSuccessMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "logoSuccessMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  logoErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "logoErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isFormSubmitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "isFormSubmitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formSuccessMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "formSuccessMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "formErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resolvedLogoUrl = computed(
    () => {
      const url = this.company()?.logo_url ?? null;
      if (!url)
        return null;
      return this.imageUrlService.resolve(url);
    },
    ...ngDevMode ? [{ debugName: "resolvedLogoUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  companyForm = this.fb.nonNullable.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.email]],
    phone: [""],
    address: [""],
    default_annual_leave_days: [18, [Validators.required, Validators.min(0), Validators.max(365)]]
  });
  /**
   * Charge les informations de l'entreprise au démarrage.
   */
  ngOnInit() {
    this.loadCompany();
  }
  loadCompany() {
    this.isLoading.set(true);
    this.companyService.getCompany().subscribe({
      next: (response) => {
        this.company.set(response.company);
        this.companyForm.patchValue({
          name: response.company.name,
          email: response.company.email ?? "",
          phone: response.company.phone ?? "",
          address: response.company.address ?? "",
          default_annual_leave_days: response.company.default_annual_leave_days ?? 18
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
        this.formErrorMessage.set("Impossible de charger les informations de l'entreprise.");
      }
    });
  }
  /**
   * Gère la sélection d'un nouveau logo et appelle l'API d'upload.
   * @param file Fichier image sélectionné
   */
  onLogoSelected(file) {
    this.isLogoUploading.set(true);
    this.logoSuccessMessage.set(null);
    this.logoErrorMessage.set(null);
    this.companyService.uploadLogo(file).subscribe({
      next: (response) => {
        this.isLogoUploading.set(false);
        this.logoSuccessMessage.set("Logo mis \xE0 jour avec succ\xE8s.");
        const updated = __spreadProps(__spreadValues({}, this.company() ?? {}), { logo_url: response.logo_url });
        this.company.set(updated);
        this.companyService.setCompany(updated);
      },
      error: (err) => {
        this.isLogoUploading.set(false);
        if (err.status === 422 && err.error?.errors?.logo) {
          this.logoErrorMessage.set(err.error.errors.logo[0]);
        } else {
          this.logoErrorMessage.set("Une erreur est survenue lors de l'upload du logo.");
        }
      }
    });
  }
  /**
   * Soumet le formulaire de mise à jour des informations de l'entreprise.
   */
  onSubmit() {
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }
    this.isFormSubmitting.set(true);
    this.formSuccessMessage.set(null);
    this.formErrorMessage.set(null);
    const payload = this.companyForm.getRawValue();
    this.companyService.updateCompany(payload).subscribe({
      next: (response) => {
        this.isFormSubmitting.set(false);
        this.company.set(response.company);
        this.formSuccessMessage.set("Informations mises \xE0 jour avec succ\xE8s.");
      },
      error: (err) => {
        this.isFormSubmitting.set(false);
        if (err.status === 422 && err.error?.errors) {
          const apiErrors = err.error.errors;
          let firstMessage = null;
          Object.keys(apiErrors).forEach((field) => {
            const control = this.companyForm.get(field);
            const messages = apiErrors[field];
            if (messages && messages.length > 0) {
              if (!firstMessage)
                firstMessage = messages[0];
              if (control) {
                control.setErrors({ serverError: messages[0] });
                control.markAsTouched();
              }
            }
          });
          this.formErrorMessage.set(firstMessage || "Veuillez corriger les erreurs dans le formulaire.");
        } else {
          this.formErrorMessage.set("Une erreur est survenue. Veuillez r\xE9essayer.");
        }
      }
    });
  }
  /**
   * Vérifie si un champ du formulaire est invalide.
   */
  isFieldInvalid(fieldName) {
    const control = this.companyForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
  /**
   * Récupère l'erreur serveur d'un champ (mapping 422).
   */
  getServerError(fieldName) {
    const control = this.companyForm.get(fieldName);
    return control?.getError("serverError") || null;
  }
  static \u0275fac = function CompanySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanySettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanySettingsComponent, selectors: [["app-company-settings"]], decls: 16, vars: 8, consts: [[1, "min-h-screen", "bg-background", "py-8", "px-6"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col", "gap-6"], [1, "font-heading", "text-2xl", "font-bold", "text-text-heading"], [1, "text-sm", "text-text-secondary", "mt-1"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-16", "flex", "items-center", "justify-center", "shadow-sm"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "w-10", "h-10", "border-3", "border-primary/20", "border-t-primary", "rounded-full", "animate-spin", "inline-block"], [1, "text-sm", "font-medium", "text-text-muted", "tracking-wide", "animate-pulse"], [1, "grid", "grid-cols-12", "gap-6"], [1, "col-span-12", "lg:col-span-4", "flex", "flex-col"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "flex", "flex-col", "h-full", "shadow-sm"], [1, "mb-4"], [1, "font-heading", "text-lg", "font-bold", "text-text-heading"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "py-6", "bg-background-alt/40", "border-2", "border-dashed", "border-border", "rounded-lg", "mb-4"], [1, "w-32", "h-32", "bg-surface", "rounded-xl", "shadow-sm", "overflow-hidden", "border", "border-border/60"], ["shape", "square", 3, "fileSelected", "currentImageUrl", "maxSizeMB"], [1, "mt-3", "inline-flex", "items-center", "gap-2", "px-3", "py-1.5", "rounded-lg", "bg-primary/5", "text-xs", "font-medium", "text-primary", "border", "border-primary/10"], [1, "mt-3", "bg-success-light/30", "border", "border-success/30", "rounded-lg", "px-3", "py-1.5", "flex", "items-center", "gap-2", "text-success-dark", "text-xs", "font-semibold"], [1, "mt-3", "bg-error-light/30", "border", "border-error/30", "rounded-lg", "px-3", "py-1.5", "flex", "items-center", "gap-2", "text-error-dark", "text-xs", "font-semibold"], [1, "bg-primary/5", "p-3", "rounded-lg"], [1, "text-xs", "text-text-secondary", "leading-relaxed"], [1, "font-bold", "text-primary"], [1, "col-span-12", "lg:col-span-8"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6", "h-full", "shadow-sm"], [1, "mb-6", "flex", "items-start", "justify-between"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-8", "h-8", "text-primary/60"], ["x", "4", "y", "2", "width", "16", "height", "20", "rx", "2", "ry", "2"], ["x1", "9", "y1", "6", "x2", "15", "y2", "6"], ["x1", "9", "y1", "10", "x2", "15", "y2", "10"], ["x1", "9", "y1", "14", "x2", "15", "y2", "14"], [1, "bg-success-light/30", "border", "border-success/30", "rounded-xl", "p-4", "mb-6", "flex", "items-center", "gap-3", "text-success-dark"], [1, "bg-error-light/30", "border", "border-error/30", "rounded-xl", "p-4", "mb-6", "flex", "items-center", "gap-3", "text-error-dark"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-3", "items-center"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-text-muted", "md:col-span-1"], [1, "md:col-span-3"], [1, "flex", "items-center", "gap-2", "px-3.5", "py-2.5", "bg-background-alt/60", "border", "border-border/60", "rounded-lg", "cursor-not-allowed"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-text-muted", "shrink-0"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "text-sm", "text-text-muted/70"], [1, "text-xs", "text-text-muted/60", "mt-1"], [1, "text-error"], ["type", "text", "formControlName", "name", "placeholder", "Ex: Tech Innovations", 1, "w-full", "px-3.5", "py-2.5", "bg-surface-bright", "border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted/50", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all"], [1, "text-xs", "font-semibold", "text-error-dark", "mt-1", "flex", "items-center", "gap-1"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-text-muted"], ["type", "email", "formControlName", "email", "placeholder", "contact@entreprise.com", 1, "w-full", "px-3.5", "py-2.5", "bg-surface-bright", "border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted/50", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "mt-1.5"], ["type", "tel", "formControlName", "phone", "placeholder", "+212 5XX-XXXXXX", 1, "w-full", "px-3.5", "py-2.5", "bg-surface-bright", "border", "border-border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted/50", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "mt-1.5"], ["formControlName", "address", "placeholder", "Casablanca, Maroc", "rows", "3", 1, "w-full", "px-3.5", "py-2.5", "bg-surface-bright", "border", "border-border", "rounded-lg", "text-sm", "text-text", "placeholder:text-text-muted/50", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all", "resize-none", "mt-1.5"], [1, "rounded-xl", "border", "border-border", "bg-surface-bright/50", "p-4", "mt-4"], [1, "text-xs", "text-text-muted", "mt-1"], [1, "flex", "items-center", "gap-3", "mt-3"], ["type", "number", "min", "0", "max", "365", "formControlName", "default_annual_leave_days", 1, "w-28", "px-3.5", "py-2.5", "bg-surface-bright", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "outline-none", "transition-all"], [1, "text-sm", "text-text-muted"], [1, "flex", "items-center", "justify-end", "gap-3", "border-t", "border-border", "pt-6"], ["type", "button", 1, "px-5", "py-2.5", "text-sm", "font-semibold", "text-text-secondary", "hover:bg-background-alt", "rounded-lg", "transition-colors", "cursor-pointer", "active:scale-95", 3, "click"], ["type", "submit", 1, "bg-primary", "text-text-inverse", "px-6", "py-2.5", "rounded-lg", "text-sm", "font-bold", "shadow-sm", "hover:bg-primary-hover", "hover:shadow-md", "transition-all", "active:scale-[0.98]", "cursor-pointer", "disabled:opacity-40", "disabled:cursor-not-allowed", "disabled:scale-100", "flex", "items-center", "gap-2", 3, "click", "disabled"], [1, "w-3.5", "h-3.5", "border-2", "border-primary/20", "border-t-primary", "rounded-full", "animate-spin", "inline-block"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5"], ["points", "20 6 9 17 4 12"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "shrink-0"], [1, "text-sm", "font-semibold"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["d", "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"]], template: function CompanySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275declareLet(0)(1)(2)(3)(4)(5)(6);
      \u0275\u0275elementStart(7, "div", 0)(8, "div", 1)(9, "div")(10, "h1", 2);
      \u0275\u0275text(11, "Param\xE8tres entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 3);
      \u0275\u0275text(13, "G\xE9rez l'identit\xE9 visuelle et les informations publiques de votre structure.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, CompanySettingsComponent_Conditional_14_Template, 5, 0, "div", 4)(15, CompanySettingsComponent_Conditional_15_Template, 85, 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const currentCompany_r10 = \u0275\u0275storeLet(ctx.company());
      const loadingState_r11 = ctx.isLoading() && !currentCompany_r10;
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.isLogoUploading());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.logoSuccessMessage());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.logoErrorMessage());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.isFormSubmitting());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.formSuccessMessage());
      \u0275\u0275advance();
      \u0275\u0275storeLet(ctx.formErrorMessage());
      \u0275\u0275advance(8);
      \u0275\u0275conditional(loadingState_r11 ? 14 : 15);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, ImageUploaderComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanySettingsComponent, [{
    type: Component,
    args: [{ selector: "app-company-settings", standalone: true, imports: [ReactiveFormsModule, ImageUploaderComponent], template: `@let currentCompany = company();
@let loadingState = isLoading() && !currentCompany;
@let logoUploading = isLogoUploading();
@let logoSuccess = logoSuccessMessage();
@let logoError = logoErrorMessage();
@let formSubmitting = isFormSubmitting();
@let formSuccess = formSuccessMessage();
@let formError = formErrorMessage();

<div class="min-h-screen bg-background py-8 px-6">
  <div class="max-w-7xl mx-auto flex flex-col gap-6">

    <!-- Breadcrumbs -->
 

    <!-- Page Header -->
    <div>
      <h1 class="font-heading text-2xl font-bold text-text-heading">Param\xE8tres entreprise</h1>
      <p class="text-sm text-text-secondary mt-1">G\xE9rez l'identit\xE9 visuelle et les informations publiques de votre structure.</p>
    </div>

    @if (loadingState) {
      <!-- Loading -->
      <div class="bg-surface border border-border rounded-xl p-16 flex items-center justify-center shadow-sm">
        <div class="flex flex-col items-center gap-4">
          <span class="w-10 h-10 border-3 border-primary/20 border-t-primary rounded-full animate-spin inline-block"></span>
          <span class="text-sm font-medium text-text-muted tracking-wide animate-pulse">Chargement de votre espace...</span>
        </div>
      </div>
    } @else {
      <!-- Bento Layout -->
      <div class="grid grid-cols-12 gap-6">

        <!-- Logo Section -->
        <section class="col-span-12 lg:col-span-4 flex flex-col">
          <div class="bg-surface border border-border rounded-xl p-6 flex flex-col h-full shadow-sm">
            <div class="mb-4">
              <h2 class="font-heading text-lg font-bold text-text-heading">Logo de l'entreprise</h2>
              <p class="text-sm text-text-secondary mt-1">Ce logo appara\xEEtra de mani\xE8re officielle sur vos emails, documents et l'interface WorkSphere.</p>
            </div>

            <div class="flex-1 flex flex-col items-center justify-center py-6 bg-background-alt/40 border-2 border-dashed border-border rounded-lg mb-4">
              <div class="w-32 h-32 bg-surface rounded-xl shadow-sm overflow-hidden border border-border/60">
                <app-image-uploader
                  [currentImageUrl]="resolvedLogoUrl()"
                  shape="square"
                  [maxSizeMB]="2"
                  (fileSelected)="onLogoSelected($event)"
                />
              </div>
              @if (logoUploading) {
                <div class="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 text-xs font-medium text-primary border border-primary/10">
                  <span class="w-3.5 h-3.5 border-2 border-primary/20 border-t-primary rounded-full animate-spin inline-block"></span>
                  Mise \xE0 jour...
                </div>
              }
              @if (logoSuccess) {
                <div class="mt-3 bg-success-light/30 border border-success/30 rounded-lg px-3 py-1.5 flex items-center gap-2 text-success-dark text-xs font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ logoSuccess }}
                </div>
              }
              @if (logoError) {
                <div class="mt-3 bg-error-light/30 border border-error/30 rounded-lg px-3 py-1.5 flex items-center gap-2 text-error-dark text-xs font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {{ logoError }}
                </div>
              }
            </div>

            <div class="bg-primary/5 p-3 rounded-lg">
              <p class="text-xs text-text-secondary leading-relaxed">
                <span class="font-bold text-primary">Contraintes :</span> Formats accept\xE9s : JPG, JPEG, PNG. Taille maximale : 2 Mo. Privil\xE9giez un format carr\xE9 pour un meilleur rendu.
              </p>
            </div>
          </div>
        </section>

        <!-- General Infos Section -->
        <section class="col-span-12 lg:col-span-8">
          <div class="bg-surface border border-border rounded-xl p-6 h-full shadow-sm">
            <div class="mb-6 flex items-start justify-between">
              <div>
                <h2 class="font-heading text-lg font-bold text-text-heading">Informations g\xE9n\xE9rales</h2>
                <p class="text-sm text-text-secondary mt-1">Mettez \xE0 jour les coordonn\xE9es et d\xE9tails l\xE9gaux de votre entreprise.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-primary/60">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="6" x2="15" y2="6"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="15" y2="14"/>
              </svg>
            </div>

            @if (formSuccess) {
              <div class="bg-success-light/30 border border-success/30 rounded-xl p-4 mb-6 flex items-center gap-3 text-success-dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                <span class="text-sm font-semibold">{{ formSuccess }}</span>
              </div>
            }
            @if (formError) {
              <div class="bg-error-light/30 border border-error/30 rounded-xl p-4 mb-6 flex items-center gap-3 text-error-dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span class="text-sm font-semibold">{{ formError }}</span>
              </div>
            }

            <form [formGroup]="companyForm" (ngSubmit)="onSubmit()" class="space-y-5">

              <!-- Slug (Read-only) -->
              <div class="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                <label class="text-xs font-bold uppercase tracking-wider text-text-muted md:col-span-1">Slug de l'espace</label>
                <div class="md:col-span-3">
                  <div class="flex items-center gap-2 px-3.5 py-2.5 bg-background-alt/60 border border-border/60 rounded-lg cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-text-muted shrink-0"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span class="text-sm text-text-muted/70">{{ currentCompany?.slug ?? '' }}</span>
                  </div>
                  <p class="text-xs text-text-muted/60 mt-1">Identifiant unique fig\xE9.</p>
                </div>
              </div>

              <!-- Company Name -->
              <div class="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                <label class="text-xs font-bold uppercase tracking-wider text-text-muted md:col-span-1">Nom de l'entreprise <span class="text-error">*</span></label>
                <div class="md:col-span-3">
                  <input
                    type="text"
                    formControlName="name"
                    placeholder="Ex: Tech Innovations"
                    class="w-full px-3.5 py-2.5 bg-surface-bright border rounded-lg text-sm text-text placeholder:text-text-muted/50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    [class.border-border]="!isFieldInvalid('name')"
                    [class.border-error]="isFieldInvalid('name')"
                  />
                  @if (isFieldInvalid('name') && !getServerError('name')) {
                    <span class="text-xs font-semibold text-error-dark mt-1 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      Le nom de l'entreprise est obligatoire.
                    </span>
                  }
                  @if (getServerError('name')) {
                    <span class="text-xs font-semibold text-error-dark mt-1 flex items-center gap-1">{{ getServerError('name') }}</span>
                  }
                </div>
              </div>

              <!-- Email & Phone Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="text-xs font-bold uppercase tracking-wider text-text-muted">Email de contact</label>
                  <input type="email" formControlName="email" placeholder="contact@entreprise.com"
                    class="w-full px-3.5 py-2.5 bg-surface-bright border rounded-lg text-sm text-text placeholder:text-text-muted/50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all mt-1.5"
                    [class.border-border]="!isFieldInvalid('email')"
                    [class.border-error]="isFieldInvalid('email')"
                  />
                  @if (isFieldInvalid('email')) {
                    <span class="text-xs font-semibold text-error-dark mt-1 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      Email invalide.
                    </span>
                  }
                </div>
                <div>
                  <label class="text-xs font-bold uppercase tracking-wider text-text-muted">T\xE9l\xE9phone</label>
                  <input type="tel" formControlName="phone" placeholder="+212 5XX-XXXXXX"
                    class="w-full px-3.5 py-2.5 bg-surface-bright border border-border rounded-lg text-sm text-text placeholder:text-text-muted/50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all mt-1.5"
                  />
                </div>
              </div>

              <!-- Address -->
              <div>
                <label class="text-xs font-bold uppercase tracking-wider text-text-muted">Adresse</label>
                <textarea formControlName="address" placeholder="Casablanca, Maroc" rows="3"
                  class="w-full px-3.5 py-2.5 bg-surface-bright border border-border rounded-lg text-sm text-text placeholder:text-text-muted/50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none mt-1.5"
                ></textarea>
              </div>

              <!-- Leave policy -->
              <div class="rounded-xl border border-border bg-surface-bright/50 p-4 mt-4">
                <label class="text-xs font-bold uppercase tracking-wider text-text-muted">Politique de cong\xE9s</label>
                <p class="text-xs text-text-muted mt-1">Nombre de jours de cong\xE9 pay\xE9 allou\xE9s \xE0 chaque employ\xE9 par an (utilis\xE9 \xE0 l'initialisation des soldes).</p>
                <div class="flex items-center gap-3 mt-3">
                  <input type="number" min="0" max="365" formControlName="default_annual_leave_days"
                    class="w-28 px-3.5 py-2.5 bg-surface-bright border border-border rounded-lg text-sm text-text focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  />
                  <span class="text-sm text-text-muted">jours / an</span>
                </div>
              </div>

            </form>
          </div>
        </section>
      </div>

      <!-- Footer Actions -->
      <div class="flex items-center justify-end gap-3 border-t border-border pt-6">
        <button type="button"
          class="px-5 py-2.5 text-sm font-semibold text-text-secondary hover:bg-background-alt rounded-lg transition-colors cursor-pointer active:scale-95"
          (click)="loadCompany()">
          Annuler
        </button>
        <button type="submit"
          class="bg-primary text-text-inverse px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover hover:shadow-md transition-all active:scale-[0.98] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100 flex items-center gap-2"
          [disabled]="formSubmitting || companyForm.invalid"
          (click)="onSubmit()">
          @if (formSubmitting) {
            <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
            Sauvegarde...
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            Enregistrer les modifications
          }
        </button>
      </div>
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanySettingsComponent, { className: "CompanySettingsComponent", filePath: "src/app/features/admin/company-settings/company-settings.component.ts", lineNumber: 20 });
})();
export {
  CompanySettingsComponent
};
//# sourceMappingURL=chunk-IRBDLWXY.js.map
