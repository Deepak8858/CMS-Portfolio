'use client';

import React, { useState } from 'react';
import { getProfiles, addProfile } from '../lib/supabaseExample';

export default function ProfileList() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchProfiles = async () => {
    setLoading(true);
    const data = await getProfiles();
    setProfiles(data);
    setLoading(false);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await addProfile({ name, email });
    setName('');
    setEmail('');
    await fetchProfiles();
    setLoading(false);
  };

  React.useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto my-8">
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          className="flex-1 border rounded px-4 py-2"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="flex-1 border rounded px-4 py-2"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Add</button>
      </form>
      {loading && <div className="mb-2 text-gray-500">Loading...</div>}
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="border-b py-2">{profile.name} ({profile.email})</li>
        ))}
      </ul>
    </div>
  );
}
