/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdkStepper } from '@angular/cdk/stepper';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { LoansAccountPreviewStepComponent } from './loans-account-preview-step.component';
import { LoanProductService } from 'app/products/loan-products/services/loan-product.service';
import { BehaviorSubject } from 'rxjs';
import { getCommonTestConfig } from '../../../../test-config';

describe('LoansAccountPreviewStepComponent', () => {
  let component: LoansAccountPreviewStepComponent;
  let fixture: ComponentFixture<LoansAccountPreviewStepComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    await TestBed.configureTestingModule({
      imports: [
        LoansAccountPreviewStepComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        { provide: CdkStepper, useValue: { next: jest.fn(), previous: jest.fn() } },
        {
          provide: LoanProductService,
          useValue: {
            productType: new BehaviorSubject('loan'),
            loanProductTypeLabel: 'Loan'
          }
        }
      ],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(LoansAccountPreviewStepComponent);
    component = fixture.componentInstance;
    component.loansAccountTemplate = {};
    component.loansAccountProductTemplate = {
      product: { enableDownPayment: false },
      loanPurposeOptions: [],
      loanOfficerOptions: [],
      client: { displayName: 'Test Client' }
    };
    component.loansAccount = {};
    component.loanProductsBasicDetails = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
