import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';

export function WelcomeMessage() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Hello, {user.email}! 👋
          </h1>
          <Button
            onClick={logout}
            variant="danger"
            icon={LogOut}
          >
            Sign Out
          </Button>
        </div>
        <p className="text-gray-600">
          Welcome to your dashboard. You're successfully logged in!
        </p>
      </div>
    </div>
  );
}