import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatselectPasosComponent } from './matselect-pasos.component';

describe('MatselectPasosComponent', () => {
  let component: MatselectPasosComponent;
  let fixture: ComponentFixture<MatselectPasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatselectPasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatselectPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
