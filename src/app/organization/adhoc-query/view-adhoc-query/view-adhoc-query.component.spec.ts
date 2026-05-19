import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdhocQueryComponent } from './view-adhoc-query.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewAdhocQueryComponent', () => {
  let component: ViewAdhocQueryComponent;
  let fixture: ComponentFixture<ViewAdhocQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewAdhocQueryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdhocQueryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
