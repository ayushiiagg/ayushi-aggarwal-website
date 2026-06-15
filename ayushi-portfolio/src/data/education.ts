import type { EducationEntry } from "@/data/types";

export const education: EducationEntry[] = [
  {
    id: 1,
    status: "ongoing",
    degree: "BBA with Business Analytics (IBM)",
    institution: "SRM University Delhi NCR",
    period: "2023 – 2027",
    year: "Second Year",
    cgpa: "8.5",
    specialisation: "Business Analytics with IBM Industry Collaboration",
    description:
      "Industry-integrated BBA program co-designed with IBM, combining core business management with cutting-edge data analytics. Focused on developing data-driven decision-making capabilities for modern enterprises.",
    outcomes: [
      "Applying Python, SQL & Tableau to real-world business datasets",
      "Building predictive models for business forecasting and strategy",
      "Analysing business intelligence dashboards using Power BI",
      "Collaborating on IBM-mentored capstone analytics projects",
      "Developing statistical reasoning and data storytelling skills",
    ],
    skills: ["Python", "SQL", "Tableau", "Power BI", "Statistics", "Business Strategy", "Excel"],
  },
  {
    id: 2,
    status: "completed",
    degree: "Business Analytics with Gen & Agentic AI",
    institution: "BITSom (BITS School of Management)",
    grade: "Distinction",
    specialisation: "Generative AI & Agentic AI for Business",
    description:
      "Intensive executive-style program at one of India's top management schools, focusing on the practical application of Generative and Agentic AI in enterprise business contexts.",
    outcomes: [
      "Mastered LLM prompt engineering for business automation",
      "Designed Agentic AI workflows for decision-making pipelines",
      "Built GenAI-powered analytics solutions for real business cases",
      "Explored AI ethics, governance, and responsible deployment",
      "Graduated with Distinction — top performance cohort",
    ],
    skills: ["Generative AI", "Agentic AI", "Prompt Engineering", "LLMs", "AI Governance", "Business Automation"],
  },
  {
    id: 3,
    status: "in-progress",
    degree: "AI and Data Science Program",
    institution: "IIHub – IIT Roorkee",
    specialisation: "Machine Learning, Deep Learning & Data Science Pipelines",
    description:
      "Advanced AI and Data Science program run by IIT Roorkee's Centre of Excellence (IIHub), covering the full spectrum from classical ML to modern deep learning architectures and production-grade data pipelines.",
    outcomes: [
      "Building and tuning ML models — regression, classification, clustering",
      "Implementing deep learning architectures with TensorFlow & PyTorch",
      "Designing end-to-end data science pipelines for production",
      "Working with NLP, computer vision, and multimodal AI models",
      "Applying AI to solve domain-specific business and research problems",
    ],
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Data Pipelines", "Python"],
  },
  {
    id: 4,
    status: "completed",
    degree: "Class XII (Senior Secondary) — CBSE",
    institution: "Mount Abu Public School, Delhi",
    period: "2021 – 2023",
    year: "Commerce Stream",
    grade: "89.6%",
    specialisation: "Commerce Stream",
    description:
      "Completed Class XII under the CBSE board at Mount Abu Public School, Delhi, with a strong foundation in commerce, business fundamentals, and analytical thinking that shaped my path toward business analytics and data-driven decision making.",
    outcomes: [
      "Studied Accountancy, Business Studies, Economics, and English Core",
      "Built quantitative and financial reasoning through commerce coursework",
      "Developed presentation, teamwork, and academic discipline",
      "Scored 89.6% overall in the CBSE Class XII board examination",
    ],
    skills: ["Accountancy", "Business Studies", "Economics", "Financial Literacy", "English", "Mathematics"],
  },
  {
    id: 5,
    status: "completed",
    degree: "Class X (Secondary) — CBSE",
    institution: "Mount Abu Public School, Delhi",
    period: "2019 – 2020",
    grade: "84%",
    specialisation: "CBSE Board Curriculum",
    description:
      "Completed Class X at Mount Abu Public School, Delhi under the CBSE board, establishing a solid academic base across sciences, mathematics, and languages before specialising in commerce at the senior secondary level.",
    outcomes: [
      "Completed CBSE Class X board examination with 84% overall",
      "Strengthened fundamentals in Mathematics, Science, and Social Science",
      "Participated in school academics with consistent performance",
      "Built early interest in analytical subjects and structured problem solving",
    ],
    skills: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Computer Applications"],
  },
];
