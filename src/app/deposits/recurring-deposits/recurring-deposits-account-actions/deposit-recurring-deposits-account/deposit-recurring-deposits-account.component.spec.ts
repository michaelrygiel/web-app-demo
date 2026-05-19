import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositRecurringDepositsAccountComponent } from './deposit-recurring-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('DepositRecurringDepositsAccountComponent', () => {
  let component: DepositRecurringDepositsAccountComponent;
  let fixture: ComponentFixture<DepositRecurringDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DepositRecurringDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositRecurringDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
