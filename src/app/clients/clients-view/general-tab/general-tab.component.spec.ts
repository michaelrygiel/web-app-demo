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
import { describe, it, expect, beforeEach } from '@jest/globals';
import { GeneralTabComponent } from './general-tab.component';
import { ClientsService } from 'app/clients/clients.service';
import { ReportsService } from 'app/reports/reports.service';
import { SettingsService } from 'app/settings/settings.service';
import { AlertService } from 'app/core/alert/alert.service';
import { LoanProductService } from 'app/products/loan-products/services/loan-product.service';
import { getCommonTestConfig } from '../../../../test-config';

describe('GeneralTabComponent', () => {
  let component: GeneralTabComponent;
  let fixture: ComponentFixture<GeneralTabComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    const activatedRouteStub = {
      data: of({
        clientAccountsData: { loanAccounts: [], savingsAccounts: [], shareAccounts: [] },
        clientChargesData: { pageItems: [] },
        clientSummary: {},
        clientCollateralData: []
      }),
      parent: { snapshot: { params: { clientId: '1' } } }
    };

    await TestBed.configureTestingModule({
      imports: [
        GeneralTabComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: ClientsService, useValue: {} },
        { provide: ReportsService, useValue: {} },
        {
          provide: SettingsService,
          useValue: { tenantIdentifier: 'default', languageCode: 'en', dateFormat: 'dd MMMM yyyy', decimals: 2 }
        },
        { provide: AlertService, useValue: { alert: jest.fn() } },
        { provide: LoanProductService, useValue: { productType: { value: 'loan' } } }
      ],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
