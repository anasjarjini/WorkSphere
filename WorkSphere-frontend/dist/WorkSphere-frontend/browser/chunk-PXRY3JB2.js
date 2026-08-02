import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables
} from "./chunk-J4YOXBWR.js";
import {
  EmployeeService
} from "./chunk-EAQSU6LC.js";
import {
  ProjectService
} from "./chunk-RUGM4DEW.js";
import {
  ToastService
} from "./chunk-4PEYXIMQ.js";
import {
  TaskAttachmentService,
  TaskCommentService,
  TaskDependencyService
} from "./chunk-6UZHZSJE.js";
import {
  TaskService
} from "./chunk-PRJJ3FJQ.js";
import {
  AvatarComponent
} from "./chunk-LREV36OT.js";
import {
  ImageUrlService
} from "./chunk-44FZWU4S.js";
import {
  FileUploaderComponent
} from "./chunk-BYBK475U.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7RQSPZX3.js";
import {
  AuthService
} from "./chunk-LX3KUZXT.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-ZEAXW3MP.js";
import {
  DatePipe,
  isPlatformBrowser
} from "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostListener,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  Service,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  computed,
  createComponent,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  interval,
  isObservable,
  map,
  merge,
  numberAttribute,
  of,
  output,
  pairwise,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ZST2RCVM.js";

// node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getEventTarget(event) {
  if (event.composedPath) {
    try {
      return event.composedPath()[0];
    } catch {
    }
  }
  return event.target;
}

// node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Platform,
    factory: _Platform.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  get value() {
    return this.valueSignal();
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Directionality,
    factory: _Directionality.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Service
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}

// node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs
var ArrayDataSource = class extends DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _RecycleViewRepeaterStrategy = class {
  viewCacheSize = 20;
  _viewCache = [];
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  _isInitialized = false;
  _rawDir = "";
  change = new EventEmitter();
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set(_resolveDirectionality(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  get value() {
    return this.dir;
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static \u0275fac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  _viewport = null;
  _itemSize;
  _minBufferPx;
  _maxBufferPx;
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentScrolled() {
    this._updateRenderedRange();
  }
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentRendered() {
  }
  onRenderedOffsetChanged() {
  }
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static \u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  _scrolled = new Subject();
  _scrolledCount = 0;
  scrollContainers = /* @__PURE__ */ new Map();
  register(target) {
    if (!this.scrollContainers.has(target)) {
      this.scrollContainers.set(target, target.elementScrolled().subscribe(() => this._scrolled.next(target)));
    }
  }
  deregister(target) {
    const ref = this.scrollContainers.get(target);
    if (ref) {
      ref.unsubscribe();
      this.scrollContainers.delete(target);
    }
  }
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_, target) => {
      if (this._targetContainsElement(target, elementOrElementRef)) {
        scrollingContainers.push(target);
      }
    });
    return scrollingContainers;
  }
  _targetContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let targetElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == targetElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Service
  }], null, null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  elementScrolled() {
    return this._elementScrolled;
  }
  getElementRef() {
    return this.elementRef;
  }
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static \u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], null, null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  _viewportSize = null;
  _change = new Subject();
  _document = inject(DOCUMENT);
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output2 = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output2;
  }
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body?.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body?.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _ViewportRuler,
    factory: _ViewportRuler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Service
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkVirtualScrollable_BaseFactory;
    return function CdkVirtualScrollable_Factory(__ngFactoryType__) {
      return (\u0275CdkVirtualScrollable_BaseFactory || (\u0275CdkVirtualScrollable_BaseFactory = \u0275\u0275getInheritedFactory(_CdkVirtualScrollable)))(__ngFactoryType__ || _CdkVirtualScrollable);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollable,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], null, null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CDK_VIRTUAL_SCROLL_VIEWPORT = new InjectionToken("CDK_VIRTUAL_SCROLL_VIEWPORT");
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  _detachedSubject = new Subject();
  _renderedRangeSubject = new Subject();
  _renderedContentOffsetSubject = new Subject();
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  appendOnly = false;
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  _contentWrapper;
  renderedRangeStream = this._renderedRangeSubject;
  renderedContentOffset = this._renderedContentOffsetSubject.pipe(filter((offset) => offset !== null), distinctUntilChanged());
  _totalContentSize = 0;
  _totalContentWidth = signal("", ...ngDevMode ? [{
    debugName: "_totalContentWidth"
  }] : []);
  _totalContentHeight = signal("", ...ngDevMode ? [{
    debugName: "_totalContentHeight"
  }] : []);
  _renderedContentTransform;
  _renderedRange = {
    start: 0,
    end: 0
  };
  _dataLength = 0;
  _viewportSize = 0;
  _forOf = null;
  _renderedContentOffset = 0;
  _renderedContentOffsetNeedsRewrite = false;
  _changeDetectionNeeded = signal(false, ...ngDevMode ? [{
    debugName: "_changeDetectionNeeded"
  }] : []);
  _runAfterChangeDetection = [];
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
    const ref = effect(() => {
      if (this._changeDetectionNeeded()) {
        this._doChangeDetection();
      }
    }, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "ref"
    } : {}), {
      injector: inject(ApplicationRef).injector
    }));
    inject(DestroyRef).onDestroy(() => void ref.destroy());
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(startWith(null), auditTime(0, SCROLL_SCHEDULER), takeUntil(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  getDataLength() {
    return this._dataLength;
  }
  getViewportSize() {
    return this._viewportSize;
  }
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (untracked(this._changeDetectionNeeded)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this.ngZone.run(() => {
          this._changeDetectionNeeded.set(true);
        });
      });
    });
  }
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart());
      afterNextRender(() => {
        this._changeDetectionNeeded.set(false);
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  _calculateSpacerSize() {
    this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
    this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
  }
  static \u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useFactory: () => inject(VIRTUAL_SCROLLABLE, {
        optional: true
      }) || inject(_CdkVirtualScrollViewport)
    }, {
      provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
      useExisting: _CdkVirtualScrollViewport
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
      }
    },
    styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useFactory: () => inject(VIRTUAL_SCROLLABLE, {
          optional: true
        }) || inject(CdkVirtualScrollViewport)
      }, {
        provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
        useExisting: CdkVirtualScrollViewport
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n',
      styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = new _RecycleViewRepeaterStrategy();
  _viewport = inject(CDK_VIRTUAL_SCROLL_VIEWPORT, {
    skipSelf: true
  });
  viewChange = new Subject();
  _dataSourceChanges = new Subject();
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  dataStream = this._dataSourceChanges.pipe(startWith(null), pairwise(), switchMap(([prev, cur]) => this._changeDataSource(prev, cur)), shareReplay(1));
  _differ = null;
  _data = [];
  _renderedItems = [];
  _renderedRange = {
    start: 0,
    end: 0
  };
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static \u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]"
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkVirtualScrollableElement_BaseFactory;
    return function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
      return (\u0275CdkVirtualScrollableElement_BaseFactory || (\u0275CdkVirtualScrollableElement_BaseFactory = \u0275\u0275getInheritedFactory(_CdkVirtualScrollableElement)))(__ngFactoryType__ || _CdkVirtualScrollableElement);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], null, null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static \u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static \u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static \u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
