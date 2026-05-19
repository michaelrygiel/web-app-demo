import { TestBed } from '@angular/core/testing';

import { OfficeTreeService } from './office-tree-service.service';
import { getTestConfigModule } from '../../testing/test-config';

describe('OfficeTreeServiceService', () => {
  let service: OfficeTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    service = TestBed.inject(OfficeTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
