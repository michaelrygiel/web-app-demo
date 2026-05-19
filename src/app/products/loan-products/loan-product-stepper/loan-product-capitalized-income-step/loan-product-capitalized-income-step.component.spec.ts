import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductCapitalizedIncomeStepComponent } from './loan-product-capitalized-income-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanProductCapitalizedIncomeStepComponent', () => {
  let component: LoanProductCapitalizedIncomeStepComponent;
  let fixture: ComponentFixture<LoanProductCapitalizedIncomeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanProductCapitalizedIncomeStepComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanProductCapitalizedIncomeStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
