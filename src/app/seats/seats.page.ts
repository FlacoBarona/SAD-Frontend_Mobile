import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeatService } from '../services/seats/seat.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.page.html',
  styleUrls: ['./seats.page.scss'],
})
export class SeatsPage implements OnInit {
  seats: Array<{ id: string; number: number; selected: boolean; type: string }> = [];
  selectedFrequency: any = null;
  loading: boolean = false;

  constructor(private router: Router, private seatService: SeatService) {}

  async ngOnInit() {
    this.selectedFrequency = JSON.parse(localStorage.getItem('selectedFrequency')!);  // Cargar la frecuencia seleccionada
    await this.loadSeats();
  }

  async loadSeats() {
    this.loading = true;
    try {
      const seatsData = await this.seatService.getAllSeats();
      this.seats = seatsData.map((seat: any, index: number) => ({
        id: seat.id,
        number: index + 1,
        selected: false,
        type: seat.type,
      }));
    } catch (error) {
      console.error('Error loading seats:', error);
      alert('Error al cargar los asientos. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      this.loading = false;
    }
  }

  selectSeat(seat: any) {
    seat.selected = !seat.selected;
  }

  continue() {
    const selectedSeats = this.seats.filter((seat) => seat.selected);
    if (selectedSeats.length === 0) {
      alert('Por favor, selecciona al menos un asiento.');
      return;
    }
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));  // Guardar los asientos seleccionados
    this.router.navigate(['/quality-seats']);  // Navegar a la página de calidad de asientos
  }
}
