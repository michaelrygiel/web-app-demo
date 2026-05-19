import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfficeComponent } from './view-office.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewOfficeComponent', () => {
  let component: ViewOfficeComponent;
  let fixture: ComponentFixture<ViewOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewOfficeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfficeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
