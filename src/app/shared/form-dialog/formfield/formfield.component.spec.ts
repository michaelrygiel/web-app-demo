/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { FormfieldComponent } from './formfield.component';
import { getCommonTestConfig } from '../../../../test-config';

describe('FormfieldComponent', () => {
  let component: FormfieldComponent;
  let fixture: ComponentFixture<FormfieldComponent>;

  beforeEach(async () => {
    const commonConfig = getCommonTestConfig();

    await TestBed.configureTestingModule({
      imports: [
        FormfieldComponent,
        ...(commonConfig.imports || [])
      ],
      providers: [...(commonConfig.providers || [])],
      schemas: commonConfig.schemas
    }).compileComponents();

    fixture = TestBed.createComponent(FormfieldComponent);
    component = fixture.componentInstance;
    component.form = new UntypedFormGroup({ test: new UntypedFormControl('') });
    component.formfield = {
      controlType: 'checkbox',
      controlName: 'test',
      label: 'Test',
      required: false,
      order: 1,
      value: false
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
