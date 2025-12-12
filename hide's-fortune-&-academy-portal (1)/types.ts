export enum UserSegment {
  SEEKER = 'SEEKER',   // Wants a reading
  LEARNER = 'LEARNER'  // Wants to learn
}

export interface BenefitItem {
  icon: string;
  text: string;
  subtext?: string;
  caption?: string; // Added for small text appearing above the main text (e.g. "Amazon発売中")
  isRecommended?: boolean; // Added for highlighting specific benefits
}

export interface Book {
  title: string;
  url: string; // Kept for type compatibility, but will be ignored in UI
  imageUrl?: string;
}

export interface SegmentData {
  id: UserSegment;
  title: string;
  subtitle: string;
  description: string;
  benefits: BenefitItem[];
  ctaText: string;
  themeColor: string;
  lineUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}