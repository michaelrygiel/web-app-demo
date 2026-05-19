import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccountTransactionsComponent } from './savings-account-transactions.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('TransactionsComponent', () => {
  let component: SavingsAccountTransactionsComponent;
  let fixture: ComponentFixture<SavingsAccountTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsAccountTransactionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAccountTransactionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
