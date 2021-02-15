import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseCardComponent } from './license-card.component';

describe('LicenseCardComponent', () => {
  let component: LicenseCardComponent;
  let fixture: ComponentFixture<LicenseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
