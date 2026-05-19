/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

jest.mock('jspdf', () => ({ jsPDF: jest.fn() }));
jest.mock('jspdf-autotable', () => jest.fn());

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { CreateGlimAccountComponent } from './create-glim-account.component';
import { LoansService } from '../../loans.service';
import { SettingsService } from 'app/settings/settings.service';
import { ClientsService } from 'app/clients/clients.service';
import { Dates } from 'app/core/utils/dates';
import { I18nService } from 'app/core/i18n/i18n.service';
import { getCommonTestConfig } from '../../../../test-config';

describe('CreateGlimAccountComponent', () => {
  let component: CreateGlimAccountComponent;
  let fixture: ComponentFixture<CreateGlimAccountComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    const activatedRouteStub = {
      data: of({
        loansAccountTemplate: {
          timeline: {},
          productOptions: [],
          loanOfficerOptions: [],
          fundOptions: [],
          loanPurposeOptions: [],
          collateralOptions: [],
          chargeOptions: [],
          accountLinkingOptions: [],
          multiDisburseLoan: false
        },
        groupsData: { activeClientMembers: [] }
      }),
      snapshot: { params: { loanId: '1' }, queryParamMap: { get: (): null => null } }
    };

    await TestBed.configureTestingModule({
      imports: [
        CreateGlimAccountComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: LoansService, useValue: {} },
        { provide: SettingsService, useValue: {} },
        { provide: ClientsService, useValue: {} },
        { provide: Dates, useValue: {} },
        { provide: I18nService, useValue: {} }],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGlimAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
