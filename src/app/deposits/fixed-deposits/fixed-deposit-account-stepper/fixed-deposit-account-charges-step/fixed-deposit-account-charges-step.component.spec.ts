import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositAccountChargesStepComponent } from './fixed-deposit-account-charges-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositAccountChargesStepComponent', () => {
  let component: FixedDepositAccountChargesStepComponent;
  let fixture: ComponentFixture<FixedDepositAccountChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositAccountChargesStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositAccountChargesStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
