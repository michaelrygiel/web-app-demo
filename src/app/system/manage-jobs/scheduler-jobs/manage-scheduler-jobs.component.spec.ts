import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSchedulerJobsComponent } from './manage-scheduler-jobs.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ManageSchedulerJobsComponent', () => {
  let component: ManageSchedulerJobsComponent;
  let fixture: ComponentFixture<ManageSchedulerJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageSchedulerJobsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSchedulerJobsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
