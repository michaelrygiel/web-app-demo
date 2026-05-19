import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccountUnassignStaffComponent } from './savings-account-unassign-staff.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SavingsAccountUnassignStaffComponent', () => {
  let component: SavingsAccountUnassignStaffComponent;
  let fixture: ComponentFixture<SavingsAccountUnassignStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsAccountUnassignStaffComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAccountUnassignStaffComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
