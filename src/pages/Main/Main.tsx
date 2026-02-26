import * as React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-navy-gradient bg-navy-950 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Title */}
        <h1 className="font-display text-6xl md:text-7xl text-white tracking-wider mb-2 text-center drop-shadow-[0_0_30px_rgba(33,96,146,0.5)]">
          SEA WARS
        </h1>
        <p className="text-navy-600 text-sm font-medium tracking-[0.3em] uppercase mb-12 text-center">
          Naval Battle
        </p>

        {/* Menu - flat card grid */}
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link
            to="/game/player_vs_ai"
            className="block px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
              text-white font-medium hover:bg-white/10 hover:border-brass/50 hover:shadow-brass-glow
              transition-all duration-300 hover:-translate-y-0.5 text-center"
          >
            <span className="text-brass font-semibold">Player</span>
            <span className="text-white/70"> vs </span>
            <span className="text-brass font-semibold">AI</span>
          </Link>

          <Link
            to="/game/ai_vs_ai"
            className="block px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
              text-white font-medium hover:bg-white/10 hover:border-brass/50 hover:shadow-brass-glow
              transition-all duration-300 hover:-translate-y-0.5 text-center"
          >
            <span className="text-brass font-semibold">AI</span>
            <span className="text-white/70"> vs </span>
            <span className="text-brass font-semibold">AI</span>
          </Link>

          <div
            className="md:col-span-2 block px-5 py-4 rounded-xl bg-white/[0.02] border border-white/5 
              text-white/40 font-medium cursor-not-allowed text-center"
          >
            <span>Player vs Player</span>
            <span className="block text-xs text-white/30 mt-1">Coming soon</span>
          </div>

          <Link
            to="/settings"
            className="md:col-span-2 flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
              text-white font-medium hover:bg-white/10 hover:border-brass/50 hover:shadow-brass-glow
              transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5 text-brass"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Main;
