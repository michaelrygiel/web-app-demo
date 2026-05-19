import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCenterMeetingComponent } from './edit-center-meeting.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditCenterMeetingComponent', () => {
  let component: EditCenterMeetingComponent;
  let fixture: ComponentFixture<EditCenterMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditCenterMeetingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCenterMeetingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
