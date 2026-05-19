/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { ShareAccountTableComponent } from './share-account-table.component';
import { AccountsFilterPipe } from '../../pipes/accounts-filter.pipe';
import { getCommonTestConfig } from '../../../test-config';

describe('ShareAccountTableComponent', () => {
  let component: ShareAccountTableComponent;
  let fixture: ComponentFixture<ShareAccountTableComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    await TestBed.configureTestingModule({
      imports: [
        ShareAccountTableComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        AccountsFilterPipe
      ],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(ShareAccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
