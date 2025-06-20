import React, { useState } from 'react';

export default function ProjectSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="my-8">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="border rounded px-3 py-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      <ul className="mt-4 space-y-2">
        {results.map(project => (
          <li key={project.id} className="border p-4 rounded shadow">
            <div className="font-bold">{project.title}</div>
            <div className="text-sm text-gray-500">{project.techStack?.join(', ')}</div>
            <div>{project.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
