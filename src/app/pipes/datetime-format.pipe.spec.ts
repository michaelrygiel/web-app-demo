import { DatetimeFormatPipe } from './datetime-format.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('DatetimeFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new DatetimeFormatPipe(null);
    expect(pipe).toBeTruthy();
  });
});
