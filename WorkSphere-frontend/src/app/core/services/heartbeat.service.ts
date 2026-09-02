import { Injectable, effect, inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HeartbeatService implements OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);
  private intervalId: number | undefined;

  constructor() {
    // React to auth state: start when authenticated, stop when not.
    effect(() => {
      const isAuth = this.auth.isAuthenticated();
      if (isAuth) {
        this.ping(); // immediate
        this.start();
      } else {
        this.stop();
      }
    });

    // Ensure cleanup on page unload
    window.addEventListener('beforeunload', () => this.stop());
  }

  private start(): void {
    if (this.intervalId) return;
    this.intervalId = window.setInterval(() => this.ping(), 30_000);
  }

  private stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  private ping(): void {
    if (!this.auth.isAuthenticated()) return;
    // Lightweight call; ignore response and errors
    this.http.post(`${environment.apiUrl}/heartbeat`, {}, { observe: 'response' }).subscribe({ next: () => {}, error: () => {} });
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
