import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawnByClientComponent } from './withdrawn-by-client.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('WithdrawnByClientComponent', () => {
  let component: WithdrawnByClientComponent;
  let fixture: ComponentFixture<WithdrawnByClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WithdrawnByClientComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawnByClientComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
