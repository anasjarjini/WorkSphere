import {
  EmployeeService
} from "./chunk-EAQSU6LC.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7RQSPZX3.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-ZST2RCVM.js";

// src/app/features/admin/employee-import/employee-import.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function EmployeeImportComponent_Conditional_25_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 49);
    \u0275\u0275element(3, "path", 50)(4, "polyline", 51)(5, "line", 52)(6, "line", 53)(7, "polyline", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p", 55);
    \u0275\u0275text(9, "Cliquez pour uploader ou glissez-d\xE9posez");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 56);
    \u0275\u0275text(11, "CSV uniquement \u2014 Taille max : 20 Mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 57);
    \u0275\u0275listener("click", function EmployeeImportComponent_Conditional_25_Conditional_18_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.triggerFileInput();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(13, " Parcourir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function EmployeeImportComponent_Conditional_25_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 58)(2, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 60);
    \u0275\u0275element(4, "path", 50)(5, "polyline", 51)(6, "line", 52)(7, "line", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 61)(9, "p", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 63);
    \u0275\u0275listener("click", function EmployeeImportComponent_Conditional_25_Conditional_19_Template_button_click_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.removeFile();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(14, " Retirer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.fileLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fileSize());
  }
}
function EmployeeImportComponent_Conditional_25_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "circle", 33)(3, "line", 65)(4, "line", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.frontendError());
  }
}
function EmployeeImportComponent_Conditional_25_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "button", 68);
    \u0275\u0275listener("click", function EmployeeImportComponent_Conditional_25_Conditional_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToNextStep());
    });
    \u0275\u0275text(2, " Continuer ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 20);
    \u0275\u0275element(4, "line", 69)(5, "polyline", 70);
    \u0275\u0275elementEnd()()();
  }
}
function EmployeeImportComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "div", 14)(3, "h2", 15);
    \u0275\u0275text(4, "Fichier CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "div")(7, "p", 17);
    \u0275\u0275text(8, "Mod\xE8le CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 18);
    \u0275\u0275text(10, "T\xE9l\xE9chargez le mod\xE8le pour respecter le format attendu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 19);
    \u0275\u0275listener("click", function EmployeeImportComponent_Conditional_25_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 20);
    \u0275\u0275element(13, "path", 21)(14, "polyline", 22)(15, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " T\xE9l\xE9charger ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 24);
    \u0275\u0275listener("dragover", function EmployeeImportComponent_Conditional_25_Template_div_dragover_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragleave", function EmployeeImportComponent_Conditional_25_Template_div_dragleave_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function EmployeeImportComponent_Conditional_25_Template_div_drop_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    })("click", function EmployeeImportComponent_Conditional_25_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.selectedFile() && ctx_r1.triggerFileInput());
    });
    \u0275\u0275conditionalCreate(18, EmployeeImportComponent_Conditional_25_Conditional_18_Template, 14, 0, "ng-container")(19, EmployeeImportComponent_Conditional_25_Conditional_19_Template, 15, 2, "div", 25);
    \u0275\u0275elementStart(20, "input", 26, 0);
    \u0275\u0275listener("change", function EmployeeImportComponent_Conditional_25_Template_input_change_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, EmployeeImportComponent_Conditional_25_Conditional_22_Template, 7, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, EmployeeImportComponent_Conditional_25_Conditional_23_Template, 6, 0, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "aside", 29)(25, "div", 30)(26, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 32);
    \u0275\u0275element(28, "circle", 33)(29, "line", 34)(30, "line", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "h5", 36);
    \u0275\u0275text(32, "Guide de pr\xE9paration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "ul", 37)(34, "li", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 39);
    \u0275\u0275element(36, "polyline", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " CSV en ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "strong", 41);
    \u0275\u0275text(39, "UTF-8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 39);
    \u0275\u0275element(42, "polyline", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " En-t\xEAtes ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "strong", 41);
    \u0275\u0275text(45, "Nom, Email, D\xE9partement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "li", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 39);
    \u0275\u0275element(48, "polyline", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " Dates au format ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "strong", 41);
    \u0275\u0275text(51, "YYYY-MM-DD");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 42)(53, "button", 43);
    \u0275\u0275listener("click", function EmployeeImportComponent_Conditional_25_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 20);
    \u0275\u0275element(55, "path", 21)(56, "polyline", 22)(57, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " T\xE9l\xE9charger le mod\xE8le ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "div", 30)(60, "h5", 44);
    \u0275\u0275text(61, "Probl\xE8mes fr\xE9quents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 45)(63, "div")(64, "p", 46);
    \u0275\u0275text(65, "Emails en double");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 47);
    \u0275\u0275text(67, "WorkSphere utilise l'email comme identifiant unique.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div")(69, "p", 46);
    \u0275\u0275text(70, "D\xE9partements manquants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 47);
    \u0275\u0275text(72, "Cr\xE9ation automatique si vous \xEAtes admin.");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275classProp("border-primary", ctx_r1.isDragOver() || ctx_r1.selectedFile())("border-solid", ctx_r1.selectedFile())("cursor-default", ctx_r1.selectedFile());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.selectedFile() ? 18 : 19);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.frontendError() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.csvHeaders().length > 0 ? 23 : -1);
  }
}
function EmployeeImportComponent_Conditional_26_For_20_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r9 = ctx.$implicit;
    \u0275\u0275property("value", field_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r9.label);
  }
}
function EmployeeImportComponent_Conditional_26_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 78)(1, "td", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 86)(4, "select", 87);
    \u0275\u0275listener("ngModelChange", function EmployeeImportComponent_Conditional_26_For_20_Template_select_ngModelChange_4_listener($event) {
      const \u0275$index_277_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateMapping(\u0275$index_277_r8, $event));
    });
    \u0275\u0275repeaterCreate(5, EmployeeImportComponent_Conditional_26_For_20_For_6_Template, 2, 2, "option", 88, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 89);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const header_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(header_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", header_r10.mappedField);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.fields);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(header_r10.sampleValue);
  }
}
function EmployeeImportComponent_Conditional_26_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 90);
    \u0275\u0275text(1, " Importation en cours... ");
  }
}
function EmployeeImportComponent_Conditional_26_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 21)(2, "polyline", 22)(3, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Importer ");
  }
}
function EmployeeImportComponent_Conditional_26_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "circle", 33)(3, "line", 65)(4, "line", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.frontendError() || ctx_r1.errorMessage());
  }
}
function EmployeeImportComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "div", 71)(3, "div", 72)(4, "h2", 36);
    \u0275\u0275text(5, "Correspondance des colonnes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 73)(9, "table", 74)(10, "thead", 75)(11, "tr")(12, "th", 76);
    \u0275\u0275text(13, "Colonne CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 76);
    \u0275\u0275text(15, "Champ WorkSphere");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 76);
    \u0275\u0275text(17, "Exemple");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 77);
    \u0275\u0275repeaterCreate(19, EmployeeImportComponent_Conditional_26_For_20_Template, 9, 3, "tr", 78, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 79)(22, "button", 80);
    \u0275\u0275listener("click", function EmployeeImportComponent_Conditional_26_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPrevStep());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 20);
    \u0275\u0275element(24, "line", 81)(25, "polyline", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 83);
    \u0275\u0275listener("click", function EmployeeImportComponent_Conditional_26_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToNextStep());
    });
    \u0275\u0275conditionalCreate(28, EmployeeImportComponent_Conditional_26_Conditional_28_Template, 2, 0)(29, EmployeeImportComponent_Conditional_26_Conditional_29_Template, 5, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, EmployeeImportComponent_Conditional_26_Conditional_30_Template, 7, 1, "div", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "aside", 29)(32, "div", 30)(33, "h5", 44);
    \u0275\u0275text(34, "Fichier s\xE9lectionn\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 58)(36, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 60);
    \u0275\u0275element(38, "path", 50)(39, "polyline", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div")(41, "p", 17);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 62);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 42)(46, "p", 47);
    \u0275\u0275text(47, "V\xE9rifiez que chaque colonne CSV correspond au bon champ WorkSphere avant d'importer.");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.csvHeaders().length, " colonne", ctx_r1.csvHeaders().length > 1 ? "s" : "");
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.csvHeaders());
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUploading() ? 28 : 29);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.frontendError() || ctx_r1.errorMessage() ? 30 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.fileLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fileSize());
  }
}
function EmployeeImportComponent_Conditional_27_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 94);
    \u0275\u0275element(2, "circle", 33)(3, "line", 101)(4, "line", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", result_r12.failed, " ligne", result_r12.failed > 1 ? "s" : "", " en erreur ");
  }
}
function EmployeeImportComponent_Conditional_27_Conditional_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 106)(1, "td", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 108);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 109);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(error_r13.line);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(error_r13.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(error_r13.reason);
  }
}
function EmployeeImportComponent_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "table", 103)(2, "thead", 104)(3, "tr")(4, "th", 105);
    \u0275\u0275text(5, "Ligne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 105);
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 105);
    \u0275\u0275text(9, "Raison");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, EmployeeImportComponent_Conditional_27_Conditional_9_For_12_Template, 7, 3, "tr", 106, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(result_r12.errors);
  }
}
function EmployeeImportComponent_Conditional_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 110);
    \u0275\u0275text(2, "Import r\xE9ussi. Aucune erreur.");
    \u0275\u0275elementEnd()();
  }
}
function EmployeeImportComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h2", 91);
    \u0275\u0275text(2, "R\xE9sultat de l'import");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92)(4, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 94);
    \u0275\u0275element(6, "polyline", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, EmployeeImportComponent_Conditional_27_Conditional_8_Template, 6, 2, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, EmployeeImportComponent_Conditional_27_Conditional_9_Template, 13, 0, "div", 96);
    \u0275\u0275conditionalCreate(10, EmployeeImportComponent_Conditional_27_Conditional_10_Template, 3, 0, "div", 97);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 98)(12, "button", 99);
    \u0275\u0275listener("click", function EmployeeImportComponent_Conditional_27_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetImport());
    });
    \u0275\u0275text(13, " Nouvel import ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 100);
    \u0275\u0275text(15, " Retour aux employ\xE9s ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r12 = ctx;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3(" ", result_r12.imported, " employ\xE9", result_r12.imported > 1 ? "s" : "", " import\xE9", result_r12.imported > 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r12.failed > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r12.failed > 0 && result_r12.errors.length > 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r12.imported > 0 && result_r12.failed === 0 ? 10 : -1);
  }
}
var WORKSPHERE_FIELDS = [
  { value: "skip", label: "\u2014 Ignorer" },
  { value: "first_name", label: "Pr\xE9nom" },
  { value: "last_name", label: "Nom" },
  { value: "email", label: "Email" },
  { value: "role", label: "R\xF4le (MANAGER/EMPLOYEE)" },
  { value: "job_title", label: "Poste" },
  { value: "department_id", label: "D\xE9partement" },
  { value: "hire_date", label: "Date d'embauche" },
  { value: "salary", label: "Salaire" },
  { value: "phone", label: "T\xE9l\xE9phone" },
  { value: "address", label: "Adresse" },
  { value: "birth_date", label: "Date de naissance" },
  { value: "contract_type", label: "Type de contrat" }
];
var KNOWN_MAPPINGS = {
  "full name": "first_name",
  "first name": "first_name",
  "first_name": "first_name",
  "last name": "last_name",
  "last_name": "last_name",
  "email": "email",
  "e-mail": "email",
  "contact email": "email",
  "contact_email": "email",
  "role": "role",
  "job title": "job_title",
  "job_title": "job_title",
  "position": "job_title",
  "department": "department_id",
  "dept": "department_id",
  "dept. code": "department_id",
  "dept code": "department_id",
  "department code": "department_id",
  "department_code": "department_id",
  "hire date": "hire_date",
  "hire_date": "hire_date",
  "joining date": "hire_date",
  "start date": "hire_date",
  "salary": "salary",
  "monthly salary": "salary",
  "annual salary": "salary",
  "phone": "phone",
  "telephone": "phone",
  "address": "address",
  "birth date": "birth_date",
  "birth_date": "birth_date",
  "date of birth": "birth_date",
  "contract type": "contract_type",
  "contract_type": "contract_type"
};
var EmployeeImportComponent = class _EmployeeImportComponent {
  employeeService = inject(EmployeeService);
  currentStep = signal(
    1,
    ...ngDevMode ? [{ debugName: "currentStep" }] : (
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
  isUploading = signal(
    false,
    ...ngDevMode ? [{ debugName: "isUploading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  importResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "importResult" }] : (
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
  frontendError = signal(
    null,
    ...ngDevMode ? [{ debugName: "frontendError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isDragOver = signal(
    false,
    ...ngDevMode ? [{ debugName: "isDragOver" }] : (
      /* istanbul ignore next */
      []
    )
  );
  csvHeaders = signal(
    [],
    ...ngDevMode ? [{ debugName: "csvHeaders" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stepClass = (step) => {
    const current = this.currentStep();
    if (step < current)
      return "bg-success text-text-inverse";
    if (step === current)
      return "bg-primary text-text-inverse";
    return "bg-background-alt text-text-muted";
  };
  stepLabelClass = (step) => {
    const current = this.currentStep();
    if (step <= current)
      return "text-primary";
    return "text-text-muted";
  };
  stepLineClass = (step) => {
    if (step < this.currentStep())
      return "bg-primary";
    return "bg-border";
  };
  fields = WORKSPHERE_FIELDS;
  fileLabel = () => {
    const file = this.selectedFile();
    if (!file)
      return "Aucun fichier s\xE9lectionn\xE9";
    return file.name;
  };
  fileSize = () => {
    const file = this.selectedFile();
    if (!file)
      return "";
    return this.formatFileSize(file.size);
  };
  formatFileSize(bytes) {
    if (bytes < 1024)
      return `${bytes} o`;
    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }
  goToNextStep() {
    if (this.currentStep() === 1 && this.csvHeaders().length > 0) {
      this.currentStep.set(2);
    } else if (this.currentStep() === 2) {
      this.onSubmit();
    }
  }
  goToPrevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update((s) => s - 1);
    }
  }
  updateMapping(index, field) {
    this.csvHeaders.update((headers) => headers.map((h, i) => i === index ? __spreadProps(__spreadValues({}, h), { mappedField: field }) : h));
  }
  downloadTemplate() {
    const headers = "first_name,last_name,email,role,job_title,department,hire_date,salary";
    const exampleRow = "Ahmed,Bennani,ahmed@example.com,EMPLOYEE,D\xE9veloppeur,IT,15/03/2023,8000";
    const content = `${headers}
${exampleRow}
`;
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "modele_import_employes.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  onFileSelected(event) {
    this.resetErrors();
    const input = event.target;
    if (!input.files || input.files.length === 0)
      return;
    this.validateAndSetFile(input.files[0]);
    input.value = "";
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(true);
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
    this.resetErrors();
    if (!event.dataTransfer?.files || event.dataTransfer.files.length === 0)
      return;
    this.validateAndSetFile(event.dataTransfer.files[0]);
  }
  removeFile() {
    this.selectedFile.set(null);
    this.csvHeaders.set([]);
    this.resetErrors();
  }
  triggerFileInput() {
    const input = document.querySelector('input[type="file"]');
    input?.click();
  }
  validateAndSetFile(file) {
    this.frontendError.set(null);
    if (!file.name.toLowerCase().endsWith(".csv")) {
      this.frontendError.set("Seuls les fichiers au format .csv sont accept\xE9s.");
      return;
    }
    const maxSize = 20 * 1024 * 1024;
    if (file.size > maxSize) {
      this.frontendError.set(`Le fichier est trop volumineux (${this.formatFileSize(file.size)}). Taille maximale : 20 Mo.`);
      return;
    }
    this.selectedFile.set(file);
    this.parseCsvHeaders(file);
  }
  parseCsvHeaders(file) {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      const lines = text.split("\n").filter((l) => l.trim() && !l.startsWith("#"));
      if (lines.length === 0)
        return;
      const headerLine = lines[0];
      const headers = headerLine.split(",").map((h) => h.trim().replace(/^"|"$/g, ""));
      const sampleLine = lines.length > 1 ? lines[1] : "";
      const sampleValues = sampleLine.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
      const mapped = headers.map((name, i) => ({
        name,
        mappedField: KNOWN_MAPPINGS[name.toLowerCase()] || "skip",
        sampleValue: sampleValues[i] || ""
      }));
      this.csvHeaders.set(mapped);
      this.currentStep.set(1);
    };
    reader.readAsText(file, "UTF-8");
  }
  resetErrors() {
    this.frontendError.set(null);
    this.errorMessage.set(null);
    this.importResult.set(null);
  }
  onSubmit() {
    const file = this.selectedFile();
    if (!file)
      return;
    this.isUploading.set(true);
    this.errorMessage.set(null);
    this.importResult.set(null);
    this.employeeService.importEmployees(file).subscribe({
      next: (result) => {
        this.isUploading.set(false);
        this.importResult.set(result);
        this.currentStep.set(3);
      },
      error: (err) => {
        this.isUploading.set(false);
        if (err.status === 422 && err.error?.errors?.file) {
          this.frontendError.set(err.error.errors.file.join(" "));
        } else if (err.status === 422 && err.error?.message) {
          this.frontendError.set(err.error.message);
        } else {
          this.errorMessage.set("Une erreur inattendue est survenue lors de l'import. Veuillez r\xE9essayer.");
        }
      }
    });
  }
  resetImport() {
    this.selectedFile.set(null);
    this.importResult.set(null);
    this.errorMessage.set(null);
    this.frontendError.set(null);
    this.csvHeaders.set([]);
    this.currentStep.set(1);
  }
  static \u0275fac = function EmployeeImportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeImportComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeImportComponent, selectors: [["app-employee-import"]], decls: 28, vars: 19, consts: [["fileInput", ""], [1, "min-h-screen", "bg-background", "py-8", "px-6"], [1, "max-w-6xl", "mx-auto"], [1, "mb-8"], [1, "font-heading", "text-3xl", "font-bold", "text-text-heading", "mb-1"], [1, "text-text-secondary", "text-base"], [1, "mb-8", "flex", "items-start", "justify-between", "w-full", "max-w-2xl", "mx-auto"], [1, "flex", "flex-col", "items-center", "gap-2", "relative", "flex-1"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", "font-bold", "text-sm", "z-10", "transition-colors", "duration-300"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-center", "transition-colors", "duration-300"], [1, "absolute", "top-5", "left-[calc(50%+24px)]", "right-[-8px]", "h-[2px]", "transition-colors", "duration-300", "hidden", "md:block"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "bg-surface", "border", "border-border", "rounded-xl", "shadow-sm", "p-6", "sm:p-8"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-6"], [1, "text-lg", "font-bold", "text-text-heading", "mb-4"], [1, "mb-5", "flex", "items-center", "justify-between", "p-4", "bg-background-alt", "rounded-lg"], [1, "text-sm", "font-semibold", "text-text"], [1, "text-xs", "text-text-secondary", "mt-0.5"], [1, "shrink-0", "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-4", "py-2", "rounded-lg", "hover:bg-primary-hover", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "border-2", "border-dashed", "border-border", "rounded-xl", "p-10", "flex", "flex-col", "items-center", "justify-center", "text-center", "transition-all", "duration-300", "cursor-pointer", 3, "dragover", "dragleave", "drop", "click"], [1, "flex", "items-center", "justify-between", "gap-4", "w-full"], ["type", "file", "accept", ".csv", 1, "hidden", 3, "change"], [1, "mt-4", "bg-error-light", "border", "border-error/20", "rounded-lg", "p-3.5", "flex", "items-start", "gap-2.5"], [1, "flex", "justify-end"], [1, "space-y-4"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-5", "shadow-sm"], [1, "flex", "items-center", "gap-2", "mb-3"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-accent"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"], [1, "text-sm", "font-bold", "text-text-heading"], [1, "space-y-2", "text-sm", "text-text-secondary"], [1, "flex", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-accent", "shrink-0", "mt-0.5"], ["points", "20 6 9 17 4 12"], [1, "text-text"], [1, "mt-3", "pt-3", "border-t", "border-border"], [1, "flex", "items-center", "gap-2", "text-primary", "font-semibold", "text-sm", "hover:underline", "cursor-pointer", 3, "click"], [1, "text-sm", "font-bold", "text-text-heading", "mb-3"], [1, "space-y-3"], [1, "text-xs", "font-semibold", "text-primary", "mb-1"], [1, "text-xs", "text-text-muted"], [1, "w-16", "h-16", "rounded-full", "bg-background-alt", "flex", "items-center", "justify-center", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-8", "h-8", "text-primary"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], [1, "text-sm", "font-semibold", "text-text-heading", "mb-1"], [1, "text-xs", "text-text-secondary", "mb-3"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2", "rounded-lg", "hover:bg-primary-hover", "transition-all", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "bg-primary-50", "text-primary", "rounded-lg", "flex", "items-center", "justify-center", "shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], [1, "text-left"], [1, "text-xs", "text-text-secondary"], [1, "text-text-secondary", "border", "border-border", "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-md", "hover:bg-background-alt", "hover:text-text", "transition-colors", "cursor-pointer", "shrink-0", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-error", "shrink-0", "mt-0.5"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "text-sm", "font-medium", "text-error-dark"], [1, "px-6", "py-2.5", "rounded-lg", "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "hover:bg-primary-hover", "transition-all", "shadow-sm", "flex", "items-center", "gap-2", "cursor-pointer", 3, "click"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "bg-surface", "border", "border-border", "rounded-xl", "overflow-hidden"], [1, "p-4", "border-b", "border-border", "bg-background-alt", "flex", "items-center", "justify-between"], [1, "overflow-x-auto"], [1, "w-full", "text-left"], [1, "bg-background-alt/50", "border-b", "border-border"], [1, "px-4", "py-3", "text-xs", "font-semibold", "text-text-muted", "uppercase", "tracking-wider"], [1, "divide-y", "divide-border"], [1, "hover:bg-background-alt/30", "transition-colors"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "px-6", "py-2.5", "rounded-lg", "text-sm", "font-semibold", "text-text-secondary", "border", "border-border", "hover:bg-background-alt", "transition-colors", "flex", "items-center", "gap-2", "cursor-pointer", 3, "click"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "px-6", "py-2.5", "rounded-lg", "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "hover:bg-primary-hover", "active:scale-95", "transition-all", "shadow-sm", "flex", "items-center", "gap-2", "cursor-pointer", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "bg-error-light", "border", "border-error/20", "rounded-lg", "p-3.5", "flex", "items-start", "gap-2.5"], [1, "px-4", "py-3", "text-sm", "text-text", "font-medium"], [1, "px-4", "py-3"], [1, "w-full", "max-w-[220px]", "text-sm", "border", "border-border", "rounded-md", "px-3", "py-1.5", "bg-surface", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/40", "focus:border-primary", "transition-all", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "px-4", "py-3", "text-sm", "text-text-muted", "italic"], [1, "w-4", "h-4", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"], [1, "text-lg", "font-bold", "text-text-heading", "mb-5"], [1, "flex", "flex-wrap", "gap-4", "mb-5"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-full", "text-sm", "font-semibold", "border", "border-success/20", "bg-success-light", "text-success-dark"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2.5", "rounded-full", "text-sm", "font-semibold", "border", "border-error/20", "bg-error-light", "text-error-dark"], [1, "mt-4", "border", "border-border", "rounded-lg", "overflow-hidden"], [1, "bg-success-light", "border", "border-success/20", "rounded-lg", "p-3.5", "flex", "items-start", "gap-2.5"], [1, "mt-6", "flex", "flex-wrap", "gap-3"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-4", "py-2", "rounded-lg", "shadow-sm", "hover:bg-primary-hover", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", 3, "click"], ["routerLink", "/admin/employees", 1, "bg-transparent", "text-text-secondary", "border", "border-border", "text-sm", "font-semibold", "px-4", "py-2", "rounded-lg", "hover:bg-background-alt", "hover:text-text", "transition-colors", "flex", "items-center", "gap-2", "cursor-pointer"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "w-full", "border-collapse", "text-sm", "text-left", "text-text"], [1, "bg-background-alt", "border-b", "border-border"], [1, "px-4", "py-3", "font-semibold", "text-text-muted", "text-xs", "uppercase", "tracking-wider"], [1, "hover:bg-background-alt/50", "border-b", "border-border", "last:border-0", "transition-colors"], [1, "px-4", "py-3", "font-semibold", "text-text-muted", "w-20", "tabular-nums", "align-top"], [1, "px-4", "py-3", "font-medium", "break-all", "align-top"], [1, "px-4", "py-3", "text-error-dark", "align-top"], [1, "text-sm", "font-medium", "text-success-dark"]], template: function EmployeeImportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "h1", 4);
      \u0275\u0275text(4, "Importer des employ\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Ajoutez plusieurs employ\xE9s \xE0 votre espace de travail via un fichier CSV.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275text(10, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 9);
      \u0275\u0275text(12, "Fichier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7)(15, "div", 8);
      \u0275\u0275text(16, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18, "Colonnes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7)(21, "div", 8);
      \u0275\u0275text(22, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 9);
      \u0275\u0275text(24, "V\xE9rification");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(25, EmployeeImportComponent_Conditional_25_Template, 73, 9, "div", 11);
      \u0275\u0275conditionalCreate(26, EmployeeImportComponent_Conditional_26_Template, 48, 7, "div", 11);
      \u0275\u0275conditionalCreate(27, EmployeeImportComponent_Conditional_27_Template, 16, 6, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance(9);
      \u0275\u0275classMap(ctx.stepClass(1));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.stepLabelClass(1));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.stepLineClass(2));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.stepClass(2));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.stepLabelClass(2));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.stepLineClass(3));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.stepClass(3));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.stepLabelClass(3));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.currentStep() === 1 && !ctx.importResult() ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.currentStep() === 2 && !ctx.importResult() ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_10_0 = ctx.importResult()) ? 27 : -1, tmp_10_0);
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n.drop-zone-active[_ngcontent-%COMP%] {\n  border-color: var(--color-primary, #7c3aed) !important;\n  background-color: #f3ebfa;\n}\n.scale-\\__ph-0__[_ngcontent-%COMP%] {\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=employee-import.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeImportComponent, [{
    type: Component,
    args: [{ selector: "app-employee-import", standalone: true, imports: [RouterModule, FormsModule], template: `<div class="min-h-screen bg-background py-8 px-6">
  <div class="max-w-6xl mx-auto">

    <header class="mb-8">
      <h1 class="font-heading text-3xl font-bold text-text-heading mb-1">Importer des employ\xE9s</h1>
      <p class="text-text-secondary text-base">Ajoutez plusieurs employ\xE9s \xE0 votre espace de travail via un fichier CSV.</p>
    </header>

    <!-- Wizard progress -->
    <div class="mb-8 flex items-start justify-between w-full max-w-2xl mx-auto">
      <div class="flex flex-col items-center gap-2 relative flex-1">
        <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300" [class]="stepClass(1)">\u2713</div>
        <span class="text-xs font-semibold uppercase tracking-wider text-center transition-colors duration-300" [class]="stepLabelClass(1)">Fichier</span>
        <div class="absolute top-5 left-[calc(50%+24px)] right-[-8px] h-[2px] transition-colors duration-300 hidden md:block" [class]="stepLineClass(2)"></div>
      </div>
      <div class="flex flex-col items-center gap-2 relative flex-1">
        <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300" [class]="stepClass(2)">2</div>
        <span class="text-xs font-semibold uppercase tracking-wider text-center transition-colors duration-300" [class]="stepLabelClass(2)">Colonnes</span>
        <div class="absolute top-5 left-[calc(50%+24px)] right-[-8px] h-[2px] transition-colors duration-300 hidden md:block" [class]="stepLineClass(3)"></div>
      </div>
      <div class="flex flex-col items-center gap-2 relative flex-1">
        <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300" [class]="stepClass(3)">3</div>
        <span class="text-xs font-semibold uppercase tracking-wider text-center transition-colors duration-300" [class]="stepLabelClass(3)">V\xE9rification</span>
      </div>
    </div>

    <!-- Step 1: Upload -->
    @if (currentStep() === 1 && !importResult()) {
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div class="lg:col-span-2 space-y-6">

          <div class="bg-surface border border-border rounded-xl p-6">
            <h2 class="text-lg font-bold text-text-heading mb-4">Fichier CSV</h2>

            <!-- Download template -->
            <div class="mb-5 flex items-center justify-between p-4 bg-background-alt rounded-lg">
              <div>
                <p class="text-sm font-semibold text-text">Mod\xE8le CSV</p>
                <p class="text-xs text-text-secondary mt-0.5">T\xE9l\xE9chargez le mod\xE8le pour respecter le format attendu</p>
              </div>
              <button class="shrink-0 bg-primary text-text-inverse text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-hover transition-all flex items-center gap-2 cursor-pointer" (click)="downloadTemplate()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                T\xE9l\xE9charger
              </button>
            </div>

            <!-- Drop zone -->
            <div
              class="border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer"
              [class.border-primary]="isDragOver() || selectedFile()"
              [class.border-solid]="selectedFile()"
              [class.cursor-default]="selectedFile()"
              (dragover)="onDragOver($event)"
              (dragleave)="onDragLeave($event)"
              (drop)="onDrop($event)"
              (click)="!selectedFile() && triggerFileInput()"
            >
              @if (!selectedFile()) {
                <ng-container>
                  <div class="w-16 h-16 rounded-full bg-background-alt flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-primary">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <p class="text-sm font-semibold text-text-heading mb-1">Cliquez pour uploader ou glissez-d\xE9posez</p>
                  <p class="text-xs text-text-secondary mb-3">CSV uniquement \u2014 Taille max : 20 Mo</p>
                  <button class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2 rounded-lg hover:bg-primary-hover transition-all cursor-pointer" (click)="triggerFileInput(); $event.stopPropagation()">
                    Parcourir
                  </button>
                </ng-container>
              } @else {
                <div class="flex items-center justify-between gap-4 w-full">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-primary-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                    </div>
                    <div class="text-left">
                      <p class="text-sm font-semibold text-text">{{ fileLabel() }}</p>
                      <p class="text-xs text-text-secondary">{{ fileSize() }}</p>
                    </div>
                  </div>
                  <button class="text-text-secondary border border-border text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-background-alt hover:text-text transition-colors cursor-pointer shrink-0" (click)="removeFile(); $event.stopPropagation()">
                    Retirer
                  </button>
                </div>
              }
              <input type="file" accept=".csv" class="hidden" (change)="onFileSelected($event)" #fileInput />
            </div>

            @if (frontendError()) {
              <div class="mt-4 bg-error-light border border-error/20 rounded-lg p-3.5 flex items-start gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-error shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span class="text-sm font-medium text-error-dark">{{ frontendError() }}</span>
              </div>
            }
          </div>

          <!-- Continue -->
          @if (csvHeaders().length > 0) {
            <div class="flex justify-end">
              <button class="px-6 py-2.5 rounded-lg bg-primary text-text-inverse text-sm font-semibold hover:bg-primary-hover transition-all shadow-sm flex items-center gap-2 cursor-pointer" (click)="goToNextStep()">
                Continuer
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          }
        </div>

        <!-- Sidebar -->
        <aside class="space-y-4">
          <div class="bg-surface border border-border rounded-xl p-5 shadow-sm">
            <div class="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-accent">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <h5 class="text-sm font-bold text-text-heading">Guide de pr\xE9paration</h5>
            </div>
            <ul class="space-y-2 text-sm text-text-secondary">
              <li class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-accent shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                CSV en <strong class="text-text">UTF-8</strong>
              </li>
              <li class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-accent shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                En-t\xEAtes <strong class="text-text">Nom, Email, D\xE9partement</strong>
              </li>
              <li class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-accent shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Dates au format <strong class="text-text">YYYY-MM-DD</strong>
              </li>
            </ul>
            <div class="mt-3 pt-3 border-t border-border">
              <button class="flex items-center gap-2 text-primary font-semibold text-sm hover:underline cursor-pointer" (click)="downloadTemplate()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                T\xE9l\xE9charger le mod\xE8le
              </button>
            </div>
          </div>
          <div class="bg-surface border border-border rounded-xl p-5 shadow-sm">
            <h5 class="text-sm font-bold text-text-heading mb-3">Probl\xE8mes fr\xE9quents</h5>
            <div class="space-y-3">
              <div>
                <p class="text-xs font-semibold text-primary mb-1">Emails en double</p>
                <p class="text-xs text-text-muted">WorkSphere utilise l'email comme identifiant unique.</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-primary mb-1">D\xE9partements manquants</p>
                <p class="text-xs text-text-muted">Cr\xE9ation automatique si vous \xEAtes admin.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    }

    <!-- Step 2: Mapping -->
    @if (currentStep() === 2 && !importResult()) {
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div class="lg:col-span-2 space-y-6">

          <div class="bg-surface border border-border rounded-xl overflow-hidden">
            <div class="p-4 border-b border-border bg-background-alt flex items-center justify-between">
              <h2 class="text-sm font-bold text-text-heading">Correspondance des colonnes</h2>
              <span class="text-xs text-text-muted">{{ csvHeaders().length }} colonne{{ csvHeaders().length > 1 ? 's' : '' }}</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead class="bg-background-alt/50 border-b border-border">
                  <tr>
                    <th class="px-4 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Colonne CSV</th>
                    <th class="px-4 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Champ WorkSphere</th>
                    <th class="px-4 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">Exemple</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-border">
                  @for (header of csvHeaders(); track $index; let i = $index) {
                    <tr class="hover:bg-background-alt/30 transition-colors">
                      <td class="px-4 py-3 text-sm text-text font-medium">{{ header.name }}</td>
                      <td class="px-4 py-3">
                        <select
                          class="w-full max-w-[220px] text-sm border border-border rounded-md px-3 py-1.5 bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                          [ngModel]="header.mappedField"
                          (ngModelChange)="updateMapping(i, $event)"
                        >
                          @for (field of fields; track field.value) {
                            <option [value]="field.value">{{ field.label }}</option>
                          }
                        </select>
                      </td>
                      <td class="px-4 py-3 text-sm text-text-muted italic">{{ header.sampleValue }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div class="flex items-center justify-between gap-3">
            <button class="px-6 py-2.5 rounded-lg text-sm font-semibold text-text-secondary border border-border hover:bg-background-alt transition-colors flex items-center gap-2 cursor-pointer" (click)="goToPrevStep()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Retour
            </button>
            <button
              class="px-6 py-2.5 rounded-lg bg-primary text-text-inverse text-sm font-semibold hover:bg-primary-hover active:scale-95 transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              [disabled]="isUploading()"
              (click)="goToNextStep()"
            >
              @if (isUploading()) {
                <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
                Importation en cours...
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Importer
              }
            </button>
          </div>

          @if (frontendError() || errorMessage()) {
            <div class="bg-error-light border border-error/20 rounded-lg p-3.5 flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-error shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span class="text-sm font-medium text-error-dark">{{ frontendError() || errorMessage() }}</span>
            </div>
          }
        </div>

        <!-- Sidebar step 2 -->
        <aside class="space-y-4">
          <div class="bg-surface border border-border rounded-xl p-5 shadow-sm">
            <h5 class="text-sm font-bold text-text-heading mb-3">Fichier s\xE9lectionn\xE9</h5>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-primary-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-text">{{ fileLabel() }}</p>
                <p class="text-xs text-text-secondary">{{ fileSize() }}</p>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-border">
              <p class="text-xs text-text-muted">V\xE9rifiez que chaque colonne CSV correspond au bon champ WorkSphere avant d'importer.</p>
            </div>
          </div>
        </aside>
      </div>
    }

    <!-- Step 3: Result -->
    @if (importResult(); as result) {
      <div class="bg-surface border border-border rounded-xl shadow-sm p-6 sm:p-8">
        <h2 class="text-lg font-bold text-text-heading mb-5">R\xE9sultat de l'import</h2>

        <div class="flex flex-wrap gap-4 mb-5">
          <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-success/20 bg-success-light text-success-dark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {{ result.imported }} employ\xE9{{ result.imported > 1 ? 's' : '' }} import\xE9{{ result.imported > 1 ? 's' : '' }}
          </div>
          @if (result.failed > 0) {
            <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-error/20 bg-error-light text-error-dark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              {{ result.failed }} ligne{{ result.failed > 1 ? 's' : '' }} en erreur
            </div>
          }
        </div>

        @if (result.failed > 0 && result.errors.length > 0) {
          <div class="mt-4 border border-border rounded-lg overflow-hidden">
            <table class="w-full border-collapse text-sm text-left text-text">
              <thead class="bg-background-alt border-b border-border">
                <tr>
                  <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider">Ligne</th>
                  <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider">Email</th>
                  <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider">Raison</th>
                </tr>
              </thead>
              <tbody>
                @for (error of result.errors; track $index) {
                  <tr class="hover:bg-background-alt/50 border-b border-border last:border-0 transition-colors">
                    <td class="px-4 py-3 font-semibold text-text-muted w-20 tabular-nums align-top">{{ error.line }}</td>
                    <td class="px-4 py-3 font-medium break-all align-top">{{ error.email }}</td>
                    <td class="px-4 py-3 text-error-dark align-top">{{ error.reason }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }

        @if (result.imported > 0 && result.failed === 0) {
          <div class="bg-success-light border border-success/20 rounded-lg p-3.5 flex items-start gap-2.5">
            <span class="text-sm font-medium text-success-dark">Import r\xE9ussi. Aucune erreur.</span>
          </div>
        }

        <div class="mt-6 flex flex-wrap gap-3">
          <button class="bg-primary text-text-inverse text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-primary-hover transition-all flex items-center gap-2 cursor-pointer" (click)="resetImport()">
            Nouvel import
          </button>
          <a routerLink="/admin/employees" class="bg-transparent text-text-secondary border border-border text-sm font-semibold px-4 py-2 rounded-lg hover:bg-background-alt hover:text-text transition-colors flex items-center gap-2 cursor-pointer">
            Retour aux employ\xE9s
          </a>
        </div>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/features/admin/employee-import/employee-import.component.scss */\n.drop-zone-active {\n  border-color: var(--color-primary, #7c3aed) !important;\n  background-color: #f3ebfa;\n}\n.scale-\\[1\\.02\\] {\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=employee-import.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeImportComponent, { className: "EmployeeImportComponent", filePath: "src/app/features/admin/employee-import/employee-import.component.ts", lineNumber: 74 });
})();
export {
  EmployeeImportComponent
};
//# sourceMappingURL=chunk-JX2TSURM.js.map
