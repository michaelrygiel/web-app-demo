import { TestBed } from '@angular/core/testing';

import { IdleTimeoutService } from './idle-timeout.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('IdleTimeoutService', () => {
  let service: IdleTimeoutService;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    service = TestBed.inject(IdleTimeoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
