import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFundComponent } from './create-fund.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateFundComponent', () => {
  let component: CreateFundComponent;
  let fixture: ComponentFixture<CreateFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateFundComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
