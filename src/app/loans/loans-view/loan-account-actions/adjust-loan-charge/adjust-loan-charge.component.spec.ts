import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustLoanChargeComponent } from './adjust-loan-charge.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AdjustLoanChargeComponent', () => {
  let component: AdjustLoanChargeComponent;
  let fixture: ComponentFixture<AdjustLoanChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AdjustLoanChargeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustLoanChargeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
