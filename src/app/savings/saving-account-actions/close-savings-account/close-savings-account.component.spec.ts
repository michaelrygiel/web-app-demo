/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { CloseSavingsAccountComponent } from './close-savings-account.component';
import { SavingsService } from 'app/savings/savings.service';
import { SettingsService } from 'app/settings/settings.service';
import { Dates } from 'app/core/utils/dates';
import { getCommonTestConfig } from '../../../../test-config';

describe('CloseSavingsAccountComponent', () => {
  let component: CloseSavingsAccountComponent;
  let fixture: ComponentFixture<CloseSavingsAccountComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    const activatedRouteStub = {
      data: of({
        savingsAccountActionData: [
          { paymentTypeOptions: [] },
          { summary: { accountBalance: 0 } }]
      }),
      snapshot: { params: { savingAccountId: '1' } }
    };

    await TestBed.configureTestingModule({
      imports: [
        CloseSavingsAccountComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        UntypedFormBuilder,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: SavingsService, useValue: {} },
        { provide: SettingsService, useValue: { businessDate: new Date() } },
        { provide: Dates, useValue: {} }],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(CloseSavingsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
