import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaymentTypeComponent } from './create-payment-type.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreatePaymentTypeComponent', () => {
  let component: CreatePaymentTypeComponent;
  let fixture: ComponentFixture<CreatePaymentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreatePaymentTypeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaymentTypeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
