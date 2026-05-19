import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositProductSettingsStepComponent } from './fixed-deposit-product-settings-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositProductSettingsStepComponent', () => {
  let component: FixedDepositProductSettingsStepComponent;
  let fixture: ComponentFixture<FixedDepositProductSettingsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositProductSettingsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositProductSettingsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
