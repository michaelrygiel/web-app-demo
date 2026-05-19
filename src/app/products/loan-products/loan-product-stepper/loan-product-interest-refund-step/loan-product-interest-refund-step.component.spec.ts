import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductInterestRefundStepComponent } from './loan-product-interest-refund-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanProductInterestRefundStepComponent', () => {
  let component: LoanProductInterestRefundStepComponent;
  let fixture: ComponentFixture<LoanProductInterestRefundStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanProductInterestRefundStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductInterestRefundStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
