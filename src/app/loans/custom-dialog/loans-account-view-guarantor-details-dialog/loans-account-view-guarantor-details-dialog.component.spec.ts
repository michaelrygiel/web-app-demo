import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountViewGuarantorDetailsDialogComponent } from './loans-account-view-guarantor-details-dialog.component';
import { getTestConfigModule } from '../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('LoansAccountViewGuarantorDetailsDialogComponent', () => {
  let component: LoansAccountViewGuarantorDetailsDialogComponent;
  let fixture: ComponentFixture<LoansAccountViewGuarantorDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansAccountViewGuarantorDetailsDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountViewGuarantorDetailsDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
