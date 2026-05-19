/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { TestModuleMetadata } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IconsModule } from 'app/shared/icons.module';
import { AuthenticationService } from 'app/core/authentication/authentication.service';

/**
 * Returns a shared TestModuleMetadata object with common imports,
 * providers, and schemas used across multiple test specs.
 */
export function getCommonTestConfig(): TestModuleMetadata {
  return {
    imports: [
      ReactiveFormsModule,
      TranslateModule.forRoot(),
      FontAwesomeModule,
      IconsModule
    ],
    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      provideRouter([]),
      provideAnimationsAsync(),
      provideNativeDateAdapter(),
      DatePipe,
      DecimalPipe,
      {
        provide: AuthenticationService,
        useValue: {
          getCredentials: (): null => null,
          isAuthenticated: (): boolean => false,
          getUserPermissions: (): string[] => []
        }
      }
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
  };
}
