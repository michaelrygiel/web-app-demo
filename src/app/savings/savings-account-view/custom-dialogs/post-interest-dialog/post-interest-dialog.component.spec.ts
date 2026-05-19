import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInterestDialogComponent } from './post-interest-dialog.component';
import { getTestConfigModule } from '../../../../testing/test-config';
import { MatDialogRef } from '@angular/material/dialog';

describe('PostInterestDialogComponent', () => {
  let component: PostInterestDialogComponent;
  let fixture: ComponentFixture<PostInterestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [PostInterestDialogComponent],
      providers: [
        ...(getTestConfigModule().providers || []),
        { provide: MatDialogRef, useValue: { updateSize: () => {}, close: () => {} } }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInterestDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
