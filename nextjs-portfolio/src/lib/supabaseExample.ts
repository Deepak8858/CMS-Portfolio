import { supabase } from '../lib/supabaseClient';

export async function getProfiles() {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) throw error;
  return data;
}

export async function addProfile(profile: { name: string; email: string; }) {
  const { data, error } = await supabase.from('profiles').insert([profile]);
  if (error) throw error;
  return data;
}
