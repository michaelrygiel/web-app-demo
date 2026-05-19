import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalAssetTransferComponent } from './external-asset-transfer.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ExternalAssetTransferComponent', () => {
  let component: ExternalAssetTransferComponent;
  let fixture: ComponentFixture<ExternalAssetTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ExternalAssetTransferComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalAssetTransferComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
