import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosProductoComponent } from './fotos-producto.component';

describe('FotosProductoComponent', () => {
  let component: FotosProductoComponent;
  let fixture: ComponentFixture<FotosProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
