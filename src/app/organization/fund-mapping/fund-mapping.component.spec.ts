import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundMappingComponent } from './fund-mapping.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('FundMappingComponent', () => {
  let component: FundMappingComponent;
  let fixture: ComponentFixture<FundMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FundMappingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundMappingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
