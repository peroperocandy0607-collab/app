import React from 'react';
import { PROFILE_DATA } from '../constants';
import { Instagram, Book } from 'lucide-react';

export const ProfileHeader: React.FC = () => {
  return (
    <section className="animate-fade-in-down mb-6">
      {/* Top Row: Photo & Basic Info (Side-by-side to save height) */}
      <div className="relative overflow-hidden bg-white/80 rounded-3xl border border-beige-200 shadow-lg backdrop-blur-sm p-5">
        
        {/* Decorative background blob inside the card */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-beige-300/30 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex items-start gap-5 relative z-10">
          {/* Profile Image - Beautiful Squircle with styling */}
          <div className="shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-beige-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src={PROFILE_DATA.imageUrl} 
                alt={PROFILE_DATA.name} 
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover border-[3px] border-white shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  console.warn("Profile image not found. Please ensure 'profile.jpg' is in the public folder.");
                  (e.target as HTMLImageElement).src = "https://placehold.co/400x400/efebe5/a89b8c?text=No+Image";
                }}
              />
              <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-sm border border-beige-100">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Info Text */}
          <div className="flex-1 min-w-0 pt-1">
            <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-800 tracking-wide mb-1 leading-tight">
              {PROFILE_DATA.name}
            </h1>
            {/* Adjusted: text-[10px], removed truncate to allow wrapping */}
            <p className="text-beige-600 font-medium text-[10px] md:text-xs tracking-wider uppercase mb-3 leading-tight">
              {PROFILE_DATA.title}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-1">
              <SocialBadge icon={<Instagram size={14} />} label="Instagram" href={PROFILE_DATA.social.instagram} />
              <SocialBadge icon={<span className="font-bold text-[10px]">Tik</span>} label="TikTok" href={PROFILE_DATA.social.tiktok} />
            </div>
          </div>
        </div>

        {/* Bio & Books Section inside the same card for unity */}
        <div className="mt-5 pt-4 border-t border-beige-100/60 relative z-10">
          <div className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans whitespace-pre-line mb-4">
            {PROFILE_DATA.bio}
          </div>

          {/* Books Section - Compact Horizontal List (No Links, Title Only) */}
          {PROFILE_DATA.books && PROFILE_DATA.books.length > 0 && (
            <div className="bg-beige-50/50 rounded-xl p-3 border border-beige-100/50">
              <h3 className="flex items-center gap-2 text-[10px] font-bold text-beige-800 uppercase tracking-widest mb-2">
                <Book size={12} className="text-beige-600" />
                <span>Books / Media</span>
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                {PROFILE_DATA.books.map((book, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 bg-white p-2 pr-3 rounded-lg border border-beige-100 shadow-sm min-w-[200px]"
                  >
                    {/* Book Cover - Pointer events disabled to ensure no clicking */}
                    <div className="w-12 h-16 bg-gray-100 rounded shadow-inner overflow-hidden shrink-0 relative pointer-events-none">
                       {book.imageUrl && (
                         <img 
                           src={book.imageUrl} 
                           alt={book.title} 
                           className="w-full h-full object-cover"
                           onError={(e) => {
                             // Fallback colors matching book description if image fails to load
                             // idx 0 (AI Book) -> Pink, idx 1 (God Book) -> Blue
                             const colors = idx === 0 ? 'fce7f3/db2777' : 'e0f2fe/0284c7'; 
                             const text = idx === 0 ? 'Pink' : 'Blue';
                             (e.target as HTMLImageElement).src = `https://placehold.co/150x200/${colors}?text=${text}`;
                           }}
                         />
                       )}
                    </div>
                    {/* Title - Pointer events disabled */}
                    <div className="flex-1 min-w-0 pointer-events-none">
                      <p className="text-xs font-bold text-gray-700 leading-tight line-clamp-2">
                        {book.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const SocialBadge: React.FC<{ icon: React.ReactNode, label: string, href: string }> = ({ icon, label, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-sm text-gray-500 hover:text-white hover:bg-beige-400 hover:shadow-md transition-all border border-beige-100 text-[10px] font-medium tracking-wide"
  >
    {icon}
    <span>{label}</span>
  </a>
);