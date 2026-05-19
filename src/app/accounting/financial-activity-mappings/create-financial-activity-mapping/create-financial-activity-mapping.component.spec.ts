import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinancialActivityMappingComponent } from './create-financial-activity-mapping.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateFinancialActivityMappingComponent', () => {
  let component: CreateFinancialActivityMappingComponent;
  let fixture: ComponentFixture<CreateFinancialActivityMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateFinancialActivityMappingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFinancialActivityMappingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
