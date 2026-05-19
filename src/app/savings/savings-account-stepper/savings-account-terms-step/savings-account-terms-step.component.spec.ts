import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccountTermsStepComponent } from './savings-account-terms-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SavingsAccountTermsStepComponent', () => {
  let component: SavingsAccountTermsStepComponent;
  let fixture: ComponentFixture<SavingsAccountTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsAccountTermsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAccountTermsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
