import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositProductAccountingStepComponent } from './recurring-deposit-product-accounting-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositProductAccountingStepComponent', () => {
  let component: RecurringDepositProductAccountingStepComponent;
  let fixture: ComponentFixture<RecurringDepositProductAccountingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositProductAccountingStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositProductAccountingStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
