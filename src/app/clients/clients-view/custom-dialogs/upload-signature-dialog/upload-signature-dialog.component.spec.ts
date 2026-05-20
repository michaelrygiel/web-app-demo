import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSignatureDialogComponent } from './upload-signature-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

describe('UploadSignatureDialogComponent', () => {
  let component: UploadSignatureDialogComponent;
  let fixture: ComponentFixture<UploadSignatureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UploadSignatureDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSignatureDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
