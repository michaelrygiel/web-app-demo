import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchedulerJobComponent } from './view-scheduler-job.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ViewSchedulerJobComponent', () => {
  let component: ViewSchedulerJobComponent;
  let fixture: ComponentFixture<ViewSchedulerJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewSchedulerJobComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSchedulerJobComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
