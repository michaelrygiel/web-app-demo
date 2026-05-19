import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClosureComponent } from './view-closure.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewClosureComponent', () => {
  let component: ViewClosureComponent;
  let fixture: ComponentFixture<ViewClosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewClosureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClosureComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
