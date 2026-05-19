import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRescheduleComponent } from './loan-reschedule.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanRescheduleComponent', () => {
  let component: LoanRescheduleComponent;
  let fixture: ComponentFixture<LoanRescheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanRescheduleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRescheduleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
