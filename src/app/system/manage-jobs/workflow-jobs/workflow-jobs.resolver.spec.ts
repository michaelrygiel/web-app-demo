/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { WorkflowJobResolver } from './workflow-jobs.resolver';
import { SystemService } from 'app/system/system.service';
import { getCommonTestConfig } from '../../../../test-config';

describe('WorkflowJobResolver', () => {
  let resolver: WorkflowJobResolver;
  let systemService: jest.Mocked<SystemService>;

  beforeEach(() => {
    const commonConfig = getCommonTestConfig();

    systemService = {
      getWorkflowJobNames: jest.fn(() => of([]))
    } as any;

    TestBed.configureTestingModule({
      imports: [...(commonConfig.imports || [])],
      providers: [
        ...(commonConfig.providers || []),
        { provide: SystemService, useValue: systemService }],
      schemas: commonConfig.schemas
    });

    resolver = TestBed.inject(WorkflowJobResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should call systemService.getWorkflowJobNames on resolve', () => {
    const route = {} as ActivatedRouteSnapshot;
    resolver.resolve(route);
    expect(systemService.getWorkflowJobNames).toHaveBeenCalled();
  });
});
