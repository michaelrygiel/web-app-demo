import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseAmountDialogComponent } from './release-amount-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatDialogRef } from '@angular/material/dialog';

describe('ReleaseAmountDialogComponent', () => {
  let component: ReleaseAmountDialogComponent;
  let fixture: ComponentFixture<ReleaseAmountDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ReleaseAmountDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseAmountDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
