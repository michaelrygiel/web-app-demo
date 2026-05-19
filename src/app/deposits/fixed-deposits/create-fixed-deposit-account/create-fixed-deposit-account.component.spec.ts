import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFixedDepositAccountComponent } from './create-fixed-deposit-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateFixedDepositAccountComponent', () => {
  let component: CreateFixedDepositAccountComponent;
  let fixture: ComponentFixture<CreateFixedDepositAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateFixedDepositAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFixedDepositAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
