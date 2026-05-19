import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoanProductComponent } from './edit-loan-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditLoanProductComponent', () => {
  let component: EditLoanProductComponent;
  let fixture: ComponentFixture<EditLoanProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditLoanProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoanProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
