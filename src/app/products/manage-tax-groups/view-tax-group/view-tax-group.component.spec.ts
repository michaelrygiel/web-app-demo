import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaxGroupComponent } from './view-tax-group.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewTaxGroupComponent', () => {
  let component: ViewTaxGroupComponent;
  let fixture: ComponentFixture<ViewTaxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewTaxGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaxGroupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
