import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountTermsStepComponent } from './loans-account-terms-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoansAccountTermsStepComponent', () => {
  let component: LoansAccountTermsStepComponent;
  let fixture: ComponentFixture<LoansAccountTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansAccountTermsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountTermsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
