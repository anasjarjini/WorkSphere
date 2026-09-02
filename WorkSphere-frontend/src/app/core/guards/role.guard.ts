import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

/**
 * Garde de navigation basé sur le rôle de l'utilisateur.
 * Vérifie si le rôle de l'utilisateur correspond aux rôles autorisés pour cette route.
 * Utilise le nouveau champ `role` (ENUM : HR_ADMIN, MANAGER, EMPLOYE).
 * Redirige vers le bon espace si non autorisé.
 */
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // 1. On s'assure d'abord que l'initialisation d'authentification est terminée
  if (!authService.authReady()) {
    return authService.checkAuth().pipe(
      map((authenticated) => {
        if (!authenticated) return router.createUrlTree(['/login']);
        const userRole = (authService.currentUser()?.role || '').trim().toUpperCase();
        const expectedRoles: string[] = route.data['roles'] || [];
        return expectedRoles.map((role) => role.toUpperCase()).includes(userRole)
          ? true
          : router.createUrlTree([authService.getRedirectPathForRole(userRole)]);
      })
    );
  }

  // 2. On s'assure d'abord que l'utilisateur est bien connecté 
  // (même si authGuard devrait bloquer avant)
  const user = authService.currentUser();
  
  if (!authService.isAuthenticated() || !user) {
    return router.createUrlTree(['/login']);
  }

  // 3. On récupère les rôles autorisés depuis les données de la route (définies dans app.routes.ts)
  const expectedRoles: string[] = route.data['roles'] || [];

  // 4. On utilise le nouveau champ `role` (ENUM) comme rôle principal
  const userRole = (user.role || '').trim().toUpperCase();

  // 5. Si le rôle est autorisé, on laisse passer
  if (expectedRoles.map(r => r.toUpperCase()).includes(userRole)) {
    return true;
  }

  // 6. Sinon, on redirige l'utilisateur vers le dashboard qui correspond réellement à son rôle
  const redirectPath = authService.getRedirectPathForRole(userRole);
  return router.createUrlTree([redirectPath]);
};
