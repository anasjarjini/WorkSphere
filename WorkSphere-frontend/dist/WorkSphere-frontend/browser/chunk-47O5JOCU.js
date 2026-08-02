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
  NgModel
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
import {
  DatePipe
} from "./chunk-2SDYSSIJ.js";
import "./chunk-7XL7WG5D.js";
import "./chunk-N72M47JO.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  computed,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZST2RCVM.js";

// src/app/features/shared/tasks/task-detail/task-detail.component.ts
var _c0 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.id;
function TaskDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-avatar", 60);
    \u0275\u0275elementStart(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("imageUrl", ctx_r2.resolveAvatarUrl(t_r2.assigned_user.avatar_url))("name", t_r2.assigned_user.first_name + " " + t_r2.assigned_user.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r2.assigned_user.first_name, " ", t_r2.assigned_user.last_name);
  }
}
function TaskDetailComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Non assign\xE9");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.priority === "HIGH" || t_r2.priority === "CRITICAL" ? "priority_high" : t_r2.priority === "LOW" ? "arrow_downward" : "remove");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getPriorityLabel(t_r2.priority), " ");
  }
}
function TaskDetailComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, t_r2.due_date, "d MMM yyyy"));
  }
}
function TaskDetailComponent_Conditional_1_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_1_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_1_Conditional_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus("IN_PROGRESS"));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9marrer le travail ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.saving());
  }
}
function TaskDetailComponent_Conditional_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_1_Conditional_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus("REVIEW"));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "rate_review");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Soumettre pour validation ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.saving());
  }
}
function TaskDetailComponent_Conditional_1_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_1_Conditional_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus("DONE"));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Valider ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 65);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_1_Conditional_46_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus("IN_PROGRESS"));
    });
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Renvoyer pour reprise ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
  }
}
function TaskDetailComponent_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 66)(2, "span", 33);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 34);
    \u0275\u0275text(5, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r2.description);
  }
}
function TaskDetailComponent_Conditional_1_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.comments().length, " message", ctx_r2.comments().length > 1 ? "s" : "");
  }
}
function TaskDetailComponent_Conditional_1_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "Aucun commentaire pour l'instant. Lancez la discussion !");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_1_For_70_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "input", 78);
    \u0275\u0275listener("ngModelChange", function TaskDetailComponent_Conditional_1_For_70_Conditional_16_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const comment_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setReplyContent(comment_r8.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "button", 79);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_1_For_70_Conditional_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const comment_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addReply(comment_r8.id));
    });
    \u0275\u0275text(3, "R\xE9pondre");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.getReplyContent(comment_r8.id));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.getReplyContent(comment_r8.id).trim());
  }
}
function TaskDetailComponent_Conditional_1_For_70_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "app-avatar", 80);
    \u0275\u0275elementStart(2, "div", 69)(3, "div", 81)(4, "div", 71)(5, "span", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 83);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 84);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const reply_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r2.resolveAvatarUrl(reply_r10.user?.avatar_url))("name", (reply_r10.user?.first_name || "") + " " + (reply_r10.user?.last_name || ""));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", reply_r10.user?.first_name, " ", reply_r10.user?.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reply_r10.created_at ? ctx_r2.relativeTime(reply_r10.created_at) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reply_r10.content);
  }
}
function TaskDetailComponent_Conditional_1_For_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "app-avatar", 68);
    \u0275\u0275elementStart(2, "div", 69)(3, "div", 70)(4, "div", 71)(5, "span", 72);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 74)(12, "button", 75);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_1_For_70_Template_button_click_12_listener() {
      const comment_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleReply(comment_r8.id));
    });
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14, "reply");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " R\xE9pondre ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, TaskDetailComponent_Conditional_1_For_70_Conditional_16_Template, 4, 2, "div", 76);
    \u0275\u0275repeaterCreate(17, TaskDetailComponent_Conditional_1_For_70_For_18_Template, 11, 6, "div", 77, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r2.resolveAvatarUrl(comment_r8.user?.avatar_url))("name", (comment_r8.user?.first_name || "") + " " + (comment_r8.user?.last_name || ""));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", comment_r8.user?.first_name, " ", comment_r8.user?.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r8.created_at ? ctx_r2.relativeTime(comment_r8.created_at) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r8.content);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.isReplyVisible(comment_r8.id) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.getReplies(comment_r8.id));
  }
}
function TaskDetailComponent_Conditional_1_Conditional_87_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "span", 10);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 69)(5, "a", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 88)(10, "span", 10);
    \u0275\u0275text(11, "download");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const att_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r2.getAttachmentUrl(att_r12), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(att_r12.file_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatFileSize(att_r12.file_size));
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r2.getAttachmentUrl(att_r12), \u0275\u0275sanitizeUrl);
  }
}
function TaskDetailComponent_Conditional_1_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275repeaterCreate(1, TaskDetailComponent_Conditional_1_Conditional_87_For_2_Template, 12, 4, "div", 85, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.attachments());
  }
}
function TaskDetailComponent_Conditional_1_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1, "Aucune pi\xE8ce jointe");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_1_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58)(1, "span", 89)(2, "span", 90);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4, " Aucune activit\xE9 enregistr\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_1_For_101_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function TaskDetailComponent_Conditional_1_For_101_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailComponent_Conditional_1_For_101_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 93)(1, "span", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4, " a chang\xE9 le statut en ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", entry_r13.user?.first_name, " ", entry_r13.user?.last_name);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getStatusClass(entry_r13.new_status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatStatus(entry_r13.new_status));
  }
}
function TaskDetailComponent_Conditional_1_For_101_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 93)(1, "span", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4, " a assign\xE9 \xE0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", entry_r13.user?.first_name, " ", entry_r13.user?.last_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", entry_r13.new_user?.first_name, " ", entry_r13.new_user?.last_name);
  }
}
function TaskDetailComponent_Conditional_1_For_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 91);
    \u0275\u0275conditionalCreate(2, TaskDetailComponent_Conditional_1_For_101_Conditional_2_Template, 1, 0, "span", 92)(3, TaskDetailComponent_Conditional_1_For_101_Conditional_3_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275conditionalCreate(5, TaskDetailComponent_Conditional_1_For_101_Conditional_5_Template, 7, 5, "p", 93)(6, TaskDetailComponent_Conditional_1_For_101_Conditional_6_Template, 7, 4, "p", 93);
    \u0275\u0275elementStart(7, "span", 94);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-primary", entry_r13.type === "status_change")("border-border", entry_r13.type !== "status_change");
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r13.type === "status_change" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(entry_r13.type === "status_change" ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.relativeTime(entry_r13.created_at));
  }
}
function TaskDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "a", 9)(5, "span", 10);
    \u0275\u0275text(6, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h1", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 15)(16, "div", 16)(17, "div")(18, "span", 17);
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "span", 19)(22, "span", 20);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div")(26, "span", 17);
    \u0275\u0275text(27, "Assign\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 21);
    \u0275\u0275conditionalCreate(29, TaskDetailComponent_Conditional_1_Conditional_29_Template, 3, 4)(30, TaskDetailComponent_Conditional_1_Conditional_30_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "span", 17);
    \u0275\u0275text(33, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 18);
    \u0275\u0275conditionalCreate(35, TaskDetailComponent_Conditional_1_Conditional_35_Template, 4, 2, "span", 23)(36, TaskDetailComponent_Conditional_1_Conditional_36_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "span", 17);
    \u0275\u0275text(39, "\xC9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 25);
    \u0275\u0275conditionalCreate(41, TaskDetailComponent_Conditional_1_Conditional_41_Template, 5, 4)(42, TaskDetailComponent_Conditional_1_Conditional_42_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 26);
    \u0275\u0275conditionalCreate(44, TaskDetailComponent_Conditional_1_Conditional_44_Template, 4, 1, "button", 27);
    \u0275\u0275conditionalCreate(45, TaskDetailComponent_Conditional_1_Conditional_45_Template, 4, 1, "button", 27);
    \u0275\u0275conditionalCreate(46, TaskDetailComponent_Conditional_1_Conditional_46_Template, 8, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, TaskDetailComponent_Conditional_1_Conditional_47_Template, 8, 1, "div", 28);
    \u0275\u0275elementStart(48, "div", 29)(49, "div", 30)(50, "div", 31)(51, "div", 32)(52, "span", 33);
    \u0275\u0275text(53, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "h3", 34);
    \u0275\u0275text(55, "Discussion");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(56, TaskDetailComponent_Conditional_1_Conditional_56_Template, 2, 2, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 36)(58, "div", 37);
    \u0275\u0275element(59, "app-avatar", 38);
    \u0275\u0275elementStart(60, "div", 39)(61, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function TaskDetailComponent_Conditional_1_Template_textarea_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newCommentContent, $event) || (ctx_r2.newCommentContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(62, "div", 41)(63, "button", 42);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_1_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addComment());
    });
    \u0275\u0275elementStart(64, "span", 10);
    \u0275\u0275text(65, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, " Poster ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 43);
    \u0275\u0275conditionalCreate(68, TaskDetailComponent_Conditional_1_Conditional_68_Template, 2, 0, "p", 44);
    \u0275\u0275repeaterCreate(69, TaskDetailComponent_Conditional_1_For_70_Template, 19, 7, "div", 37, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 28)(72, "div", 45)(73, "span", 33);
    \u0275\u0275text(74, "attachment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "h3", 34);
    \u0275\u0275text(76, "Pi\xE8ces jointes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 46);
    \u0275\u0275listener("click", function TaskDetailComponent_Conditional_1_Template_div_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r11 = \u0275\u0275reference(85);
      return \u0275\u0275resetView(fileInput_r11.click());
    });
    \u0275\u0275elementStart(78, "span", 47);
    \u0275\u0275text(79, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 48);
    \u0275\u0275text(81, "Cliquez pour ajouter des fichiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p", 49);
    \u0275\u0275text(83, "PNG, JPG, PDF jusqu'\xE0 20 Mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "input", 50, 0);
    \u0275\u0275listener("change", function TaskDetailComponent_Conditional_1_Template_input_change_84_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileInputChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "app-file-uploader", 51);
    \u0275\u0275listener("fileSelected", function TaskDetailComponent_Conditional_1_Template_app_file_uploader_fileSelected_86_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttachmentSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(87, TaskDetailComponent_Conditional_1_Conditional_87_Template, 3, 0, "div", 52)(88, TaskDetailComponent_Conditional_1_Conditional_88_Template, 2, 0, "p", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 54)(90, "div", 28)(91, "div", 45)(92, "span", 33);
    \u0275\u0275text(93, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "h3", 34);
    \u0275\u0275text(95, "Activit\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 55);
    \u0275\u0275element(97, "div", 56);
    \u0275\u0275elementStart(98, "div", 57);
    \u0275\u0275conditionalCreate(99, TaskDetailComponent_Conditional_1_Conditional_99_Template, 5, 0, "p", 58);
    \u0275\u0275repeaterCreate(100, TaskDetailComponent_Conditional_1_For_101_Template, 9, 7, "div", 59, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const t_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c0, "/" + (ctx_r2.user()?.role === "HR_ADMIN" ? "admin" : "manager") + "/projects/" + t_r2.project_id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2.project?.name || "Projet");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2.reference_code || "TSK-000");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.title);
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r2.getStatusClass(t_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStatusIcon(t_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(t_r2.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(t_r2.assigned_user ? 29 : 30);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(t_r2.priority ? 35 : 36);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(t_r2.due_date ? 41 : 42);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.canStart() ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canSubmitForReview() ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canApproveOrRework() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r2.description ? 47 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r2.comments().length > 0 ? 56 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", (ctx_r2.user()?.first_name || "") + " " + (ctx_r2.user()?.last_name || ""))("imageUrl", ctx_r2.resolveAvatarUrl(ctx_r2.user()?.avatar_url));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCommentContent);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.newCommentContent().trim() || ctx_r2.saving());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.rootComments.length === 0 ? 68 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.rootComments);
    \u0275\u0275advance(17);
    \u0275\u0275property("maxSizeMB", 20);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.attachments().length > 0 ? 87 : 88);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r2.history().length === 0 ? 99 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.history());
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
var TaskDetailComponent = class _TaskDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  taskService = inject(TaskService);
  commentService = inject(TaskCommentService);
  attachmentService = inject(TaskAttachmentService);
  dependencyService = inject(TaskDependencyService);
  authService = inject(AuthService);
  imageUrlService = inject(ImageUrlService);
  user = this.authService.currentUser;
  task = signal(
    null,
    ...ngDevMode ? [{ debugName: "task" }] : (
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
  history = signal(
    [],
    ...ngDevMode ? [{ debugName: "history" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newCommentContent = signal(
    "",
    ...ngDevMode ? [{ debugName: "newCommentContent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  taskId;
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
  isAssignedToCurrentUser = computed(
    () => {
      const t = this.task();
      return t?.user_id === this.currentUserId();
    },
    ...ngDevMode ? [{ debugName: "isAssignedToCurrentUser" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isTaskCreator = computed(
    () => {
      const t = this.task();
      return t?.creator_id === this.currentUserId();
    },
    ...ngDevMode ? [{ debugName: "isTaskCreator" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isManager = computed(
    () => {
      return this.currentUserRole() === "MANAGER" || this.currentUserRole() === "HR_ADMIN";
    },
    ...ngDevMode ? [{ debugName: "isManager" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canStart = computed(
    () => {
      return this.task()?.status === "TODO" && this.isAssignedToCurrentUser();
    },
    ...ngDevMode ? [{ debugName: "canStart" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canSubmitForReview = computed(
    () => {
      return this.task()?.status === "IN_PROGRESS" && this.isAssignedToCurrentUser();
    },
    ...ngDevMode ? [{ debugName: "canSubmitForReview" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canApproveOrRework = computed(
    () => {
      return this.task()?.status === "REVIEW" && (this.isTaskCreator() || this.isManager());
    },
    ...ngDevMode ? [{ debugName: "canApproveOrRework" }] : (
      /* istanbul ignore next */
      []
    )
  );
  showActions = computed(
    () => {
      return this.canStart() || this.canSubmitForReview() || this.canApproveOrRework();
    },
    ...ngDevMode ? [{ debugName: "showActions" }] : (
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
  constructor() {
    this.taskService.getMyTasks().subscribe({
      next: (tasks) => this.projectTasks.set(tasks),
      error: () => {
      }
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.taskId = +id;
      this.loadTask(+id);
      this.loadComments(+id);
      this.loadAttachments(+id);
      this.loadDependencies(+id);
      this.loadHistory(+id);
    }
  }
  loadTask(id) {
    this.taskService.getTask(id).subscribe({
      next: (data) => {
        this.task.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  loadComments(taskId) {
    this.commentService.getComments(taskId).subscribe({
      next: (data) => this.comments.set(data),
      error: () => {
      }
    });
  }
  loadAttachments(taskId) {
    this.attachmentService.getAttachments(taskId).subscribe({
      next: (data) => this.attachments.set(data),
      error: () => {
      }
    });
  }
  loadDependencies(taskId) {
    this.dependencyService.getDependencies(taskId).subscribe({
      next: (data) => this.dependencies.set(data),
      error: () => {
      }
    });
  }
  loadHistory(taskId) {
    this.taskService.getHistory(taskId).subscribe({
      next: (data) => this.history.set(data),
      error: () => {
      }
    });
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
  getStatusIcon(status) {
    switch (status) {
      case "TODO":
        return "radio_button_unchecked";
      case "IN_PROGRESS":
        return "pending_actions";
      case "REVIEW":
        return "rate_review";
      case "DONE":
        return "check_circle";
      default:
        return "circle";
    }
  }
  getStatusLabel(status) {
    return STATUS_LABELS[status] || status || "N/A";
  }
  getPriorityLabel(priority) {
    return PRIORITY_LABELS[priority || ""] || priority || "\u2014";
  }
  getStatusClass(status) {
    return STATUS_CLASSES[status] || "bg-background-alt text-text-secondary";
  }
  updateStatus(status) {
    this.saving.set(true);
    this.taskService.updateStatus(this.taskId, status).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  addComment(parentId) {
    const content = this.newCommentContent();
    if (!content.trim())
      return;
    this.saving.set(true);
    this.commentService.addComment(this.taskId, { content, parent_id: parentId }).subscribe({
      next: () => {
        this.newCommentContent.set("");
        this.loadComments(this.taskId);
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  addReply(parentId) {
    this.replyContent.update((c) => __spreadProps(__spreadValues({}, c), { [parentId]: "" }));
    this.addComment(parentId);
  }
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
  setReplyContent(parentId, value) {
    this.replyContent.update((c) => __spreadProps(__spreadValues({}, c), { [parentId]: value }));
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
  getReplyContent(parentId) {
    return this.replyContent()[parentId] || "";
  }
  onFileInputChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (file)
      this.onAttachmentSelected(file);
    input.value = "";
  }
  onAttachmentSelected(file) {
    this.attachmentService.uploadAttachment(this.taskId, file).subscribe({
      next: () => this.loadAttachments(this.taskId),
      error: () => {
      }
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
  addDependency(event) {
    const select = event.target;
    const dependsOnTaskId = +select.value;
    if (!dependsOnTaskId)
      return;
    this.dependencyService.addDependency(this.taskId, dependsOnTaskId).subscribe({
      next: () => {
        this.loadDependencies(this.taskId);
        select.value = "";
      },
      error: () => {
      }
    });
  }
  removeDependency(dep) {
    this.dependencyService.removeDependency(this.taskId, dep.id).subscribe({
      next: () => this.loadDependencies(this.taskId),
      error: () => {
      }
    });
  }
  resolveAvatarUrl(url) {
    return this.imageUrlService.resolve(url);
  }
  get rootComments() {
    return this.comments().filter((c) => !c.parent_id);
  }
  getReplies(commentId) {
    return this.comments().filter((c) => c.parent_id === commentId);
  }
  get dependencyCandidates() {
    const t = this.task();
    if (!t)
      return [];
    const depIds = new Set(this.dependencies().map((d) => d.depends_on_task_id));
    return this.projectTasks().filter((pt) => pt.id !== t.id && !depIds.has(pt.id));
  }
  static \u0275fac = function TaskDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskDetailComponent, selectors: [["app-task-detail"]], decls: 2, vars: 1, consts: [["fileInput", ""], [1, "max-w-5xl", "mx-auto", "px-6", "py-8", "animate-pulse", "space-y-6"], [1, "max-w-5xl", "mx-auto", "px-6", "py-8", "space-y-6"], [1, "h-6", "bg-background-alt", "rounded", "w-1/3"], [1, "h-8", "bg-background-alt", "rounded", "w-1/2"], [1, "h-24", "bg-background-alt", "rounded-xl"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-1.5", "text-sm", "text-text-secondary", "mb-1"], [1, "hover:text-primary", "transition-colors", "p-0.5", "cursor-pointer", 3, "routerLink"], [1, "material-symbols-outlined", "text-sm"], [1, "font-medium"], [1, "material-symbols-outlined", "text-sm", "text-text-muted"], [1, "font-semibold", "text-primary"], [1, "text-2xl", "font-heading", "font-bold", "text-text-heading", "truncate"], [1, "bg-background-alt", "rounded-xl", "border", "border-border", "p-5"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "text-[11px]", "text-text-secondary", "font-medium", "uppercase", "tracking-wider"], [1, "mt-1.5"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "rounded-full", "text-xs", "font-semibold"], [1, "material-symbols-outlined", "text-[14px]"], [1, "mt-1.5", "flex", "items-center", "gap-2"], [1, "text-sm", "text-text-secondary", "italic"], [1, "inline-flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-md", "text-xs", "font-semibold", "bg-surface", "border", "border-border", "text-text-secondary"], [1, "text-sm", "text-text-secondary"], [1, "mt-1.5", "flex", "items-center", "gap-1.5"], [1, "flex", "items-center", "gap-3"], [1, "px-5", "py-2.5", "bg-primary", "text-text-inverse", "rounded-lg", "text-sm", "font-semibold", "shadow-sm", "hover:bg-primary-hover", "disabled:opacity-50", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "disabled"], [1, "bg-surface", "rounded-xl", "border", "border-border", "p-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-surface", "rounded-xl", "border", "border-border", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-border", "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-primary", "text-lg"], [1, "font-heading", "text-base", "font-semibold", "text-text"], [1, "ml-auto", "bg-background-alt", "text-text-secondary", "px-2", "py-0.5", "rounded-full", "text-[11px]", "font-semibold"], [1, "px-6", "py-4", "border-b", "border-border", "bg-background-alt/30"], [1, "flex", "gap-3"], ["size", "sm", 1, "!w-8", "!h-8", "!text-xs", "shrink-0", "rounded-full", "mt-1", 3, "name", "imageUrl"], [1, "flex-1"], ["rows", "2", "placeholder", "Ajouter un commentaire...", 1, "w-full", "px-4", "py-3", "bg-surface", "border", "border-border", "rounded-xl", "text-sm", "text-text", "placeholder:text-text-muted", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "mt-2"], [1, "bg-primary", "text-text-inverse", "text-sm", "font-semibold", "px-5", "py-2", "rounded-lg", "hover:bg-primary-hover", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", "cursor-pointer", "flex", "items-center", "gap-2", 3, "click", "disabled"], [1, "px-6", "py-4", "max-h-[500px]", "overflow-y-auto", "space-y-5"], [1, "text-sm", "text-text-secondary", "text-center", "py-4"], [1, "flex", "items-center", "gap-2", "mb-5"], [1, "border-2", "border-dashed", "border-border", "rounded-xl", "p-8", "text-center", "hover:bg-background-alt/30", "hover:border-primary/40", "transition-colors", "cursor-pointer", "mb-4", 3, "click"], [1, "material-symbols-outlined", "text-3xl", "text-text-muted"], [1, "text-sm", "text-text-secondary", "mt-2", "font-medium"], [1, "text-xs", "text-text-muted/60", "mt-1"], ["type", "file", "multiple", "", 1, "hidden", 3, "change"], ["label", "Pi\xE8ce jointe", 1, "hidden", 3, "fileSelected", "maxSizeMB"], [1, "space-y-2", "mt-4"], [1, "text-sm", "text-text-muted/60", "text-center", "py-2"], [1, "space-y-6"], [1, "relative"], [1, "absolute", "left-[9px]", "top-2", "bottom-2", "w-0.5", "bg-border/50"], [1, "space-y-5"], [1, "text-sm", "text-text-secondary", "text-center", "py-4", "relative", "pl-8"], [1, "relative", "pl-8"], ["size", "sm", 1, "!w-7", "!h-7", "!text-[10px]", "shrink-0", "rounded-full", 3, "imageUrl", "name"], [1, "text-sm", "font-medium", "text-text"], [1, "material-symbols-outlined", "text-sm", "text-text-secondary"], [1, "px-5", "py-2.5", "bg-primary", "text-text-inverse", "rounded-lg", "text-sm", "font-semibold", "shadow-sm", "hover:bg-primary-hover", "disabled:opacity-50", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "click", "disabled"], [1, "px-5", "py-2.5", "bg-success", "text-text-inverse", "rounded-lg", "text-sm", "font-semibold", "shadow-sm", "hover:bg-accent-dark", "disabled:opacity-50", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "click", "disabled"], [1, "px-5", "py-2.5", "bg-surface", "border", "border-border", "text-text-secondary", "rounded-lg", "text-sm", "font-semibold", "hover:bg-background-alt", "disabled:opacity-50", "transition-all", "flex", "items-center", "gap-2", "cursor-pointer", "shrink-0", 3, "click", "disabled"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "text-sm", "text-text-secondary", "leading-relaxed", "whitespace-pre-wrap"], ["size", "sm", 1, "!w-8", "!h-8", "!text-xs", "shrink-0", "rounded-full", 3, "imageUrl", "name"], [1, "flex-1", "min-w-0"], [1, "bg-background-alt", "rounded-2xl", "rounded-tl-sm", "px-4", "py-3", "border", "border-border/40"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-sm", "font-semibold", "text-text"], [1, "text-[11px]", "text-text-secondary"], [1, "flex", "items-center", "gap-3", "mt-1.5", "ml-2"], [1, "text-xs", "font-semibold", "text-primary", "hover:text-primary-hover", "transition-colors", "cursor-pointer", "flex", "items-center", "gap-1", 3, "click"], [1, "mt-2", "ml-4", "flex", "gap-2"], [1, "ml-4", "mt-3", "flex", "gap-3"], ["type", "text", "placeholder", "Votre r\xE9ponse...", 1, "flex-1", "px-3", "py-2", "bg-surface", "border", "border-border", "rounded-lg", "text-sm", "text-text", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "bg-primary", "text-text-inverse", "text-xs", "font-semibold", "px-3", "py-2", "rounded-lg", "hover:bg-primary-hover", "disabled:opacity-50", "cursor-pointer", "transition-colors", 3, "click", "disabled"], ["size", "sm", 1, "!w-6", "!h-6", "!text-[9px]", "shrink-0", "rounded-full", 3, "imageUrl", "name"], [1, "bg-surface", "rounded-xl", "rounded-tl-sm", "px-3", "py-2.5", "border", "border-border/40"], [1, "text-xs", "font-semibold", "text-text"], [1, "text-[10px]", "text-text-secondary"], [1, "text-sm", "text-text-secondary", "whitespace-pre-wrap"], [1, "flex", "items-center", "gap-3", "bg-background-alt/40", "rounded-lg", "px-4", "py-3", "border", "border-border/40", "hover:border-primary/30", "transition-colors", "group"], [1, "w-9", "h-9", "bg-primary-50", "text-primary", "rounded-lg", "flex", "items-center", "justify-center", "shrink-0"], ["target", "_blank", 1, "text-sm", "font-medium", "text-primary", "hover:underline", "truncate", "block", 3, "href"], ["target", "_blank", 1, "text-text-secondary", "hover:text-primary", "p-1", "rounded", "transition-colors", 3, "href"], [1, "absolute", "left-0", "top-1.5", "w-[18px]", "h-[18px]", "bg-background-alt", "border-2", "border-border", "rounded-full", "flex", "items-center", "justify-center"], [1, "material-symbols-outlined", "text-[10px]", "text-text-secondary"], [1, "absolute", "left-0", "top-1.5", "w-[18px]", "h-[18px]", "bg-surface", "border-2", "rounded-full", "flex", "items-center", "justify-center", "shrink-0"], [1, "w-1.5", "h-1.5", "bg-primary", "rounded-full"], [1, "text-sm", "text-text"], [1, "text-xs", "text-text-muted/60", "mt-0.5", "block"], [1, "font-semibold"], [1, "text-text-secondary"], [1, "inline-flex", "px-2", "py-0.5", "rounded", "text-[11px]", "font-semibold"]], template: function TaskDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TaskDetailComponent_Conditional_0_Template, 4, 0, "div", 1)(1, TaskDetailComponent_Conditional_1_Template, 102, 26, "div", 2);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.loading() ? 0 : (tmp_0_0 = ctx.task()) ? 1 : -1, tmp_0_0);
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AvatarComponent, FileUploaderComponent, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskDetailComponent, [{
    type: Component,
    args: [{ selector: "app-task-detail", standalone: true, imports: [RouterModule, FormsModule, AvatarComponent, FileUploaderComponent, DatePipe], template: `@if (loading()) {
  <div class="max-w-5xl mx-auto px-6 py-8 animate-pulse space-y-6">
    <div class="h-6 bg-background-alt rounded w-1/3"></div>
    <div class="h-8 bg-background-alt rounded w-1/2"></div>
    <div class="h-24 bg-background-alt rounded-xl"></div>
  </div>
} @else if (task(); as t) {
  <div class="max-w-5xl mx-auto px-6 py-8 space-y-6">

    <!-- ===== HEADER ===== -->
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-1.5 text-sm text-text-secondary mb-1">
          <a [routerLink]="['/' + (user()?.role === 'HR_ADMIN' ? 'admin' : 'manager') + '/projects/' + t.project_id]"
            class="hover:text-primary transition-colors p-0.5 cursor-pointer">
            <span class="material-symbols-outlined text-sm">arrow_back</span>
          </a>
          <span class="font-medium">{{ t.project?.name || 'Projet' }}</span>
          <span class="material-symbols-outlined text-sm text-text-muted">chevron_right</span>
          <span class="font-semibold text-primary">{{ t.reference_code || 'TSK-000' }}</span>
        </div>
        <h1 class="text-2xl font-heading font-bold text-text-heading truncate">{{ t.title }}</h1>
      </div>
    </div>

    <!-- ===== STATUS BAR ===== -->
    <div class="bg-background-alt rounded-xl border border-border p-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <span class="text-[11px] text-text-secondary font-medium uppercase tracking-wider">Statut</span>
          <div class="mt-1.5">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold" [class]="getStatusClass(t.status)">
              <span class="material-symbols-outlined text-[14px]">{{ getStatusIcon(t.status) }}</span>
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

    <!-- ===== ACTION BUTTONS ===== -->
    <div class="flex items-center gap-3">
      @if (canStart()) {
        <button (click)="updateStatus('IN_PROGRESS')" [disabled]="saving()"
          class="px-5 py-2.5 bg-primary text-text-inverse rounded-lg text-sm font-semibold shadow-sm hover:bg-primary-hover disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">play_arrow</span>
          D\xE9marrer le travail
        </button>
      }
      @if (canSubmitForReview()) {
        <button (click)="updateStatus('REVIEW')" [disabled]="saving()"
          class="px-5 py-2.5 bg-primary text-text-inverse rounded-lg text-sm font-semibold shadow-sm hover:bg-primary-hover disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">rate_review</span>
          Soumettre pour validation
        </button>
      }
      @if (canApproveOrRework()) {
        <button (click)="updateStatus('DONE')" [disabled]="saving()"
          class="px-5 py-2.5 bg-success text-text-inverse rounded-lg text-sm font-semibold shadow-sm hover:bg-accent-dark disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">check_circle</span>
          Valider
        </button>
        <button (click)="updateStatus('IN_PROGRESS')" [disabled]="saving()"
          class="px-5 py-2.5 bg-surface border border-border text-text-secondary rounded-lg text-sm font-semibold hover:bg-background-alt disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shrink-0">
          <span class="material-symbols-outlined text-sm">undo</span>
          Renvoyer pour reprise
        </button>
      }
    </div>

    <!-- ===== DESCRIPTION ===== -->
    @if (t.description) {
      <div class="bg-surface rounded-xl border border-border p-6">
        <div class="flex items-center gap-2 mb-4">
          <span class="material-symbols-outlined text-primary text-lg">description</span>
          <h3 class="font-heading text-base font-semibold text-text">Description</h3>
        </div>
        <div class="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">{{ t.description }}</div>
      </div>
    }

    <!-- ===== MAIN GRID: 2/3 + 1/3 ===== -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- ===== LEFT COLUMN (2/3) ===== -->
      <div class="lg:col-span-2 space-y-6">

        <!-- \u2500\u2500 DISCUSSION \u2500\u2500 -->
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
          <div class="px-6 py-4 max-h-[500px] overflow-y-auto space-y-5">
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
                      <input type="text" [ngModel]="getReplyContent(comment.id)" (ngModelChange)="setReplyContent(comment.id, $event)" placeholder="Votre r\xE9ponse..." class="flex-1 px-3 py-2 bg-surface border border-border rounded-lg text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
                      <button (click)="addReply(comment.id)" [disabled]="!getReplyContent(comment.id).trim()" class="bg-primary text-text-inverse text-xs font-semibold px-3 py-2 rounded-lg hover:bg-primary-hover disabled:opacity-50 cursor-pointer transition-colors">R\xE9pondre</button>
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

        <!-- \u2500\u2500 ATTACHMENTS \u2500\u2500 -->
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
}` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskDetailComponent, { className: "TaskDetailComponent", filePath: "src/app/features/shared/tasks/task-detail/task-detail.component.ts", lineNumber: 36 });
})();
export {
  TaskDetailComponent
};
//# sourceMappingURL=chunk-47O5JOCU.js.map
