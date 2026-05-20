import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivateChargeDialogComponent } from './inactivate-charge-dialog.component';
import { getTestConfigModule } from '../../../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
