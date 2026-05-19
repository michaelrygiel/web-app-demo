import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollateralComponent } from './edit-collateral.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('EditCollateralComponent', () => {
  let component: EditCollateralComponent;
  let fixture: ComponentFixture<EditCollateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditCollateralComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCollateralComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
