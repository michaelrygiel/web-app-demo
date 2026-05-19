import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecurringDepositsAccountComponent } from './create-recurring-deposits-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateRecurringDepositsAccountComponent', () => {
  let component: CreateRecurringDepositsAccountComponent;
  let fixture: ComponentFixture<CreateRecurringDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateRecurringDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecurringDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
