import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, catchError, combineLatest, of, timeout } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../../core/services/auth.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { ProjectService } from '../../../core/services/project.service';
import { AnnouncementService } from '../../../core/services/announcement.service';
import { TaskService } from '../../../core/services/task.service';
import { Employee, EmployeeRole } from '../../../core/models/employee.model';
import { Project, ProjectStatus } from '../../../core/models/project.model';
import { Announcement, AnnouncementType } from '../../../core/models/announcement.model';
import { Task } from '../../../core/models/task.model';

export interface SearchItem {
  section: string;
  icon: string;
  title: string;
  subtitle?: string;
  route: string[];
  queryParams?: Record<string, string>;
}

export interface SearchSection {
  name: string;
  items: SearchItem[];
}

const ROLE_LABELS: Record<EmployeeRole, string> = {
  HR_ADMIN: 'Admin RH',
  MANAGER: 'Manager',
  EMPLOYE: 'Employé'
};

const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  PLANIFICATION: 'Planification',
  EN_COURS: 'En cours',
  EN_PAUSE: 'En pause',
  TERMINE: 'Terminé'
};

const ANNOUNCEMENT_TYPE_LABELS: Record<AnnouncementType, string> = {
  GENERAL: 'Générale',
  MEETING: 'Réunion',
  TRAINING: 'Formation',
  POLICY: 'Politique'
};

interface PageEntry {
  label: string;
  icon: string;
  route: string[];
  keywords: string[];
}

const PAGES_BY_ROLE: Record<EmployeeRole, PageEntry[]> = {
  HR_ADMIN: [
    { label: 'Tableau de bord', icon: 'grid_view', route: ['/admin/dashboard'], keywords: ['dashboard', 'accueil', 'tableau'] },
    { label: 'Employés', icon: 'group', route: ['/admin/employees'], keywords: ['employe', 'employees', 'equipe', 'personnel'] },
    { label: 'Projets', icon: 'work', route: ['/admin/projects'], keywords: ['project', 'projet', 'kanban'] },
    { label: 'Présences', icon: 'event_available', route: ['/admin/attendance'], keywords: ['presence', 'attendance', 'pointage', 'pointeuse'] },
    { label: 'Congés', icon: 'beach_access', route: ['/admin/hr/leaves'], keywords: ['conge', 'leave', 'vacances', 'jours feries'] },
    { label: 'Annonces', icon: 'campaign', route: ['/admin/announcements'], keywords: ['annonce', 'announcement', 'news'] },
    { label: 'Messagerie', icon: 'chat', route: ['/chat'], keywords: ['chat', 'messagerie', 'message', 'conversation', 'discussion'] },
    { label: 'Demandes', icon: 'request_page', route: ['/admin/requests'], keywords: ['demande', 'request', 'service'] },
    { label: 'Entreprise', icon: 'business', route: ['/admin/company'], keywords: ['entreprise', 'company', 'parametres'] },
  ],
  MANAGER: [
    { label: 'Tableau de bord', icon: 'grid_view', route: ['/manager/dashboard'], keywords: ['dashboard', 'accueil', 'tableau'] },
    { label: 'Mon équipe', icon: 'group', route: ['/manager/team'], keywords: ['equipe', 'team', 'employe', 'collaborateurs'] },
    { label: 'Projets', icon: 'work', route: ['/manager/projects'], keywords: ['project', 'projet', 'kanban'] },
    { label: 'Présences', icon: 'event_available', route: ['/manager/attendance'], keywords: ['presence', 'attendance', 'pointage', 'pointeuse'] },
    { label: 'Congés', icon: 'beach_access', route: ['/manager/team/leaves'], keywords: ['conge', 'leave', 'vacances', 'jours feries'] },
    { label: 'Annonces', icon: 'campaign', route: ['/manager/announcements'], keywords: ['annonce', 'announcement', 'news'] },
    { label: 'Messagerie', icon: 'chat', route: ['/chat'], keywords: ['chat', 'messagerie', 'message', 'conversation', 'discussion'] },
    { label: 'Demandes', icon: 'request_page', route: ['/manager/requests'], keywords: ['demande', 'request', 'service'] },
  ],
  EMPLOYE: [
    { label: 'Tableau de bord', icon: 'grid_view', route: ['/employee/dashboard'], keywords: ['dashboard', 'accueil', 'tableau'] },
    { label: 'Mes tâches', icon: 'task_alt', route: ['/employee/tasks'], keywords: ['tache', 'task', 'todo'] },
    { label: 'Présences', icon: 'event_available', route: ['/employee/attendance'], keywords: ['presence', 'attendance', 'pointage', 'pointeuse'] },
    { label: 'Congés', icon: 'beach_access', route: ['/employee/leaves'], keywords: ['conge', 'leave', 'vacances', 'jours feries'] },
    { label: 'Annonces', icon: 'campaign', route: ['/employee/announcements'], keywords: ['annonce', 'announcement', 'news'] },
    { label: 'Messagerie', icon: 'chat', route: ['/chat'], keywords: ['chat', 'messagerie', 'message', 'conversation', 'discussion'] },
    { label: 'Demandes', icon: 'request_page', route: ['/employee/requests'], keywords: ['demande', 'request', 'service'] },
  ]
};

