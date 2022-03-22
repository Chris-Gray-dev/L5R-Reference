import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KihoComponent } from './kiho.component';

describe('KihoComponent', () => {
  let component: KihoComponent;
  let fixture: ComponentFixture<KihoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KihoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KihoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
