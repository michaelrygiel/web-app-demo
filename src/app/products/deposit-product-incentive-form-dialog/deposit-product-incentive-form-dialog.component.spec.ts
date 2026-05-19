import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositProductIncentiveFormDialogComponent } from './deposit-product-incentive-form-dialog.component';
import { getTestConfigModule } from '../../testing/test-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DepositProductIncentiveFormDialogComponent', () => {
  let component: DepositProductIncentiveFormDialogComponent;
  let fixture: ComponentFixture<DepositProductIncentiveFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DepositProductIncentiveFormDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositProductIncentiveFormDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
