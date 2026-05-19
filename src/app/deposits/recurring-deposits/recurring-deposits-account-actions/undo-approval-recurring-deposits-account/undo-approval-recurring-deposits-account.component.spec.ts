import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoApprovalRecurringDepositsAccountComponent } from './undo-approval-recurring-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('UndoApprovalRecurringDepositsAccountComponent', () => {
  let component: UndoApprovalRecurringDepositsAccountComponent;
  let fixture: ComponentFixture<UndoApprovalRecurringDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UndoApprovalRecurringDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoApprovalRecurringDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
