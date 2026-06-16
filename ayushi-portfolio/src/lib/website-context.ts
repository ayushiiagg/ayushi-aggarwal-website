import { certificates } from "@/data/certificates";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import {
  coreCompetencies,
  skillCategories,
  technicalProficiency,
} from "@/data/skills";
import { getSiteUrl } from "@/lib/site";

const SITE_PAGES = [
  { path: "/", label: "Home — About Ayushi, hero intro, stats, tech proficiency" },
  { path: "/education", label: "Education — Academic journey and programs" },
  { path: "/experience", label: "Experience — Internships and projects" },
  { path: "/skills", label: "Skills — Technical and soft skills breakdown" },
  { path: "/certifications", label: "Certifications — Verified credentials gallery" },
  { path: "/contact", label: "Contact — Email form and direct contact details" },
  { path: "/cv", label: "CV — Downloadable resume viewer" },
];

export function buildWebsiteContext(): string {
  const educationBlock = education
    .map(
      (e) =>
        `- ${e.degree} at ${e.institution}${e.period ? ` (${e.period})` : ""}${e.grade ? ` — Grade: ${e.grade}` : ""}${e.cgpa ? ` — CGPA: ${e.cgpa}` : ""} [${e.status}]
  Specialisation: ${e.specialisation ?? "N/A"}
  ${e.description}
  Outcomes: ${(e.outcomes ?? []).join("; ")}
  Skills: ${(e.skills ?? []).join(", ")}`
    )
    .join("\n");

  const experienceBlock = experience
    .map((e) => {
      const projects =
        e.projects
          ?.map(
            (p) =>
              `    Project: ${p.title} (${p.githubUrl ?? "no link"})
      Context: ${p.context}
      Action: ${p.action}
      Result: ${p.result}`
          )
          .join("\n") ?? "";

      return `- ${e.role} @ ${e.company} (${e.duration}, ${e.location}, ${e.type})
  Responsibilities: ${e.responsibilities.join("; ")}
  Tags: ${e.tags.join(", ")}
${projects}`;
    })
    .join("\n");

  const skillsBlock = skillCategories
    .map((c) => `- ${c.category}: ${c.skills.join(", ")}`)
    .join("\n");

  const certsBlock = certificates
    .map((c) => `- ${c.name} — ${c.issuer} (${c.date})`)
    .join("\n");

  const competencies = coreCompetencies
    .map((s) => `${s.label}: ${s.value}%`)
    .join(", ");

  const techProf = technicalProficiency
    .map((s) => `${s.label}: ${s.value}%`)
    .join(", ");

  const pages = SITE_PAGES.map((p) => `- ${p.path} → ${p.label}`).join("\n");

  return `
# Ayushi Aggarwal Portfolio — Knowledge Base

## Profile
- Name: Ayushi Aggarwal
- Title: Business Analytics & AI professional (student)
- Location: Delhi NCR, India
- Status: Open to internships and full-time opportunities
- Tagline: Second-year BBA student specializing in Business Analytics with IBM at SRM University Delhi NCR. Passionate about leveraging AI and data science to solve real-world business problems.
- Focus areas: Generative AI, Business Analytics, Data Science, Agentic AI, Machine Learning

## Contact & Social
- Email: aggarwalayushi545@gmail.com
- LinkedIn: https://www.linkedin.com/in/ayushi-aggarwal-bbb383257/
- GitHub: https://github.com/ayushiiagg
- Website: ${getSiteUrl()}
- Contact page: /contact (for job, internship, collaboration, mentorship inquiries)

## Site Navigation
${pages}

## Key Stats (Home page)
- 3+ academic programs (SRM · BITSom · IIT Roorkee)
- 4+ certifications (IBM · BITSom · IIT · more)
- IBM Generative AI internship completed
- Strong academic performance at SRM University Delhi NCR

## Education
${educationBlock}

## Experience & Internships
${experienceBlock}

## Skills
Core competencies: ${competencies}
Technical proficiency: ${techProf}

Categories:
${skillsBlock}

## Certifications
${certsBlock}

## AI Assistant Notes
- You are "Ayushi", the portfolio AI assistant on this website.
- Answer ONLY from this knowledge base. If information is missing, say so politely and suggest visiting the relevant page or the contact form.
- For hiring, internships, or collaborations, encourage users to use the Contact page or email directly.
`.trim();
}

export const AYUSHI_SYSTEM_PROMPT = `You are Ayushi, a friendly and professional AI assistant embedded on this portfolio website.

Your role:
- Answer questions about your education, skills, experience, certifications, projects, and how visitors can contact you.
- Stay concise (2–4 short paragraphs max unless the user asks for detail).
- Use a warm, recruiter-friendly tone.
- Never invent facts, dates, companies, or credentials not present in the context.
- If asked about topics unrelated to you or this website, politely redirect to portfolio-related topics.
- When users want to connect for opportunities, point them to the Contact page (/contact) or email aggarwalayushi545@gmail.com.

Website context:
`;
