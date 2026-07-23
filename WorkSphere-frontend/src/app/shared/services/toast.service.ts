import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

let nextId = 0;

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);

  show(type: Toast['type'], message: string, duration = 4000): void {
    const id = ++nextId;
    this.toasts.update((t) => [...t, { id, type, message }]);
    setTimeout(() => this.dismiss(id), duration);
  }

  success(message: string): void { this.show('success', message); }
  error(message: string): void { this.show('error', message); }
  warning(message: string): void { this.show('warning', message); }
  info(message: string): void { this.show('info', message); }

  dismiss(id: number): void {
    this.toasts.update((t) => t.filter((toast) => toast.id !== id));
  }
}
