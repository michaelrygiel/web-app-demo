import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSignatureDialogComponent } from './view-signature-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('ViewSignatureDialogComponent', () => {
  let component: ViewSignatureDialogComponent;
  let fixture: ComponentFixture<ViewSignatureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewSignatureDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: { documents: [], id: '1' } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSignatureDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
