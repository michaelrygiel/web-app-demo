import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountAddCollateralDialogComponent } from './loans-account-add-collateral-dialog.component';
import { getTestConfigModule } from '../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('LoansAccountAddCollateralDialogComponent', () => {
  let component: LoansAccountAddCollateralDialogComponent;
  let fixture: ComponentFixture<LoansAccountAddCollateralDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansAccountAddCollateralDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountAddCollateralDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
