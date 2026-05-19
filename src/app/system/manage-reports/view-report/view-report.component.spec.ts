import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportComponent } from './view-report.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewReportComponent', () => {
  let component: ViewReportComponent;
  let fixture: ComponentFixture<ViewReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewReportComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
