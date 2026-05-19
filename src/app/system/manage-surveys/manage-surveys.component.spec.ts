import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSurveysComponent } from './manage-surveys.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('SurveysComponent', () => {
  let component: ManageSurveysComponent;
  let fixture: ComponentFixture<ManageSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageSurveysComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSurveysComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
