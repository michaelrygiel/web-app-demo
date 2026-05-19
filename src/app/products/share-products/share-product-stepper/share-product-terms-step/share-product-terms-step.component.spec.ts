import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductTermsStepComponent } from './share-product-terms-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ShareProductTermsStepComponent', () => {
  let component: ShareProductTermsStepComponent;
  let fixture: ComponentFixture<ShareProductTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductTermsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductTermsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
