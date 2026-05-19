import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAssignmentHistoryComponent } from './staff-assignment-history.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('StaffAssignmentHistoryComponent', () => {
  let component: StaffAssignmentHistoryComponent;
  let fixture: ComponentFixture<StaffAssignmentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [StaffAssignmentHistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAssignmentHistoryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
