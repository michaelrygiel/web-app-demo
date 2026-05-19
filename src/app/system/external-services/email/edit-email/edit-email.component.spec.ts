import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailComponent } from './edit-email.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditEmailComponent', () => {
  let component: EditEmailComponent;
  let fixture: ComponentFixture<EditEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditEmailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
