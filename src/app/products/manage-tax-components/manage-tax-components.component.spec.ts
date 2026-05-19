import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTaxComponentsComponent } from './manage-tax-components.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('FixedDepositProductsComponent', () => {
  let component: ManageTaxComponentsComponent;
  let fixture: ComponentFixture<ManageTaxComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageTaxComponentsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTaxComponentsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
