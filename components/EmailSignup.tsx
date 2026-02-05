'use client';

import { useState } from 'react';

interface EmailSignupProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  accentColor?: 'emerald' | 'violet' | 'blue';
  compact?: boolean;
}

const colorClasses = {
  emerald: {
    ring: 'focus:ring-emerald-500',
    button: 'bg-emerald-600 hover:bg-emerald-500',
    success: 'bg-emerald-900/20 border-emerald-800 text-emerald-400',
  },
  violet: {
    ring: 'focus:ring-violet-500',
    button: 'bg-violet-600 hover:bg-violet-500',
    success: 'bg-violet-900/20 border-violet-800 text-violet-400',
  },
  blue: {
    ring: 'focus:ring-blue-500',
    button: 'bg-blue-600 hover:bg-blue-500',
    success: 'bg-blue-900/20 border-blue-800 text-blue-400',
  },
};

export default function EmailSignup({ 
  headline = "Get weekly tips",
  description = "Free weekly tips delivered to your inbox.",
  buttonText = "Subscribe",
  accentColor = 'violet',
  compact = false,
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const colors = colorClasses[accentColor];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
      <div className={`${colors.success} border rounded-lg p-6 text-center transition-all duration-300`}>
        <p className="font-medium">You&apos;re in! Check your email.</p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={`flex-1 px-4 py-2 border border-white/10 rounded-lg bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 ${colors.ring} transition-all`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-6 py-2 ${colors.button} text-white font-medium rounded-lg transition-all disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]`}
        >
          {status === 'loading' ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : buttonText}
        </button>
      </form>
    );
  }

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 transition-all hover:border-white/20">
      <h3 className="text-lg font-semibold mb-2 text-white">{headline}</h3>
      <p className="text-white/50 text-sm mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={`flex-1 px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 ${colors.ring} transition-all`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-6 py-3 ${colors.button} text-white font-medium rounded-lg transition-all disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]`}
        >
          {status === 'loading' ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : buttonText}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
