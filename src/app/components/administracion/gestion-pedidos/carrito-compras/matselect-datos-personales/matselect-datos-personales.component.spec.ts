import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatselectDatosPersonalesComponent } from './matselect-datos-personales.component';

describe('MatselectDatosPersonalesComponent', () => {
  let component: MatselectDatosPersonalesComponent;
  let fixture: ComponentFixture<MatselectDatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatselectDatosPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatselectDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
