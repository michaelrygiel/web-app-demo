import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { getTestConfigModule } from '../testing/test-config';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: SearchService = TestBed.inject(SearchService);
    expect(service).toBeTruthy();
  });
});
