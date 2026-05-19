import { SystemModule } from './system.module';
import { getTestConfigModule } from '../testing/test-config';

describe('SystemModule', () => {
  let systemModule: SystemModule;

  beforeEach(() => {
    systemModule = new SystemModule();
  });

  it('should create an instance', () => {
    expect(systemModule).toBeTruthy();
  });
});
