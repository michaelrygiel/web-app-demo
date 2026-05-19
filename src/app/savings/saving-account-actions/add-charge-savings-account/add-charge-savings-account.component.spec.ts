import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChargeSavingsAccountComponent } from './add-charge-savings-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('AddChargeSavingsAccountComponent', () => {
  let component: AddChargeSavingsAccountComponent;
  let fixture: ComponentFixture<AddChargeSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AddChargeSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChargeSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
