/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortadasComponent } from './portadas.component';

describe('PortadasComponent', () => {
  let component: PortadasComponent;
  let fixture: ComponentFixture<PortadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
