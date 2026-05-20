import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationWizardComponent } from './configuration-wizard.component';
import { getTestConfigModule } from '../testing/test-config';
import {
  MatLegacyDialogRef as MatDialogRef,
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA
} from '@angular/material/legacy-dialog';

describe('ConfigurationWizardComponent', () => {
  let component: ConfigurationWizardComponent;
  let fixture: ComponentFixture<ConfigurationWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ConfigurationWizardComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationWizardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
