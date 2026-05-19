import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductsComponent } from './share-products.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ShareProductsComponent', () => {
  let component: ShareProductsComponent;
  let fixture: ComponentFixture<ShareProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
