import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFamiliaComponent } from './select-familia.component';

describe('SelectFamiliaComponent', () => {
  let component: SelectFamiliaComponent;
  let fixture: ComponentFixture<SelectFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
