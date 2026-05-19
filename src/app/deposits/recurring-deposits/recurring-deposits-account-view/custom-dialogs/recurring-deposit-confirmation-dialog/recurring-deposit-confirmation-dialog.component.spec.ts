import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositConfirmationDialogComponent } from './recurring-deposit-confirmation-dialog.component';
import { getTestConfigModule } from '../../../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('RecurringDepositConfirmationDialogComponent', () => {
  let component: RecurringDepositConfirmationDialogComponent;
  let fixture: ComponentFixture<RecurringDepositConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositConfirmationDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositConfirmationDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
