import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAccountChargesStepComponent } from './shares-account-charges-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SharesAccountChargesStepComponent', () => {
  let component: SharesAccountChargesStepComponent;
  let fixture: ComponentFixture<SharesAccountChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SharesAccountChargesStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesAccountChargesStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
