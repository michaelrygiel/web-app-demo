import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAccountTermsStepComponent } from './shares-account-terms-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SharesAccountTermsStepComponent', () => {
  let component: SharesAccountTermsStepComponent;
  let fixture: ComponentFixture<SharesAccountTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SharesAccountTermsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesAccountTermsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
