import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGlimAccountComponent } from './create-glim-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateGlimAccountComponent', () => {
  let component: CreateGlimAccountComponent;
  let fixture: ComponentFixture<CreateGlimAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateGlimAccountComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGlimAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
