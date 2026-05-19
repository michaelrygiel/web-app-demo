import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaxComponentComponent } from './create-tax-component.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateTaxComponentComponent', () => {
  let component: CreateTaxComponentComponent;
  let fixture: ComponentFixture<CreateTaxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateTaxComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaxComponentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
