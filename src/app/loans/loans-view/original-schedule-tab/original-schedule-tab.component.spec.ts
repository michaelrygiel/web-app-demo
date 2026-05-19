import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalScheduleTabComponent } from './original-schedule-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('OriginalScheduleTabComponent', () => {
  let component: OriginalScheduleTabComponent;
  let fixture: ComponentFixture<OriginalScheduleTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [OriginalScheduleTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalScheduleTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
