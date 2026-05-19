import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivateClientComponent } from './reactivate-client.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ReactivateClientComponent', () => {
  let component: ReactivateClientComponent;
  let fixture: ComponentFixture<ReactivateClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ReactivateClientComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivateClientComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
