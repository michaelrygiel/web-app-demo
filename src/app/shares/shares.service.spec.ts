import { TestBed } from '@angular/core/testing';

import { SharesService } from './shares.service';
import { getTestConfigModule } from '../testing/test-config';

describe('SharesService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: SharesService = TestBed.inject(SharesService);
    expect(service).toBeTruthy();
  });
});
