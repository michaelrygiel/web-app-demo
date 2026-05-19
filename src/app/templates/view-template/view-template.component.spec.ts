import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTemplateComponent } from './view-template.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ViewTemplateComponent', () => {
  let component: ViewTemplateComponent;
  let fixture: ComponentFixture<ViewTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewTemplateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTemplateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
