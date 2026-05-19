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
import { ChargesTabComponent } from './charges-tab.component';
import { LoansService } from 'app/loans/loans.service';
import { SettingsService } from 'app/settings/settings.service';
import { SystemService } from 'app/system/system.service';
import { LoanProductService } from 'app/products/loan-products/services/loan-product.service';
import { Dates } from 'app/core/utils/dates';
import { getCommonTestConfig } from '../../../../test-config';

describe('ChargesTabComponent', () => {
  let component: ChargesTabComponent;
  let fixture: ComponentFixture<ChargesTabComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    const activatedRouteStub = {
      data: of({}),
      parent: {
        data: of({
          loanDetailsData: {
            id: 1,
            status: { value: 'Active' },
            charges: []
          }
        })
      },
      snapshot: { queryParamMap: { get: (): null => null } }
    };

    await TestBed.configureTestingModule({
      imports: [
        ChargesTabComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: LoansService, useValue: {} },
        { provide: SettingsService, useValue: { businessDate: new Date() } },
        {
          provide: SystemService,
          useValue: { getConfigurationByName: jest.fn(() => of({ stringValue: 'due-date' })) }
        },
        { provide: LoanProductService, useValue: { productType: { value: 'loan' } } },
        { provide: Dates, useValue: { parseDate: jest.fn((d: any) => d) } }
      ],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(ChargesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
