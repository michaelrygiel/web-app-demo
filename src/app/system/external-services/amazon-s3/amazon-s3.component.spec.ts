import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonS3Component } from './amazon-s3.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('AmazonS3Component', () => {
  let component: AmazonS3Component;
  let fixture: ComponentFixture<AmazonS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AmazonS3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonS3Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
