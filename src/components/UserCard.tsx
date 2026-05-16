import Link from 'next/link';
import { User } from '@/types';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
      <p className="text-gray-600 mb-1">{user.email}</p>
      <p className="text-sm text-gray-400 mb-4">{user.company.name}</p>
      <Link
        href={`/users/${user.id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        View Posts
      </Link>
    </div>
  );
}
