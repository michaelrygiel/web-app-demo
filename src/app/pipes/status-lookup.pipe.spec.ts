import { StatusLookupPipe } from './status-lookup.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('StatusLookupPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusLookupPipe();
    expect(pipe).toBeTruthy();
  });
});
