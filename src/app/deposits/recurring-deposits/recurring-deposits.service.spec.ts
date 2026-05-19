import { TestBed } from '@angular/core/testing';

import { RecurringDepositsService } from './recurring-deposits.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('RecurringDepositsService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: RecurringDepositsService = TestBed.inject(RecurringDepositsService);
    expect(service).toBeTruthy();
  });
});
