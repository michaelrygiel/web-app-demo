import { TestBed } from '@angular/core/testing';

import { SavingsService } from './savings.service';
import { getTestConfigModule } from '../testing/test-config';

describe('SavingsService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: SavingsService = TestBed.inject(SavingsService);
    expect(service).toBeTruthy();
  });
});
