import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollateralComponent } from './create-collateral.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateCollateralComponent', () => {
  let component: CreateCollateralComponent;
  let fixture: ComponentFixture<CreateCollateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateCollateralComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCollateralComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
