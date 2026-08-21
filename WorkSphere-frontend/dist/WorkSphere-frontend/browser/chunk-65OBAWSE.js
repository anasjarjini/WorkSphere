import {
  takeUntilDestroyed
} from "./chunk-I5TXPRRV.js";
import {
  ImageUrlService
} from "./chunk-ZTU2DKVI.js";
import {
  AuthService,
  ChatService
} from "./chunk-AI3EC5OL.js";
import "./chunk-DGTBVCJC.js";
import {
  AsyncPipe,
  DatePipe
} from "./chunk-FWX4MYVU.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-3HN2YFK3.js";
import {
  Component,
  DestroyRef,
  Input,
  Output,
  ViewChild,
  effect,
  inject,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-ADF3COWQ.js";
import "./chunk-FDMHZOCR.js";

// src/app/shared/components/chat-avatar/chat-avatar.component.ts
function ChatAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r0.imageUrlService.resolve(ctx_r0.user.avatar_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.displayName);
  }
}
function ChatAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials, " ");
  }
}
function ChatAvatarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 ", ctx_r0.borderColor, " rounded-full"));
  }
}
var ChatAvatarComponent = class _ChatAvatarComponent {
  user = null;
  size = "md";
  showOnline = false;
  borderColor = "border-white";
  imageUrlService = inject(ImageUrlService);
  get displayName() {
    const user = this.user;
    if (!user)
      return "?";
    return `${user.first_name} ${user.last_name}`.trim();
  }
  get initials() {
    const user = this.user;
    if (!user)
      return "?";
    return `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`.toUpperCase();
  }
  get sizeClass() {
    return this.size === "sm" ? "w-9 h-9 text-xs" : "w-11 h-11 text-sm";
  }
  static \u0275fac = function ChatAvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatAvatarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatAvatarComponent, selectors: [["app-chat-avatar"]], inputs: { user: "user", size: "size", showOnline: "showOnline", borderColor: "borderColor" }, decls: 4, vars: 5, consts: [[1, "w-full", "h-full", "rounded-full", "object-cover", "border", "border-outline-variant", 3, "src", "alt"], [1, "w-full", "h-full", "rounded-full", "bg-primary-container/30", "text-primary", "font-bold", "flex", "items-center", "justify-center", "border", "border-outline-variant"], [3, "class"]], template: function ChatAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div");
      \u0275\u0275conditionalCreate(1, ChatAvatarComponent_Conditional_1_Template, 1, 2, "img", 0)(2, ChatAvatarComponent_Conditional_2_Template, 2, 1, "div", 1);
      \u0275\u0275conditionalCreate(3, ChatAvatarComponent_Conditional_3_Template, 1, 3, "span", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275interpolate1("relative shrink-0 ", ctx.sizeClass));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.user?.avatar_url ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showOnline ? 3 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatAvatarComponent, [{
    type: Component,
    args: [{
      selector: "app-chat-avatar",
      standalone: true,
      template: `
    <div class="relative shrink-0 {{ sizeClass }}">
      @if (user?.avatar_url) {
        <img [src]="imageUrlService.resolve(user!.avatar_url)" [alt]="displayName"
          class="w-full h-full rounded-full object-cover border border-outline-variant" />
      } @else {
        <div class="w-full h-full rounded-full bg-primary-container/30 text-primary font-bold flex items-center justify-center border border-outline-variant">
          {{ initials }}
        </div>
      }
      @if (showOnline) {
        <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 {{ borderColor }} rounded-full"></span>
      }
    </div>
  `
    }]
  }], null, { user: [{
    type: Input,
    args: [{ required: true }]
  }], size: [{
    type: Input
  }], showOnline: [{
    type: Input
  }], borderColor: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatAvatarComponent, { className: "ChatAvatarComponent", filePath: "src/app/shared/components/chat-avatar/chat-avatar.component.ts", lineNumber: 24 });
})();

