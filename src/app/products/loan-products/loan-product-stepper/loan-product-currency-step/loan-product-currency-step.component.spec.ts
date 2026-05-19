import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductCurrencyStepComponent } from './loan-product-currency-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanProductCurrencyStepComponent', () => {
  let component: LoanProductCurrencyStepComponent;
  let fixture: ComponentFixture<LoanProductCurrencyStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanProductCurrencyStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductCurrencyStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
