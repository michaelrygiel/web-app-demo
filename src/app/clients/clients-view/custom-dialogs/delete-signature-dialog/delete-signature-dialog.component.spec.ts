import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSignatureDialogComponent } from './delete-signature-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('DeleteSignatureDialogComponent', () => {
  let component: DeleteSignatureDialogComponent;
  let fixture: ComponentFixture<DeleteSignatureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DeleteSignatureDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: [] }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSignatureDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
