'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function UserAdmin() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const fetchUsers = async () => {
    const { data } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });
    setUsers(data || []);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from('profiles').insert([{ name, email }]);
    setName('');
    setEmail('');
    fetchUsers();
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Users</h2>
      <form onSubmit={handleAdd} className="mb-4 flex flex-col gap-2">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border p-2 rounded" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add User</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2 p-2 border rounded">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
}
