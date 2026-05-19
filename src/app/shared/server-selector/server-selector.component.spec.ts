import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSelectorComponent } from './server-selector.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ServerSelectorComponent', () => {
  let component: ServerSelectorComponent;
  let fixture: ComponentFixture<ServerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ServerSelectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSelectorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
