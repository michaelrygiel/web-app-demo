import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentPostingsComponent } from './frequent-postings.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('FrequentPostingsComponent', () => {
  let component: FrequentPostingsComponent;
  let fixture: ComponentFixture<FrequentPostingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FrequentPostingsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentPostingsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
