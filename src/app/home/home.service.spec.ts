import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import { getTestConfigModule } from '../testing/test-config';

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: HomeService = TestBed.inject(HomeService);
    expect(service).toBeTruthy();
  });
});
