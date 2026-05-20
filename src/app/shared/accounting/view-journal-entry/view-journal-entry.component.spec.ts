import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJournalEntryComponent } from './view-journal-entry.component';
import { getTestConfigModule } from '../../../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('ViewJournalEntryComponent', () => {
  let component: ViewJournalEntryComponent;
  let fixture: ComponentFixture<ViewJournalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewJournalEntryComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: { journalEntry: { transactionDetails: null } } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJournalEntryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
