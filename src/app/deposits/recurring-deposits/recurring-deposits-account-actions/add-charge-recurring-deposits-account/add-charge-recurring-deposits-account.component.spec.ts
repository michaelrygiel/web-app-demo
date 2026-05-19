import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChargeRecurringDepositsAccountComponent } from './add-charge-recurring-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AddChargeRecurringDepositsAccountComponent', () => {
  let component: AddChargeRecurringDepositsAccountComponent;
  let fixture: ComponentFixture<AddChargeRecurringDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AddChargeRecurringDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChargeRecurringDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
