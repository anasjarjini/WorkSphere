/**
 * Intercepteur fonctionnel gérant les erreurs HTTP globalement.
 * En cas de 401 (non authentifié), supprime le token et redirige vers la page de login.
 */

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        // Token invalide ou expiré → nettoyage et redirection
        sessionStorage.removeItem('auth_token');
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};
