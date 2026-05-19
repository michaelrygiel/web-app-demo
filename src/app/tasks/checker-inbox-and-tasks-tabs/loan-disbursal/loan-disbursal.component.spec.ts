import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisbursalComponent } from './loan-disbursal.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoanDisbursalComponent', () => {
  let component: LoanDisbursalComponent;
  let fixture: ComponentFixture<LoanDisbursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanDisbursalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDisbursalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
