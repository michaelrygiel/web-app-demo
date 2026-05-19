import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositAccountTermsStepComponent } from './fixed-deposit-account-terms-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositAccountTermsStepComponent', () => {
  let component: FixedDepositAccountTermsStepComponent;
  let fixture: ComponentFixture<FixedDepositAccountTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositAccountTermsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositAccountTermsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
