import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotificationComponent } from './edit-notification.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditNotificationComponent', () => {
  let component: EditNotificationComponent;
  let fixture: ComponentFixture<EditNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditNotificationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNotificationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
