import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositProductSettingsStepComponent } from './recurring-deposit-product-settings-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositProductSettingsStepComponent', () => {
  let component: RecurringDepositProductSettingsStepComponent;
  let fixture: ComponentFixture<RecurringDepositProductSettingsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositProductSettingsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositProductSettingsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
