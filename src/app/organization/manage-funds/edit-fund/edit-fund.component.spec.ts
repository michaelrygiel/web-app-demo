import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFundComponent } from './edit-fund.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditFundComponent', () => {
  let component: EditFundComponent;
  let fixture: ComponentFixture<EditFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditFundComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
