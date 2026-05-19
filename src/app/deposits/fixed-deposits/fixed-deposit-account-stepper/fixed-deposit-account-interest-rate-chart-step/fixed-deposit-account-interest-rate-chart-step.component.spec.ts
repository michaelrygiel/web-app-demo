import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositAccountInterestRateChartStepComponent } from './fixed-deposit-account-interest-rate-chart-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositAccountInterestRateChartStepComponent', () => {
  let component: FixedDepositAccountInterestRateChartStepComponent;
  let fixture: ComponentFixture<FixedDepositAccountInterestRateChartStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositAccountInterestRateChartStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositAccountInterestRateChartStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
