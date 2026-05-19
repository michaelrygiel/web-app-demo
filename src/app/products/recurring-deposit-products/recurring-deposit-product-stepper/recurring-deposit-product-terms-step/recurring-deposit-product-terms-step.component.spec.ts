import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositProductTermsStepComponent } from './recurring-deposit-product-terms-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositProductTermsStepComponent', () => {
  let component: RecurringDepositProductTermsStepComponent;
  let fixture: ComponentFixture<RecurringDepositProductTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositProductTermsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositProductTermsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
