import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupMeetingScheduleComponent } from './edit-group-meeting-schedule.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditGroupMeetingScheduleComponent', () => {
  let component: EditGroupMeetingScheduleComponent;
  let fixture: ComponentFixture<EditGroupMeetingScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditGroupMeetingScheduleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupMeetingScheduleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
