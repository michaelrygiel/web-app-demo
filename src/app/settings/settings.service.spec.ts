import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { getTestConfigModule } from '../testing/test-config';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: SettingsService = TestBed.inject(SettingsService);
    expect(service).toBeTruthy();
  });
});
