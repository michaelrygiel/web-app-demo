import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecurringDepositAccountComponent } from './edit-recurring-deposit-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditRecurringDepositAccountComponent', () => {
  let component: EditRecurringDepositAccountComponent;
  let fixture: ComponentFixture<EditRecurringDepositAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditRecurringDepositAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecurringDepositAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
