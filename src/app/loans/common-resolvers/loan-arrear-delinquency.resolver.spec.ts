import { TestBed } from '@angular/core/testing';

import { LoanArrearDelinquencyResolver } from './loan-arrear-delinquency.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('LoanArrearDelinquencyResolver', () => {
  let resolver: LoanArrearDelinquencyResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(LoanArrearDelinquencyResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
