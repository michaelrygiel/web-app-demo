import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHookComponent } from './create-hook.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateHookComponent', () => {
  let component: CreateHookComponent;
  let fixture: ComponentFixture<CreateHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateHookComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHookComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
