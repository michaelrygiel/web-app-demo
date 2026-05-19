import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShareProductComponent } from './view-share-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewShareProductComponent', () => {
  let component: ViewShareProductComponent;
  let fixture: ComponentFixture<ViewShareProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewShareProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShareProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
