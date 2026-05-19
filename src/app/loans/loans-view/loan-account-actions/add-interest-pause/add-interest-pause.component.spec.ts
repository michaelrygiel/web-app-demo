import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterestPauseComponent } from './add-interest-pause.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('AddInterestPauseComponent', () => {
  let component: AddInterestPauseComponent;
  let fixture: ComponentFixture<AddInterestPauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AddInterestPauseComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInterestPauseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
