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
    <nav aria-label="Fil d'Ariane" class="flex items-center gap-2 text-[0.8125rem] py-3 flex-wrap mb-4">
      <a routerLink="/" class="text-text-muted no-underline font-medium transition-colors duration-200 hover:text-accent cursor-pointer">Accueil</a>
      @for (crumb of breadcrumbs(); track crumb.path; let last = $last) {
        <span class="text-border font-light">/</span>
        @if (last) {
          <span class="text-text font-semibold">{{ crumb.label }}</span>
        } @else {
          <a [routerLink]="crumb.path" class="text-text-muted no-underline font-medium transition-colors duration-200 hover:text-accent cursor-pointer">{{ crumb.label }}</a>
        }
      }
    </nav>
  `,
  styles: []
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
