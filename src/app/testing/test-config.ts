import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'app/shared/material.module';
import { IconsModule } from 'app/shared/icons.module';
import { PipesModule } from 'app/pipes/pipes.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CdkStepperModule, CdkStepper } from '@angular/cdk/stepper';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { AuthenticationInterceptor } from 'app/core/authentication/authentication.interceptor';
import { ProgressBarService } from 'app/core/progress-bar/progress-bar.service';

/**
 * Returns a Proxy-based object where any property access returns
 * another safe proxy (or a sensible default), so deep property chains
 * like `data.foo.bar.baz` never throw.
 */
function safeProxy(): any {
  const arrayMethods = [
    'sort',
    'filter',
    'map',
    'forEach',
    'find',
    'reduce',
    'some',
    'every',
    'indexOf',
    'includes',
    'flat',
    'flatMap',
    'concat',
    'slice',
    'splice',
    'push',
    'pop',
    'shift',
    'unshift',
    'reverse',
    'join'
  ];
  const stringMethods = [
    'toLowerCase',
    'toUpperCase',
    'startsWith',
    'endsWith',
    'trim',
    'split',
    'replace',
    'match',
    'search',
    'substring',
    'charAt',
    'charCodeAt',
    'padStart',
    'padEnd',
    'repeat',
    'localeCompare'
  ];
  const handler: ProxyHandler<object> = {
    get(_target: object, prop: string | symbol): any {
      if (prop === Symbol.toPrimitive) {
        return (_hint: string): any => '';
      }
      if (prop === Symbol.iterator) {
        return function* (): Generator {};
      }
      if (prop === 'subscribe') {
        return (fn: Function): any => fn(safeProxy());
      }
      if (prop === 'pipe') {
        return (): any => ({ subscribe: (fn: Function): any => fn(safeProxy()) });
      }
      if (prop === 'length') {
        return 0;
      }
      if (prop === 'toFixed' || prop === 'toString' || prop === 'valueOf') {
        return (): string => '';
      }
      if (typeof prop === 'string' && arrayMethods.includes(prop)) {
        return ([][prop as keyof []] as Function).bind([]);
      }
      if (typeof prop === 'string' && stringMethods.includes(prop)) {
        return (''[prop as keyof string] as Function).bind('');
      }
      if (prop === 'get') {
        return (): any => null;
      }
      if (prop === 'has') {
        return (): boolean => false;
      }
      if (prop === 'updateSize' || prop === 'close' || prop === 'afterClosed') {
        return (): any => of(undefined);
      }
      return safeProxy();
    }
  };
  return new Proxy({}, handler);
}

const mockParamMap = {
  get: (_key: string): string | null => null,
  has: (_key: string): boolean => false,
  getAll: (_key: string): string[] => [],
  keys: [] as string[]
};

const safeParams = new Proxy(
  {},
  {
    get(_target: object, prop: string | symbol): any {
      if (typeof prop === 'string') {
        return '';
      }
      return undefined;
    }
  }
);

function buildRouteLevel(data: any): any {
  return {
    data: of(data),
    params: of(safeParams),
    queryParams: of({}),
    paramMap: of(mockParamMap),
    queryParamMap: of(mockParamMap),
    snapshot: {
      params: safeParams,
      queryParams: {},
      data,
      paramMap: mockParamMap,
      queryParamMap: mockParamMap
    },
    url: of([]),
    fragment: of(''),
    outlet: 'primary',
    routeConfig: null,
    children: [],
    firstChild: null
  };
}

/**
 * Creates a mock ActivatedRoute with safe defaults for route data,
 * params, queryParams, and nested parent references.
 */
export function mockActivatedRoute(overrides: Record<string, any> = {}): any {
  const data = Object.keys(overrides).length > 0 ? overrides : safeProxy();
  const base = buildRouteLevel(data);
  const parentLevel = buildRouteLevel(data);
  const grandparentLevel = buildRouteLevel(data);

  parentLevel.parent = grandparentLevel;
  grandparentLevel.parent = buildRouteLevel(data);
  base.parent = parentLevel;

  return base;
}

/**
 * Returns a common TestBed configuration object containing frequently
 * needed imports, providers and schemas for unit tests.
 */
export function getTestConfigModule(routeData: Record<string, any> = {}) {
  return {
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule.forRoot(),
      MaterialModule,
      IconsModule,
      PipesModule,
      CdkStepperModule
    ],
    providers: [
      DatePipe,
      DecimalPipe,
      { provide: ActivatedRoute, useValue: mockActivatedRoute(routeData) },
      { provide: CdkStepper, useValue: {} },
      AuthenticationInterceptor,
      {
        provide: AuthenticationService,
        useValue: {
          getCredentials: (): any => ({ username: 'testuser', userId: '1' }),
          isAuthenticated: (): boolean => false,
          getAuthorizationToken: (): string => ''
        }
      },
      ProgressBarService

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  };
}
