import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsDocumentsTabComponent } from './savings-documents-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SavingsDocumentsTabComponent', () => {
  let component: SavingsDocumentsTabComponent;
  let fixture: ComponentFixture<SavingsDocumentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsDocumentsTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsDocumentsTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
