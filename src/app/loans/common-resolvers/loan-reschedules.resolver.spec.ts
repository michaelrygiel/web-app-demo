import { TestBed } from '@angular/core/testing';

import { LoanReschedulesResolver } from './loan-reschedules.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('LoanReschedulesResolver', () => {
  let resolver: LoanReschedulesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(LoanReschedulesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
