import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterNavigationComponent } from './center-navigation.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('CenterNavigationComponent', () => {
  let component: CenterNavigationComponent;
  let fixture: ComponentFixture<CenterNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CenterNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterNavigationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
