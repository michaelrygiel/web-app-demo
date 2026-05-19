import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductDetailsStepComponent } from './share-product-details-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ShareProductDetailsStepComponent', () => {
  let component: ShareProductDetailsStepComponent;
  let fixture: ComponentFixture<ShareProductDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductDetailsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductDetailsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
