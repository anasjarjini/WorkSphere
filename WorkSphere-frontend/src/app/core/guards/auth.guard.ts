import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Garde de navigation protégeant l'accès aux routes réservées aux utilisateurs connectés.
 * Redirige vers /login si l'utilisateur n'est pas authentifié.
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.authReady()) {
    return true;
  }

  if (authService.isAuthenticated()) {
    return true;
  }

  // Redirection fluide vers la page de login
  return router.createUrlTree(['/login']);
};
