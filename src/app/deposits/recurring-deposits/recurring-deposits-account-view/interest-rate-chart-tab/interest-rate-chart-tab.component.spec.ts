import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateChartTabComponent } from './interest-rate-chart-tab.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('InterestRateChartTabComponent', () => {
  let component: InterestRateChartTabComponent;
  let fixture: ComponentFixture<InterestRateChartTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [InterestRateChartTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestRateChartTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
