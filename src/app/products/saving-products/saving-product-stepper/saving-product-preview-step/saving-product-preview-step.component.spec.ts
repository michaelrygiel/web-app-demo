import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductPreviewStepComponent } from './saving-product-preview-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SavingProductPreviewStepComponent', () => {
  let component: SavingProductPreviewStepComponent;
  let fixture: ComponentFixture<SavingProductPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
