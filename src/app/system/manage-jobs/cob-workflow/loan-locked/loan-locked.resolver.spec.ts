import { TestBed } from '@angular/core/testing';

import { LoanLockedResolver } from './loan-locked.resolver';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanLockedResolver', () => {
  let resolver: LoanLockedResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(LoanLockedResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
