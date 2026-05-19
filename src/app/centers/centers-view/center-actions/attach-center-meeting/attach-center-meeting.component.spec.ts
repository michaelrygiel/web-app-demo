import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachCenterMeetingComponent } from './attach-center-meeting.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AttachCenterMeetingComponent', () => {
  let component: AttachCenterMeetingComponent;
  let fixture: ComponentFixture<AttachCenterMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AttachCenterMeetingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachCenterMeetingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
