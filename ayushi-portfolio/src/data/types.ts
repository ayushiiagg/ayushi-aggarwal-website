export type EducationStatus = "ongoing" | "completed" | "in-progress";

export type EducationEntry = {
  id: number;
  status: EducationStatus;
  degree: string;
  institution: string;
  period?: string;
  year?: string;
  cgpa?: string;
  grade?: string;
  description: string;
  specialisation?: string;
  outcomes?: string[];
  skills?: string[];
};

export type ExperienceProject = {
  title: string;
  githubUrl: string;
  context: string;
  action: string;
  result: string;
};

export type ExperienceEntry = {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  logoText: string;
  responsibilities: string[];
  tags: string[];
  projects?: ExperienceProject[];
};

export type SkillProficiency = {
  label: string;
  value: number;
};

export type SkillCategory = {
  category: string;
  color: "blue" | "purple" | "teal" | "green" | "amber";
  skills: string[];
};

export type Certificate = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image?: string;
  pdf?: string;
};

