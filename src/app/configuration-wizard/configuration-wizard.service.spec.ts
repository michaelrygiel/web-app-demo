import { TestBed } from '@angular/core/testing';

import { ConfigurationWizardService } from './configuration-wizard.service';
import { getTestConfigModule } from '../testing/test-config';

describe('ConfigurationWizardService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: ConfigurationWizardService = TestBed.get(ConfigurationWizardService);
    expect(service).toBeTruthy();
  });
});
