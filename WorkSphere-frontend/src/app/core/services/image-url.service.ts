import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'; 

/**
 * Résout une valeur d'URL/chemin d'image (avatar, logo, etc.) renvoyée par le backend
 * vers une URL absolue pointant vers l'origine de l'API, quel que soit le format reçu
 * (URL complète, chemin absolu, chemin relatif "storage/..." ou "avatars/...").
 */
@Injectable({ providedIn: 'root' })
export class ImageUrlService {
  private readonly backendOrigin: string;

  constructor() {
    const base = typeof window !== 'undefined' ? window.location.origin : 'http://localhost';
    try {
      const apiUrl = new URL(environment.apiUrl, base);
      this.backendOrigin = `${apiUrl.protocol}//${apiUrl.host}`;
    } catch {
      this.backendOrigin = base;
    }
  }

  resolve(value: string | null | undefined): string | null {
    const rawValue = value?.trim();
    if (!rawValue) {
      return null;
    }

    if (/^https?:\/\//i.test(rawValue)) {
      try {
        const parsed = new URL(rawValue);
        return new URL(parsed.pathname, this.backendOrigin).toString();
      } catch {
        return rawValue;
      }
    }

    if (rawValue.startsWith('/')) {
      return new URL(rawValue, this.backendOrigin).toString();
    }
    if (rawValue.startsWith('storage/')) {
      return new URL(`/${rawValue}`, this.backendOrigin).toString();
    }
    if (rawValue.startsWith('avatars/')) {
      return new URL(`/storage/${rawValue}`, this.backendOrigin).toString();
    }
    if (rawValue.startsWith('logos/')) {
      return new URL(`/storage/${rawValue}`, this.backendOrigin).toString();
    }

    return rawValue;
  }
}
