import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoApprovalFixedDepositsAccountComponent } from './undo-approval-fixed-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('UndoApprovalFixedDepositsAccountComponent', () => {
  let component: UndoApprovalFixedDepositsAccountComponent;
  let fixture: ComponentFixture<UndoApprovalFixedDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UndoApprovalFixedDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoApprovalFixedDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
