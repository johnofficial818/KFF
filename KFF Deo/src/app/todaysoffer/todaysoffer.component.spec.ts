import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysofferComponent } from './todaysoffer.component';

describe('TodaysofferComponent', () => {
  let component: TodaysofferComponent;
  let fixture: ComponentFixture<TodaysofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
