import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositProductAccountingStepComponent } from './fixed-deposit-product-accounting-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositProductAccountingStepComponent', () => {
  let component: FixedDepositProductAccountingStepComponent;
  let fixture: ComponentFixture<FixedDepositProductAccountingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositProductAccountingStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositProductAccountingStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
