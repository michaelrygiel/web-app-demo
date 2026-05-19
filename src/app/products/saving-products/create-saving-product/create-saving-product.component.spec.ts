import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSavingProductComponent } from './create-saving-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateSavingProductComponent', () => {
  let component: CreateSavingProductComponent;
  let fixture: ComponentFixture<CreateSavingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateSavingProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSavingProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
