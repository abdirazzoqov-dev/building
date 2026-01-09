export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  rooms: number;
  area: number;
  image: string;
  type: 'apartment' | 'house' | 'studio';
  badge?: {
    text: string;
    color: 'primary' | 'secondary' | 'yellow' | 'green';
  };
}

export interface Building {
  id: string;
  name: string;
  location: string;
  startingPrice: number;
  image: string;
  status: 'delivered' | 'under_construction' | 'payment_plan';
  badge?: {
    text: string;
    color: 'primary' | 'green' | 'yellow';
  };
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'advice' | 'analysis' | 'guide';
  publishedAt: string;
}

export interface Partner {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Location {
  id: string;
  name: string;
  region?: string;
}

export type SearchTab = 'sotib' | 'ijara' | 'tijorat' | 'yangi';
export type MarketTab = 'secondary' | 'rent';

export interface MortgageCalculatorInputs {
  price: number;
  downPercent: number;
  termYears: number;
}

export interface MortgageCalculatorResult {
  monthlyPayment: number;
  loanAmount: number;
  downPayment: number;
}

