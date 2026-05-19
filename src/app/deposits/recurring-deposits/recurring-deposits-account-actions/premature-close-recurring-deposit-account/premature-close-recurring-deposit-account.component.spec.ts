import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrematureCloseRecurringDepositAccountComponent } from './premature-close-recurring-deposit-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('PrematureCloseRecurringDepositAccountComponent', () => {
  let component: PrematureCloseRecurringDepositAccountComponent;
  let fixture: ComponentFixture<PrematureCloseRecurringDepositAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [PrematureCloseRecurringDepositAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrematureCloseRecurringDepositAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
