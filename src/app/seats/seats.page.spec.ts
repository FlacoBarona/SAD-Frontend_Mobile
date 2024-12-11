import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeatsPage } from './seats.page';

describe('SeatsPage', () => {
  let component: SeatsPage;
  let fixture: ComponentFixture<SeatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
