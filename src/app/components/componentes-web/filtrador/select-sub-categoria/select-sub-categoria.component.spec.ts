import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSubCategoriaComponent } from './select-sub-categoria.component';

describe('SelectSubCategoriaComponent', () => {
  let component: SelectSubCategoriaComponent;
  let fixture: ComponentFixture<SelectSubCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSubCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSubCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
