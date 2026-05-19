/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { FooterComponent } from './footer.component';
import { SystemService } from 'app/system/system.service';
import { SettingsService } from 'app/settings/settings.service';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { AlertService } from 'app/core/alert/alert.service';
import { Dates } from 'app/core/utils/dates';
import { VersionService } from 'app/system/version.service';
import { getCommonTestConfig } from '../../../test-config';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    await TestBed.configureTestingModule({
      imports: [
        FooterComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        { provide: SystemService, useValue: { getConfigurationByName: jest.fn(() => of({})) } },
        { provide: SettingsService, useValue: { tenantIdentifier: 'default', server: 'localhost' } },
        {
          provide: AuthenticationService,
          useValue: { getCredentials: jest.fn((): null => null), isAuthenticated: jest.fn((): boolean => false) }
        },
        { provide: AlertService, useValue: { alertEvent: of() } },
        { provide: Dates, useValue: {} },
        { provide: VersionService, useValue: { getBackendInfo: jest.fn(() => of({})) } }
      ],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
