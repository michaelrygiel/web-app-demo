import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupMeetingComponent } from './edit-group-meeting.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditGroupMeetingComponent', () => {
  let component: EditGroupMeetingComponent;
  let fixture: ComponentFixture<EditGroupMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditGroupMeetingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupMeetingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
