import {
  Component,
  Input,
  Output,
  ViewChild,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ADF3COWQ.js";

// src/app/shared/components/file-uploader/file-uploader.component.ts
var _c0 = ["fileInput"];
function FileUploaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 3)(1, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 6);
    \u0275\u0275domElement(3, "path", 7)(4, "polyline", 8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "div", 9)(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 11);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "button", 12);
    \u0275\u0275domListener("click", function FileUploaderComponent_Conditional_3_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.clear();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(11, "svg", 13);
    \u0275\u0275domElement(12, "line", 14)(13, "line", 15);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const file_r5 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(file_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatSize(file_r5.size));
  }
}
function FileUploaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 16);
    \u0275\u0275domElement(1, "path", 17)(2, "polyline", 18)(3, "line", 19);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(4, "div", 20)(5, "p", 21);
    \u0275\u0275text(6, "Cliquez ou glissez un fichier");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 22);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Taille max : ", ctx_r3.maxSizeMB(), " Mo");
  }
}
function FileUploaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 23);
    \u0275\u0275domElement(2, "circle", 24)(3, "line", 25)(4, "line", 26);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.errorMessage());
  }
}
var FileUploaderComponent = class _FileUploaderComponent {
  accept = input(
    "*",
    ...ngDevMode ? [{ debugName: "accept" }] : (
      /* istanbul ignore next */
      []
    )
  );
  maxSizeMB = input(
    10,
    ...ngDevMode ? [{ debugName: "maxSizeMB" }] : (
      /* istanbul ignore next */
      []
    )
  );
  label = input(
    "Fichier",
    ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fileSelected = output();
  fileInput;
  isDragOver = signal(
    false,
    ...ngDevMode ? [{ debugName: "isDragOver" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedFile = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedFile" }] : (
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
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(true);
  }
  onDragLeave() {
    this.isDragOver.set(false);
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this.validateAndEmit(file);
  }
  onFileSelected(event) {
    const input2 = event.target;
    const file = input2.files?.[0];
    if (file)
      this.validateAndEmit(file);
    input2.value = "";
  }
  clear() {
    this.selectedFile.set(null);
    this.errorMessage.set(null);
    this.isDragOver.set(false);
    if (this.fileInput) {
      this.fileInput.nativeElement.value = "";
    }
  }
  validateAndEmit(file) {
    this.errorMessage.set(null);
    const maxBytes = this.maxSizeMB() * 1024 * 1024;
    if (file.size > maxBytes) {
      this.errorMessage.set(`Le fichier ne peut pas d\xE9passer ${this.maxSizeMB()} Mo.`);
      return;
    }
    this.selectedFile.set(file);
    this.fileSelected.emit(file);
  }
  formatSize(bytes) {
    if (bytes < 1024)
      return `${bytes} o`;
    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }
  static \u0275fac = function FileUploaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploaderComponent, selectors: [["app-file-uploader"]], viewQuery: function FileUploaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, inputs: { accept: [1, "accept"], maxSizeMB: [1, "maxSizeMB"], label: [1, "label"] }, outputs: { fileSelected: "fileSelected" }, decls: 6, vars: 15, consts: [["fileInput", ""], ["role", "button", "tabindex", "0", 1, "relative", "border-2", "border-dashed", "rounded-lg", "p-6", "flex", "flex-col", "items-center", "justify-center", "gap-3", "transition-all", "duration-200", "cursor-pointer", 3, "click", "keydown.enter", "keydown.space", "dragover", "dragleave", "drop"], ["type", "file", 1, "hidden", 3, "change", "accept"], [1, "flex", "items-center", "gap-3", "w-full"], [1, "flex", "items-center", "gap-1.5", "mt-2"], [1, "w-10", "h-10", "bg-primary-50", "text-primary", "rounded-lg", "flex", "items-center", "justify-center", "shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-text", "truncate"], [1, "text-xs", "text-text-secondary"], ["type", "button", 1, "text-text-secondary", "hover:text-error", "p-1", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-10", "h-10", "text-text-muted"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], [1, "text-center"], [1, "text-sm", "font-medium", "text-text-secondary"], [1, "text-xs", "text-text-muted", "mt-0.5"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-error", "shrink-0"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-xs", "font-medium", "text-error-dark"]], template: function FileUploaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "div", 1);
      \u0275\u0275domListener("click", function FileUploaderComponent_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(fileInput_r2.click());
      })("keydown.enter", function FileUploaderComponent_Template_div_keydown_enter_0_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(fileInput_r2.click());
      })("keydown.space", function FileUploaderComponent_Template_div_keydown_space_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(2);
        fileInput_r2.click();
        return \u0275\u0275resetView($event.preventDefault());
      })("dragover", function FileUploaderComponent_Template_div_dragover_0_listener($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileUploaderComponent_Template_div_dragleave_0_listener() {
        return ctx.onDragLeave();
      })("drop", function FileUploaderComponent_Template_div_drop_0_listener($event) {
        return ctx.onDrop($event);
      });
      \u0275\u0275domElementStart(1, "input", 2, 0);
      \u0275\u0275domListener("change", function FileUploaderComponent_Template_input_change_1_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(3, FileUploaderComponent_Conditional_3_Template, 14, 2, "div", 3)(4, FileUploaderComponent_Conditional_4_Template, 9, 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(5, FileUploaderComponent_Conditional_5_Template, 7, 1, "div", 4);
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275classProp("border-primary", !ctx.isDragOver() && !ctx.selectedFile())("border-accent", ctx.isDragOver())("bg-accent-light", ctx.isDragOver())("border-success", ctx.selectedFile())("bg-success-light", ctx.selectedFile())("border-solid", ctx.selectedFile());
      \u0275\u0275advance();
      \u0275\u0275domProperty("accept", ctx.accept());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_8_0 = ctx.selectedFile()) ? 3 : 4, tmp_8_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMessage() ? 5 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploaderComponent, [{
    type: Component,
    args: [{ selector: "app-file-uploader", standalone: true, template: '<div\n  class="relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-3 transition-all duration-200 cursor-pointer"\n  [class.border-primary]="!isDragOver() && !selectedFile()"\n  [class.border-accent]="isDragOver()"\n  [class.bg-accent-light]="isDragOver()"\n  [class.border-success]="selectedFile()"\n  [class.bg-success-light]="selectedFile()"\n  [class.border-solid]="selectedFile()"\n  role="button"\n  tabindex="0"\n  (click)="fileInput.click()"\n  (keydown.enter)="fileInput.click()"\n  (keydown.space)="fileInput.click(); $event.preventDefault()"\n  (dragover)="onDragOver($event)"\n  (dragleave)="onDragLeave()"\n  (drop)="onDrop($event)"\n>\n  <input\n    #fileInput\n    type="file"\n    [accept]="accept()"\n    class="hidden"\n    (change)="onFileSelected($event)"\n  />\n\n  @if (selectedFile(); as file) {\n    <div class="flex items-center gap-3 w-full">\n      <div class="w-10 h-10 bg-primary-50 text-primary rounded-lg flex items-center justify-center shrink-0">\n        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\n          <polyline points="14 2 14 8 20 8"></polyline>\n        </svg>\n      </div>\n      <div class="flex-1 min-w-0">\n        <p class="text-sm font-medium text-text truncate">{{ file.name }}</p>\n        <p class="text-xs text-text-secondary">{{ formatSize(file.size) }}</p>\n      </div>\n      <button type="button" (click)="clear(); $event.stopPropagation()"\n        class="text-text-secondary hover:text-error p-1 cursor-pointer">\n        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n          <line x1="18" y1="6" x2="6" y2="18"></line>\n          <line x1="6" y1="6" x2="18" y2="18"></line>\n        </svg>\n      </button>\n    </div>\n  } @else {\n    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\n      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\n      <polyline points="17 8 12 3 7 8"></polyline>\n      <line x1="12" y1="3" x2="12" y2="15"></line>\n    </svg>\n    <div class="text-center">\n      <p class="text-sm font-medium text-text-secondary">Cliquez ou glissez un fichier</p>\n      <p class="text-xs text-text-muted mt-0.5">Taille max : {{ maxSizeMB() }} Mo</p>\n    </div>\n  }\n</div>\n\n@if (errorMessage()) {\n  <div class="flex items-center gap-1.5 mt-2">\n    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-error shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <circle cx="12" cy="12" r="10"></circle>\n      <line x1="12" y1="8" x2="12" y2="12"></line>\n      <line x1="12" y1="16" x2="12.01" y2="16"></line>\n    </svg>\n    <span class="text-xs font-medium text-error-dark">{{ errorMessage() }}</span>\n  </div>\n}\n' }]
  }], null, { accept: [{ type: Input, args: [{ isSignal: true, alias: "accept", required: false }] }], maxSizeMB: [{ type: Input, args: [{ isSignal: true, alias: "maxSizeMB", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], fileSelected: [{ type: Output, args: ["fileSelected"] }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploaderComponent, { className: "FileUploaderComponent", filePath: "src/app/shared/components/file-uploader/file-uploader.component.ts", lineNumber: 8 });
})();

export {
  FileUploaderComponent
};
//# sourceMappingURL=chunk-2OO43XZ5.js.map
