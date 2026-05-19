import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShareProductComponent } from './create-share-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateShareProductComponent', () => {
  let component: CreateShareProductComponent;
  let fixture: ComponentFixture<CreateShareProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateShareProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShareProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
