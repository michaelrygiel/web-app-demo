import { TestBed } from '@angular/core/testing';

import { FormGroupService } from './form-group.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('FormGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule(getTestConfigModule()));

  it('should be created', () => {
    const service: FormGroupService = TestBed.inject(FormGroupService);
    expect(service).toBeTruthy();
  });
});
