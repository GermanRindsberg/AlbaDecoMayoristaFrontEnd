import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGeneralPedidosComponent } from './gestion-general-pedidos.component';

describe('GestionGeneralPedidosComponent', () => {
  let component: GestionGeneralPedidosComponent;
  let fixture: ComponentFixture<GestionGeneralPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionGeneralPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionGeneralPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
