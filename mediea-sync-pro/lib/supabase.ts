import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hvhyjdrigyguyoxbbuxu.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2aHlqZHJpZ3lndXlveGJidXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMzI0OTMsImV4cCI6MjA4ODYwODQ5M30.Q2lDRg6AaaYOs6tGpy9_cje3b6Nev81wFIbgjx4wwbI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
