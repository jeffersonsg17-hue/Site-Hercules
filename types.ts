
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  tag?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'A Desordem' | 'A Ordem' | 'A Vocação' | 'A Excelência';
  excerpt: string;
  date: string;
}

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  METHOD = 'method',
  BLOG = 'blog',
  QUIZ = 'quiz'
}
