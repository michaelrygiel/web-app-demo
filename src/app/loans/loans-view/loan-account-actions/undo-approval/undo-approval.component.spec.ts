import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoApprovalComponent } from './undo-approval.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('UndoApprovalComponent', () => {
  let component: UndoApprovalComponent;
  let fixture: ComponentFixture<UndoApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UndoApprovalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoApprovalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
