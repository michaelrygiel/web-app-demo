import { TestBed } from '@angular/core/testing';

import { TasksService } from './tasks.service';
import { getTestConfigModule } from '../testing/test-config';

describe('TasksService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: TasksService = TestBed.inject(TasksService);
    expect(service).toBeTruthy();
  });
});