// src/app/features/chat/message-thread.component.ts
var _c0 = ["scrollContainer"];
var _forTrack0 = ($index, $item) => $item.id;
function MessageThreadComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementEnd();
  }
}
function MessageThreadComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 28);
    \u0275\u0275text(2, "Aucun message \u2014 commencez la discussion !");
    \u0275\u0275elementEnd()();
  }
}
function MessageThreadComponent_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 32);
    \u0275\u0275listener("click", function MessageThreadComponent_Conditional_18_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLoadOlder());
    });
    \u0275\u0275text(2, " Charger les messages pr\xE9c\xE9dents ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.chatService.loadingMessages());
  }
}
function MessageThreadComponent_Conditional_18_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chat-avatar", 33);
  }
  if (rf & 2) {
    const message_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("user", message_r4.sender);
  }
}
function MessageThreadComponent_Conditional_18_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(message_r4.content);
  }
}
function MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const attachment_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", attachment_r6.file_name);
  }
}
function MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_0_Conditional_1_Template, 1, 2, "img", 37);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275listener("click", function MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_0_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const attachment_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openLightbox(attachment_r6));
    });
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5, "zoom_in");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_26_0;
    const attachment_r6 = \u0275\u0275nextContext().$implicit;
    const message_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("relative group mt-2 rounded-lg overflow-hidden border ", message_r4.sender_id === ctx_r2.currentUserId ? "border-primary-fixed-dim/30" : "border-outline-variant"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_26_0 = \u0275\u0275pipeBind1(2, 4, ctx_r2.imageUrl(attachment_r6))) ? 1 : -1, tmp_26_0);
  }
}
function MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const attachment_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.chatService.downloadAttachment(attachment_r6));
    });
    \u0275\u0275elementStart(1, "div")(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 41)(5, "p", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 43);
    \u0275\u0275listener("click", function MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_1_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const attachment_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.chatService.downloadAttachment(attachment_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "span", 7);
    \u0275\u0275text(11, "download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attachment_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("w-10 h-10 ", ctx_r2.docIconColor(attachment_r6.mime_type), " rounded flex items-center justify-center shrink-0"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.docIcon(attachment_r6.mime_type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(attachment_r6.file_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatSize(attachment_r6.file_size));
  }
}
function MessageThreadComponent_Conditional_18_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_0_Template, 6, 6, "div", 31)(1, MessageThreadComponent_Conditional_18_For_5_For_5_Conditional_1_Template, 12, 6, "div", 36);
  }
  if (rf & 2) {
    const attachment_r6 = ctx.$implicit;
    \u0275\u0275conditional(attachment_r6.type === "image" ? 0 : 1);
  }
}
function MessageThreadComponent_Conditional_18_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 44);
    \u0275\u0275element(2, "path", 45);
    \u0275\u0275elementEnd()();
  }
}
function MessageThreadComponent_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, MessageThreadComponent_Conditional_18_For_5_Conditional_1_Template, 1, 1, "app-chat-avatar", 33);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275conditionalCreate(3, MessageThreadComponent_Conditional_18_For_5_Conditional_3_Template, 2, 1, "p", 34);
    \u0275\u0275repeaterCreate(4, MessageThreadComponent_Conditional_18_For_5_For_5_Template, 2, 1, null, null, _forTrack0);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275conditionalCreate(9, MessageThreadComponent_Conditional_18_For_5_Conditional_9_Template, 3, 0, "span", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("w-full min-w-0 flex items-end gap-3 ", message_r4.sender_id === ctx_r2.currentUserId ? "justify-end" : ""));
    \u0275\u0275advance();
    \u0275\u0275conditional(message_r4.sender_id !== ctx_r2.currentUserId ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("min-w-0 max-w-[80%] px-3 py-2.5 font-body-md ", message_r4.sender_id === ctx_r2.currentUserId ? "bg-primary text-white rounded-2xl rounded-br-none shadow-sm" : "bg-surface-container-high text-on-surface rounded-2xl rounded-bl-none border border-outline-variant/30"));
    \u0275\u0275advance();
    \u0275\u0275conditional(message_r4.content ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(message_r4.attachments);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("mt-1 text-right ", message_r4.sender_id === ctx_r2.currentUserId ? "text-primary-fixed-dim" : "text-on-surface-variant", " text-[10px]"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(8, 13, message_r4.created_at, "HH:mm", "", "fr"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(message_r4.sender_id === ctx_r2.currentUserId && message_r4.read_at ? 9 : -1);
  }
}
function MessageThreadComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MessageThreadComponent_Conditional_18_Conditional_0_Template, 3, 1, "div", 29);
    \u0275\u0275elementStart(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3, "Aujourd'hui");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, MessageThreadComponent_Conditional_18_For_5_Template, 10, 18, "div", 31, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.chatService.canLoadOlder() ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.messages());
  }
}
function MessageThreadComponent_Conditional_19_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 48);
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r9.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function MessageThreadComponent_Conditional_19_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 52);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd()();
  }
}
function MessageThreadComponent_Conditional_19_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275conditionalCreate(1, MessageThreadComponent_Conditional_19_For_3_Conditional_1_Template, 1, 1, "img", 48)(2, MessageThreadComponent_Conditional_19_For_3_Conditional_2_Template, 3, 0, "div", 49);
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function MessageThreadComponent_Conditional_19_For_3_Template_button_click_3_listener() {
      const $index_r10 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFile($index_r10));
    });
    \u0275\u0275elementStart(4, "span", 51);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.previewUrl ? 1 : 2);
  }
}
function MessageThreadComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 46);
    \u0275\u0275repeaterCreate(2, MessageThreadComponent_Conditional_19_For_3_Template, 6, 1, "div", 47, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.selectedFiles());
  }
}
function MessageThreadComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.chatService.uploadProgress(), "%");
  }
}
function MessageThreadComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fileError());
  }
}
function MessageThreadComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function MessageThreadComponent_Conditional_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275element(1, "img", 55);
    \u0275\u0275elementStart(2, "button", 56)(3, "span", 57);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.lightboxUrl(), \u0275\u0275sanitizeUrl);
  }
}
var MAX_FILES = 5;
var MAX_SIZE = 10 * 1024 * 1024;
var IMAGE_MIME = /^image\/(jpeg|png|webp|gif)$/;
var MessageThreadComponent = class _MessageThreadComponent {
  conversation;
  currentUserId;
  backClicked = output();
  chatService = inject(ChatService);
  destroyRef = inject(DestroyRef);
  scrollContainerRef = viewChild(
    "scrollContainer",
    ...ngDevMode ? [{ debugName: "scrollContainerRef" }] : (
      /* istanbul ignore next */
      []
    )
  );
  messages = this.chatService.messages;
  draft = signal(
    "",
    ...ngDevMode ? [{ debugName: "draft" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedFiles = signal(
    [],
    ...ngDevMode ? [{ debugName: "selectedFiles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fileError = signal(
    null,
    ...ngDevMode ? [{ debugName: "fileError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  lightboxUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "lightboxUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  acceptAttr = "image/jpeg,image/png,image/webp,image/gif,.pdf,.doc,.docx,.xls,.xlsx";
  stickToBottom = signal(
    true,
    ...ngDevMode ? [{ debugName: "stickToBottom" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      const list = this.messages();
      if (list.length === 0)
        return;
      if (!this.stickToBottom())
        return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.scrollToBottom());
      });
    });
  }
  ngOnChanges(changes) {
    if (changes["conversation"] && !changes["conversation"].firstChange) {
      this.lightboxUrl.set(null);
      this.stickToBottom.set(true);
    }
  }
  displayName(user) {
    if (!user)
      return "Conversation";
    return `${user.first_name} ${user.last_name}`.trim();
  }
  imageUrl(attachment) {
    return this.chatService.attachmentUrl(attachment);
  }
  docIcon(mime) {
    if (mime.includes("spreadsheet") || mime.includes("excel") || mime.includes("sheet"))
      return "table_view";
    if (mime.includes("pdf"))
      return "picture_as_pdf";
    if (mime.includes("word") || mime.includes("document"))
      return "description";
    return "description";
  }
  docIconColor(mime) {
    if (mime.includes("spreadsheet") || mime.includes("excel") || mime.includes("sheet"))
      return "bg-green-100 text-green-700";
    if (mime.includes("pdf"))
      return "bg-red-100 text-red-700";
    return "bg-blue-100 text-blue-700";
  }
  formatSize(bytes) {
    if (bytes < 1024)
      return `${bytes} o`;
    if (bytes < 1024 * 1024)
      return `${Math.round(bytes / 1024)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }
  onScroll() {
    const container = this.scrollContainerRef()?.nativeElement;
    if (!container)
      return;
    this.stickToBottom.set(container.scrollHeight - container.scrollTop - container.clientHeight < 80);
  }
  onLoadOlder() {
    const container = this.scrollContainerRef()?.nativeElement;
    const previousHeight = container?.scrollHeight ?? 0;
    this.chatService.loadOlderMessages();
    setTimeout(() => {
      if (container)
        container.scrollTop = container.scrollHeight - previousHeight;
    }, 50);
  }
  scrollToBottom() {
    const container = this.scrollContainerRef()?.nativeElement;
    if (!container)
      return;
    container.scrollTop = container.scrollHeight;
  }
  onFilesPicked(event) {
    const input = event.target;
    const picked = Array.from(input.files ?? []);
    input.value = "";
    this.fileError.set(null);
    if (picked.length === 0)
      return;
    const current = this.selectedFiles();
    if (current.length + picked.length > MAX_FILES) {
      this.fileError.set(`Maximum ${MAX_FILES} pi\xE8ces jointes par message.`);
      return;
    }
    const oversized = picked.find((f) => f.size > MAX_SIZE);
    if (oversized) {
      this.fileError.set(`\xAB ${oversized.name} \xBB d\xE9passe la taille maximale de 10 Mo.`);
      return;
    }
    const items = picked.map((file) => ({
      file,
      previewUrl: IMAGE_MIME.test(file.type) ? URL.createObjectURL(file) : null
    }));
    this.selectedFiles.set([...current, ...items]);
  }
  removeFile(index) {
    const item = this.selectedFiles()[index];
    if (item?.previewUrl)
      URL.revokeObjectURL(item.previewUrl);
    this.selectedFiles.update((list) => list.filter((_, i) => i !== index));
  }
  canSend() {
    return this.draft().trim() !== "" || this.selectedFiles().length > 0;
  }
  onEnter(event) {
    const keyboardEvent = event;
    if (keyboardEvent.shiftKey)
      return;
    keyboardEvent.preventDefault();
    this.onSend();
  }
  onDraftInput(event) {
    const textarea = event.target;
    if (!textarea)
      return;
    this.draft.set(textarea.value);
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
  }
  onSend() {
    if (!this.canSend() || this.chatService.sending())
      return;
    const conversationId = this.conversation.id;
    this.chatService.sendMessage(conversationId, this.draft(), this.selectedFiles().map((s) => s.file)).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      // Ne pas effacer le brouillon du nouveau contact après un changement de fil.
      next: () => {
        if (this.conversation.id === conversationId)
          this.resetComposer();
      },
      error: (error) => this.fileError.set(this.sendErrorMessage(error))
    });
  }
  resetComposer() {
    this.selectedFiles().forEach((item) => item.previewUrl && URL.revokeObjectURL(item.previewUrl));
    this.selectedFiles.set([]);
    this.draft.set("");
    this.fileError.set(null);
  }
  sendErrorMessage(error) {
    const validationErrors = error.error?.errors;
    if (validationErrors && typeof validationErrors === "object") {
      const firstError = Object.values(validationErrors).flat()[0];
      if (typeof firstError === "string")
        return firstError;
    }
    if (error.status === 403)
      return "Vous n\u2019\xEAtes pas autoris\xE9 \xE0 envoyer un message dans cette conversation.";
    if (error.status === 413)
      return "Le fichier est trop volumineux.";
    if (error.status >= 500)
      return "Le serveur a rencontr\xE9 une erreur. R\xE9essayez dans un instant.";
    return "\xC9chec de l\u2019envoi. V\xE9rifiez votre connexion et r\xE9essayez.";
  }
  openLightbox(attachment) {
    this.chatService.attachmentUrl(attachment).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((url) => this.lightboxUrl.set(url));
  }
  closeLightbox() {
    this.lightboxUrl.set(null);
  }
  static \u0275fac = function MessageThreadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageThreadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageThreadComponent, selectors: [["app-message-thread"]], viewQuery: function MessageThreadComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.scrollContainerRef, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostAttrs: [1, "flex", "flex-1", "min-h-0", "min-w-0", "w-full"], inputs: { conversation: "conversation", currentUserId: "currentUserId" }, outputs: { backClicked: "backClicked" }, features: [\u0275\u0275NgOnChangesFeature], decls: 36, vars: 11, consts: [["scrollContainer", ""], ["fileInput", ""], ["contentInput", ""], [1, "flex", "flex-col", "h-full", "min-h-0", "w-full"], [1, "p-4", "border-b", "border-outline-variant", "flex", "justify-between", "items-center", "bg-surface-bright", "shrink-0", "rounded-t-xl"], [1, "flex", "items-center", "gap-4"], ["aria-label", "Retour \xE0 la liste", 1, "lg:hidden", "p-2", "text-on-surface-variant", "hover:bg-surface-container-low", "rounded-full", "transition-colors", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined"], [1, "relative"], ["size", "sm", "borderColor", "border-surface-bright", 3, "user", "showOnline"], [1, "font-label-md", "text-label-md", "font-bold", "text-on-surface"], [1, "text-label-sm", "text-on-surface-variant"], [1, "flex-1", "min-h-0", "overflow-y-auto", "overscroll-contain", "p-6", "bg-surface", 3, "scroll"], [1, "space-y-6"], [1, "flex", "justify-center", "py-10"], [1, "flex", "items-center", "justify-center", "py-10"], [1, "px-4", "py-2", "bg-surface", "border-t", "border-outline-variant", "shrink-0"], [1, "p-4", "border-t", "border-outline-variant", "bg-surface-bright", "shrink-0", "rounded-b-xl"], [1, "mb-2", "h-1.5", "bg-surface-container-high", "rounded-full", "overflow-hidden"], [1, "flex", "items-end", "gap-2"], ["type", "file", "multiple", "", 1, "hidden", 3, "change", "accept"], ["title", "Joindre un fichier (max 5, 10 Mo)", 1, "p-3", "text-on-surface-variant", "hover:bg-surface-container-low", "rounded-lg", "transition-colors", "border", "border-transparent", "hover:border-outline-variant", "cursor-pointer", "flex", "items-center", "justify-center", "shrink-0", 3, "click"], [1, "flex-1", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-xl", "overflow-hidden", "focus-within:border-primary", "focus-within:ring-1", "focus-within:ring-primary", "transition-shadow"], ["rows", "1", "placeholder", "Saisissez votre message\u2026", 1, "w-full", "p-3", "bg-transparent", "border-none", "focus:ring-0", "resize-none", "font-body-md", "text-on-surface", "placeholder:text-outline", "max-h-32", 2, "max-height", "120px", 3, "input", "keydown.enter", "value"], ["aria-label", "Envoyer le message", 1, "p-3", "bg-primary", "text-white", "rounded-xl", "hover:bg-primary-container", "transition-colors", "cursor-pointer", "disabled:opacity-40", "disabled:cursor-not-allowed", "shrink-0", "shadow-sm", 3, "click", "disabled"], ["role", "alert", 1, "mt-2", "text-label-sm", "text-[12px]", "text-error"], [1, "fixed", "inset-0", "z-50", "bg-black/70", "flex", "items-center", "justify-center", "p-6"], [1, "w-6", "h-6", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-body-md", "text-on-surface-variant"], [1, "flex", "justify-center"], [1, "text-label-sm", "text-on-surface-variant", "bg-surface-container", "px-3", "py-1", "rounded-full"], [3, "class"], [1, "px-4", "py-1.5", "rounded-full", "border", "border-outline-variant", "text-label-sm", "text-on-surface-variant", "hover:bg-surface-container-low", "transition-colors", "cursor-pointer", "disabled:opacity-50", 3, "click", "disabled"], ["size", "sm", 1, "mb-1", "shrink-0", 3, "user"], [1, "text-body-md", "whitespace-pre-wrap", "break-words"], [1, "inline-flex", "align-middle", "ml-1"], [1, "mt-2", "flex", "items-center", "gap-3", "w-full", "text-left", "p-3", "rounded-lg", "border", "border-outline-variant", "bg-surface-container-lowest", "hover:border-primary", "transition-colors", "cursor-pointer"], [1, "max-w-64", "max-h-64", "rounded-lg", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-black/40", "opacity-0", "group-hover:opacity-100", "transition-opacity", "flex", "items-center", "justify-center", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined", "text-white", "text-3xl"], [1, "mt-2", "flex", "items-center", "gap-3", "w-full", "text-left", "p-3", "rounded-lg", "border", "border-outline-variant", "bg-surface-container-lowest", "hover:border-primary", "transition-colors", "cursor-pointer", 3, "click"], [1, "flex-1", "min-w-0"], [1, "font-label-md", "text-sm", "font-semibold", "truncate", "text-on-surface"], ["type", "button", "title", "T\xE9l\xE9charger", 1, "p-2", "text-on-surface-variant", "hover:bg-surface-variant", "rounded-full", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-3", "h-3"], ["d", "M20 6 9 17l-5-5"], [1, "flex", "items-center", "gap-2", "overflow-x-auto", "pb-1"], [1, "relative", "shrink-0", "group"], ["alt", "", 1, "w-16", "h-16", "rounded-lg", "object-cover", "border", "border-outline-variant", 3, "src"], [1, "w-16", "h-16", "rounded-lg", "bg-surface-container-high", "border", "border-outline-variant", "flex", "items-center", "justify-center"], ["aria-label", "Retirer ce fichier", 1, "absolute", "-top-1.5", "-right-1.5", "w-5", "h-5", "bg-error", "text-white", "rounded-full", "flex", "items-center", "justify-center", "cursor-pointer", "shadow", "hover:bg-error-dark", 3, "click"], [1, "material-symbols-outlined", "text-[12px]"], [1, "material-symbols-outlined", "text-on-surface-variant"], [1, "h-full", "bg-primary", "rounded-full", "transition-all", "duration-200"], [1, "fixed", "inset-0", "z-50", "bg-black/70", "flex", "items-center", "justify-center", "p-6", 3, "click"], ["alt", "Image agrandie", 1, "max-w-full", "max-h-full", "rounded-lg", "object-contain", 3, "src"], ["aria-label", "Fermer", 1, "absolute", "top-4", "right-4", "p-2", "rounded-full", "bg-white/10", "text-white", "hover:bg-white/20", "transition-colors", "cursor-pointer"], [1, "material-symbols-outlined", "text-[24px]"]], template: function MessageThreadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "button", 6);
      \u0275\u0275listener("click", function MessageThreadComponent_Template_button_click_3_listener() {
        return ctx.backClicked.emit();
      });
      \u0275\u0275elementStart(4, "span", 7);
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 8);
      \u0275\u0275element(7, "app-chat-avatar", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div")(9, "h2", 10);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 11);
      \u0275\u0275text(12, "En ligne");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 12, 0);
      \u0275\u0275listener("scroll", function MessageThreadComponent_Template_div_scroll_13_listener() {
        return ctx.onScroll();
      });
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275conditionalCreate(16, MessageThreadComponent_Conditional_16_Template, 2, 0, "div", 14)(17, MessageThreadComponent_Conditional_17_Template, 3, 0, "div", 15)(18, MessageThreadComponent_Conditional_18_Template, 6, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(19, MessageThreadComponent_Conditional_19_Template, 4, 0, "div", 16);
      \u0275\u0275elementStart(20, "div", 17);
      \u0275\u0275conditionalCreate(21, MessageThreadComponent_Conditional_21_Template, 2, 2, "div", 18);
      \u0275\u0275elementStart(22, "div", 19)(23, "input", 20, 1);
      \u0275\u0275listener("change", function MessageThreadComponent_Template_input_change_23_listener($event) {
        return ctx.onFilesPicked($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 21);
      \u0275\u0275listener("click", function MessageThreadComponent_Template_button_click_25_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r11 = \u0275\u0275reference(24);
        return \u0275\u0275resetView(fileInput_r11.click());
      });
      \u0275\u0275elementStart(26, "span", 7);
      \u0275\u0275text(27, "attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 22)(29, "textarea", 23, 2);
      \u0275\u0275listener("input", function MessageThreadComponent_Template_textarea_input_29_listener($event) {
        return ctx.onDraftInput($event);
      })("keydown.enter", function MessageThreadComponent_Template_textarea_keydown_enter_29_listener($event) {
        return ctx.onEnter($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "button", 24);
      \u0275\u0275listener("click", function MessageThreadComponent_Template_button_click_31_listener() {
        return ctx.onSend();
      });
      \u0275\u0275elementStart(32, "span", 7);
      \u0275\u0275text(33, "send");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(34, MessageThreadComponent_Conditional_34_Template, 2, 1, "p", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(35, MessageThreadComponent_Conditional_35_Template, 5, 1, "div", 26);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("user", ctx.conversation.other_user)("showOnline", true);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.displayName(ctx.conversation.other_user));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.chatService.loadingMessages() && ctx.messages().length === 0 ? 16 : ctx.messages().length === 0 ? 17 : 18);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.selectedFiles().length > 0 ? 19 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.chatService.sending() && ctx.chatService.uploadProgress() > 0 && ctx.chatService.uploadProgress() < 100 ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("accept", ctx.acceptAttr);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.draft());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canSend());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.fileError() ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lightboxUrl() ? 35 : -1);
    }
  }, dependencies: [ChatAvatarComponent, DatePipe, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageThreadComponent, [{
    type: Component,
    args: [{
      selector: "app-message-thread",
      standalone: true,
      imports: [DatePipe, AsyncPipe, ChatAvatarComponent],
      host: {
        class: "flex flex-1 min-h-0 min-w-0 w-full"
      },
      template: `
    <div class="flex flex-col h-full min-h-0 w-full">
      <!-- En-t\xEAte du fil -->
      <div class="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright shrink-0 rounded-t-xl">
        <div class="flex items-center gap-4">
          <button (click)="backClicked.emit()" class="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer" aria-label="Retour \xE0 la liste">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
          <div class="relative">
            <app-chat-avatar [user]="conversation.other_user" size="sm" [showOnline]="true" borderColor="border-surface-bright" />
          </div>
          <div>
            <h2 class="font-label-md text-label-md font-bold text-on-surface">{{ displayName(conversation.other_user) }}</h2>
            <p class="text-label-sm text-on-surface-variant">En ligne</p>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div #scrollContainer (scroll)="onScroll()" class="flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 bg-surface">
        <div class="space-y-6">
          @if (chatService.loadingMessages() && messages().length === 0) {
            <div class="flex justify-center py-10">
              <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          } @else if (messages().length === 0) {
            <div class="flex items-center justify-center py-10">
              <p class="text-body-md text-on-surface-variant">Aucun message \u2014 commencez la discussion !</p>
            </div>
          } @else {
            @if (chatService.canLoadOlder()) {
              <div class="flex justify-center">
                <button (click)="onLoadOlder()" [disabled]="chatService.loadingMessages()"
                  class="px-4 py-1.5 rounded-full border border-outline-variant text-label-sm text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer disabled:opacity-50">
                  Charger les messages pr\xE9c\xE9dents
                </button>
              </div>
            }

            <!-- Divider date -->
            <div class="flex justify-center">
              <span class="text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Aujourd'hui</span>
            </div>

            @for (message of messages(); track message.id) {
              <div class="w-full min-w-0 flex items-end gap-3 {{ message.sender_id === currentUserId ? 'justify-end' : '' }}">
                @if (message.sender_id !== currentUserId) {
                  <app-chat-avatar [user]="message.sender" size="sm" class="mb-1 shrink-0" />
                }
                <div class="min-w-0 max-w-[80%] px-3 py-2.5 font-body-md {{ message.sender_id === currentUserId
                  ? 'bg-primary text-white rounded-2xl rounded-br-none shadow-sm'
                  : 'bg-surface-container-high text-on-surface rounded-2xl rounded-bl-none border border-outline-variant/30' }}">
                  @if (message.content) {
                    <p class="text-body-md whitespace-pre-wrap break-words">{{ message.content }}</p>
                  }
                  @for (attachment of message.attachments; track attachment.id) {
                    @if (attachment.type === 'image') {
                      <div class="relative group mt-2 rounded-lg overflow-hidden border {{ message.sender_id === currentUserId ? 'border-primary-fixed-dim/30' : 'border-outline-variant' }}">
                        @if (imageUrl(attachment) | async; as url) {
                          <img [src]="url" [alt]="attachment.file_name" class="max-w-64 max-h-64 rounded-lg object-cover" />
                        }
                        <div (click)="openLightbox(attachment)"
                          class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                          <span class="material-symbols-outlined text-white text-3xl">zoom_in</span>
                        </div>
                      </div>
                    } @else {
                      <div (click)="chatService.downloadAttachment(attachment)"
                        class="mt-2 flex items-center gap-3 w-full text-left p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-primary transition-colors cursor-pointer">
                        <div class="w-10 h-10 {{ docIconColor(attachment.mime_type) }} rounded flex items-center justify-center shrink-0">
                          <span class="material-symbols-outlined">{{ docIcon(attachment.mime_type) }}</span>
                        </div>
                        <div class="flex-1 min-w-0">
                          <p class="font-label-md text-sm font-semibold truncate text-on-surface">{{ attachment.file_name }}</p>
                          <p class="text-label-sm text-on-surface-variant">{{ formatSize(attachment.file_size) }}</p>
                        </div>
                        <button type="button" (click)="chatService.downloadAttachment(attachment); $event.stopPropagation()"
                          class="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors" title="T\xE9l\xE9charger">
                          <span class="material-symbols-outlined">download</span>
                        </button>
                      </div>
                    }
                  }
                  <p class="mt-1 text-right {{ message.sender_id === currentUserId ? 'text-primary-fixed-dim' : 'text-on-surface-variant' }} text-[10px]">
                    {{ message.created_at | date:'HH:mm':'':'fr' }}
                    @if (message.sender_id === currentUserId && message.read_at) {
                      <span class="inline-flex align-middle ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><path d="M20 6 9 17l-5-5"/></svg>
                      </span>
                    }
                  </p>
                </div>
              </div>
            }
          }
        </div>
      </div>

      <!-- Aper\xE7u des fichiers s\xE9lectionn\xE9s -->
      @if (selectedFiles().length > 0) {
        <div class="px-4 py-2 bg-surface border-t border-outline-variant shrink-0">
          <div class="flex items-center gap-2 overflow-x-auto pb-1">
            @for (item of selectedFiles(); track $index) {
              <div class="relative shrink-0 group">
                @if (item.previewUrl) {
                  <img [src]="item.previewUrl" alt="" class="w-16 h-16 rounded-lg object-cover border border-outline-variant" />
                } @else {
                  <div class="w-16 h-16 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center">
                    <span class="material-symbols-outlined text-on-surface-variant">description</span>
                  </div>
                }
                <button (click)="removeFile($index)" aria-label="Retirer ce fichier"
                  class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-error text-white rounded-full flex items-center justify-center cursor-pointer shadow hover:bg-error-dark">
                  <span class="material-symbols-outlined text-[12px]">close</span>
                </button>
              </div>
            }
          </div>
        </div>
      }

      <!-- Zone de saisie -->
      <div class="p-4 border-t border-outline-variant bg-surface-bright shrink-0 rounded-b-xl">
        @if (chatService.sending() && chatService.uploadProgress() > 0 && chatService.uploadProgress() < 100) {
          <div class="mb-2 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
            <div class="h-full bg-primary rounded-full transition-all duration-200" [style.width.%]="chatService.uploadProgress()"></div>
          </div>
        }
        <div class="flex items-end gap-2">
          <input #fileInput type="file" multiple [accept]="acceptAttr" class="hidden" (change)="onFilesPicked($event)" />
          <button (click)="fileInput.click()" title="Joindre un fichier (max 5, 10 Mo)"
            class="p-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors border border-transparent hover:border-outline-variant cursor-pointer flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined">attachment</span>
          </button>
          <div class="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-shadow">
            <textarea #contentInput rows="1" [value]="draft()" (input)="onDraftInput($event)"
              (keydown.enter)="onEnter($event)" placeholder="Saisissez votre message\u2026"
              class="w-full p-3 bg-transparent border-none focus:ring-0 resize-none font-body-md text-on-surface placeholder:text-outline max-h-32"
              style="max-height: 120px"></textarea>
          </div>
          <button (click)="onSend()" [disabled]="!canSend()"
            class="p-3 bg-primary text-white rounded-xl hover:bg-primary-container transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0 shadow-sm" aria-label="Envoyer le message">
            <span class="material-symbols-outlined">send</span>
          </button>
        </div>
        @if (fileError()) {
          <p class="mt-2 text-label-sm text-[12px] text-error" role="alert">{{ fileError() }}</p>
        }
      </div>
    </div>

    <!-- Lightbox image -->
    @if (lightboxUrl()) {
      <div class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6" (click)="closeLightbox()">
        <img [src]="lightboxUrl()" alt="Image agrandie" class="max-w-full max-h-full rounded-lg object-contain" />
        <button class="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer" aria-label="Fermer">
          <span class="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>
    }
  `
    }]
  }], () => [], { conversation: [{
    type: Input,
    args: [{ required: true }]
  }], currentUserId: [{
    type: Input,
    args: [{ required: true }]
  }], backClicked: [{ type: Output, args: ["backClicked"] }], scrollContainerRef: [{ type: ViewChild, args: ["scrollContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageThreadComponent, { className: "MessageThreadComponent", filePath: "src/app/features/chat/message-thread.component.ts", lineNumber: 199 });
})();

// src/app/features/chat/chat-layout.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ChatLayoutComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function ChatLayoutComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 17);
    \u0275\u0275text(2, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4, "Aucune conversation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6, "Cliquez sur \xAB Nouvelle conversation \xBB pour d\xE9marrer.");
    \u0275\u0275elementEnd()();
  }
}
function ChatLayoutComponent_Conditional_16_For_1_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.previewOf(conversation_r2)?.content);
  }
}
function ChatLayoutComponent_Conditional_16_For_1_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "attachment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3, "Pi\xE8ce jointe");
    \u0275\u0275elementEnd();
  }
}
function ChatLayoutComponent_Conditional_16_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ChatLayoutComponent_Conditional_16_For_1_Conditional_9_Conditional_0_Template, 2, 1, "span", 28)(1, ChatLayoutComponent_Conditional_16_For_1_Conditional_9_Conditional_1_Template, 4, 0);
  }
  if (rf & 2) {
    const conversation_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.previewOf(conversation_r2)?.content ? 0 : 1);
  }
}
function ChatLayoutComponent_Conditional_16_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", conversation_r2.unread_count > 9 ? "9+" : conversation_r2.unread_count, " ");
  }
}
function ChatLayoutComponent_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ChatLayoutComponent_Conditional_16_For_1_Template_button_click_0_listener() {
      const conversation_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectConversation(conversation_r2));
    });
    \u0275\u0275element(1, "app-chat-avatar", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "div", 24)(4, "h3", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275conditionalCreate(9, ChatLayoutComponent_Conditional_16_For_1_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ChatLayoutComponent_Conditional_16_For_1_Conditional_10_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("w-full flex items-center gap-4 p-4 text-left cursor-pointer border-b border-outline-variant transition-colors\n                  ", ctx_r2.selected()?.id === conversation_r2.id ? "bg-surface-container border-l-4 border-l-primary" : "hover:bg-surface-container-low border-l-4 border-l-transparent"));
    \u0275\u0275advance();
    \u0275\u0275property("user", conversation_r2.other_user)("showOnline", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.contactName(conversation_r2));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("text-label-sm ", conversation_r2.unread_count > 0 ? "text-primary font-bold" : "text-on-surface-variant", " shrink-0 ml-2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.timeLabel(conversation_r2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.previewOf(conversation_r2) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(conversation_r2.unread_count > 0 ? 10 : -1);
  }
}
function ChatLayoutComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ChatLayoutComponent_Conditional_16_For_1_Template, 11, 12, "button", 20, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.conversations());
  }
}
function ChatLayoutComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-message-thread", 31);
    \u0275\u0275listener("backClicked", function ChatLayoutComponent_Conditional_18_Template_app_message_thread_backClicked_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeThread());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("conversation", ctx)("currentUserId", ctx_r2.currentUserId());
  }
}
function ChatLayoutComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 32);
    \u0275\u0275text(2, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "S\xE9lectionnez une conversation pour afficher les messages");
    \u0275\u0275elementEnd()();
  }
}
function ChatLayoutComponent_Conditional_20_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function ChatLayoutComponent_Conditional_20_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, "Aucun collaborateur trouv\xE9");
    \u0275\u0275elementEnd();
  }
}
function ChatLayoutComponent_Conditional_20_Conditional_17_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2014 ", user_r7.job_title, " ");
  }
}
function ChatLayoutComponent_Conditional_20_Conditional_17_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ChatLayoutComponent_Conditional_20_Conditional_17_For_1_Template_button_click_0_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startWith(user_r7));
    });
    \u0275\u0275element(1, "app-chat-avatar", 46);
    \u0275\u0275elementStart(2, "span", 47)(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 49);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, ChatLayoutComponent_Conditional_20_Conditional_17_For_1_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 50);
    \u0275\u0275text(9, "chat");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r7.first_name, " ", user_r7.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.roleLabel(user_r7.role), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r7.job_title ? 7 : -1);
  }
}
function ChatLayoutComponent_Conditional_20_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ChatLayoutComponent_Conditional_20_Conditional_17_For_1_Template, 10, 5, "button", 44, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.directoryResults());
  }
}
function ChatLayoutComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function ChatLayoutComponent_Conditional_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewConversation());
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275listener("click", function ChatLayoutComponent_Conditional_20_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "h2", 37);
    \u0275\u0275text(4, "Nouvelle conversation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function ChatLayoutComponent_Conditional_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeNewConversation());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 39)(9, "div", 7)(10, "span", 8);
    \u0275\u0275text(11, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 40, 0);
    \u0275\u0275listener("input", function ChatLayoutComponent_Conditional_20_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDirectoryInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 41);
    \u0275\u0275conditionalCreate(15, ChatLayoutComponent_Conditional_20_Conditional_15_Template, 2, 0, "div", 42)(16, ChatLayoutComponent_Conditional_20_Conditional_16_Template, 2, 0, "p", 43)(17, ChatLayoutComponent_Conditional_20_Conditional_17_Template, 2, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("value", ctx_r2.directoryQuery());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.directoryLoading() ? 15 : ctx_r2.directoryResults().length === 0 ? 16 : 17);
  }
}
var ChatLayoutComponent = class _ChatLayoutComponent {
  chatService = inject(ChatService);
  authService = inject(AuthService);
  destroyRef = inject(DestroyRef);
  conversations = this.chatService.conversations;
  selected = signal(
    null,
    ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newConversationOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "newConversationOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  directoryQuery = signal(
    "",
    ...ngDevMode ? [{ debugName: "directoryQuery" }] : (
      /* istanbul ignore next */
      []
    )
  );
  directoryResults = signal(
    [],
    ...ngDevMode ? [{ debugName: "directoryResults" }] : (
      /* istanbul ignore next */
      []
    )
  );
  directoryLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "directoryLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dirSearchTimer = null;
  currentUserId() {
    return this.authService.currentUser()?.id ?? 0;
  }
  ngOnInit() {
    this.chatService.startChatPolling(2e4);
  }
  ngOnDestroy() {
    this.chatService.stopChatPolling();
    this.chatService.closeConversation();
    if (this.dirSearchTimer !== null)
      clearTimeout(this.dirSearchTimer);
  }
  contactName(conversation) {
    const other = conversation.other_user;
    if (!other)
      return "Conversation";
    return `${other.first_name} ${other.last_name}`.trim();
  }
  previewOf(conversation) {
    return conversation.last_message;
  }
  timeLabel(conversation) {
    const date = conversation.last_message_at;
    if (!date)
      return "";
    const d = new Date(date);
    const now = /* @__PURE__ */ new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) {
      return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    }
    return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
  }
  selectConversation(conversation) {
    this.selected.set(conversation);
    this.chatService.openConversation(conversation.id);
  }
  closeThread() {
    this.selected.set(null);
    this.chatService.closeConversation();
  }
  openNewConversation() {
    this.newConversationOpen.set(true);
    this.directoryQuery.set("");
    this.directoryResults.set([]);
    this.searchDirectory("");
  }
  closeNewConversation() {
    this.newConversationOpen.set(false);
  }
  onDirectoryInput(event) {
    const term = event.target.value;
    this.directoryQuery.set(term);
    if (this.dirSearchTimer !== null)
      clearTimeout(this.dirSearchTimer);
    this.dirSearchTimer = setTimeout(() => this.searchDirectory(term), 300);
  }
  searchDirectory(term) {
    this.directoryLoading.set(true);
    this.chatService.searchDirectory(term).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (users) => {
        this.directoryResults.set(users);
        this.directoryLoading.set(false);
      },
      error: () => this.directoryLoading.set(false)
    });
  }
  roleLabel(role) {
    switch (role) {
      case "HR_ADMIN":
        return "Admin RH";
      case "MANAGER":
        return "Manager";
      case "EMPLOYE":
        return "Employ\xE9";
      default:
        return "";
    }
  }
  startWith(user) {
    this.chatService.startConversation(user.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (conversation) => {
        this.chatService.fetchChatOverview();
        this.closeNewConversation();
        this.selectConversation(conversation);
      }
    });
  }
  static \u0275fac = function ChatLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatLayoutComponent, selectors: [["app-chat-layout"]], hostAttrs: [1, "flex", "flex-1", "min-h-0", "min-w-0"], decls: 21, vars: 9, consts: [["searchInput", ""], [1, "flex-1", "min-h-0", "flex", "bg-surface-container-lowest", "border", "border-outline-variant", "rounded-xl", "shadow-sm", "overflow-hidden", "mx-6", "my-4"], [1, "p-4", "border-b", "border-outline-variant", "flex", "justify-between", "items-center", "bg-surface-bright", "shrink-0"], [1, "font-headline-md", "text-headline-md", "font-semibold", "text-on-surface"], ["title", "Nouvelle conversation", 1, "text-primary", "hover:bg-surface-variant", "p-2", "rounded-lg", "transition-colors", "cursor-pointer", 3, "click"], [1, "material-symbols-outlined"], [1, "p-4", "border-b", "border-outline-variant", "shrink-0"], [1, "relative"], [1, "material-symbols-outlined", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-outline"], ["type", "text", "placeholder", "Rechercher une conversation...", 1, "w-full", "pl-10", "pr-4", "py-2", "bg-surface-container", "border", "border-outline-variant", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-primary", "text-on-surface", "font-body-md", "transition-shadow"], [1, "flex-1", "min-h-0", "overflow-y-auto", "overscroll-contain"], [1, "flex", "justify-center", "py-10"], [1, "p-8", "text-center"], [1, "flex", "flex-1", "min-h-0", "w-full", 3, "conversation", "currentUserId"], [1, "flex-1", "flex", "items-center", "justify-center", "flex-col", "gap-3", "text-on-surface-variant"], [1, "fixed", "inset-0", "z-50", "bg-black/40", "flex", "items-center", "justify-center", "p-4"], [1, "w-6", "h-6", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "material-symbols-outlined", "text-[40px]", "text-on-surface-variant", "mx-auto", "mb-3", "block"], [1, "text-body-md", "text-on-surface-variant", "mb-1"], [1, "text-label-sm", "text-on-surface-variant"], [3, "class"], [3, "click"], ["size", "md", "borderColor", "border-surface-container", 3, "user", "showOnline"], [1, "flex-1", "min-w-0"], [1, "flex", "justify-between", "items-baseline", "mb-1"], [1, "font-label-md", "text-label-md", "font-bold", "text-on-surface", "truncate"], [1, "flex", "items-center", "gap-1"], [1, "w-5", "h-5", "bg-primary", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", "shrink-0"], [1, "text-body-md", "text-on-surface-variant", "truncate", "flex-1"], [1, "material-symbols-outlined", "text-[16px]", "text-on-surface-variant"], [1, "text-body-md", "text-on-surface-variant", "truncate", "font-medium"], [1, "flex", "flex-1", "min-h-0", "w-full", 3, "backClicked", "conversation", "currentUserId"], [1, "material-symbols-outlined", "text-[48px]"], [1, "text-body-md", "text-on-surface-variant"], [1, "fixed", "inset-0", "z-50", "bg-black/40", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "w-full", "max-w-md", "bg-surface", "rounded-2xl", "shadow-xl", "overflow-hidden", 3, "click"], [1, "px-5", "py-4", "border-b", "border-outline-variant", "flex", "items-center", "justify-between"], [1, "font-headline-md", "text-headline-md", "font-bold", "text-on-surface"], ["aria-label", "Fermer", 1, "p-1.5", "rounded-lg", "text-on-surface-variant", "hover:bg-surface-container-low", "transition-colors", "cursor-pointer", 3, "click"], [1, "p-4"], ["type", "text", "placeholder", "Rechercher un collaborateur\u2026", 1, "w-full", "pl-10", "pr-4", "py-2.5", "bg-surface-container", "border", "border-outline-variant", "rounded-xl", "focus:ring-2", "focus:ring-primary", "focus:border-primary", "text-on-surface", "font-body-md", "transition-shadow", 3, "input", "value"], [1, "mt-3", "max-h-72", "overflow-y-auto"], [1, "flex", "justify-center", "py-8"], [1, "py-8", "text-center", "text-body-md", "text-on-surface-variant"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "hover:bg-surface-container-low", "transition-colors", "cursor-pointer", "text-left"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "hover:bg-surface-container-low", "transition-colors", "cursor-pointer", "text-left", 3, "click"], ["size", "sm", 3, "user"], [1, "min-w-0", "flex-1"], [1, "block", "font-label-md", "text-label-md", "text-on-surface", "truncate"], [1, "block", "text-label-sm", "text-[11px]", "text-on-surface-variant", "truncate"], [1, "material-symbols-outlined", "text-on-surface-variant", "shrink-0"]], template: function ChatLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "aside")(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function ChatLayoutComponent_Template_button_click_5_listener() {
        return ctx.openNewConversation();
      });
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "add_comment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "span", 8);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275conditionalCreate(14, ChatLayoutComponent_Conditional_14_Template, 2, 0, "div", 11)(15, ChatLayoutComponent_Conditional_15_Template, 7, 0, "div", 12)(16, ChatLayoutComponent_Conditional_16_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "main");
      \u0275\u0275conditionalCreate(18, ChatLayoutComponent_Conditional_18_Template, 1, 2, "app-message-thread", 13)(19, ChatLayoutComponent_Conditional_19_Template, 5, 0, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(20, ChatLayoutComponent_Conditional_20_Template, 18, 2, "div", 15);
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("w-full lg:w-1/3 lg:min-w-[320px] lg:max-w-[400px] flex flex-col border-r border-outline-variant ", ctx.selected() ? "hidden lg:flex" : "flex"));
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.chatService.loadingConversations() && ctx.conversations().length === 0 ? 14 : ctx.conversations().length === 0 ? 15 : 16);
      \u0275\u0275advance(3);
      \u0275\u0275classMap(\u0275\u0275interpolate1("flex-1 min-w-0 flex-col min-h-0 ", ctx.selected() ? "flex" : "hidden lg:flex"));
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.selected()) ? 18 : 19, tmp_3_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.newConversationOpen() ? 20 : -1);
    }
  }, dependencies: [ChatAvatarComponent, MessageThreadComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatLayoutComponent, [{
    type: Component,
    args: [{
      selector: "app-chat-layout",
      standalone: true,
      imports: [ChatAvatarComponent, MessageThreadComponent],
      host: {
        class: "flex flex-1 min-h-0 min-w-0"
      },
      template: `
    <div class="flex-1 min-h-0 flex bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden mx-6 my-4">
      <!-- Colonne gauche : conversations -->
      <aside class="w-full lg:w-1/3 lg:min-w-[320px] lg:max-w-[400px] flex flex-col border-r border-outline-variant {{ selected() ? 'hidden lg:flex' : 'flex' }}">
        <!-- Header -->
        <div class="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright shrink-0">
          <h2 class="font-headline-md text-headline-md font-semibold text-on-surface">Messages</h2>
          <button (click)="openNewConversation()"
            class="text-primary hover:bg-surface-variant p-2 rounded-lg transition-colors cursor-pointer" title="Nouvelle conversation">
            <span class="material-symbols-outlined">add_comment</span>
          </button>
        </div>

        <!-- Recherche -->
        <div class="p-4 border-b border-outline-variant shrink-0">
          <div class="relative">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input type="text" placeholder="Rechercher une conversation..."
              class="w-full pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-on-surface font-body-md transition-shadow" />
          </div>
        </div>

        <!-- Liste des conversations -->
        <div class="flex-1 min-h-0 overflow-y-auto overscroll-contain">
          @if (chatService.loadingConversations() && conversations().length === 0) {
            <div class="flex justify-center py-10">
              <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          } @else if (conversations().length === 0) {
            <div class="p-8 text-center">
              <span class="material-symbols-outlined text-[40px] text-on-surface-variant mx-auto mb-3 block">chat</span>
              <p class="text-body-md text-on-surface-variant mb-1">Aucune conversation</p>
              <p class="text-label-sm text-on-surface-variant">Cliquez sur \xAB Nouvelle conversation \xBB pour d\xE9marrer.</p>
            </div>
          } @else {
            @for (conversation of conversations(); track conversation.id) {
              <button (click)="selectConversation(conversation)"
                class="w-full flex items-center gap-4 p-4 text-left cursor-pointer border-b border-outline-variant transition-colors
                  {{ selected()?.id === conversation.id
                    ? 'bg-surface-container border-l-4 border-l-primary'
                    : 'hover:bg-surface-container-low border-l-4 border-l-transparent' }}">
                <app-chat-avatar [user]="conversation.other_user" size="md" [showOnline]="true" borderColor="border-surface-container" />
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-baseline mb-1">
                    <h3 class="font-label-md text-label-md font-bold text-on-surface truncate">{{ contactName(conversation) }}</h3>
                    <span class="text-label-sm {{ conversation.unread_count > 0 ? 'text-primary font-bold' : 'text-on-surface-variant' }} shrink-0 ml-2">{{ timeLabel(conversation) }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    @if (previewOf(conversation)) {
                      @if (previewOf(conversation)?.content) {
                        <span class="text-body-md text-on-surface-variant truncate flex-1">{{ previewOf(conversation)?.content }}</span>
                      } @else {
                        <span class="material-symbols-outlined text-[16px] text-on-surface-variant">attachment</span>
                        <span class="text-body-md text-on-surface-variant truncate font-medium">Pi\xE8ce jointe</span>
                      }
                    }
                  </div>
                </div>
                @if (conversation.unread_count > 0) {
                  <div class="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {{ conversation.unread_count > 9 ? '9+' : conversation.unread_count }}
                  </div>
                }
              </button>
            }
          }
        </div>
      </aside>

      <!-- Colonne droite : fil de messages -->
      <main class="flex-1 min-w-0 flex-col min-h-0 {{ selected() ? 'flex' : 'hidden lg:flex' }}">
        @if (selected(); as conversation) {
          <app-message-thread class="flex flex-1 min-h-0 w-full" [conversation]="conversation" [currentUserId]="currentUserId()" (backClicked)="closeThread()" />
        } @else {
          <div class="flex-1 flex items-center justify-center flex-col gap-3 text-on-surface-variant">
            <span class="material-symbols-outlined text-[48px]">chat</span>
            <p class="text-body-md text-on-surface-variant">S\xE9lectionnez une conversation pour afficher les messages</p>
          </div>
        }
      </main>
    </div>

    <!-- Modal nouvelle conversation -->
    @if (newConversationOpen()) {
      <div class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" (click)="closeNewConversation()">
        <div class="w-full max-w-md bg-surface rounded-2xl shadow-xl overflow-hidden" (click)="$event.stopPropagation()">
          <div class="px-5 py-4 border-b border-outline-variant flex items-center justify-between">
            <h2 class="font-headline-md text-headline-md font-bold text-on-surface">Nouvelle conversation</h2>
            <button (click)="closeNewConversation()" class="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer" aria-label="Fermer">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div class="p-4">
            <div class="relative">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input #searchInput type="text" [value]="directoryQuery()" (input)="onDirectoryInput($event)"
                placeholder="Rechercher un collaborateur\u2026"
                class="w-full pl-10 pr-4 py-2.5 bg-surface-container border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-on-surface font-body-md transition-shadow" />
            </div>
            <div class="mt-3 max-h-72 overflow-y-auto">
              @if (directoryLoading()) {
                <div class="flex justify-center py-8">
                  <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              } @else if (directoryResults().length === 0) {
                <p class="py-8 text-center text-body-md text-on-surface-variant">Aucun collaborateur trouv\xE9</p>
              } @else {
                @for (user of directoryResults(); track user.id) {
                  <button (click)="startWith(user)"
                    class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer text-left">
                    <app-chat-avatar [user]="user" size="sm" />
                    <span class="min-w-0 flex-1">
                      <span class="block font-label-md text-label-md text-on-surface truncate">{{ user.first_name }} {{ user.last_name }}</span>
                      <span class="block text-label-sm text-[11px] text-on-surface-variant truncate">
                        {{ roleLabel(user.role) }}
                        @if (user.job_title) { \u2014 {{ user.job_title }} }
                      </span>
                    </span>
                    <span class="material-symbols-outlined text-on-surface-variant shrink-0">chat</span>
                  </button>
                }
              }
            </div>
          </div>
        </div>
      </div>
    }
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatLayoutComponent, { className: "ChatLayoutComponent", filePath: "src/app/features/chat/chat-layout.component.ts", lineNumber: 145 });
})();
export {
  ChatLayoutComponent
};
//# sourceMappingURL=chunk-65OBAWSE.js.map
