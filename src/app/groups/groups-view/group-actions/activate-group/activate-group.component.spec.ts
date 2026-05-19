import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateGroupComponent } from './activate-group.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ActivateGroupComponent', () => {
  let component: ActivateGroupComponent;
  let fixture: ComponentFixture<ActivateGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ActivateGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateGroupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
