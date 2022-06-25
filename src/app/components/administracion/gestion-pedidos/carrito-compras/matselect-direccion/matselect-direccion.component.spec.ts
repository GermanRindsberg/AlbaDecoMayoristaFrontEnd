import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatselectDireccionComponent } from './matselect-direccion.component';

describe('MatselectDireccionComponent', () => {
  let component: MatselectDireccionComponent;
  let fixture: ComponentFixture<MatselectDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatselectDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatselectDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
