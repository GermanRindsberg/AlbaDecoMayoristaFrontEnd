import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFotoGrandeComponent } from './modal-foto-grande.component';

describe('ModalFotoGrandeComponent', () => {
  let component: ModalFotoGrandeComponent;
  let fixture: ComponentFixture<ModalFotoGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFotoGrandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFotoGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
