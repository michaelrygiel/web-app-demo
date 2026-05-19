import { TestBed, inject } from '@angular/core/testing';

import { AccountingService } from './accounting.service';
import { getTestConfigModule } from '../testing/test-config';

describe('AccountingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
  });

  it('should be created', inject([AccountingService], (service: AccountingService) => {
    expect(service).toBeTruthy();
  }));
});
