import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateOpeningBalancesComponent } from './migrate-opening-balances.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('MigrateOpeningBalancesComponent', () => {
  let component: MigrateOpeningBalancesComponent;
  let fixture: ComponentFixture<MigrateOpeningBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [MigrateOpeningBalancesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateOpeningBalancesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
