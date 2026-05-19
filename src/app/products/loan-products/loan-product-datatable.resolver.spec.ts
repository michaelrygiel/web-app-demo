import { TestBed } from '@angular/core/testing';

import { LoanProductDatatableResolver } from './loan-product-datatable.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('LoanProductDatatableResolver', () => {
  let resolver: LoanProductDatatableResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(LoanProductDatatableResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
