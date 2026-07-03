import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Intercepteur fonctionnel injectant le token d'authentification Bearer
 * dans l'en-tête d'autorisation de chaque requête vers l'API.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('auth_token');

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
