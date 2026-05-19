import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGsimAccountComponent } from './create-gsim-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateGsimAccountComponent', () => {
  let component: CreateGsimAccountComponent;
  let fixture: ComponentFixture<CreateGsimAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateGsimAccountComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGsimAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
