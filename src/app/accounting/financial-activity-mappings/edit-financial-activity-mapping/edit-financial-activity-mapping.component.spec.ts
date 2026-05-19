import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinancialActivityMappingComponent } from './edit-financial-activity-mapping.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditFinancialActivityMappingComponent', () => {
  let component: EditFinancialActivityMappingComponent;
  let fixture: ComponentFixture<EditFinancialActivityMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditFinancialActivityMappingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFinancialActivityMappingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
