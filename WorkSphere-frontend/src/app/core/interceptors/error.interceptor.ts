/**
 * Intercepteur fonctionnel gérant les erreurs HTTP globalement.
 * En cas de 401 (non authentifié), redirige vers la page de login.
 */

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        authService.clearSession();
        const currentPath = router.url.split(/[?#]/, 1)[0];
        const publicPaths = ['/', '/login', '/activate', '/register-company', '/forgot-password', '/reset-password'];
        if (!publicPaths.includes(currentPath)) {
          router.navigate(['/login']);
        }
      }
      return throwError(() => error);
    })
  );
};
