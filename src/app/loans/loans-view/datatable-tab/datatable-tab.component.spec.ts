import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableTabComponent } from './datatable-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('DatatableTabComponent', () => {
  let component: DatatableTabComponent;
  let fixture: ComponentFixture<DatatableTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DatatableTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
