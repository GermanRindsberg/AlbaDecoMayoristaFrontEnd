import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonUserComponent } from './boton-user.component';

describe('BotonUserComponent', () => {
  let component: BotonUserComponent;
  let fixture: ComponentFixture<BotonUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
