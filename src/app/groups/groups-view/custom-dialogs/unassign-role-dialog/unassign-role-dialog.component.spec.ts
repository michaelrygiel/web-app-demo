import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignRoleDialogComponent } from './unassign-role-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('UnassignRoleDialogComponent', () => {
  let component: UnassignRoleDialogComponent;
  let fixture: ComponentFixture<UnassignRoleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UnassignRoleDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignRoleDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
