import { TestBed } from '@angular/core/testing';

import { OrganizationService } from './organization.service';
import { getTestConfigModule } from '../testing/test-config';

describe('OrganizationService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: OrganizationService = TestBed.inject(OrganizationService);
    expect(service).toBeTruthy();
  });
});
