import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAssignStaffComponent } from './group-assign-staff.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('GroupAssignStaffComponent', () => {
  let component: GroupAssignStaffComponent;
  let fixture: ComponentFixture<GroupAssignStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [GroupAssignStaffComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAssignStaffComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
