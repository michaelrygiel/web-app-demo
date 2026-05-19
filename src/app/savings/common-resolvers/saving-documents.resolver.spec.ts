import { TestBed } from '@angular/core/testing';

import { SavingDocumentsResolver } from './saving-documents.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('SavingDocumentsResolver', () => {
  let resolver: SavingDocumentsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(SavingDocumentsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
