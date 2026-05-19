import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountDetailsStepComponent } from './loans-account-details-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoansAccountDetailsStepComponent', () => {
  let component: LoansAccountDetailsStepComponent;
  let fixture: ComponentFixture<LoansAccountDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansAccountDetailsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountDetailsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
