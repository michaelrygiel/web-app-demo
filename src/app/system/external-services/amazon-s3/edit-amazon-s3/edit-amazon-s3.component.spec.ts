import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAmazonS3Component } from './edit-amazon-s3.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditAmazonS3Component', () => {
  let component: EditAmazonS3Component;
  let fixture: ComponentFixture<EditAmazonS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditAmazonS3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAmazonS3Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
