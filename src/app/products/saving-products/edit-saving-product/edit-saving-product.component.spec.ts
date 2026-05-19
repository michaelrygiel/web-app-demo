import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSavingProductComponent } from './edit-saving-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditSavingProductComponent', () => {
  let component: EditSavingProductComponent;
  let fixture: ComponentFixture<EditSavingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditSavingProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSavingProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
