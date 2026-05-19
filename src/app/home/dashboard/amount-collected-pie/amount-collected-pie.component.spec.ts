import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountCollectedPieComponent } from './amount-collected-pie.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('AmountCollectedPieComponent', () => {
  let component: AmountCollectedPieComponent;
  let fixture: ComponentFixture<AmountCollectedPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AmountCollectedPieComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountCollectedPieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
