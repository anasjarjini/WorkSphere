/**
 * Composant de fil d'Ariane (breadcrumb) généré dynamiquement
 * à partir de la structure des routes et des données 'breadcrumb' définies dans app.routes.ts.
 */

import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';

interface Breadcrumb {
  label: string;
  path: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);

  readonly homeRoute = computed(() => {
    const user = this.authService.currentUser();
    switch (user?.role) {
      case 'HR_ADMIN': return '/admin/dashboard';
      case 'MANAGER': return '/manager/dashboard';
      case 'EMPLOYE': return '/employee/dashboard';
      default: return '/';
    }
  });

  /**
   * Signal contenant la liste des breadcrumbs mise à jour à chaque NavigationEnd.
   */
  readonly breadcrumbs = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.buildBreadcrumbs(this.activatedRoute.root))
    ),
    { initialValue: [] as Breadcrumb[] }
  );

  /**
   * Parcourt récursivement l'arbre de routes pour construire la liste des breadcrumbs.
   * @param route Route active courante
   * @param path Chemin accumulé depuis la racine
   * @param breadcrumbs Liste des crumbs accumulés
   * @returns Tableau des breadcrumbs triés
   */
  private buildBreadcrumbs(route: ActivatedRoute, path: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children = route.children;

    if (children.length === 0) return breadcrumbs;

    for (const child of children) {
      const routeURL = child.snapshot.url.map((seg) => seg.path).join('/');
      if (routeURL) path += `/${routeURL}`;

      const label = child.snapshot.data['breadcrumb'] ?? routeURL;
      if (routeURL || label) {
        breadcrumbs.push({ label, path });
      }

      return this.buildBreadcrumbs(child, path, breadcrumbs);
    }

    return breadcrumbs;
  }
}
