import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductMixComponent } from './edit-product-mix.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditProductMixComponent', () => {
  let component: EditProductMixComponent;
  let fixture: ComponentFixture<EditProductMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditProductMixComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductMixComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
