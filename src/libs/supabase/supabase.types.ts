import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from './database.types'

export type AppSupabaseClient = SupabaseClient<Database>;
export type Table<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];

export type AuthProvider =
    | 'discord'
    | 'github'