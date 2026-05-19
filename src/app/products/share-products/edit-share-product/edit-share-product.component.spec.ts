import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShareProductComponent } from './edit-share-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditShareProductComponent', () => {
  let component: EditShareProductComponent;
  let fixture: ComponentFixture<EditShareProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditShareProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShareProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
