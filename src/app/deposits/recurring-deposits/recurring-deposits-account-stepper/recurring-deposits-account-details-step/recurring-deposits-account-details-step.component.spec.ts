import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositsAccountDetailsStepComponent } from './recurring-deposits-account-details-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositsAccountDetailsStepComponent', () => {
  let component: RecurringDepositsAccountDetailsStepComponent;
  let fixture: ComponentFixture<RecurringDepositsAccountDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositsAccountDetailsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositsAccountDetailsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
