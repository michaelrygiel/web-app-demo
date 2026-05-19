import { TestBed, inject } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('AlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
