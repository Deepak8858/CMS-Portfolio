// TypeScript definitions for the portfolio project

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  featured3D?: boolean;
  image?: string;
  category?: string;
  year?: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
};

// Add more types as needed
