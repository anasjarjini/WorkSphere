import { Component, computed, effect, inject, Input, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageUrlService } from '../../../core/services/image-url.service';
import { CompanyService } from '../../../core/services/company.service';

@Component({
  selector: 'app-company-brand',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './company-brand.component.html'
})
export class CompanyBrandComponent implements OnInit {
  private readonly companyService = inject(CompanyService);
  private readonly imageUrlService = inject(ImageUrlService);

  readonly isLoading = signal(true);
  readonly imageError = signal(false);

  @Input() homeRoute = '/';
  @Input() contextLabel = 'Espace de travail';

  readonly company = this.companyService.company;

  readonly imageUrl = computed(() => {
    const c = this.company();
    if (!c) return null;
    return this.imageUrlService.resolve(c.logo_url || c.logo || null);
  });

  readonly companyName = computed(() => this.company()?.name?.trim() || 'WorkSphere');

  readonly companyInitial = computed(() => {
    const name = this.companyName();
    if (!name) return 'W';
    return name[0].toUpperCase();
  });

  constructor() {
    effect(() => {
      this.imageUrl();
      this.imageError.set(false);
    });
  }

  ngOnInit(): void {
    if (this.company()) {
      this.isLoading.set(false);
      return;
    }
    this.companyService.getCompany().subscribe({
      next: () => this.isLoading.set(false),
      error: () => this.isLoading.set(false)
    });
  }

  onImageError(): void {
    this.imageError.set(true);
  }
}
