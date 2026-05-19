import { LoansRoutingModule } from './loans-routing.module';
import { getTestConfigModule } from '../testing/test-config';

describe('LoansRoutingModule', () => {
  let loansRoutingModule: LoansRoutingModule;

  beforeEach(() => {
    loansRoutingModule = new LoansRoutingModule();
  });

  it('should create an instance', () => {
    expect(loansRoutingModule).toBeTruthy();
  });
});
