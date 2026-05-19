import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawByClientSavingsAccountComponent } from './withdraw-by-client-savings-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('WithdrawByClientSavingsAccountComponent', () => {
  let component: WithdrawByClientSavingsAccountComponent;
  let fixture: ComponentFixture<WithdrawByClientSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WithdrawByClientSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawByClientSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
