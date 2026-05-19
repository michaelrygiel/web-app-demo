import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAccountInterbankTransfersComponent } from './make-account-interbank-transfers.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('MakeAccountInterbankTransfersComponent', () => {
  let component: MakeAccountInterbankTransfersComponent;
  let fixture: ComponentFixture<MakeAccountInterbankTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [MakeAccountInterbankTransfersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeAccountInterbankTransfersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
