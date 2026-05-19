import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalIdentifierComponent } from './external-identifier.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ExternalIdentifierComponent', () => {
  let component: ExternalIdentifierComponent;
  let fixture: ComponentFixture<ExternalIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ExternalIdentifierComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalIdentifierComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
