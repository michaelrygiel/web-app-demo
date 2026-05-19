import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoTransactionDialogComponent } from './undo-transaction-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatDialogRef } from '@angular/material/dialog';

describe('UndoTransactionDialogComponent', () => {
  let component: UndoTransactionDialogComponent;
  let fixture: ComponentFixture<UndoTransactionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UndoTransactionDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoTransactionDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
