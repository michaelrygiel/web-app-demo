import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanProductComponent } from './view-loan-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewLoanProductComponent', () => {
  let component: ViewLoanProductComponent;
  let fixture: ComponentFixture<ViewLoanProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewLoanProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
