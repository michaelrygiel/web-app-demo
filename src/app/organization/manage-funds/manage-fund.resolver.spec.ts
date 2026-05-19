import { TestBed } from '@angular/core/testing';

import { ManageFundResolver } from './manage-fund.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageFundResolver', () => {
  let resolver: ManageFundResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(ManageFundResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
