import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositsAccountTermsStepComponent } from './recurring-deposits-account-terms-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositsAccountTermsStepComponent', () => {
  let component: RecurringDepositsAccountTermsStepComponent;
  let fixture: ComponentFixture<RecurringDepositsAccountTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositsAccountTermsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositsAccountTermsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
