/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Datos_productoComponent } from './datos_producto.component';

describe('Datos_productoComponent', () => {
  let component: Datos_productoComponent;
  let fixture: ComponentFixture<Datos_productoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datos_productoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datos_productoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
