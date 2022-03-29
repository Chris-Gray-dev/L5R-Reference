import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahoCardComponent } from './maho-card.component';

describe('MahoCardComponent', () => {
  let component: MahoCardComponent;
  let fixture: ComponentFixture<MahoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
