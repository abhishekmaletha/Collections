import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              Hello, {user.email}! 👋
            </h1>
            <Button
              onClick={handleLogout}
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
    </div>
  );
}