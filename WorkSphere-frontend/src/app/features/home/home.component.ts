import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);
  readonly currentYear = new Date().getFullYear();

  private revealObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.onWindowScroll();
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' }
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
      this.revealObserver?.observe(element);
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 900 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  scrollTo(elementId: string): void {
    this.isMenuOpen.set(false);
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
