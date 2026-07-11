/**
 * Composant générique de page 404 (page non trouvée).
 * Affiche un message d'erreur et un lien de retour vers l'accueil.
 */

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {}
