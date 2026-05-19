import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableTabsComponent } from './datatable-tabs.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('DatatableTabsComponent', () => {
  let component: DatatableTabsComponent;
  let fixture: ComponentFixture<DatatableTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DatatableTabsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableTabsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
