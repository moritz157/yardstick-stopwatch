import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringSelectComponent } from './scoring-select.component';

describe('ScoringSelectComponent', () => {
  let component: ScoringSelectComponent;
  let fixture: ComponentFixture<ScoringSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoringSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
