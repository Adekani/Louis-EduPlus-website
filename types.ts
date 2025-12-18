
export interface ServiceBlock {
  id: number;
  title: string;
  description: string;
  outcomes: string;
  cta: string;
  icon: string;
}

export interface Book {
  title: string;
  subtitle?: string;
  description: string;
  whyItMatters?: string;
  amazonLink?: string;
  status?: string;
}
