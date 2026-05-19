import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientCollateralComponent } from './add-client-collateral.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AddClientCollateralComponent', () => {
  let component: AddClientCollateralComponent;
  let fixture: ComponentFixture<AddClientCollateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AddClientCollateralComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientCollateralComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
