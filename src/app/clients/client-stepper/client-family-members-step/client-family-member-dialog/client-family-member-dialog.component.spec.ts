import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFamilyMemberDialogComponent } from './client-family-member-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ClientFamilyMemberDialogComponent', () => {
  let component: ClientFamilyMemberDialogComponent;
  let fixture: ComponentFixture<ClientFamilyMemberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientFamilyMemberDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFamilyMemberDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
