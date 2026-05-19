import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductSummaryComponent } from './loan-product-summary.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanProductSummaryComponent', () => {
  let component: LoanProductSummaryComponent;
  let fixture: ComponentFixture<LoanProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanProductSummaryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanProductSummaryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
