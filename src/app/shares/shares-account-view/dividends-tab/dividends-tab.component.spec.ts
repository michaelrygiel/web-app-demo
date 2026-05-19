import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendsTabComponent } from './dividends-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('DividendsTabComponent', () => {
  let component: DividendsTabComponent;
  let fixture: ComponentFixture<DividendsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DividendsTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendsTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
