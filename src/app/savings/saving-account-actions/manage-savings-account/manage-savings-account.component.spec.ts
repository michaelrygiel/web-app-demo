import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSavingsAccountComponent } from './manage-savings-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ManageSavingsAccountComponent', () => {
  let component: ManageSavingsAccountComponent;
  let fixture: ComponentFixture<ManageSavingsAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageSavingsAccountComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
