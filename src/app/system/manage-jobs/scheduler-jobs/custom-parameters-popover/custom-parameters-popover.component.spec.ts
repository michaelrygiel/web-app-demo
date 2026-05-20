import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomParametersPopoverComponent } from './custom-parameters-popover.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

describe('CustomParametersPopoverComponent', () => {
  let component: CustomParametersPopoverComponent;
  let fixture: ComponentFixture<CustomParametersPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CustomParametersPopoverComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomParametersPopoverComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
