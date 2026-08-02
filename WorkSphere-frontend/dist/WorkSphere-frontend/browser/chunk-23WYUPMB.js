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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext
} from "./chunk-ZST2RCVM.js";

// src/app/features/home/home.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function HomeComponent_For_212_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "polygon", 112);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_226_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "polygon", 112);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_240_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "polygon", 112);
    \u0275\u0275elementEnd();
  }
}
var HomeComponent = class _HomeComponent {
  authService = inject(AuthService);
  isAuthenticated = this.authService.isAuthenticated;
  /**
   * Défilement fluide vers une section de la page.
   * @param elementId ID de l'élément cible
   */
  scrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 283, vars: 3, consts: [[1, "font-sans", "text-text", "bg-background", "overflow-x-hidden"], [1, "fixed", "top-0", "w-full", "z-50", "bg-surface/80", "backdrop-blur-md", "border-b", "border-border", "transition-all", "duration-300"], [1, "flex", "justify-between", "items-center", "h-16", "px-6", "md:px-8", "max-w-7xl", "mx-auto", "w-full"], [1, "flex", "items-center", "gap-8"], [1, "flex", "items-center", "gap-2", "text-primary"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "w-7", "h-7"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M22 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "font-heading", "text-[24px]", "font-bold", "tracking-tight"], [1, "hidden", "md:flex", "items-center", "gap-6"], [1, "text-sm", "text-text-secondary", "hover:text-primary", "transition-colors", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "gap-4"], ["routerLink", "/login", 1, "text-sm", "text-text-secondary", "px-4", "py-2", "hover:bg-background-alt", "rounded-lg", "transition-all", "cursor-pointer"], ["routerLink", "/register-company", 1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-6", "py-2", "rounded-lg", "shadow-sm", "hover:opacity-90", "transition-all", "cursor-pointer"], [1, "relative", "pt-32", "pb-16", "px-4", "md:px-8", "overflow-hidden", "bg-surface"], [1, "max-w-7xl", "mx-auto", "grid", "md:grid-cols-2", "gap-8", "items-center"], [1, "z-10"], [1, "inline-block", "bg-primary-50", "text-primary", "text-xs", "font-bold", "px-4", "py-1", "rounded-full", "mb-4"], [1, "font-heading", "text-4xl", "md:text-5xl", "font-bold", "text-text-heading", "mb-6", "leading-tight"], [1, "text-primary", "italic"], [1, "text-base", "md:text-lg", "text-text-secondary", "mb-8", "max-w-lg"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], ["routerLink", "/register-company", 1, "bg-primary", "text-text-inverse", "text-sm", "font-bold", "px-8", "py-4", "rounded-xl", "shadow-lg", "hover:opacity-90", "transition-all", "cursor-pointer", "text-center"], [1, "flex", "items-center", "justify-center", "gap-2", "border", "border-border", "text-text", "text-sm", "font-bold", "px-8", "py-4", "rounded-xl", "hover:bg-surface-raised", "transition-all", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-base"], [1, "relative", "mt-8", "md:mt-0"], [1, "absolute", "-top-12", "-right-12", "w-64", "h-64", "bg-primary/10", "rounded-full", "blur-3xl"], [1, "relative", "bg-surface/80", "backdrop-blur-md", "p-1", "rounded-[20px]", "border", "border-border", "shadow-lg", "animate-bounce-subtle"], ["src", "/espacerh.png", "alt", "Interface WorkSphere", 1, "w-full", "rounded-[16px]", "object-cover"], [1, "absolute", "-bottom-6", "-left-6", "hidden", "lg:block", "bg-surface", "p-4", "rounded-xl", "shadow-lg", "border", "border-border"], [1, "w-10", "h-10", "bg-secondary-light", "rounded-full", "flex", "items-center", "justify-center"], [1, "material-symbols-outlined", "text-base", "text-secondary"], [1, "text-sm", "font-semibold", "text-text-heading"], [1, "text-xs", "text-text-muted"], ["id", "pourquoi", 1, "py-16", "px-4", "md:px-8", "bg-background-alt"], [1, "max-w-7xl", "mx-auto", "text-center", "mb-12"], [1, "font-heading", "text-2xl", "md:text-3xl", "font-bold", "text-text-heading", "mb-4"], [1, "text-text-secondary", "max-w-2xl", "mx-auto"], [1, "max-w-7xl", "mx-auto", "grid", "md:grid-cols-3", "gap-8"], [1, "group", "bg-surface", "p-8", "rounded-[10px]", "border", "border-border", "hover:border-primary", "transition-all", "duration-300", "hover:shadow-xl"], [1, "w-12", "h-12", "bg-primary-50", "flex", "items-center", "justify-center", "rounded-lg", "mb-6", "group-hover:scale-110", "transition-transform"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6", "text-primary"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], [1, "font-heading", "text-xl", "font-semibold", "text-text-heading", "mb-4"], [1, "text-sm", "text-text-secondary"], [1, "w-12", "h-12", "bg-secondary-light", "flex", "items-center", "justify-center", "rounded-lg", "mb-6", "group-hover:scale-110", "transition-transform"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6", "text-secondary"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "w-12", "h-12", "bg-warning-light", "flex", "items-center", "justify-center", "rounded-lg", "mb-6", "group-hover:scale-110", "transition-transform"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6", "text-warning-dark"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], ["id", "fonctionnalites", 1, "py-16", "px-4", "md:px-8", "bg-background"], [1, "max-w-7xl", "mx-auto"], [1, "mb-12"], [1, "text-text-secondary"], [1, "grid", "lg:grid-cols-3", "gap-6"], [1, "bg-surface", "p-8", "rounded-xl", "border", "border-border", "relative", "overflow-hidden", "flex", "flex-col", "justify-between"], [1, "flex", "items-center", "gap-2", "mb-6"], [1, "material-symbols-outlined", "text-primary", "text-base"], [1, "text-xs", "font-bold", "text-primary", "uppercase", "tracking-widest"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading", "mb-4"], [1, "space-y-3", "text-text-secondary"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-sm", "text-primary"], [1, "material-symbols-outlined", "text-secondary", "text-base"], [1, "text-xs", "font-bold", "text-secondary", "uppercase", "tracking-widest"], [1, "material-symbols-outlined", "text-sm", "text-secondary"], [1, "material-symbols-outlined", "text-warning-dark", "text-base"], [1, "text-xs", "font-bold", "text-warning-dark", "uppercase", "tracking-widest"], [1, "material-symbols-outlined", "text-sm", "text-warning-dark"], ["id", "comment-ca-marche", 1, "py-16", "px-4", "md:px-8", "bg-background-alt", "overflow-hidden"], [1, "font-heading", "text-2xl", "md:text-3xl", "font-bold", "text-text-heading", "text-center", "mb-16"], [1, "relative"], [1, "absolute", "top-1/2", "left-0", "w-full", "h-0.5", "bg-border", "-translate-y-1/2", "hidden", "md:block"], [1, "grid", "md:grid-cols-4", "gap-8", "relative"], [1, "flex", "flex-col", "items-center", "text-center", "group"], [1, "w-14", "h-14", "bg-surface", "border-2", "border-primary", "text-primary", "font-bold", "flex", "items-center", "justify-center", "rounded-full", "mb-6", "z-10", "group-hover:bg-primary", "group-hover:text-text-inverse", "transition-all"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading", "mb-3"], [1, "text-sm", "text-text-secondary", "px-4"], ["id", "avis", 1, "py-16", "px-4", "md:px-8", "bg-background"], [1, "font-heading", "text-2xl", "md:text-3xl", "font-bold", "text-text-heading", "text-center", "mb-12"], [1, "grid", "md:grid-cols-3", "gap-6"], [1, "bg-surface", "p-8", "rounded-xl", "shadow-sm", "border", "border-border", "hover:-translate-y-2", "transition-transform", "duration-300"], [1, "flex", "gap-1", "mb-4"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5", 2, "color", "#FFB800"], [1, "italic", "text-text-secondary", "mb-8", "text-sm"], [1, "w-12", "h-12", "rounded-full", "bg-primary-50", "text-primary", "flex", "items-center", "justify-center", "font-bold", "text-sm"], [1, "text-sm", "font-bold", "text-text-heading"], [1, "w-12", "h-12", "rounded-full", "bg-secondary-light", "text-secondary", "flex", "items-center", "justify-center", "font-bold", "text-sm"], [1, "w-12", "h-12", "rounded-full", "bg-warning-light", "text-warning-dark", "flex", "items-center", "justify-center", "font-bold", "text-sm"], [1, "py-16", "px-4", "md:px-8"], [1, "bg-primary", "rounded-3xl", "p-12", "text-center", "text-text-inverse", "shadow-2xl", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "opacity-10", "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]", "from-white", "via-transparent", "to-transparent"], [1, "text-2xl", "md:text-3xl", "font-heading", "font-bold", "mb-6", "relative", "z-10"], [1, "text-base", "md:text-lg", "mb-8", "max-w-xl", "mx-auto", "relative", "z-10", "opacity-90"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "justify-center", "relative", "z-10"], ["routerLink", "/register-company", 1, "bg-white", "text-primary", "text-sm", "font-bold", "px-12", "py-4", "rounded-xl", "shadow-lg", "hover:scale-105", "transition-transform", "cursor-pointer"], [1, "border", "border-white/40", "text-text-inverse", "hover:bg-white/10", "text-sm", "font-bold", "px-12", "py-4", "rounded-xl", "transition-colors", "cursor-pointer"], [1, "bg-background-alt", "text-text-secondary", "py-8", "px-4", "md:px-8", "border-t", "border-border"], [1, "max-w-7xl", "mx-auto", "flex", "flex-col", "md:flex-row", "justify-between", "items-center", "gap-6"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "w-6", "h-6"], [1, "font-heading", "text-xl", "font-bold"], [1, "flex", "gap-6", "text-sm", "text-text-muted"], [1, "hover:text-primary", "cursor-pointer", "transition-colors"], [1, "text-xs", "text-text-muted", "opacity-60"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6)(7, "circle", 7)(8, "path", 8)(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "span", 10);
      \u0275\u0275text(11, "WorkSphere");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "button", 12);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_13_listener() {
        return ctx.scrollTo("pourquoi");
      });
      \u0275\u0275text(14, "Pourquoi nous ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 12);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_15_listener() {
        return ctx.scrollTo("fonctionnalites");
      });
      \u0275\u0275text(16, "Fonctionnalit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 12);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_17_listener() {
        return ctx.scrollTo("comment-ca-marche");
      });
      \u0275\u0275text(18, "Comment \xE7a marche");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_19_listener() {
        return ctx.scrollTo("avis");
      });
      \u0275\u0275text(20, "Avis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275text(23, "Se connecter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 15);
      \u0275\u0275text(25, "Cr\xE9er mon entreprise");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "header", 16)(27, "div", 17)(28, "div", 18)(29, "span", 19);
      \u0275\u0275text(30, "\u2728 La RH de demain, aujourd'hui");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "h1", 20);
      \u0275\u0275text(32, " La gestion RH ");
      \u0275\u0275elementStart(33, "span", 21);
      \u0275\u0275text(34, "simplifi\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " pour votre entreprise ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 22);
      \u0275\u0275text(37, " Centralisez vos collaborateurs, automatisez vos processus et donnez de l'autonomie \xE0 vos \xE9quipes. Une plateforme con\xE7ue pour les PME modernes et exigeantes. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 23)(39, "a", 24);
      \u0275\u0275text(40, " Commencer gratuitement ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 25);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_41_listener() {
        return ctx.scrollTo("comment-ca-marche");
      });
      \u0275\u0275elementStart(42, "span", 26);
      \u0275\u0275text(43, "play_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " Voir comment \xE7a marche ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 27);
      \u0275\u0275element(46, "div", 28);
      \u0275\u0275elementStart(47, "div", 29);
      \u0275\u0275element(48, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 31)(50, "div", 13)(51, "div", 32)(52, "span", 33);
      \u0275\u0275text(53, "check_circle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div")(55, "p", 34);
      \u0275\u0275text(56, "Import r\xE9ussi !");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 35);
      \u0275\u0275text(58, "124 nouveaux employ\xE9s ajout\xE9s");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(59, "section", 36)(60, "div", 37)(61, "h2", 38);
      \u0275\u0275text(62, "Pourquoi choisir WorkSphere ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 39);
      \u0275\u0275text(64, "Plus qu'un simple outil, un partenaire de croissance pour votre d\xE9partement RH.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 40)(66, "div", 41)(67, "div", 42);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(68, "svg", 43);
      \u0275\u0275element(69, "path", 44)(70, "polyline", 45)(71, "line", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(72, "h3", 47);
      \u0275\u0275text(73, "Centralisez vos donn\xE9es RH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 48);
      \u0275\u0275text(75, "Fini les fichiers Excel dispers\xE9s. Regroupez toutes les informations de vos talents dans un espace unique, s\xE9curis\xE9 et conforme RGPD.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 41)(77, "div", 49);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(78, "svg", 50);
      \u0275\u0275element(79, "rect", 51)(80, "path", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(81, "h3", 47);
      \u0275\u0275text(82, "R\xF4les et permissions clairs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 48);
      \u0275\u0275text(84, "D\xE9finissez qui voit quoi. Des acc\xE8s granulaires pour les Administrateurs, Managers et Employ\xE9s en quelques clics.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 41)(86, "div", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(87, "svg", 54);
      \u0275\u0275element(88, "path", 55)(89, "polyline", 56)(90, "line", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(91, "h3", 47);
      \u0275\u0275text(92, "Import en masse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 48);
      \u0275\u0275text(94, "Gagnez des heures de travail. Importez l'int\xE9gralit\xE9 de votre base d'employ\xE9s via CSV en moins de 30 secondes.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "section", 58)(96, "div", 59)(97, "div", 60)(98, "h2", 38);
      \u0275\u0275text(99, "Un espace pens\xE9 pour chaque r\xF4le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 61);
      \u0275\u0275text(101, "Parce qu'un DRH et un alternant n'ont pas les m\xEAmes besoins.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 62)(103, "div", 63)(104, "div")(105, "div", 64)(106, "span", 65);
      \u0275\u0275text(107, "security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span", 66);
      \u0275\u0275text(109, "Administrateur");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "h4", 67);
      \u0275\u0275text(111, "Ma\xEEtrise totale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "ul", 68)(113, "li", 69)(114, "span", 70);
      \u0275\u0275text(115, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(116, " Import CSV ultra-rapide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "li", 69)(118, "span", 70);
      \u0275\u0275text(119, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(120, " Audit de s\xE9curit\xE9 complet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "li", 69)(122, "span", 70);
      \u0275\u0275text(123, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(124, " Configuration de l'organigramme");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "div", 63)(126, "div")(127, "div", 64)(128, "span", 71);
      \u0275\u0275text(129, "groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "span", 72);
      \u0275\u0275text(131, "Manager");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "h4", 67);
      \u0275\u0275text(133, "Vue d'ensemble \xE9quipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "ul", 68)(135, "li", 69)(136, "span", 73);
      \u0275\u0275text(137, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(138, " Calendrier d'\xE9quipe partag\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "li", 69)(140, "span", 73);
      \u0275\u0275text(141, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(142, " Suivi des entretiens annuels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "li", 69)(144, "span", 73);
      \u0275\u0275text(145, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(146, " Validation des demandes RH");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 63)(148, "div")(149, "div", 64)(150, "span", 74);
      \u0275\u0275text(151, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "span", 75);
      \u0275\u0275text(153, "Employ\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "h4", 67);
      \u0275\u0275text(155, "Autonomie simplifi\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "ul", 68)(157, "li", 69)(158, "span", 76);
      \u0275\u0275text(159, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(160, " Mise \xE0 jour du profil personnel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "li", 69)(162, "span", 76);
      \u0275\u0275text(163, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(164, " Acc\xE8s aux documents internes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "li", 69)(166, "span", 76);
      \u0275\u0275text(167, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(168, " Messagerie RH int\xE9gr\xE9e");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(169, "section", 77)(170, "div", 59)(171, "h2", 78);
      \u0275\u0275text(172, "Comment \xE7a marche ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 79);
      \u0275\u0275element(174, "div", 80);
      \u0275\u0275elementStart(175, "div", 81)(176, "div", 82)(177, "div", 83);
      \u0275\u0275text(178, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "h5", 84);
      \u0275\u0275text(180, "Cr\xE9ez votre entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "p", 85);
      \u0275\u0275text(182, "Configurez votre compte en 2 minutes avec vos infos de base.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 82)(184, "div", 83);
      \u0275\u0275text(185, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "h5", 84);
      \u0275\u0275text(187, "Importez vos employ\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "p", 85);
      \u0275\u0275text(189, "Uploadez votre fichier CSV existant pour tout synchroniser.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "div", 82)(191, "div", 83);
      \u0275\u0275text(192, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "h5", 84);
      \u0275\u0275text(194, "Activation des comptes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "p", 85);
      \u0275\u0275text(196, "Invitez vos \xE9quipes \xE0 rejoindre leur nouvel espace de travail.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 82)(198, "div", 83);
      \u0275\u0275text(199, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "h5", 84);
      \u0275\u0275text(201, "G\xE9rez au quotidien");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p", 85);
      \u0275\u0275text(203, "Suivez, automatisez et optimisez votre gestion humaine.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(204, "section", 86)(205, "div", 59)(206, "h2", 87);
      \u0275\u0275text(207, "Ils nous font confiance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 88)(209, "div", 89)(210, "div", 90);
      \u0275\u0275repeaterCreate(211, HomeComponent_For_212_Template, 2, 0, ":svg:svg", 91, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "p", 92);
      \u0275\u0275text(214, `"WorkSphere a radicalement chang\xE9 notre fa\xE7on de g\xE9rer les dossiers du personnel. L'import CSV est magique."`);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 13)(216, "div", 93);
      \u0275\u0275text(217, "MS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "div")(219, "p", 94);
      \u0275\u0275text(220, "Marie Simon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "p", 35);
      \u0275\u0275text(222, "DRH, TechLogistics");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(223, "div", 89)(224, "div", 90);
      \u0275\u0275repeaterCreate(225, HomeComponent_For_226_Template, 2, 0, ":svg:svg", 91, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p", 92);
      \u0275\u0275text(228, `"La meilleure interface RH que j'ai utilis\xE9e. Mes managers ont enfin les bons outils pour suivre leurs \xE9quipes."`);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 13)(230, "div", 95);
      \u0275\u0275text(231, "JL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div")(233, "p", 94);
      \u0275\u0275text(234, "Julien Laurent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "p", 35);
      \u0275\u0275text(236, "CEO, GreenScale");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(237, "div", 89)(238, "div", 90);
      \u0275\u0275repeaterCreate(239, HomeComponent_For_240_Template, 2, 0, ":svg:svg", 91, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "p", 92);
      \u0275\u0275text(242, `"C'est simple, intuitif et \xE7a fait gagner un temps pr\xE9cieux \xE0 tout le monde. On ne reviendrait jamais en arri\xE8re."`);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 13)(244, "div", 96);
      \u0275\u0275text(245, "SK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "div")(247, "p", 94);
      \u0275\u0275text(248, "Sarah Kenza");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "p", 35);
      \u0275\u0275text(250, "Office Manager, CreativeFlow");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(251, "section", 97)(252, "div", 59)(253, "div", 98);
      \u0275\u0275element(254, "div", 99);
      \u0275\u0275elementStart(255, "h2", 100);
      \u0275\u0275text(256, "Pr\xEAt \xE0 simplifier votre gestion RH ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "p", 101);
      \u0275\u0275text(258, "Rejoignez plus de 500 entreprises qui automatisent d\xE9j\xE0 leur quotidien avec WorkSphere.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 102)(260, "a", 103);
      \u0275\u0275text(261, " Cr\xE9er mon entreprise maintenant ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "button", 104);
      \u0275\u0275text(263, " Contacter un expert ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(264, "footer", 105)(265, "div", 106)(266, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(267, "svg", 107);
      \u0275\u0275element(268, "path", 6)(269, "circle", 7)(270, "path", 8)(271, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(272, "span", 108);
      \u0275\u0275text(273, "WorkSphere");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 109)(275, "a", 110);
      \u0275\u0275text(276, "CGU & Mentions L\xE9gales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "a", 110);
      \u0275\u0275text(278, "Politique de Confidentialit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "a", 110);
      \u0275\u0275text(280, "Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "p", 111);
      \u0275\u0275text(282, "\xA9 2024 WorkSphere. Tous droits r\xE9serv\xE9s.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(211);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
      \u0275\u0275advance(14);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c0));
      \u0275\u0275advance(14);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c0));
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n@keyframes _ngcontent-%COMP%_bounce-subtle {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.animate-bounce-subtle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce-subtle 4s ease-in-out infinite;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [RouterModule], template: `<div class="font-sans text-text bg-background overflow-x-hidden">

  <!-- Navigation Shell -->
  <nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-border transition-all duration-300">
    <div class="flex justify-between items-center h-16 px-6 md:px-8 max-w-7xl mx-auto w-full">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span class="font-heading text-[24px] font-bold tracking-tight">WorkSphere</span>
        </div>
        <div class="hidden md:flex items-center gap-6">
          <button (click)="scrollTo('pourquoi')" class="text-sm text-text-secondary hover:text-primary transition-colors cursor-pointer">Pourquoi nous ?</button>
          <button (click)="scrollTo('fonctionnalites')" class="text-sm text-text-secondary hover:text-primary transition-colors cursor-pointer">Fonctionnalit\xE9s</button>
          <button (click)="scrollTo('comment-ca-marche')" class="text-sm text-text-secondary hover:text-primary transition-colors cursor-pointer">Comment \xE7a marche</button>
          <button (click)="scrollTo('avis')" class="text-sm text-text-secondary hover:text-primary transition-colors cursor-pointer">Avis</button>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <a routerLink="/login" class="text-sm text-text-secondary px-4 py-2 hover:bg-background-alt rounded-lg transition-all cursor-pointer">Se connecter</a>
        <a routerLink="/register-company" class="bg-primary text-text-inverse text-sm font-semibold px-6 py-2 rounded-lg shadow-sm hover:opacity-90 transition-all cursor-pointer">Cr\xE9er mon entreprise</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-surface">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div class="z-10">
        <span class="inline-block bg-primary-50 text-primary text-xs font-bold px-4 py-1 rounded-full mb-4">\u2728 La RH de demain, aujourd'hui</span>
        <h1 class="font-heading text-4xl md:text-5xl font-bold text-text-heading mb-6 leading-tight">
          La gestion RH <span class="text-primary italic">simplifi\xE9e</span> pour votre entreprise
        </h1>
        <p class="text-base md:text-lg text-text-secondary mb-8 max-w-lg">
          Centralisez vos collaborateurs, automatisez vos processus et donnez de l'autonomie \xE0 vos \xE9quipes. Une plateforme con\xE7ue pour les PME modernes et exigeantes.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a routerLink="/register-company" class="bg-primary text-text-inverse text-sm font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-all cursor-pointer text-center">
            Commencer gratuitement
          </a>
          <button (click)="scrollTo('comment-ca-marche')" class="flex items-center justify-center gap-2 border border-border text-text text-sm font-bold px-8 py-4 rounded-xl hover:bg-surface-raised transition-all cursor-pointer">
            <span class="material-symbols-outlined text-base">play_circle</span>
            Voir comment \xE7a marche
          </button>
        </div>
      </div>
      <div class="relative mt-8 md:mt-0">
        <div class="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="relative bg-surface/80 backdrop-blur-md p-1 rounded-[20px] border border-border shadow-lg animate-bounce-subtle">
          <img src="/espacerh.png" alt="Interface WorkSphere" class="w-full rounded-[16px] object-cover">
        </div>
        <!-- Floating Card -->
        <div class="absolute -bottom-6 -left-6 hidden lg:block bg-surface p-4 rounded-xl shadow-lg border border-border">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center">
              <span class="material-symbols-outlined text-base text-secondary">check_circle</span>
            </div>
            <div>
              <p class="text-sm font-semibold text-text-heading">Import r\xE9ussi !</p>
              <p class="text-xs text-text-muted">124 nouveaux employ\xE9s ajout\xE9s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Pourquoi WorkSphere -->
  <section class="py-16 px-4 md:px-8 bg-background-alt" id="pourquoi">
    <div class="max-w-7xl mx-auto text-center mb-12">
      <h2 class="font-heading text-2xl md:text-3xl font-bold text-text-heading mb-4">Pourquoi choisir WorkSphere ?</h2>
      <p class="text-text-secondary max-w-2xl mx-auto">Plus qu'un simple outil, un partenaire de croissance pour votre d\xE9partement RH.</p>
    </div>
    <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      <div class="group bg-surface p-8 rounded-[10px] border border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-primary-50 flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        </div>
        <h3 class="font-heading text-xl font-semibold text-text-heading mb-4">Centralisez vos donn\xE9es RH</h3>
        <p class="text-sm text-text-secondary">Fini les fichiers Excel dispers\xE9s. Regroupez toutes les informations de vos talents dans un espace unique, s\xE9curis\xE9 et conforme RGPD.</p>
      </div>
      <div class="group bg-surface p-8 rounded-[10px] border border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-secondary-light flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-secondary"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </div>
        <h3 class="font-heading text-xl font-semibold text-text-heading mb-4">R\xF4les et permissions clairs</h3>
        <p class="text-sm text-text-secondary">D\xE9finissez qui voit quoi. Des acc\xE8s granulaires pour les Administrateurs, Managers et Employ\xE9s en quelques clics.</p>
      </div>
      <div class="group bg-surface p-8 rounded-[10px] border border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
        <div class="w-12 h-12 bg-warning-light flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-warning-dark"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
        </div>
        <h3 class="font-heading text-xl font-semibold text-text-heading mb-4">Import en masse</h3>
        <p class="text-sm text-text-secondary">Gagnez des heures de travail. Importez l'int\xE9gralit\xE9 de votre base d'employ\xE9s via CSV en moins de 30 secondes.</p>
      </div>
    </div>
  </section>

  <!-- Fonctionnalit\xE9s (Role-Specific Bento Grid) -->
  <section class="py-16 px-4 md:px-8 bg-background" id="fonctionnalites">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <h2 class="font-heading text-2xl md:text-3xl font-bold text-text-heading mb-4">Un espace pens\xE9 pour chaque r\xF4le</h2>
        <p class="text-text-secondary">Parce qu'un DRH et un alternant n'ont pas les m\xEAmes besoins.</p>
      </div>
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Admin Space -->
        <div class="bg-surface p-8 rounded-xl border border-border relative overflow-hidden flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined text-primary text-base">security</span>
              <span class="text-xs font-bold text-primary uppercase tracking-widest">Administrateur</span>
            </div>
            <h4 class="font-heading text-lg font-semibold text-text-heading mb-4">Ma\xEEtrise totale</h4>
            <ul class="space-y-3 text-text-secondary">
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-primary">check</span> Import CSV ultra-rapide</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-primary">check</span> Audit de s\xE9curit\xE9 complet</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-primary">check</span> Configuration de l'organigramme</li>
            </ul>
          </div>
         
        </div>
        <!-- Manager Space -->
        <div class="bg-surface p-8 rounded-xl border border-border relative overflow-hidden flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined text-secondary text-base">groups</span>
              <span class="text-xs font-bold text-secondary uppercase tracking-widest">Manager</span>
            </div>
            <h4 class="font-heading text-lg font-semibold text-text-heading mb-4">Vue d'ensemble \xE9quipe</h4>
            <ul class="space-y-3 text-text-secondary">
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-secondary">check</span> Calendrier d'\xE9quipe partag\xE9</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-secondary">check</span> Suivi des entretiens annuels</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-secondary">check</span> Validation des demandes RH</li>
            </ul>
          </div>
         
        </div>
        <!-- Employee Space -->
        <div class="bg-surface p-8 rounded-xl border border-border relative overflow-hidden flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined text-warning-dark text-base">person</span>
              <span class="text-xs font-bold text-warning-dark uppercase tracking-widest">Employ\xE9</span>
            </div>
            <h4 class="font-heading text-lg font-semibold text-text-heading mb-4">Autonomie simplifi\xE9e</h4>
            <ul class="space-y-3 text-text-secondary">
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-warning-dark">check</span> Mise \xE0 jour du profil personnel</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-warning-dark">check</span> Acc\xE8s aux documents internes</li>
              <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-warning-dark">check</span> Messagerie RH int\xE9gr\xE9e</li>
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  </section>

  <!-- Comment \xE7a marche -->
  <section class="py-16 px-4 md:px-8 bg-background-alt overflow-hidden" id="comment-ca-marche">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-heading text-2xl md:text-3xl font-bold text-text-heading text-center mb-16">Comment \xE7a marche ?</h2>
      <div class="relative">
        <!-- Connecting Line -->
        <div class="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
        <div class="grid md:grid-cols-4 gap-8 relative">
          <div class="flex flex-col items-center text-center group">
            <div class="w-14 h-14 bg-surface border-2 border-primary text-primary font-bold flex items-center justify-center rounded-full mb-6 z-10 group-hover:bg-primary group-hover:text-text-inverse transition-all">1</div>
            <h5 class="font-heading text-lg font-semibold text-text-heading mb-3">Cr\xE9ez votre entreprise</h5>
            <p class="text-sm text-text-secondary px-4">Configurez votre compte en 2 minutes avec vos infos de base.</p>
          </div>
          <div class="flex flex-col items-center text-center group">
            <div class="w-14 h-14 bg-surface border-2 border-primary text-primary font-bold flex items-center justify-center rounded-full mb-6 z-10 group-hover:bg-primary group-hover:text-text-inverse transition-all">2</div>
            <h5 class="font-heading text-lg font-semibold text-text-heading mb-3">Importez vos employ\xE9s</h5>
            <p class="text-sm text-text-secondary px-4">Uploadez votre fichier CSV existant pour tout synchroniser.</p>
          </div>
          <div class="flex flex-col items-center text-center group">
            <div class="w-14 h-14 bg-surface border-2 border-primary text-primary font-bold flex items-center justify-center rounded-full mb-6 z-10 group-hover:bg-primary group-hover:text-text-inverse transition-all">3</div>
            <h5 class="font-heading text-lg font-semibold text-text-heading mb-3">Activation des comptes</h5>
            <p class="text-sm text-text-secondary px-4">Invitez vos \xE9quipes \xE0 rejoindre leur nouvel espace de travail.</p>
          </div>
          <div class="flex flex-col items-center text-center group">
            <div class="w-14 h-14 bg-surface border-2 border-primary text-primary font-bold flex items-center justify-center rounded-full mb-6 z-10 group-hover:bg-primary group-hover:text-text-inverse transition-all">4</div>
            <h5 class="font-heading text-lg font-semibold text-text-heading mb-3">G\xE9rez au quotidien</h5>
            <p class="text-sm text-text-secondary px-4">Suivez, automatisez et optimisez votre gestion humaine.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Avis (Testimonials) -->
  <section class="py-16 px-4 md:px-8 bg-background" id="avis">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-heading text-2xl md:text-3xl font-bold text-text-heading text-center mb-12">Ils nous font confiance</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-surface p-8 rounded-xl shadow-sm border border-border hover:-translate-y-2 transition-transform duration-300">
          <div class="flex gap-1 mb-4">
            @for (star of [1,2,3,4,5]; track star) {
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" style="color: #FFB800"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            }
          </div>
          <p class="italic text-text-secondary mb-8 text-sm">"WorkSphere a radicalement chang\xE9 notre fa\xE7on de g\xE9rer les dossiers du personnel. L'import CSV est magique."</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center font-bold text-sm">MS</div>
            <div>
              <p class="text-sm font-bold text-text-heading">Marie Simon</p>
              <p class="text-xs text-text-muted">DRH, TechLogistics</p>
            </div>
          </div>
        </div>
        <div class="bg-surface p-8 rounded-xl shadow-sm border border-border hover:-translate-y-2 transition-transform duration-300">
          <div class="flex gap-1 mb-4">
            @for (star of [1,2,3,4,5]; track star) {
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" style="color: #FFB800"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            }
          </div>
          <p class="italic text-text-secondary mb-8 text-sm">"La meilleure interface RH que j'ai utilis\xE9e. Mes managers ont enfin les bons outils pour suivre leurs \xE9quipes."</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-secondary-light text-secondary flex items-center justify-center font-bold text-sm">JL</div>
            <div>
              <p class="text-sm font-bold text-text-heading">Julien Laurent</p>
              <p class="text-xs text-text-muted">CEO, GreenScale</p>
            </div>
          </div>
        </div>
        <div class="bg-surface p-8 rounded-xl shadow-sm border border-border hover:-translate-y-2 transition-transform duration-300">
          <div class="flex gap-1 mb-4">
            @for (star of [1,2,3,4,5]; track star) {
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" style="color: #FFB800"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            }
          </div>
          <p class="italic text-text-secondary mb-8 text-sm">"C'est simple, intuitif et \xE7a fait gagner un temps pr\xE9cieux \xE0 tout le monde. On ne reviendrait jamais en arri\xE8re."</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-warning-light text-warning-dark flex items-center justify-center font-bold text-sm">SK</div>
            <div>
              <p class="text-sm font-bold text-text-heading">Sarah Kenza</p>
              <p class="text-xs text-text-muted">Office Manager, CreativeFlow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Final -->
  <section class="py-16 px-4 md:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="bg-primary rounded-3xl p-12 text-center text-text-inverse shadow-2xl relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <h2 class="text-2xl md:text-3xl font-heading font-bold mb-6 relative z-10">Pr\xEAt \xE0 simplifier votre gestion RH ?</h2>
        <p class="text-base md:text-lg mb-8 max-w-xl mx-auto relative z-10 opacity-90">Rejoignez plus de 500 entreprises qui automatisent d\xE9j\xE0 leur quotidien avec WorkSphere.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a routerLink="/register-company" class="bg-white text-primary text-sm font-bold px-12 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Cr\xE9er mon entreprise maintenant
          </a>
          <button class="border border-white/40 text-text-inverse hover:bg-white/10 text-sm font-bold px-12 py-4 rounded-xl transition-colors cursor-pointer">
            Contacter un expert
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-background-alt text-text-secondary py-8 px-4 md:px-8 border-t border-border">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center gap-2 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span class="font-heading text-xl font-bold">WorkSphere</span>
      </div>
      <div class="flex gap-6 text-sm text-text-muted">
        <a class="hover:text-primary cursor-pointer transition-colors">CGU &amp; Mentions L\xE9gales</a>
        <a class="hover:text-primary cursor-pointer transition-colors">Politique de Confidentialit\xE9</a>
        <a class="hover:text-primary cursor-pointer transition-colors">Contact</a>
      </div>
      <p class="text-xs text-text-muted opacity-60">&copy; 2024 WorkSphere. Tous droits r\xE9serv\xE9s.</p>
    </div>
  </footer>
</div>`, styles: ["/* src/app/features/home/home.component.scss */\n@keyframes bounce-subtle {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.animate-bounce-subtle {\n  animation: bounce-subtle 4s ease-in-out infinite;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 17 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-23WYUPMB.js.map
