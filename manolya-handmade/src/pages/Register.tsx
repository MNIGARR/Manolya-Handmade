import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { User } from '../types';

export default function Register({ onLogin }: { onLogin: (user: User) => void }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Load existing registered users
    const users: (User & { password: string })[] = JSON.parse(
      localStorage.getItem('manolya_users') || '[]'
    );

    // Check if email already taken
    if (users.find(u => u.email === email)) {
      setError('An account with this email already exists.');
      return;
    }

    // Save new user
    users.push({ name, email, password });
    localStorage.setItem('manolya_users', JSON.stringify(users));

    // Auto-login and redirect
    onLogin({ name, email });
    navigate('/');
  };

  return (
    <div className="container mx-auto px-6 py-20 flex justify-center items-center min-h-[70vh]">
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 w-full max-w-md">
        <h1 className="text-3xl font-bold text-manolya-purple mb-6 text-center">Create Account</h1>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center bg-red-50 py-2 px-4 rounded-md">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none"
              placeholder="Min. 6 characters"
            />
          </div>
          <button
            type="submit"
            className="bg-manolya-purple text-white py-3 rounded-md hover:bg-purple-700 transition font-medium mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-manolya-purple font-semibold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}