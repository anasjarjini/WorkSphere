import { Component, input, computed } from '@angular/core';

/**
 * Composant d'avatar générique : affiche une image ou, à défaut,
 * les initiales de l'utilisateur sur un fond de couleur déterministe.
 */

// Palette de 6 couleurs harmonieuses avec le design system Indigo/Émeraude
const AVATAR_COLORS: { bg: string; text: string }[] = [
  { bg: '#6366F1', text: '#FFFFFF' },  // Primary
  { bg: '#10B981', text: '#FFFFFF' },  // Accent
  { bg: '#8B5CF6', text: '#FFFFFF' },  // Violet
  { bg: '#F59E0B', text: '#FFFFFF' },   // Warning/Amber
  { bg: '#EC4899', text: '#FFFFFF' },  // Pink
  { bg: '#06B6D4', text: '#FFFFFF' },  // Cyan
];

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.component.html'
})
export class AvatarComponent {
  readonly imageUrl = input<string | null>(null);
  readonly name = input<string>('');
  readonly size = input<'sm' | 'md' | 'lg'>('md');

  /**
   * Génération des initiales à partir du nom : 2 premières lettres des 2 premiers mots.
   */
  readonly initials = computed(() => {
    const n = this.name();
    if (!n) return '??';
    const parts = n.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return n.slice(0, 2).toUpperCase();
  });

  /**
   * Couleur déterministe calculée à partir du nom (même nom = même couleur à chaque fois).
   * Hash simple pour choisir un index dans la palette.
   */
  readonly colorInfo = computed(() => {
    const n = this.name();
    if (!n) return AVATAR_COLORS[0];
    let hash = 0;
    for (let i = 0; i < n.length; i++) {
      hash = n.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
  });
}
