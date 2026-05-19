import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRepaymentScheduleComponent } from './edit-repayment-schedule.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditRepaymentScheduleComponent', () => {
  let component: EditRepaymentScheduleComponent;
  let fixture: ComponentFixture<EditRepaymentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditRepaymentScheduleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRepaymentScheduleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
