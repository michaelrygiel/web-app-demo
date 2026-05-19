import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaxGroupComponent } from './create-tax-group.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateTaxGroupComponent', () => {
  let component: CreateTaxGroupComponent;
  let fixture: ComponentFixture<CreateTaxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateTaxGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaxGroupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
