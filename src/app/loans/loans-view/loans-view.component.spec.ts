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
import { LoansViewComponent } from './loans-view.component';
import { LoansService } from '../loans.service';
import { LoanProductService } from 'app/products/loan-products/services/loan-product.service';
import { BehaviorSubject } from 'rxjs';
import { getCommonTestConfig } from '../../../test-config';

describe('LoansViewComponent', () => {
  let component: LoansViewComponent;
  let fixture: ComponentFixture<LoansViewComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    const activatedRouteStub = {
      data: of({
        loanDetailsData: {
          id: 1,
          status: { value: 'Active', code: 'loanStatusType.active', active: false },
          loanProductName: 'Test Product',
          currency: { code: 'USD' },
          product: { name: 'Test Product' },
          repaymentSchedule: { periods: [] },
          transactions: [],
          charges: [],
          overdueCharges: [],
          disbursementDetails: []
        },
        loanDatatables: [],
        loanArrearsDelinquencyConfig: { value: 0 }
      }),
      snapshot: { params: { loanId: '1' }, queryParamMap: { get: (): string => 'loan' } },
      params: of({ loanId: '1' }),
      parent: { snapshot: { params: {} } }
    };

    await TestBed.configureTestingModule({
      imports: [
        LoansViewComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        {
          provide: LoansService,
          useValue: { saveLoanDisbursementDetailsData: jest.fn() }
        },
        {
          provide: LoanProductService,
          useValue: {
            productType: new BehaviorSubject('loan'),
            loanProductTypeLabel: 'Loan',
            initialize: jest.fn(),
            isLoanProduct: true
          }
        }
      ],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(LoansViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
