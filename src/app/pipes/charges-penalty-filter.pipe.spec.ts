import { ChargesPenaltyFilterPipe } from './charges-penalty-filter.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('ChargesPenaltyFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ChargesPenaltyFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
