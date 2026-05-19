import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPayChargesComponent } from './client-pay-charges.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ClientPayChargesComponent', () => {
  let component: ClientPayChargesComponent;
  let fixture: ComponentFixture<ClientPayChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientPayChargesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPayChargesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
