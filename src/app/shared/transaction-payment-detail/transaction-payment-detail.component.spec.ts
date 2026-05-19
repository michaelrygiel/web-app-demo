import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPaymentDetailComponent } from './transaction-payment-detail.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('TransactionPaymentDetailComponent', () => {
  let component: TransactionPaymentDetailComponent;
  let fixture: ComponentFixture<TransactionPaymentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [TransactionPaymentDetailComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionPaymentDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
