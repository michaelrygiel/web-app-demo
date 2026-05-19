import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunReportComponent } from './run-report.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('RunReportComponent', () => {
  let component: RunReportComponent;
  let fixture: ComponentFixture<RunReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RunReportComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunReportComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
