import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesComponent } from './offices.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('OfficesComponent', () => {
  let component: OfficesComponent;
  let fixture: ComponentFixture<OfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [OfficesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
