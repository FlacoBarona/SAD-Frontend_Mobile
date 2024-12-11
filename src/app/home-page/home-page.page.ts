import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  constructor(private router: Router) { }
  viaje: string = ''; // El término que se va a buscar
  trips = [
    { origen: 'Madrid', destino: 'Barcelona', fecha: '2024-12-20' },
    { origen: 'Sevilla', destino: 'Valencia', fecha: '2024-12-25' },
    { origen: 'Madrid', destino: 'Valencia', fecha: '2024-12-22' },
    { origen: 'Barcelona', destino: 'Sevilla', fecha: '2024-12-21' }
  ];

  filteredTrips = [...this.trips];

  submitForm() {
    if (this.viaje.trim() === '') {
      // Si el campo de búsqueda está vacío, mostramos todos los viajes
      this.filteredTrips = [...this.trips];
    } else {
      // Filtrar viajes por el texto ingresado en 'viaje'
      this.filteredTrips = this.trips.filter((trip) =>
        trip.origen.toLowerCase().includes(this.viaje.toLowerCase()) ||
        trip.destino.toLowerCase().includes(this.viaje.toLowerCase())
      );
    }
  }

  asientos(){
    this.router.navigate(['/seats']);
  }

  ngOnInit() {}
}
