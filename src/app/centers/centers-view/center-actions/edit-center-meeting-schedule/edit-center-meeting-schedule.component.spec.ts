import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCenterMeetingScheduleComponent } from './edit-center-meeting-schedule.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditCenterMeetingScheduleComponent', () => {
  let component: EditCenterMeetingScheduleComponent;
  let fixture: ComponentFixture<EditCenterMeetingScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditCenterMeetingScheduleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCenterMeetingScheduleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
