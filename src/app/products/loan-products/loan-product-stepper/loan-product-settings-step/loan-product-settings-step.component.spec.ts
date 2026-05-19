import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductSettingsStepComponent } from './loan-product-settings-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanProductSettingsStepComponent', () => {
  let component: LoanProductSettingsStepComponent;
  let fixture: ComponentFixture<LoanProductSettingsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanProductSettingsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductSettingsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
