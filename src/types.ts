export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: string; // Used to dynamically map Lucide icons
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'me' | 'audiovisual' | 'maintenance' | 'all';
  categoryLabel: string;
  description: string;
  location: string;
  year: string;
  solutions: string[];
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceInterest: string;
  message: string;
  createdAt: string;
}
