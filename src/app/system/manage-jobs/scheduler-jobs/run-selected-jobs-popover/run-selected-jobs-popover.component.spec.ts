import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunSelectedJobsPopoverComponent } from './run-selected-jobs-popover.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

describe('RunSelectedJobsPopoverComponent', () => {
  let component: RunSelectedJobsPopoverComponent;
  let fixture: ComponentFixture<RunSelectedJobsPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RunSelectedJobsPopoverComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(RunSelectedJobsPopoverComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
