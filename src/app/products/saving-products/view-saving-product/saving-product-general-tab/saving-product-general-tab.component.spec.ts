import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductGeneralTabComponent } from './saving-product-general-tab.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SavingProductGeneralTabComponent', () => {
  let component: SavingProductGeneralTabComponent;
  let fixture: ComponentFixture<SavingProductGeneralTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductGeneralTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductGeneralTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
