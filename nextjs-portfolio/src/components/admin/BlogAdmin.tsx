'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function BlogAdmin() {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchPosts = async () => {
    const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    setPosts(data || []);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from('blog_posts').insert([{ title, content }]);
    setTitle('');
    setContent('');
    fetchPosts();
  };

  useEffect(() => { fetchPosts(); }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Blog Posts</h2>
      <form onSubmit={handleAdd} className="mb-4 flex flex-col gap-2">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="border p-2 rounded" />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Post</button>
      </form>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-2 p-2 border rounded">
            <strong>{post.title}</strong>
            <div>{post.content}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
