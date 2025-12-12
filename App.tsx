import React, { useState } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { SegmentCard } from './components/SegmentCard';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { SEGMENTS } from './constants';
import { UserSegment } from './types';

type View = 'HOME' | 'PRIVACY';

function App() {
  const [activeSegment, setActiveSegment] = useState<UserSegment | null>(null);
  const [currentView, setCurrentView] = useState<View>('HOME');

  const toggleSegment = (segment: UserSegment) => {
    if (activeSegment === segment) {
      setActiveSegment(null); // Deselect if clicking active
    } else {
      setActiveSegment(segment);
    }
  };

  const renderHome = () => (
    <>
      {/* Profile Section */}
      <ProfileHeader />

      {/* Introduction / Hook - More compact */}
      <div className="text-center mb-6 px-2 animate-fade-in-up">
         <p className="text-xs font-serif text-gray-500 mb-1">どちらに興味がありますか？</p>
         <h2 className="text-lg font-bold text-gray-800 font-serif">
           あなたの目的に合わせて<br />
           特典をお選びください
         </h2>
      </div>

      {/* Segmentation Cards */}
      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
        <div className="transform transition-all duration-500 hover:-translate-y-1">
          <SegmentCard 
            data={SEGMENTS[UserSegment.SEEKER]} 
            isActive={activeSegment === UserSegment.SEEKER}
            onClick={() => toggleSegment(UserSegment.SEEKER)}
          />
        </div>

        <div className="transform transition-all duration-500 hover:-translate-y-1">
          <SegmentCard 
            data={SEGMENTS[UserSegment.LEARNER]} 
            isActive={activeSegment === UserSegment.LEARNER}
            onClick={() => toggleSegment(UserSegment.LEARNER)}
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-gray-800 font-sans pb-24 selection:bg-beige-200">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-beige-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-stone-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 pt-6">
        {/* Main Content Area */}
        {currentView === 'HOME' ? renderHome() : <PrivacyPolicy onBack={() => setCurrentView('HOME')} />}

        {/* Footer info */}
        <footer className="mt-8 text-center text-[10px] text-gray-400 space-y-2 pb-8 border-t border-beige-100 pt-6">
          <p>© 2026 Hide Spiritual Works. All rights reserved.</p>
          <div className="flex justify-center gap-4">
             <button 
               onClick={() => {
                 setCurrentView('PRIVACY');
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }} 
               className="hover:text-beige-600 transition-colors underline decoration-dotted underline-offset-4"
             >
               プライバシーポリシー
             </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;