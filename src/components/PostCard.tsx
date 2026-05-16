import { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-shadow">
      <h4 className="text-lg font-bold text-gray-900 mb-2 capitalize">{post.title}</h4>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </div>
  );
}