var counters = /* @__PURE__ */ new Map();
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    let count = counters.get(prefix);
    if (count === void 0) {
      count = 0;
    } else {
      count++;
    }
    counters.set(prefix, count);
    return `${prefix}${randomize ? __IdGenerator._infix + "-" : ""}${count}`;
  }
  static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: __IdGenerator,
    factory: __IdGenerator.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function isOverflowingParent(parentRect, childRect) {
  const isLeftOverflowing = childRect.left < parentRect.left;
  const isRightOverflowing = childRect.left + childRect.width > parentRect.right;
  const isTopOverflowing = childRect.top < parentRect.top;
  const isBottomOverflowing = childRect.top + childRect.height > parentRect.bottom;
  return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  _document;
  positions = /* @__PURE__ */ new Map();
  constructor(_document) {
    this._document = _document;
  }
  clear() {
    this.positions.clear();
  }
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
var capturingEventOptions = {
  capture: true
};
var activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
var _ResetsLoader = class __ResetsLoader {
  static \u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __ResetsLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __ResetsLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-drag-resets-container", ""],
    decls: 0,
    vars: 0,
    template: function _ResetsLoader_Template(rf, ctx) {
    },
    styles: ["@layer cdk-resets {\n  .cdk-drag-preview {\n    background: none;\n    border: none;\n    padding: 0;\n    color: inherit;\n    inset: auto;\n  }\n}\n.cdk-drag-placeholder *,\n.cdk-drag-preview * {\n  pointer-events: none !important;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets {\n  .cdk-drag-preview {\n    background: none;\n    border: none;\n    padding: 0;\n    color: inherit;\n    inset: auto;\n  }\n}\n.cdk-drag-placeholder *,\n.cdk-drag-preview * {\n  pointer-events: none !important;\n}\n"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupDocumentTouchmove;
  _scroll = new Subject();
  _dropInstances = /* @__PURE__ */ new Set();
  _dragInstances = /* @__PURE__ */ new Set();
  _activeDragInstances = signal([], ...ngDevMode ? [{
    debugName: "_activeDragInstances"
  }] : []);
  _globalListeners;
  _draggingPredicate = (item) => item.isDragging();
  _domNodesToDirectives = null;
  pointerMove = new Subject();
  pointerUp = new Subject();
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupDocumentTouchmove?.();
        this._cleanupDocumentTouchmove = this._renderer.listen(this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions$1);
      });
    }
  }
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._cleanupDocumentTouchmove?.();
    }
  }
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._styleLoader.load(_ResetsLoader);
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      const endEventHandler = (e) => this.pointerUp.next(e);
      const toBind = [["scroll", (e) => this._scroll.next(e), capturingEventOptions], ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions$1]];
      if (isTouchEvent2) {
        toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
      } else {
        toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
      }
      if (!isTouchEvent2) {
        toBind.push(["mousemove", (e) => this.pointerMove.next(e), activeCapturingEventOptions$1]);
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners = toBind.map(([name, handler, options]) => this._renderer.listen(this._document, name, handler, options));
      });
    }
  }
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  scrolled(shadowRoot) {
    const streams = [this._scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const cleanup = this._renderer.listen(shadowRoot, "scroll", (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          }, capturingEventOptions);
          return () => {
            cleanup();
          };
        });
      }));
    }
    return merge(...streams);
  }
  registerDirectiveNode(node, dragRef) {
    this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
    this._domNodesToDirectives.set(node, dragRef);
  }
  removeDirectiveNode(node) {
    this._domNodesToDirectives?.delete(node);
  }
  getDragDirectiveForNode(node) {
    return this._domNodesToDirectives?.get(node) || null;
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._domNodesToDirectives = null;
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  _preventDefaultWhileDragging = (event) => {
    if (this._activeDragInstances().length > 0) {
      event.preventDefault();
    }
  };
  _persistentTouchmoveListener = (event) => {
    if (this._activeDragInstances().length > 0) {
      if (this._activeDragInstances().some(this._draggingPredicate)) {
        event.preventDefault();
      }
      this.pointerMove.next(event);
    }
  };
  _clearGlobalListeners() {
    this._globalListeners?.forEach((cleanup) => cleanup());
    this._globalListeners = void 0;
  }
  static \u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _DragDropRegistry,
    factory: _DragDropRegistry.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Service
  }], null, null);
})();
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set(["position"]);
var PreviewRef = class {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  _previewEmbeddedView = null;
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      "pointer-events": "none",
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = {
  passive: true
};
var activeEventListenerOptions = {
  passive: false
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var MOUSE_EVENT_IGNORE_TIME = 800;
var PLACEHOLDER_CLASS = "cdk-drag-placeholder";
var dragImportantProperties = /* @__PURE__ */ new Set(["position"]);
function createDragRef(injector, element, config = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
}) {
  const renderer = injector.get(Renderer2, null, {
    optional: true
  }) || injector.get(RendererFactory2).createRenderer(null, null);
  return new DragRef(element, config, injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler), injector.get(DragDropRegistry), renderer);
}
var DragRef = class {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  _preview = null;
  _previewContainer;
  _placeholderRef = null;
  _placeholder;
  _pickupPositionInElement;
  _pickupPositionOnPage;
  _marker;
  _anchor = null;
  _passiveTransform = {
    x: 0,
    y: 0
  };
  _activeTransform = {
    x: 0,
    y: 0
  };
  _initialTransform;
  _hasStartedDragging = signal(false, ...ngDevMode ? [{
    debugName: "_hasStartedDragging"
  }] : []);
  _hasMoved = false;
  _initialContainer;
  _initialIndex;
  _parentPositions;
  _moveEvents = new Subject();
  _pointerDirectionDelta;
  _pointerPositionAtLastDirectionChange;
  _lastKnownPointerPosition;
  _rootElement;
  _ownerSVGElement = null;
  _rootElementTapHighlight;
  _pointerMoveSubscription = Subscription.EMPTY;
  _pointerUpSubscription = Subscription.EMPTY;
  _scrollSubscription = Subscription.EMPTY;
  _resizeSubscription = Subscription.EMPTY;
  _lastTouchEventTime;
  _dragStartTime;
  _boundaryElement = null;
  _nativeInteractionsEnabled = true;
  _initialDomRect;
  _previewRect;
  _boundaryRect;
  _previewTemplate;
  _placeholderTemplate;
  _handles = [];
  _disabledHandles = /* @__PURE__ */ new Set();
  _dropContainer;
  _direction = "ltr";
  _parentDragRef = null;
  _cachedShadowRoot;
  lockAxis = null;
  dragStartDelay = 0;
  previewClass;
  scale = 1;
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  beforeStarted = new Subject();
  started = new Subject();
  released = new Subject();
  ended = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  moved = this._moveEvents;
  data;
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  getPlaceholderElement() {
    return this._placeholder;
  }
  getRootElement() {
    return this._rootElement;
  }
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      const renderer = this._renderer;
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "mousedown", this._pointerDown, activeEventListenerOptions), renderer.listen(element, "touchstart", this._pointerDown, passiveEventListenerOptions), renderer.listen(element, "dragstart", this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._marker?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._marker = this._parentDragRef = null;
  }
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  resetToBoundary() {
    if (this._boundaryElement && this._rootElement && isOverflowingParent(this._boundaryElement.getBoundingClientRect(), this._rootElement.getBoundingClientRect())) {
      const parentRect = this._boundaryElement.getBoundingClientRect();
      const childRect = this._rootElement.getBoundingClientRect();
      let offsetX = 0;
      let offsetY = 0;
      if (childRect.left < parentRect.left) {
        offsetX = parentRect.left - childRect.left;
      } else if (childRect.right > parentRect.right) {
        offsetX = parentRect.right - childRect.right;
      }
      if (childRect.top < parentRect.top) {
        offsetY = parentRect.top - childRect.top;
      } else if (childRect.bottom > parentRect.bottom) {
        offsetY = parentRect.bottom - childRect.bottom;
      }
      const currentLeft = this._activeTransform.x;
      const currentTop = this._activeTransform.y;
      let x = currentLeft + offsetX, y = currentTop + offsetY;
      this._rootElement.style.transform = getTransform(x, y);
      this._activeTransform = {
        x,
        y
      };
      this._passiveTransform = {
        x,
        y
      };
    }
  }
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = void 0;
  }
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  _destroyPlaceholder() {
    this._anchor?.remove();
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._anchor = this._placeholderRef = null;
  }
  _pointerDown = (event) => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  _pointerMove = (event) => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  _pointerUp = (event) => {
    this._endDragSequence(event);
  };
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = this._renderer.listen(shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const marker = this._marker = this._marker || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-marker" : "");
      parent.insertBefore(marker, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._marker.parentNode.replaceChild(this._rootElement, this._marker);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        const exitIndex = this._dropContainer.getItemIndex(this);
        const nextItemElement = this._dropContainer.getItemAtIndex(exitIndex + 1)?.getVisibleElement() || null;
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._conditionallyInsertAnchor(newContainer, this._dropContainer, nextItemElement);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add(PLACEHOLDER_CLASS);
    return placeholder;
  }
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach((cleanup) => cleanup());
    this._rootElementCleanups = void 0;
  }
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  _nativeDragStart = (event) => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
  _conditionallyInsertAnchor(newContainer, exitContainer, nextItemElement) {
    if (newContainer === this._initialContainer) {
      this._anchor?.remove();
      this._anchor = null;
    } else if (exitContainer === this._initialContainer && exitContainer.hasAnchor) {
      const anchor = this._anchor ??= deepCloneNode(this._placeholder);
      anchor.classList.remove(PLACEHOLDER_CLASS);
      anchor.classList.add("cdk-drag-anchor");
      anchor.style.transform = "";
      if (nextItemElement) {
        nextItemElement.before(anchor);
      } else {
        coerceElement(exitContainer.element).appendChild(anchor);
      }
    }
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _itemPositions = [];
  _activeDraggables;
  orientation = "vertical";
  direction = "ltr";
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  start(items) {
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    const newIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  getItemIndex(item) {
    return this._getVisualItemPositions().findIndex((currentItem) => currentItem.drag === item);
  }
  getItemAtIndex(index) {
    return this._getVisualItemPositions()[index]?.drag || null;
  }
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  _getVisualItemPositions() {
    return this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
  }
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  _document;
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _rootNode;
  _activeItems;
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  withItems(items) {
    this._activeItems = items.slice();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._activeItems[index] || null;
  }
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
function createDropListRef(injector, element) {
  return new DropListRef(element, injector.get(DragDropRegistry), injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler));
}
var DropListRef = class {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  element;
  disabled = false;
  sortingDisabled = false;
  lockAxis = null;
  autoScrollDisabled = false;
  autoScrollStep = 2;
  hasAnchor = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  beforeStarted = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  sorted = new Subject();
  receivingStarted = new Subject();
  receivingStopped = new Subject();
  data;
  _container;
  _isDragging = false;
  _parentPositions;
  _sortStrategy;
  _domRect;
  _draggables = [];
  _siblings = [];
  _activeSiblings = /* @__PURE__ */ new Set();
  _viewportScrollSubscription = Subscription.EMPTY;
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  _scrollNode;
  _stopScrollTimers = new Subject();
  _cachedShadowRoot = null;
  _document;
  _scrollableElements = [];
  _initialScrollSnap;
  _direction = "ltr";
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  isDragging() {
    return this._isDragging;
  }
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  getScrollableParents() {
    return this._scrollableElements;
  }
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._isDragging ? this._sortStrategy.getItemAtIndex(index) : this._draggables[index] || null;
  }
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var DragDrop = class _DragDrop {
  _injector = inject(Injector);
  createDrag(element, config) {
    return createDragRef(this._injector, element, config);
  }
  createDropList(element) {
    return createDropListRef(this._injector, element);
  }
  static \u0275fac = function DragDrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDrop)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _DragDrop,
    factory: _DragDrop.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Service
  }], null, null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  element = inject(ElementRef);
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _stateChanges = new Subject();
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  _disabled = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag?._addHandle(this);
  }
  ngAfterViewInit() {
    if (!this._parentDrag) {
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (ref) {
          this._parentDrag = ref;
          ref._addHandle(this);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static \u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragHandle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_HANDLE,
      useExisting: _CdkDragHandle
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  element = inject(ElementRef);
  dropContainer = inject(CDK_DROP_LIST, {
    optional: true,
    skipSelf: true
  });
  _ngZone = inject(NgZone);
  _viewContainerRef = inject(ViewContainerRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _selfHandle = inject(CDK_DRAG_HANDLE, {
    optional: true,
    self: true
  });
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _destroyed = new Subject();
  _handles = new BehaviorSubject([]);
  _previewTemplate = null;
  _placeholderTemplate = null;
  _dragRef;
  data;
  lockAxis = null;
  rootElementSelector;
  boundaryElement;
  dragStartDelay;
  freeDragPosition;
  get disabled() {
    return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  _disabled = false;
  constrainPosition;
  previewClass;
  previewContainer;
  scale = 1;
  started = new EventEmitter();
  released = new EventEmitter();
  ended = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  dropped = new EventEmitter();
  moved = new Observable((observer) => {
    const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
      source: this,
      pointerPosition: movedEvent.pointerPosition,
      event: movedEvent.event,
      delta: movedEvent.delta,
      distance: movedEvent.distance
    }))).subscribe(observer);
    return () => {
      subscription.unsubscribe();
    };
  });
  _injector = inject(Injector);
  constructor() {
    const dropContainer = this.dropContainer;
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    this._dragRef = createDragRef(this._injector, this.element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  reset() {
    this._dragRef.reset();
  }
  resetToBoundary() {
    this._dragRef.resetToBoundary();
  }
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : element.parentElement?.closest(this.rootElementSelector);
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (parentDrag) {
          ref.withParent(parentDrag._dragRef);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    this.lockAxis = lockAxis || null;
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  _setupHandlesListener() {
    this._handles.pipe(tap((handles) => {
      const handleElements = handles.map((handle) => handle.element);
      if (this._selfHandle && this.rootElementSelector) {
        handleElements.push(this.element);
      }
      this._dragRef.withHandles(handleElements);
    }), switchMap((handles) => {
      return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
    }), takeUntil(this._destroyed)).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static \u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDrag)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      data: [0, "cdkDragData", "data"],
      lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
      rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
      boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
      dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
      freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
      disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
      constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
      previewClass: [0, "cdkDragPreviewClass", "previewClass"],
      previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
      scale: [2, "cdkDragScale", "scale", numberAttribute]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PARENT,
      useExisting: _CdkDrag
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      host: {
        "class": "cdk-drag",
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  _items = /* @__PURE__ */ new Set();
  disabled = false;
  ngOnDestroy() {
    this._items.clear();
  }
  static \u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropListGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
    },
    exportAs: ["cdkDropListGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: _CdkDropListGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkDropList = class _CdkDropList {
  element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollDispatcher = inject(ScrollDispatcher);
  _dir = inject(Directionality, {
    optional: true
  });
  _group = inject(CDK_DROP_LIST_GROUP, {
    optional: true,
    skipSelf: true
  });
  _latestSortedRefs;
  _destroyed = new Subject();
  _scrollableParentsResolved = false;
  static _dropLists = [];
  _dropListRef;
  connectedTo = [];
  data;
  orientation = "vertical";
  id = inject(_IdGenerator).getId("cdk-drop-list-");
  lockAxis = null;
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  _disabled = false;
  sortingDisabled = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  autoScrollDisabled = false;
  autoScrollStep;
  elementContainerSelector = null;
  hasAnchor = false;
  dropped = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  sorted = new EventEmitter();
  _unsortedItems = /* @__PURE__ */ new Set();
  constructor() {
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    const injector = inject(Injector);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDropList");
    }
    this._dropListRef = createDropListRef(injector, this.element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (this._group) {
      this._group._items.add(this);
    }
  }
  addItem(item) {
    this._unsortedItems.add(item);
    item._dragRef._withDropContainer(this._dropListRef);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
    }
  }
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._latestSortedRefs) {
      const index = this._latestSortedRefs.indexOf(item._dragRef);
      if (index > -1) {
        this._latestSortedRefs.splice(index, 1);
        this._syncItemsWithRef(this._latestSortedRefs);
      }
    }
  }
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._latestSortedRefs = void 0;
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.hasAnchor = this.hasAnchor;
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    this.lockAxis = lockAxis || null;
  }
  _syncItemsWithRef(items) {
    this._latestSortedRefs = items;
    this._dropListRef.withItems(items);
  }
  static \u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropList)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
      data: [0, "cdkDropListData", "data"],
      orientation: [0, "cdkDropListOrientation", "orientation"],
      id: "id",
      lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
      disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
      sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
      enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
      autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
      autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
      elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"],
      hasAnchor: [2, "cdkDropListHasAnchor", "hasAnchor", booleanAttribute]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useValue: void 0
    }, {
      provide: CDK_DROP_LIST,
      useExisting: _CdkDropList
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useValue: void 0
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    hasAnchor: [{
      type: Input,
      args: [{
        alias: "cdkDropListHasAnchor",
        transform: booleanAttribute
      }]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  matchSize = false;
  constructor() {
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static \u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPreview)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      data: "data",
      matchSize: [2, "matchSize", "matchSize", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: _CdkDragPreview
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  constructor() {
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static \u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPlaceholder)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: _CdkDragPlaceholder
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule,
    imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DragDrop],
    imports: [CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
function ConfirmDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 9);
    \u0275\u0275listener("ngModelChange", function ConfirmDialogComponent_Conditional_7_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.noteValue.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.noteValue())("placeholder", ctx_r1.notePlaceholder());
    \u0275\u0275control();
  }
}
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  title = input.required(
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  message = input.required(
    ...ngDevMode ? [{ debugName: "message" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmText = input(
    "Confirmer",
    ...ngDevMode ? [{ debugName: "confirmText" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cancelText = input(
    "Annuler",
    ...ngDevMode ? [{ debugName: "cancelText" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmClass = input(
    "bg-primary text-text-inverse hover:bg-primary-hover",
    ...ngDevMode ? [{ debugName: "confirmClass" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showNoteField = input(
    false,
    ...ngDevMode ? [{ debugName: "showNoteField" }] : (
      /* istanbul ignore next */
      []
    )
  );
  notePlaceholder = input(
    "",
    ...ngDevMode ? [{ debugName: "notePlaceholder" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmed = output();
  cancelled = output();
  note = output();
  noteValue = signal(
    "",
    ...ngDevMode ? [{ debugName: "noteValue" }] : (
      /* istanbul ignore next */
      []
    )
  );
  onConfirm() {
    if (this.showNoteField()) {
      this.note.emit(this.noteValue());
    }
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
  }
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], inputs: { title: [1, "title"], message: [1, "message"], confirmText: [1, "confirmText"], cancelText: [1, "cancelText"], confirmClass: [1, "confirmClass"], showNoteField: [1, "showNoteField"], notePlaceholder: [1, "notePlaceholder"] }, outputs: { confirmed: "confirmed", cancelled: "cancelled", note: "note" }, decls: 13, vars: 7, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center"], [1, "absolute", "inset-0", "bg-black/40", 3, "click"], [1, "relative", "bg-surface", "border", "border-border", "rounded-xl", "shadow-xl", "p-6", "w-full", "max-w-md", "mx-4"], [1, "font-heading", "text-lg", "font-semibold", "text-text-heading", "mb-2"], [1, "text-sm", "text-text-secondary", "mb-6"], ["rows", "3", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", "resize-vertical", "mb-4", 3, "ngModel", "placeholder"], [1, "flex", "items-center", "justify-end", "gap-3"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-text-secondary", "border", "border-border", "rounded-md", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-4", "py-2", "text-sm", "font-semibold", "rounded-md", "transition-colors", "cursor-pointer", 3, "click"], ["rows", "3", 1, "w-full", "px-3.5", "py-2.5", "bg-background", "border", "border-border", "rounded-lg", "text-text", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", "resize-vertical", "mb-4", 3, "ngModelChange", "ngModel", "placeholder"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_div_click_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, ConfirmDialogComponent_Conditional_7_Template, 1, 2, "textarea", 5);
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_9_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_11_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showNoteField() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.cancelText(), " ");
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.confirmClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.confirmText(), " ");
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", standalone: true, imports: [FormsModule], template: '<div class="fixed inset-0 z-50 flex items-center justify-center">\n  <div class="absolute inset-0 bg-black/40" (click)="onCancel()"></div>\n  <div class="relative bg-surface border border-border rounded-xl shadow-xl p-6 w-full max-w-md mx-4">\n    <h3 class="font-heading text-lg font-semibold text-text-heading mb-2">{{ title() }}</h3>\n    <p class="text-sm text-text-secondary mb-6">{{ message() }}</p>\n\n    @if (showNoteField()) {\n      <textarea\n        [ngModel]="noteValue()"\n        (ngModelChange)="noteValue.set($event)"\n        [placeholder]="notePlaceholder()"\n        rows="3"\n        class="w-full px-3.5 py-2.5 bg-background border border-border rounded-lg text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-vertical mb-4"\n      ></textarea>\n    }\n\n    <div class="flex items-center justify-end gap-3">\n      <button (click)="onCancel()"\n        class="px-4 py-2 text-sm font-semibold text-text-secondary border border-border rounded-md hover:bg-background-alt transition-colors cursor-pointer">\n        {{ cancelText() }}\n      </button>\n      <button (click)="onConfirm()"\n        class="px-4 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer"\n        [class]="confirmClass()">\n        {{ confirmText() }}\n      </button>\n    </div>\n  </div>\n</div>\n' }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: true }] }], confirmText: [{ type: Input, args: [{ isSignal: true, alias: "confirmText", required: false }] }], cancelText: [{ type: Input, args: [{ isSignal: true, alias: "cancelText", required: false }] }], confirmClass: [{ type: Input, args: [{ isSignal: true, alias: "confirmClass", required: false }] }], showNoteField: [{ type: Input, args: [{ isSignal: true, alias: "showNoteField", required: false }] }], notePlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "notePlaceholder", required: false }] }], confirmed: [{ type: Output, args: ["confirmed"] }], cancelled: [{ type: Output, args: ["cancelled"] }], note: [{ type: Output, args: ["note"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/components/confirm-dialog/confirm-dialog.component.ts", lineNumber: 10 });
})();

// src/app/features/shared/tasks/task-kanban/task-detail-panel.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TaskDetailPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-avatar", 66);
    \u0275\u0275elementStart(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("imageUrl", ctx_r1.resolveAvatarUrl(t_r3.assigned_user.avatar_url))("name", t_r3.assigned_user.first_name + " " + t_r3.assigned_user.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r3.assigned_user.first_name, " ", t_r3.assigned_user.last_name);
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Non assign\xE9");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.priority === "HIGH" || t_r3.priority === "CRITICAL" ? "priority_high" : t_r3.priority === "LOW" ? "arrow_downward" : "remove");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityLabel(t_r3.priority), " ");
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, t_r3.due_date, "d MMM yyyy"));
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_Conditional_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startTask());
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9marrer le travail ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_Conditional_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmSubmitReview());
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2, "rate_review");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Soumettre pour validation ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmApprove());
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Valider ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 71);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_Conditional_47_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRework());
    });
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Renvoyer pour reprise ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_Conditional_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAssignModal());
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Assigner ");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.noActionsMessage(), " ");
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 73)(2, "span", 38);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 39);
    \u0275\u0275text(5, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 74);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3.description);
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.comments().length, " message", ctx_r1.comments().length > 1 ? "s" : "");
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1, "Aucun commentaire pour l'instant. Lancez la discussion !");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_For_73_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "input", 85);
    \u0275\u0275listener("ngModelChange", function TaskDetailPanelComponent_Conditional_1_For_73_Conditional_16_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const comment_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setReplyContent(comment_r9.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "button", 86);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_For_73_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const comment_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addComment(comment_r9.id));
    });
    \u0275\u0275text(3, "R\xE9pondre");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.replyContent()[comment_r9.id]);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.replyContent()[comment_r9.id]?.trim());
  }
}
function TaskDetailPanelComponent_Conditional_1_For_73_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "app-avatar", 87);
    \u0275\u0275elementStart(2, "div", 76)(3, "div", 88)(4, "div", 78)(5, "span", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 91);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const reply_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r1.resolveAvatarUrl(reply_r11.user?.avatar_url))("name", (reply_r11.user?.first_name || "") + " " + (reply_r11.user?.last_name || ""));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", reply_r11.user?.first_name, " ", reply_r11.user?.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reply_r11.created_at ? ctx_r1.relativeTime(reply_r11.created_at) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reply_r11.content);
  }
}
function TaskDetailPanelComponent_Conditional_1_For_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "app-avatar", 75);
    \u0275\u0275elementStart(2, "div", 76)(3, "div", 77)(4, "div", 78)(5, "span", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 80);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 74);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 81)(12, "button", 82);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_For_73_Template_button_click_12_listener() {
      const comment_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleReply(comment_r9.id));
    });
    \u0275\u0275elementStart(13, "span", 48);
    \u0275\u0275text(14, "reply");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " R\xE9pondre ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, TaskDetailPanelComponent_Conditional_1_For_73_Conditional_16_Template, 4, 2, "div", 83);
    \u0275\u0275repeaterCreate(17, TaskDetailPanelComponent_Conditional_1_For_73_For_18_Template, 11, 6, "div", 84, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r1.resolveAvatarUrl(comment_r9.user?.avatar_url))("name", (comment_r9.user?.first_name || "") + " " + (comment_r9.user?.last_name || ""));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", comment_r9.user?.first_name, " ", comment_r9.user?.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r9.created_at ? ctx_r1.relativeTime(comment_r9.created_at) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r9.content);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isReplyVisible(comment_r9.id) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getReplies(comment_r9.id));
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_90_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "span", 48);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 76)(5, "a", 94);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 80);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 95)(10, "span", 48);
    \u0275\u0275text(11, "download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const att_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r1.getAttachmentUrl(att_r13), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(att_r13.file_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatFileSize(att_r13.file_size));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.getAttachmentUrl(att_r13), \u0275\u0275sanitizeUrl);
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275repeaterCreate(1, TaskDetailPanelComponent_Conditional_1_Conditional_90_For_2_Template, 12, 4, "div", 92, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.attachments());
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1, "Aucune pi\xE8ce jointe");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64)(1, "span", 96)(2, "span", 97);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4, " Aucune activit\xE9 enregistr\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_For_104_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
  }
}
function TaskDetailPanelComponent_Conditional_1_For_104_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_1_For_104_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 100)(1, "span", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 103);
    \u0275\u0275text(4, " a chang\xE9 le statut en ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 104);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", entry_r14.user?.first_name, " ", entry_r14.user?.last_name);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStatusClass(entry_r14.new_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatStatus(entry_r14.new_status));
  }
}
function TaskDetailPanelComponent_Conditional_1_For_104_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 100)(1, "span", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 103);
    \u0275\u0275text(4, " a assign\xE9 \xE0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 102);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", entry_r14.user?.first_name, " ", entry_r14.user?.last_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", entry_r14.new_user?.first_name, " ", entry_r14.new_user?.last_name);
  }
}
function TaskDetailPanelComponent_Conditional_1_For_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 98);
    \u0275\u0275conditionalCreate(2, TaskDetailPanelComponent_Conditional_1_For_104_Conditional_2_Template, 1, 0, "span", 99)(3, TaskDetailPanelComponent_Conditional_1_For_104_Conditional_3_Template, 2, 0, "span", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275conditionalCreate(5, TaskDetailPanelComponent_Conditional_1_For_104_Conditional_5_Template, 7, 5, "p", 100)(6, TaskDetailPanelComponent_Conditional_1_For_104_Conditional_6_Template, 7, 4, "p", 100);
    \u0275\u0275elementStart(7, "span", 101);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-primary", entry_r14.type === "status_change")("border-border", entry_r14.type !== "status_change");
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r14.type === "status_change" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(entry_r14.type === "status_change" ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.relativeTime(entry_r14.created_at));
  }
}
function TaskDetailPanelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h2", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 15);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePanel());
    });
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 17)(16, "div", 18)(17, "div", 19)(18, "div")(19, "span", 20);
    \u0275\u0275text(20, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 21)(22, "span", 22)(23, "span", 23);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "span", 20);
    \u0275\u0275text(28, "Assign\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 24);
    \u0275\u0275conditionalCreate(30, TaskDetailPanelComponent_Conditional_1_Conditional_30_Template, 3, 4)(31, TaskDetailPanelComponent_Conditional_1_Conditional_31_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "span", 20);
    \u0275\u0275text(34, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 21);
    \u0275\u0275conditionalCreate(36, TaskDetailPanelComponent_Conditional_1_Conditional_36_Template, 4, 2, "span", 26)(37, TaskDetailPanelComponent_Conditional_1_Conditional_37_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div")(39, "span", 20);
    \u0275\u0275text(40, "\xC9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 28);
    \u0275\u0275conditionalCreate(42, TaskDetailPanelComponent_Conditional_1_Conditional_42_Template, 5, 4)(43, TaskDetailPanelComponent_Conditional_1_Conditional_43_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 29);
    \u0275\u0275conditionalCreate(45, TaskDetailPanelComponent_Conditional_1_Conditional_45_Template, 4, 1, "button", 30);
    \u0275\u0275conditionalCreate(46, TaskDetailPanelComponent_Conditional_1_Conditional_46_Template, 4, 1, "button", 30);
    \u0275\u0275conditionalCreate(47, TaskDetailPanelComponent_Conditional_1_Conditional_47_Template, 8, 2);
    \u0275\u0275conditionalCreate(48, TaskDetailPanelComponent_Conditional_1_Conditional_48_Template, 4, 0, "button", 31);
    \u0275\u0275conditionalCreate(49, TaskDetailPanelComponent_Conditional_1_Conditional_49_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 33)(51, "div", 34);
    \u0275\u0275conditionalCreate(52, TaskDetailPanelComponent_Conditional_1_Conditional_52_Template, 8, 1, "div", 35);
    \u0275\u0275elementStart(53, "div", 36)(54, "div", 37)(55, "span", 38);
    \u0275\u0275text(56, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "h3", 39);
    \u0275\u0275text(58, "Discussion");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(59, TaskDetailPanelComponent_Conditional_1_Conditional_59_Template, 2, 2, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 41)(61, "div", 42);
    \u0275\u0275element(62, "app-avatar", 43);
    \u0275\u0275elementStart(63, "div", 44)(64, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailPanelComponent_Conditional_1_Template_textarea_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCommentContent, $event) || (ctx_r1.newCommentContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(65, "div", 46)(66, "button", 47);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addComment());
    });
    \u0275\u0275elementStart(67, "span", 48);
    \u0275\u0275text(68, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, " Poster ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(70, "div", 49);
    \u0275\u0275conditionalCreate(71, TaskDetailPanelComponent_Conditional_1_Conditional_71_Template, 2, 0, "p", 50);
    \u0275\u0275repeaterCreate(72, TaskDetailPanelComponent_Conditional_1_For_73_Template, 19, 7, "div", 42, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 35)(75, "div", 51)(76, "span", 38);
    \u0275\u0275text(77, "attachment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "h3", 39);
    \u0275\u0275text(79, "Pi\xE8ces jointes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 52);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_1_Template_div_click_80_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r12 = \u0275\u0275reference(88);
      return \u0275\u0275resetView(fileInput_r12.click());
    });
    \u0275\u0275elementStart(81, "span", 53);
    \u0275\u0275text(82, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p", 54);
    \u0275\u0275text(84, "Cliquez pour ajouter des fichiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 55);
    \u0275\u0275text(86, "PNG, JPG, PDF jusqu'\xE0 20 Mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "input", 56, 0);
    \u0275\u0275listener("change", function TaskDetailPanelComponent_Conditional_1_Template_input_change_87_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileInputChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "app-file-uploader", 57);
    \u0275\u0275listener("fileSelected", function TaskDetailPanelComponent_Conditional_1_Template_app_file_uploader_fileSelected_89_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAttachmentSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(90, TaskDetailPanelComponent_Conditional_1_Conditional_90_Template, 3, 0, "div", 58)(91, TaskDetailPanelComponent_Conditional_1_Conditional_91_Template, 2, 0, "p", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 60)(93, "div", 35)(94, "div", 51)(95, "span", 38);
    \u0275\u0275text(96, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "h3", 39);
    \u0275\u0275text(98, "Activit\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 61);
    \u0275\u0275element(100, "div", 62);
    \u0275\u0275elementStart(101, "div", 63);
    \u0275\u0275conditionalCreate(102, TaskDetailPanelComponent_Conditional_1_Conditional_102_Template, 5, 0, "p", 64);
    \u0275\u0275repeaterCreate(103, TaskDetailPanelComponent_Conditional_1_For_104_Template, 9, 7, "div", 65, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const t_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3.project?.name || "Projet");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3.reference_code || "TSK-000");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.title);
    \u0275\u0275advance(11);
    \u0275\u0275classMap(ctx_r1.getStatusClass(t_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.status === "TODO" ? "radio_button_unchecked" : t_r3.status === "IN_PROGRESS" ? "pending_actions" : t_r3.status === "REVIEW" ? "rate_review" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(t_r3.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(t_r3.assigned_user ? 30 : 31);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(t_r3.priority ? 36 : 37);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(t_r3.due_date ? 42 : 43);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canStart() ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canSubmitForReview() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canApproveOrRework() ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isManager() && !ctx_r1.canStart() && !ctx_r1.canSubmitForReview() && !ctx_r1.canApproveOrRework() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNoActions() && !ctx_r1.isManager() ? 49 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(t_r3.description ? 52 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.comments().length > 0 ? 59 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", (ctx_r1.user()?.first_name || "") + " " + (ctx_r1.user()?.last_name || ""))("imageUrl", ctx_r1.resolveAvatarUrl(ctx_r1.user()?.avatar_url));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCommentContent);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.newCommentContent().trim() || ctx_r1.saving());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.rootComments.length === 0 ? 71 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.rootComments);
    \u0275\u0275advance(17);
    \u0275\u0275property("maxSizeMB", 20);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.attachments().length > 0 ? 90 : 91);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r1.history().length === 0 ? 102 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.history());
  }
}
function TaskDetailPanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirm-dialog", 105);
    \u0275\u0275listener("confirmed", function TaskDetailPanelComponent_Conditional_2_Template_app_confirm_dialog_confirmed_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmAction());
    })("cancelled", function TaskDetailPanelComponent_Conditional_2_Template_app_confirm_dialog_cancelled_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirmDialog.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.confirmTitle())("message", ctx_r1.confirmMessage())("showNoteField", ctx_r1.showReworkNote());
  }
}
function TaskDetailPanelComponent_Conditional_3_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_3_Conditional_3_For_8_Template_button_click_0_listener() {
      const member_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectMember(member_r19.id));
    });
    \u0275\u0275element(1, "app-avatar", 117);
    \u0275\u0275elementStart(2, "span", 118);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("name", member_r19.first_name + " " + member_r19.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", member_r19.first_name, " ", member_r19.last_name);
  }
}
function TaskDetailPanelComponent_Conditional_3_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50);
    \u0275\u0275text(1, "Aucun membre trouv\xE9");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailPanelComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 108);
    \u0275\u0275text(1, "Assigner la t\xE2che");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 109)(3, "span", 110);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 111);
    \u0275\u0275listener("ngModelChange", function TaskDetailPanelComponent_Conditional_3_Conditional_3_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignSearch.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 112);
    \u0275\u0275repeaterCreate(7, TaskDetailPanelComponent_Conditional_3_Conditional_3_For_8_Template, 4, 3, "button", 113, _forTrack0);
    \u0275\u0275conditionalCreate(9, TaskDetailPanelComponent_Conditional_3_Conditional_3_Conditional_9_Template, 2, 0, "p", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 114)(11, "button", 115);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_3_Conditional_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAssignModal.set(false));
    });
    \u0275\u0275text(12, " Annuler ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.assignSearch());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredMembers);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredMembers.length === 0 ? 9 : -1);
  }
}
function TaskDetailPanelComponent_Conditional_3_Conditional_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 124);
  }
}
function TaskDetailPanelComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 119);
    \u0275\u0275text(1, "Confirmer l'assignation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 120);
    \u0275\u0275text(3, "Assigner cette t\xE2che \xE0 ");
    \u0275\u0275elementStart(4, "strong", 121);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 122)(8, "button", 115);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_3_Conditional_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignConfirmStep.set(false));
    });
    \u0275\u0275text(9, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 123);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_3_Conditional_4_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmAssign());
    });
    \u0275\u0275conditionalCreate(11, TaskDetailPanelComponent_Conditional_3_Conditional_4_Conditional_11_Template, 1, 0, "span", 124);
    \u0275\u0275text(12, " Confirmer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedMemberName);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 11 : -1);
  }
}
function TaskDetailPanelComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 106);
    \u0275\u0275listener("click", function TaskDetailPanelComponent_Conditional_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAssignModal.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 107);
    \u0275\u0275conditionalCreate(3, TaskDetailPanelComponent_Conditional_3_Conditional_3_Template, 13, 2)(4, TaskDetailPanelComponent_Conditional_3_Conditional_4_Template, 13, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.assignConfirmStep() ? 3 : 4);
  }
}
var STATUS_LABELS = {
  TODO: "\xC0 faire",
  IN_PROGRESS: "En cours",
  REVIEW: "En r\xE9vision",
  DONE: "Termin\xE9"
};
var PRIORITY_LABELS = {
  LOW: "Faible",
  MEDIUM: "Moyenne",
  HIGH: "Haute",
  CRITICAL: "Critique"
};
var STATUS_CLASSES = {
  TODO: "bg-background-alt text-text-secondary",
  IN_PROGRESS: "bg-primary-100 text-primary",
  REVIEW: "bg-warning-light text-warning-dark",
  DONE: "bg-accent-light text-accent-dark"
};
var TaskDetailPanelComponent = class _TaskDetailPanelComponent {
  taskService = inject(TaskService);
  commentService = inject(TaskCommentService);
  attachmentService = inject(TaskAttachmentService);
  dependencyService = inject(TaskDependencyService);
  authService = inject(AuthService);
  employeeService = inject(EmployeeService);
  imageUrlService = inject(ImageUrlService);
  task = input.required(
    ...ngDevMode ? [{ debugName: "task" }] : (
      /* istanbul ignore next */
      []
    )
  );
  taskUpdated = output();
  close = output();
  user = this.authService.currentUser;
  currentTask = signal(
    null,
    ...ngDevMode ? [{ debugName: "currentTask" }] : (
      /* istanbul ignore next */
      []
    )
  );
  comments = signal(
    [],
    ...ngDevMode ? [{ debugName: "comments" }] : (
      /* istanbul ignore next */
      []
    )
  );
  attachments = signal(
    [],
    ...ngDevMode ? [{ debugName: "attachments" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dependencies = signal(
    [],
    ...ngDevMode ? [{ debugName: "dependencies" }] : (
      /* istanbul ignore next */
      []
    )
  );
  history = signal(
    [],
    ...ngDevMode ? [{ debugName: "history" }] : (
      /* istanbul ignore next */
      []
    )
  );
  teamMembers = signal(
    [],
    ...ngDevMode ? [{ debugName: "teamMembers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
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
  currentUserId = computed(
    () => this.user()?.id,
    ...ngDevMode ? [{ debugName: "currentUserId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentUserRole = computed(
    () => this.user()?.role,
    ...ngDevMode ? [{ debugName: "currentUserRole" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isManager = computed(
    () => this.currentUserRole() === "MANAGER" || this.currentUserRole() === "HR_ADMIN",
    ...ngDevMode ? [{ debugName: "isManager" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isAssignedToCurrentUser = computed(
    () => this.currentTask()?.user_id === this.currentUserId(),
    ...ngDevMode ? [{ debugName: "isAssignedToCurrentUser" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isTaskCreator = computed(
    () => this.currentTask()?.creator_id === this.currentUserId(),
    ...ngDevMode ? [{ debugName: "isTaskCreator" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentStatus = computed(
    () => this.currentTask()?.status,
    ...ngDevMode ? [{ debugName: "currentStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeTab = signal(
    "activity",
    ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canStart = computed(
    () => this.currentStatus() === "TODO" && this.isAssignedToCurrentUser(),
    ...ngDevMode ? [{ debugName: "canStart" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canSubmitForReview = computed(
    () => this.currentStatus() === "IN_PROGRESS" && this.isAssignedToCurrentUser(),
    ...ngDevMode ? [{ debugName: "canSubmitForReview" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canApproveOrRework = computed(
    () => this.currentStatus() === "REVIEW" && this.isTaskCreator(),
    ...ngDevMode ? [{ debugName: "canApproveOrRework" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showNoActions = computed(
    () => {
      const status = this.currentStatus();
      if (status === "DONE")
        return false;
      if (this.canStart() || this.canSubmitForReview() || this.canApproveOrRework())
        return false;
      return true;
    },
    ...ngDevMode ? [{ debugName: "showNoActions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noActionsMessage = computed(
    () => {
      const status = this.currentStatus();
      if (status === "TODO")
        return "Cette t\xE2che ne t'est pas assign\xE9e.";
      if (status === "IN_PROGRESS")
        return "En attente que l'assign\xE9 soumette la t\xE2che en r\xE9vision.";
      if (status === "REVIEW")
        return "En attente de validation par le cr\xE9ateur de la t\xE2che.";
      return "";
    },
    ...ngDevMode ? [{ debugName: "noActionsMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  commentsCount = computed(
    () => this.comments().length,
    ...ngDevMode ? [{ debugName: "commentsCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  attachmentsCount = computed(
    () => this.attachments().length,
    ...ngDevMode ? [{ debugName: "attachmentsCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Confirm dialog state
  showConfirmDialog = signal(
    false,
    ...ngDevMode ? [{ debugName: "showConfirmDialog" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmTitle = signal(
    "",
    ...ngDevMode ? [{ debugName: "confirmTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmMessage = signal(
    "",
    ...ngDevMode ? [{ debugName: "confirmMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmAction = signal(
    null,
    ...ngDevMode ? [{ debugName: "confirmAction" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showReworkNote = signal(
    false,
    ...ngDevMode ? [{ debugName: "showReworkNote" }] : (
      /* istanbul ignore next */
      []
    )
  );
  reworkNote = signal(
    "",
    ...ngDevMode ? [{ debugName: "reworkNote" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Assign modal state
  showAssignModal = signal(
    false,
    ...ngDevMode ? [{ debugName: "showAssignModal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  assignSearch = signal(
    "",
    ...ngDevMode ? [{ debugName: "assignSearch" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedUserId = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedUserId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  assignConfirmStep = signal(
    false,
    ...ngDevMode ? [{ debugName: "assignConfirmStep" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Comment state
  newCommentContent = signal(
    "",
    ...ngDevMode ? [{ debugName: "newCommentContent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  replyContent = signal(
    {},
    ...ngDevMode ? [{ debugName: "replyContent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  replyVisible = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "replyVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projectTasks = signal(
    [],
    ...ngDevMode ? [{ debugName: "projectTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const t = this.task();
    if (t) {
      this.currentTask.set(t);
      this.loadData(t.id);
    }
    this.taskService.getMyTasks().subscribe({
      next: (tasks) => this.projectTasks.set(tasks)
    });
  }
  loadData(taskId) {
    this.taskService.getTask(taskId).subscribe({
      next: (t) => {
        this.currentTask.set(t);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
    this.commentService.getComments(taskId).subscribe({
      next: (data) => this.comments.set(data)
    });
    this.attachmentService.getAttachments(taskId).subscribe({
      next: (data) => this.attachments.set(data)
    });
    this.dependencyService.getDependencies(taskId).subscribe({
      next: (data) => this.dependencies.set(data)
    });
    this.taskService.getHistory(taskId).subscribe({
      next: (data) => this.history.set(data)
    });
  }
  getStatusLabel(status) {
    return STATUS_LABELS[status];
  }
  getPriorityLabel(priority) {
    return PRIORITY_LABELS[priority || ""] || priority || "\u2014";
  }
  getStatusClass(status) {
    return STATUS_CLASSES[status] || "bg-background-alt text-text-secondary";
  }
  resolveAvatarUrl(url) {
    return this.imageUrlService.resolve(url);
  }
  relativeTime(dateStr) {
    const now = /* @__PURE__ */ new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 6e4);
    if (diffMin < 1)
      return "\xE0 l'instant";
    if (diffMin < 60)
      return `il y a ${diffMin} min`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24)
      return `il y a ${diffHours}h`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7)
      return `il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
    return date.toLocaleDateString("fr-FR");
  }
  formatStatus(status) {
    if (!status)
      return "N/A";
    return STATUS_LABELS[status] || status;
  }
  // ── Assign flow ──
  openAssignModal() {
    this.assignSearch.set("");
    this.selectedUserId.set(null);
    this.assignConfirmStep.set(false);
    this.showAssignModal.set(true);
    this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
      next: (res) => this.teamMembers.set(res.data.map((e) => ({ id: e.id, first_name: e.first_name, last_name: e.last_name })))
    });
  }
  get filteredMembers() {
    const q = this.assignSearch().toLowerCase();
    return this.teamMembers().filter((m) => m.first_name.toLowerCase().includes(q) || m.last_name.toLowerCase().includes(q));
  }
  selectMember(id) {
    this.selectedUserId.set(id);
    this.assignConfirmStep.set(true);
  }
  confirmAssign() {
    const userId = this.selectedUserId();
    const taskId = this.currentTask()?.id;
    if (!userId || !taskId)
      return;
    this.saving.set(true);
    this.taskService.assignTask(taskId, userId).subscribe({
      next: (updated) => {
        this.currentTask.set(updated);
        this.taskUpdated.emit(updated);
        this.showAssignModal.set(false);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  get selectedMemberName() {
    const id = this.selectedUserId();
    if (!id)
      return "";
    const m = this.teamMembers().find((mm) => mm.id === id);
    return m ? `${m.first_name} ${m.last_name}` : "";
  }
  // ── Status transitions ──
  confirmSubmitReview() {
    this.confirmTitle.set("Soumettre pour r\xE9vision");
    this.confirmMessage.set("Confirmer que cette t\xE2che est termin\xE9e et pr\xEAte \xE0 \xEAtre v\xE9rifi\xE9e ?");
    this.confirmAction.set("submit_review");
    this.showConfirmDialog.set(true);
  }
  confirmApprove() {
    this.confirmTitle.set("Valider la t\xE2che");
    this.confirmMessage.set("Confirmer la validation de cette t\xE2che ?");
    this.confirmAction.set("approve");
    this.showConfirmDialog.set(true);
  }
  confirmRework() {
    this.confirmTitle.set("Renvoyer en d\xE9veloppement");
    this.confirmMessage.set("Expliquez pourquoi cette t\xE2che doit \xEAtre reprise :");
    this.confirmAction.set("rework");
    this.showReworkNote.set(true);
    this.showConfirmDialog.set(true);
  }
  onConfirmAction() {
    const action = this.confirmAction();
    const taskId = this.currentTask()?.id;
    if (!taskId)
      return;
    this.saving.set(true);
    this.showConfirmDialog.set(false);
    if (action === "submit_review") {
      this.taskService.updateStatus(taskId, "REVIEW").subscribe({
        next: (updated) => {
          this.currentTask.set(updated);
          this.taskUpdated.emit(updated);
          this.saving.set(false);
          this.loadHistory(taskId);
        },
        error: () => this.saving.set(false)
      });
    } else if (action === "approve") {
      this.taskService.updateStatus(taskId, "DONE").subscribe({
        next: (updated) => {
          this.currentTask.set(updated);
          this.taskUpdated.emit(updated);
          this.saving.set(false);
          this.loadHistory(taskId);
        },
        error: () => this.saving.set(false)
      });
    } else if (action === "rework") {
      this.taskService.updateStatus(taskId, "IN_PROGRESS").subscribe({
        next: (updated) => {
          this.currentTask.set(updated);
          this.taskUpdated.emit(updated);
          this.saving.set(false);
          this.loadHistory(taskId);
        },
        error: () => this.saving.set(false)
      });
    }
    this.showReworkNote.set(false);
    this.confirmAction.set(null);
  }
  startTask() {
    const taskId = this.currentTask()?.id;
    if (!taskId)
      return;
    this.saving.set(true);
    this.taskService.updateStatus(taskId, "IN_PROGRESS").subscribe({
      next: (updated) => {
        this.currentTask.set(updated);
        this.taskUpdated.emit(updated);
        this.saving.set(false);
        this.loadHistory(taskId);
      },
      error: () => this.saving.set(false)
    });
  }
  loadHistory(taskId) {
    this.taskService.getHistory(taskId).subscribe({
      next: (data) => this.history.set(data)
    });
  }
  // ── Comments ──
  addComment(parentId) {
    const content = parentId ? this.replyContent()[parentId] : this.newCommentContent();
    if (!content?.trim())
      return;
    const taskId = this.currentTask()?.id;
    if (!taskId)
      return;
    this.saving.set(true);
    this.commentService.addComment(taskId, { content, parent_id: parentId }).subscribe({
      next: () => {
        if (parentId) {
          this.replyContent.update((c) => __spreadProps(__spreadValues({}, c), { [parentId]: "" }));
          this.replyVisible.update((s) => {
            const n = new Set(s);
            n.delete(parentId);
            return n;
          });
        } else {
          this.newCommentContent.set("");
        }
        this.loadComments(taskId);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  loadComments(taskId) {
    this.commentService.getComments(taskId).subscribe({
      next: (data) => this.comments.set(data)
    });
  }
  toggleReply(commentId) {
    this.replyVisible.update((s) => {
      const next = new Set(s);
      if (next.has(commentId))
        next.delete(commentId);
      else
        next.add(commentId);
      return next;
    });
  }
  isReplyVisible(commentId) {
    return this.replyVisible().has(commentId);
  }
  setReplyContent(parentId, value) {
    this.replyContent.update((c) => __spreadProps(__spreadValues({}, c), { [parentId]: value }));
  }
  get rootComments() {
    return this.comments().filter((c) => !c.parent_id);
  }
  getReplies(commentId) {
    return this.comments().filter((c) => c.parent_id === commentId);
  }
  // ── Attachments ──
  onFileInputChange(event) {
    const input2 = event.target;
    const file = input2.files?.[0];
    if (file)
      this.onAttachmentSelected(file);
    input2.value = "";
  }
  onAttachmentSelected(file) {
    const taskId = this.currentTask()?.id;
    if (!taskId)
      return;
    this.attachmentService.uploadAttachment(taskId, file).subscribe({
      next: () => this.loadAttachments(taskId)
    });
  }
  loadAttachments(taskId) {
    this.attachmentService.getAttachments(taskId).subscribe({
      next: (data) => this.attachments.set(data)
    });
  }
  getAttachmentUrl(attachment) {
    return this.attachmentService.getDownloadUrl(attachment);
  }
  formatFileSize(bytes) {
    if (bytes < 1024)
      return `${bytes} o`;
    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }
  // ── Dependencies ──
  addDependency(event) {
    const select = event.target;
    const dependsOnTaskId = +select.value;
    const taskId = this.currentTask()?.id;
    if (!dependsOnTaskId || !taskId)
      return;
    this.dependencyService.addDependency(taskId, dependsOnTaskId).subscribe({
      next: () => {
        this.loadDependencies(taskId);
        select.value = "";
      }
    });
  }
  removeDependency(dep) {
    const taskId = this.currentTask()?.id;
    if (!taskId)
      return;
    this.dependencyService.removeDependency(taskId, dep.id).subscribe({
      next: () => this.loadDependencies(taskId)
    });
  }
  loadDependencies(taskId) {
    this.dependencyService.getDependencies(taskId).subscribe({
      next: (data) => this.dependencies.set(data)
    });
  }
  get dependencyCandidates() {
    const t = this.currentTask();
    if (!t)
      return [];
    const depIds = new Set(this.dependencies().map((d) => d.depends_on_task_id));
    return this.projectTasks().filter((pt) => pt.id !== t.id && !depIds.has(pt.id));
  }
  closePanel() {
    this.close.emit();
  }
  static \u0275fac = function TaskDetailPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskDetailPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskDetailPanelComponent, selectors: [["app-task-detail-panel"]], inputs: { task: [1, "task"] }, outputs: { taskUpdated: "taskUpdated", close: "close" }, decls: 4, vars: 3, consts: [["fileInput", ""], [1, "p-8", "animate-pulse", "space-y-6"], ["notePlaceholder", "Pourquoi cette t\xE2che est-elle renvoy\xE9e ?", "confirmText", "Confirmer", "cancelText", "Annuler", "confirmClass", "bg-primary text-text-inverse hover:bg-primary-hover", 3, "title", "message", "showNoteField"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center"], [1, "h-6", "bg-border/40", "rounded", "w-1/2"], [1, "h-4", "bg-border/40", "rounded", "w-3/4"], [1, "h-20", "bg-border/40", "rounded-xl"], [1, "sticky", "top-0", "bg-surface", "border-b", "border-border", "z-20"], [1, "flex", "items-center", "justify-between", "px-8", "py-5"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-1.5", "text-sm", "text-text-secondary", "mb-1"], [1, "font-medium"], [1, "material-symbols-outlined", "text-sm", "text-text-muted"], [1, "font-semibold", "text-primary"], [1, "text-2xl", "font-heading", "font-bold", "text-text-heading", "truncate"], [1, "text-text-secondary", "hover:text-text", "p-2", "rounded-lg", "hover:bg-background-alt", "transition-colors", "cursor-pointer", "shrink-0", "ml-4", 3, "click"], [1, "material-symbols-outlined", "text-xl"], [1, "px-8", "py-6", "space-y-6"], [1, "bg-background-alt", "rounded-xl", "border", "border-border", "p-5"], [1, "grid", "grid-cols-4", "gap-6"], [1, "text-[11px]", "text-text-secondary", "font-medium", "uppercase", "tracking-wider"], [1, "mt-1.5"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-full", "text-xs", "font-semibold"], [1, "material-symbols-outlined", "text-[14px]"], [1, "mt-1.5", "flex", "items-center", "gap-2"], [1, "text-sm", "text-text-secondary", "italic"], [1, "inline-flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-md", "text-xs", "font-semibold", "bg-surface", "border", "border-border", "text-text-secondary"], [1, "text-sm", "text-text-secondary"], [1, "mt-1.5", "flex", "items-center", "gap-1.5"], [1, "flex", "items-center", "gap-3"], [1, "px-5", "py-2.5", "bg-primary", "text-text-inverse", "rounded-lg", "text-sm", "font-semibold", "shadow-sm", "hover:bg-primary-hover", "disabled:opacity-50", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "disabled"], [1, "px-5", "py-2.5", "bg-primary", "text-text-inverse", "rounded-lg", "text-sm", "font-semibold", "shadow-sm", "hover:bg-primary-hover", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0"], [1, "bg-background-alt", "rounded-lg", "px-5", "py-3", "text-sm", "text-text-secondary", "italic", "w-full", "border", "border-border"], [1, "grid", "grid-cols-3", "gap-6"], [1, "col-span-2", "space-y-6"], [1, "bg-surface", "rounded-xl", "border", "border-border", "p-6"], [1, "bg-surface", "rounded-xl", "border", "border-border", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-border", "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-primary", "text-lg"], [1, "font-heading", "text-base", "font-semibold", "text-text"], [1, "ml-auto", "bg-background-alt", "text-text-secondary", "px-2", "py-0.5", "rounded-full", "text-[11px]", "font-semibold"], [1, "px-6", "py-4", "border-b", "border-border", "bg-background-alt/30"], [1, "flex", "gap-3"], ["size", "sm", 1, "!w-8", "!h-8", "!text-xs", "shrink-0", "rounded-full", "mt-1", 3, "name", "imageUrl"], [1, "flex-1"], ["rows", "2", "placeholder", "Ajouter un commentaire...", 1, "w-full", "px-4", "py-3", "bg-surface", "border", "border-border", "rounded-xl", "text-sm", "text-text", "placeholder:text-text-muted", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "mt-2"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2", "rounded-lg", "hover:bg-primary-hover", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "cursor-pointer", "flex", "items-center", "gap-2", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-sm"], [1, "px-6", "py-4", "max-h-[400px]", "overflow-y-auto", "space-y-5"], [1, "text-sm", "text-text-secondary", "text-center", "py-4"], [1, "flex", "items-center", "gap-2", "mb-5"], [1, "border-2", "border-dashed", "border-border", "rounded-xl", "p-8", "text-center", "hover:bg-background-alt/30", "hover:border-primary/40", "transition-colors", "cursor-pointer", "mb-4", 3, "click"], [1, "material-symbols-outlined", "text-3xl", "text-text-muted"], [1, "text-sm", "text-text-secondary", "mt-2", "font-medium"], [1, "text-xs", "text-text-muted/60", "mt-1"], ["type", "file", "multiple", "", 1, "hidden", 3, "change"], ["label", "Pi\xE8ce jointe", 1, "hidden", 3, "fileSelected", "maxSizeMB"], [1, "space-y-2", "mt-4"], [1, "text-sm", "text-text-muted/60", "text-center", "py-2"], [1, "space-y-6"], [1, "relative"], [1, "absolute", "left-[9px]", "top-2", "bottom-2", "w-0.5", "bg-border/50"], [1, "space-y-5"], [1, "text-sm", "text-text-secondary", "text-center", "py-4", "relative", "pl-8"], [1, "relative", "pl-8"], ["size", "sm", 1, "!w-7", "!h-7", "!text-[10px]", "shrink-0", "rounded-full", 3, "imageUrl", "name"], [1, "text-sm", "font-medium", "text-text"], [1, "material-symbols-outlined", "text-sm", "text-text-secondary"], [1, "px-5", "py-2.5", "bg-primary", "text-text-inverse", "rounded-lg", "text-sm", "font-semibold", "shadow-sm", "hover:bg-primary-hover", "disabled:opacity-50", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "click", "disabled"], [1, "px-5", "py-2.5", "bg-success", "text-text-inverse", "rounded-lg", "text-sm", "font-semibold", "shadow-sm", "hover:bg-accent-dark", "disabled:opacity-50", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "click", "disabled"], [1, "px-5", "py-2.5", "bg-surface", "border", "border-border", "text-text-secondary", "rounded-lg", "text-sm", "font-semibold", "hover:bg-background-alt", "disabled:opacity-50", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "click", "disabled"], [1, "px-5", "py-2.5", "bg-primary", "text-text-inverse", "rounded-lg", "text-sm", "font-semibold", "shadow-sm", "hover:bg-primary-hover", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "click"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "text-sm", "text-text-secondary", "leading-relaxed", "whitespace-pre-wrap"], ["size", "sm", 1, "!w-8", "!h-8", "!text-xs", "shrink-0", "rounded-full", 3, "imageUrl", "name"], [1, "flex-1", "min-w-0"], [1, "bg-background-alt", "rounded-2xl", "rounded-tl-sm", "px-4", "py-3", "border", "border-border/40"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-sm", "font-semibold", "text-text"], [1, "text-[11px]", "text-text-secondary"], [1, "flex", "items-center", "gap-3", "mt-1.5", "ml-2"], [1, "text-xs", "font-semibold", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer", "flex", "items-center", "gap-1", 3, "click"], [1, "mt-2", "ml-4", "flex", "gap-2"], [1, "ml-4", "mt-3", "flex", "gap-3"], ["type", "text", "placeholder", "Votre r\xE9ponse...", 1, "flex-1", "px-3", "py-2", "bg-surface", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "bg-primary", "text-text-inverse", "text-xs", "font-semibold", "px-3", "py-2", "rounded-lg", "hover:bg-primary-hover", "disabled:opacity-50", "cursor-pointer", "transition-colors", 3, "click", "disabled"], ["size", "sm", 1, "!w-6", "!h-6", "!text-[9px]", "shrink-0", "rounded-full", 3, "imageUrl", "name"], [1, "bg-surface", "rounded-xl", "rounded-tl-sm", "px-3", "py-2.5", "border", "border-border/40"], [1, "text-xs", "font-semibold", "text-text"], [1, "text-[10px]", "text-text-secondary"], [1, "text-sm", "text-text-secondary", "whitespace-pre-wrap"], [1, "flex", "items-center", "gap-3", "bg-background-alt/40", "rounded-lg", "px-4", "py-3", "border", "border-border/40", "hover:border-primary/30", "transition-colors", "group"], [1, "w-9", "h-9", "bg-primary-50", "text-primary", "rounded-lg", "flex", "items-center", "justify-center", "shrink-0"], ["target", "_blank", 1, "text-sm", "font-medium", "text-primary", "hover:underline", "truncate", "block", 3, "href"], ["target", "_blank", 1, "text-text-secondary", "hover:text-primary", "p-1", "rounded", "transition-colors", 3, "href"], [1, "absolute", "left-0", "top-1.5", "w-[18px]", "h-[18px]", "bg-background-alt", "border-2", "border-border", "rounded-full", "flex", "items-center", "justify-center"], [1, "material-symbols-outlined", "text-[10px]", "text-text-secondary"], [1, "absolute", "left-0", "top-1.5", "w-[18px]", "h-[18px]", "bg-surface", "border-2", "rounded-full", "flex", "items-center", "justify-center", "shrink-0"], [1, "w-1.5", "h-1.5", "bg-primary", "rounded-full"], [1, "text-sm", "text-text"], [1, "text-xs", "text-text-muted/60", "mt-0.5", "block"], [1, "font-semibold"], [1, "text-text-secondary"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-[11px]", "font-semibold"], ["notePlaceholder", "Pourquoi cette t\xE2che est-elle renvoy\xE9e ?", "confirmText", "Confirmer", "cancelText", "Annuler", "confirmClass", "bg-primary text-text-inverse hover:bg-primary-hover", 3, "confirmed", "cancelled", "title", "message", "showNoteField"], [1, "absolute", "inset-0", "bg-black/40", 3, "click"], [1, "relative", "bg-surface", "border", "border-border", "rounded-xl", "shadow-xl", "p-6", "w-full", "max-w-md", "mx-4"], [1, "text-xl", "font-heading", "text-text", "font-semibold", "mb-4"], [1, "relative", "mb-4"], [1, "material-symbols-outlined", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-sm", "text-text-secondary"], ["type", "text", "placeholder", "Rechercher un membre...", 1, "w-full", "pl-9", "pr-3", "py-2.5", "bg-surface", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "max-h-60", "overflow-y-auto", "space-y-1"], [1, "w-full", "text-left", "px-3", "py-2.5", "rounded-md", "hover:bg-background-alt", "transition-colors", "flex", "items-center", "gap-3", "cursor-pointer"], [1, "flex", "justify-end", "mt-4"], [1, "px-4", "py-2", "text-sm", "font-semibold", "text-text-secondary", "border", "border-border", "rounded-md", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "click"], [1, "w-full", "text-left", "px-3", "py-2.5", "rounded-md", "hover:bg-background-alt", "transition-colors", "flex", "items-center", "gap-3", "cursor-pointer", 3, "click"], ["size", "sm", 1, "!w-7", "!h-7", "!text-[10px]", "shrink-0", "rounded-full", 3, "name"], [1, "text-sm", "text-text", "font-medium"], [1, "text-xl", "font-heading", "text-text", "font-semibold", "mb-2"], [1, "text-sm", "text-text-secondary", "mb-6"], [1, "text-text"], [1, "flex", "items-center", "justify-end", "gap-3"], [1, "px-4", "py-2", "text-sm", "font-semibold", "bg-primary", "text-text-inverse", "rounded-md", "hover:bg-primary-hover", "disabled:opacity-50", "transition-colors", "flex", "items-center", "gap-2", "cursor-pointer", 3, "click", "disabled"], [1, "w-3.5", "h-3.5", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin", "inline-block"]], template: function TaskDetailPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TaskDetailPanelComponent_Conditional_0_Template, 4, 0, "div", 1)(1, TaskDetailPanelComponent_Conditional_1_Template, 105, 25);
      \u0275\u0275conditionalCreate(2, TaskDetailPanelComponent_Conditional_2_Template, 1, 3, "app-confirm-dialog", 2);
      \u0275\u0275conditionalCreate(3, TaskDetailPanelComponent_Conditional_3_Template, 5, 1, "div", 3);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.loading() ? 0 : (tmp_0_0 = ctx.currentTask()) ? 1 : -1, tmp_0_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showConfirmDialog() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAssignModal() ? 3 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AvatarComponent, FileUploaderComponent, ConfirmDialogComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskDetailPanelComponent, [{
    type: Component,
    args: [{ selector: "app-task-detail-panel", standalone: true, imports: [FormsModule, AvatarComponent, FileUploaderComponent, ConfirmDialogComponent, DatePipe], template: `@if (loading()) {
  <div class="p-8 animate-pulse space-y-6">
    <div class="h-6 bg-border/40 rounded w-1/2"></div>
    <div class="h-4 bg-border/40 rounded w-3/4"></div>
    <div class="h-20 bg-border/40 rounded-xl"></div>
  </div>
} @else if (currentTask(); as t) {
  <!-- ===== STICKY HEADER ===== -->
  <div class="sticky top-0 bg-surface border-b border-border z-20">
    <div class="flex items-center justify-between px-8 py-5">
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-1.5 text-sm text-text-secondary mb-1">
          <span class="font-medium">{{ t.project?.name || 'Projet' }}</span>
          <span class="material-symbols-outlined text-sm text-text-muted">chevron_right</span>
          <span class="font-semibold text-primary">{{ t.reference_code || 'TSK-000' }}</span>
        </div>
        <h2 class="text-2xl font-heading font-bold text-text-heading truncate">{{ t.title }}</h2>
      </div>
      <button (click)="closePanel()" class="text-text-secondary hover:text-text p-2 rounded-lg hover:bg-background-alt transition-colors cursor-pointer shrink-0 ml-4">
        <span class="material-symbols-outlined text-xl">close</span>
      </button>
    </div>
  </div>

  <!-- ===== CONTENT ===== -->
  <div class="px-8 py-6 space-y-6">

    <!-- \u2500\u2500 Status bar \u2500\u2500 -->
    <div class="bg-background-alt rounded-xl border border-border p-5">
      <div class="grid grid-cols-4 gap-6">
        <div>
          <span class="text-[11px] text-text-secondary font-medium uppercase tracking-wider">Statut</span>
          <div class="mt-1.5">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold" [class]="getStatusClass(t.status)">
              <span class="material-symbols-outlined text-[14px]">{{ t.status === 'TODO' ? 'radio_button_unchecked' : t.status === 'IN_PROGRESS' ? 'pending_actions' : t.status === 'REVIEW' ? 'rate_review' : 'check_circle' }}</span>
              {{ getStatusLabel(t.status) }}
            </span>
          </div>
        </div>
        <div>
          <span class="text-[11px] text-text-secondary font-medium uppercase tracking-wider">Assign\xE9</span>
          <div class="mt-1.5 flex items-center gap-2">
            @if (t.assigned_user) {
              <app-avatar [imageUrl]="resolveAvatarUrl(t.assigned_user.avatar_url)" [name]="t.assigned_user.first_name + ' ' + t.assigned_user.last_name" size="sm" class="!w-7 !h-7 !text-[10px] shrink-0 rounded-full" />
              <span class="text-sm font-medium text-text">{{ t.assigned_user.first_name }} {{ t.assigned_user.last_name }}</span>
            } @else {
              <span class="text-sm text-text-secondary italic">Non assign\xE9</span>
            }
          </div>
        </div>
        <div>
          <span class="text-[11px] text-text-secondary font-medium uppercase tracking-wider">Priorit\xE9</span>
          <div class="mt-1.5">
            @if (t.priority) {
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-surface border border-border text-text-secondary">
                <span class="material-symbols-outlined text-[14px]">{{ t.priority === 'HIGH' || t.priority === 'CRITICAL' ? 'priority_high' : t.priority === 'LOW' ? 'arrow_downward' : 'remove' }}</span>
                {{ getPriorityLabel(t.priority) }}
              </span>
            } @else {
              <span class="text-sm text-text-secondary">\u2014</span>
            }
          </div>
        </div>
        <div>
          <span class="text-[11px] text-text-secondary font-medium uppercase tracking-wider">\xC9ch\xE9ance</span>
          <div class="mt-1.5 flex items-center gap-1.5">
            @if (t.due_date) {
              <span class="material-symbols-outlined text-sm text-text-secondary">calendar_today</span>
              <span class="text-sm font-medium text-text">{{ t.due_date | date:'d MMM yyyy' }}</span>
            } @else {
              <span class="text-sm text-text-secondary">\u2014</span>
            }
          </div>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Action buttons \u2500\u2500 -->
    <div class="flex items-center gap-3">
      @if (canStart()) {
        <button (click)="startTask()" [disabled]="saving()"
          class="px-5 py-2.5 bg-primary text-text-inverse rounded-lg text-sm font-semibold shadow-sm hover:bg-primary-hover disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">play_arrow</span>
          D\xE9marrer le travail
        </button>
      }
      @if (canSubmitForReview()) {
        <button (click)="confirmSubmitReview()" [disabled]="saving()"
          class="px-5 py-2.5 bg-primary text-text-inverse rounded-lg text-sm font-semibold shadow-sm hover:bg-primary-hover disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">rate_review</span>
          Soumettre pour validation
        </button>
      }
      @if (canApproveOrRework()) {
        <button (click)="confirmApprove()" [disabled]="saving()"
          class="px-5 py-2.5 bg-success text-text-inverse rounded-lg text-sm font-semibold shadow-sm hover:bg-accent-dark disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">check_circle</span>
          Valider
        </button>
        <button (click)="confirmRework()" [disabled]="saving()"
          class="px-5 py-2.5 bg-surface border border-border text-text-secondary rounded-lg text-sm font-semibold hover:bg-background-alt disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">undo</span>
          Renvoyer pour reprise
        </button>
      }
      @if (isManager() && !canStart() && !canSubmitForReview() && !canApproveOrRework()) {
        <button (click)="openAssignModal()"
          class="px-5 py-2.5 bg-primary text-text-inverse rounded-lg text-sm font-semibold shadow-sm hover:bg-primary-hover transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">person_add</span>
          Assigner
        </button>
      }
      @if (showNoActions() && !isManager()) {
        <div class="bg-background-alt rounded-lg px-5 py-3 text-sm text-text-secondary italic w-full border border-border">
          {{ noActionsMessage() }}
        </div>
      }
    </div>

    <!-- \u2500\u2500 Main grid: 2/3 + 1/3 \u2500\u2500 -->
    <div class="grid grid-cols-3 gap-6">

      <!-- ===== LEFT COLUMN (2/3) ===== -->
      <div class="col-span-2 space-y-6">

        <!-- Description -->
        @if (t.description) {
          <div class="bg-surface rounded-xl border border-border p-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="material-symbols-outlined text-primary text-lg">description</span>
              <h3 class="font-heading text-base font-semibold text-text">Description</h3>
            </div>
            <div class="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">{{ t.description }}</div>
          </div>
        }

        <!-- \u2500\u2500 Discussion \u2500\u2500 -->
        <div class="bg-surface rounded-xl border border-border overflow-hidden">
          <div class="px-6 py-4 border-b border-border flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-lg">chat_bubble_outline</span>
            <h3 class="font-heading text-base font-semibold text-text">Discussion</h3>
            @if (comments().length > 0) {
              <span class="ml-auto bg-background-alt text-text-secondary px-2 py-0.5 rounded-full text-[11px] font-semibold">{{ comments().length }} message{{ comments().length > 1 ? 's' : '' }}</span>
            }
          </div>

          <!-- Comment input -->
          <div class="px-6 py-4 border-b border-border bg-background-alt/30">
            <div class="flex gap-3">
              <app-avatar [name]="(user()?.first_name || '') + ' ' + (user()?.last_name || '')" [imageUrl]="resolveAvatarUrl(user()?.avatar_url)" size="sm" class="!w-8 !h-8 !text-xs shrink-0 rounded-full mt-1" />
              <div class="flex-1">
                <textarea [(ngModel)]="newCommentContent" rows="2" placeholder="Ajouter un commentaire..."
                  class="w-full px-4 py-3 bg-surface border border-border rounded-xl text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"></textarea>
                <div class="flex justify-end mt-2">
                  <button (click)="addComment()" [disabled]="!newCommentContent().trim() || saving()"
                    class="bg-primary text-text-inverse text-sm font-semibold px-5 py-2 rounded-lg hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">send</span>
                    Poster
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Comments list -->
          <div class="px-6 py-4 max-h-[400px] overflow-y-auto space-y-5">
            @if (rootComments.length === 0) {
              <p class="text-sm text-text-secondary text-center py-4">Aucun commentaire pour l'instant. Lancez la discussion !</p>
            }
            @for (comment of rootComments; track comment.id) {
              <div class="flex gap-3">
                <app-avatar [imageUrl]="resolveAvatarUrl(comment.user?.avatar_url)" [name]="(comment.user?.first_name || '') + ' ' + (comment.user?.last_name || '')" size="sm" class="!w-8 !h-8 !text-xs shrink-0 rounded-full" />
                <div class="flex-1 min-w-0">
                  <div class="bg-background-alt rounded-2xl rounded-tl-sm px-4 py-3 border border-border/40">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-sm font-semibold text-text">{{ comment.user?.first_name }} {{ comment.user?.last_name }}</span>
                      <span class="text-[11px] text-text-secondary">{{ comment.created_at ? relativeTime(comment.created_at) : '' }}</span>
                    </div>
                    <p class="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">{{ comment.content }}</p>
                  </div>
                  <div class="flex items-center gap-3 mt-1.5 ml-2">
                    <button (click)="toggleReply(comment.id)" class="text-xs font-semibold text-primary hover:text-primary-hover transition-colors cursor-pointer flex items-center gap-1">
                      <span class="material-symbols-outlined text-sm">reply</span>
                      R\xE9pondre
                    </button>
                  </div>

                  <!-- Reply input -->
                  @if (isReplyVisible(comment.id)) {
                    <div class="mt-2 ml-4 flex gap-2">
                      <input type="text" [ngModel]="replyContent()[comment.id]" (ngModelChange)="setReplyContent(comment.id, $event)" placeholder="Votre r\xE9ponse..." class="flex-1 px-3 py-2 bg-surface border border-border rounded-lg text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                      <button (click)="addComment(comment.id)" [disabled]="!replyContent()[comment.id]?.trim()" class="bg-primary text-text-inverse text-xs font-semibold px-3 py-2 rounded-lg hover:bg-primary-hover disabled:opacity-50 cursor-pointer transition-colors">R\xE9pondre</button>
                    </div>
                  }

                  <!-- Replies -->
                  @for (reply of getReplies(comment.id); track reply.id) {
                    <div class="ml-4 mt-3 flex gap-3">
                      <app-avatar [imageUrl]="resolveAvatarUrl(reply.user?.avatar_url)" [name]="(reply.user?.first_name || '') + ' ' + (reply.user?.last_name || '')" size="sm" class="!w-6 !h-6 !text-[9px] shrink-0 rounded-full" />
                      <div class="flex-1 min-w-0">
                        <div class="bg-surface rounded-xl rounded-tl-sm px-3 py-2.5 border border-border/40">
                          <div class="flex items-center gap-2 mb-1">
                            <span class="text-xs font-semibold text-text">{{ reply.user?.first_name }} {{ reply.user?.last_name }}</span>
                            <span class="text-[10px] text-text-secondary">{{ reply.created_at ? relativeTime(reply.created_at) : '' }}</span>
                          </div>
                          <p class="text-sm text-text-secondary whitespace-pre-wrap">{{ reply.content }}</p>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </div>

        <!-- \u2500\u2500 Attachments \u2500\u2500 -->
        <div class="bg-surface rounded-xl border border-border p-6">
          <div class="flex items-center gap-2 mb-5">
            <span class="material-symbols-outlined text-primary text-lg">attachment</span>
            <h3 class="font-heading text-base font-semibold text-text">Pi\xE8ces jointes</h3>
          </div>

          <!-- Upload zone -->
          <div class="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-background-alt/30 hover:border-primary/40 transition-colors cursor-pointer mb-4" (click)="fileInput.click()">
            <span class="material-symbols-outlined text-3xl text-text-muted">cloud_upload</span>
            <p class="text-sm text-text-secondary mt-2 font-medium">Cliquez pour ajouter des fichiers</p>
            <p class="text-xs text-text-muted/60 mt-1">PNG, JPG, PDF jusqu'\xE0 20 Mo</p>
          </div>
          <input #fileInput type="file" (change)="onFileInputChange($event)" class="hidden" multiple />

          <app-file-uploader (fileSelected)="onAttachmentSelected($event)" [maxSizeMB]="20" label="Pi\xE8ce jointe" class="hidden" />

          <!-- Files list -->
          @if (attachments().length > 0) {
            <div class="space-y-2 mt-4">
              @for (att of attachments(); track att.id) {
                <div class="flex items-center gap-3 bg-background-alt/40 rounded-lg px-4 py-3 border border-border/40 hover:border-primary/30 transition-colors group">
                  <div class="w-9 h-9 bg-primary-50 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-sm">description</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <a [href]="getAttachmentUrl(att)" target="_blank" class="text-sm font-medium text-primary hover:underline truncate block">{{ att.file_name }}</a>
                    <p class="text-[11px] text-text-secondary">{{ formatFileSize(att.file_size) }}</p>
                  </div>
                  <a [href]="getAttachmentUrl(att)" target="_blank" class="text-text-secondary hover:text-primary p-1 rounded transition-colors">
                    <span class="material-symbols-outlined text-sm">download</span>
                  </a>
                </div>
              }
            </div>
          } @else {
            <p class="text-sm text-text-muted/60 text-center py-2">Aucune pi\xE8ce jointe</p>
          }
        </div>



      </div>

      <!-- ===== RIGHT COLUMN (1/3) \u2014 Activity timeline ===== -->
      <div class="space-y-6">

        <div class="bg-surface rounded-xl border border-border p-6">
          <div class="flex items-center gap-2 mb-5">
            <span class="material-symbols-outlined text-primary text-lg">history</span>
            <h3 class="font-heading text-base font-semibold text-text">Activit\xE9</h3>
          </div>

          <div class="relative">
            <!-- Timeline vertical line -->
            <div class="absolute left-[9px] top-2 bottom-2 w-0.5 bg-border/50"></div>

            <div class="space-y-5">
              @if (history().length === 0) {
                <p class="text-sm text-text-secondary text-center py-4 relative pl-8">
                  <span class="absolute left-0 top-1.5 w-[18px] h-[18px] bg-background-alt border-2 border-border rounded-full flex items-center justify-center">
                    <span class="material-symbols-outlined text-[10px] text-text-secondary">more_horiz</span>
                  </span>
                  Aucune activit\xE9 enregistr\xE9e
                </p>
              }
              @for (entry of history(); track $index) {
                <div class="relative pl-8">
                  <!-- Timeline dot -->
                  <div class="absolute left-0 top-1.5 w-[18px] h-[18px] bg-surface border-2 rounded-full flex items-center justify-center shrink-0"
                    [class.border-primary]="entry.type === 'status_change'"
                    [class.border-border]="entry.type !== 'status_change'">
                    @if (entry.type === 'status_change') {
                      <span class="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    } @else {
                      <span class="material-symbols-outlined text-[10px] text-text-secondary">person_add</span>
                    }
                  </div>

                  <div>
                    @if (entry.type === 'status_change') {
                      <p class="text-sm text-text">
                        <span class="font-semibold">{{ entry.user?.first_name }} {{ entry.user?.last_name }}</span>
                        <span class="text-text-secondary"> a chang\xE9 le statut en </span>
                        <span class="inline-flex px-2 py-0.5 rounded text-[11px] font-semibold" [class]="getStatusClass(entry.new_status)">{{ formatStatus(entry.new_status) }}</span>
                      </p>
                    } @else {
                      <p class="text-sm text-text">
                        <span class="font-semibold">{{ entry.user?.first_name }} {{ entry.user?.last_name }}</span>
                        <span class="text-text-secondary"> a assign\xE9 \xE0 </span>
                        <span class="font-semibold">{{ entry.new_user?.first_name }} {{ entry.new_user?.last_name }}</span>
                      </p>
                    }
                    <span class="text-xs text-text-muted/60 mt-0.5 block">{{ relativeTime(entry.created_at) }}</span>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
}

<!-- Confirm Dialog -->
@if (showConfirmDialog()) {
  <app-confirm-dialog
    [title]="confirmTitle()"
    [message]="confirmMessage()"
    [showNoteField]="showReworkNote()"
    notePlaceholder="Pourquoi cette t\xE2che est-elle renvoy\xE9e ?"
    confirmText="Confirmer"
    cancelText="Annuler"
    confirmClass="bg-primary text-text-inverse hover:bg-primary-hover"
    (confirmed)="onConfirmAction()"
    (cancelled)="showConfirmDialog.set(false)"
  />
}

<!-- Assign Modal -->
@if (showAssignModal()) {
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/40" (click)="showAssignModal.set(false)"></div>
    <div class="relative bg-surface border border-border rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
      @if (!assignConfirmStep()) {
        <h3 class="text-xl font-heading text-text font-semibold mb-4">Assigner la t\xE2che</h3>
        <div class="relative mb-4">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-secondary">search</span>
          <input type="text" [ngModel]="assignSearch()" (ngModelChange)="assignSearch.set($event)"
            placeholder="Rechercher un membre..." class="w-full pl-9 pr-3 py-2.5 bg-surface border border-border rounded-lg text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
        </div>
        <div class="max-h-60 overflow-y-auto space-y-1">
          @for (member of filteredMembers; track member.id) {
            <button (click)="selectMember(member.id)"
              class="w-full text-left px-3 py-2.5 rounded-md hover:bg-background-alt transition-colors flex items-center gap-3 cursor-pointer">
              <app-avatar [name]="member.first_name + ' ' + member.last_name" size="sm" class="!w-7 !h-7 !text-[10px] shrink-0 rounded-full" />
              <span class="text-sm text-text font-medium">{{ member.first_name }} {{ member.last_name }}</span>
            </button>
          }
          @if (filteredMembers.length === 0) {
            <p class="text-sm text-text-secondary text-center py-4">Aucun membre trouv\xE9</p>
          }
        </div>
        <div class="flex justify-end mt-4">
          <button (click)="showAssignModal.set(false)"
            class="px-4 py-2 text-sm font-semibold text-text-secondary border border-border rounded-md hover:bg-background-alt transition-colors cursor-pointer">
            Annuler
          </button>
        </div>
      } @else {
        <h3 class="text-xl font-heading text-text font-semibold mb-2">Confirmer l'assignation</h3>
        <p class="text-sm text-text-secondary mb-6">Assigner cette t\xE2che \xE0 <strong class="text-text">{{ selectedMemberName }}</strong> ?</p>
        <div class="flex items-center justify-end gap-3">
          <button (click)="assignConfirmStep.set(false)"
            class="px-4 py-2 text-sm font-semibold text-text-secondary border border-border rounded-md hover:bg-background-alt transition-colors cursor-pointer">
            Annuler
          </button>
          <button (click)="confirmAssign()" [disabled]="saving()"
            class="px-4 py-2 text-sm font-semibold bg-primary text-text-inverse rounded-md hover:bg-primary-hover disabled:opacity-50 transition-colors flex items-center gap-2 cursor-pointer">
            @if (saving()) {
              <span class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
            }
            Confirmer
          </button>
        </div>
      }
    </div>
  </div>
}` }]
  }], null, { task: [{ type: Input, args: [{ isSignal: true, alias: "task", required: true }] }], taskUpdated: [{ type: Output, args: ["taskUpdated"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskDetailPanelComponent, { className: "TaskDetailPanelComponent", filePath: "src/app/features/shared/tasks/task-kanban/task-detail-panel.component.ts", lineNumber: 37 });
})();

// src/app/features/shared/tasks/task-kanban/valid-drop-columns.ts
function getValidDropColumns(task, currentUser) {
  if (!currentUser || task.status === "DONE")
    return [];
  const isAssignee = task.user_id === currentUser.id;
  const isManager = currentUser.role === "MANAGER" || currentUser.role === "HR_ADMIN";
  switch (task.status) {
    case "TODO":
      if (isAssignee || isManager)
        return ["IN_PROGRESS"];
      return [];
    case "IN_PROGRESS":
      if (isAssignee || isManager)
        return ["REVIEW"];
      return [];
    case "REVIEW":
      if (isManager)
        return ["DONE", "IN_PROGRESS"];
      return [];
    default:
      return [];
  }
}

// src/app/features/shared/tasks/task-kanban/task-board.component.ts
var _c02 = () => [1, 2, 3, 4];
var _c12 = () => ["CRITICAL", "HIGH", "MEDIUM", "LOW"];
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.status;
var _forTrack2 = ($index, $item) => $item.label;
var arrowFn0 = (ctx, view) => () => {
  const column_r12 = \u0275\u0275restoreView(view).$implicit;
  const ctx_r1 = \u0275\u0275nextContext(2);
  return \u0275\u0275resetView(ctx_r1.canDropToColumn(column_r12.status));
};
function TaskBoardComponent_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function TaskBoardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275element(3, "div", 5)(4, "div", 5)(5, "div", 5)(6, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275repeaterCreate(8, TaskBoardComponent_Conditional_0_For_9_Template, 1, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c02));
  }
}
function TaskBoardComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Quitter ");
  }
}
function TaskBoardComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " S\xE9lection ");
  }
}
function TaskBoardComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newTask());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "line", 49)(3, "line", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Nouvelle t\xE2che ");
    \u0275\u0275elementEnd();
  }
}
function TaskBoardComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage(), " ");
  }
}
function TaskBoardComponent_Conditional_1_Conditional_30_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Conditional_30_For_18_Template_button_click_0_listener() {
      const u_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.bulkAssign(u_r6.id));
    });
    \u0275\u0275element(1, "app-avatar", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r1.resolveAvatarUrl(u_r6.avatar_url))("name", u_r6.first_name + " " + u_r6.last_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r6.first_name, " ");
  }
}
function TaskBoardComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "span", 53);
    \u0275\u0275text(5, "Changer statut :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 54);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Conditional_30_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bulkUpdateStatus("TODO"));
    });
    \u0275\u0275text(7, "\xC0 faire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 54);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Conditional_30_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bulkUpdateStatus("IN_PROGRESS"));
    });
    \u0275\u0275text(9, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 54);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Conditional_30_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bulkUpdateStatus("REVIEW"));
    });
    \u0275\u0275text(11, "En r\xE9vision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 54);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Conditional_30_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bulkUpdateStatus("DONE"));
    });
    \u0275\u0275text(13, "Termin\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "span", 55);
    \u0275\u0275elementStart(15, "span", 53);
    \u0275\u0275text(16, "Assigner \xE0 :");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, TaskBoardComponent_Conditional_1_Conditional_30_For_18_Template, 3, 3, "button", 56, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedIds().size, " t\xE2che(s) s\xE9lectionn\xE9e(s)");
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.assigneeOptions());
  }
}
function TaskBoardComponent_Conditional_1_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", p_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.PRIORITY_LABELS[p_r7]);
  }
}
function TaskBoardComponent_Conditional_1_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r8 = ctx.$implicit;
    \u0275\u0275property("value", u_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", u_r8.first_name, " ", u_r8.last_name);
  }
}
function TaskBoardComponent_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Effacer (", ctx_r1.activeFiltersCount(), ") ");
  }
}
function TaskBoardComponent_Conditional_1_Conditional_69_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275element(4, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r10.pct, "%");
    \u0275\u0275classProp("bg-[#6366F1]", $index_r11 === 0)("bg-[#0EA5E9]", $index_r11 === 1)("bg-[#F59E0B]", $index_r11 === 2)("bg-[#10B981]", $index_r11 === 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.count);
  }
}
function TaskBoardComponent_Conditional_1_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 60)(2, "p", 61);
    \u0275\u0275text(3, "R\xE9partition par statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62);
    \u0275\u0275element(5, "canvas", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 60)(7, "p", 61);
    \u0275\u0275text(8, "R\xE9partition par priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 62);
    \u0275\u0275element(10, "canvas", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 65)(12, "p", 61);
    \u0275\u0275text(13, "Entonnoir de progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 66);
    \u0275\u0275repeaterCreate(15, TaskBoardComponent_Conditional_1_Conditional_69_For_16_Template, 7, 12, "div", 9, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r1.donutData())("options", ctx_r1.donutOptions);
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r1.barData())("options", ctx_r1.barOptions);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.funnelData());
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 98);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_3_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const task_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.toggleSelect(task_r16.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("checked", ctx_r1.selectedIds().has(task_r16.id));
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getPriorityClass(task_r16.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityLabel(task_r16.priority), " ");
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 83);
    \u0275\u0275element(1, "polyline", 100);
    \u0275\u0275elementEnd();
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_7_Template_button_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 102);
    \u0275\u0275element(2, "circle", 103)(3, "circle", 104)(4, "circle", 105);
    \u0275\u0275elementEnd()();
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r16.description);
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-avatar", 90);
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("imageUrl", ctx_r1.resolveAvatarUrl(task_r16.assigned_user.avatar_url))("name", task_r16.assigned_user.first_name + " " + task_r16.assigned_user.last_name);
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 106);
    \u0275\u0275element(2, "line", 49)(3, "line", 50);
    \u0275\u0275elementEnd()();
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 113);
    \u0275\u0275element(1, "polyline", 100);
    \u0275\u0275elementEnd();
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_For_4_Template_button_click_0_listener() {
      const u_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const task_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignToTask(task_r16.id, u_r19.id));
    });
    \u0275\u0275element(1, "app-avatar", 112);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_For_4_Conditional_4_Template, 2, 0, ":svg:svg", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r19 = ctx.$implicit;
    const task_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("font-semibold", task_r16.assigned_user?.id === u_r19.id)("text-primary", task_r16.assigned_user?.id === u_r19.id);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r1.resolveAvatarUrl(u_r19.avatar_url))("name", u_r19.first_name + " " + u_r19.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r19.first_name, " ", u_r19.last_name);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r16.assigned_user?.id === u_r19.id ? 4 : -1);
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "button", 114);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const task_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignToTask(task_r16.id, null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 115);
    \u0275\u0275element(3, "line", 116)(4, "line", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " D\xE9sassigner ");
    \u0275\u0275elementEnd()();
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275text(2, "Assigner \xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_For_4_Template, 5, 9, "button", 109, _forTrack02);
    \u0275\u0275conditionalCreate(5, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_Conditional_5_Template, 6, 0, "div", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.assigneeOptions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r16.assigned_user ? 5 : -1);
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 118);
    \u0275\u0275element(2, "path", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 120);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(task_r16.comments_count);
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 118);
    \u0275\u0275element(2, "path", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 120);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(task_r16.attachments_count);
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 118);
    \u0275\u0275element(2, "polyline", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 120);
    \u0275\u0275text(4, "Termin\xE9");
    \u0275\u0275elementEnd()();
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 118);
    \u0275\u0275element(2, "rect", 124)(3, "line", 125)(4, "line", 126)(5, "line", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 120);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("text-error", ctx_r1.isOverdue(task_r16.due_date));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 3, task_r16.due_date, "d MMM"));
  }
}
function TaskBoardComponent_Conditional_1_For_72_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("cdkDragStarted", function TaskBoardComponent_Conditional_1_For_72_For_10_Template_div_cdkDragStarted_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragStarted($event));
    })("cdkDragEnded", function TaskBoardComponent_Conditional_1_For_72_For_10_Template_div_cdkDragEnded_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDragEnded($event));
    })("click", function TaskBoardComponent_Conditional_1_For_72_For_10_Template_div_click_0_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openPanel(task_r16));
    });
    \u0275\u0275elementStart(1, "div", 79)(2, "div", 80);
    \u0275\u0275conditionalCreate(3, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_3_Template, 1, 1, "input", 81);
    \u0275\u0275elementStart(4, "div", 52);
    \u0275\u0275conditionalCreate(5, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_5_Template, 2, 3, "span", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_6_Template, 2, 0, ":svg:svg", 83)(7, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_7_Template, 5, 0, "button", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_10_Template, 2, 1, "p", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 87)(12, "div", 88)(13, "button", 89);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_For_72_For_10_Template_button_click_13_listener($event) {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.toggleAssignDropdown(task_r16.id));
    });
    \u0275\u0275conditionalCreate(14, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_14_Template, 1, 2, "app-avatar", 90)(15, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_15_Template, 4, 0, "div", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_16_Template, 6, 1, "div", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 93);
    \u0275\u0275conditionalCreate(18, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_18_Template, 5, 1, "span", 94);
    \u0275\u0275conditionalCreate(19, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_19_Template, 5, 1, "span", 95);
    \u0275\u0275conditionalCreate(20, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_20_Template, 5, 0, "span", 96)(21, TaskBoardComponent_Conditional_1_For_72_For_10_Conditional_21_Template, 9, 6, "span", 97);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cursor-pointer", ctx_r1.isTaskDraggable(task_r16) || ctx_r1.bulkMode())("cursor-default", !ctx_r1.isTaskDraggable(task_r16) && !ctx_r1.bulkMode())("hover:shadow-md", !ctx_r1.bulkMode() && ctx_r1.isTaskDraggable(task_r16))("hover:-translate-y-0", !ctx_r1.bulkMode() && ctx_r1.isTaskDraggable(task_r16))("opacity-75", !ctx_r1.isTaskDraggable(task_r16) && !ctx_r1.bulkMode())("grayscale-[0", !ctx_r1.isTaskDraggable(task_r16) && !ctx_r1.bulkMode())("ring-2", ctx_r1.bulkMode() && ctx_r1.selectedIds().has(task_r16.id))("ring-primary", ctx_r1.bulkMode() && ctx_r1.selectedIds().has(task_r16.id))("border-l-4", task_r16.status === "IN_PROGRESS")("border-l-primary", task_r16.status === "IN_PROGRESS")("border-border", task_r16.status !== "IN_PROGRESS")("border-l-border", task_r16.status !== "IN_PROGRESS");
    \u0275\u0275property("cdkDragDisabled", !ctx_r1.isTaskDraggable(task_r16) || ctx_r1.bulkMode())("cdkDragData", task_r16);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.bulkMode() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r16.priority ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r16.status === "DONE" ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", task_r16.status === "DONE")("text-text-secondary", task_r16.status === "DONE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r16.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r16.description ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("opacity-60", !task_r16.assigned_user);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r16.assigned_user ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.assignDropdownTaskId() === task_r16.id ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((task_r16.comments_count ?? 0) > 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((task_r16.attachments_count ?? 0) > 0 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r16.status === "DONE" ? 20 : task_r16.due_date ? 21 : -1);
  }
}
function TaskBoardComponent_Conditional_1_For_72_ForEmpty_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "p", 128);
    \u0275\u0275text(2, "Aucune t\xE2che");
    \u0275\u0275elementEnd()();
  }
}
function TaskBoardComponent_Conditional_1_For_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 71)(2, "div", 9);
    \u0275\u0275element(3, "span", 72);
    \u0275\u0275elementStart(4, "h3", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 74);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 75);
    \u0275\u0275listener("cdkDropListDropped", function TaskBoardComponent_Conditional_1_For_72_Template_div_cdkDropListDropped_8_listener($event) {
      const column_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, column_r14.status));
    });
    \u0275\u0275repeaterCreate(9, TaskBoardComponent_Conditional_1_For_72_For_10_Template, 22, 42, "div", 76, _forTrack02, false, TaskBoardComponent_Conditional_1_For_72_ForEmpty_11_Template, 3, 0, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r14 = ctx.$implicit;
    const \u0275$index_231_r21 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getColumnBorderClass(column_r14.status));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getColumnDotClass(column_r14.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(column_r14.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", column_r14.status === "IN_PROGRESS")("text-text-inverse", column_r14.status === "IN_PROGRESS")("bg-background-alt", column_r14.status !== "IN_PROGRESS")("text-text-secondary", column_r14.status !== "IN_PROGRESS");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r14.tasks.length, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", ctx_r1.bulkMode())("opacity-40", ctx_r1.isDragging() && !ctx_r1.canDropToColumn(column_r14.status))("ring-2", ctx_r1.isDragging() && ctx_r1.canDropToColumn(column_r14.status))("ring-accent/50", ctx_r1.isDragging() && ctx_r1.canDropToColumn(column_r14.status))("bg-accent-light/10", ctx_r1.isDragging() && ctx_r1.canDropToColumn(column_r14.status))("cursor-not-allowed", ctx_r1.isDragging() && !ctx_r1.canDropToColumn(column_r14.status));
    \u0275\u0275property("id", "cdk-drop-list-" + \u0275$index_231_r21)("cdkDropListData", column_r14.tasks)("cdkDropListConnectedTo", ctx_r1.connectedDropLists())("cdkDropListEnterPredicate", \u0275\u0275arrowFunction(31, arrowFn0, ctx));
    \u0275\u0275advance();
    \u0275\u0275repeater(column_r14.tasks);
  }
}
function TaskBoardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h1", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 12)(9, "div", 13);
    \u0275\u0275element(10, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 16);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToProject());
    });
    \u0275\u0275text(14, " Voir le projet ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 9)(16, "div", 17)(17, "button", 18);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToProject());
    });
    \u0275\u0275text(18, " Liste ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 19);
    \u0275\u0275text(20, " Kanban ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_1_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleBulkMode());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 21);
    \u0275\u0275element(23, "rect", 22)(24, "line", 23)(25, "line", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, TaskBoardComponent_Conditional_1_Conditional_26_Template, 1, 0)(27, TaskBoardComponent_Conditional_1_Conditional_27_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, TaskBoardComponent_Conditional_1_Conditional_28_Template, 5, 0, "button", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, TaskBoardComponent_Conditional_1_Conditional_29_Template, 2, 1, "div", 26);
    \u0275\u0275conditionalCreate(30, TaskBoardComponent_Conditional_1_Conditional_30_Template, 19, 1, "div", 27);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 28)(32, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 30);
    \u0275\u0275element(34, "circle", 31)(35, "line", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "input", 33);
    \u0275\u0275listener("ngModelChange", function TaskBoardComponent_Conditional_1_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 34);
    \u0275\u0275listener("ngModelChange", function TaskBoardComponent_Conditional_1_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterPriority.set($event || null));
    });
    \u0275\u0275elementStart(38, "option", 35);
    \u0275\u0275text(39, "Toutes priorit\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(40, TaskBoardComponent_Conditional_1_For_41_Template, 2, 2, "option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(42, "select", 34);
    \u0275\u0275listener("ngModelChange", function TaskBoardComponent_Conditional_1_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterAssignee.set($event ? +$event : null));
    });
    \u0275\u0275elementStart(43, "option", 36);
    \u0275\u0275text(44, "Tous les assign\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(45, TaskBoardComponent_Conditional_1_For_46_Template, 2, 3, "option", 36, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(47, TaskBoardComponent_Conditional_1_Conditional_47_Template, 2, 1, "button", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 38)(49, "div", 39)(50, "span", 40);
    \u0275\u0275text(51, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 41);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 39)(55, "span", 40);
    \u0275\u0275text(56, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 42);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 39)(60, "span", 40);
    \u0275\u0275text(61, "Termin\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 43);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 39)(65, "span", 40);
    \u0275\u0275text(66, "En retard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 44);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(69, TaskBoardComponent_Conditional_1_Conditional_69_Template, 17, 4, "div", 45);
    \u0275\u0275elementStart(70, "div", 46);
    \u0275\u0275repeaterCreate(71, TaskBoardComponent_Conditional_1_For_72_Template, 12, 32, "div", 47, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.projectName() || "Projet");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.projectRef());
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.completionRate(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.completionRate(), "% compl\xE9t\xE9");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("bg-primary", ctx_r1.bulkMode())("text-text-inverse", ctx_r1.bulkMode());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.bulkMode() ? 26 : 27);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isManager() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMessage() ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bulkMode() && ctx_r1.selectedIds().size > 0 ? 30 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.searchQuery());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.filterPriority());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(23, _c12));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filterAssignee());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.assigneeOptions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeFiltersCount() > 0 ? 47 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalTasks());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.inProgressTasks());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.completedTasks());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overdueTasks());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalTasks() > 0 ? 69 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.columns());
  }
}
function TaskBoardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 129);
    \u0275\u0275listener("click", function TaskBoardComponent_Conditional_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePanel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 130)(3, "app-task-detail-panel", 131);
    \u0275\u0275listener("taskUpdated", function TaskBoardComponent_Conditional_2_Template_app_task_detail_panel_taskUpdated_3_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTaskUpdated($event));
    })("close", function TaskBoardComponent_Conditional_2_Template_app_task_detail_panel_close_3_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePanel());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("task", ctx);
  }
}
var STATUS_LABELS2 = {
  TODO: "\xC0 faire",
  IN_PROGRESS: "En cours",
  REVIEW: "En r\xE9vision",
  DONE: "Termin\xE9"
};
var PRIORITY_CLASSES = {
  LOW: "bg-background-alt text-text-secondary",
  MEDIUM: "bg-info-light text-info",
  HIGH: "bg-warning-light text-warning-dark",
  CRITICAL: "bg-error-light text-error-dark"
};
var PRIORITY_LABELS2 = {
  LOW: "Faible",
  MEDIUM: "Moyenne",
  HIGH: "Haute",
  CRITICAL: "Critique"
};
var PRIORITY_COLORS = {
  LOW: "#94A3B8",
  MEDIUM: "#0D9488",
  HIGH: "#F59E0B",
  CRITICAL: "#EF4444"
};
var CHART_COLORS = ["#6366F1", "#0EA5E9", "#F59E0B", "#10B981"];
var CSS_VAR = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
var CHART_TOOLTIP_BG = () => CSS_VAR("--color-tooltip") || "#1E293B";
var CHART_GRID_COLOR = () => CSS_VAR("--color-border") || "#E2E8F0";
var CHART_TICK_MUTED = () => CSS_VAR("--color-text-muted") || "#64748B";
var TASK_STATUSES = ["TODO", "IN_PROGRESS", "REVIEW", "DONE"];
var TaskBoardComponent = class _TaskBoardComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  projectService = inject(ProjectService);
  taskService = inject(TaskService);
  authService = inject(AuthService);
  imageUrlService = inject(ImageUrlService);
  toast = inject(ToastService);
  employeeService = inject(EmployeeService);
  user = this.authService.currentUser;
  projectId = signal(
    0,
    ...ngDevMode ? [{ debugName: "projectId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
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
  selectedTask = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedTask" }] : (
      /* istanbul ignore next */
      []
    )
  );
  panelOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "panelOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  bulkMode = signal(
    false,
    ...ngDevMode ? [{ debugName: "bulkMode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  assignDropdownTaskId = signal(
    null,
    ...ngDevMode ? [{ debugName: "assignDropdownTaskId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedIds = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "selectedIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Filters
  searchQuery = signal(
    "",
    ...ngDevMode ? [{ debugName: "searchQuery" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filterPriority = signal(
    null,
    ...ngDevMode ? [{ debugName: "filterPriority" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filterAssignee = signal(
    null,
    ...ngDevMode ? [{ debugName: "filterAssignee" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projectName = signal(
    "",
    ...ngDevMode ? [{ debugName: "projectName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  projectRef = signal(
    "",
    ...ngDevMode ? [{ debugName: "projectRef" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allTasks = signal(
    [],
    ...ngDevMode ? [{ debugName: "allTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allTeamMembers = signal(
    [],
    ...ngDevMode ? [{ debugName: "allTeamMembers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Filtered tasks ──
  filteredTasks = computed(
    () => {
      let tasks = this.allTasks();
      const q = this.searchQuery().toLowerCase();
      if (q)
        tasks = tasks.filter((t) => t.title.toLowerCase().includes(q) || t.reference_code.toLowerCase().includes(q));
      const prio = this.filterPriority();
      if (prio)
        tasks = tasks.filter((t) => t.priority === prio);
      const assignee = this.filterAssignee();
      if (assignee)
        tasks = tasks.filter((t) => t.user_id === assignee);
      return tasks;
    },
    ...ngDevMode ? [{ debugName: "filteredTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeFiltersCount = computed(
    () => (this.searchQuery() ? 1 : 0) + (this.filterPriority() ? 1 : 0) + (this.filterAssignee() ? 1 : 0),
    ...ngDevMode ? [{ debugName: "activeFiltersCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  assigneeOptions = computed(
    () => this.allTeamMembers().map((m) => ({
      id: m.id,
      first_name: m.first_name,
      last_name: m.last_name,
      avatar_url: m.avatar_url
    })),
    ...ngDevMode ? [{ debugName: "assigneeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Stats ──
  Math = Math;
  circumference = 2 * Math.PI * 52;
  totalTasks = computed(
    () => this.allTasks().length,
    ...ngDevMode ? [{ debugName: "totalTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  overdueTasks = computed(
    () => this.allTasks().filter((t) => t.due_date && new Date(t.due_date) < /* @__PURE__ */ new Date() && t.status !== "DONE").length,
    ...ngDevMode ? [{ debugName: "overdueTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  inProgressTasks = computed(
    () => this.allTasks().filter((t) => t.status === "IN_PROGRESS").length,
    ...ngDevMode ? [{ debugName: "inProgressTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  completedTasks = computed(
    () => this.allTasks().filter((t) => t.status === "DONE").length,
    ...ngDevMode ? [{ debugName: "completedTasks" }] : (
      /* istanbul ignore next */
      []
    )
  );
  completionRate = computed(
    () => this.totalTasks() > 0 ? Math.round(this.completedTasks() / this.totalTasks() * 100) : 0,
    ...ngDevMode ? [{ debugName: "completionRate" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dashOffset = computed(
    () => this.circumference * (1 - this.completionRate() / 100),
    ...ngDevMode ? [{ debugName: "dashOffset" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Donut chart ──
  donutData = computed(
    () => {
      const tasks = this.filteredTasks();
      const counts = TASK_STATUSES.map((s) => tasks.filter((t) => t.status === s).length);
      return {
        labels: TASK_STATUSES.map((s) => STATUS_LABELS2[s]),
        datasets: [{
          data: counts,
          backgroundColor: CHART_COLORS,
          borderColor: "#ffffff",
          borderWidth: 2,
          hoverBorderColor: "#ffffff",
          hoverBorderWidth: 3
        }]
      };
    },
    ...ngDevMode ? [{ debugName: "donutData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend: {
        position: "bottom",
        labels: { font: { family: "DM Sans", size: 11 }, color: CHART_TICK_MUTED(), padding: 12, usePointStyle: true, pointStyleWidth: 10 }
      },
      tooltip: {
        backgroundColor: CHART_TOOLTIP_BG(),
        titleFont: { family: "DM Sans", size: 12, weight: "bold" },
        bodyFont: { family: "DM Sans", size: 11 },
        padding: 10,
        cornerRadius: 4,
        callbacks: {
          label: (context) => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const pct = total > 0 ? Math.round(context.parsed / total * 100) : 0;
            return ` ${context.label}: ${context.parsed} (${pct}%)`;
          }
        }
      }
    }
  };
  // ── Bar chart ──
  barData = computed(
    () => {
      const tasks = this.filteredTasks();
      const priorities = ["CRITICAL", "HIGH", "MEDIUM", "LOW"];
      const counts = priorities.map((p) => tasks.filter((t) => t.priority === p).length);
      return {
        labels: priorities.map((p) => PRIORITY_LABELS2[p]),
        datasets: [{
          data: counts,
          backgroundColor: priorities.map((p) => PRIORITY_COLORS[p]),
          borderRadius: 4,
          borderSkipped: false
        }]
      };
    },
    ...ngDevMode ? [{ debugName: "barData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: CHART_TOOLTIP_BG(), titleFont: { family: "DM Sans", size: 12, weight: "bold" }, bodyFont: { family: "DM Sans", size: 11 }, padding: 10, cornerRadius: 4 }
    },
    scales: {
      x: { beginAtZero: true, ticks: { stepSize: 1, font: { family: "DM Sans", size: 10 }, color: CHART_TICK_MUTED() }, grid: { color: CHART_GRID_COLOR() } },
      y: { ticks: { font: { family: "DM Sans", size: 11 }, color: CHART_TICK_MUTED() }, grid: { display: false } }
    }
  };
  // ── Funnel chart (Flow) ──
  funnelData = computed(
    () => {
      const tasks = this.filteredTasks();
      const maxCount = Math.max(1, tasks.length);
      return TASK_STATUSES.map((s) => {
        const count = tasks.filter((t) => t.status === s).length;
        return { label: STATUS_LABELS2[s], count, pct: Math.round(count / maxCount * 100) };
      });
    },
    ...ngDevMode ? [{ debugName: "funnelData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Columns ──
  columns = computed(
    () => {
      const tasks = this.filteredTasks();
      return TASK_STATUSES.map((status) => ({
        status,
        label: STATUS_LABELS2[status],
        tasks: tasks.filter((t) => t.status === status)
      }));
    },
    ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    )
  );
  connectedDropLists = computed(
    () => this.columns().map((_, i) => `cdk-drop-list-${i}`),
    ...ngDevMode ? [{ debugName: "connectedDropLists" }] : (
      /* istanbul ignore next */
      []
    )
  );
  baseRoute = computed(
    () => {
      const role = this.user()?.role;
      return role === "HR_ADMIN" ? "/admin" : "/manager";
    },
    ...ngDevMode ? [{ debugName: "baseRoute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isManager = computed(
    () => this.user()?.role === "MANAGER" || this.user()?.role === "HR_ADMIN",
    ...ngDevMode ? [{ debugName: "isManager" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── Drag & drop visual state ──
  draggingValidStatuses = signal(
    [],
    ...ngDevMode ? [{ debugName: "draggingValidStatuses" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isDragging = signal(
    false,
    ...ngDevMode ? [{ debugName: "isDragging" }] : (
      /* istanbul ignore next */
      []
    )
  );
  onDragStarted(event) {
    const task = event.source.data;
    const valid = getValidDropColumns(task, this.user());
    this.draggingValidStatuses.set(valid);
    this.isDragging.set(true);
  }
  onDragEnded(_event) {
    this.draggingValidStatuses.set([]);
    this.isDragging.set(false);
  }
  canDropToColumn(status) {
    if (!this.isDragging())
      return true;
    return this.draggingValidStatuses().includes(status);
  }
  isTaskDraggable(task) {
    if (this.bulkMode())
      return false;
    return task.status !== "DONE";
  }
  // ── Bulk selection ──
  allSelected = computed(
    () => {
      const ids = this.selectedIds();
      return this.filteredTasks().length > 0 && this.filteredTasks().every((t) => ids.has(t.id));
    },
    ...ngDevMode ? [{ debugName: "allSelected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toggleBulkMode() {
    this.bulkMode.update((v) => !v);
    this.selectedIds.set(/* @__PURE__ */ new Set());
  }
  toggleSelect(taskId) {
    this.selectedIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(taskId))
        next.delete(taskId);
      else
        next.add(taskId);
      return next;
    });
  }
  toggleSelectAll() {
    if (this.allSelected()) {
      this.selectedIds.set(/* @__PURE__ */ new Set());
    } else {
      this.selectedIds.set(new Set(this.filteredTasks().map((t) => t.id)));
    }
  }
  bulkUpdateStatus(status) {
    const ids = [...this.selectedIds()];
    const taskStatus = status;
    this.toast.info(`Mise \xE0 jour de ${ids.length} t\xE2che(s) vers "${STATUS_LABELS2[taskStatus]}"...`);
    ids.forEach((id) => {
      this.taskService.updateStatus(id, taskStatus).subscribe({
        next: () => {
          this.selectedIds.update((s) => {
            const n = new Set(s);
            n.delete(id);
            return n;
          });
          this.loadTasks(this.projectId());
          this.toast.success(`T\xE2che #${id} mise \xE0 jour.`);
        },
        error: () => this.toast.error(`Erreur sur la t\xE2che #${id}.`)
      });
    });
  }
  bulkAssign(userId) {
    const ids = [...this.selectedIds()];
    this.toast.info(`Assignation de ${ids.length} t\xE2che(s)...`);
    ids.forEach((id) => {
      this.taskService.assignTask(id, userId).subscribe({
        next: () => {
          this.selectedIds.update((s) => {
            const n = new Set(s);
            n.delete(id);
            return n;
          });
          this.loadTasks(this.projectId());
        },
        error: () => this.toast.error(`Erreur sur la t\xE2che #${id}.`)
      });
    });
  }
  // ── Single assign ──
  toggleAssignDropdown(taskId) {
    this.assignDropdownTaskId.update((v) => v === taskId ? null : taskId);
  }
  assignToTask(taskId, userId) {
    this.assignDropdownTaskId.set(null);
    this.taskService.assignTask(taskId, userId).subscribe({
      next: () => {
        this.loadTasks(this.projectId());
        this.toast.success(userId ? "T\xE2che assign\xE9e." : "T\xE2che d\xE9sassign\xE9e.");
      },
      error: () => this.toast.error("Erreur lors de l'assignation.")
    });
  }
  closeAssignDropdown() {
    this.assignDropdownTaskId.set(null);
  }
  // ── Lifecycle ──
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.projectId.set(+id);
      this.loadProject(+id);
      this.loadTasks(+id);
    }
    const role = this.user()?.role;
    if (role === "HR_ADMIN") {
      this.employeeService.getEmployees({ per_page: 100 }).subscribe({
        next: (res) => this.allTeamMembers.set(res.data)
      });
    } else {
      this.employeeService.getManagerTeam({ per_page: 100 }).subscribe({
        next: (res) => this.allTeamMembers.set(res.data)
      });
    }
  }
  loadProject(projectId) {
    this.projectService.getProject(projectId).subscribe({
      next: (project) => {
        this.projectName.set(project.name);
        this.projectRef.set(project.reference_code);
      }
    });
  }
  loadTasks(projectId) {
    this.taskService.getProjectTasks(projectId).subscribe({
      next: (data) => {
        this.allTasks.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set("Erreur lors du chargement des t\xE2ches.");
      }
    });
  }
  clearFilters() {
    this.searchQuery.set("");
    this.filterPriority.set(null);
    this.filterAssignee.set(null);
  }
  getPriorityClass(priority) {
    return PRIORITY_CLASSES[priority || ""] || "bg-background-alt text-text-secondary";
  }
  getPriorityLabel(priority) {
    return PRIORITY_LABELS2[priority || ""] || priority || "";
  }
  isOverdue(dueDate) {
    if (!dueDate)
      return false;
    return new Date(dueDate) < /* @__PURE__ */ new Date();
  }
  resolveAvatarUrl(url) {
    return this.imageUrlService.resolve(url);
  }
  onDrop(event, targetStatus) {
    if (this.bulkMode())
      return;
    const task = event.item.data;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.taskService.reorder(task.id, event.currentIndex).subscribe();
      return;
    }
    const previousStatus = task.status;
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    if (task.status !== targetStatus) {
      const updatedTask = __spreadProps(__spreadValues({}, task), { status: targetStatus });
      this.allTasks.update((tasks) => tasks.map((t) => t.id === task.id ? updatedTask : t));
      this.taskService.updateStatus(task.id, targetStatus).subscribe({
        error: () => {
          const rollback = __spreadProps(__spreadValues({}, task), { status: previousStatus });
          this.allTasks.update((tasks) => tasks.map((t) => t.id === task.id ? rollback : t));
          this.toast.error(`Action non autoris\xE9e : impossible de passer de "${STATUS_LABELS2[previousStatus]}" \xE0 "${STATUS_LABELS2[targetStatus]}".`);
        }
      });
    }
    this.taskService.reorder(task.id, event.currentIndex).subscribe();
  }
  openPanel(task) {
    if (this.bulkMode())
      return;
    this.selectedTask.set(task);
    this.panelOpen.set(true);
  }
  closePanel() {
    this.panelOpen.set(false);
    this.selectedTask.set(null);
  }
  onTaskUpdated(updatedTask) {
    this.allTasks.update((tasks) => tasks.map((t) => t.id === updatedTask.id ? updatedTask : t));
    this.selectedTask.set(updatedTask);
  }
  newTask() {
    this.router.navigate([`${this.baseRoute()}/projects/${this.projectId()}/tasks/new`]);
  }
  backToProject() {
    this.router.navigate([`${this.baseRoute()}/projects/${this.projectId()}`]);
  }
  getColumnBorderClass(status) {
    switch (status) {
      case "TODO":
        return "border-outline";
      case "IN_PROGRESS":
        return "border-primary";
      case "REVIEW":
        return "border-tertiary";
      case "DONE":
        return "border-secondary";
    }
  }
  getColumnDotClass(status) {
    switch (status) {
      case "TODO":
        return "bg-outline";
      case "IN_PROGRESS":
        return "bg-primary animate-pulse";
      case "REVIEW":
        return "bg-tertiary";
      case "DONE":
        return "bg-secondary";
    }
  }
  STATUS_LABELS = STATUS_LABELS2;
  PRIORITY_LABELS = PRIORITY_LABELS2;
  TASK_STATUSES = TASK_STATUSES;
  static \u0275fac = function TaskBoardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskBoardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskBoardComponent, selectors: [["app-task-board"]], hostBindings: function TaskBoardComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TaskBoardComponent_click_HostBindingHandler() {
        return ctx.closeAssignDropdown();
      }, \u0275\u0275resolveDocument);
    }
  }, features: [\u0275\u0275ProvidersFeature([provideCharts(withDefaultRegisterables())])], decls: 3, vars: 2, consts: [[1, "animate-pulse", "space-y-4"], [1, "flex", "flex-col", "gap-4", "h-full"], ["role", "dialog", "aria-modal", "true", 1, "fixed", "inset-0", "z-40"], [1, "h-8", "bg-background-alt", "rounded", "w-1/3"], [1, "grid", "grid-cols-4", "gap-4"], [1, "h-24", "bg-background-alt", "rounded-xl"], [1, "h-96", "bg-background-alt", "rounded-xl"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "shrink-0"], [1, "space-y-1"], [1, "flex", "items-center", "gap-2"], [1, "font-heading", "text-xl", "font-bold", "text-text-heading"], [1, "text-xs", "font-mono", "text-text-muted", "border", "border-border", "px-2", "py-0.5", "rounded", "tracking-tight"], [1, "flex", "items-center", "gap-3"], [1, "w-48", "h-2", "bg-background-alt", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-secondary", "rounded-full", "transition-all", "duration-500"], [1, "text-xs", "font-semibold", "text-secondary"], [1, "text-xs", "text-text-muted", "hover:text-primary", "transition-colors", "underline", "cursor-pointer", "ml-2", 3, "click"], [1, "bg-background-alt", "p-0.5", "rounded-xl", "flex", "border", "border-border"], [1, "px-4", "py-1.5", "rounded-lg", "text-xs", "font-semibold", "text-text-secondary", "hover:text-text", "transition-colors", "cursor-pointer", 3, "click"], [1, "px-4", "py-1.5", "rounded-lg", "bg-surface", "shadow-sm", "text-xs", "font-semibold", "text-primary", "cursor-pointer"], [1, "text-xs", "font-semibold", "px-3", "py-1.5", "rounded-md", "border", "border-border", "hover:bg-background-alt", "transition-colors", "flex", "items-center", "gap-1.5", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], [1, "bg-primary", "text-text-inverse", "text-xs", "font-bold", "px-4", "py-1.5", "rounded-lg", "hover:opacity-90", "transition-all", "shadow-sm", "flex", "items-center", "gap-1.5", "cursor-pointer"], ["role", "alert", 1, "bg-error-light", "border", "border-error/20", "rounded-md", "px-4", "py-3", "text-sm", "font-medium", "text-error-dark", "shrink-0"], [1, "bg-primary/5", "border", "border-primary/20", "rounded-xl", "px-4", "py-3", "flex", "items-center", "justify-between", "shrink-0"], [1, "flex", "items-center", "gap-3", "shrink-0"], [1, "relative", "flex-1", "max-w-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-text-muted", "pointer-events-none"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Rechercher par titre ou r\xE9f\xE9rence...", 1, "w-full", "pl-9", "pr-3", "py-2", "text-sm", "bg-surface", "border", "border-border", "rounded-md", "focus:outline-none", "focus:ring-2", "focus:ring-primary/40", "transition-all", "text-text", "placeholder:text-text-muted", 3, "ngModelChange", "ngModel"], [1, "text-sm", "bg-surface", "border", "border-border", "rounded-md", "px-3", "py-2", "focus:outline-none", "focus:ring-2", "focus:ring-primary/40", "text-text", "cursor-pointer", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "text-xs", "font-semibold", "text-primary", "hover:text-primary-hover", "px-2", "py-1", "cursor-pointer"], [1, "grid", "grid-cols-4", "gap-4", "shrink-0"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-4", "flex", "flex-col", "gap-1"], [1, "text-xs", "uppercase", "tracking-wider", "text-text-muted", "font-semibold"], [1, "text-2xl", "font-bold", "text-text-heading", "tabular-nums"], [1, "text-2xl", "font-bold", "text-info", "tabular-nums"], [1, "text-2xl", "font-bold", "text-success-dark", "tabular-nums"], [1, "text-2xl", "font-bold", "text-error-dark", "tabular-nums"], [1, "grid", "grid-cols-3", "gap-4", "shrink-0"], [1, "grid", "grid-cols-4", "gap-4", "flex-1", "min-h-0"], [1, "bg-background-alt/30", "rounded-xl", "flex", "flex-col", "min-h-0"], [1, "bg-primary", "text-text-inverse", "text-xs", "font-bold", "px-4", "py-1.5", "rounded-lg", "hover:opacity-90", "transition-all", "shadow-sm", "flex", "items-center", "gap-1.5", "cursor-pointer", 3, "click"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "text-sm", "font-semibold", "text-primary"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "text-xs", "text-text-muted", "font-medium"], [1, "text-xs", "font-semibold", "px-2.5", "py-1.5", "rounded-md", "border", "border-border", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "click"], [1, "w-px", "h-5", "bg-border", "mx-1"], [1, "flex", "items-center", "gap-1", "text-xs", "font-medium", "px-2", "py-1", "rounded-md", "border", "border-border", "hover:bg-background-alt", "transition-colors", "cursor-pointer"], [1, "flex", "items-center", "gap-1", "text-xs", "font-medium", "px-2", "py-1", "rounded-md", "border", "border-border", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "click"], ["size", "sm", 3, "imageUrl", "name"], [1, "text-xs", "font-semibold", "text-primary", "hover:text-primary-hover", "px-2", "py-1", "cursor-pointer", 3, "click"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-4"], [1, "text-xs", "uppercase", "tracking-wider", "text-text-muted", "font-semibold", "mb-3"], [1, "h-[180px]"], ["baseChart", "", "type", "doughnut", 3, "data", "options"], ["baseChart", "", "type", "bar", 3, "data", "options"], [1, "bg-surface", "border", "border-border", "rounded-xl", "p-4", "flex", "flex-col"], [1, "flex-1", "flex", "flex-col", "justify-center", "gap-2", "px-4"], [1, "w-20", "text-[11px]", "text-text-muted", "font-medium", "text-right", "shrink-0"], [1, "flex-1", "h-6", "rounded-full", "bg-background-alt", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-500"], [1, "w-8", "text-[11px]", "font-semibold", "text-text-heading", "tabular-nums", "text-right", "shrink-0"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-b-2", "shrink-0"], [1, "w-2", "h-2", "rounded-full"], [1, "font-heading", "text-sm", "font-semibold", "text-text-heading"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full"], ["cdkDropList", "", 1, "flex", "flex-col", "gap-3", "px-3", "py-3", "overflow-y-auto", "flex-1", "min-h-0", "transition-all", "duration-200", 3, "cdkDropListDropped", "id", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListEnterPredicate"], ["cdkDrag", "", 1, "bg-surface", "rounded-[10px]", "border", "shadow-sm", "transition-all", "duration-200", "flex", "flex-col", "gap-2", "group", 3, "cdkDragDisabled", "cdkDragData", "cursor-pointer", "cursor-default", "hover:shadow-md", "hover:-translate-y-0", "opacity-75", "grayscale-[0", "ring-2", "ring-primary", "border-l-4", "border-l-primary", "border-border", "border-l-border"], [1, "flex-1", "flex", "items-center", "justify-center"], ["cdkDrag", "", 1, "bg-surface", "rounded-[10px]", "border", "shadow-sm", "transition-all", "duration-200", "flex", "flex-col", "gap-2", "group", 3, "cdkDragStarted", "cdkDragEnded", "click", "cdkDragDisabled", "cdkDragData"], [1, "p-3", "pb-0", "flex", "flex-col", "gap-2"], [1, "flex", "items-start", "justify-between", "gap-2"], ["type", "checkbox", 1, "mt-0.5", "shrink-0", "w-4", "h-4", "rounded", "border-border", "text-primary", "focus:ring-primary/40", "cursor-pointer", 3, "checked"], [1, "inline-flex", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "class"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-success", "shrink-0", "ml-auto"], [1, "text-text-muted", "hover:text-primary", "transition-colors", "shrink-0", "cursor-pointer"], [1, "font-heading", "text-base", "font-medium", "text-text-heading", "leading-snug", "group-hover:text-primary", "transition-colors"], [1, "text-sm", "text-text-secondary", "line-clamp-2"], [1, "border-t", "border-border", "pt-2", "pb-3", "px-3", "flex", "items-center", "justify-between"], [1, "relative"], [1, "flex", "-space-x-2", "cursor-pointer", "group", 3, "click"], ["size", "sm", 1, "!w-7", "!h-7", "!text-[11px]", "border-2", "border-white", "shrink-0", "rounded-full", 3, "imageUrl", "name"], [1, "w-7", "h-7", "rounded-full", "border-2", "border-dashed", "border-border", "bg-background-alt", "flex", "items-center", "justify-center", "group-hover:border-primary/50", "group-hover:bg-primary/5", "transition-all"], [1, "absolute", "bottom-full", "left-0", "mb-2", "z-50", "w-52", "bg-surface", "border", "border-border", "rounded-xl", "shadow-lg", "overflow-hidden"], [1, "flex", "items-center", "gap-3", "text-text-muted"], ["title", "Commentaires", 1, "flex", "items-center", "gap-0.5"], ["title", "Pi\xE8ces jointes", 1, "flex", "items-center", "gap-0.5"], [1, "flex", "items-center", "gap-0.5", "text-secondary"], [1, "flex", "items-center", "gap-0.5", 3, "text-error"], ["type", "checkbox", 1, "mt-0.5", "shrink-0", "w-4", "h-4", "rounded", "border-border", "text-primary", "focus:ring-primary/40", "cursor-pointer", 3, "click", "checked"], [1, "inline-flex", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold"], ["points", "20 6 9 17 4 12"], [1, "text-text-muted", "hover:text-primary", "transition-colors", "shrink-0", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-[18px]", "h-[18px]"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "19", "cy", "12", "r", "1"], ["cx", "5", "cy", "12", "r", "1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3.5", "h-3.5", "text-text-muted", "group-hover:text-primary", "transition-colors"], [1, "absolute", "bottom-full", "left-0", "mb-2", "z-50", "w-52", "bg-surface", "border", "border-border", "rounded-xl", "shadow-lg", "overflow-hidden", 3, "click"], [1, "px-3", "py-2", "text-xs", "font-semibold", "text-text-muted", "uppercase", "tracking-wider", "border-b", "border-border"], [1, "w-full", "flex", "items-center", "gap-2", "px-3", "py-2", "text-sm", "text-text", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "font-semibold", "text-primary"], [1, "border-t", "border-border"], [1, "w-full", "flex", "items-center", "gap-2", "px-3", "py-2", "text-sm", "text-text", "hover:bg-background-alt", "transition-colors", "cursor-pointer", 3, "click"], ["size", "sm", 1, "!w-6", "!h-6", "!text-[10px]", "shrink-0", "rounded-full", 3, "imageUrl", "name"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "ml-auto", "text-primary", "shrink-0"], [1, "w-full", "flex", "items-center", "gap-2", "px-3", "py-2", "text-sm", "text-error", "hover:bg-error/5", "transition-colors", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-[14px]", "h-[14px]"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "text-[11px]", "font-medium"], ["d", "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "flex", "items-center", "gap-0.5"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "text-xs", "text-text-muted", "text-center", "py-8"], [1, "absolute", "inset-0", "bg-black/30", 3, "click"], [1, "absolute", "inset-y-0", "right-0", "w-full", "max-w-4xl", "bg-surface", "border-l", "border-border", "shadow-2xl", "overflow-y-auto"], [3, "taskUpdated", "close", "task"]], template: function TaskBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TaskBoardComponent_Conditional_0_Template, 10, 1, "div", 0)(1, TaskBoardComponent_Conditional_1_Template, 73, 24, "div", 1);
      \u0275\u0275conditionalCreate(2, TaskBoardComponent_Conditional_2_Template, 4, 1, "div", 2);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275conditional(ctx.loading() ? 0 : 1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = ctx.panelOpen() && ctx.selectedTask()) ? 2 : -1, tmp_1_0);
    }
  }, dependencies: [RouterModule, DragDropModule, CdkDropList, CdkDrag, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AvatarComponent, TaskDetailPanelComponent, BaseChartDirective, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskBoardComponent, [{
    type: Component,
    args: [{ selector: "app-task-board", standalone: true, imports: [RouterModule, DragDropModule, FormsModule, AvatarComponent, TaskDetailPanelComponent, BaseChartDirective, DatePipe], providers: [provideCharts(withDefaultRegisterables())], template: `@if (loading()) {
  <div class="animate-pulse space-y-4">
    <div class="h-8 bg-background-alt rounded w-1/3"></div>
    <div class="grid grid-cols-4 gap-4">
      <div class="h-24 bg-background-alt rounded-xl"></div>
      <div class="h-24 bg-background-alt rounded-xl"></div>
      <div class="h-24 bg-background-alt rounded-xl"></div>
      <div class="h-24 bg-background-alt rounded-xl"></div>
    </div>
    <div class="grid grid-cols-4 gap-4">
      @for (i of [1,2,3,4]; track i) {
        <div class="h-96 bg-background-alt rounded-xl"></div>
      }
    </div>
  </div>
} @else {
  <div class="flex flex-col gap-4 h-full">

    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <h1 class="font-heading text-xl font-bold text-text-heading">{{ projectName() || 'Projet' }}</h1>
          <span class="text-xs font-mono text-text-muted border border-border px-2 py-0.5 rounded tracking-tight">{{ projectRef() }}</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-48 h-2 bg-background-alt rounded-full overflow-hidden">
            <div class="h-full bg-secondary rounded-full transition-all duration-500" [style.width.%]="completionRate()"></div>
          </div>
          <span class="text-xs font-semibold text-secondary">{{ completionRate() }}% compl\xE9t\xE9</span>
          <button (click)="backToProject()" class="text-xs text-text-muted hover:text-primary transition-colors underline cursor-pointer ml-2">
            Voir le projet
          </button>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="bg-background-alt p-0.5 rounded-xl flex border border-border">
          <button (click)="backToProject()"
            class="px-4 py-1.5 rounded-lg text-xs font-semibold text-text-secondary hover:text-text transition-colors cursor-pointer">
            Liste
          </button>
          <button
            class="px-4 py-1.5 rounded-lg bg-surface shadow-sm text-xs font-semibold text-primary cursor-pointer">
            Kanban
          </button>
        </div>
        <button (click)="toggleBulkMode()"
          [class.bg-primary]="bulkMode()" [class.text-text-inverse]="bulkMode()"
          class="text-xs font-semibold px-3 py-1.5 rounded-md border border-border hover:bg-background-alt transition-colors flex items-center gap-1.5 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>
          </svg>
          @if (bulkMode()) { Quitter } @else { S\xE9lection }
        </button>
        @if (isManager()) {
          <button (click)="newTask()"
            class="bg-primary text-text-inverse text-xs font-bold px-4 py-1.5 rounded-lg hover:opacity-90 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Nouvelle t\xE2che
          </button>
        }
      </div>
    </div>

    @if (errorMessage()) {
      <div role="alert" class="bg-error-light border border-error/20 rounded-md px-4 py-3 text-sm font-medium text-error-dark shrink-0">
        {{ errorMessage() }}
      </div>
    }

    <!-- Bulk action bar -->
    @if (bulkMode() && selectedIds().size > 0) {
      <div class="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 flex items-center justify-between shrink-0">
        <span class="text-sm font-semibold text-primary">{{ selectedIds().size }} t\xE2che(s) s\xE9lectionn\xE9e(s)</span>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-xs text-text-muted font-medium">Changer statut :</span>
          <button (click)="bulkUpdateStatus('TODO')" class="text-xs font-semibold px-2.5 py-1.5 rounded-md border border-border hover:bg-background-alt transition-colors cursor-pointer">\xC0 faire</button>
          <button (click)="bulkUpdateStatus('IN_PROGRESS')" class="text-xs font-semibold px-2.5 py-1.5 rounded-md border border-border hover:bg-background-alt transition-colors cursor-pointer">En cours</button>
          <button (click)="bulkUpdateStatus('REVIEW')" class="text-xs font-semibold px-2.5 py-1.5 rounded-md border border-border hover:bg-background-alt transition-colors cursor-pointer">En r\xE9vision</button>
          <button (click)="bulkUpdateStatus('DONE')" class="text-xs font-semibold px-2.5 py-1.5 rounded-md border border-border hover:bg-background-alt transition-colors cursor-pointer">Termin\xE9</button>
          <span class="w-px h-5 bg-border mx-1"></span>
          <span class="text-xs text-text-muted font-medium">Assigner \xE0 :</span>
          @for (u of assigneeOptions(); track u.id) {
            <button (click)="bulkAssign(u.id)"
              class="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md border border-border hover:bg-background-alt transition-colors cursor-pointer">
              <app-avatar [imageUrl]="resolveAvatarUrl(u.avatar_url)" [name]="u.first_name + ' ' + u.last_name" size="sm" />
              {{ u.first_name }}
            </button>
          }
        </div>
      </div>
    }

    <!-- Filters bar -->
    <div class="flex items-center gap-3 shrink-0">
      <div class="relative flex-1 max-w-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" [ngModel]="searchQuery()" (ngModelChange)="searchQuery.set($event)" placeholder="Rechercher par titre ou r\xE9f\xE9rence..."
          class="w-full pl-9 pr-3 py-2 text-sm bg-surface border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-text placeholder:text-text-muted" />
      </div>
      <select [ngModel]="filterPriority()" (ngModelChange)="filterPriority.set($event || null)"
        class="text-sm bg-surface border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 text-text cursor-pointer">
        <option value="">Toutes priorit\xE9s</option>
        @for (p of ['CRITICAL','HIGH','MEDIUM','LOW']; track p) {
          <option [value]="p">{{ PRIORITY_LABELS[p] }}</option>
        }
      </select>
      <select [ngModel]="filterAssignee()" (ngModelChange)="filterAssignee.set($event ? +$event : null)"
        class="text-sm bg-surface border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 text-text cursor-pointer">
        <option [value]="0">Tous les assign\xE9s</option>
        @for (u of assigneeOptions(); track u.id) {
          <option [value]="u.id">{{ u.first_name }} {{ u.last_name }}</option>
        }
      </select>
      @if (activeFiltersCount() > 0) {
        <button (click)="clearFilters()" class="text-xs font-semibold text-primary hover:text-primary-hover px-2 py-1 cursor-pointer">
          Effacer ({{ activeFiltersCount() }})
        </button>
      }
    </div>

    <!-- Stats + Charts header -->
    <div class="grid grid-cols-4 gap-4 shrink-0">
      <div class="bg-surface border border-border rounded-xl p-4 flex flex-col gap-1">
        <span class="text-xs uppercase tracking-wider text-text-muted font-semibold">Total</span>
        <span class="text-2xl font-bold text-text-heading tabular-nums">{{ totalTasks() }}</span>
      </div>
      <div class="bg-surface border border-border rounded-xl p-4 flex flex-col gap-1">
        <span class="text-xs uppercase tracking-wider text-text-muted font-semibold">En cours</span>
        <span class="text-2xl font-bold text-info tabular-nums">{{ inProgressTasks() }}</span>
      </div>
      <div class="bg-surface border border-border rounded-xl p-4 flex flex-col gap-1">
        <span class="text-xs uppercase tracking-wider text-text-muted font-semibold">Termin\xE9</span>
        <span class="text-2xl font-bold text-success-dark tabular-nums">{{ completedTasks() }}</span>
      </div>
      <div class="bg-surface border border-border rounded-xl p-4 flex flex-col gap-1">
        <span class="text-xs uppercase tracking-wider text-text-muted font-semibold">En retard</span>
        <span class="text-2xl font-bold text-error-dark tabular-nums">{{ overdueTasks() }}</span>
      </div>
    </div>

    @if (totalTasks() > 0) {
      <div class="grid grid-cols-3 gap-4 shrink-0">
        <div class="bg-surface border border-border rounded-xl p-4">
          <p class="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">R\xE9partition par statut</p>
          <div class="h-[180px]">
            <canvas baseChart type="doughnut" [data]="donutData()" [options]="donutOptions"></canvas>
          </div>
        </div>
        <div class="bg-surface border border-border rounded-xl p-4">
          <p class="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">R\xE9partition par priorit\xE9</p>
          <div class="h-[180px]">
            <canvas baseChart type="bar" [data]="barData()" [options]="barOptions"></canvas>
          </div>
        </div>
        <div class="bg-surface border border-border rounded-xl p-4 flex flex-col">
          <p class="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">Entonnoir de progression</p>
          <div class="flex-1 flex flex-col justify-center gap-2 px-4">
            @for (item of funnelData(); track item.label) {
              <div class="flex items-center gap-2">
                <span class="w-20 text-[11px] text-text-muted font-medium text-right shrink-0">{{ item.label }}</span>
                <div class="flex-1 h-6 rounded-full bg-background-alt overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-500"
                    [style.width.%]="item.pct"
                    [class.bg-[#6366F1]]="$index === 0"
                    [class.bg-[#0EA5E9]]="$index === 1"
                    [class.bg-[#F59E0B]]="$index === 2"
                    [class.bg-[#10B981]]="$index === 3">
                  </div>
                </div>
                <span class="w-8 text-[11px] font-semibold text-text-heading tabular-nums text-right shrink-0">{{ item.count }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    }

    <!-- Kanban columns -->
    <div class="grid grid-cols-4 gap-4 flex-1 min-h-0">
      @for (column of columns(); track column.status; let ci = $index) {
        <div class="bg-background-alt/30 rounded-xl flex flex-col min-h-0">

          <!-- Column header -->
          <div class="flex items-center justify-between px-4 py-3 border-b-2 shrink-0" [class]="getColumnBorderClass(column.status)">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full" [class]="getColumnDotClass(column.status)"></span>
              <h3 class="font-heading text-sm font-semibold text-text-heading">{{ column.label }}</h3>
            </div>
            <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
              [class.bg-primary]="column.status === 'IN_PROGRESS'"
              [class.text-text-inverse]="column.status === 'IN_PROGRESS'"
              [class.bg-background-alt]="column.status !== 'IN_PROGRESS'"
              [class.text-text-secondary]="column.status !== 'IN_PROGRESS'">
              {{ column.tasks.length }}
            </span>
          </div>

          <!-- Task list -->
          <div cdkDropList
            [id]="'cdk-drop-list-' + ci"
            [cdkDropListData]="column.tasks"
            [cdkDropListConnectedTo]="connectedDropLists()"
            [cdkDropListEnterPredicate]="() => canDropToColumn(column.status)"
            (cdkDropListDropped)="onDrop($event, column.status)"
            class="flex flex-col gap-3 px-3 py-3 overflow-y-auto flex-1 min-h-0 transition-all duration-200"
            [class.opacity-60]="bulkMode()"
            [class.opacity-40]="isDragging() && !canDropToColumn(column.status)"
            [class.ring-2]="isDragging() && canDropToColumn(column.status)"
            [class.ring-accent/50]="isDragging() && canDropToColumn(column.status)"
            [class.bg-accent-light/10]="isDragging() && canDropToColumn(column.status)"
            [class.cursor-not-allowed]="isDragging() && !canDropToColumn(column.status)">
            @for (task of column.tasks; track task.id) {
              <div
                cdkDrag
                [cdkDragDisabled]="!isTaskDraggable(task) || bulkMode()"
                [cdkDragData]="task"
                (cdkDragStarted)="onDragStarted($event)"
                (cdkDragEnded)="onDragEnded($event)"
                (click)="openPanel(task)"
                class="bg-surface rounded-[10px] border shadow-sm transition-all duration-200 flex flex-col gap-2 group"
                [class.cursor-pointer]="isTaskDraggable(task) || bulkMode()"
                [class.cursor-default]="!isTaskDraggable(task) && !bulkMode()"
                [class.hover:shadow-md]="!bulkMode() && isTaskDraggable(task)"
                [class.hover:-translate-y-0.5]="!bulkMode() && isTaskDraggable(task)"
                [class.opacity-75]="!isTaskDraggable(task) && !bulkMode()"
                [class.grayscale-[0.2]]="!isTaskDraggable(task) && !bulkMode()"
                [class.ring-2]="bulkMode() && selectedIds().has(task.id)"
                [class.ring-primary]="bulkMode() && selectedIds().has(task.id)"
                [class.border-l-4]="task.status === 'IN_PROGRESS'"
                [class.border-l-primary]="task.status === 'IN_PROGRESS'"
                [class.border-border]="task.status !== 'IN_PROGRESS'"
                [class.border-l-border]="task.status !== 'IN_PROGRESS'">
                <div class="p-3 pb-0 flex flex-col gap-2">
                  <div class="flex items-start justify-between gap-2">
                    @if (bulkMode()) {
                      <input type="checkbox" [checked]="selectedIds().has(task.id)"
                        (click)="$event.stopPropagation(); toggleSelect(task.id)"
                        class="mt-0.5 shrink-0 w-4 h-4 rounded border-border text-primary focus:ring-primary/40 cursor-pointer" />
                    }
                    <div class="flex items-center gap-2 flex-wrap">
                      @if (task.priority) {
                        <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold" [class]="getPriorityClass(task.priority)">
                          {{ getPriorityLabel(task.priority) }}
                        </span>
                      }
                    </div>
                    @if (task.status === 'DONE') {
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-success shrink-0 ml-auto"><polyline points="20 6 9 17 4 12"/></svg>
                    } @else {
                      <button class="text-text-muted hover:text-primary transition-colors shrink-0 cursor-pointer" (click)="$event.stopPropagation()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </button>
                    }
                  </div>
                  <h4 class="font-heading text-base font-medium text-text-heading leading-snug group-hover:text-primary transition-colors"
                    [class.line-through]="task.status === 'DONE'"
                    [class.text-text-secondary]="task.status === 'DONE'">
                    {{ task.title }}
                  </h4>
                  @if (task.description) {
                    <p class="text-sm text-text-secondary line-clamp-2">{{ task.description }}</p>
                  }
                </div>

                <!-- Card footer -->
                <div class="border-t border-border pt-2 pb-3 px-3 flex items-center justify-between">
                  <div class="relative">
                    <button (click)="$event.stopPropagation(); toggleAssignDropdown(task.id)"
                      class="flex -space-x-2 cursor-pointer group"
                      [class.opacity-60]="!task.assigned_user">
                      @if (task.assigned_user) {
                        <app-avatar [imageUrl]="resolveAvatarUrl(task.assigned_user.avatar_url)"
                          [name]="task.assigned_user.first_name + ' ' + task.assigned_user.last_name"
                          size="sm" class="!w-7 !h-7 !text-[11px] border-2 border-white shrink-0 rounded-full" />
                      } @else {
                        <div class="w-7 h-7 rounded-full border-2 border-dashed border-border bg-background-alt flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-text-muted group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                      }
                    </button>
                    @if (assignDropdownTaskId() === task.id) {
                      <div (click)="$event.stopPropagation()"
                        class="absolute bottom-full left-0 mb-2 z-50 w-52 bg-surface border border-border rounded-xl shadow-lg overflow-hidden">
                        <div class="px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider border-b border-border">Assigner \xE0</div>
                        @for (u of assigneeOptions(); track u.id) {
                          <button (click)="assignToTask(task.id, u.id)"
                            class="w-full flex items-center gap-2 px-3 py-2 text-sm text-text hover:bg-background-alt transition-colors cursor-pointer"
                            [class.font-semibold]="task.assigned_user?.id === u.id"
                            [class.text-primary]="task.assigned_user?.id === u.id">
                            <app-avatar [imageUrl]="resolveAvatarUrl(u.avatar_url)" [name]="u.first_name + ' ' + u.last_name" size="sm" class="!w-6 !h-6 !text-[10px] shrink-0 rounded-full" />
                            <span>{{ u.first_name }} {{ u.last_name }}</span>
                            @if (task.assigned_user?.id === u.id) {
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-auto text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            }
                          </button>
                        }
                        @if (task.assigned_user) {
                          <div class="border-t border-border">
                            <button (click)="assignToTask(task.id, null)"
                              class="w-full flex items-center gap-2 px-3 py-2 text-sm text-error hover:bg-error/5 transition-colors cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                              D\xE9sassigner
                            </button>
                          </div>
                        }
                      </div>
                    }
                  </div>
                  <div class="flex items-center gap-3 text-text-muted">
                    @if ((task.comments_count ?? 0) > 0) {
                      <span class="flex items-center gap-0.5" title="Commentaires">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[14px] h-[14px]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        <span class="text-[11px] font-medium">{{ task.comments_count }}</span>
                      </span>
                    }
                    @if ((task.attachments_count ?? 0) > 0) {
                      <span class="flex items-center gap-0.5" title="Pi\xE8ces jointes">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[14px] h-[14px]"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                        <span class="text-[11px] font-medium">{{ task.attachments_count }}</span>
                      </span>
                    }
                    @if (task.status === 'DONE') {
                      <span class="flex items-center gap-0.5 text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[14px] h-[14px]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        <span class="text-[11px] font-medium">Termin\xE9</span>
                      </span>
                    } @else if (task.due_date) {
                      <span class="flex items-center gap-0.5" [class.text-error]="isOverdue(task.due_date)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[14px] h-[14px]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span class="text-[11px] font-medium">{{ task.due_date | date:'d MMM' }}</span>
                      </span>
                    }
                  </div>
                </div>
              </div>
            } @empty {
              <div class="flex-1 flex items-center justify-center">
                <p class="text-xs text-text-muted text-center py-8">Aucune t\xE2che</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  </div>
}

@if (panelOpen() && selectedTask(); as task) {
  <div class="fixed inset-0 z-40" role="dialog" aria-modal="true">
    <div class="absolute inset-0 bg-black/30" (click)="closePanel()"></div>
    <div class="absolute inset-y-0 right-0 w-full max-w-4xl bg-surface border-l border-border shadow-2xl overflow-y-auto">
      <app-task-detail-panel
        [task]="task"
        (taskUpdated)="onTaskUpdated($event)"
        (close)="closePanel()" />
    </div>
  </div>
}
` }]
  }], null, { closeAssignDropdown: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskBoardComponent, { className: "TaskBoardComponent", filePath: "src/app/features/shared/tasks/task-kanban/task-board.component.ts", lineNumber: 68 });
})();
export {
  TaskBoardComponent
};
//# sourceMappingURL=chunk-PXRY3JB2.js.map
