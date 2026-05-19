import { ChargesFilterPipe } from './charges-filter.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('ChargesFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ChargesFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
