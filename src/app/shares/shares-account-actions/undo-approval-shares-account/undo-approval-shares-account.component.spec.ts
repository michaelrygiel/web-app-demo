import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoApprovalSharesAccountComponent } from './undo-approval-shares-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('UndoApprovalSharesAccountComponent', () => {
  let component: UndoApprovalSharesAccountComponent;
  let fixture: ComponentFixture<UndoApprovalSharesAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UndoApprovalSharesAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoApprovalSharesAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
