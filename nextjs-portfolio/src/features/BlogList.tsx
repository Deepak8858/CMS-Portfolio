import React, { useEffect, useState } from 'react';
import { BlogPost } from '../types';
import { fetchBlogPosts } from '../lib/api';

const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const data = await fetchBlogPosts();
                setPosts(data);
            } catch (err) {
                setError('Failed to load blog posts');
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="mb-4">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-gray-700">{post.excerpt}</p>
                        <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                            Read more
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;