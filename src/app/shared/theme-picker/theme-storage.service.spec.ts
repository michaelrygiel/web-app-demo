import { TestBed, inject } from '@angular/core/testing';

import { ThemeStorageService } from './theme-storage.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('ThemeStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
  });

  it('should be created', inject([ThemeStorageService], (service: ThemeStorageService) => {
    expect(service).toBeTruthy();
  }));
});
