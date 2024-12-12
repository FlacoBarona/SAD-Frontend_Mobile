import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
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
    userDetails: {
      document_type: string;
      document_number: string;
      first_name: string;
      second_name?: string;
      last_name: string;
      second_last_name?: string;
      birth_date: string;
      phone_number: string;
      url_photo?: string;
      role: string;
      observations?: string;
      status: string;
    }
  ): Promise<any> {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error during user registration:', error.message);
      throw new Error(error.message);
    }

    const userId = data?.user?.id; 

    if (!userId) {
      throw new Error('Failed to retrieve user ID after registration.');
    }

    const { error: insertError } = await this.supabase
      .rpc('insert_user', {
        p_document_type: userDetails.document_type,
        p_document_number: userDetails.document_number,
        p_first_name: userDetails.first_name,
        p_second_name: userDetails.second_name || null,
        p_last_name: userDetails.last_name,
        p_second_last_name: userDetails.second_last_name || null,
        p_birth_date: userDetails.birth_date,
        p_phone_number: userDetails.phone_number,
        p_email: email,
        p_url_photo: userDetails.url_photo || null,
        p_role: userDetails.role,
        p_observations: userDetails.observations || null,
        p_status: userDetails.status,
        user_id: userId,
      });

    if (insertError) {
      console.error('Error inserting user into public.users:', insertError.message);
      throw new Error(insertError.message);
    }

    return { message: 'User registered successfully', userId };
  }

}
