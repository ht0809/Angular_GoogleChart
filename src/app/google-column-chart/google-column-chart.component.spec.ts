import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleColumnChartComponent } from './google-column-chart.component';

describe('GoogleColumnChartComponent', () => {
  let component: GoogleColumnChartComponent;
  let fixture: ComponentFixture<GoogleColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleColumnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
