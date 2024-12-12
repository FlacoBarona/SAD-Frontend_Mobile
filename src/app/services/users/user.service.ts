import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private supabase: SupabaseClient;
  
    constructor() {
      this.supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseKey
      );
    }

  async getUsers(userId: string | null = null): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_users', { p_id_user: userId });
    if (error) {
      console.error('Error fetching users:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async insertUser(data: {
    p_document_type: string;
    p_document_number: string;
    p_first_name: string;
    p_second_name: string;
    p_last_name: string;
    p_second_last_name: string;
    p_birth_date: string;
    p_phone_number: string;
    p_email: string;
    p_url_photo: string;
    p_role: string;
    p_observations: string;
    user_id: string;
  }): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('insert_user', data);
    if (error) {
      console.error('Error inserting user:', error);
      throw new Error(error.message);
    }
    return result;
  }

  async updateUser(data: {
    p_id_user: string;
    p_document_type?: string;
    p_document_number?: string;
    p_first_name?: string;
    p_second_name?: string;
    p_last_name?: string;
    p_second_last_name?: string;
    p_birth_date?: string;
    p_phone_number?: string;
    p_email?: string;
    p_url_photo?: string;
    p_role?: string;
    p_observations?: string;
    p_status?: string;
  }): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('update_record', data);
    if (error) {
      console.error('Error updating user:', error);
      throw new Error(error.message);
    }
    return result;
  }

  async deleteUser(userId: string): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('delete_user', { p_id_user: userId });
    if (error) {
      console.error('Error deleting user:', error);
      throw new Error(error.message);
    }
    return result;
  }
}
