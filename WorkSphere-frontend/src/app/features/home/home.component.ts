/**
 * Page d'accueil statique (landing page) de WorkSphere.
 * Présente la plateforme avec un hero, des fonctionnalités et un footer.
 */

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * Défilement fluide vers une section de la page.
   * @param elementId ID de l'élément cible
   */
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
