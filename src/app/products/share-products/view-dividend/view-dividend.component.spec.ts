import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDividendComponent } from './view-dividend.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewDividendComponent', () => {
  let component: ViewDividendComponent;
  let fixture: ComponentFixture<ViewDividendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewDividendComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDividendComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
