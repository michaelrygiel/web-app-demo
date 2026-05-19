import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportParameterDialogComponent } from './report-parameter-dialog.component';
import { getTestConfigModule } from '../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('AddReportParameterDialogComponent', () => {
  let component: ReportParameterDialogComponent;
  let fixture: ComponentFixture<ReportParameterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ReportParameterDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportParameterDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
