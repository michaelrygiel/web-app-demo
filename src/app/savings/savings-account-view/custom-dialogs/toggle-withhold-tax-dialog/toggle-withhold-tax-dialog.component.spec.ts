import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleWithholdTaxDialogComponent } from './toggle-withhold-tax-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('ToggleWithholdTaxDialogComponent', () => {
  let component: ToggleWithholdTaxDialogComponent;
  let fixture: ComponentFixture<ToggleWithholdTaxDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ToggleWithholdTaxDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleWithholdTaxDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
