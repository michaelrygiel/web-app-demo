import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentScheduleTabComponent } from './repayment-schedule-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('RepaymentScheduleTabComponent', () => {
  let component: RepaymentScheduleTabComponent;
  let fixture: ComponentFixture<RepaymentScheduleTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RepaymentScheduleTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaymentScheduleTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
