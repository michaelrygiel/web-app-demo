import { TestBed, inject } from '@angular/core/testing';

import { ProgressBarService } from './progress-bar.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('ProgressBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
  });

  it('should be created', inject([ProgressBarService], (service: ProgressBarService) => {
    expect(service).toBeTruthy();
  }));
});
