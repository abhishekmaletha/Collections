import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   login(email, password);
  //   navigate('/main');
  // };
  const handleClick = (e: React.FormEvent) => {
    console.log('consoling handle click')
    e.preventDefault();
    login(email, password);
    navigate('/main');
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

          <Input
            id="email"
            type="email"
            label="Email"
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <Input
            id="password"
            type="password"
            label="Password"
            icon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <Button
            type="submit"
            icon={LogIn}
            loading={loading}
            onClick={handleClick}
            className="w-full"
          >
            Sign In
          </Button>
        </form> */}
        <Button
            type="submit"
            icon={LogIn}
            loading={loading}
            onClick={handleClick}
            className="w-full"
          >
            Sign In
            </Button>
      </div>
    </div>
  );
}