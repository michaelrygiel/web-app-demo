import { TestBed } from '@angular/core/testing';

import { WorkflowJobResolver } from './workflow-jobs.resolver';
import { getTestConfigModule } from '../../../testing/test-config';

describe('WorkflowJobResolver', () => {
  let resolver: WorkflowJobResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(WorkflowJobResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
