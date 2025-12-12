import React from 'react';
import { BenefitItem } from '../types';
import { IconRenderer } from './IconRenderer';

interface BenefitListProps {
  benefits: BenefitItem[];
  colorClass: string;
}

export const BenefitList: React.FC<BenefitListProps> = ({ benefits, colorClass }) => {
  return (
    <div className="space-y-3 mt-4">
      {benefits.map((benefit, index) => (
        <div 
          key={index} 
          className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${benefit.isRecommended ? 'bg-yellow-50/80 ring-1 ring-yellow-200' : 'hover:bg-white/60'}`}
        >
          <div className={`p-2 rounded-full bg-white shadow-sm text-gray-600 mt-1 relative`}>
            <IconRenderer iconName={benefit.icon} className={`w-4 h-4 ${benefit.isRecommended ? 'text-yellow-600' : ''}`} />
          </div>
          <div className="flex-1 min-w-0">
            {/* Caption Text (Upper small text) */}
            {benefit.caption && (
              <p className="text-[10px] font-bold text-orange-600 mb-0.5 tracking-tight leading-none">
                {benefit.caption}
              </p>
            )}
            
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-sm font-bold text-gray-700 font-serif leading-tight">
                {benefit.text}
              </p>
              {benefit.isRecommended && (
                <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded shadow-sm font-sans font-bold animate-pulse shrink-0">
                  おすすめ
                </span>
              )}
            </div>
            
            {benefit.subtext && (
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                {benefit.subtext}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};