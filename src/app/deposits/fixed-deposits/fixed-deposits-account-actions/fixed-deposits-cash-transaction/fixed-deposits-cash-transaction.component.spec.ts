import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositsCashTransactionComponent } from './fixed-deposits-cash-transaction.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositsCashTransactionComponent', () => {
  let component: FixedDepositsCashTransactionComponent;
  let fixture: ComponentFixture<FixedDepositsCashTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositsCashTransactionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FixedDepositsCashTransactionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
