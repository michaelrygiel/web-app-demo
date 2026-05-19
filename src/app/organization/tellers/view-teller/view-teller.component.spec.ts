import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTellerComponent } from './view-teller.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewTellerComponent', () => {
  let component: ViewTellerComponent;
  let fixture: ComponentFixture<ViewTellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewTellerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTellerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
