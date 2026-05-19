import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAttendanceComponent } from './group-attendance.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('GroupAttendanceComponent', () => {
  let component: GroupAttendanceComponent;
  let fixture: ComponentFixture<GroupAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [GroupAttendanceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAttendanceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
