import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductMixComponent } from './view-product-mix.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewProductMixComponent', () => {
  let component: ViewProductMixComponent;
  let fixture: ComponentFixture<ViewProductMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewProductMixComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductMixComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
