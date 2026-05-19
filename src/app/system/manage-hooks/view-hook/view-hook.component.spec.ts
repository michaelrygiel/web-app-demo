import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHookComponent } from './view-hook.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewHookComponent', () => {
  let component: ViewHookComponent;
  let fixture: ComponentFixture<ViewHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewHookComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHookComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
