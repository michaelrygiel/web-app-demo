import { TestBed } from '@angular/core/testing';

import { SystemService } from './system.service';
import { getTestConfigModule } from '../testing/test-config';

describe('SystemService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: SystemService = TestBed.inject(SystemService);
    expect(service).toBeTruthy();
  });
});
