import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KihoCardComponent } from './kiho-card.component';

describe('KihoCardComponent', () => {
  let component: KihoCardComponent;
  let fixture: ComponentFixture<KihoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KihoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KihoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
