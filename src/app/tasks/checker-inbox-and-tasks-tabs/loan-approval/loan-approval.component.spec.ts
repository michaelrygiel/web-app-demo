import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApprovalComponent } from './loan-approval.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoanApprovalComponent', () => {
  let component: LoanApprovalComponent;
  let fixture: ComponentFixture<LoanApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanApprovalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApprovalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
