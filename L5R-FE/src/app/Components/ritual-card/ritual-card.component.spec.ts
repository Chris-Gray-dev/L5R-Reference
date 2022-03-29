import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitualCardComponent } from './ritual-card.component';

describe('RitualCardComponent', () => {
  let component: RitualCardComponent;
  let fixture: ComponentFixture<RitualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RitualCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RitualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
