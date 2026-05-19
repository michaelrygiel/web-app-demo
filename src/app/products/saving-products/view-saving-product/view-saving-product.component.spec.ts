import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSavingProductComponent } from './view-saving-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewSavingProductComponent', () => {
  let component: ViewSavingProductComponent;
  let fixture: ComponentFixture<ViewSavingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewSavingProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSavingProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
