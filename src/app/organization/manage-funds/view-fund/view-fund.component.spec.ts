import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFundComponent } from './view-fund.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewFundComponent', () => {
  let component: ViewFundComponent;
  let fixture: ComponentFixture<ViewFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewFundComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
