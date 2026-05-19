import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductDatatableTabComponent } from './share-product-datatable-tab.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ShareProductDatatableTabComponent', () => {
  let component: ShareProductDatatableTabComponent;
  let fixture: ComponentFixture<ShareProductDatatableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductDatatableTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductDatatableTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
