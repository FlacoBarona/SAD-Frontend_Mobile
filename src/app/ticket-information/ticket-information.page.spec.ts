import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketInformationPage } from './ticket-information.page';

describe('TicketInformationPage', () => {
  let component: TicketInformationPage;
  let fixture: ComponentFixture<TicketInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
