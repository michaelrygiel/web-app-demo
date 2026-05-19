import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductsDividendsComponent } from './dividends.components';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ShareProductsComponent', () => {
  let component: ShareProductsDividendsComponent;
  let fixture: ComponentFixture<ShareProductsDividendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductsDividendsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductsDividendsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
