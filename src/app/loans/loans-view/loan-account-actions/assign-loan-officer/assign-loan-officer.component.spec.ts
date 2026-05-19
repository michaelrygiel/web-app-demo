import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLoanOfficerComponent } from './assign-loan-officer.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AssignLoanOfficerComponent', () => {
  let component: AssignLoanOfficerComponent;
  let fixture: ComponentFixture<AssignLoanOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AssignLoanOfficerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignLoanOfficerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
