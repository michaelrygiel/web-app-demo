import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTransferLoanComponent } from './asset-transfer-loan.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AssetTransferLoanComponent', () => {
  let component: AssetTransferLoanComponent;
  let fixture: ComponentFixture<AssetTransferLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AssetTransferLoanComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTransferLoanComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
