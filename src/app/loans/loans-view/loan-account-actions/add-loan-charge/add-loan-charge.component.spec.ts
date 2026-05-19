import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanChargeComponent } from './add-loan-charge.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AddloanchargeComponent', () => {
  let component: AddLoanChargeComponent;
  let fixture: ComponentFixture<AddLoanChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AddLoanChargeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanChargeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
