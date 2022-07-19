/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VarianteComponent } from './variante.component';

describe('VarianteComponent', () => {
  let component: VarianteComponent;
  let fixture: ComponentFixture<VarianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
