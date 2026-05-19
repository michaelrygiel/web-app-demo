import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectRecurringDepositsAccountComponent } from './reject-recurring-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RejectRecurringDepositsAccountComponent', () => {
  let component: RejectRecurringDepositsAccountComponent;
  let fixture: ComponentFixture<RejectRecurringDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RejectRecurringDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectRecurringDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
