import type { SkillCategory, SkillProficiency } from "@/data/types";

export const coreCompetencies: SkillProficiency[] = [
  { label: "Business Analytics", value: 90 },
  { label: "Generative AI", value: 80 },
  { label: "Data Science", value: 75 },
  { label: "Machine Learning", value: 85 },
];

export const technicalProficiency: SkillProficiency[] = [
  { label: "Python", value: 60 },
  { label: "GenAI", value: 75 },
  { label: "Analytics", value: 90 },
  { label: "ML/DL", value: 50 },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Business Analytics",
    color: "blue",
    skills: [
      "Data Analysis",
      "Business Intelligence",
      "Statistical Analysis",
      "Predictive Modeling",
      "Data Visualization",
    ],
  },
  {
    category: "AI & Machine Learning",
    color: "purple",
    skills: [
      "Generative AI",
      "Agentic AI",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
    ],
  },
  {
    category: "Tools & Technologies",
    color: "teal",
    skills: [
      "Python",
      "R",
      "SQL",
      "TensorFlow",
      "PyTorch",
      "Power BI",
      "Tableau",
      "Excel",
    ],
  },
  {
    category: "Frameworks & Libraries",
    color: "green",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "LangChain",
    ],
  },
  {
    category: "Soft Skills",
    color: "amber",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Communication",
      "Teamwork",
      "Adaptability",
    ],
  },
];

