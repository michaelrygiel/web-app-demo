import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDateTabComponent } from './business-date-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('BusinessDateTabComponent', () => {
  let component: BusinessDateTabComponent;
  let fixture: ComponentFixture<BusinessDateTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [BusinessDateTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDateTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
