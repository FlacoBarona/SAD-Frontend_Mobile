import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { SeatService } from '../services/seats/seat.service';
import { FrequencyService } from '../services/frequencies/frequency.service';

@Component({
  selector: 'app-quality-seats',
  templateUrl: './quality-seats.page.html',
  styleUrls: ['./quality-seats.page.scss'],
})
export class QualitySeatsPage implements OnInit {
  seats: any[] = []; 
  selectedFrequency: any = null; 
  loadingSeats: boolean = false; 
  loadingFrequency: boolean = false; 

  constructor(
    private seatService: SeatService,
    private frequencyService: FrequencyService,
    private router: Router 
  ) {}

  async loadSeats() {
    this.loadingSeats = true;
    try {
      const seatsData = await this.seatService.getAllSeats();
      this.seats = seatsData.map((seat: any) => ({
        id_bus: seat.id_bus,
        type: seat.type,
        status: seat.status,  
      }));
    } catch (error) {
      console.error('Error loading seats:', error);
      alert('Error al cargar los asientos. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      this.loadingSeats = false;
    }
  }

  async fetchFrequencyById(frequencyId: string) {
    this.loadingFrequency = true;
    try {
      this.selectedFrequency = await this.frequencyService.getFrequencyById(frequencyId);
    } catch (error) {
      console.error('Error fetching frequency:', error);
    } finally {
      this.loadingFrequency = false;
    }
  }

  // Función para seleccionar asiento
  selectSeat(seat: any) {
    alert(`Asiento seleccionado: ${seat.type} - Estado: ${seat.status ? 'Disponible' : 'Ocupado'}`);
  }

  // Función para ir al pago
  goToPayment() {
    this.router.navigate(['/method-of-payment']); 
  }

  async ngOnInit() {
    this.selectedFrequency = JSON.parse(localStorage.getItem('selectedFrequency')!); 
    if (this.selectedFrequency) {
     
      await this.fetchFrequencyById(this.selectedFrequency.id);
    }

    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')!); 
    if (selectedSeats) {
      this.seats = selectedSeats;  
    } else {
      await this.loadSeats();
    }
  }
}
