import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDisbursedPieComponent } from './amount-disbursed-pie.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('AmountDisbursedPieComponent', () => {
  let component: AmountDisbursedPieComponent;
  let fixture: ComponentFixture<AmountDisbursedPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AmountDisbursedPieComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountDisbursedPieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
