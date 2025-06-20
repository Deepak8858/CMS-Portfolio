import { useEffect, useState } from 'react';

export default function AdminMessages() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/contact', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is always an array
        const arr = Array.isArray(data) ? data : [];
        setMessages(arr.reverse());
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Messages</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center">Loading...</div>
        ) : messages.length === 0 ? (
          <div className="col-span-full text-center">No messages yet.</div>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border-t-4 border-blue-600">
              <div className="font-bold text-lg text-blue-700">{msg.name}</div>
              <div className="text-sm text-gray-500">{msg.email}</div>
              <div className="text-xs text-gray-400 mb-2">{new Date(msg.created_at || msg.date).toLocaleString()}</div>
              <div className="text-gray-800">{msg.message}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
