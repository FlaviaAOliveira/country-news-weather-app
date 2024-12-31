import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeighboursPage } from './neighbours.page';

describe('NeighboursPage', () => {
  let component: NeighboursPage;
  let fixture: ComponentFixture<NeighboursPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighboursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
