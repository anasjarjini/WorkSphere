import { signal, WritableSignal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { Company } from '../../../core/models/company.model';
import { CompanyService } from '../../../core/services/company.service';
import { CompanyBrandComponent } from './company-brand.component';

describe('CompanyBrandComponent', () => {
  let fixture: ComponentFixture<CompanyBrandComponent>;
  let company: WritableSignal<Company | null>;

  beforeEach(async () => {
    company = signal<Company | null>(null);
    const companyService = {
      company,
      getCompany: vi.fn(() => of({ company: company() }))
    };

    await TestBed.configureTestingModule({
      imports: [CompanyBrandComponent, RouterTestingModule],
      providers: [{ provide: CompanyService, useValue: companyService }]
    }).compileComponents();
  });

  it('should display the company logo when available', () => {
    company.set({
      id: 1,
      name: 'Acme Corp',
      slug: 'acme',
      logo_url: 'https://example.com/logo.png',
      is_active: true
    });

    fixture = TestBed.createComponent(CompanyBrandComponent);
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('http://localhost:8000/logo.png');
  });

  it('should resolve relative logo URLs against the backend origin', () => {
    company.set({
      id: 1,
      name: 'Acme Corp',
      slug: 'acme',
      logo_url: '/storage/logos/acme.png',
      is_active: true
    });

    fixture = TestBed.createComponent(CompanyBrandComponent);
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('http://localhost:8000/storage/logos/acme.png');
  });

  it('should render fallback initial when no logo is present', () => {
    company.set({
      id: 1,
      name: 'Acme Corp',
      slug: 'acme',
      logo_url: undefined,
      is_active: true
    });

    fixture = TestBed.createComponent(CompanyBrandComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')).toBeNull();
    expect(compiled.textContent).toContain('A');
  });
});
