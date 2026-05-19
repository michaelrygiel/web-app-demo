import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffNavigationComponent } from './staff-navigation.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('StaffNavigationComponent', () => {
  let component: StaffNavigationComponent;
  let fixture: ComponentFixture<StaffNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [StaffNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffNavigationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
