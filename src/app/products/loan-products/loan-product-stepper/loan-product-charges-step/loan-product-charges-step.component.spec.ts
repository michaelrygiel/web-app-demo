import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductChargesStepComponent } from './loan-product-charges-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanProductChargesStepComponent', () => {
  let component: LoanProductChargesStepComponent;
  let fixture: ComponentFixture<LoanProductChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanProductChargesStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductChargesStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
