/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { ExternalServicesComponent } from './external-services.component';
import { getCommonTestConfig } from '../../../test-config';

describe('ExternalServicesComponent', () => {
  let component: ExternalServicesComponent;
  let fixture: ComponentFixture<ExternalServicesComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    await TestBed.configureTestingModule({
      imports: [
        ExternalServicesComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [...(commonConfig.providers || [])],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle arrow booleans', () => {
    expect(component.arrowBooleans[0]).toBe(false);
    component.arrowBooleansToggle(0);
    expect(component.arrowBooleans[0]).toBe(true);
  });
});
