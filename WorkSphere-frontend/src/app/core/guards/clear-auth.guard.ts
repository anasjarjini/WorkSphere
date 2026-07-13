import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const clearAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  if (authService.hasToken()) {
    authService.clearSession();
  }

  return true;
};
