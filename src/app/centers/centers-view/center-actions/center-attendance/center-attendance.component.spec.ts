import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAttendanceComponent } from './center-attendance.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CenterAttendanceComponent', () => {
  let component: CenterAttendanceComponent;
  let fixture: ComponentFixture<CenterAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CenterAttendanceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterAttendanceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
