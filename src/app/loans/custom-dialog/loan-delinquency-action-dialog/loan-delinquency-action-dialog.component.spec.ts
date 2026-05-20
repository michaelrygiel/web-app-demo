import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDelinquencyActionDialogComponent } from './loan-delinquency-action-dialog.component';
import { getTestConfigModule } from '../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
