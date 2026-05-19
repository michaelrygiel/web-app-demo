import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccountActionsComponent } from './loan-account-actions.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoanAccountActionsComponent', () => {
  let component: LoanAccountActionsComponent;
  let fixture: ComponentFixture<LoanAccountActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanAccountActionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccountActionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
