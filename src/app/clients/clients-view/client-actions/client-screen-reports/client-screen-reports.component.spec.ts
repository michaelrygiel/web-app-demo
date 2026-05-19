import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientScreenReportsComponent } from './client-screen-reports.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ClientScreenReportsComponent', () => {
  let component: ClientScreenReportsComponent;
  let fixture: ComponentFixture<ClientScreenReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientScreenReportsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientScreenReportsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
