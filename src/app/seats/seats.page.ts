import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.page.html',
  styleUrls: ['./seats.page.scss'],
})
export class SeatsPage implements OnInit {

  constructor(private router: Router) {
    
  }

  ngOnInit() {}

  seats = Array.from({ length: 24 }, (_, i) => ({
    number: i + 1,
    selected: false,
  }));

  selectSeat(seat: any) {
    seat.selected = !seat.selected;
  }

  continue() {
    const selectedSeats = this.seats.filter((seat) => seat.selected);
    console.log('Selected seats:', selectedSeats);
    // Aquí puedes manejar la navegación o lógica adicional.
    this.router.navigate(['/quality-seats']);
  }
}
