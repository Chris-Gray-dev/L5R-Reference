import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShujiComponent } from './shuji.component';

describe('ShujiComponent', () => {
  let component: ShujiComponent;
  let fixture: ComponentFixture<ShujiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShujiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShujiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
