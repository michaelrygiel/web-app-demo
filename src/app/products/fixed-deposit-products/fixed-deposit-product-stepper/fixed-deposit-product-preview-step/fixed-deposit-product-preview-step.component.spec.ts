import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositProductPreviewStepComponent } from './fixed-deposit-product-preview-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositProductPreviewStepComponent', () => {
  let component: FixedDepositProductPreviewStepComponent;
  let fixture: ComponentFixture<FixedDepositProductPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositProductPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositProductPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
