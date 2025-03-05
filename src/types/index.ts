export interface TeamMember {
  name: string;
  title: string;
  description: string;
  expertise: string[];
  image: string;
  color: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  metrics: string[];
  stats?: {
    label: string;
    value: string;
    change: string;
  }[];
}
