import { RecurringDepositsModule } from './recurring-deposits.module';
import { getTestConfigModule } from '../../testing/test-config';

describe('RecurringDepositsModule', () => {
  let recurringDepositsModule: RecurringDepositsModule;

  beforeEach(() => {
    recurringDepositsModule = new RecurringDepositsModule();
  });

  it('should create an instance', () => {
    expect(recurringDepositsModule).toBeTruthy();
  });
});
