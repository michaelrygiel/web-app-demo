import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferClientComponent } from './transfer-client.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('TransferClientComponent', () => {
  let component: TransferClientComponent;
  let fixture: ComponentFixture<TransferClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [TransferClientComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferClientComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
