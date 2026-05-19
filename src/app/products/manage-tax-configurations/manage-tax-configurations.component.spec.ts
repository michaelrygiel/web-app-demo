import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTaxConfigurationsComponent } from './manage-tax-configurations.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageTaxConfigurationsComponent', () => {
  let component: ManageTaxConfigurationsComponent;
  let fixture: ComponentFixture<ManageTaxConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageTaxConfigurationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTaxConfigurationsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
