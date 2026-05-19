import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCreditBalanceRefundComponent } from './loan-credit-balance-refund.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanCreditBalanceRefundComponent', () => {
  let component: LoanCreditBalanceRefundComponent;
  let fixture: ComponentFixture<LoanCreditBalanceRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanCreditBalanceRefundComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCreditBalanceRefundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
