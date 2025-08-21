// src/supabaseConnection.ts
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

interface Database {
  public: {
    Tables: {
      users: {
        Row: { id: string; name: string; email: string };
        Insert: { name: string; email: string };
        Update: { name?: string; email?: string };
      };
      books: {
        Row: { id: string; title: string; author: string; pages: number; year: number };
        Insert: { title: string; author: string; pages: number; year: number };
        Update: { title?: string; author?: string; pages?: number; year?: number };
      };
    };
  };
}

export default supabase;