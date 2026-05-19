import { TestBed } from '@angular/core/testing';

import { SavingNotesResolver } from './saving-notes.resolver';
import { getTestConfigModule } from '../../testing/test-config';

describe('SavingNotesResolver', () => {
  let resolver: SavingNotesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule(getTestConfigModule());
    resolver = TestBed.inject(SavingNotesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
