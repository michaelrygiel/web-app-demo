import { FindPipe } from './find.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('FindPipe', () => {
  it('create an instance', () => {
    const pipe = new FindPipe();
    expect(pipe).toBeTruthy();
  });
});
