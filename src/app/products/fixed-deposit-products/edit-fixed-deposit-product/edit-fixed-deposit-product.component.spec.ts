import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFixedDepositProductComponent } from './edit-fixed-deposit-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditFixedDepositProductComponent', () => {
  let component: EditFixedDepositProductComponent;
  let fixture: ComponentFixture<EditFixedDepositProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditFixedDepositProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFixedDepositProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
