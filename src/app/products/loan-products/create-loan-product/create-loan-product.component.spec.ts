import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoanProductComponent } from './create-loan-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateLoanProductComponent', () => {
  let component: CreateLoanProductComponent;
  let fixture: ComponentFixture<CreateLoanProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateLoanProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoanProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
