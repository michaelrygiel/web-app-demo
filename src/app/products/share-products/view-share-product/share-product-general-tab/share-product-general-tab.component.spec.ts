import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductGeneralTabComponent } from './share-product-general-tab.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ShareProductGeneralTabComponent', () => {
  let component: ShareProductGeneralTabComponent;
  let fixture: ComponentFixture<ShareProductGeneralTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductGeneralTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductGeneralTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
