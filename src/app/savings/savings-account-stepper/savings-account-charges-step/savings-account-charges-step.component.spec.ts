import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccountChargesStepComponent } from './savings-account-charges-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SavingsAccountChargesStepComponent', () => {
  let component: SavingsAccountChargesStepComponent;
  let fixture: ComponentFixture<SavingsAccountChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsAccountChargesStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAccountChargesStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
