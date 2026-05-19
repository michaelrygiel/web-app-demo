import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccountAssignStaffComponent } from './savings-account-assign-staff.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SavingsAccountAssignStaffComponent', () => {
  let component: SavingsAccountAssignStaffComponent;
  let fixture: ComponentFixture<SavingsAccountAssignStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsAccountAssignStaffComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAccountAssignStaffComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
