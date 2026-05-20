import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTimeoutDialogComponent } from './session-timeout-dialog.component';
import { getTestConfigModule } from '../../testing/test-config';
import { MatDialogRef } from '@angular/material/dialog';

describe('SessionTimeoutDialogComponent', () => {
  let component: SessionTimeoutDialogComponent;
  let fixture: ComponentFixture<SessionTimeoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SessionTimeoutDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } }]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionTimeoutDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
