import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositConfirmationDialogComponent } from './recurring-deposit-confirmation-dialog.component';
import { getTestConfigModule } from '../../../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

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
