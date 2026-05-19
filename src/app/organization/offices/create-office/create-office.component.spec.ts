import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfficeComponent } from './create-office.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateOfficeComponent', () => {
  let component: CreateOfficeComponent;
  let fixture: ComponentFixture<CreateOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateOfficeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOfficeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
