import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInterestAsOnSavingsAccountComponent } from './post-interest-as-on-savings-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('PostInterestAsOnSavingsAccountComponent', () => {
  let component: PostInterestAsOnSavingsAccountComponent;
  let fixture: ComponentFixture<PostInterestAsOnSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [PostInterestAsOnSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInterestAsOnSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
