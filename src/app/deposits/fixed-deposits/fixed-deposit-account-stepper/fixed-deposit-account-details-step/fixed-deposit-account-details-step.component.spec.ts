import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositAccountDetailsStepComponent } from './fixed-deposit-account-details-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositAccountDetailsStepComponent', () => {
  let component: FixedDepositAccountDetailsStepComponent;
  let fixture: ComponentFixture<FixedDepositAccountDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositAccountDetailsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositAccountDetailsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
