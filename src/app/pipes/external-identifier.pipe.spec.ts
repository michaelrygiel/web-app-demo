import { ExternalIdentifierPipe } from './external-identifier.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('ExternalIdentifierPipe', () => {
  it('create an instance', () => {
    const pipe = new ExternalIdentifierPipe();
    expect(pipe).toBeTruthy();
  });
});
