'use client';

import { useState } from 'react';

interface EmailSignupProps {
  headline?: string;
  buttonText?: string;
}

export default function EmailSignup({ 
  headline = "Get AI income ideas weekly",
  buttonText = "Subscribe"
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://buttondown.com/api/emails/embed-subscribe/gigwithai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${encodeURIComponent(email)}`,
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-violet-900/20 border border-violet-800 rounded-lg p-6 my-8 text-center">
        <p className="text-violet-400 font-medium">You're in! Check your email.</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-8">
      <h3 className="text-lg font-semibold mb-2 text-white">{headline}</h3>
      <p className="text-neutral-400 text-sm mb-4">Free weekly tips on making money with AI tools.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2 border border-neutral-700 rounded-md bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-md transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : buttonText}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
