export interface Project {
  id: string;
  title: string;
  description: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100 for percentage bar
  category: 'programming' | 'webDev' | 'softSkills';
  icon: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface ServiceInterestItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
