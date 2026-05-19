import { TestBed } from '@angular/core/testing';

import { LoansService } from './loans.service';
import { getTestConfigModule } from '../testing/test-config';

describe('LoansService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: LoansService = TestBed.inject(LoansService);
    expect(service).toBeTruthy();
  });
});
