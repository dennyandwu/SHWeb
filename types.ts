export interface Attraction {
  id: string;
  name: string;
  description: string;
  category: 'Modern' | 'History' | 'Art' | 'Nature' | 'Food';
  imageUrl: string;
  location: string;
}

export interface EssentialTip {
  id: string;
  title: string;
  icon: string;
  summary: string;
  details: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 'home' | 'attractions' | 'essentials' | 'ai-planner';