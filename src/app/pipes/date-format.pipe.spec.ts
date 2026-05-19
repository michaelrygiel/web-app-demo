import { TestBed, waitForAsync } from '@angular/core/testing';
import { SettingsService } from 'app/settings/settings.service';
import { DateFormatPipe } from './date-format.pipe';
import { getTestConfigModule } from '../testing/test-config';

describe('DateFormatPipe', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(getTestConfigModule()).compileComponents();
  }));

  it('create an instance', () => {
    const pipe = new DateFormatPipe(new SettingsService(null, null));
    expect(pipe).toBeTruthy();
  });
});
