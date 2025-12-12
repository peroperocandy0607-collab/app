import React from 'react';
import { Heart, BookOpen, Star, Sparkles, Video, Gift, Smartphone, UserCheck, Zap, Book } from 'lucide-react';

interface IconRendererProps {
  iconName: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ iconName, className }) => {
  const icons: Record<string, React.ReactNode> = {
    'heart': <Heart className={className} />,
    'book-open': <BookOpen className={className} />,
    'star': <Star className={className} />,
    'sparkles': <Sparkles className={className} />,
    'video': <Video className={className} />,
    'gift': <Gift className={className} />,
    'smartphone': <Smartphone className={className} />,
    'user-check': <UserCheck className={className} />,
    'zap': <Zap className={className} />,
    'book': <Book className={className} />,
  };

  return <>{icons[iconName] || <Star className={className} />}</>;
};