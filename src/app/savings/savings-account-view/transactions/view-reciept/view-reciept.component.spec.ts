import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecieptComponent } from './view-reciept.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ViewRecieptComponent', () => {
  let component: ViewRecieptComponent;
  let fixture: ComponentFixture<ViewRecieptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewRecieptComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecieptComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
