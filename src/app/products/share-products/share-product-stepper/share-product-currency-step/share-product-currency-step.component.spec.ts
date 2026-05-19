import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductCurrencyStepComponent } from './share-product-currency-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ShareProductCurrencyStepComponent', () => {
  let component: ShareProductCurrencyStepComponent;
  let fixture: ComponentFixture<ShareProductCurrencyStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductCurrencyStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductCurrencyStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
