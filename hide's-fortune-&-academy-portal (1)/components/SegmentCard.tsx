import React from 'react';
import { SegmentData } from '../types';
import { BenefitList } from './BenefitList';
import { ChevronRight, MousePointerClick } from 'lucide-react';

interface SegmentCardProps {
  data: SegmentData;
  isActive: boolean;
  onClick: () => void;
}

// Simple LINE logo SVG component
const LineIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 5C13.5 5 5 12.4 5 21.5c0 4.8 2.4 9.1 6.2 12.1-.3 1.1-2 7.7-2.3 8.7 0 0-.4 1.8 1 1.1 1.2-.6 7.4-4.8 10-6.6 2.7.7 5.6 1.1 8.5 1.1 10.5 0 19-7.4 19-16.5C43 12.4 34.5 5 24 5z" />
  </svg>
);

export const SegmentCard: React.FC<SegmentCardProps> = ({ data, isActive, onClick }) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl transition-all duration-500 border
        ${isActive ? 'shadow-xl ring-2 ring-beige-400 scale-[1.01]' : 'shadow-md hover:shadow-lg border-beige-100 opacity-95'}
        bg-white
      `}
    >
      {/* Header Band */}
      <div 
        className={`px-4 py-3 ${data.themeColor} border-b border-beige-100 flex justify-between items-center cursor-pointer`}
        onClick={onClick}
      >
        <div>
          <h2 className="text-base font-bold font-serif text-gray-800">{data.title}</h2>
          <span className="text-[10px] font-serif italic text-gray-500 tracking-widest">{data.subtitle}</span>
        </div>
        {isActive ? (
          <div className="w-2 h-2 rounded-full bg-beige-500 animate-pulse"></div>
        ) : (
          <ChevronRight size={16} className="text-gray-400" />
        )}
      </div>

      {/* Content Body */}
      <div className="p-4">
        <p className="text-xs text-gray-600 mb-4 leading-relaxed border-l-2 border-beige-300 pl-3">
          {data.description}
        </p>

        <div className="bg-beige-50/50 rounded-lg p-2 border border-beige-100/50">
           <h3 className="text-[10px] font-bold text-beige-600 text-center uppercase tracking-widest mb-1">- Member Benefits -</h3>
           <BenefitList benefits={data.benefits} colorClass={data.themeColor} />
        </div>
        
        <div className="mt-5 pt-2 border-t border-transparent">
           <a 
             href={data.lineUrl}
             target="_blank"
             rel="noopener noreferrer"
             className={`
               relative group w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold shadow-sm transition-all text-sm duration-300 overflow-hidden
               ${isActive 
                 ? 'bg-[#06c755] text-white shadow-lg shadow-green-200 scale-105 -translate-y-1' // Active style
                 : 'bg-white text-[#06c755] border-2 border-[#06c755] hover:bg-green-50 animate-gentle-bounce' // Inactive style (but still clickable)
               }
             `}
             onClick={() => {
               // Activate the card for visual feedback even when clicking the button
               if(!isActive) onClick();
             }}
           >
             {/* Shimmer Effect for Active State */}
             {isActive && (
               <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>
             )}

             {/* Always show LINE icon */}
             <LineIcon className={`w-6 h-6 z-20 ${isActive ? 'text-white' : 'text-[#06c755]'}`} />
             
             <span className="tracking-wide z-20 flex flex-col items-start leading-tight">
               <span className="text-[10px] opacity-90 font-normal">{isActive ? '期間限定プレゼント付き' : '特典を受け取る'}</span>
               <span className="text-sm">{isActive ? data.ctaText : "LINE登録して詳細を見る"}</span>
             </span>
             
             {isActive ? (
               <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 z-20 ml-auto" />
             ) : (
               <MousePointerClick className="w-5 h-5 z-20 ml-auto animate-pulse" />
             )}
           </a>
           
           <p className="text-[10px] text-center text-gray-400 mt-2 animate-fade-in-up">
             ※LINE友だち追加画面へ移動します
           </p>
        </div>
      </div>
    </div>
  );
};