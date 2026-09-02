import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

function cookieValue(name: string): string | null {
  const prefix = `${encodeURIComponent(name)}=`;
  const item = document.cookie.split('; ').find((cookie) => cookie.startsWith(prefix));
  return item ? decodeURIComponent(item.slice(prefix.length)) : null;
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isApiRequest = req.url.startsWith(environment.apiUrl)
    || req.url.includes('/sanctum/csrf-cookie');

  if (!isApiRequest) {
    return next(req);
  }

  const csrfToken = cookieValue('XSRF-TOKEN');
  const isStateChanging = !['GET', 'HEAD', 'OPTIONS'].includes(req.method);

  return next(req.clone({
    withCredentials: true,
    setHeaders: isStateChanging && csrfToken
      ? { 'X-XSRF-TOKEN': csrfToken }
      : {},
  }));
};
