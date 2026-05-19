import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductChargesStepComponent } from './share-product-charges-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ShareProductChargesStepComponent', () => {
  let component: ShareProductChargesStepComponent;
  let fixture: ComponentFixture<ShareProductChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductChargesStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductChargesStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
