import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateInterestDialogComponent } from './calculate-interest-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

describe('CalculateInterestDialogComponent', () => {
  let component: CalculateInterestDialogComponent;
  let fixture: ComponentFixture<CalculateInterestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CalculateInterestDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateInterestDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
