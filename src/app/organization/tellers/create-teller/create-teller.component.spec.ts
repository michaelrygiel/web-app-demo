import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTellerComponent } from './create-teller.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateTellerComponent', () => {
  let component: CreateTellerComponent;
  let fixture: ComponentFixture<CreateTellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateTellerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTellerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
