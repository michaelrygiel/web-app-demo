import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositProductCurrencyStepComponent } from './recurring-deposit-product-currency-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositProductCurrencyStepComponent', () => {
  let component: RecurringDepositProductCurrencyStepComponent;
  let fixture: ComponentFixture<RecurringDepositProductCurrencyStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositProductCurrencyStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositProductCurrencyStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
