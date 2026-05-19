import { TestBed } from '@angular/core/testing';

import { SavingProductDatatableResolver } from './saving-product-datatable.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('SavingProductDatatableResolver', () => {
  let resolver: SavingProductDatatableResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(SavingProductDatatableResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
