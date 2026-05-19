import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataTableComponent } from './create-data-table.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateDataTableComponent', () => {
  let component: CreateDataTableComponent;
  let fixture: ComponentFixture<CreateDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateDataTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
