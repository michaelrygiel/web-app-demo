import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellersComponent } from './tellers.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('TellersComponent', () => {
  let component: TellersComponent;
  let fixture: ComponentFixture<TellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [TellersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