@Component({
  selector: 'app-global-search',
  standalone: true,
  templateUrl: './global-search.component.html'
})
export class GlobalSearchComponent {
  private readonly auth = inject(AuthService);
  private readonly employeeService = inject(EmployeeService);
  private readonly projectService = inject(ProjectService);
  private readonly announcementService = inject(AnnouncementService);
  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);
  private readonly elementRef = inject(ElementRef);

  private readonly search$ = new Subject<string>();

  private projectsCache: Project[] | null = null;
  private announcementsCache: Announcement[] | null = null;
  private tasksCache: Task[] | null = null;

  readonly query = signal('');
  readonly sections = signal<SearchSection[]>([]);
  readonly loading = signal(false);
  readonly open = signal(false);

  constructor() {
    this.search$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.loading.set(true)),
      switchMap((term) => this.performSearch(term)),
      takeUntilDestroyed()
    ).subscribe({
      next: (sections) => {
        this.loading.set(false);
        this.sections.set(sections);
        this.open.set(true);
      },
      error: () => this.loading.set(false)
    });
  }

  onInput(value: string): void {
    this.query.set(value);
    this.search$.next(value.trim());
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
    } else if (event.key === 'Enter') {
      const first = this.firstResult();
      if (first) {
        event.preventDefault();
        this.navigate(first);
      }
    }
  }

  clear(): void {
    this.query.set('');
    this.search$.next('');
    this.sections.set([]);
    this.open.set(false);
  }

  close(): void {
    this.open.set(false);
  }

  navigate(item: SearchItem): void {
    this.clear();
    this.router.navigate(item.route, item.queryParams ? { queryParams: item.queryParams } : undefined);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  private firstResult(): SearchItem | null {
    const firstSection = this.sections()[0];
    return firstSection?.items[0] ?? null;
  }

  private performSearch(term: string): Observable<SearchSection[]> {
    if (term.trim().length < 2) {
      this.loading.set(false);
      return of([]);
    }
    const role = this.auth.currentUser()?.role ?? 'EMPLOYE';
    const lower = term.toLowerCase();
    const sources: Observable<SearchItem[]>[] = [];

    if (role === 'HR_ADMIN' || role === 'MANAGER') {
      sources.push(this.searchPeople(role, lower));
      sources.push(this.searchProjects(role, lower));
    } else {
      sources.push(this.searchMyTasks(lower));
    }
    sources.push(this.searchAnnouncements(role, lower));
    sources.push(this.searchPages(role, lower));

    return combineLatest(sources).pipe(
      map((results) => {
        const sections: SearchSection[] = [];
        for (const items of results) {
          if (items.length > 0) {
            sections.push({ name: items[0].section, items });
          }
        }
        return sections;
      })
    );
  }

  private searchPeople(role: EmployeeRole, term: string): Observable<SearchItem[]> {
    const isAdmin = role === 'HR_ADMIN';
    const source = isAdmin
      ? this.employeeService.getEmployees({ search: term, per_page: 5 })
      : this.employeeService.getManagerTeam({ search: term, per_page: 5 });
    const section = isAdmin ? 'Employés' : 'Mon équipe';
    const route = isAdmin ? ['/admin/employees'] : ['/manager/team'];
    return source.pipe(
      timeout(5000),
      map((res) =>
        res.data.map((employee) => this.toEmployeeItem(employee, section, route, term))
      ),
      catchError(() => of([]))
    );
  }

  private toEmployeeItem(employee: Employee, section: string, route: string[], term: string): SearchItem {
    return {
      section,
      icon: 'person',
      title: `${employee.first_name} ${employee.last_name}`,
      subtitle: `${ROLE_LABELS[employee.role]} · ${employee.email}`,
      route,
      queryParams: { search: term }
    };
  }

  private searchProjects(role: EmployeeRole, term: string): Observable<SearchItem[]> {
    const base = this.projectsCache ? of(this.projectsCache) : this.projectService.getProjects().pipe(
      tap((projects) => (this.projectsCache = projects))
    );
    const baseRoute = role === 'HR_ADMIN' ? '/admin/projects' : '/manager/projects';
    return base.pipe(
      timeout(5000),
      map((projects) =>
        projects
          .filter((p) => p.name.toLowerCase().includes(term) || p.reference_code.toLowerCase().includes(term))
          .slice(0, 5)
          .map((p) => ({
            section: 'Projets',
            icon: 'work',
            title: p.name,
            subtitle: `${p.reference_code} · ${PROJECT_STATUS_LABELS[p.status]}`,
            route: [baseRoute, String(p.id)]
          }))
      ),
      catchError(() => of([]))
    );
  }

  private searchAnnouncements(role: EmployeeRole, term: string): Observable<SearchItem[]> {
    const base = this.announcementsCache ? of(this.announcementsCache) : this.announcementService.getAnnouncements().pipe(
      tap((announcements) => (this.announcementsCache = announcements))
    );
    const baseRoute = `/${role.toLowerCase()}/announcements`;
    return base.pipe(
      timeout(5000),
      map((announcements) =>
        announcements
          .filter(
            (a) =>
              a.title.toLowerCase().includes(term) || a.content.toLowerCase().includes(term)
          )
          .slice(0, 5)
          .map((a) => ({
            section: 'Annonces',
            icon: 'campaign',
            title: a.title,
            subtitle: ANNOUNCEMENT_TYPE_LABELS[a.type],
            route: [baseRoute]
          }))
      ),
      catchError(() => of([]))
    );
  }

  private searchMyTasks(term: string): Observable<SearchItem[]> {
    const base = this.tasksCache ? of(this.tasksCache) : this.taskService.getMyTasks().pipe(
      tap((tasks) => (this.tasksCache = tasks))
    );
    return base.pipe(
      timeout(5000),
      map((tasks) =>
        tasks
          .filter(
            (t) =>
              t.title.toLowerCase().includes(term) ||
              t.reference_code.toLowerCase().includes(term)
          )
          .slice(0, 5)
          .map((t) => ({
            section: 'Mes tâches',
            icon: 'task_alt',
            title: t.title,
            subtitle: t.project ? t.project.name : t.reference_code,
            route: ['/employee/tasks']
          }))
      ),
      catchError(() => of([]))
    );
  }

  private searchPages(role: EmployeeRole, term: string): Observable<SearchItem[]> {
    const pages = PAGES_BY_ROLE[role] ?? [];
    return of(
      pages
        .filter(
          (page) =>
            page.label.toLowerCase().includes(term) ||
            page.keywords.some((k) => k.includes(term))
        )
        .slice(0, 4)
        .map((page) => ({
          section: 'Pages',
          icon: page.icon,
          title: page.label,
          subtitle: page.route.join('/'),
          route: page.route
        }))
    );
  }
}
