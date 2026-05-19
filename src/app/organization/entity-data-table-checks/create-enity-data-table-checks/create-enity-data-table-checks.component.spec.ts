import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnityDataTableChecksComponent } from './create-enity-data-table-checks.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateEnityDataTableChecksComponent', () => {
  let component: CreateEnityDataTableChecksComponent;
  let fixture: ComponentFixture<CreateEnityDataTableChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateEnityDataTableChecksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnityDataTableChecksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
