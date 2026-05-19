import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowJobsComponent } from './workflow-jobs.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('WorkflowJobsComponent', () => {
  let component: WorkflowJobsComponent;
  let fixture: ComponentFixture<WorkflowJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WorkflowJobsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowJobsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
