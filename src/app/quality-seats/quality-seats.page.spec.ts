import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QualitySeatsPage } from './quality-seats.page';

describe('QualitySeatsPage', () => {
  let component: QualitySeatsPage;
  let fixture: ComponentFixture<QualitySeatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitySeatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
