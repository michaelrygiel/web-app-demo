import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDividendComponent } from './create-dividend.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateDividendComponent', () => {
  let component: CreateDividendComponent;
  let fixture: ComponentFixture<CreateDividendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateDividendComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDividendComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
