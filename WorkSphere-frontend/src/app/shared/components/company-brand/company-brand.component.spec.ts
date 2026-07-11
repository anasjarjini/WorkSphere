import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CompanyService } from '../../../core/services/company.service';
import { CompanyBrandComponent } from './company-brand.component';

describe('CompanyBrandComponent', () => {
  let fixture: ComponentFixture<CompanyBrandComponent>;
  let companyService: jasmine.SpyObj<CompanyService>;

  beforeEach(async () => {
    companyService = jasmine.createSpyObj<CompanyService>('CompanyService', ['getCompany']);

    await TestBed.configureTestingModule({
      imports: [CompanyBrandComponent, RouterTestingModule],
      providers: [{ provide: CompanyService, useValue: companyService }]
    }).compileComponents();
  });

  it('should display the company logo when available', () => {
    companyService.getCompany.and.returnValue(of({
      company: {
        id: 1,
        name: 'Acme Corp',
        slug: 'acme',
        logo_url: 'https://example.com/logo.png',
        is_active: true
      }
    } as any));

    fixture = TestBed.createComponent(CompanyBrandComponent);
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('https://example.com/logo.png');
  });

  it('should resolve relative logo URLs against the backend origin', () => {
    companyService.getCompany.and.returnValue(of({
      company: {
        id: 1,
        name: 'Acme Corp',
        slug: 'acme',
        logo_url: '/storage/logos/acme.png',
        is_active: true
      }
    } as any));

    fixture = TestBed.createComponent(CompanyBrandComponent);
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('http://localhost:8000/storage/logos/acme.png');
  });

  it('should render fallback initial when no logo is present', () => {
    companyService.getCompany.and.returnValue(of({
      company: {
        id: 1,
        name: 'Acme Corp',
        slug: 'acme',
        logo_url: null,
        is_active: true
      }
    } as any));

    fixture = TestBed.createComponent(CompanyBrandComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')).toBeNull();
    expect(compiled.textContent).toContain('A');
  });
});
