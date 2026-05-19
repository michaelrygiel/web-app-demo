import { UrlToStringPipe } from './url-to-string.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('UrlToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
