import { TestBed } from '@angular/core/testing';

import { ManageExternalEventsResolver } from './manage-external-events.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageExternalEventsResolver', () => {
  let resolver: ManageExternalEventsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(ManageExternalEventsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
