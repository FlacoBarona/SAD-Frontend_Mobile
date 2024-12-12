import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://urwinhkuekffjuhxgull.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyd2luaGt1ZWtmZmp1aHhndWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MjY3ODMsImV4cCI6MjA0NTIwMjc4M30.QaQnVhHLy4iY8PpBuuA8jDgNydwFaEwl7HmuMfHuobQ'
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
