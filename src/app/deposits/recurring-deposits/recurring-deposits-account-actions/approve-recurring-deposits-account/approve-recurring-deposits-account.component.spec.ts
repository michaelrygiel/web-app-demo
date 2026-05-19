import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRecurringDepositsAccountComponent } from './approve-recurring-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ApproveRecurringDepositsAccountComponent', () => {
  let component: ApproveRecurringDepositsAccountComponent;
  let fixture: ComponentFixture<ApproveRecurringDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ApproveRecurringDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRecurringDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
