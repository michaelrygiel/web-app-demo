import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdhocQueryComponent } from './create-adhoc-query.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateAdhocQueryComponent', () => {
  let component: CreateAdhocQueryComponent;
  let fixture: ComponentFixture<CreateAdhocQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateAdhocQueryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdhocQueryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
