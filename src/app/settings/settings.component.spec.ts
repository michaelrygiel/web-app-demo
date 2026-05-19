/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';
import { AlertService } from 'app/core/alert/alert.service';
import { getCommonTestConfig } from '../../test-config';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();
    (window.localStorage.getItem as jest.Mock).mockReturnValue(null);

    await TestBed.configureTestingModule({
      imports: [
        SettingsComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        DatePipe,
        {
          provide: SettingsService,
          useValue: {
            dateFormat: 'dd MMMM yyyy',
            datetimeFormat: 'dd MMMM yyyy HH:mm:ss',
            decimals: '2',
            setDateFormat: jest.fn(),
            setDatetimeFormat: jest.fn(),
            setDecimalToDisplay: jest.fn()
          }
        },
        { provide: AlertService, useValue: { alert: jest.fn() } }
      ],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
