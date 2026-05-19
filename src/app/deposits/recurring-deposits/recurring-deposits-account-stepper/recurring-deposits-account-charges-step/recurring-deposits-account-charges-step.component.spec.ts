import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositsAccountChargesStepComponent } from './recurring-deposits-account-charges-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositsAccountChargesStepComponent', () => {
  let component: RecurringDepositsAccountChargesStepComponent;
  let fixture: ComponentFixture<RecurringDepositsAccountChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositsAccountChargesStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositsAccountChargesStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
