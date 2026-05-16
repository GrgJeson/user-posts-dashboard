'use client';

import { useState, useEffect, use } from 'react';
import { Post, User } from '@/types';
import PostCard from '@/components/PostCard';
import AddPostForm from '@/components/AddPostForm';
import Link from 'next/link';

interface UserPostsPageProps {
  params: Promise<{ id: string }>;
}

export default function UserPostsPage({ params }: UserPostsPageProps) {
  const { id: userIdStr } = use(params);
  const userId = parseInt(userIdStr);

  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [apiIsLoading, setApiIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiIsLoading(true);
        const [postsRes, userRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        ]);

        if (!postsRes.ok || !userRes.ok) throw new Error('Failed to fetch data');

        const postsData = await postsRes.json();
        const userData = await userRes.json();

        const storedPosts = localStorage.getItem(`localPosts_${userId}`);
        const localPosts = storedPosts ? JSON.parse(storedPosts) : [];

        setPosts([...localPosts, ...postsData]);
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setApiIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handlePostAdded = (newPost: Post) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);

    const storedPosts = localStorage.getItem(`localPosts_${userId}`);
    const localPosts = storedPosts ? JSON.parse(storedPosts) : [];
    localStorage.setItem(`localPosts_${userId}`, JSON.stringify([newPost, ...localPosts]));
  };

  if (apiIsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-medium text-gray-600 animate-pulse">Loading posts...</p>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-xl font-medium text-red-500">Something went wrong</p>
        <p className="text-gray-600">{error || 'User not found'}</p>
        <Link 
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-8">
      <Link 
        href="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Users
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{user.name}'s Posts</h1>
        <p className="text-gray-500 text-lg">{user.email} • {user.company.name}</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Feed</h2>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="text-gray-500 italic">This user has no posts yet.</p>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-8">
            <AddPostForm userId={userId} onPostAdded={handlePostAdded} />
          </div>
        </aside>
      </section>
    </main>
  );
}
