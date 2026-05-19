import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositsAccountActionsComponent } from './recurring-deposits-account-actions.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('RecurringDepositsAccountActionsComponent', () => {
  let component: RecurringDepositsAccountActionsComponent;
  let fixture: ComponentFixture<RecurringDepositsAccountActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositsAccountActionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositsAccountActionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
