import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTaxGroupsComponent } from './manage-tax-groups.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageTaxGroupsComponent', () => {
  let component: ManageTaxGroupsComponent;
  let fixture: ComponentFixture<ManageTaxGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageTaxGroupsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTaxGroupsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
