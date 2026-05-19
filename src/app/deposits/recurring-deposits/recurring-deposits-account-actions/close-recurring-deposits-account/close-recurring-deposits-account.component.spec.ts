import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseRecurringDepositsAccountComponent } from './close-recurring-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CloseRecurringDepositsAccountComponent', () => {
  let component: CloseRecurringDepositsAccountComponent;
  let fixture: ComponentFixture<CloseRecurringDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CloseRecurringDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseRecurringDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
