/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { CobWorkflowComponent } from './cob-workflow.component';
import { SystemService } from 'app/system/system.service';
import { getCommonTestConfig } from '../../../../test-config';

describe('CobWorkflowComponent', () => {
  let component: CobWorkflowComponent;
  let fixture: ComponentFixture<CobWorkflowComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    await TestBed.configureTestingModule({
      imports: [
        CobWorkflowComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        { provide: SystemService, useValue: { getCOBCatchUpStatus: jest.fn(), runCOBCatchUp: jest.fn() } }],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(CobWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
