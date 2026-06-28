export type UserRole = 'USER' | 'MODERATOR' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type PricingType = 'FREE' | 'FREEMIUM' | 'PAID' | 'OPEN_SOURCE';

export interface Tool {
  id: string;
  slug: string;
  logo?: string;
  website?: string;
  sourceCode?: string;
  pricing: PricingType;
  isAI: boolean;
  isFeatured: boolean;
  isVerified: boolean;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ToolTranslation {
  id: string;
  language: string;
  name: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  toolId: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  slug: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryTranslation {
  id: string;
  language: string;
  name: string;
  description?: string;
  categoryId: string;
  createdAt: Date;
}

export type CPGEExam = 'CCINP' | 'MINES_PONTS' | 'CENTRALE_SUPELEC' | 'E3A_POLYTECH' | 'X_ENS';
export type CPGEFiliere = 'MP' | 'PC' | 'PSI' | 'PT' | 'TSI';

export interface CPGEResource {
  id: string;
  slug: string;
  exam: CPGEExam;
  filiere: CPGEFiliere;
  year: number;
  subject: string;
  testType?: string;
  toolId: string;
  fileUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comparison {
  id: string;
  userId: string;
  name?: string;
  items: ComparisonItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ComparisonItem {
  id: string;
  comparisonId: string;
  toolId: string;
  order: number;
}
