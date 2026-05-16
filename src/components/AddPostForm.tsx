'use client';

import { useState } from 'react';

interface AddPostFormProps {
  userId: number;
  onPostAdded: (post: { title: string; body: string; id: number; userId: number }) => void;
}

export default function AddPostForm({ userId, onPostAdded }: AddPostFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !body.trim()) {
      setError('Both title and body are required.');
      return;
    }

    const newPost = {
      title,
      body,
      id: Date.now(), // Local ID
      userId,
    };

    onPostAdded(newPost);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Post</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title:</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Body:</label>
          <textarea
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all min-h-[100px] text-black"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post content"
          />
        </div>

        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm"
        >
          Submit Post
        </button>
      </div>
    </form>
  );
}
