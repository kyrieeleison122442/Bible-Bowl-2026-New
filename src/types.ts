export interface Question {
  id: string;
  type: 'fitb' | 'mc' | 'tf' | 'short';
  question: string;
  answer: string;
  options?: string[];
  reference?: string;
  hint?: string;
}

export interface TabernacleTally {
  metal: 'gold' | 'silver' | 'bronze';
  talents: number;
  shekels: number;
  description: string;
  manCount?: number;
}

export interface LeaderboardEntry {
  name: string;
  correct: number;
  total: number;
  lastPlayed: number;
}

export interface GenealogyNode {
  name: string;
  notes?: string;
  age?: number;
  spouse?: string;
  children?: GenealogyNode[];
}
