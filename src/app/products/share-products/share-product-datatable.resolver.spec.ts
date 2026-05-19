import { TestBed } from '@angular/core/testing';

import { ShareProductDatatableResolver } from './share-product-datatable.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('ShareProductDatatableResolver', () => {
  let resolver: ShareProductDatatableResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(ShareProductDatatableResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
