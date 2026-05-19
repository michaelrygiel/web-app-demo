import { TestBed } from '@angular/core/testing';

import { SavingProductDatatablesResolver } from './saving-product-datatables.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('SavingProductDatatablesResolver', () => {
  let resolver: SavingProductDatatablesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(SavingProductDatatablesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
