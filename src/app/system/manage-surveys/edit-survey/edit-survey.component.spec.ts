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
import { UntypedFormBuilder } from '@angular/forms';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { EditSurveyComponent } from './edit-survey.component';
import { SystemService } from '../../system.service';
import { getCommonTestConfig } from '../../../../test-config';

describe('EditSurveyComponent', () => {
  let component: EditSurveyComponent;
  let fixture: ComponentFixture<EditSurveyComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    const activatedRouteStub = {
      data: of({
        survey: {
          key: 'test',
          name: 'Test Survey',
          countryCode: 'US',
          description: 'A test survey',
          questionDatas: []
        }
      })
    };

    await TestBed.configureTestingModule({
      imports: [
        EditSurveyComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [
        ...(commonConfig.providers || []),
        UntypedFormBuilder,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: SystemService, useValue: {} }],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(EditSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
