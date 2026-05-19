import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleLoanTabComponent } from './reschedule-loan-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('RescheduleLoanTabComponent', () => {
  let component: RescheduleLoanTabComponent;
  let fixture: ComponentFixture<RescheduleLoanTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RescheduleLoanTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescheduleLoanTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
