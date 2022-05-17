import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqueFilterComponent } from './technique-filter.component';

describe('TechniqueFilterComponent', () => {
  let component: TechniqueFilterComponent;
  let fixture: ComponentFixture<TechniqueFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechniqueFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniqueFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
