import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaxComponentComponent } from './view-tax-component.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewTaxComponentComponent', () => {
  let component: ViewTaxComponentComponent;
  let fixture: ComponentFixture<ViewTaxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewTaxComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaxComponentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
