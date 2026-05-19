import { SettingsModule } from './settings.module';
import { getTestConfigModule } from '../testing/test-config';

describe('SettingsModule', () => {
  let settingsModule: SettingsModule;

  beforeEach(() => {
    settingsModule = new SettingsModule();
  });

  it('should create an instance', () => {
    expect(settingsModule).toBeTruthy();
  });
});
