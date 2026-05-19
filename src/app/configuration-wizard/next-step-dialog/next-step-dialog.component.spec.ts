import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepDialogComponent } from './next-step-dialog.component';
import { getTestConfigModule } from '../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('NextStepDialogComponent', () => {
  let component: NextStepDialogComponent;
  let fixture: ComponentFixture<NextStepDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [NextStepDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStepDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
