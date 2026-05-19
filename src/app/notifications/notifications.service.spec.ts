import { TestBed } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';
import { getTestConfigModule } from '../testing/test-config';

describe('NotificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: NotificationsService = TestBed.inject(NotificationsService);
    expect(service).toBeTruthy();
  });
});
