import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    // Ensure the 'messages' table exists and columns match
    const { error } = await supabase.from('messages').insert([{ name, email, message }]);
    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ success: true });
  }
  if (req.method === 'GET') {
    // Ensure the 'messages' table exists and columns match
    const { data, error } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
    if (error) {
      console.error('Supabase fetch error:', error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(Array.isArray(data) ? data : []);
  }
  res.setHeader('Allow', ['POST', 'GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
