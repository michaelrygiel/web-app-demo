import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeNavigationComponent } from './office-navigation.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('OfficeNavigationComponent', () => {
  let component: OfficeNavigationComponent;
  let fixture: ComponentFixture<OfficeNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [OfficeNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeNavigationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
