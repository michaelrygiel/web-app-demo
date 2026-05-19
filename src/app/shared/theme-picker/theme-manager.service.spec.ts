import { TestBed, inject } from '@angular/core/testing';

import { ThemeManagerService } from './theme-manager.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('ThemeManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
  });

  it('should be created', inject([ThemeManagerService], (service: ThemeManagerService) => {
    expect(service).toBeTruthy();
  }));
});
