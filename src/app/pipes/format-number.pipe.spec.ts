import { FormatNumberPipe } from './format-number.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('FormatNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatNumberPipe(null, null);
    expect(pipe).toBeTruthy();
  });
});
