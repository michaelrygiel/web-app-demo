import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalServicesComponent } from './external-services.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ExternalServicesComponent', () => {
  let component: ExternalServicesComponent;
  let fixture: ComponentFixture<ExternalServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ExternalServicesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalServicesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
