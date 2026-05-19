import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTrendsBarComponent } from './client-trends-bar.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ClientTrendsBarComponent', () => {
  let component: ClientTrendsBarComponent;
  let fixture: ComponentFixture<ClientTrendsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientTrendsBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTrendsBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
