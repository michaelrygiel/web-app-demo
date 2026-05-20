import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageDialogComponent } from './upload-image-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

describe('UploadImageDialogComponent', () => {
  let component: UploadImageDialogComponent;
  let fixture: ComponentFixture<UploadImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UploadImageDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
