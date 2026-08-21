import {
  environment
} from "./chunk-7XL7WG5D.js";
import {
  HttpClient
} from "./chunk-3HN2YFK3.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ADF3COWQ.js";

// src/app/core/services/task.service.ts
var TaskService = class _TaskService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getProjectTasks(projectId) {
    return this.http.get(`${this.apiUrl}/projects/${projectId}/tasks`);
  }
  getTask(id) {
    return this.http.get(`${this.apiUrl}/tasks/${id}`);
  }
  createTask(projectId, data) {
    return this.http.post(`${this.apiUrl}/projects/${projectId}/tasks`, data);
  }
  updateTask(id, data) {
    return this.http.put(`${this.apiUrl}/tasks/${id}`, data);
  }
  deleteTask(id) {
    return this.http.delete(`${this.apiUrl}/tasks/${id}`);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.apiUrl}/tasks/${id}/status`, { status });
  }
  assignTask(id, userId) {
    return this.http.patch(`${this.apiUrl}/tasks/${id}/assign`, { user_id: userId });
  }
  getMyTasks() {
    return this.http.get(`${this.apiUrl}/my-tasks`);
  }
  getManagerCreatedTasks() {
    return this.http.get(`${this.apiUrl}/manager/tasks`);
  }
  getHistory(taskId) {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/history`);
  }
  reorder(taskId, orderPosition) {
    return this.http.patch(`${this.apiUrl}/tasks/${taskId}/reorder`, { order_position: orderPosition });
  }
  static \u0275fac = function TaskService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TaskService
};
//# sourceMappingURL=chunk-ZNZLQX3N.js.map
