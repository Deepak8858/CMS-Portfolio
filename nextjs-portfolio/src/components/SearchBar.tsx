'use client';

import React, { useState } from 'react';
import { searchProjects } from '../lib/algoliaClient';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await searchProjects(query);
    setResults(res.hits);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-8">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="flex-1 border rounded px-4 py-2"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Search</button>
      </form>
      {loading && <div className="mt-4 text-gray-500">Searching...</div>}
      <ul className="mt-4">
        {results.map((hit) => (
          <li key={hit.objectID} className="border-b py-2">{hit.title}</li>
        ))}
      </ul>
    </div>
  );
}
