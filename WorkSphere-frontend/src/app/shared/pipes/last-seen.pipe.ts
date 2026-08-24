import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'lastSeen' })
export class LastSeenPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    const d = new Date(value);
    const now = new Date();

    const isToday = d.toDateString() === now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = d.toDateString() === yesterday.toDateString();

    const time = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    if (isToday) return `Vu pour la dernière fois à ${time}`;
    if (isYesterday) return `Vu hier à ${time}`;

    const date = d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
    return `Vu le ${date} à ${time}`;
  }
}
