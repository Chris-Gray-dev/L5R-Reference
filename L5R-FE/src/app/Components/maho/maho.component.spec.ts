import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahoComponent } from './maho.component';

describe('MahoComponent', () => {
  let component: MahoComponent;
  let fixture: ComponentFixture<MahoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
