import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchToolComponent } from './search-tool.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('SearchToolComponent', () => {
  let component: SearchToolComponent;
  let fixture: ComponentFixture<SearchToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SearchToolComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchToolComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
