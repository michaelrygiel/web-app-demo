import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositProductPreviewStepComponent } from './recurring-deposit-product-preview-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositProductPreviewStepComponent', () => {
  let component: RecurringDepositProductPreviewStepComponent;
  let fixture: ComponentFixture<RecurringDepositProductPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositProductPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositProductPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
