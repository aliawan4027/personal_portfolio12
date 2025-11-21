export type ProjectCategory = 'ai-ml' | 'web' | 'mobile' | 'academic';

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: ProjectCategory;
    githubUrl?: string;
    liveUrl?: string;
    isFeatured: boolean;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string;
    technologies: string[];
    current: boolean;
    certificateUrl?: string;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    period: string;
    description?: string;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    year?: string;
    type?: 'academic' | 'sport' | 'professional';
    assetUrl?: string;
}

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    year?: string;
    category?: 'seo' | 'development' | 'ai-ml' | 'other';
    assetUrl?: string;
}

export interface Publication {
    id: string;
    title: string;
    venue: string;
    year: string;
    description?: string;
    link?: string;
}

export interface Skill {
    id: string;
    name: string;
    level?: number; // 1-100 for proficiency
    icon?: string;
}

export interface SkillCategory {
    id: string;
    name: string;
    description?: string;
    skills: Skill[];
}
