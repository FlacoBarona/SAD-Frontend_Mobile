import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      supabaseUrl,
      supabaseKey
    );
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error('Error al iniciar sesión:', error.message);
        throw error;
      }
      console.log('Usuario autenticado:', data);
      return data;
    } catch (error) {
      console.error('Error en el proceso de inicio de sesión:', error);
      throw error;
    }
  }

  async register(
    email: string,
    password: string,
    nombre: string,
    tipoDocumento: string,
    numeroDocumento: string,
    fechaNacimiento: string,
    numeroCelular: string
  ): Promise<any> {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        console.error('Error al registrar:', error.message);
        throw error;
      }

      const { error: profileError } = await this.supabase.from('profiles').upsert({
        id: data.user?.id, 
        nombre,
        tipoDocumento,
        numeroDocumento,
        fechaNacimiento,
        numeroCelular,
      });
      if (profileError) {
        console.error('Error al guardar datos adicionales del usuario:', profileError.message);
        throw profileError;
      }

      console.log('Usuario registrado y perfil actualizado:', data);
      return data;
    } catch (error) {
      console.error('Error en el proceso de registro:', error);
      throw error;
    }
  }

}
