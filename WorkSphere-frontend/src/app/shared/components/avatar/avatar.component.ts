import { Component, input, computed } from '@angular/core';

const AVATAR_CLASSES = [
  'bg-primary text-text-inverse',
  'bg-accent text-text-inverse',
  'bg-tertiary text-text-inverse',
  'bg-secondary text-text-inverse',
  'bg-info text-text-inverse',
  'bg-primary-light text-primary-dark',
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

  readonly initials = computed(() => {
    const n = this.name();
    if (!n) return '??';
    const parts = n.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return n.slice(0, 2).toUpperCase();
  });

  readonly avatarClass = computed(() => {
    const n = this.name();
    if (!n) return AVATAR_CLASSES[0];
    let hash = 0;
    for (let i = 0; i < n.length; i++) {
      hash = n.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_CLASSES[Math.abs(hash) % AVATAR_CLASSES.length];
  });

  readonly sizeClass = computed(() => {
    switch (this.size()) {
      case 'sm': return 'w-8 h-8 text-xs';
      case 'md': return 'w-10 h-10 text-sm';
      case 'lg': return 'w-16 h-16 text-xl';
    }
  });
}
