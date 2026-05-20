import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureImageDialogComponent } from './capture-image-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

describe('CaptureImageDialogComponent', () => {
  let component: CaptureImageDialogComponent;
  let fixture: ComponentFixture<CaptureImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CaptureImageDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureImageDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
