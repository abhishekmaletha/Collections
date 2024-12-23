import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Hello, {user.name}! 👋
          </h1>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
        <p className="text-gray-600">
          Welcome to your dashboard. You're successfully logged in!
        </p>
      </div>
    </div>
  );
}