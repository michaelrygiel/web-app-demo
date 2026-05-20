import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDelinquencyActionDialogComponent } from './loan-delinquency-action-dialog.component';
import { getTestConfigModule } from '../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('LoanDelinquencyActionDialogComponent', () => {
  let component: LoanDelinquencyActionDialogComponent;
  let fixture: ComponentFixture<LoanDelinquencyActionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanDelinquencyActionDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanDelinquencyActionDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
