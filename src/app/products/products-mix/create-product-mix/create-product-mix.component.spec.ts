import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductMixComponent } from './create-product-mix.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateProductMixComponent', () => {
  let component: CreateProductMixComponent;
  let fixture: ComponentFixture<CreateProductMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateProductMixComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductMixComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
