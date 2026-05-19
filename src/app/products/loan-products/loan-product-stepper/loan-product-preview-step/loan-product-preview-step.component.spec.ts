import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductPreviewStepComponent } from './loan-product-preview-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanProductPreviewStepComponent', () => {
  let component: LoanProductPreviewStepComponent;
  let fixture: ComponentFixture<LoanProductPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanProductPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
