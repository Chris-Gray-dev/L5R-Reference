import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocationCardComponent } from './invocation-card.component';

describe('InvocationCardComponent', () => {
  let component: InvocationCardComponent;
  let fixture: ComponentFixture<InvocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvocationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
