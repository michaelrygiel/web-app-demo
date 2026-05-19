import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHooksComponent } from './manage-hooks.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageHooksComponent', () => {
  let component: ManageHooksComponent;
  let fixture: ComponentFixture<ManageHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageHooksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHooksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
