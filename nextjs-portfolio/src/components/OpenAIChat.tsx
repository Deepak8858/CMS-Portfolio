'use client';
import React, { useState } from 'react';
import { openai } from '../lib/openai';

export default function OpenAIChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');
    try {
      const result = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 100,
      });
      setResponse(result.data.choices[0].text.trim());
    } catch (err) {
      setResponse('Error: ' + (err as any)?.message);
    }
    setLoading(false);
  };

  return (
    <section className="w-full max-w-xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Ask OpenAI</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-primary/90 transition" disabled={loading}>
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>
      {response && (
        <div className="bg-white rounded-xl shadow p-4 text-gray-800 whitespace-pre-line">
          {response}
        </div>
      )}
    </section>
  );
}
