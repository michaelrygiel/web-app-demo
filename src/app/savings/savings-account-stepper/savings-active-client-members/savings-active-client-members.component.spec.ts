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
import { SavingsActiveClientMembersComponent } from './savings-active-client-members.component';
import { getCommonTestConfig } from '../../../../test-config';

describe('SavingsActiveClientMembersComponent', () => {
  let component: SavingsActiveClientMembersComponent;
  let fixture: ComponentFixture<SavingsActiveClientMembersComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    await TestBed.configureTestingModule({
      imports: [
        SavingsActiveClientMembersComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        { provide: CdkStepper, useValue: { next: jest.fn(), previous: jest.fn() } }],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(SavingsActiveClientMembersComponent);
    component = fixture.componentInstance;
    component.activeClientMembers = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
