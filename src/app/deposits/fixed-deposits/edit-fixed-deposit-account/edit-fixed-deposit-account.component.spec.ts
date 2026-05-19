import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFixedDepositAccountComponent } from './edit-fixed-deposit-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditFixedDepositAccountComponent', () => {
  let component: EditFixedDepositAccountComponent;
  let fixture: ComponentFixture<EditFixedDepositAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditFixedDepositAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFixedDepositAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
