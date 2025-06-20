'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function BlogPostList() {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    if (!error) setPosts(data || []);
    setLoading(false);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await supabase.from('blog_posts').insert([{ title, content }]);
    setTitle('');
    setContent('');
    await fetchPosts();
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    await supabase.from('blog_posts').delete().eq('id', id);
    await fetchPosts();
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="w-full max-w-xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Blog Posts</h2>
      <form onSubmit={handleAdd} className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Content"
          className="border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-primary/90 transition" disabled={loading}>
          Add Post
        </button>
      </form>
      {loading && <div className="mb-2 text-gray-500">Loading...</div>}
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">{post.title}</div>
              <div className="text-gray-500 text-sm">{post.content}</div>
            </div>
            <button onClick={() => handleDelete(post.id)} className="text-red-500 hover:underline text-sm">Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
