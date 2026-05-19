import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDiagramComponent } from './workflow-diagram.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('WorkflowDiagramComponent', () => {
  let component: WorkflowDiagramComponent;
  let fixture: ComponentFixture<WorkflowDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WorkflowDiagramComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDiagramComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
