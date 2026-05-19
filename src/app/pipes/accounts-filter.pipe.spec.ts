import { AccountsFilterPipe } from './accounts-filter.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('AccountsFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new AccountsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
