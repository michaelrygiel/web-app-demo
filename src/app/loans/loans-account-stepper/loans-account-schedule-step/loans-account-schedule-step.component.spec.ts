import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountScheduleStepComponent } from './loans-account-schedule-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoansAccountScheduleStepComponent', () => {
  let component: LoansAccountScheduleStepComponent;
  let fixture: ComponentFixture<LoansAccountScheduleStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansAccountScheduleStepComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountScheduleStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
