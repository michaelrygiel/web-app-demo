import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectShareDialogComponent } from './reject-share-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('RejectSharesDialogComponent', () => {
  let component: RejectShareDialogComponent;
  let fixture: ComponentFixture<RejectShareDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RejectShareDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectShareDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
