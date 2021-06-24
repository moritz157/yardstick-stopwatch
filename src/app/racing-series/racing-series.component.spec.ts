import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingSeriesComponent } from './racing-series.component';

describe('RacingSeriesComponent', () => {
  let component: RacingSeriesComponent;
  let fixture: ComponentFixture<RacingSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacingSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
