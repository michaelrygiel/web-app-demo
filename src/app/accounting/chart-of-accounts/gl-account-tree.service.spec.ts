import { TestBed, inject } from '@angular/core/testing';

import { GlAccountTreeService } from './gl-account-tree.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('GlAccountTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
  });

  it('should be created', inject([GlAccountTreeService], (service: GlAccountTreeService) => {
    expect(service).toBeTruthy();
  }));
});
