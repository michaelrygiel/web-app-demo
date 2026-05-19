import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAccountTableComponent } from './share-account-table.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ShareAccountTableComponent', () => {
  let component: ShareAccountTableComponent;
  let fixture: ComponentFixture<ShareAccountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareAccountTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareAccountTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
