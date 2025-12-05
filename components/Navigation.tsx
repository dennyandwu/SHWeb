import React from 'react';
import { ViewState } from '../types';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems: { id: ViewState; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'essentials', label: 'Essentials' },
    { id: 'ai-planner', label: 'AI Concierge' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
            <span className="text-2xl mr-2">⛩️</span>
            <span className="font-serif text-xl font-bold tracking-tight text-indigo-900">Shanghai Voyager</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  currentView === item.id
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-slate-500 hover:text-indigo-900 hover:border-indigo-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Nav Toggle (Simplified for this demo) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-500 hover:text-indigo-900">
               {/* Hamburger Icon Placeholder */}
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu could go here, but omitted for brevity in single-file requirement context */}
    </nav>
  );
};

export default Navigation;