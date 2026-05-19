import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositProductChargesStepComponent } from './fixed-deposit-product-charges-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositProductChargesStepComponent', () => {
  let component: FixedDepositProductChargesStepComponent;
  let fixture: ComponentFixture<FixedDepositProductChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositProductChargesStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositProductChargesStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
