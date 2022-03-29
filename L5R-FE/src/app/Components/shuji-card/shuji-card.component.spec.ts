import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShujiCardComponent } from './shuji-card.component';

describe('ShujiCardComponent', () => {
  let component: ShujiCardComponent;
  let fixture: ComponentFixture<ShujiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShujiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShujiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
