import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleWithholdTaxDialogComponent } from './toggle-withhold-tax-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ToggleWithholdTaxDialogComponent', () => {
  let component: ToggleWithholdTaxDialogComponent;
  let fixture: ComponentFixture<ToggleWithholdTaxDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ToggleWithholdTaxDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleWithholdTaxDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
