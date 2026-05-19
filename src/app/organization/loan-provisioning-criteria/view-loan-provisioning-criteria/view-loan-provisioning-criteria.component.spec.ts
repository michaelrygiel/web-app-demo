import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanProvisioningCriteriaComponent } from './view-loan-provisioning-criteria.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewLoanProvisioningCriteriaComponent', () => {
  let component: ViewLoanProvisioningCriteriaComponent;
  let fixture: ComponentFixture<ViewLoanProvisioningCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewLoanProvisioningCriteriaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanProvisioningCriteriaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
