import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositAccountSettingsStepComponent } from './fixed-deposit-account-settings-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositAccountSettingsStepComponent', () => {
  let component: FixedDepositAccountSettingsStepComponent;
  let fixture: ComponentFixture<FixedDepositAccountSettingsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositAccountSettingsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositAccountSettingsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
