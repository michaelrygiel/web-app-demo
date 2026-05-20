import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotesDialogComponent } from './edit-notes-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('EditNotesDialogComponent', () => {
  let component: EditNotesDialogComponent;
  let fixture: ComponentFixture<EditNotesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditNotesDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNotesDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
