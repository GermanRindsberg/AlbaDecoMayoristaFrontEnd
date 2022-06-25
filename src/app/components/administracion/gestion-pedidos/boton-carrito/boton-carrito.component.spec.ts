import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCarritoComponent } from './boton-carrito.component';

describe('BotonCarritoComponent', () => {
  let component: BotonCarritoComponent;
  let fixture: ComponentFixture<BotonCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
