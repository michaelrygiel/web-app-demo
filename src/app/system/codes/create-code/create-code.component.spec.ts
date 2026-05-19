import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCodeComponent } from './create-code.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateCodeComponent', () => {
  let component: CreateCodeComponent;
  let fixture: ComponentFixture<CreateCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateCodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCodeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
