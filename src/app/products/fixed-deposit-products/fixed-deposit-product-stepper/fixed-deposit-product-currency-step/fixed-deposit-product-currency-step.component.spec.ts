import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositProductCurrencyStepComponent } from './fixed-deposit-product-currency-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositProductCurrencyStepComponent', () => {
  let component: FixedDepositProductCurrencyStepComponent;
  let fixture: ComponentFixture<FixedDepositProductCurrencyStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositProductCurrencyStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositProductCurrencyStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
