import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

/**
 * Garde de navigation protégeant l'accès aux routes réservées aux utilisateurs connectés.
 * Redirige vers /login si l'utilisateur n'est pas authentifié.
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.authReady()) {
    return authService.checkAuth().pipe(
      map((authenticated) => authenticated ? true : router.createUrlTree(['/login']))
    );
  }

  if (authService.isAuthenticated()) {
    return true;
  }

  // Redirection fluide vers la page de login
  return router.createUrlTree(['/login']);
};
