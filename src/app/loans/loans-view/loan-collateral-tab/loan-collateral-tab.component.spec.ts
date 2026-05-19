import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCollateralTabComponent } from './loan-collateral-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoanCollateralTabComponent', () => {
  let component: LoanCollateralTabComponent;
  let fixture: ComponentFixture<LoanCollateralTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanCollateralTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCollateralTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
