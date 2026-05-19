import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAnnualFeesSavingsAccountComponent } from './apply-annual-fees-savings-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ApplyAnnualFeesSavingsAccountComponent', () => {
  let component: ApplyAnnualFeesSavingsAccountComponent;
  let fixture: ComponentFixture<ApplyAnnualFeesSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ApplyAnnualFeesSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyAnnualFeesSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
