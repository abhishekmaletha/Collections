import { useState } from 'react';
import { User } from '../types/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = (email: string, password: string) => {
    setLoading(true);
    console.log('Logging in with:', email); // Debug log
    
    // Mock successful login - storing full email
    setUser({ email });
    
    console.log('User set to:', { email }); // Debug log
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
}