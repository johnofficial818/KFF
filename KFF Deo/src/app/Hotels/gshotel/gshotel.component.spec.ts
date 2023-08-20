import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GshotelComponent } from './gshotel.component';

describe('GshotelComponent', () => {
  let component: GshotelComponent;
  let fixture: ComponentFixture<GshotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GshotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GshotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
