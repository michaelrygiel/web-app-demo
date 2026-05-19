import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { getTestConfigModule } from '../testing/test-config';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
