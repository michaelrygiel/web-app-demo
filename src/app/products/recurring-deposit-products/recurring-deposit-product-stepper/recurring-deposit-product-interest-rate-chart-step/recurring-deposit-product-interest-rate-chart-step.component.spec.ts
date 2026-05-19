import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositProductInterestRateChartStepComponent } from './recurring-deposit-product-interest-rate-chart-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositProductInterestRateChartStepComponent', () => {
  let component: RecurringDepositProductInterestRateChartStepComponent;
  let fixture: ComponentFixture<RecurringDepositProductInterestRateChartStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositProductInterestRateChartStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositProductInterestRateChartStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
