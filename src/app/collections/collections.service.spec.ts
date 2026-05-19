import { TestBed } from '@angular/core/testing';

import { CollectionsService } from './collections.service';
import { getTestConfigModule } from '../testing/test-config';

describe('CollectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: CollectionsService = TestBed.inject(CollectionsService);
    expect(service).toBeTruthy();
  });
});
