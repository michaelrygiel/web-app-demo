import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueSetupDialogComponent } from './continue-setup-dialog.component';
import { getTestConfigModule } from '../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ContinueSetupDialogComponent', () => {
  let component: ContinueSetupDialogComponent;
  let fixture: ComponentFixture<ContinueSetupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ContinueSetupDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueSetupDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
