import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateClientComponent } from './activate-client.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ActivateClientComponent', () => {
  let component: ActivateClientComponent;
  let fixture: ComponentFixture<ActivateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ActivateClientComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateClientComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
