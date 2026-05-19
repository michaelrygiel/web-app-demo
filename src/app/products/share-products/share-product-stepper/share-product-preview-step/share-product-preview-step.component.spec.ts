import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductPreviewStepComponent } from './share-product-preview-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ShareProductPreviewStepComponent', () => {
  let component: ShareProductPreviewStepComponent;
  let fixture: ComponentFixture<ShareProductPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
