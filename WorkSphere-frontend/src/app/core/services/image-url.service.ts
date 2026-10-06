import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

/**
 * Résout une valeur d'URL/chemin d'image (avatar, logo, etc.) renvoyée par le backend
 * vers une URL absolue valide quel que soit le format reçu :
 * - URL externe complète (Supabase, S3, CDN) -> conservée intacte
 * - URL localhost -> réécrite vers backendOrigin
 * - Chemin relatif "storage/...", "avatars/...", "logos/..." -> pointant vers /storage/...
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
        if (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1') {
          return new URL(parsed.pathname, this.backendOrigin).toString();
        }
        return rawValue;
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
