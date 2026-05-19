import { TestBed } from '@angular/core/testing';

import { LoanProductDatatablesResolver } from './loan-product-datatables.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('LoanProductDatatablesResolver', () => {
  let resolver: LoanProductDatatablesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(LoanProductDatatablesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
