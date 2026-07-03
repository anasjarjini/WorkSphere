import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  path: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav aria-label="Fil d'Ariane" class="breadcrumb">
      <a routerLink="/" class="crumb-link">Accueil</a>
      @for (crumb of breadcrumbs(); track crumb.path; let last = $last) {
        <span class="separator">/</span>
        @if (last) {
          <span class="crumb-current">{{ crumb.label }}</span>
        } @else {
          <a [routerLink]="crumb.path" class="crumb-link">{{ crumb.label }}</a>
        }
      }
    </nav>
  `,
  styles: [`
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8125rem;
      padding: 0.75rem 0;
      flex-wrap: wrap;
    }

    .crumb-link {
      color: var(--color-text-muted);
      text-decoration: none;
      font-weight: 500;
      transition: color var(--transition-fast);
    }

    .crumb-link:hover {
      color: var(--color-accent);
    }

    .separator {
      color: var(--color-border);
      font-weight: 300;
    }

    .crumb-current {
      color: var(--color-text-main);
      font-weight: 600;
    }
  `]
})
export class BreadcrumbComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly breadcrumbs = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.buildBreadcrumbs(this.activatedRoute.root))
    ),
    { initialValue: [] as Breadcrumb[] }
  );

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
