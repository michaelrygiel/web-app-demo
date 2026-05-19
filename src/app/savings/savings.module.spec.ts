import { SavingsModule } from './savings.module';
import { getTestConfigModule } from '../testing/test-config';

describe('SavingsModule', () => {
  let savingsModule: SavingsModule;

  beforeEach(() => {
    savingsModule = new SavingsModule();
  });

  it('should create an instance', () => {
    expect(savingsModule).toBeTruthy();
  });
});
