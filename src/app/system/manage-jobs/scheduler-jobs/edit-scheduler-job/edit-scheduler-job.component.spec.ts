import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchedulerJobComponent } from './edit-scheduler-job.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditSchedulerJobComponent', () => {
  let component: EditSchedulerJobComponent;
  let fixture: ComponentFixture<EditSchedulerJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditSchedulerJobComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchedulerJobComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
