import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCollateralComponent } from './view-collateral.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewCollateralComponent', () => {
  let component: ViewCollateralComponent;
  let fixture: ComponentFixture<ViewCollateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewCollateralComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCollateralComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
