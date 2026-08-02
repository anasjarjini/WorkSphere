import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-N72M47JO.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZST2RCVM.js";

// src/app/core/services/task-comment.service.ts
var TaskCommentService = class _TaskCommentService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getComments(taskId) {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/comments`);
  }
  addComment(taskId, data) {
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/comments`, data);
  }
  deleteComment(taskId, commentId) {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}/comments/${commentId}`);
  }
  static \u0275fac = function TaskCommentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskCommentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskCommentService, factory: _TaskCommentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskCommentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/task-attachment.service.ts
var TaskAttachmentService = class _TaskAttachmentService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getAttachments(taskId) {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/attachments`);
  }
  uploadAttachment(taskId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/attachments`, formData);
  }
  deleteAttachment(taskId, attachmentId) {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}/attachments/${attachmentId}`);
  }
  getDownloadUrl(taskAttachment) {
    return `${this.apiUrl}/tasks/${taskAttachment.task_id}/attachments/${taskAttachment.id}/download`;
  }
  static \u0275fac = function TaskAttachmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskAttachmentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskAttachmentService, factory: _TaskAttachmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskAttachmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/task-dependency.service.ts
var TaskDependencyService = class _TaskDependencyService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getDependencies(taskId) {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/dependencies`);
  }
  addDependency(taskId, dependsOnTaskId) {
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/dependencies`, {
      depends_on_task_id: dependsOnTaskId
    });
  }
  removeDependency(taskId, dependencyId) {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}/dependencies/${dependencyId}`);
  }
  static \u0275fac = function TaskDependencyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskDependencyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskDependencyService, factory: _TaskDependencyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskDependencyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TaskCommentService,
  TaskAttachmentService,
  TaskDependencyService
};
//# sourceMappingURL=chunk-6UZHZSJE.js.map
