import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductPaymentStrategyStepComponent } from './loan-product-payment-strategy-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanProductPaymentStrategyStepComponent', () => {
  let component: LoanProductPaymentStrategyStepComponent;
  let fixture: ComponentFixture<LoanProductPaymentStrategyStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanProductPaymentStrategyStepComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductPaymentStrategyStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
