import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAccountDetailsStepComponent } from './shares-account-details-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SharesAccountDetailsStepComponent', () => {
  let component: SharesAccountDetailsStepComponent;
  let fixture: ComponentFixture<SharesAccountDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SharesAccountDetailsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesAccountDetailsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
