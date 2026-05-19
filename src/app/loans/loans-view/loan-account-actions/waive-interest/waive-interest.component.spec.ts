import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiveInterestComponent } from './waive-interest.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('WaiveInterestComponent', () => {
  let component: WaiveInterestComponent;
  let fixture: ComponentFixture<WaiveInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WaiveInterestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiveInterestComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
