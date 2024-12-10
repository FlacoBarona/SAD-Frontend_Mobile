import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false; // Por defecto, el usuario no está autenticado

  constructor() {}

  login(): void {
    this.isAuthenticated = true; // Simula que el usuario inicia sesión
  }

  logout(): void {
    this.isAuthenticated = false; // Simula que el usuario cierra sesión
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
