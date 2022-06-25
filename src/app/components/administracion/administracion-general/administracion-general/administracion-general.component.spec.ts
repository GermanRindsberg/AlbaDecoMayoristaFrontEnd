import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionGeneralComponent } from './administracion-general.component';

describe('AdministracionGeneralComponent', () => {
  let component: AdministracionGeneralComponent;
  let fixture: ComponentFixture<AdministracionGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
