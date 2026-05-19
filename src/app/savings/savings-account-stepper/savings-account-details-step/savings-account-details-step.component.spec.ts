import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccountDetailsStepComponent } from './savings-account-details-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SavingsAccountDetailsStepComponent', () => {
  let component: SavingsAccountDetailsStepComponent;
  let fixture: ComponentFixture<SavingsAccountDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsAccountDetailsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAccountDetailsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
