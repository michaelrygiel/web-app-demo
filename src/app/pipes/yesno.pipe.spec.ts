import { TranslateService } from '@ngx-translate/core';
import { YesnoPipe } from './yesno.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('YesnoPipe', () => {
  it('create an instance', () => {
    const pipe = new YesnoPipe(null);
    expect(pipe).toBeTruthy();
  });
});
