import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReghotelsComponent } from './reghotels.component';

describe('ReghotelsComponent', () => {
  let component: ReghotelsComponent;
  let fixture: ComponentFixture<ReghotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReghotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReghotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
