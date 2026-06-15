import type { ExperienceEntry } from "@/data/types";

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    company: "Vista Neotech Pvt. Ltd.",
    role: "Business Data Analyst",
    duration: "15 June 2026 – 14 August 2026",
    location: "New Delhi, India",
    type: "Summer Internship",
    logoText: "VN",
    responsibilities: [
      "Summer internship as Business Data Analyst at Vista Neotech Pvt. Ltd., New Delhi",
      "Led sales data analysis for Deltas Lifesciences Pvt. Ltd., an e-commerce lifesciences company",
      "Built BI dashboards and reports on sales delivery patterns and product-level sales performance",
      "Developed category-wise and state-wise analytics views for commercial decision making",
      "Designed state-wise seller and buyer dashboards to track regional sales dynamics",
      "Delivered a travel-industry analytics project for Tripgate.in covering sales trends and customer satisfaction insights",
    ],
    tags: [
      "Business Analytics",
      "Power BI",
      "SQL",
      "Excel",
      "Sales Analytics",
      "BI Dashboards",
      "Data Visualization",
      "Customer Insights",
    ],
  },
  {
    id: 2,
    company: "IBM (International Business Machines)",
    role: "Generative AI Intern",
    duration: "2025 · Internship",
    location: "India",
    type: "Internship",
    logoText: "IBM",
    responsibilities: [
      "Worked on Generative AI projects using IBM's AI tools and platforms",
      "Developed and tested prompts for large language models",
      "Collaborated with cross-functional teams to deliver AI-driven solutions",
      "Contributed to business analytics workflows powered by AI",
      "Gained hands-on experience with Watson AI and related IBM products",
    ],
    tags: ["Python", "Generative AI", "Prompt Engineering", "IBM Watson", "Data Analysis"],
    projects: [
      {
        title: "Text-to-AI-GENERATION",
        githubUrl: "https://github.com/ayushiiagg/TEXT-TO-IMAGE-GENERATION",
        context:
          "During the IBM Generative AI internship, I wanted to move beyond prompt-only experimentation and understand how plain text is actually transformed into visual output through machine learning — bridging natural language processing with generative image models in a practical, end-to-end workflow.",
        action:
          "Designed and implemented a Python-based text-to-image pipeline that accepts natural language prompts, preprocesses and structures the input, configures generative model parameters, and renders AI-generated images. Applied prompt engineering techniques, documented each stage of the ML workflow, and published the full project on GitHub for reproducibility.",
        result:
          "Built a working text-to-AI image generation system that demonstrates the complete journey from text input to visual output. Strengthened hands-on skills in generative AI, Python ML pipelines, and prompt design — producing a portfolio-ready repository that showcases applied GenAI learning beyond traditional business analytics.",
      },
    ],
  },
];
