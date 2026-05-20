import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivateChargeDialogComponent } from './inactivate-charge-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('InactivateChargeDialogComponent', () => {
  let component: InactivateChargeDialogComponent;
  let fixture: ComponentFixture<InactivateChargeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [InactivateChargeDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivateChargeDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
