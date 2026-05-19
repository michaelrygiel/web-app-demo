import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChargeFixedDepositsAccountComponent } from './add-charge-fixed-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AddChargeFixedDepositsAccountComponent', () => {
  let component: AddChargeFixedDepositsAccountComponent;
  let fixture: ComponentFixture<AddChargeFixedDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AddChargeFixedDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChargeFixedDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
