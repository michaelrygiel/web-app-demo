import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogPopoverComponent } from './error-log-popover.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

describe('ErrorLogPopoverComponent', () => {
  let component: ErrorLogPopoverComponent;
  let fixture: ComponentFixture<ErrorLogPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ErrorLogPopoverComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorLogPopoverComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
