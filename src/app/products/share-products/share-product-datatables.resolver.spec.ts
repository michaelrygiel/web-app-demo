import { TestBed } from '@angular/core/testing';

import { ShareProductDatatablesResolver } from './share-product-datatables.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('ShareProductDatatablesResolver', () => {
  let resolver: ShareProductDatatablesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(ShareProductDatatablesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
