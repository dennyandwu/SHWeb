import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AttractionCard from './components/AttractionCard';
import AIChat from './components/AIChat';
import { ATTRACTIONS, ESSENTIAL_TIPS } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation currentView={currentView} setView={setCurrentView} />

      <main className="flex-grow">
        {/* HOME VIEW */}
        {currentView === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative h-[600px] w-full overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://picsum.photos/id/122/1600/900" 
                  alt="Shanghai Skyline" 
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight drop-shadow-lg">
                  Discover Shanghai
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mb-8 font-light">
                  A curated guide for European travelers. Where futuristic skyscrapers meet colonial history.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setCurrentView('attractions')}
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-transform transform hover:scale-105 shadow-lg"
                  >
                    Top Sights
                  </button>
                  <button 
                    onClick={() => setCurrentView('essentials')}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold transition-transform transform hover:scale-105 shadow-lg"
                  >
                    Survival Guide
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Intro Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Why Shanghai?</h2>
                <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Shanghai is the pulsing heart of modern China. For European visitors, it offers a fascinating blend of the familiar and the exotic. Walk the <span className="text-indigo-900 font-semibold">Bund</span> to see European architecture, then turn around to face the towering giants of <span className="text-indigo-900 font-semibold">Lujiazui</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                   <div className="text-4xl mb-4">🚆</div>
                   <h3 className="text-xl font-bold mb-2">Visa-Free Transit</h3>
                   <p className="text-slate-600 text-sm">Most Europeans can stay for 144 hours (6 days) without a full visa. Perfect for a stopover.</p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                   <div className="text-4xl mb-4">💳</div>
                   <h3 className="text-xl font-bold mb-2">Easy Payments</h3>
                   <p className="text-slate-600 text-sm">Link your international cards to Alipay or WeChat Pay. No need to carry stacks of cash.</p>
                 </div>
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                   <div className="text-4xl mb-4">👮</div>
                   <h3 className="text-xl font-bold mb-2">Safe & Modern</h3>
                   <p className="text-slate-600 text-sm">One of the safest megacities in the world with a state-of-the-art metro system.</p>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* ATTRACTIONS VIEW */}
        {currentView === 'attractions' && (
          <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Must-See Landmarks</h2>
              <p className="text-slate-600">From ancient gardens to cloud-piercing towers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ATTRACTIONS.map(attraction => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </div>
        )}

        {/* ESSENTIALS VIEW */}
        {currentView === 'essentials' && (
          <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">European Survival Guide</h2>
              <p className="text-slate-600">Everything you need to know before you land.</p>
            </div>
            <div className="space-y-6">
              {ESSENTIAL_TIPS.map(tip => (
                <div key={tip.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6 md:flex md:items-start md:space-x-6">
                    <div className="flex-shrink-0 bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 md:mb-0">
                      {tip.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{tip.title}</h3>
                      <p className="font-semibold text-indigo-700 mb-3 text-sm uppercase tracking-wide">{tip.summary}</p>
                      <p className="text-slate-600 leading-relaxed">{tip.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI PLANNER VIEW */}
        {currentView === 'ai-planner' && (
          <div className="max-w-7xl mx-auto px-4 py-8 h-[calc(100vh-80px)] animate-fade-in">
             <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 font-serif">Your AI Concierge</h2>
              <p className="text-slate-600">Powered by Gemini. Ask for a personalized itinerary or practical help.</p>
            </div>
            <AIChat />
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Shanghai Voyager</h4>
            <p className="text-sm">Connecting East and West through seamless travel experiences. Built for the modern explorer.</p>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentView('attractions')} className="hover:text-white transition-colors">Top Attractions</button></li>
              <li><button onClick={() => setCurrentView('essentials')} className="hover:text-white transition-colors">Visa Info</button></li>
              <li><button onClick={() => setCurrentView('ai-planner')} className="hover:text-white transition-colors">AI Planner</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Emergency</h4>
            <p className="text-sm mb-2">Police: <span className="text-white">110</span></p>
            <p className="text-sm">Medical: <span className="text-white">120</span></p>
            <p className="text-sm mt-4 text-slate-500">Note: This is a demo application.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;