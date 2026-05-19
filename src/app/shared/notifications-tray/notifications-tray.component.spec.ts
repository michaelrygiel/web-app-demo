import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsTrayComponent } from './notifications-tray.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('NotificationsTrayComponent', () => {
  let component: NotificationsTrayComponent;
  let fixture: ComponentFixture<NotificationsTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [NotificationsTrayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsTrayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
