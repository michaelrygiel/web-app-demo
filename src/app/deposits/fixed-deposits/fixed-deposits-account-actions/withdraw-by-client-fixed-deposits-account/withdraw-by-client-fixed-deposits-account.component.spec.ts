import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawByClientFixedDepositsAccountComponent } from './withdraw-by-client-fixed-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('WithdrawByClientFixedDepositsAccountComponent', () => {
  let component: WithdrawByClientFixedDepositsAccountComponent;
  let fixture: ComponentFixture<WithdrawByClientFixedDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WithdrawByClientFixedDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawByClientFixedDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
