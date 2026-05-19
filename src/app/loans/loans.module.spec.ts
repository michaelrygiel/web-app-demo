import { LoansModule } from './loans.module';
import { getTestConfigModule } from '../testing/test-config';

describe('LoansModule', () => {
  let loansModule: LoansModule;

  beforeEach(() => {
    loansModule = new LoansModule();
  });

  it('should create an instance', () => {
    expect(loansModule).toBeTruthy();
  });
});
