import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiveChargeDialogComponent } from './waive-charge-dialog.component';
import { getTestConfigModule } from '../../../../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('WaiveChargeDialogComponent', () => {
  let component: WaiveChargeDialogComponent;
  let fixture: ComponentFixture<WaiveChargeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WaiveChargeDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiveChargeDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
