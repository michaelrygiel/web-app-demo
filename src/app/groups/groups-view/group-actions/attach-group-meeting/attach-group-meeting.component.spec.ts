import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachGroupMeetingComponent } from './attach-group-meeting.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AttachGroupMeetingComponent', () => {
  let component: AttachGroupMeetingComponent;
  let fixture: ComponentFixture<AttachGroupMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AttachGroupMeetingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachGroupMeetingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
